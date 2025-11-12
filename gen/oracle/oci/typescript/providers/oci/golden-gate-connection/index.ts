// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenGateConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}
  */
  readonly accountKeySecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#azure_authority_host GoldenGateConnection#azure_authority_host}
  */
  readonly azureAuthorityHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}
  */
  readonly clientSecretSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#cluster_id GoldenGateConnection#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#cluster_placement_group_id GoldenGateConnection#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}
  */
  readonly connectionFactory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}
  */
  readonly connectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}
  */
  readonly consumerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}
  */
  readonly coreSiteXml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}
  */
  readonly doesUseSecretIds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}
  */
  readonly jndiConnectionFactory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}
  */
  readonly jndiInitialContextFactory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}
  */
  readonly jndiProviderUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}
  */
  readonly jndiSecurityCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}
  */
  readonly jndiSecurityCredentialsSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}
  */
  readonly jndiSecurityPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}
  */
  readonly keyStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}
  */
  readonly keyStorePasswordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}
  */
  readonly keyStoreSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}
  */
  readonly privateKeyFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}
  */
  readonly privateKeyPassphraseSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}
  */
  readonly producerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}
  */
  readonly publicKeyFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}
  */
  readonly redisClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}
  */
  readonly routingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}
  */
  readonly sasToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}
  */
  readonly sasTokenSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}
  */
  readonly secretAccessKeySecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#security_attributes GoldenGateConnection#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}
  */
  readonly servers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}
  */
  readonly serviceAccountKeyFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}
  */
  readonly sessionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}
  */
  readonly shouldUseJndi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#should_use_resource_principal GoldenGateConnection#should_use_resource_principal}
  */
  readonly shouldUseResourcePrincipal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}
  */
  readonly shouldValidateServerCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}
  */
  readonly sslClientKeystash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}
  */
  readonly sslClientKeystashSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}
  */
  readonly sslClientKeystoredb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}
  */
  readonly sslClientKeystoredbSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}
  */
  readonly sslCrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}
  */
  readonly sslKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}
  */
  readonly sslKeyPasswordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}
  */
  readonly sslKeySecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}
  */
  readonly sslServerCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#storage_credential_name GoldenGateConnection#storage_credential_name}
  */
  readonly storageCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}
  */
  readonly streamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#subscription_id GoldenGateConnection#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}
  */
  readonly technologyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tenant_id GoldenGateConnection#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tls_ca_file GoldenGateConnection#tls_ca_file}
  */
  readonly tlsCaFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tls_certificate_key_file GoldenGateConnection#tls_certificate_key_file}
  */
  readonly tlsCertificateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tls_certificate_key_file_password GoldenGateConnection#tls_certificate_key_file_password}
  */
  readonly tlsCertificateKeyFilePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tls_certificate_key_file_password_secret_id GoldenGateConnection#tls_certificate_key_file_password_secret_id}
  */
  readonly tlsCertificateKeyFilePasswordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#tls_certificate_key_file_secret_id GoldenGateConnection#tls_certificate_key_file_secret_id}
  */
  readonly tlsCertificateKeyFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}
  */
  readonly triggerRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}
  */
  readonly trustStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}
  */
  readonly trustStorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}
  */
  readonly trustStorePasswordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}
  */
  readonly trustStoreSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}
  */
  readonly wallet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}
  */
  readonly walletSecretId?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}
  */
  readonly additionalAttributes?: GoldenGateConnectionAdditionalAttributes[] | cdktf.IResolvable;
  /**
  * bootstrap_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}
  */
  readonly bootstrapServers?: GoldenGateConnectionBootstrapServers[] | cdktf.IResolvable;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#catalog GoldenGateConnection#catalog}
  */
  readonly catalog?: GoldenGateConnectionCatalog;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}
  */
  readonly locks?: GoldenGateConnectionLocks[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#storage GoldenGateConnection#storage}
  */
  readonly storage?: GoldenGateConnectionStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}
  */
  readonly timeouts?: GoldenGateConnectionTimeouts;
}
export interface GoldenGateConnectionIngressIps {
}

export function goldenGateConnectionIngressIpsToTerraform(struct?: GoldenGateConnectionIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGateConnectionIngressIpsToHclTerraform(struct?: GoldenGateConnectionIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGateConnectionIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGateConnectionIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionIngressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_ip - computed: true, optional: false, required: false
  public get ingressIp() {
    return this.getStringAttribute('ingress_ip');
  }
}

export class GoldenGateConnectionIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGateConnectionIngressIpsOutputReference {
    return new GoldenGateConnectionIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateConnectionAdditionalAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}
  */
  readonly value?: string;
}

export function goldenGateConnectionAdditionalAttributesToTerraform(struct?: GoldenGateConnectionAdditionalAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function goldenGateConnectionAdditionalAttributesToHclTerraform(struct?: GoldenGateConnectionAdditionalAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionAdditionalAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoldenGateConnectionAdditionalAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionAdditionalAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoldenGateConnectionAdditionalAttributesList extends cdktf.ComplexList {
  public internalValue? : GoldenGateConnectionAdditionalAttributes[] | cdktf.IResolvable

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
  public get(index: number): GoldenGateConnectionAdditionalAttributesOutputReference {
    return new GoldenGateConnectionAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateConnectionBootstrapServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}
  */
  readonly privateIp?: string;
}

export function goldenGateConnectionBootstrapServersToTerraform(struct?: GoldenGateConnectionBootstrapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
  }
}


export function goldenGateConnectionBootstrapServersToHclTerraform(struct?: GoldenGateConnectionBootstrapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionBootstrapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoldenGateConnectionBootstrapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionBootstrapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._privateIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._privateIp = value.privateIp;
    }
  }

  // host - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }
}

export class GoldenGateConnectionBootstrapServersList extends cdktf.ComplexList {
  public internalValue? : GoldenGateConnectionBootstrapServers[] | cdktf.IResolvable

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
  public get(index: number): GoldenGateConnectionBootstrapServersOutputReference {
    return new GoldenGateConnectionBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateConnectionCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#branch GoldenGateConnection#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#catalog_type GoldenGateConnection#catalog_type}
  */
  readonly catalogType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}
  */
  readonly clientSecretSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#glue_id GoldenGateConnection#glue_id}
  */
  readonly glueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#principal_role GoldenGateConnection#principal_role}
  */
  readonly principalRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#properties_secret_id GoldenGateConnection#properties_secret_id}
  */
  readonly propertiesSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#uri GoldenGateConnection#uri}
  */
  readonly uri?: string;
}

