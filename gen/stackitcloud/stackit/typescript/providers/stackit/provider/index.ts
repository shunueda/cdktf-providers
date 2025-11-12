// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackitProviderConfig {
  /**
  * Custom endpoint for the Membership service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#authorization_custom_endpoint StackitProvider#authorization_custom_endpoint}
  */
  readonly authorizationCustomEndpoint?: string;
  /**
  * Custom endpoint for the CDN service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#cdn_custom_endpoint StackitProvider#cdn_custom_endpoint}
  */
  readonly cdnCustomEndpoint?: string;
  /**
  * Path of JSON from where the credentials are read. Takes precedence over the env var `STACKIT_CREDENTIALS_PATH`. Default value is `~/.stackit/credentials.json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#credentials_path StackitProvider#credentials_path}
  */
  readonly credentialsPath?: string;
  /**
  * Region will be used as the default location for regional services. Not all services require a region, some are global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#default_region StackitProvider#default_region}
  */
  readonly defaultRegion?: string;
  /**
  * Custom endpoint for the DNS service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#dns_custom_endpoint StackitProvider#dns_custom_endpoint}
  */
  readonly dnsCustomEndpoint?: string;
  /**
  * Enable beta resources. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#enable_beta_resources StackitProvider#enable_beta_resources}
  */
  readonly enableBetaResources?: boolean | cdktf.IResolvable;
  /**
  * Enables experiments. These are unstable features without official support. More information can be found in the README. Available Experiments: iam, routing-tables, network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#experiments StackitProvider#experiments}
  */
  readonly experiments?: string[];
  /**
  * Custom endpoint for the Git service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#git_custom_endpoint StackitProvider#git_custom_endpoint}
  */
  readonly gitCustomEndpoint?: string;
  /**
  * Custom endpoint for the IaaS service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#iaas_custom_endpoint StackitProvider#iaas_custom_endpoint}
  */
  readonly iaasCustomEndpoint?: string;
  /**
  * Custom endpoint for the Load Balancer service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#loadbalancer_custom_endpoint StackitProvider#loadbalancer_custom_endpoint}
  */
  readonly loadbalancerCustomEndpoint?: string;
  /**
  * Custom endpoint for the LogMe service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#logme_custom_endpoint StackitProvider#logme_custom_endpoint}
  */
  readonly logmeCustomEndpoint?: string;
  /**
  * Custom endpoint for the MariaDB service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#mariadb_custom_endpoint StackitProvider#mariadb_custom_endpoint}
  */
  readonly mariadbCustomEndpoint?: string;
  /**
  * Custom endpoint for the AI Model Serving service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#modelserving_custom_endpoint StackitProvider#modelserving_custom_endpoint}
  */
  readonly modelservingCustomEndpoint?: string;
  /**
  * Custom endpoint for the MongoDB Flex service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#mongodbflex_custom_endpoint StackitProvider#mongodbflex_custom_endpoint}
  */
  readonly mongodbflexCustomEndpoint?: string;
  /**
  * Custom endpoint for the Object Storage service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#objectstorage_custom_endpoint StackitProvider#objectstorage_custom_endpoint}
  */
  readonly objectstorageCustomEndpoint?: string;
  /**
  * Custom endpoint for the Observability service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#observability_custom_endpoint StackitProvider#observability_custom_endpoint}
  */
  readonly observabilityCustomEndpoint?: string;
  /**
  * Custom endpoint for the OpenSearch service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#opensearch_custom_endpoint StackitProvider#opensearch_custom_endpoint}
  */
  readonly opensearchCustomEndpoint?: string;
  /**
  * Custom endpoint for the PostgresFlex service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#postgresflex_custom_endpoint StackitProvider#postgresflex_custom_endpoint}
  */
  readonly postgresflexCustomEndpoint?: string;
  /**
  * Private RSA key used for authentication, relevant for the key flow. It takes precedence over the private key that is included in the service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#private_key StackitProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Path for the private RSA key used for authentication, relevant for the key flow. It takes precedence over the private key that is included in the service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#private_key_path StackitProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Custom endpoint for the RabbitMQ service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#rabbitmq_custom_endpoint StackitProvider#rabbitmq_custom_endpoint}
  */
  readonly rabbitmqCustomEndpoint?: string;
  /**
  * Custom endpoint for the Redis service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#redis_custom_endpoint StackitProvider#redis_custom_endpoint}
  */
  readonly redisCustomEndpoint?: string;
  /**
  * Region will be used as the default location for regional services. Not all services require a region, some are global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#region StackitProvider#region}
  */
  readonly region?: string;
  /**
  * Custom endpoint for the Resource Manager service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#resourcemanager_custom_endpoint StackitProvider#resourcemanager_custom_endpoint}
  */
  readonly resourcemanagerCustomEndpoint?: string;
  /**
  * Custom endpoint for the Cloud Foundry (SCF) service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#scf_custom_endpoint StackitProvider#scf_custom_endpoint}
  */
  readonly scfCustomEndpoint?: string;
  /**
  * Custom endpoint for the Secrets Manager service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#secretsmanager_custom_endpoint StackitProvider#secretsmanager_custom_endpoint}
  */
  readonly secretsmanagerCustomEndpoint?: string;
  /**
  * Custom endpoint for the Server Backup service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#server_backup_custom_endpoint StackitProvider#server_backup_custom_endpoint}
  */
  readonly serverBackupCustomEndpoint?: string;
  /**
  * Custom endpoint for the Server Update service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#server_update_custom_endpoint StackitProvider#server_update_custom_endpoint}
  */
  readonly serverUpdateCustomEndpoint?: string;
  /**
  * Custom endpoint for the Service Account service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_account_custom_endpoint StackitProvider#service_account_custom_endpoint}
  */
  readonly serviceAccountCustomEndpoint?: string;
  /**
  * Service account email. It can also be set using the environment variable STACKIT_SERVICE_ACCOUNT_EMAIL. It is required if you want to use the resource manager project resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_account_email StackitProvider#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Service account key used for authentication. If set, the key flow will be used to authenticate all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_account_key StackitProvider#service_account_key}
  */
  readonly serviceAccountKey?: string;
  /**
  * Path for the service account key used for authentication. If set, the key flow will be used to authenticate all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_account_key_path StackitProvider#service_account_key_path}
  */
  readonly serviceAccountKeyPath?: string;
  /**
  * Token used for authentication. If set, the token flow will be used to authenticate all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_account_token StackitProvider#service_account_token}
  */
  readonly serviceAccountToken?: string;
  /**
  * Custom endpoint for the Service Enablement API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#service_enablement_custom_endpoint StackitProvider#service_enablement_custom_endpoint}
  */
  readonly serviceEnablementCustomEndpoint?: string;
  /**
  * Custom endpoint for the Kubernetes Engine (SKE) service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#ske_custom_endpoint StackitProvider#ske_custom_endpoint}
  */
  readonly skeCustomEndpoint?: string;
  /**
  * Custom endpoint for the SQL Server Flex service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#sqlserverflex_custom_endpoint StackitProvider#sqlserverflex_custom_endpoint}
  */
  readonly sqlserverflexCustomEndpoint?: string;
  /**
  * Custom endpoint for the token API, which is used to request access tokens when using the key flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#token_custom_endpoint StackitProvider#token_custom_endpoint}
  */
  readonly tokenCustomEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#alias StackitProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs stackit}
