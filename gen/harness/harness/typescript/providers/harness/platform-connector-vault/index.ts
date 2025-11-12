// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#access_type PlatformConnectorVault#access_type}
  */
  readonly accessType?: string;
  /**
  * ID of App Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#app_role_id PlatformConnectorVault#app_role_id}
  */
  readonly appRoleId?: string;
  /**
  * Authentication token for Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#auth_token PlatformConnectorVault#auth_token}
  */
  readonly authToken?: string;
  /**
  * AWS region where the AWS IAM authentication will happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#aws_region PlatformConnectorVault#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Location of the Vault directory where the secret will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#base_path PlatformConnectorVault#base_path}
  */
  readonly basePath?: string;
  /**
  * Is default or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#default PlatformConnectorVault#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * List of Delegate Selectors that belong to the same Delegate and are used to connect to the Secret Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#delegate_selectors PlatformConnectorVault#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#description PlatformConnectorVault#description}
  */
  readonly description?: string;
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#execute_on_delegate PlatformConnectorVault#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#id PlatformConnectorVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#identifier PlatformConnectorVault#identifier}
  */
  readonly identifier: string;
  /**
  * Is default or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#is_default PlatformConnectorVault#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Read only or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#is_read_only PlatformConnectorVault#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The path where Kubernetes Auth is enabled in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#k8s_auth_endpoint PlatformConnectorVault#k8s_auth_endpoint}
  */
  readonly k8SAuthEndpoint?: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#name PlatformConnectorVault#name}
  */
  readonly name: string;
  /**
  * Vault namespace where the Secret will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#namespace PlatformConnectorVault#namespace}
  */
  readonly namespace?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#org_id PlatformConnectorVault#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#project_id PlatformConnectorVault#project_id}
  */
  readonly projectId?: string;
  /**
  * Read only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#read_only PlatformConnectorVault#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Boolean value to indicate if AppRole token renewal is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#renew_app_role_token PlatformConnectorVault#renew_app_role_token}
  */
  readonly renewAppRoleToken?: boolean | cdktf.IResolvable;
  /**
  * The time interval for the token renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#renewal_interval_minutes PlatformConnectorVault#renewal_interval_minutes}
  */
  readonly renewalIntervalMinutes: number;
  /**
  * Manually entered Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#secret_engine_manually_configured PlatformConnectorVault#secret_engine_manually_configured}
  */
  readonly secretEngineManuallyConfigured?: boolean | cdktf.IResolvable;
  /**
  * Name of the Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#secret_engine_name PlatformConnectorVault#secret_engine_name}
  */
  readonly secretEngineName?: string;
  /**
  * Version of Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#secret_engine_version PlatformConnectorVault#secret_engine_version}
  */
  readonly secretEngineVersion?: number;
  /**
  * ID of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#secret_id PlatformConnectorVault#secret_id}
  */
  readonly secretId?: string;
  /**
  * The Service Account token path in the K8s pod where the token is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#service_account_token_path PlatformConnectorVault#service_account_token_path}
  */
  readonly serviceAccountTokenPath?: string;
  /**
  * The location from which the authentication token should be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#sink_path PlatformConnectorVault#sink_path}
  */
  readonly sinkPath?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#tags PlatformConnectorVault#tags}
  */
  readonly tags?: string[];
  /**
  * Boolean value to indicate if AWS IAM is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#use_aws_iam PlatformConnectorVault#use_aws_iam}
  */
  readonly useAwsIam?: boolean | cdktf.IResolvable;
  /**
  * Boolean value to indicate if JWT is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#use_jwt_auth PlatformConnectorVault#use_jwt_auth}
  */
  readonly useJwtAuth?: boolean | cdktf.IResolvable;
  /**
  * Boolean value to indicate if K8s Auth is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#use_k8s_auth PlatformConnectorVault#use_k8s_auth}
  */
  readonly useK8SAuth?: boolean | cdktf.IResolvable;
  /**
  * Boolean value to indicate if Vault Agent is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#use_vault_agent PlatformConnectorVault#use_vault_agent}
  */
  readonly useVaultAgent?: boolean | cdktf.IResolvable;
  /**
  * The Vault role defined to bind to aws iam account/role being accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#vault_aws_iam_role PlatformConnectorVault#vault_aws_iam_role}
  */
  readonly vaultAwsIamRole?: string;
  /**
  * Custom path at with JWT auth in enabled for Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#vault_jwt_auth_path PlatformConnectorVault#vault_jwt_auth_path}
  */
  readonly vaultJwtAuthPath?: string;
  /**
  * The Vault role defined with JWT auth type for accessing Vault as per policies binded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#vault_jwt_auth_role PlatformConnectorVault#vault_jwt_auth_role}
  */
  readonly vaultJwtAuthRole?: string;
  /**
  * The role where K8s Auth will happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#vault_k8s_auth_role PlatformConnectorVault#vault_k8s_auth_role}
  */
  readonly vaultK8SAuthRole?: string;
  /**
  * URL of the HashiCorp Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#vault_url PlatformConnectorVault#vault_url}
  */
  readonly vaultUrl: string;
  /**
  * The AWS IAM Header Server ID that has been configured for this AWS IAM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#xvault_aws_iam_server_id PlatformConnectorVault#xvault_aws_iam_server_id}
  */
  readonly xvaultAwsIamServerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault harness_platform_connector_vault}