export function goldenGateConnectionCatalogToTerraform(struct?: GoldenGateConnectionCatalogOutputReference | GoldenGateConnectionCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_secret_id: cdktf.stringToTerraform(struct!.clientSecretSecretId),
    glue_id: cdktf.stringToTerraform(struct!.glueId),
    name: cdktf.stringToTerraform(struct!.name),
    principal_role: cdktf.stringToTerraform(struct!.principalRole),
    properties_secret_id: cdktf.stringToTerraform(struct!.propertiesSecretId),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function goldenGateConnectionCatalogToHclTerraform(struct?: GoldenGateConnectionCatalogOutputReference | GoldenGateConnectionCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_type: {
      value: cdktf.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_id: {
      value: cdktf.stringToHclTerraform(struct!.glueId),
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
    principal_role: {
      value: cdktf.stringToHclTerraform(struct!.principalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.propertiesSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateConnectionCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSecretId = this._clientSecretSecretId;
    }
    if (this._glueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueId = this._glueId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._principalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalRole = this._principalRole;
    }
    if (this._propertiesSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesSecretId = this._propertiesSecretId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._catalogType = undefined;
      this._clientId = undefined;
      this._clientSecretSecretId = undefined;
      this._glueId = undefined;
      this._name = undefined;
      this._principalRole = undefined;
      this._propertiesSecretId = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._catalogType = value.catalogType;
      this._clientId = value.clientId;
      this._clientSecretSecretId = value.clientSecretSecretId;
      this._glueId = value.glueId;
      this._name = value.name;
      this._principalRole = value.principalRole;
      this._propertiesSecretId = value.propertiesSecretId;
      this._uri = value.uri;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret_secret_id - computed: true, optional: true, required: false
  private _clientSecretSecretId?: string; 
  public get clientSecretSecretId() {
    return this.getStringAttribute('client_secret_secret_id');
  }
  public set clientSecretSecretId(value: string) {
    this._clientSecretSecretId = value;
  }
  public resetClientSecretSecretId() {
    this._clientSecretSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSecretIdInput() {
    return this._clientSecretSecretId;
  }

  // glue_id - computed: true, optional: true, required: false
  private _glueId?: string; 
  public get glueId() {
    return this.getStringAttribute('glue_id');
  }
  public set glueId(value: string) {
    this._glueId = value;
  }
  public resetGlueId() {
    this._glueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIdInput() {
    return this._glueId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // principal_role - computed: true, optional: true, required: false
  private _principalRole?: string; 
  public get principalRole() {
    return this.getStringAttribute('principal_role');
  }
  public set principalRole(value: string) {
    this._principalRole = value;
  }
  public resetPrincipalRole() {
    this._principalRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalRoleInput() {
    return this._principalRole;
  }

  // properties_secret_id - computed: true, optional: true, required: false
  private _propertiesSecretId?: string; 
  public get propertiesSecretId() {
    return this.getStringAttribute('properties_secret_id');
  }
  public set propertiesSecretId(value: string) {
    this._propertiesSecretId = value;
  }
  public resetPropertiesSecretId() {
    this._propertiesSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesSecretIdInput() {
    return this._propertiesSecretId;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoldenGateConnectionLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}
  */
  readonly type: string;
}

export function goldenGateConnectionLocksToTerraform(struct?: GoldenGateConnectionLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function goldenGateConnectionLocksToHclTerraform(struct?: GoldenGateConnectionLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionLocksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoldenGateConnectionLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
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
}

export class GoldenGateConnectionLocksList extends cdktf.ComplexList {
  public internalValue? : GoldenGateConnectionLocks[] | cdktf.IResolvable

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
  public get(index: number): GoldenGateConnectionLocksOutputReference {
    return new GoldenGateConnectionLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateConnectionStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}
  */
  readonly accountKeySecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#bucket GoldenGateConnection#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#container GoldenGateConnection#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#project_id GoldenGateConnection#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#scheme_type GoldenGateConnection#scheme_type}
  */
  readonly schemeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}
  */
  readonly secretAccessKeySecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}
  */
  readonly serviceAccountKeyFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#storage_type GoldenGateConnection#storage_type}
  */
  readonly storageType: string;
}

export function goldenGateConnectionStorageToTerraform(struct?: GoldenGateConnectionStorageOutputReference | GoldenGateConnectionStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    account_key_secret_id: cdktf.stringToTerraform(struct!.accountKeySecretId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    container: cdktf.stringToTerraform(struct!.container),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    scheme_type: cdktf.stringToTerraform(struct!.schemeType),
    secret_access_key_secret_id: cdktf.stringToTerraform(struct!.secretAccessKeySecretId),
    service_account_key_file_secret_id: cdktf.stringToTerraform(struct!.serviceAccountKeyFileSecretId),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function goldenGateConnectionStorageToHclTerraform(struct?: GoldenGateConnectionStorageOutputReference | GoldenGateConnectionStorage): any {
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
    account_key_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.accountKeySecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme_type: {
      value: cdktf.stringToHclTerraform(struct!.schemeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKeySecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKeyFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateConnectionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accountKeySecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecretId = this._accountKeySecretId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._schemeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeType = this._schemeType;
    }
    if (this._secretAccessKeySecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretId = this._secretAccessKeySecretId;
    }
    if (this._serviceAccountKeyFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyFileSecretId = this._serviceAccountKeyFileSecretId;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._accountKeySecretId = undefined;
      this._accountName = undefined;
      this._bucket = undefined;
      this._container = undefined;
      this._endpoint = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._schemeType = undefined;
      this._secretAccessKeySecretId = undefined;
      this._serviceAccountKeyFileSecretId = undefined;
      this._storageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._accountKeySecretId = value.accountKeySecretId;
      this._accountName = value.accountName;
      this._bucket = value.bucket;
      this._container = value.container;
      this._endpoint = value.endpoint;
      this._projectId = value.projectId;
      this._region = value.region;
      this._schemeType = value.schemeType;
      this._secretAccessKeySecretId = value.secretAccessKeySecretId;
      this._serviceAccountKeyFileSecretId = value.serviceAccountKeyFileSecretId;
      this._storageType = value.storageType;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
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

  // account_key_secret_id - computed: true, optional: true, required: false
  private _accountKeySecretId?: string; 
  public get accountKeySecretId() {
    return this.getStringAttribute('account_key_secret_id');
  }
  public set accountKeySecretId(value: string) {
    this._accountKeySecretId = value;
  }
  public resetAccountKeySecretId() {
    this._accountKeySecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretIdInput() {
    return this._accountKeySecretId;
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // endpoint - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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

  // scheme_type - computed: true, optional: true, required: false
  private _schemeType?: string; 
  public get schemeType() {
    return this.getStringAttribute('scheme_type');
  }
  public set schemeType(value: string) {
    this._schemeType = value;
  }
  public resetSchemeType() {
    this._schemeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeTypeInput() {
    return this._schemeType;
  }

  // secret_access_key_secret_id - computed: true, optional: true, required: false
  private _secretAccessKeySecretId?: string; 
  public get secretAccessKeySecretId() {
    return this.getStringAttribute('secret_access_key_secret_id');
  }
  public set secretAccessKeySecretId(value: string) {
    this._secretAccessKeySecretId = value;
  }
  public resetSecretAccessKeySecretId() {
    this._secretAccessKeySecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretIdInput() {
    return this._secretAccessKeySecretId;
  }

  // service_account_key_file_secret_id - computed: true, optional: true, required: false
  private _serviceAccountKeyFileSecretId?: string; 
  public get serviceAccountKeyFileSecretId() {
    return this.getStringAttribute('service_account_key_file_secret_id');
  }
  public set serviceAccountKeyFileSecretId(value: string) {
    this._serviceAccountKeyFileSecretId = value;
  }
  public resetServiceAccountKeyFileSecretId() {
    this._serviceAccountKeyFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileSecretIdInput() {
    return this._serviceAccountKeyFileSecretId;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}
export interface GoldenGateConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}
  */
  readonly update?: string;
}

export function goldenGateConnectionTimeoutsToTerraform(struct?: GoldenGateConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function goldenGateConnectionTimeoutsToHclTerraform(struct?: GoldenGateConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoldenGateConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection oci_golden_gate_connection}
*/
export class GoldenGateConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenGateConnection to import
  * @param importFromId The id of the existing GoldenGateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenGateConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/golden_gate_connection oci_golden_gate_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenGateConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GoldenGateConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_connection',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._accountKey = config.accountKey;
    this._accountKeySecretId = config.accountKeySecretId;
    this._accountName = config.accountName;
    this._authenticationMode = config.authenticationMode;
    this._authenticationType = config.authenticationType;
    this._azureAuthorityHost = config.azureAuthorityHost;
    this._azureTenantId = config.azureTenantId;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientSecretSecretId = config.clientSecretSecretId;
    this._clusterId = config.clusterId;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._connectionFactory = config.connectionFactory;
    this._connectionString = config.connectionString;
    this._connectionType = config.connectionType;
    this._connectionUrl = config.connectionUrl;
    this._consumerProperties = config.consumerProperties;
    this._coreSiteXml = config.coreSiteXml;
    this._databaseId = config.databaseId;
    this._databaseName = config.databaseName;
    this._dbSystemId = config.dbSystemId;
    this._definedTags = config.definedTags;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._doesUseSecretIds = config.doesUseSecretIds;
    this._endpoint = config.endpoint;
    this._fingerprint = config.fingerprint;
    this._freeformTags = config.freeformTags;
    this._host = config.host;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._jndiConnectionFactory = config.jndiConnectionFactory;
    this._jndiInitialContextFactory = config.jndiInitialContextFactory;
    this._jndiProviderUrl = config.jndiProviderUrl;
    this._jndiSecurityCredentials = config.jndiSecurityCredentials;
    this._jndiSecurityCredentialsSecretId = config.jndiSecurityCredentialsSecretId;
    this._jndiSecurityPrincipal = config.jndiSecurityPrincipal;
    this._keyId = config.keyId;
    this._keyStore = config.keyStore;
    this._keyStorePassword = config.keyStorePassword;
    this._keyStorePasswordSecretId = config.keyStorePasswordSecretId;
    this._keyStoreSecretId = config.keyStoreSecretId;
    this._nsgIds = config.nsgIds;
    this._password = config.password;
    this._passwordSecretId = config.passwordSecretId;
    this._port = config.port;
    this._privateIp = config.privateIp;
    this._privateKeyFile = config.privateKeyFile;
    this._privateKeyFileSecretId = config.privateKeyFileSecretId;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._privateKeyPassphraseSecretId = config.privateKeyPassphraseSecretId;
    this._producerProperties = config.producerProperties;
    this._publicKeyFingerprint = config.publicKeyFingerprint;
    this._redisClusterId = config.redisClusterId;
    this._region = config.region;
    this._routingMethod = config.routingMethod;
    this._sasToken = config.sasToken;
    this._sasTokenSecretId = config.sasTokenSecretId;
    this._secretAccessKey = config.secretAccessKey;
    this._secretAccessKeySecretId = config.secretAccessKeySecretId;
    this._securityAttributes = config.securityAttributes;
    this._securityProtocol = config.securityProtocol;
    this._servers = config.servers;
    this._serviceAccountKeyFile = config.serviceAccountKeyFile;
    this._serviceAccountKeyFileSecretId = config.serviceAccountKeyFileSecretId;
    this._sessionMode = config.sessionMode;
    this._shouldUseJndi = config.shouldUseJndi;
    this._shouldUseResourcePrincipal = config.shouldUseResourcePrincipal;
    this._shouldValidateServerCertificate = config.shouldValidateServerCertificate;
    this._sslCa = config.sslCa;
    this._sslCert = config.sslCert;
    this._sslClientKeystash = config.sslClientKeystash;
    this._sslClientKeystashSecretId = config.sslClientKeystashSecretId;
    this._sslClientKeystoredb = config.sslClientKeystoredb;
    this._sslClientKeystoredbSecretId = config.sslClientKeystoredbSecretId;
    this._sslCrl = config.sslCrl;
    this._sslKey = config.sslKey;
    this._sslKeyPassword = config.sslKeyPassword;
    this._sslKeyPasswordSecretId = config.sslKeyPasswordSecretId;
    this._sslKeySecretId = config.sslKeySecretId;
    this._sslMode = config.sslMode;
    this._sslServerCertificate = config.sslServerCertificate;
    this._storageCredentialName = config.storageCredentialName;
    this._streamPoolId = config.streamPoolId;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._technologyType = config.technologyType;
    this._tenancyId = config.tenancyId;
    this._tenantId = config.tenantId;
    this._tlsCaFile = config.tlsCaFile;
    this._tlsCertificateKeyFile = config.tlsCertificateKeyFile;
    this._tlsCertificateKeyFilePassword = config.tlsCertificateKeyFilePassword;
    this._tlsCertificateKeyFilePasswordSecretId = config.tlsCertificateKeyFilePasswordSecretId;
    this._tlsCertificateKeyFileSecretId = config.tlsCertificateKeyFileSecretId;
    this._triggerRefresh = config.triggerRefresh;
    this._trustStore = config.trustStore;
    this._trustStorePassword = config.trustStorePassword;
    this._trustStorePasswordSecretId = config.trustStorePasswordSecretId;
    this._trustStoreSecretId = config.trustStoreSecretId;
    this._url = config.url;
    this._userId = config.userId;
    this._username = config.username;
    this._vaultId = config.vaultId;
    this._wallet = config.wallet;
    this._walletSecretId = config.walletSecretId;
    this._additionalAttributes.internalValue = config.additionalAttributes;
    this._bootstrapServers.internalValue = config.bootstrapServers;
    this._catalog.internalValue = config.catalog;
    this._locks.internalValue = config.locks;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: true, optional: true, required: false
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

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_key_secret_id - computed: true, optional: true, required: false
  private _accountKeySecretId?: string; 
  public get accountKeySecretId() {
    return this.getStringAttribute('account_key_secret_id');
  }
  public set accountKeySecretId(value: string) {
    this._accountKeySecretId = value;
  }
  public resetAccountKeySecretId() {
    this._accountKeySecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretIdInput() {
    return this._accountKeySecretId;
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // authentication_mode - computed: true, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // azure_authority_host - computed: true, optional: true, required: false
  private _azureAuthorityHost?: string; 
  public get azureAuthorityHost() {
    return this.getStringAttribute('azure_authority_host');
  }
  public set azureAuthorityHost(value: string) {
    this._azureAuthorityHost = value;
  }
  public resetAzureAuthorityHost() {
    this._azureAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthorityHostInput() {
    return this._azureAuthorityHost;
  }

  // azure_tenant_id - computed: true, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret_secret_id - computed: false, optional: true, required: false
  private _clientSecretSecretId?: string; 
  public get clientSecretSecretId() {
    return this.getStringAttribute('client_secret_secret_id');
  }
  public set clientSecretSecretId(value: string) {
    this._clientSecretSecretId = value;
  }
  public resetClientSecretSecretId() {
    this._clientSecretSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSecretIdInput() {
    return this._clientSecretSecretId;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // connection_factory - computed: true, optional: true, required: false
  private _connectionFactory?: string; 
  public get connectionFactory() {
    return this.getStringAttribute('connection_factory');
  }
  public set connectionFactory(value: string) {
    this._connectionFactory = value;
  }
  public resetConnectionFactory() {
    this._connectionFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFactoryInput() {
    return this._connectionFactory;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // connection_url - computed: true, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // consumer_properties - computed: true, optional: true, required: false
  private _consumerProperties?: string; 
  public get consumerProperties() {
    return this.getStringAttribute('consumer_properties');
  }
  public set consumerProperties(value: string) {
    this._consumerProperties = value;
  }
  public resetConsumerProperties() {
    this._consumerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerPropertiesInput() {
    return this._consumerProperties;
  }

  // core_site_xml - computed: true, optional: true, required: false
  private _coreSiteXml?: string; 
  public get coreSiteXml() {
    return this.getStringAttribute('core_site_xml');
  }
  public set coreSiteXml(value: string) {
    this._coreSiteXml = value;
  }
  public resetCoreSiteXml() {
    this._coreSiteXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSiteXmlInput() {
    return this._coreSiteXml;
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_name - computed: true, optional: true, required: false
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

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // does_use_secret_ids - computed: true, optional: true, required: false
  private _doesUseSecretIds?: boolean | cdktf.IResolvable; 
  public get doesUseSecretIds() {
    return this.getBooleanAttribute('does_use_secret_ids');
  }
  public set doesUseSecretIds(value: boolean | cdktf.IResolvable) {
    this._doesUseSecretIds = value;
  }
  public resetDoesUseSecretIds() {
    this._doesUseSecretIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesUseSecretIdsInput() {
    return this._doesUseSecretIds;
  }

  // endpoint - computed: true, optional: true, required: false
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

  // fingerprint - computed: true, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // host - computed: true, optional: true, required: false
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

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new GoldenGateConnectionIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // jndi_connection_factory - computed: true, optional: true, required: false
  private _jndiConnectionFactory?: string; 
  public get jndiConnectionFactory() {
    return this.getStringAttribute('jndi_connection_factory');
  }
  public set jndiConnectionFactory(value: string) {
    this._jndiConnectionFactory = value;
  }
  public resetJndiConnectionFactory() {
    this._jndiConnectionFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiConnectionFactoryInput() {
    return this._jndiConnectionFactory;
  }

  // jndi_initial_context_factory - computed: true, optional: true, required: false
  private _jndiInitialContextFactory?: string; 
  public get jndiInitialContextFactory() {
    return this.getStringAttribute('jndi_initial_context_factory');
  }
  public set jndiInitialContextFactory(value: string) {
    this._jndiInitialContextFactory = value;
  }
  public resetJndiInitialContextFactory() {
    this._jndiInitialContextFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiInitialContextFactoryInput() {
    return this._jndiInitialContextFactory;
  }

  // jndi_provider_url - computed: true, optional: true, required: false
  private _jndiProviderUrl?: string; 
  public get jndiProviderUrl() {
    return this.getStringAttribute('jndi_provider_url');
  }
  public set jndiProviderUrl(value: string) {
    this._jndiProviderUrl = value;
  }
  public resetJndiProviderUrl() {
    this._jndiProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiProviderUrlInput() {
    return this._jndiProviderUrl;
  }

  // jndi_security_credentials - computed: false, optional: true, required: false
  private _jndiSecurityCredentials?: string; 
  public get jndiSecurityCredentials() {
    return this.getStringAttribute('jndi_security_credentials');
  }
  public set jndiSecurityCredentials(value: string) {
    this._jndiSecurityCredentials = value;
  }
  public resetJndiSecurityCredentials() {
    this._jndiSecurityCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiSecurityCredentialsInput() {
    return this._jndiSecurityCredentials;
  }

  // jndi_security_credentials_secret_id - computed: false, optional: true, required: false
  private _jndiSecurityCredentialsSecretId?: string; 
  public get jndiSecurityCredentialsSecretId() {
    return this.getStringAttribute('jndi_security_credentials_secret_id');
  }
  public set jndiSecurityCredentialsSecretId(value: string) {
    this._jndiSecurityCredentialsSecretId = value;
  }
  public resetJndiSecurityCredentialsSecretId() {
    this._jndiSecurityCredentialsSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiSecurityCredentialsSecretIdInput() {
    return this._jndiSecurityCredentialsSecretId;
  }

  // jndi_security_principal - computed: true, optional: true, required: false
  private _jndiSecurityPrincipal?: string; 
  public get jndiSecurityPrincipal() {
    return this.getStringAttribute('jndi_security_principal');
  }
  public set jndiSecurityPrincipal(value: string) {
    this._jndiSecurityPrincipal = value;
  }
  public resetJndiSecurityPrincipal() {
    this._jndiSecurityPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiSecurityPrincipalInput() {
    return this._jndiSecurityPrincipal;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_store - computed: false, optional: true, required: false
  private _keyStore?: string; 
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }
  public set keyStore(value: string) {
    this._keyStore = value;
  }
  public resetKeyStore() {
    this._keyStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreInput() {
    return this._keyStore;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // key_store_password_secret_id - computed: false, optional: true, required: false
  private _keyStorePasswordSecretId?: string; 
  public get keyStorePasswordSecretId() {
    return this.getStringAttribute('key_store_password_secret_id');
  }
  public set keyStorePasswordSecretId(value: string) {
    this._keyStorePasswordSecretId = value;
  }
  public resetKeyStorePasswordSecretId() {
    this._keyStorePasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordSecretIdInput() {
    return this._keyStorePasswordSecretId;
  }

  // key_store_secret_id - computed: false, optional: true, required: false
  private _keyStoreSecretId?: string; 
  public get keyStoreSecretId() {
    return this.getStringAttribute('key_store_secret_id');
  }
  public set keyStoreSecretId(value: string) {
    this._keyStoreSecretId = value;
  }
  public resetKeyStoreSecretId() {
    this._keyStoreSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreSecretIdInput() {
    return this._keyStoreSecretId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
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

  // password_secret_id - computed: false, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // private_key_file_secret_id - computed: false, optional: true, required: false
  private _privateKeyFileSecretId?: string; 
  public get privateKeyFileSecretId() {
    return this.getStringAttribute('private_key_file_secret_id');
  }
  public set privateKeyFileSecretId(value: string) {
    this._privateKeyFileSecretId = value;
  }
  public resetPrivateKeyFileSecretId() {
    this._privateKeyFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileSecretIdInput() {
    return this._privateKeyFileSecretId;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_passphrase_secret_id - computed: false, optional: true, required: false
  private _privateKeyPassphraseSecretId?: string; 
  public get privateKeyPassphraseSecretId() {
    return this.getStringAttribute('private_key_passphrase_secret_id');
  }
  public set privateKeyPassphraseSecretId(value: string) {
    this._privateKeyPassphraseSecretId = value;
  }
  public resetPrivateKeyPassphraseSecretId() {
    this._privateKeyPassphraseSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseSecretIdInput() {
    return this._privateKeyPassphraseSecretId;
  }

  // producer_properties - computed: true, optional: true, required: false
  private _producerProperties?: string; 
  public get producerProperties() {
    return this.getStringAttribute('producer_properties');
  }
  public set producerProperties(value: string) {
    this._producerProperties = value;
  }
  public resetProducerProperties() {
    this._producerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerPropertiesInput() {
    return this._producerProperties;
  }

  // public_key_fingerprint - computed: true, optional: true, required: false
  private _publicKeyFingerprint?: string; 
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }
  public set publicKeyFingerprint(value: string) {
    this._publicKeyFingerprint = value;
  }
  public resetPublicKeyFingerprint() {
    this._publicKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFingerprintInput() {
    return this._publicKeyFingerprint;
  }

  // redis_cluster_id - computed: true, optional: true, required: false
  private _redisClusterId?: string; 
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }
  public set redisClusterId(value: string) {
    this._redisClusterId = value;
  }
  public resetRedisClusterId() {
    this._redisClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterIdInput() {
    return this._redisClusterId;
  }

  // region - computed: true, optional: true, required: false
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

  // routing_method - computed: true, optional: true, required: false
  private _routingMethod?: string; 
  public get routingMethod() {
    return this.getStringAttribute('routing_method');
  }
  public set routingMethod(value: string) {
    this._routingMethod = value;
  }
  public resetRoutingMethod() {
    this._routingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingMethodInput() {
    return this._routingMethod;
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // sas_token_secret_id - computed: false, optional: true, required: false
  private _sasTokenSecretId?: string; 
  public get sasTokenSecretId() {
    return this.getStringAttribute('sas_token_secret_id');
  }
  public set sasTokenSecretId(value: string) {
    this._sasTokenSecretId = value;
  }
  public resetSasTokenSecretId() {
    this._sasTokenSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenSecretIdInput() {
    return this._sasTokenSecretId;
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

  // secret_access_key_secret_id - computed: false, optional: true, required: false
  private _secretAccessKeySecretId?: string; 
  public get secretAccessKeySecretId() {
    return this.getStringAttribute('secret_access_key_secret_id');
  }
  public set secretAccessKeySecretId(value: string) {
    this._secretAccessKeySecretId = value;
  }
  public resetSecretAccessKeySecretId() {
    this._secretAccessKeySecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretIdInput() {
    return this._secretAccessKeySecretId;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // security_protocol - computed: true, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // servers - computed: true, optional: true, required: false
  private _servers?: string; 
  public get servers() {
    return this.getStringAttribute('servers');
  }
  public set servers(value: string) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }
  public set serviceAccountKeyFile(value: string) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // service_account_key_file_secret_id - computed: false, optional: true, required: false
  private _serviceAccountKeyFileSecretId?: string; 
  public get serviceAccountKeyFileSecretId() {
    return this.getStringAttribute('service_account_key_file_secret_id');
  }
  public set serviceAccountKeyFileSecretId(value: string) {
    this._serviceAccountKeyFileSecretId = value;
  }
  public resetServiceAccountKeyFileSecretId() {
    this._serviceAccountKeyFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileSecretIdInput() {
    return this._serviceAccountKeyFileSecretId;
  }

  // session_mode - computed: true, optional: true, required: false
  private _sessionMode?: string; 
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }
  public set sessionMode(value: string) {
    this._sessionMode = value;
  }
  public resetSessionMode() {
    this._sessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionModeInput() {
    return this._sessionMode;
  }

  // should_use_jndi - computed: true, optional: true, required: false
  private _shouldUseJndi?: boolean | cdktf.IResolvable; 
  public get shouldUseJndi() {
    return this.getBooleanAttribute('should_use_jndi');
  }
  public set shouldUseJndi(value: boolean | cdktf.IResolvable) {
    this._shouldUseJndi = value;
  }
  public resetShouldUseJndi() {
    this._shouldUseJndi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseJndiInput() {
    return this._shouldUseJndi;
  }

  // should_use_resource_principal - computed: true, optional: true, required: false
  private _shouldUseResourcePrincipal?: boolean | cdktf.IResolvable; 
  public get shouldUseResourcePrincipal() {
    return this.getBooleanAttribute('should_use_resource_principal');
  }
  public set shouldUseResourcePrincipal(value: boolean | cdktf.IResolvable) {
    this._shouldUseResourcePrincipal = value;
  }
  public resetShouldUseResourcePrincipal() {
    this._shouldUseResourcePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseResourcePrincipalInput() {
    return this._shouldUseResourcePrincipal;
  }

  // should_validate_server_certificate - computed: true, optional: true, required: false
  private _shouldValidateServerCertificate?: boolean | cdktf.IResolvable; 
  public get shouldValidateServerCertificate() {
    return this.getBooleanAttribute('should_validate_server_certificate');
  }
  public set shouldValidateServerCertificate(value: boolean | cdktf.IResolvable) {
    this._shouldValidateServerCertificate = value;
  }
  public resetShouldValidateServerCertificate() {
    this._shouldValidateServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldValidateServerCertificateInput() {
    return this._shouldValidateServerCertificate;
  }

  // ssl_ca - computed: true, optional: true, required: false
  private _sslCa?: string; 
  public get sslCa() {
    return this.getStringAttribute('ssl_ca');
  }
  public set sslCa(value: string) {
    this._sslCa = value;
  }
  public resetSslCa() {
    this._sslCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaInput() {
    return this._sslCa;
  }

  // ssl_cert - computed: true, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_client_keystash - computed: false, optional: true, required: false
  private _sslClientKeystash?: string; 
  public get sslClientKeystash() {
    return this.getStringAttribute('ssl_client_keystash');
  }
  public set sslClientKeystash(value: string) {
    this._sslClientKeystash = value;
  }
  public resetSslClientKeystash() {
    this._sslClientKeystash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystashInput() {
    return this._sslClientKeystash;
  }

  // ssl_client_keystash_secret_id - computed: false, optional: true, required: false
  private _sslClientKeystashSecretId?: string; 
  public get sslClientKeystashSecretId() {
    return this.getStringAttribute('ssl_client_keystash_secret_id');
  }
  public set sslClientKeystashSecretId(value: string) {
    this._sslClientKeystashSecretId = value;
  }
  public resetSslClientKeystashSecretId() {
    this._sslClientKeystashSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystashSecretIdInput() {
    return this._sslClientKeystashSecretId;
  }

  // ssl_client_keystoredb - computed: false, optional: true, required: false
  private _sslClientKeystoredb?: string; 
  public get sslClientKeystoredb() {
    return this.getStringAttribute('ssl_client_keystoredb');
  }
  public set sslClientKeystoredb(value: string) {
    this._sslClientKeystoredb = value;
  }
  public resetSslClientKeystoredb() {
    this._sslClientKeystoredb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystoredbInput() {
    return this._sslClientKeystoredb;
  }

  // ssl_client_keystoredb_secret_id - computed: false, optional: true, required: false
  private _sslClientKeystoredbSecretId?: string; 
  public get sslClientKeystoredbSecretId() {
    return this.getStringAttribute('ssl_client_keystoredb_secret_id');
  }
  public set sslClientKeystoredbSecretId(value: string) {
    this._sslClientKeystoredbSecretId = value;
  }
  public resetSslClientKeystoredbSecretId() {
    this._sslClientKeystoredbSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystoredbSecretIdInput() {
    return this._sslClientKeystoredbSecretId;
  }

  // ssl_crl - computed: true, optional: true, required: false
  private _sslCrl?: string; 
  public get sslCrl() {
    return this.getStringAttribute('ssl_crl');
  }
  public set sslCrl(value: string) {
    this._sslCrl = value;
  }
  public resetSslCrl() {
    this._sslCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrlInput() {
    return this._sslCrl;
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // ssl_key_password - computed: false, optional: true, required: false
  private _sslKeyPassword?: string; 
  public get sslKeyPassword() {
    return this.getStringAttribute('ssl_key_password');
  }
  public set sslKeyPassword(value: string) {
    this._sslKeyPassword = value;
  }
  public resetSslKeyPassword() {
    this._sslKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordInput() {
    return this._sslKeyPassword;
  }

  // ssl_key_password_secret_id - computed: false, optional: true, required: false
  private _sslKeyPasswordSecretId?: string; 
  public get sslKeyPasswordSecretId() {
    return this.getStringAttribute('ssl_key_password_secret_id');
  }
  public set sslKeyPasswordSecretId(value: string) {
    this._sslKeyPasswordSecretId = value;
  }
  public resetSslKeyPasswordSecretId() {
    this._sslKeyPasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordSecretIdInput() {
    return this._sslKeyPasswordSecretId;
  }

  // ssl_key_secret_id - computed: false, optional: true, required: false
  private _sslKeySecretId?: string; 
  public get sslKeySecretId() {
    return this.getStringAttribute('ssl_key_secret_id');
  }
  public set sslKeySecretId(value: string) {
    this._sslKeySecretId = value;
  }
  public resetSslKeySecretId() {
    this._sslKeySecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeySecretIdInput() {
    return this._sslKeySecretId;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_server_certificate - computed: true, optional: true, required: false
  private _sslServerCertificate?: string; 
  public get sslServerCertificate() {
    return this.getStringAttribute('ssl_server_certificate');
  }
  public set sslServerCertificate(value: string) {
    this._sslServerCertificate = value;
  }
  public resetSslServerCertificate() {
    this._sslServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCertificateInput() {
    return this._sslServerCertificate;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_credential_name - computed: true, optional: true, required: false
  private _storageCredentialName?: string; 
  public get storageCredentialName() {
    return this.getStringAttribute('storage_credential_name');
  }
  public set storageCredentialName(value: string) {
    this._storageCredentialName = value;
  }
  public resetStorageCredentialName() {
    this._storageCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialNameInput() {
    return this._storageCredentialName;
  }

  // stream_pool_id - computed: true, optional: true, required: false
  private _streamPoolId?: string; 
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
  }
  public set streamPoolId(value: string) {
    this._streamPoolId = value;
  }
  public resetStreamPoolId() {
    this._streamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPoolIdInput() {
    return this._streamPoolId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // technology_type - computed: false, optional: false, required: true
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tenancy_id - computed: true, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // tenant_id - computed: true, optional: true, required: false
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // tls_ca_file - computed: true, optional: true, required: false
  private _tlsCaFile?: string; 
  public get tlsCaFile() {
    return this.getStringAttribute('tls_ca_file');
  }
  public set tlsCaFile(value: string) {
    this._tlsCaFile = value;
  }
  public resetTlsCaFile() {
    this._tlsCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaFileInput() {
    return this._tlsCaFile;
  }

  // tls_certificate_key_file - computed: true, optional: true, required: false
  private _tlsCertificateKeyFile?: string; 
  public get tlsCertificateKeyFile() {
    return this.getStringAttribute('tls_certificate_key_file');
  }
  public set tlsCertificateKeyFile(value: string) {
    this._tlsCertificateKeyFile = value;
  }
  public resetTlsCertificateKeyFile() {
    this._tlsCertificateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFileInput() {
    return this._tlsCertificateKeyFile;
  }

  // tls_certificate_key_file_password - computed: true, optional: true, required: false
  private _tlsCertificateKeyFilePassword?: string; 
  public get tlsCertificateKeyFilePassword() {
    return this.getStringAttribute('tls_certificate_key_file_password');
  }
  public set tlsCertificateKeyFilePassword(value: string) {
    this._tlsCertificateKeyFilePassword = value;
  }
  public resetTlsCertificateKeyFilePassword() {
    this._tlsCertificateKeyFilePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFilePasswordInput() {
    return this._tlsCertificateKeyFilePassword;
  }

  // tls_certificate_key_file_password_secret_id - computed: true, optional: true, required: false
  private _tlsCertificateKeyFilePasswordSecretId?: string; 
  public get tlsCertificateKeyFilePasswordSecretId() {
    return this.getStringAttribute('tls_certificate_key_file_password_secret_id');
  }
  public set tlsCertificateKeyFilePasswordSecretId(value: string) {
    this._tlsCertificateKeyFilePasswordSecretId = value;
  }
  public resetTlsCertificateKeyFilePasswordSecretId() {
    this._tlsCertificateKeyFilePasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFilePasswordSecretIdInput() {
    return this._tlsCertificateKeyFilePasswordSecretId;
  }

  // tls_certificate_key_file_secret_id - computed: true, optional: true, required: false
  private _tlsCertificateKeyFileSecretId?: string; 
  public get tlsCertificateKeyFileSecretId() {
    return this.getStringAttribute('tls_certificate_key_file_secret_id');
  }
  public set tlsCertificateKeyFileSecretId(value: string) {
    this._tlsCertificateKeyFileSecretId = value;
  }
  public resetTlsCertificateKeyFileSecretId() {
    this._tlsCertificateKeyFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFileSecretIdInput() {
    return this._tlsCertificateKeyFileSecretId;
  }

  // trigger_refresh - computed: false, optional: true, required: false
  private _triggerRefresh?: boolean | cdktf.IResolvable; 
  public get triggerRefresh() {
    return this.getBooleanAttribute('trigger_refresh');
  }
  public set triggerRefresh(value: boolean | cdktf.IResolvable) {
    this._triggerRefresh = value;
  }
  public resetTriggerRefresh() {
    this._triggerRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerRefreshInput() {
    return this._triggerRefresh;
  }

  // trust_store - computed: false, optional: true, required: false
  private _trustStore?: string; 
  public get trustStore() {
    return this.getStringAttribute('trust_store');
  }
  public set trustStore(value: string) {
    this._trustStore = value;
  }
  public resetTrustStore() {
    this._trustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }

  // trust_store_password_secret_id - computed: false, optional: true, required: false
  private _trustStorePasswordSecretId?: string; 
  public get trustStorePasswordSecretId() {
    return this.getStringAttribute('trust_store_password_secret_id');
  }
  public set trustStorePasswordSecretId(value: string) {
    this._trustStorePasswordSecretId = value;
  }
  public resetTrustStorePasswordSecretId() {
    this._trustStorePasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordSecretIdInput() {
    return this._trustStorePasswordSecretId;
  }

  // trust_store_secret_id - computed: false, optional: true, required: false
  private _trustStoreSecretId?: string; 
  public get trustStoreSecretId() {
    return this.getStringAttribute('trust_store_secret_id');
  }
  public set trustStoreSecretId(value: string) {
    this._trustStoreSecretId = value;
  }
  public resetTrustStoreSecretId() {
    this._trustStoreSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreSecretIdInput() {
    return this._trustStoreSecretId;
  }

  // url - computed: true, optional: true, required: false
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

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // wallet - computed: false, optional: true, required: false
  private _wallet?: string; 
  public get wallet() {
    return this.getStringAttribute('wallet');
  }
  public set wallet(value: string) {
    this._wallet = value;
  }
  public resetWallet() {
    this._wallet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletInput() {
    return this._wallet;
  }

  // wallet_secret_id - computed: false, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new GoldenGateConnectionAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: GoldenGateConnectionAdditionalAttributes[] | cdktf.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers = new GoldenGateConnectionBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }
  public putBootstrapServers(value: GoldenGateConnectionBootstrapServers[] | cdktf.IResolvable) {
    this._bootstrapServers.internalValue = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers.internalValue;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new GoldenGateConnectionCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: GoldenGateConnectionCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new GoldenGateConnectionLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: GoldenGateConnectionLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new GoldenGateConnectionStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: GoldenGateConnectionStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoldenGateConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoldenGateConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      account_key: cdktf.stringToTerraform(this._accountKey),
      account_key_secret_id: cdktf.stringToTerraform(this._accountKeySecretId),
      account_name: cdktf.stringToTerraform(this._accountName),
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      azure_authority_host: cdktf.stringToTerraform(this._azureAuthorityHost),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_secret_id: cdktf.stringToTerraform(this._clientSecretSecretId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      connection_factory: cdktf.stringToTerraform(this._connectionFactory),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      connection_url: cdktf.stringToTerraform(this._connectionUrl),
      consumer_properties: cdktf.stringToTerraform(this._consumerProperties),
      core_site_xml: cdktf.stringToTerraform(this._coreSiteXml),
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      does_use_secret_ids: cdktf.booleanToTerraform(this._doesUseSecretIds),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      jndi_connection_factory: cdktf.stringToTerraform(this._jndiConnectionFactory),
      jndi_initial_context_factory: cdktf.stringToTerraform(this._jndiInitialContextFactory),
      jndi_provider_url: cdktf.stringToTerraform(this._jndiProviderUrl),
      jndi_security_credentials: cdktf.stringToTerraform(this._jndiSecurityCredentials),
      jndi_security_credentials_secret_id: cdktf.stringToTerraform(this._jndiSecurityCredentialsSecretId),
      jndi_security_principal: cdktf.stringToTerraform(this._jndiSecurityPrincipal),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_store: cdktf.stringToTerraform(this._keyStore),
      key_store_password: cdktf.stringToTerraform(this._keyStorePassword),
      key_store_password_secret_id: cdktf.stringToTerraform(this._keyStorePasswordSecretId),
      key_store_secret_id: cdktf.stringToTerraform(this._keyStoreSecretId),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      password: cdktf.stringToTerraform(this._password),
      password_secret_id: cdktf.stringToTerraform(this._passwordSecretId),
      port: cdktf.numberToTerraform(this._port),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_key_file: cdktf.stringToTerraform(this._privateKeyFile),
      private_key_file_secret_id: cdktf.stringToTerraform(this._privateKeyFileSecretId),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      private_key_passphrase_secret_id: cdktf.stringToTerraform(this._privateKeyPassphraseSecretId),
      producer_properties: cdktf.stringToTerraform(this._producerProperties),
      public_key_fingerprint: cdktf.stringToTerraform(this._publicKeyFingerprint),
      redis_cluster_id: cdktf.stringToTerraform(this._redisClusterId),
      region: cdktf.stringToTerraform(this._region),
      routing_method: cdktf.stringToTerraform(this._routingMethod),
      sas_token: cdktf.stringToTerraform(this._sasToken),
      sas_token_secret_id: cdktf.stringToTerraform(this._sasTokenSecretId),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      secret_access_key_secret_id: cdktf.stringToTerraform(this._secretAccessKeySecretId),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      security_protocol: cdktf.stringToTerraform(this._securityProtocol),
      servers: cdktf.stringToTerraform(this._servers),
      service_account_key_file: cdktf.stringToTerraform(this._serviceAccountKeyFile),
      service_account_key_file_secret_id: cdktf.stringToTerraform(this._serviceAccountKeyFileSecretId),
      session_mode: cdktf.stringToTerraform(this._sessionMode),
      should_use_jndi: cdktf.booleanToTerraform(this._shouldUseJndi),
      should_use_resource_principal: cdktf.booleanToTerraform(this._shouldUseResourcePrincipal),
      should_validate_server_certificate: cdktf.booleanToTerraform(this._shouldValidateServerCertificate),
      ssl_ca: cdktf.stringToTerraform(this._sslCa),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_client_keystash: cdktf.stringToTerraform(this._sslClientKeystash),
      ssl_client_keystash_secret_id: cdktf.stringToTerraform(this._sslClientKeystashSecretId),
      ssl_client_keystoredb: cdktf.stringToTerraform(this._sslClientKeystoredb),
      ssl_client_keystoredb_secret_id: cdktf.stringToTerraform(this._sslClientKeystoredbSecretId),
      ssl_crl: cdktf.stringToTerraform(this._sslCrl),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      ssl_key_password: cdktf.stringToTerraform(this._sslKeyPassword),
      ssl_key_password_secret_id: cdktf.stringToTerraform(this._sslKeyPasswordSecretId),
      ssl_key_secret_id: cdktf.stringToTerraform(this._sslKeySecretId),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      ssl_server_certificate: cdktf.stringToTerraform(this._sslServerCertificate),
      storage_credential_name: cdktf.stringToTerraform(this._storageCredentialName),
      stream_pool_id: cdktf.stringToTerraform(this._streamPoolId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      technology_type: cdktf.stringToTerraform(this._technologyType),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tls_ca_file: cdktf.stringToTerraform(this._tlsCaFile),
      tls_certificate_key_file: cdktf.stringToTerraform(this._tlsCertificateKeyFile),
      tls_certificate_key_file_password: cdktf.stringToTerraform(this._tlsCertificateKeyFilePassword),
      tls_certificate_key_file_password_secret_id: cdktf.stringToTerraform(this._tlsCertificateKeyFilePasswordSecretId),
      tls_certificate_key_file_secret_id: cdktf.stringToTerraform(this._tlsCertificateKeyFileSecretId),
      trigger_refresh: cdktf.booleanToTerraform(this._triggerRefresh),
      trust_store: cdktf.stringToTerraform(this._trustStore),
      trust_store_password: cdktf.stringToTerraform(this._trustStorePassword),
      trust_store_password_secret_id: cdktf.stringToTerraform(this._trustStorePasswordSecretId),
      trust_store_secret_id: cdktf.stringToTerraform(this._trustStoreSecretId),
      url: cdktf.stringToTerraform(this._url),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      wallet: cdktf.stringToTerraform(this._wallet),
      wallet_secret_id: cdktf.stringToTerraform(this._walletSecretId),
      additional_attributes: cdktf.listMapper(goldenGateConnectionAdditionalAttributesToTerraform, true)(this._additionalAttributes.internalValue),
      bootstrap_servers: cdktf.listMapper(goldenGateConnectionBootstrapServersToTerraform, true)(this._bootstrapServers.internalValue),
      catalog: goldenGateConnectionCatalogToTerraform(this._catalog.internalValue),
      locks: cdktf.listMapper(goldenGateConnectionLocksToTerraform, true)(this._locks.internalValue),
      storage: goldenGateConnectionStorageToTerraform(this._storage.internalValue),
      timeouts: goldenGateConnectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      account_key: {
        value: cdktf.stringToHclTerraform(this._accountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_secret_id: {
        value: cdktf.stringToHclTerraform(this._accountKeySecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_authority_host: {
        value: cdktf.stringToHclTerraform(this._azureAuthorityHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
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
      client_secret_secret_id: {
        value: cdktf.stringToHclTerraform(this._clientSecretSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_factory: {
        value: cdktf.stringToHclTerraform(this._connectionFactory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_url: {
        value: cdktf.stringToHclTerraform(this._connectionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_properties: {
        value: cdktf.stringToHclTerraform(this._consumerProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_site_xml: {
        value: cdktf.stringToHclTerraform(this._coreSiteXml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      db_system_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      does_use_secret_ids: {
        value: cdktf.booleanToHclTerraform(this._doesUseSecretIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jndi_connection_factory: {
        value: cdktf.stringToHclTerraform(this._jndiConnectionFactory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jndi_initial_context_factory: {
        value: cdktf.stringToHclTerraform(this._jndiInitialContextFactory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jndi_provider_url: {
        value: cdktf.stringToHclTerraform(this._jndiProviderUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jndi_security_credentials: {
        value: cdktf.stringToHclTerraform(this._jndiSecurityCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jndi_security_credentials_secret_id: {
        value: cdktf.stringToHclTerraform(this._jndiSecurityCredentialsSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jndi_security_principal: {
        value: cdktf.stringToHclTerraform(this._jndiSecurityPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store: {
        value: cdktf.stringToHclTerraform(this._keyStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_password: {
        value: cdktf.stringToHclTerraform(this._keyStorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_password_secret_id: {
        value: cdktf.stringToHclTerraform(this._keyStorePasswordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_secret_id: {
        value: cdktf.stringToHclTerraform(this._keyStoreSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_secret_id: {
        value: cdktf.stringToHclTerraform(this._passwordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_file_secret_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyFileSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase_secret_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphraseSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_properties: {
        value: cdktf.stringToHclTerraform(this._producerProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_fingerprint: {
        value: cdktf.stringToHclTerraform(this._publicKeyFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_cluster_id: {
        value: cdktf.stringToHclTerraform(this._redisClusterId),
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
      routing_method: {
        value: cdktf.stringToHclTerraform(this._routingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_token: {
        value: cdktf.stringToHclTerraform(this._sasToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_token_secret_id: {
        value: cdktf.stringToHclTerraform(this._sasTokenSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key_secret_id: {
        value: cdktf.stringToHclTerraform(this._secretAccessKeySecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_protocol: {
        value: cdktf.stringToHclTerraform(this._securityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.stringToHclTerraform(this._servers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key_file: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key_file_secret_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKeyFileSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_mode: {
        value: cdktf.stringToHclTerraform(this._sessionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_use_jndi: {
        value: cdktf.booleanToHclTerraform(this._shouldUseJndi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_use_resource_principal: {
        value: cdktf.booleanToHclTerraform(this._shouldUseResourcePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_validate_server_certificate: {
        value: cdktf.booleanToHclTerraform(this._shouldValidateServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_ca: {
        value: cdktf.stringToHclTerraform(this._sslCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_keystash: {
        value: cdktf.stringToHclTerraform(this._sslClientKeystash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_keystash_secret_id: {
        value: cdktf.stringToHclTerraform(this._sslClientKeystashSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_keystoredb: {
        value: cdktf.stringToHclTerraform(this._sslClientKeystoredb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_keystoredb_secret_id: {
        value: cdktf.stringToHclTerraform(this._sslClientKeystoredbSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_crl: {
        value: cdktf.stringToHclTerraform(this._sslCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key: {
        value: cdktf.stringToHclTerraform(this._sslKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key_password: {
        value: cdktf.stringToHclTerraform(this._sslKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key_password_secret_id: {
        value: cdktf.stringToHclTerraform(this._sslKeyPasswordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key_secret_id: {
        value: cdktf.stringToHclTerraform(this._sslKeySecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_certificate: {
        value: cdktf.stringToHclTerraform(this._sslServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_credential_name: {
        value: cdktf.stringToHclTerraform(this._storageCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_pool_id: {
        value: cdktf.stringToHclTerraform(this._streamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technology_type: {
        value: cdktf.stringToHclTerraform(this._technologyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
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
      tls_ca_file: {
        value: cdktf.stringToHclTerraform(this._tlsCaFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate_key_file: {
        value: cdktf.stringToHclTerraform(this._tlsCertificateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate_key_file_password: {
        value: cdktf.stringToHclTerraform(this._tlsCertificateKeyFilePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate_key_file_password_secret_id: {
        value: cdktf.stringToHclTerraform(this._tlsCertificateKeyFilePasswordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate_key_file_secret_id: {
        value: cdktf.stringToHclTerraform(this._tlsCertificateKeyFileSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_refresh: {
        value: cdktf.booleanToHclTerraform(this._triggerRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_store: {
        value: cdktf.stringToHclTerraform(this._trustStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_password: {
        value: cdktf.stringToHclTerraform(this._trustStorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_password_secret_id: {
        value: cdktf.stringToHclTerraform(this._trustStorePasswordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_secret_id: {
        value: cdktf.stringToHclTerraform(this._trustStoreSecretId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wallet: {
        value: cdktf.stringToHclTerraform(this._wallet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wallet_secret_id: {
        value: cdktf.stringToHclTerraform(this._walletSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_attributes: {
        value: cdktf.listMapperHcl(goldenGateConnectionAdditionalAttributesToHclTerraform, true)(this._additionalAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateConnectionAdditionalAttributesList",
      },
      bootstrap_servers: {
        value: cdktf.listMapperHcl(goldenGateConnectionBootstrapServersToHclTerraform, true)(this._bootstrapServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateConnectionBootstrapServersList",
      },
      catalog: {
        value: goldenGateConnectionCatalogToHclTerraform(this._catalog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateConnectionCatalogList",
      },
      locks: {
        value: cdktf.listMapperHcl(goldenGateConnectionLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateConnectionLocksList",
      },
      storage: {
        value: goldenGateConnectionStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateConnectionStorageList",
      },
      timeouts: {
        value: goldenGateConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoldenGateConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
