// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/external_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryExternalServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/external_server#name DataPingdirectoryExternalServer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/external_server pingdirectory_external_server}
*/
export class DataPingdirectoryExternalServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_external_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryExternalServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryExternalServer to import
  * @param importFromId The id of the existing DataPingdirectoryExternalServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/external_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryExternalServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_external_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/external_server pingdirectory_external_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryExternalServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryExternalServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_external_server',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abandon_on_timeout - computed: true, optional: false, required: false
  public get abandonOnTimeout() {
    return this.getBooleanAttribute('abandon_on_timeout');
  }

  // allow_initially_empty_connection_pools - computed: true, optional: false, required: false
  public get allowInitiallyEmptyConnectionPools() {
    return this.getBooleanAttribute('allow_initially_empty_connection_pools');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_region_name - computed: true, optional: false, required: false
  public get awsRegionName() {
    return this.getStringAttribute('aws_region_name');
  }

  // aws_secret_access_key - computed: true, optional: false, required: false
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // basic_authentication_passphrase_provider - computed: true, optional: false, required: false
  public get basicAuthenticationPassphraseProvider() {
    return this.getStringAttribute('basic_authentication_passphrase_provider');
  }

  // basic_authentication_username - computed: true, optional: false, required: false
  public get basicAuthenticationUsername() {
    return this.getStringAttribute('basic_authentication_username');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // conjur_account_name - computed: true, optional: false, required: false
  public get conjurAccountName() {
    return this.getStringAttribute('conjur_account_name');
  }

  // conjur_authentication_method - computed: true, optional: false, required: false
  public get conjurAuthenticationMethod() {
    return this.getStringAttribute('conjur_authentication_method');
  }

  // conjur_server_base_uri - computed: true, optional: false, required: false
  public get conjurServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('conjur_server_base_uri'));
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }

  // connection_security - computed: true, optional: false, required: false
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // defunct_connection_result_code - computed: true, optional: false, required: false
  public get defunctConnectionResultCode() {
    return cdktf.Fn.tolist(this.getListAttribute('defunct_connection_result_code'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_check_connect_timeout - computed: true, optional: false, required: false
  public get healthCheckConnectTimeout() {
    return this.getStringAttribute('health_check_connect_timeout');
  }

  // hostname_verification_method - computed: true, optional: false, required: false
  public get hostnameVerificationMethod() {
    return this.getStringAttribute('hostname_verification_method');
  }

  // http_connect_timeout - computed: true, optional: false, required: false
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // http_response_timeout - computed: true, optional: false, required: false
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_connections - computed: true, optional: false, required: false
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }

  // jdbc_connection_properties - computed: true, optional: false, required: false
  public get jdbcConnectionProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('jdbc_connection_properties'));
  }

  // jdbc_driver_type - computed: true, optional: false, required: false
  public get jdbcDriverType() {
    return this.getStringAttribute('jdbc_driver_type');
  }

  // jdbc_driver_url - computed: true, optional: false, required: false
  public get jdbcDriverUrl() {
    return this.getStringAttribute('jdbc_driver_url');
  }

  // key_manager_provider - computed: true, optional: false, required: false
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // max_connection_age - computed: true, optional: false, required: false
  public get maxConnectionAge() {
    return this.getStringAttribute('max_connection_age');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_response_size - computed: true, optional: false, required: false
  public get maxResponseSize() {
    return this.getStringAttribute('max_response_size');
  }

  // min_expired_connection_disconnect_interval - computed: true, optional: false, required: false
  public get minExpiredConnectionDisconnectInterval() {
    return this.getStringAttribute('min_expired_connection_disconnect_interval');
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

  // passphrase_provider - computed: true, optional: false, required: false
  public get passphraseProvider() {
    return this.getStringAttribute('passphrase_provider');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // response_timeout - computed: true, optional: false, required: false
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }

  // server_host_name - computed: true, optional: false, required: false
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // smtp_connection_properties - computed: true, optional: false, required: false
  public get smtpConnectionProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('smtp_connection_properties'));
  }

  // smtp_security - computed: true, optional: false, required: false
  public get smtpSecurity() {
    return this.getStringAttribute('smtp_security');
  }

  // smtp_timeout - computed: true, optional: false, required: false
  public get smtpTimeout() {
    return this.getStringAttribute('smtp_timeout');
  }

  // ssl_cert_nickname - computed: true, optional: false, required: false
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }

  // transaction_isolation_level - computed: true, optional: false, required: false
  public get transactionIsolationLevel() {
    return this.getStringAttribute('transaction_isolation_level');
  }

  // transport_mechanism - computed: true, optional: false, required: false
  public get transportMechanism() {
    return this.getStringAttribute('transport_mechanism');
  }

  // trust_manager_provider - computed: true, optional: false, required: false
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }

  // trust_store_file - computed: true, optional: false, required: false
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }

  // trust_store_pin - computed: true, optional: false, required: false
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_administrative_operation_control - computed: true, optional: false, required: false
  public get useAdministrativeOperationControl() {
    return this.getBooleanAttribute('use_administrative_operation_control');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // validation_query - computed: true, optional: false, required: false
  public get validationQuery() {
    return this.getStringAttribute('validation_query');
  }

  // validation_query_timeout - computed: true, optional: false, required: false
  public get validationQueryTimeout() {
    return this.getStringAttribute('validation_query_timeout');
  }

  // vault_authentication_method - computed: true, optional: false, required: false
  public get vaultAuthenticationMethod() {
    return this.getStringAttribute('vault_authentication_method');
  }

  // vault_server_base_uri - computed: true, optional: false, required: false
  public get vaultServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('vault_server_base_uri'));
  }

  // verify_credentials_method - computed: true, optional: false, required: false
  public get verifyCredentialsMethod() {
    return this.getStringAttribute('verify_credentials_method');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
