// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to send an abandon request for an operation for which a response timeout is encountered. A request which has timed out on one server may be retried on another server regardless of whether an abandon request is sent, but if the initial attempt is not abandoned then a long-running operation may unnecessarily continue to consume processing resources on the initial server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#abandon_on_timeout ExternalServer#abandon_on_timeout}
  */
  readonly abandonOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Specifies whether an initial-connections value of zero should cause the connection pool to be created without any initial connections, requiring all connections to be created on demand. By default, an initial-connections value of zero indicates that the number of connections should be dynamically based on the number of available worker threads. This will be ignored when using a thread-local connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#allow_initially_empty_connection_pools ExternalServer#allow_initially_empty_connection_pools}
  */
  readonly allowInitiallyEmptyConnectionPools?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The mechanism to use to authenticate to the target server.
  *   - `amazon-aws`: The mechanism to use to authenticate to AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#authentication_method ExternalServer#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The access key ID that will be used if authentication should use an access key. If this is provided, then an aws-secret-access-key must also be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#aws_access_key_id ExternalServer#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * The name of the AWS region containing the resources that will be accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#aws_region_name ExternalServer#aws_region_name}
  */
  readonly awsRegionName?: string;
  /**
  * The secret access key that will be used if authentication should use an access key. If this is provided, then an aws-access-key-id must also be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#aws_secret_access_key ExternalServer#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * The base URL of the external server, optionally including port number, for example "https://externalService:9031".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#base_url ExternalServer#base_url}
  */
  readonly baseUrl?: string;
  /**
  * A passphrase provider that provides access to the password to use to authenticate to the HTTP Proxy External Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#basic_authentication_passphrase_provider ExternalServer#basic_authentication_passphrase_provider}
  */
  readonly basicAuthenticationPassphraseProvider?: string;
  /**
  * The username to use to authenticate to the HTTP Proxy External Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#basic_authentication_username ExternalServer#basic_authentication_username}
  */
  readonly basicAuthenticationUsername?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The DN to use to bind to the target LDAP server if simple authentication is required.
  *   - `active-directory`: The DN to use to bind to the target LDAP server if simple authentication is required. The authentication identity can also be specified in User-Principal-Name (UPN) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#bind_dn ExternalServer#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * The name of the account with which the desired secrets are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#conjur_account_name ExternalServer#conjur_account_name}
  */
  readonly conjurAccountName?: string;
  /**
  * The mechanism used to authenticate to the Conjur server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#conjur_authentication_method ExternalServer#conjur_authentication_method}
  */
  readonly conjurAuthenticationMethod?: string;
  /**
  * The base URL needed to access the CyberArk Conjur server. The base URL should consist of the protocol ("http" or "https"), the server address (resolvable name or IP address), and the port number. For example, "https://conjur.example.com:8443/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#conjur_server_base_uri ExternalServer#conjur_server_base_uri}
  */
  readonly conjurServerBaseUri?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: Specifies the maximum length of time to wait for a connection to be established before giving up and considering the server unavailable.
  *   - `syslog`: Specifies the maximum length of time to wait for a connection to be established before giving up and considering the server unavailable. This will only be used when communicating with the syslog server over TCP (with or without TLS encryption).
  *   - `ping-one-http`: Specifies the maximum length of time to wait for a connection to be established before aborting a request to PingOne.
  *   - `http`: Specifies the maximum length of time to wait for a connection to be established before aborting a request to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#connect_timeout ExternalServer#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The mechanism to use to secure communication with the directory server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#connection_security ExternalServer#connection_security}
  */
  readonly connectionSecurity?: string;
  /**
  * Specifies which database to connect to. This is ignored if jdbc-driver-url is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#database_name ExternalServer#database_name}
  */
  readonly databaseName?: string;
  /**
  * Specifies the operation result code values that should cause the associated connection should be considered defunct. If an operation fails with one of these result codes, then it will be terminated and an attempt will be made to establish a new connection in its place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#defunct_connection_result_code ExternalServer#defunct_connection_result_code}
  */
  readonly defunctConnectionResultCode?: string[];
  /**
  * A description for this External Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#description ExternalServer#description}
  */
  readonly description?: string;
  /**
  * Specifies the maximum length of time to wait for a connection to be established for the purpose of performing a health check. If the connection cannot be established within this length of time, the server will be classified as unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#health_check_connect_timeout ExternalServer#health_check_connect_timeout}
  */
  readonly healthCheckConnectTimeout?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-http`: The mechanism for checking if the hostname in the PingOne ID Token Validator's base-url value matches the name(s) stored inside the X.509 certificate presented by PingOne.
  *   - `http`: The mechanism for checking if the hostname of the HTTP External Server matches the name(s) stored inside the server's X.509 certificate. This is only applicable if SSL is being used for connection security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#hostname_verification_method ExternalServer#hostname_verification_method}
  */
  readonly hostnameVerificationMethod?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait to obtain an HTTP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#http_connect_timeout ExternalServer#http_connect_timeout}
  */
  readonly httpConnectTimeout?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`ping-one-http`, `http`]: A reference to an HTTP proxy server that should be used for requests sent to the Pwned Passwords service.
  *   - `amazon-aws`: A reference to an HTTP proxy server that should be used for requests sent to the AWS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#http_proxy_external_server ExternalServer#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait for a response to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#http_response_timeout ExternalServer#http_response_timeout}
  */
  readonly httpResponseTimeout?: string;
  /**
  * The number of connections to initially establish to the LDAP external server. A value of zero indicates that either the number of connections should be dynamically based on the number of available worker threads, or that the pool will be initially empty, based on the value of the allow-initially-empty-connection-pools property. This will be ignored when using a thread-local connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#initial_connections ExternalServer#initial_connections}
  */
  readonly initialConnections?: number;
  /**
  * Specifies the connection properties for the JDBC datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#jdbc_connection_properties ExternalServer#jdbc_connection_properties}
  */
  readonly jdbcConnectionProperties?: string[];
  /**
  * Specifies a supported database driver type. The driver class will be automatically selected based on this selection. We highly recommend using a JDBC 4 driver that is suitable for the current Java platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#jdbc_driver_type ExternalServer#jdbc_driver_type}
  */
  readonly jdbcDriverType?: string;
  /**
  * Specify the complete JDBC URL which will be used instead of the automatic URL format. You must select type 'other' for the jdbc-driver-type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#jdbc_driver_url ExternalServer#jdbc_driver_url}
  */
  readonly jdbcDriverUrl?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The key manager provider to use if SSL or StartTLS is to be used for connection-level security. When specifying a value for this property (except when using the Null key manager provider) you must ensure that the external server trusts this server's public certificate by adding this server's public certificate to the external server's trust store.
  *   - `http`: The key manager provider to use if SSL (HTTPS) is to be used for connection-level security. When specifying a value for this property (except when using the Null key manager provider) you must ensure that the external server trusts this server's public certificate by adding this server's public certificate to the external server's trust store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#key_manager_provider ExternalServer#key_manager_provider}
  */
  readonly keyManagerProvider?: string;
  /**
  * Specifies the location for the LDAP External Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#location ExternalServer#location}
  */
  readonly location?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: Specifies the maximum length of time that connections to this server should be allowed to remain established before being closed and replaced with newly-established connections.
  *   - `syslog`: The maximum length of time that TCP connections should remain established. This will be ignored for UDP-based connections. A zero duration indicates that no maximum age will be imposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#max_connection_age ExternalServer#max_connection_age}
  */
  readonly maxConnectionAge?: string;
  /**
  * The maximum number of concurrent connections to maintain for the LDAP external server. A value of zero indicates that the number of connections should be dynamically based on the number of available worker threads. This will be ignored when using a thread-local connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#max_connections ExternalServer#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Specifies the maximum response size that should be supported for messages received from the LDAP external server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#max_response_size ExternalServer#max_response_size}
  */
  readonly maxResponseSize?: string;
  /**
  * Specifies the minimum length of time that should pass between connection closures as a result of the connections being established for longer than the maximum connection age. This may help avoid cases in which a large number of connections are closed and re-established in a short period of time because of the maximum connection age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#min_expired_connection_disconnect_interval ExternalServer#min_expired_connection_disconnect_interval}
  */
  readonly minExpiredConnectionDisconnectInterval?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#name ExternalServer#name}
  */
  readonly name: string;
  /**
  * The passphrase provider to use to obtain the login password for the specified user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#passphrase_provider ExternalServer#passphrase_provider}
  */
  readonly passphraseProvider?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The login password for the specified user.
  *   - `smtp`: The login password for the specified user name. Both username and password must be supplied if this attribute is set.
  *   - `jdbc`: The login password for the specified user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#password ExternalServer#password}
  */
  readonly password?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-http`: Specifies the maximum length of time to wait for response data to be read from an established connection before aborting a request to PingOne.
  *   - `http`: Specifies the maximum length of time to wait for response data to be read from an established connection before aborting a request to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#response_timeout ExternalServer#response_timeout}
  */
  readonly responseTimeout?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The host name or IP address of the target LDAP server.
  *   - `smtp`: The host name of the smtp server.
  *   - `jdbc`: The host name of the database server. This is ignored if jdbc-driver-url is specified.
  *   - `syslog`: The address of the syslog server.
  *   - `http-proxy`: The host name or IP address of the HTTP Proxy External Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#server_host_name ExternalServer#server_host_name}
  */
  readonly serverHostName?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The port number on which the server listens for requests.
  *   - `smtp`: The port number where the smtp server listens for requests.
  *   - `jdbc`: The port number where the database server listens for requests. This is ignored if jdbc-driver-url is specified
  *   - `syslog`: The port on which the syslog server accepts connections.
  *   - `http-proxy`: The port on which the HTTP Proxy External Server is listening for connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#server_port ExternalServer#server_port}
  */
  readonly serverPort?: number;
  /**
  * Specifies the connection properties for the smtp server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#smtp_connection_properties ExternalServer#smtp_connection_properties}
  */
  readonly smtpConnectionProperties?: string[];
  /**
  * This property specifies type of connection security to use when connecting to the outgoing mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#smtp_security ExternalServer#smtp_security}
  */
  readonly smtpSecurity?: string;
  /**
  * Specifies the maximum length of time that a connection or attempted connection to a SMTP server may take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#smtp_timeout ExternalServer#smtp_timeout}
  */
  readonly smtpTimeout?: string;
  /**
  * The certificate alias within the keystore to use if SSL (HTTPS) is to be used for connection-level security. When specifying a value for this property you must ensure that the external server trusts this server's public certificate by adding this server's public certificate to the external server's trust store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#ssl_cert_nickname ExternalServer#ssl_cert_nickname}
  */
  readonly sslCertNickname?: string;
  /**
  * This property specifies the default transaction isolation level for connections to this JDBC External Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#transaction_isolation_level ExternalServer#transaction_isolation_level}
  */
  readonly transactionIsolationLevel?: string;
  /**
  * The transport mechanism that should be used when communicating with the syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#transport_mechanism ExternalServer#transport_mechanism}
  */
  readonly transportMechanism?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`nokia-ds`, `ping-identity-ds`, `active-directory`, `ping-identity-proxy-server`, `nokia-proxy-server`, `opendj`, `ldap`, `oracle-unified-directory`]: The trust manager provider to use if SSL or StartTLS is to be used for connection-level security.
  *   - `syslog`: A trust manager provider that will be used to determine whether to trust the certificate chain presented by the syslog server when communication is encrypted with TLS. This property will be ignored when not using TLS encryption.
  *   - `ping-one-http`: The trust manager provider to use for HTTPS connection-level security.
  *   - `http`: The trust manager provider to use if SSL (HTTPS) is to be used for connection-level security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#trust_manager_provider ExternalServer#trust_manager_provider}
  */
  readonly trustManagerProvider?: string;
  /**
  * When the `type` attribute is set to:
  *   - `conjur`: The path to a file containing the information needed to trust the certificate presented by the Conjur servers.
  *   - `vault`: The path to a file containing the information needed to trust the certificate presented by the Vault servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#trust_store_file ExternalServer#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `conjur`: The PIN needed to access the contents of the trust store. This is only required if a trust store file is required, and if that trust store requires a PIN to access its contents.
  *   - `vault`: The passphrase needed to access the contents of the trust store. This is only required if a trust store file is required, and if that trust store requires a PIN to access its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#trust_store_pin ExternalServer#trust_store_pin}
  */
  readonly trustStorePin?: string;
  /**
  * The store type for the specified trust store file. The value should likely be one of "JKS", "PKCS12", or "BCFKS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#trust_store_type ExternalServer#trust_store_type}
  */
  readonly trustStoreType?: string;
  /**
  * The type of External Server resource. Options are ['smtp', 'nokia-ds', 'ping-identity-ds', 'active-directory', 'jdbc', 'syslog', 'ping-identity-proxy-server', 'http-proxy', 'nokia-proxy-server', 'opendj', 'ldap', 'ping-one-http', 'http', 'oracle-unified-directory', 'conjur', 'amazon-aws', 'vault']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#type ExternalServer#type}
  */
  readonly type: string;
  /**
  * Indicates whether to include the administrative operation request control in requests sent to this server which are intended for administrative operations (e.g., health checking) rather than requests directly from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#use_administrative_operation_control ExternalServer#use_administrative_operation_control}
  */
  readonly useAdministrativeOperationControl?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `smtp`: The name of the login account to use when connecting to the smtp server. Both username and password must be supplied if this attribute is set.
  *   - `jdbc`: The name of the login account to use when connecting to the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#user_name ExternalServer#user_name}
  */
  readonly userName?: string;
  /**
  * The SQL query that will be used to validate connections to the database before making them available to the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#validation_query ExternalServer#validation_query}
  */
  readonly validationQuery?: string;
  /**
  * Specifies the amount of time to wait for a response from the database when executing the validation query, if one is set. If the timeout is exceeded, the Directory Server will drop the connection and obtain a new one. A value of zero indicates no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#validation_query_timeout ExternalServer#validation_query_timeout}
  */
  readonly validationQueryTimeout?: string;
  /**
  * The mechanism used to authenticate to the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#vault_authentication_method ExternalServer#vault_authentication_method}
  */
  readonly vaultAuthenticationMethod?: string;
  /**
  * The base URL needed to access the Vault server. The base URL should consist of the protocol ("http" or "https"), the server address (resolvable name or IP address), and the port number. For example, "https://vault.example.com:8200/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#vault_server_base_uri ExternalServer#vault_server_base_uri}
  */
  readonly vaultServerBaseUri?: string[];
  /**
  * The mechanism to use to verify user credentials while ensuring that the ability to process other operations is not impacted by an alternate authorization identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#verify_credentials_method ExternalServer#verify_credentials_method}
  */
  readonly verifyCredentialsMethod?: string;
}
export interface ExternalServerRequiredActions {
}