*/
export class PlatformConnectorVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorVault to import
  * @param importFromId The id of the existing PlatformConnectorVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_vault harness_platform_connector_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorVaultConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_vault',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._appRoleId = config.appRoleId;
    this._authToken = config.authToken;
    this._awsRegion = config.awsRegion;
    this._basePath = config.basePath;
    this._default = config.default;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._id = config.id;
    this._identifier = config.identifier;
    this._isDefault = config.isDefault;
    this._isReadOnly = config.isReadOnly;
    this._k8SAuthEndpoint = config.k8SAuthEndpoint;
    this._name = config.name;
    this._namespace = config.namespace;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._readOnly = config.readOnly;
    this._renewAppRoleToken = config.renewAppRoleToken;
    this._renewalIntervalMinutes = config.renewalIntervalMinutes;
    this._secretEngineManuallyConfigured = config.secretEngineManuallyConfigured;
    this._secretEngineName = config.secretEngineName;
    this._secretEngineVersion = config.secretEngineVersion;
    this._secretId = config.secretId;
    this._serviceAccountTokenPath = config.serviceAccountTokenPath;
    this._sinkPath = config.sinkPath;
    this._tags = config.tags;
    this._useAwsIam = config.useAwsIam;
    this._useJwtAuth = config.useJwtAuth;
    this._useK8SAuth = config.useK8SAuth;
    this._useVaultAgent = config.useVaultAgent;
    this._vaultAwsIamRole = config.vaultAwsIamRole;
    this._vaultJwtAuthPath = config.vaultJwtAuthPath;
    this._vaultJwtAuthRole = config.vaultJwtAuthRole;
    this._vaultK8SAuthRole = config.vaultK8SAuthRole;
    this._vaultUrl = config.vaultUrl;
    this._xvaultAwsIamServerId = config.xvaultAwsIamServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // app_role_id - computed: false, optional: true, required: false
  private _appRoleId?: string; 
  public get appRoleId() {
    return this.getStringAttribute('app_role_id');
  }
  public set appRoleId(value: string) {
    this._appRoleId = value;
  }
  public resetAppRoleId() {
    this._appRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleIdInput() {
    return this._appRoleId;
  }

  // auth_token - computed: true, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // k8s_auth_endpoint - computed: false, optional: true, required: false
  private _k8SAuthEndpoint?: string; 
  public get k8SAuthEndpoint() {
    return this.getStringAttribute('k8s_auth_endpoint');
  }
  public set k8SAuthEndpoint(value: string) {
    this._k8SAuthEndpoint = value;
  }
  public resetK8SAuthEndpoint() {
    this._k8SAuthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SAuthEndpointInput() {
    return this._k8SAuthEndpoint;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // renew_app_role_token - computed: true, optional: true, required: false
  private _renewAppRoleToken?: boolean | cdktf.IResolvable; 
  public get renewAppRoleToken() {
    return this.getBooleanAttribute('renew_app_role_token');
  }
  public set renewAppRoleToken(value: boolean | cdktf.IResolvable) {
    this._renewAppRoleToken = value;
  }
  public resetRenewAppRoleToken() {
    this._renewAppRoleToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewAppRoleTokenInput() {
    return this._renewAppRoleToken;
  }

  // renewal_interval_minutes - computed: false, optional: false, required: true
  private _renewalIntervalMinutes?: number; 
  public get renewalIntervalMinutes() {
    return this.getNumberAttribute('renewal_interval_minutes');
  }
  public set renewalIntervalMinutes(value: number) {
    this._renewalIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalIntervalMinutesInput() {
    return this._renewalIntervalMinutes;
  }

  // secret_engine_manually_configured - computed: false, optional: true, required: false
  private _secretEngineManuallyConfigured?: boolean | cdktf.IResolvable; 
  public get secretEngineManuallyConfigured() {
    return this.getBooleanAttribute('secret_engine_manually_configured');
  }
  public set secretEngineManuallyConfigured(value: boolean | cdktf.IResolvable) {
    this._secretEngineManuallyConfigured = value;
  }
  public resetSecretEngineManuallyConfigured() {
    this._secretEngineManuallyConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEngineManuallyConfiguredInput() {
    return this._secretEngineManuallyConfigured;
  }

  // secret_engine_name - computed: false, optional: true, required: false
  private _secretEngineName?: string; 
  public get secretEngineName() {
    return this.getStringAttribute('secret_engine_name');
  }
  public set secretEngineName(value: string) {
    this._secretEngineName = value;
  }
  public resetSecretEngineName() {
    this._secretEngineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEngineNameInput() {
    return this._secretEngineName;
  }

  // secret_engine_version - computed: false, optional: true, required: false
  private _secretEngineVersion?: number; 
  public get secretEngineVersion() {
    return this.getNumberAttribute('secret_engine_version');
  }
  public set secretEngineVersion(value: number) {
    this._secretEngineVersion = value;
  }
  public resetSecretEngineVersion() {
    this._secretEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEngineVersionInput() {
    return this._secretEngineVersion;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // service_account_token_path - computed: false, optional: true, required: false
  private _serviceAccountTokenPath?: string; 
  public get serviceAccountTokenPath() {
    return this.getStringAttribute('service_account_token_path');
  }
  public set serviceAccountTokenPath(value: string) {
    this._serviceAccountTokenPath = value;
  }
  public resetServiceAccountTokenPath() {
    this._serviceAccountTokenPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenPathInput() {
    return this._serviceAccountTokenPath;
  }

  // sink_path - computed: false, optional: true, required: false
  private _sinkPath?: string; 
  public get sinkPath() {
    return this.getStringAttribute('sink_path');
  }
  public set sinkPath(value: string) {
    this._sinkPath = value;
  }
  public resetSinkPath() {
    this._sinkPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkPathInput() {
    return this._sinkPath;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_aws_iam - computed: false, optional: true, required: false
  private _useAwsIam?: boolean | cdktf.IResolvable; 
  public get useAwsIam() {
    return this.getBooleanAttribute('use_aws_iam');
  }
  public set useAwsIam(value: boolean | cdktf.IResolvable) {
    this._useAwsIam = value;
  }
  public resetUseAwsIam() {
    this._useAwsIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsIamInput() {
    return this._useAwsIam;
  }

  // use_jwt_auth - computed: false, optional: true, required: false
  private _useJwtAuth?: boolean | cdktf.IResolvable; 
  public get useJwtAuth() {
    return this.getBooleanAttribute('use_jwt_auth');
  }
  public set useJwtAuth(value: boolean | cdktf.IResolvable) {
    this._useJwtAuth = value;
  }
  public resetUseJwtAuth() {
    this._useJwtAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useJwtAuthInput() {
    return this._useJwtAuth;
  }

  // use_k8s_auth - computed: false, optional: true, required: false
  private _useK8SAuth?: boolean | cdktf.IResolvable; 
  public get useK8SAuth() {
    return this.getBooleanAttribute('use_k8s_auth');
  }
  public set useK8SAuth(value: boolean | cdktf.IResolvable) {
    this._useK8SAuth = value;
  }
  public resetUseK8SAuth() {
    this._useK8SAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useK8SAuthInput() {
    return this._useK8SAuth;
  }

  // use_vault_agent - computed: false, optional: true, required: false
  private _useVaultAgent?: boolean | cdktf.IResolvable; 
  public get useVaultAgent() {
    return this.getBooleanAttribute('use_vault_agent');
  }
  public set useVaultAgent(value: boolean | cdktf.IResolvable) {
    this._useVaultAgent = value;
  }
  public resetUseVaultAgent() {
    this._useVaultAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVaultAgentInput() {
    return this._useVaultAgent;
  }

  // vault_aws_iam_role - computed: false, optional: true, required: false
  private _vaultAwsIamRole?: string; 
  public get vaultAwsIamRole() {
    return this.getStringAttribute('vault_aws_iam_role');
  }
  public set vaultAwsIamRole(value: string) {
    this._vaultAwsIamRole = value;
  }
  public resetVaultAwsIamRole() {
    this._vaultAwsIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsIamRoleInput() {
    return this._vaultAwsIamRole;
  }

  // vault_jwt_auth_path - computed: false, optional: true, required: false
  private _vaultJwtAuthPath?: string; 
  public get vaultJwtAuthPath() {
    return this.getStringAttribute('vault_jwt_auth_path');
  }
  public set vaultJwtAuthPath(value: string) {
    this._vaultJwtAuthPath = value;
  }
  public resetVaultJwtAuthPath() {
    this._vaultJwtAuthPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultJwtAuthPathInput() {
    return this._vaultJwtAuthPath;
  }

  // vault_jwt_auth_role - computed: false, optional: true, required: false
  private _vaultJwtAuthRole?: string; 
  public get vaultJwtAuthRole() {
    return this.getStringAttribute('vault_jwt_auth_role');
  }
  public set vaultJwtAuthRole(value: string) {
    this._vaultJwtAuthRole = value;
  }
  public resetVaultJwtAuthRole() {
    this._vaultJwtAuthRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultJwtAuthRoleInput() {
    return this._vaultJwtAuthRole;
  }

  // vault_k8s_auth_role - computed: false, optional: true, required: false
  private _vaultK8SAuthRole?: string; 
  public get vaultK8SAuthRole() {
    return this.getStringAttribute('vault_k8s_auth_role');
  }
  public set vaultK8SAuthRole(value: string) {
    this._vaultK8SAuthRole = value;
  }
  public resetVaultK8SAuthRole() {
    this._vaultK8SAuthRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultK8SAuthRoleInput() {
    return this._vaultK8SAuthRole;
  }

  // vault_url - computed: false, optional: false, required: true
  private _vaultUrl?: string; 
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }
  public set vaultUrl(value: string) {
    this._vaultUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUrlInput() {
    return this._vaultUrl;
  }

  // xvault_aws_iam_server_id - computed: false, optional: true, required: false
  private _xvaultAwsIamServerId?: string; 
  public get xvaultAwsIamServerId() {
    return this.getStringAttribute('xvault_aws_iam_server_id');
  }
  public set xvaultAwsIamServerId(value: string) {
    this._xvaultAwsIamServerId = value;
  }
  public resetXvaultAwsIamServerId() {
    this._xvaultAwsIamServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xvaultAwsIamServerIdInput() {
    return this._xvaultAwsIamServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      app_role_id: cdktf.stringToTerraform(this._appRoleId),
      auth_token: cdktf.stringToTerraform(this._authToken),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      base_path: cdktf.stringToTerraform(this._basePath),
      default: cdktf.booleanToTerraform(this._default),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      k8s_auth_endpoint: cdktf.stringToTerraform(this._k8SAuthEndpoint),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      renew_app_role_token: cdktf.booleanToTerraform(this._renewAppRoleToken),
      renewal_interval_minutes: cdktf.numberToTerraform(this._renewalIntervalMinutes),
      secret_engine_manually_configured: cdktf.booleanToTerraform(this._secretEngineManuallyConfigured),
      secret_engine_name: cdktf.stringToTerraform(this._secretEngineName),
      secret_engine_version: cdktf.numberToTerraform(this._secretEngineVersion),
      secret_id: cdktf.stringToTerraform(this._secretId),
      service_account_token_path: cdktf.stringToTerraform(this._serviceAccountTokenPath),
      sink_path: cdktf.stringToTerraform(this._sinkPath),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_aws_iam: cdktf.booleanToTerraform(this._useAwsIam),
      use_jwt_auth: cdktf.booleanToTerraform(this._useJwtAuth),
      use_k8s_auth: cdktf.booleanToTerraform(this._useK8SAuth),
      use_vault_agent: cdktf.booleanToTerraform(this._useVaultAgent),
      vault_aws_iam_role: cdktf.stringToTerraform(this._vaultAwsIamRole),
      vault_jwt_auth_path: cdktf.stringToTerraform(this._vaultJwtAuthPath),
      vault_jwt_auth_role: cdktf.stringToTerraform(this._vaultJwtAuthRole),
      vault_k8s_auth_role: cdktf.stringToTerraform(this._vaultK8SAuthRole),
      vault_url: cdktf.stringToTerraform(this._vaultUrl),
      xvault_aws_iam_server_id: cdktf.stringToTerraform(this._xvaultAwsIamServerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_role_id: {
        value: cdktf.stringToHclTerraform(this._appRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_auth_endpoint: {
        value: cdktf.stringToHclTerraform(this._k8SAuthEndpoint),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      renew_app_role_token: {
        value: cdktf.booleanToHclTerraform(this._renewAppRoleToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      renewal_interval_minutes: {
        value: cdktf.numberToHclTerraform(this._renewalIntervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_engine_manually_configured: {
        value: cdktf.booleanToHclTerraform(this._secretEngineManuallyConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_engine_name: {
        value: cdktf.stringToHclTerraform(this._secretEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_engine_version: {
        value: cdktf.numberToHclTerraform(this._secretEngineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_token_path: {
        value: cdktf.stringToHclTerraform(this._serviceAccountTokenPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sink_path: {
        value: cdktf.stringToHclTerraform(this._sinkPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_aws_iam: {
        value: cdktf.booleanToHclTerraform(this._useAwsIam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_jwt_auth: {
        value: cdktf.booleanToHclTerraform(this._useJwtAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_k8s_auth: {
        value: cdktf.booleanToHclTerraform(this._useK8SAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_vault_agent: {
        value: cdktf.booleanToHclTerraform(this._useVaultAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_aws_iam_role: {
        value: cdktf.stringToHclTerraform(this._vaultAwsIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_jwt_auth_path: {
        value: cdktf.stringToHclTerraform(this._vaultJwtAuthPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_jwt_auth_role: {
        value: cdktf.stringToHclTerraform(this._vaultJwtAuthRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_k8s_auth_role: {
        value: cdktf.stringToHclTerraform(this._vaultK8SAuthRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_url: {
        value: cdktf.stringToHclTerraform(this._vaultUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xvault_aws_iam_server_id: {
        value: cdktf.stringToHclTerraform(this._xvaultAwsIamServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