*/
export class StackitProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackitProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackitProvider to import
  * @param importFromId The id of the existing StackitProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackitProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs stackit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackitProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StackitProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'stackit',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0',
        providerVersionConstraint: '0.69.0'
      },
      terraformProviderSource: 'stackitcloud/stackit'
    });
    this._authorizationCustomEndpoint = config.authorizationCustomEndpoint;
    this._cdnCustomEndpoint = config.cdnCustomEndpoint;
    this._credentialsPath = config.credentialsPath;
    this._defaultRegion = config.defaultRegion;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._enableBetaResources = config.enableBetaResources;
    this._experiments = config.experiments;
    this._gitCustomEndpoint = config.gitCustomEndpoint;
    this._iaasCustomEndpoint = config.iaasCustomEndpoint;
    this._loadbalancerCustomEndpoint = config.loadbalancerCustomEndpoint;
    this._logmeCustomEndpoint = config.logmeCustomEndpoint;
    this._mariadbCustomEndpoint = config.mariadbCustomEndpoint;
    this._modelservingCustomEndpoint = config.modelservingCustomEndpoint;
    this._mongodbflexCustomEndpoint = config.mongodbflexCustomEndpoint;
    this._objectstorageCustomEndpoint = config.objectstorageCustomEndpoint;
    this._observabilityCustomEndpoint = config.observabilityCustomEndpoint;
    this._opensearchCustomEndpoint = config.opensearchCustomEndpoint;
    this._postgresflexCustomEndpoint = config.postgresflexCustomEndpoint;
    this._privateKey = config.privateKey;
    this._privateKeyPath = config.privateKeyPath;
    this._rabbitmqCustomEndpoint = config.rabbitmqCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._resourcemanagerCustomEndpoint = config.resourcemanagerCustomEndpoint;
    this._scfCustomEndpoint = config.scfCustomEndpoint;
    this._secretsmanagerCustomEndpoint = config.secretsmanagerCustomEndpoint;
    this._serverBackupCustomEndpoint = config.serverBackupCustomEndpoint;
    this._serverUpdateCustomEndpoint = config.serverUpdateCustomEndpoint;
    this._serviceAccountCustomEndpoint = config.serviceAccountCustomEndpoint;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._serviceAccountKey = config.serviceAccountKey;
    this._serviceAccountKeyPath = config.serviceAccountKeyPath;
    this._serviceAccountToken = config.serviceAccountToken;
    this._serviceEnablementCustomEndpoint = config.serviceEnablementCustomEndpoint;
    this._skeCustomEndpoint = config.skeCustomEndpoint;
    this._sqlserverflexCustomEndpoint = config.sqlserverflexCustomEndpoint;
    this._tokenCustomEndpoint = config.tokenCustomEndpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_custom_endpoint - computed: false, optional: true, required: false
  private _authorizationCustomEndpoint?: string; 
  public get authorizationCustomEndpoint() {
    return this._authorizationCustomEndpoint;
  }
  public set authorizationCustomEndpoint(value: string | undefined) {
    this._authorizationCustomEndpoint = value;
  }
  public resetAuthorizationCustomEndpoint() {
    this._authorizationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCustomEndpointInput() {
    return this._authorizationCustomEndpoint;
  }

  // cdn_custom_endpoint - computed: false, optional: true, required: false
  private _cdnCustomEndpoint?: string; 
  public get cdnCustomEndpoint() {
    return this._cdnCustomEndpoint;
  }
  public set cdnCustomEndpoint(value: string | undefined) {
    this._cdnCustomEndpoint = value;
  }
  public resetCdnCustomEndpoint() {
    this._cdnCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnCustomEndpointInput() {
    return this._cdnCustomEndpoint;
  }

  // credentials_path - computed: false, optional: true, required: false
  private _credentialsPath?: string; 
  public get credentialsPath() {
    return this._credentialsPath;
  }
  public set credentialsPath(value: string | undefined) {
    this._credentialsPath = value;
  }
  public resetCredentialsPath() {
    this._credentialsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsPathInput() {
    return this._credentialsPath;
  }

  // default_region - computed: false, optional: true, required: false
  private _defaultRegion?: string; 
  public get defaultRegion() {
    return this._defaultRegion;
  }
  public set defaultRegion(value: string | undefined) {
    this._defaultRegion = value;
  }
  public resetDefaultRegion() {
    this._defaultRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRegionInput() {
    return this._defaultRegion;
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string; 
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string | undefined) {
    this._dnsCustomEndpoint = value;
  }
  public resetDnsCustomEndpoint() {
    this._dnsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomEndpointInput() {
    return this._dnsCustomEndpoint;
  }

  // enable_beta_resources - computed: false, optional: true, required: false
  private _enableBetaResources?: boolean | cdktf.IResolvable; 
  public get enableBetaResources() {
    return this._enableBetaResources;
  }
  public set enableBetaResources(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBetaResources = value;
  }
  public resetEnableBetaResources() {
    this._enableBetaResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBetaResourcesInput() {
    return this._enableBetaResources;
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments?: string[]; 
  public get experiments() {
    return this._experiments;
  }
  public set experiments(value: string[] | undefined) {
    this._experiments = value;
  }
  public resetExperiments() {
    this._experiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments;
  }

  // git_custom_endpoint - computed: false, optional: true, required: false
  private _gitCustomEndpoint?: string; 
  public get gitCustomEndpoint() {
    return this._gitCustomEndpoint;
  }
  public set gitCustomEndpoint(value: string | undefined) {
    this._gitCustomEndpoint = value;
  }
  public resetGitCustomEndpoint() {
    this._gitCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCustomEndpointInput() {
    return this._gitCustomEndpoint;
  }

  // iaas_custom_endpoint - computed: false, optional: true, required: false
  private _iaasCustomEndpoint?: string; 
  public get iaasCustomEndpoint() {
    return this._iaasCustomEndpoint;
  }
  public set iaasCustomEndpoint(value: string | undefined) {
    this._iaasCustomEndpoint = value;
  }
  public resetIaasCustomEndpoint() {
    this._iaasCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iaasCustomEndpointInput() {
    return this._iaasCustomEndpoint;
  }

  // loadbalancer_custom_endpoint - computed: false, optional: true, required: false
  private _loadbalancerCustomEndpoint?: string; 
  public get loadbalancerCustomEndpoint() {
    return this._loadbalancerCustomEndpoint;
  }
  public set loadbalancerCustomEndpoint(value: string | undefined) {
    this._loadbalancerCustomEndpoint = value;
  }
  public resetLoadbalancerCustomEndpoint() {
    this._loadbalancerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerCustomEndpointInput() {
    return this._loadbalancerCustomEndpoint;
  }

  // logme_custom_endpoint - computed: false, optional: true, required: false
  private _logmeCustomEndpoint?: string; 
  public get logmeCustomEndpoint() {
    return this._logmeCustomEndpoint;
  }
  public set logmeCustomEndpoint(value: string | undefined) {
    this._logmeCustomEndpoint = value;
  }
  public resetLogmeCustomEndpoint() {
    this._logmeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmeCustomEndpointInput() {
    return this._logmeCustomEndpoint;
  }

  // mariadb_custom_endpoint - computed: false, optional: true, required: false
  private _mariadbCustomEndpoint?: string; 
  public get mariadbCustomEndpoint() {
    return this._mariadbCustomEndpoint;
  }
  public set mariadbCustomEndpoint(value: string | undefined) {
    this._mariadbCustomEndpoint = value;
  }
  public resetMariadbCustomEndpoint() {
    this._mariadbCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbCustomEndpointInput() {
    return this._mariadbCustomEndpoint;
  }

  // modelserving_custom_endpoint - computed: false, optional: true, required: false
  private _modelservingCustomEndpoint?: string; 
  public get modelservingCustomEndpoint() {
    return this._modelservingCustomEndpoint;
  }
  public set modelservingCustomEndpoint(value: string | undefined) {
    this._modelservingCustomEndpoint = value;
  }
  public resetModelservingCustomEndpoint() {
    this._modelservingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelservingCustomEndpointInput() {
    return this._modelservingCustomEndpoint;
  }

  // mongodbflex_custom_endpoint - computed: false, optional: true, required: false
  private _mongodbflexCustomEndpoint?: string; 
  public get mongodbflexCustomEndpoint() {
    return this._mongodbflexCustomEndpoint;
  }
  public set mongodbflexCustomEndpoint(value: string | undefined) {
    this._mongodbflexCustomEndpoint = value;
  }
  public resetMongodbflexCustomEndpoint() {
    this._mongodbflexCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbflexCustomEndpointInput() {
    return this._mongodbflexCustomEndpoint;
  }

  // objectstorage_custom_endpoint - computed: false, optional: true, required: false
  private _objectstorageCustomEndpoint?: string; 
  public get objectstorageCustomEndpoint() {
    return this._objectstorageCustomEndpoint;
  }
  public set objectstorageCustomEndpoint(value: string | undefined) {
    this._objectstorageCustomEndpoint = value;
  }
  public resetObjectstorageCustomEndpoint() {
    this._objectstorageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectstorageCustomEndpointInput() {
    return this._objectstorageCustomEndpoint;
  }

  // observability_custom_endpoint - computed: false, optional: true, required: false
  private _observabilityCustomEndpoint?: string; 
  public get observabilityCustomEndpoint() {
    return this._observabilityCustomEndpoint;
  }
  public set observabilityCustomEndpoint(value: string | undefined) {
    this._observabilityCustomEndpoint = value;
  }
  public resetObservabilityCustomEndpoint() {
    this._observabilityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityCustomEndpointInput() {
    return this._observabilityCustomEndpoint;
  }

  // opensearch_custom_endpoint - computed: false, optional: true, required: false
  private _opensearchCustomEndpoint?: string; 
  public get opensearchCustomEndpoint() {
    return this._opensearchCustomEndpoint;
  }
  public set opensearchCustomEndpoint(value: string | undefined) {
    this._opensearchCustomEndpoint = value;
  }
  public resetOpensearchCustomEndpoint() {
    this._opensearchCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchCustomEndpointInput() {
    return this._opensearchCustomEndpoint;
  }

  // postgresflex_custom_endpoint - computed: false, optional: true, required: false
  private _postgresflexCustomEndpoint?: string; 
  public get postgresflexCustomEndpoint() {
    return this._postgresflexCustomEndpoint;
  }
  public set postgresflexCustomEndpoint(value: string | undefined) {
    this._postgresflexCustomEndpoint = value;
  }
  public resetPostgresflexCustomEndpoint() {
    this._postgresflexCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresflexCustomEndpointInput() {
    return this._postgresflexCustomEndpoint;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // rabbitmq_custom_endpoint - computed: false, optional: true, required: false
  private _rabbitmqCustomEndpoint?: string; 
  public get rabbitmqCustomEndpoint() {
    return this._rabbitmqCustomEndpoint;
  }
  public set rabbitmqCustomEndpoint(value: string | undefined) {
    this._rabbitmqCustomEndpoint = value;
  }
  public resetRabbitmqCustomEndpoint() {
    this._rabbitmqCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqCustomEndpointInput() {
    return this._rabbitmqCustomEndpoint;
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string; 
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string | undefined) {
    this._redisCustomEndpoint = value;
  }
  public resetRedisCustomEndpoint() {
    this._redisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCustomEndpointInput() {
    return this._redisCustomEndpoint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resourcemanager_custom_endpoint - computed: false, optional: true, required: false
  private _resourcemanagerCustomEndpoint?: string; 
  public get resourcemanagerCustomEndpoint() {
    return this._resourcemanagerCustomEndpoint;
  }
  public set resourcemanagerCustomEndpoint(value: string | undefined) {
    this._resourcemanagerCustomEndpoint = value;
  }
  public resetResourcemanagerCustomEndpoint() {
    this._resourcemanagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcemanagerCustomEndpointInput() {
    return this._resourcemanagerCustomEndpoint;
  }

  // scf_custom_endpoint - computed: false, optional: true, required: false
  private _scfCustomEndpoint?: string; 
  public get scfCustomEndpoint() {
    return this._scfCustomEndpoint;
  }
  public set scfCustomEndpoint(value: string | undefined) {
    this._scfCustomEndpoint = value;
  }
  public resetScfCustomEndpoint() {
    this._scfCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfCustomEndpointInput() {
    return this._scfCustomEndpoint;
  }

  // secretsmanager_custom_endpoint - computed: false, optional: true, required: false
  private _secretsmanagerCustomEndpoint?: string; 
  public get secretsmanagerCustomEndpoint() {
    return this._secretsmanagerCustomEndpoint;
  }
  public set secretsmanagerCustomEndpoint(value: string | undefined) {
    this._secretsmanagerCustomEndpoint = value;
  }
  public resetSecretsmanagerCustomEndpoint() {
    this._secretsmanagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsmanagerCustomEndpointInput() {
    return this._secretsmanagerCustomEndpoint;
  }

  // server_backup_custom_endpoint - computed: false, optional: true, required: false
  private _serverBackupCustomEndpoint?: string; 
  public get serverBackupCustomEndpoint() {
    return this._serverBackupCustomEndpoint;
  }
  public set serverBackupCustomEndpoint(value: string | undefined) {
    this._serverBackupCustomEndpoint = value;
  }
  public resetServerBackupCustomEndpoint() {
    this._serverBackupCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBackupCustomEndpointInput() {
    return this._serverBackupCustomEndpoint;
  }

  // server_update_custom_endpoint - computed: false, optional: true, required: false
  private _serverUpdateCustomEndpoint?: string; 
  public get serverUpdateCustomEndpoint() {
    return this._serverUpdateCustomEndpoint;
  }
  public set serverUpdateCustomEndpoint(value: string | undefined) {
    this._serverUpdateCustomEndpoint = value;
  }
  public resetServerUpdateCustomEndpoint() {
    this._serverUpdateCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUpdateCustomEndpointInput() {
    return this._serverUpdateCustomEndpoint;
  }

  // service_account_custom_endpoint - computed: false, optional: true, required: false
  private _serviceAccountCustomEndpoint?: string; 
  public get serviceAccountCustomEndpoint() {
    return this._serviceAccountCustomEndpoint;
  }
  public set serviceAccountCustomEndpoint(value: string | undefined) {
    this._serviceAccountCustomEndpoint = value;
  }
  public resetServiceAccountCustomEndpoint() {
    this._serviceAccountCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCustomEndpointInput() {
    return this._serviceAccountCustomEndpoint;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this._serviceAccountEmail;
  }
  public set serviceAccountEmail(value: string | undefined) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this._serviceAccountKey;
  }
  public set serviceAccountKey(value: string | undefined) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // service_account_key_path - computed: false, optional: true, required: false
  private _serviceAccountKeyPath?: string; 
  public get serviceAccountKeyPath() {
    return this._serviceAccountKeyPath;
  }
  public set serviceAccountKeyPath(value: string | undefined) {
    this._serviceAccountKeyPath = value;
  }
  public resetServiceAccountKeyPath() {
    this._serviceAccountKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyPathInput() {
    return this._serviceAccountKeyPath;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken?: string; 
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public set serviceAccountToken(value: string | undefined) {
    this._serviceAccountToken = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken;
  }

  // service_enablement_custom_endpoint - computed: false, optional: true, required: false
  private _serviceEnablementCustomEndpoint?: string; 
  public get serviceEnablementCustomEndpoint() {
    return this._serviceEnablementCustomEndpoint;
  }
  public set serviceEnablementCustomEndpoint(value: string | undefined) {
    this._serviceEnablementCustomEndpoint = value;
  }
  public resetServiceEnablementCustomEndpoint() {
    this._serviceEnablementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnablementCustomEndpointInput() {
    return this._serviceEnablementCustomEndpoint;
  }

  // ske_custom_endpoint - computed: false, optional: true, required: false
  private _skeCustomEndpoint?: string; 
  public get skeCustomEndpoint() {
    return this._skeCustomEndpoint;
  }
  public set skeCustomEndpoint(value: string | undefined) {
    this._skeCustomEndpoint = value;
  }
  public resetSkeCustomEndpoint() {
    this._skeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skeCustomEndpointInput() {
    return this._skeCustomEndpoint;
  }

  // sqlserverflex_custom_endpoint - computed: false, optional: true, required: false
  private _sqlserverflexCustomEndpoint?: string; 
  public get sqlserverflexCustomEndpoint() {
    return this._sqlserverflexCustomEndpoint;
  }
  public set sqlserverflexCustomEndpoint(value: string | undefined) {
    this._sqlserverflexCustomEndpoint = value;
  }
  public resetSqlserverflexCustomEndpoint() {
    this._sqlserverflexCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverflexCustomEndpointInput() {
    return this._sqlserverflexCustomEndpoint;
  }

  // token_custom_endpoint - computed: false, optional: true, required: false
  private _tokenCustomEndpoint?: string; 
  public get tokenCustomEndpoint() {
    return this._tokenCustomEndpoint;
  }
  public set tokenCustomEndpoint(value: string | undefined) {
    this._tokenCustomEndpoint = value;
  }
  public resetTokenCustomEndpoint() {
    this._tokenCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCustomEndpointInput() {
    return this._tokenCustomEndpoint;
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
      authorization_custom_endpoint: cdktf.stringToTerraform(this._authorizationCustomEndpoint),
      cdn_custom_endpoint: cdktf.stringToTerraform(this._cdnCustomEndpoint),
      credentials_path: cdktf.stringToTerraform(this._credentialsPath),
      default_region: cdktf.stringToTerraform(this._defaultRegion),
      dns_custom_endpoint: cdktf.stringToTerraform(this._dnsCustomEndpoint),
      enable_beta_resources: cdktf.booleanToTerraform(this._enableBetaResources),
      experiments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._experiments),
      git_custom_endpoint: cdktf.stringToTerraform(this._gitCustomEndpoint),
      iaas_custom_endpoint: cdktf.stringToTerraform(this._iaasCustomEndpoint),
      loadbalancer_custom_endpoint: cdktf.stringToTerraform(this._loadbalancerCustomEndpoint),
      logme_custom_endpoint: cdktf.stringToTerraform(this._logmeCustomEndpoint),
      mariadb_custom_endpoint: cdktf.stringToTerraform(this._mariadbCustomEndpoint),
      modelserving_custom_endpoint: cdktf.stringToTerraform(this._modelservingCustomEndpoint),
      mongodbflex_custom_endpoint: cdktf.stringToTerraform(this._mongodbflexCustomEndpoint),
      objectstorage_custom_endpoint: cdktf.stringToTerraform(this._objectstorageCustomEndpoint),
      observability_custom_endpoint: cdktf.stringToTerraform(this._observabilityCustomEndpoint),
      opensearch_custom_endpoint: cdktf.stringToTerraform(this._opensearchCustomEndpoint),
      postgresflex_custom_endpoint: cdktf.stringToTerraform(this._postgresflexCustomEndpoint),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      rabbitmq_custom_endpoint: cdktf.stringToTerraform(this._rabbitmqCustomEndpoint),
      redis_custom_endpoint: cdktf.stringToTerraform(this._redisCustomEndpoint),
      region: cdktf.stringToTerraform(this._region),
      resourcemanager_custom_endpoint: cdktf.stringToTerraform(this._resourcemanagerCustomEndpoint),
      scf_custom_endpoint: cdktf.stringToTerraform(this._scfCustomEndpoint),
      secretsmanager_custom_endpoint: cdktf.stringToTerraform(this._secretsmanagerCustomEndpoint),
      server_backup_custom_endpoint: cdktf.stringToTerraform(this._serverBackupCustomEndpoint),
      server_update_custom_endpoint: cdktf.stringToTerraform(this._serverUpdateCustomEndpoint),
      service_account_custom_endpoint: cdktf.stringToTerraform(this._serviceAccountCustomEndpoint),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      service_account_key: cdktf.stringToTerraform(this._serviceAccountKey),
      service_account_key_path: cdktf.stringToTerraform(this._serviceAccountKeyPath),
      service_account_token: cdktf.stringToTerraform(this._serviceAccountToken),
      service_enablement_custom_endpoint: cdktf.stringToTerraform(this._serviceEnablementCustomEndpoint),
      ske_custom_endpoint: cdktf.stringToTerraform(this._skeCustomEndpoint),
      sqlserverflex_custom_endpoint: cdktf.stringToTerraform(this._sqlserverflexCustomEndpoint),
      token_custom_endpoint: cdktf.stringToTerraform(this._tokenCustomEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cdnCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_path: {
        value: cdktf.stringToHclTerraform(this._credentialsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_region: {
        value: cdktf.stringToHclTerraform(this._defaultRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dnsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_beta_resources: {
        value: cdktf.booleanToHclTerraform(this._enableBetaResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      experiments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._experiments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      git_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gitCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iaas_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iaasCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._loadbalancerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logme_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._logmeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._mariadbCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modelserving_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._modelservingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodbflex_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._mongodbflexCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objectstorage_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._objectstorageCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      observability_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._observabilityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opensearch_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._opensearchCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresflex_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._postgresflexCustomEndpoint),
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
      private_key_path: {
        value: cdktf.stringToHclTerraform(this._privateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rabbitmq_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._rabbitmqCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._redisCustomEndpoint),
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
      resourcemanager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourcemanagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scf_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._scfCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretsmanager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._secretsmanagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_backup_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serverBackupCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_update_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serverUpdateCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceAccountCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key_path: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_enablement_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceEnablementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ske_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._skeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlserverflex_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._sqlserverflexCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tokenCustomEndpoint),
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