export function externalServerRequiredActionsToTerraform(struct?: ExternalServerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalServerRequiredActionsToHclTerraform(struct?: ExternalServerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalServerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalServerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalServerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ExternalServerRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ExternalServerRequiredActionsOutputReference {
    return new ExternalServerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server pingdirectory_external_server}
*/
export class ExternalServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_external_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalServer to import
  * @param importFromId The id of the existing ExternalServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_external_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/external_server pingdirectory_external_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalServerConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_external_server',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abandonOnTimeout = config.abandonOnTimeout;
    this._allowInitiallyEmptyConnectionPools = config.allowInitiallyEmptyConnectionPools;
    this._authenticationMethod = config.authenticationMethod;
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsRegionName = config.awsRegionName;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._baseUrl = config.baseUrl;
    this._basicAuthenticationPassphraseProvider = config.basicAuthenticationPassphraseProvider;
    this._basicAuthenticationUsername = config.basicAuthenticationUsername;
    this._bindDn = config.bindDn;
    this._conjurAccountName = config.conjurAccountName;
    this._conjurAuthenticationMethod = config.conjurAuthenticationMethod;
    this._conjurServerBaseUri = config.conjurServerBaseUri;
    this._connectTimeout = config.connectTimeout;
    this._connectionSecurity = config.connectionSecurity;
    this._databaseName = config.databaseName;
    this._defunctConnectionResultCode = config.defunctConnectionResultCode;
    this._description = config.description;
    this._healthCheckConnectTimeout = config.healthCheckConnectTimeout;
    this._hostnameVerificationMethod = config.hostnameVerificationMethod;
    this._httpConnectTimeout = config.httpConnectTimeout;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._httpResponseTimeout = config.httpResponseTimeout;
    this._initialConnections = config.initialConnections;
    this._jdbcConnectionProperties = config.jdbcConnectionProperties;
    this._jdbcDriverType = config.jdbcDriverType;
    this._jdbcDriverUrl = config.jdbcDriverUrl;
    this._keyManagerProvider = config.keyManagerProvider;
    this._location = config.location;
    this._maxConnectionAge = config.maxConnectionAge;
    this._maxConnections = config.maxConnections;
    this._maxResponseSize = config.maxResponseSize;
    this._minExpiredConnectionDisconnectInterval = config.minExpiredConnectionDisconnectInterval;
    this._name = config.name;
    this._passphraseProvider = config.passphraseProvider;
    this._password = config.password;
    this._responseTimeout = config.responseTimeout;
    this._serverHostName = config.serverHostName;
    this._serverPort = config.serverPort;
    this._smtpConnectionProperties = config.smtpConnectionProperties;
    this._smtpSecurity = config.smtpSecurity;
    this._smtpTimeout = config.smtpTimeout;
    this._sslCertNickname = config.sslCertNickname;
    this._transactionIsolationLevel = config.transactionIsolationLevel;
    this._transportMechanism = config.transportMechanism;
    this._trustManagerProvider = config.trustManagerProvider;
    this._trustStoreFile = config.trustStoreFile;
    this._trustStorePin = config.trustStorePin;
    this._trustStoreType = config.trustStoreType;
    this._type = config.type;
    this._useAdministrativeOperationControl = config.useAdministrativeOperationControl;
    this._userName = config.userName;
    this._validationQuery = config.validationQuery;
    this._validationQueryTimeout = config.validationQueryTimeout;
    this._vaultAuthenticationMethod = config.vaultAuthenticationMethod;
    this._vaultServerBaseUri = config.vaultServerBaseUri;
    this._verifyCredentialsMethod = config.verifyCredentialsMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abandon_on_timeout - computed: true, optional: true, required: false
  private _abandonOnTimeout?: boolean | cdktf.IResolvable; 
  public get abandonOnTimeout() {
    return this.getBooleanAttribute('abandon_on_timeout');
  }
  public set abandonOnTimeout(value: boolean | cdktf.IResolvable) {
    this._abandonOnTimeout = value;
  }
  public resetAbandonOnTimeout() {
    this._abandonOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonOnTimeoutInput() {
    return this._abandonOnTimeout;
  }

  // allow_initially_empty_connection_pools - computed: true, optional: true, required: false
  private _allowInitiallyEmptyConnectionPools?: boolean | cdktf.IResolvable; 
  public get allowInitiallyEmptyConnectionPools() {
    return this.getBooleanAttribute('allow_initially_empty_connection_pools');
  }
  public set allowInitiallyEmptyConnectionPools(value: boolean | cdktf.IResolvable) {
    this._allowInitiallyEmptyConnectionPools = value;
  }
  public resetAllowInitiallyEmptyConnectionPools() {
    this._allowInitiallyEmptyConnectionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInitiallyEmptyConnectionPoolsInput() {
    return this._allowInitiallyEmptyConnectionPools;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_region_name - computed: false, optional: true, required: false
  private _awsRegionName?: string; 
  public get awsRegionName() {
    return this.getStringAttribute('aws_region_name');
  }
  public set awsRegionName(value: string) {
    this._awsRegionName = value;
  }
  public resetAwsRegionName() {
    this._awsRegionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionNameInput() {
    return this._awsRegionName;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // basic_authentication_passphrase_provider - computed: false, optional: true, required: false
  private _basicAuthenticationPassphraseProvider?: string; 
  public get basicAuthenticationPassphraseProvider() {
    return this.getStringAttribute('basic_authentication_passphrase_provider');
  }
  public set basicAuthenticationPassphraseProvider(value: string) {
    this._basicAuthenticationPassphraseProvider = value;
  }
  public resetBasicAuthenticationPassphraseProvider() {
    this._basicAuthenticationPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationPassphraseProviderInput() {
    return this._basicAuthenticationPassphraseProvider;
  }

  // basic_authentication_username - computed: false, optional: true, required: false
  private _basicAuthenticationUsername?: string; 
  public get basicAuthenticationUsername() {
    return this.getStringAttribute('basic_authentication_username');
  }
  public set basicAuthenticationUsername(value: string) {
    this._basicAuthenticationUsername = value;
  }
  public resetBasicAuthenticationUsername() {
    this._basicAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationUsernameInput() {
    return this._basicAuthenticationUsername;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // conjur_account_name - computed: false, optional: true, required: false
  private _conjurAccountName?: string; 
  public get conjurAccountName() {
    return this.getStringAttribute('conjur_account_name');
  }
  public set conjurAccountName(value: string) {
    this._conjurAccountName = value;
  }
  public resetConjurAccountName() {
    this._conjurAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurAccountNameInput() {
    return this._conjurAccountName;
  }

  // conjur_authentication_method - computed: false, optional: true, required: false
  private _conjurAuthenticationMethod?: string; 
  public get conjurAuthenticationMethod() {
    return this.getStringAttribute('conjur_authentication_method');
  }
  public set conjurAuthenticationMethod(value: string) {
    this._conjurAuthenticationMethod = value;
  }
  public resetConjurAuthenticationMethod() {
    this._conjurAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurAuthenticationMethodInput() {
    return this._conjurAuthenticationMethod;
  }

  // conjur_server_base_uri - computed: true, optional: true, required: false
  private _conjurServerBaseUri?: string[]; 
  public get conjurServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('conjur_server_base_uri'));
  }
  public set conjurServerBaseUri(value: string[]) {
    this._conjurServerBaseUri = value;
  }
  public resetConjurServerBaseUri() {
    this._conjurServerBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurServerBaseUriInput() {
    return this._conjurServerBaseUri;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_security - computed: true, optional: true, required: false
  private _connectionSecurity?: string; 
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }
  public set connectionSecurity(value: string) {
    this._connectionSecurity = value;
  }
  public resetConnectionSecurity() {
    this._connectionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecurityInput() {
    return this._connectionSecurity;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // defunct_connection_result_code - computed: true, optional: true, required: false
  private _defunctConnectionResultCode?: string[]; 
  public get defunctConnectionResultCode() {
    return cdktf.Fn.tolist(this.getListAttribute('defunct_connection_result_code'));
  }
  public set defunctConnectionResultCode(value: string[]) {
    this._defunctConnectionResultCode = value;
  }
  public resetDefunctConnectionResultCode() {
    this._defunctConnectionResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defunctConnectionResultCodeInput() {
    return this._defunctConnectionResultCode;
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

  // health_check_connect_timeout - computed: false, optional: true, required: false
  private _healthCheckConnectTimeout?: string; 
  public get healthCheckConnectTimeout() {
    return this.getStringAttribute('health_check_connect_timeout');
  }
  public set healthCheckConnectTimeout(value: string) {
    this._healthCheckConnectTimeout = value;
  }
  public resetHealthCheckConnectTimeout() {
    this._healthCheckConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConnectTimeoutInput() {
    return this._healthCheckConnectTimeout;
  }

  // hostname_verification_method - computed: true, optional: true, required: false
  private _hostnameVerificationMethod?: string; 
  public get hostnameVerificationMethod() {
    return this.getStringAttribute('hostname_verification_method');
  }
  public set hostnameVerificationMethod(value: string) {
    this._hostnameVerificationMethod = value;
  }
  public resetHostnameVerificationMethod() {
    this._hostnameVerificationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVerificationMethodInput() {
    return this._hostnameVerificationMethod;
  }

  // http_connect_timeout - computed: true, optional: true, required: false
  private _httpConnectTimeout?: string; 
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }
  public set httpConnectTimeout(value: string) {
    this._httpConnectTimeout = value;
  }
  public resetHttpConnectTimeout() {
    this._httpConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectTimeoutInput() {
    return this._httpConnectTimeout;
  }

  // http_proxy_external_server - computed: false, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // http_response_timeout - computed: true, optional: true, required: false
  private _httpResponseTimeout?: string; 
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }
  public set httpResponseTimeout(value: string) {
    this._httpResponseTimeout = value;
  }
  public resetHttpResponseTimeout() {
    this._httpResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseTimeoutInput() {
    return this._httpResponseTimeout;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_connections - computed: true, optional: true, required: false
  private _initialConnections?: number; 
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }
  public set initialConnections(value: number) {
    this._initialConnections = value;
  }
  public resetInitialConnections() {
    this._initialConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConnectionsInput() {
    return this._initialConnections;
  }

  // jdbc_connection_properties - computed: true, optional: true, required: false
  private _jdbcConnectionProperties?: string[]; 
  public get jdbcConnectionProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('jdbc_connection_properties'));
  }
  public set jdbcConnectionProperties(value: string[]) {
    this._jdbcConnectionProperties = value;
  }
  public resetJdbcConnectionProperties() {
    this._jdbcConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcConnectionPropertiesInput() {
    return this._jdbcConnectionProperties;
  }

  // jdbc_driver_type - computed: false, optional: true, required: false
  private _jdbcDriverType?: string; 
  public get jdbcDriverType() {
    return this.getStringAttribute('jdbc_driver_type');
  }
  public set jdbcDriverType(value: string) {
    this._jdbcDriverType = value;
  }
  public resetJdbcDriverType() {
    this._jdbcDriverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcDriverTypeInput() {
    return this._jdbcDriverType;
  }

  // jdbc_driver_url - computed: false, optional: true, required: false
  private _jdbcDriverUrl?: string; 
  public get jdbcDriverUrl() {
    return this.getStringAttribute('jdbc_driver_url');
  }
  public set jdbcDriverUrl(value: string) {
    this._jdbcDriverUrl = value;
  }
  public resetJdbcDriverUrl() {
    this._jdbcDriverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcDriverUrlInput() {
    return this._jdbcDriverUrl;
  }

  // key_manager_provider - computed: false, optional: true, required: false
  private _keyManagerProvider?: string; 
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }
  public set keyManagerProvider(value: string) {
    this._keyManagerProvider = value;
  }
  public resetKeyManagerProvider() {
    this._keyManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagerProviderInput() {
    return this._keyManagerProvider;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_connection_age - computed: true, optional: true, required: false
  private _maxConnectionAge?: string; 
  public get maxConnectionAge() {
    return this.getStringAttribute('max_connection_age');
  }
  public set maxConnectionAge(value: string) {
    this._maxConnectionAge = value;
  }
  public resetMaxConnectionAge() {
    this._maxConnectionAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionAgeInput() {
    return this._maxConnectionAge;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_response_size - computed: true, optional: true, required: false
  private _maxResponseSize?: string; 
  public get maxResponseSize() {
    return this.getStringAttribute('max_response_size');
  }
  public set maxResponseSize(value: string) {
    this._maxResponseSize = value;
  }
  public resetMaxResponseSize() {
    this._maxResponseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseSizeInput() {
    return this._maxResponseSize;
  }

  // min_expired_connection_disconnect_interval - computed: true, optional: true, required: false
  private _minExpiredConnectionDisconnectInterval?: string; 
  public get minExpiredConnectionDisconnectInterval() {
    return this.getStringAttribute('min_expired_connection_disconnect_interval');
  }
  public set minExpiredConnectionDisconnectInterval(value: string) {
    this._minExpiredConnectionDisconnectInterval = value;
  }
  public resetMinExpiredConnectionDisconnectInterval() {
    this._minExpiredConnectionDisconnectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExpiredConnectionDisconnectIntervalInput() {
    return this._minExpiredConnectionDisconnectInterval;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // passphrase_provider - computed: false, optional: true, required: false
  private _passphraseProvider?: string; 
  public get passphraseProvider() {
    return this.getStringAttribute('passphrase_provider');
  }
  public set passphraseProvider(value: string) {
    this._passphraseProvider = value;
  }
  public resetPassphraseProvider() {
    this._passphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseProviderInput() {
    return this._passphraseProvider;
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

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ExternalServerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // response_timeout - computed: true, optional: true, required: false
  private _responseTimeout?: string; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // server_host_name - computed: false, optional: true, required: false
  private _serverHostName?: string; 
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }
  public set serverHostName(value: string) {
    this._serverHostName = value;
  }
  public resetServerHostName() {
    this._serverHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostNameInput() {
    return this._serverHostName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // smtp_connection_properties - computed: true, optional: true, required: false
  private _smtpConnectionProperties?: string[]; 
  public get smtpConnectionProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('smtp_connection_properties'));
  }
  public set smtpConnectionProperties(value: string[]) {
    this._smtpConnectionProperties = value;
  }
  public resetSmtpConnectionProperties() {
    this._smtpConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpConnectionPropertiesInput() {
    return this._smtpConnectionProperties;
  }

  // smtp_security - computed: true, optional: true, required: false
  private _smtpSecurity?: string; 
  public get smtpSecurity() {
    return this.getStringAttribute('smtp_security');
  }
  public set smtpSecurity(value: string) {
    this._smtpSecurity = value;
  }
  public resetSmtpSecurity() {
    this._smtpSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpSecurityInput() {
    return this._smtpSecurity;
  }

  // smtp_timeout - computed: true, optional: true, required: false
  private _smtpTimeout?: string; 
  public get smtpTimeout() {
    return this.getStringAttribute('smtp_timeout');
  }
  public set smtpTimeout(value: string) {
    this._smtpTimeout = value;
  }
  public resetSmtpTimeout() {
    this._smtpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpTimeoutInput() {
    return this._smtpTimeout;
  }

  // ssl_cert_nickname - computed: false, optional: true, required: false
  private _sslCertNickname?: string; 
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }
  public set sslCertNickname(value: string) {
    this._sslCertNickname = value;
  }
  public resetSslCertNickname() {
    this._sslCertNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNicknameInput() {
    return this._sslCertNickname;
  }

  // transaction_isolation_level - computed: true, optional: true, required: false
  private _transactionIsolationLevel?: string; 
  public get transactionIsolationLevel() {
    return this.getStringAttribute('transaction_isolation_level');
  }
  public set transactionIsolationLevel(value: string) {
    this._transactionIsolationLevel = value;
  }
  public resetTransactionIsolationLevel() {
    this._transactionIsolationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionIsolationLevelInput() {
    return this._transactionIsolationLevel;
  }

  // transport_mechanism - computed: false, optional: true, required: false
  private _transportMechanism?: string; 
  public get transportMechanism() {
    return this.getStringAttribute('transport_mechanism');
  }
  public set transportMechanism(value: string) {
    this._transportMechanism = value;
  }
  public resetTransportMechanism() {
    this._transportMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportMechanismInput() {
    return this._transportMechanism;
  }

  // trust_manager_provider - computed: true, optional: true, required: false
  private _trustManagerProvider?: string; 
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }
  public set trustManagerProvider(value: string) {
    this._trustManagerProvider = value;
  }
  public resetTrustManagerProvider() {
    this._trustManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustManagerProviderInput() {
    return this._trustManagerProvider;
  }

  // trust_store_file - computed: false, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_pin - computed: false, optional: true, required: false
  private _trustStorePin?: string; 
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }
  public set trustStorePin(value: string) {
    this._trustStorePin = value;
  }
  public resetTrustStorePin() {
    this._trustStorePin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinInput() {
    return this._trustStorePin;
  }

  // trust_store_type - computed: true, optional: true, required: false
  private _trustStoreType?: string; 
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }
  public set trustStoreType(value: string) {
    this._trustStoreType = value;
  }
  public resetTrustStoreType() {
    this._trustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreTypeInput() {
    return this._trustStoreType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_administrative_operation_control - computed: true, optional: true, required: false
  private _useAdministrativeOperationControl?: boolean | cdktf.IResolvable; 
  public get useAdministrativeOperationControl() {
    return this.getBooleanAttribute('use_administrative_operation_control');
  }
  public set useAdministrativeOperationControl(value: boolean | cdktf.IResolvable) {
    this._useAdministrativeOperationControl = value;
  }
  public resetUseAdministrativeOperationControl() {
    this._useAdministrativeOperationControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAdministrativeOperationControlInput() {
    return this._useAdministrativeOperationControl;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // validation_query - computed: false, optional: true, required: false
  private _validationQuery?: string; 
  public get validationQuery() {
    return this.getStringAttribute('validation_query');
  }
  public set validationQuery(value: string) {
    this._validationQuery = value;
  }
  public resetValidationQuery() {
    this._validationQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationQueryInput() {
    return this._validationQuery;
  }

  // validation_query_timeout - computed: true, optional: true, required: false
  private _validationQueryTimeout?: string; 
  public get validationQueryTimeout() {
    return this.getStringAttribute('validation_query_timeout');
  }
  public set validationQueryTimeout(value: string) {
    this._validationQueryTimeout = value;
  }
  public resetValidationQueryTimeout() {
    this._validationQueryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationQueryTimeoutInput() {
    return this._validationQueryTimeout;
  }

  // vault_authentication_method - computed: false, optional: true, required: false
  private _vaultAuthenticationMethod?: string; 
  public get vaultAuthenticationMethod() {
    return this.getStringAttribute('vault_authentication_method');
  }
  public set vaultAuthenticationMethod(value: string) {
    this._vaultAuthenticationMethod = value;
  }
  public resetVaultAuthenticationMethod() {
    this._vaultAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthenticationMethodInput() {
    return this._vaultAuthenticationMethod;
  }

  // vault_server_base_uri - computed: true, optional: true, required: false
  private _vaultServerBaseUri?: string[]; 
  public get vaultServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('vault_server_base_uri'));
  }
  public set vaultServerBaseUri(value: string[]) {
    this._vaultServerBaseUri = value;
  }
  public resetVaultServerBaseUri() {
    this._vaultServerBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultServerBaseUriInput() {
    return this._vaultServerBaseUri;
  }

  // verify_credentials_method - computed: true, optional: true, required: false
  private _verifyCredentialsMethod?: string; 
  public get verifyCredentialsMethod() {
    return this.getStringAttribute('verify_credentials_method');
  }
  public set verifyCredentialsMethod(value: string) {
    this._verifyCredentialsMethod = value;
  }
  public resetVerifyCredentialsMethod() {
    this._verifyCredentialsMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCredentialsMethodInput() {
    return this._verifyCredentialsMethod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abandon_on_timeout: cdktf.booleanToTerraform(this._abandonOnTimeout),
      allow_initially_empty_connection_pools: cdktf.booleanToTerraform(this._allowInitiallyEmptyConnectionPools),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_region_name: cdktf.stringToTerraform(this._awsRegionName),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      basic_authentication_passphrase_provider: cdktf.stringToTerraform(this._basicAuthenticationPassphraseProvider),
      basic_authentication_username: cdktf.stringToTerraform(this._basicAuthenticationUsername),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      conjur_account_name: cdktf.stringToTerraform(this._conjurAccountName),
      conjur_authentication_method: cdktf.stringToTerraform(this._conjurAuthenticationMethod),
      conjur_server_base_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conjurServerBaseUri),
      connect_timeout: cdktf.stringToTerraform(this._connectTimeout),
      connection_security: cdktf.stringToTerraform(this._connectionSecurity),
      database_name: cdktf.stringToTerraform(this._databaseName),
      defunct_connection_result_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defunctConnectionResultCode),
      description: cdktf.stringToTerraform(this._description),
      health_check_connect_timeout: cdktf.stringToTerraform(this._healthCheckConnectTimeout),
      hostname_verification_method: cdktf.stringToTerraform(this._hostnameVerificationMethod),
      http_connect_timeout: cdktf.stringToTerraform(this._httpConnectTimeout),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      http_response_timeout: cdktf.stringToTerraform(this._httpResponseTimeout),
      initial_connections: cdktf.numberToTerraform(this._initialConnections),
      jdbc_connection_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jdbcConnectionProperties),
      jdbc_driver_type: cdktf.stringToTerraform(this._jdbcDriverType),
      jdbc_driver_url: cdktf.stringToTerraform(this._jdbcDriverUrl),
      key_manager_provider: cdktf.stringToTerraform(this._keyManagerProvider),
      location: cdktf.stringToTerraform(this._location),
      max_connection_age: cdktf.stringToTerraform(this._maxConnectionAge),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      max_response_size: cdktf.stringToTerraform(this._maxResponseSize),
      min_expired_connection_disconnect_interval: cdktf.stringToTerraform(this._minExpiredConnectionDisconnectInterval),
      name: cdktf.stringToTerraform(this._name),
      passphrase_provider: cdktf.stringToTerraform(this._passphraseProvider),
      password: cdktf.stringToTerraform(this._password),
      response_timeout: cdktf.stringToTerraform(this._responseTimeout),
      server_host_name: cdktf.stringToTerraform(this._serverHostName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      smtp_connection_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smtpConnectionProperties),
      smtp_security: cdktf.stringToTerraform(this._smtpSecurity),
      smtp_timeout: cdktf.stringToTerraform(this._smtpTimeout),
      ssl_cert_nickname: cdktf.stringToTerraform(this._sslCertNickname),
      transaction_isolation_level: cdktf.stringToTerraform(this._transactionIsolationLevel),
      transport_mechanism: cdktf.stringToTerraform(this._transportMechanism),
      trust_manager_provider: cdktf.stringToTerraform(this._trustManagerProvider),
      trust_store_file: cdktf.stringToTerraform(this._trustStoreFile),
      trust_store_pin: cdktf.stringToTerraform(this._trustStorePin),
      trust_store_type: cdktf.stringToTerraform(this._trustStoreType),
      type: cdktf.stringToTerraform(this._type),
      use_administrative_operation_control: cdktf.booleanToTerraform(this._useAdministrativeOperationControl),
      user_name: cdktf.stringToTerraform(this._userName),
      validation_query: cdktf.stringToTerraform(this._validationQuery),
      validation_query_timeout: cdktf.stringToTerraform(this._validationQueryTimeout),
      vault_authentication_method: cdktf.stringToTerraform(this._vaultAuthenticationMethod),
      vault_server_base_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaultServerBaseUri),
      verify_credentials_method: cdktf.stringToTerraform(this._verifyCredentialsMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abandon_on_timeout: {
        value: cdktf.booleanToHclTerraform(this._abandonOnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_initially_empty_connection_pools: {
        value: cdktf.booleanToHclTerraform(this._allowInitiallyEmptyConnectionPools),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region_name: {
        value: cdktf.stringToHclTerraform(this._awsRegionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_authentication_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._basicAuthenticationPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_authentication_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_dn: {
        value: cdktf.stringToHclTerraform(this._bindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjur_account_name: {
        value: cdktf.stringToHclTerraform(this._conjurAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjur_authentication_method: {
        value: cdktf.stringToHclTerraform(this._conjurAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjur_server_base_uri: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conjurServerBaseUri),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connect_timeout: {
        value: cdktf.stringToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_security: {
        value: cdktf.stringToHclTerraform(this._connectionSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defunct_connection_result_code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defunctConnectionResultCode),
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
      health_check_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._healthCheckConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_verification_method: {
        value: cdktf.stringToHclTerraform(this._hostnameVerificationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._httpConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_timeout: {
        value: cdktf.stringToHclTerraform(this._httpResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_connections: {
        value: cdktf.numberToHclTerraform(this._initialConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jdbc_connection_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jdbcConnectionProperties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jdbc_driver_type: {
        value: cdktf.stringToHclTerraform(this._jdbcDriverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_driver_url: {
        value: cdktf.stringToHclTerraform(this._jdbcDriverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_manager_provider: {
        value: cdktf.stringToHclTerraform(this._keyManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connection_age: {
        value: cdktf.stringToHclTerraform(this._maxConnectionAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_response_size: {
        value: cdktf.stringToHclTerraform(this._maxResponseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_expired_connection_disconnect_interval: {
        value: cdktf.stringToHclTerraform(this._minExpiredConnectionDisconnectInterval),
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
      passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._passphraseProvider),
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
      response_timeout: {
        value: cdktf.stringToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_host_name: {
        value: cdktf.stringToHclTerraform(this._serverHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_connection_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smtpConnectionProperties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      smtp_security: {
        value: cdktf.stringToHclTerraform(this._smtpSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_timeout: {
        value: cdktf.stringToHclTerraform(this._smtpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_nickname: {
        value: cdktf.stringToHclTerraform(this._sslCertNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transaction_isolation_level: {
        value: cdktf.stringToHclTerraform(this._transactionIsolationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_mechanism: {
        value: cdktf.stringToHclTerraform(this._transportMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_manager_provider: {
        value: cdktf.stringToHclTerraform(this._trustManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_file: {
        value: cdktf.stringToHclTerraform(this._trustStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin: {
        value: cdktf.stringToHclTerraform(this._trustStorePin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_type: {
        value: cdktf.stringToHclTerraform(this._trustStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_administrative_operation_control: {
        value: cdktf.booleanToHclTerraform(this._useAdministrativeOperationControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_query: {
        value: cdktf.stringToHclTerraform(this._validationQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_query_timeout: {
        value: cdktf.stringToHclTerraform(this._validationQueryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_authentication_method: {
        value: cdktf.stringToHclTerraform(this._vaultAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_server_base_uri: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vaultServerBaseUri),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      verify_credentials_method: {
        value: cdktf.stringToHclTerraform(this._verifyCredentialsMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
