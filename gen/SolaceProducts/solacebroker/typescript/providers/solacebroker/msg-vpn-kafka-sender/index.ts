// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnKafkaSenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Access Key identifier, typically beginning "AKIA...".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_access_key_id MsgVpnKafkaSender#authentication_aws_msk_iam_access_key_id}
  */
  readonly authenticationAwsMskIamAccessKeyId?: string;
  /**
  * The AWS Region code, such as "us-east-1".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_region MsgVpnKafkaSender#authentication_aws_msk_iam_region}
  */
  readonly authenticationAwsMskIamRegion?: string;
  /**
  * The AWS Access Key secret.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_secret_access_key MsgVpnKafkaSender#authentication_aws_msk_iam_secret_access_key}
  */
  readonly authenticationAwsMskIamSecretAccessKey?: string;
  /**
  * The External ID is a unique identifier that might be required when assuming a role. Used with STS only; optional.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_sts_external_id MsgVpnKafkaSender#authentication_aws_msk_iam_sts_external_id}
  */
  readonly authenticationAwsMskIamStsExternalId?: string;
  /**
  * The Amazon Resource Name (ARN) of the role to assume, typically beginning "arn:aws:iam::...". Used with STS only.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_sts_role_arn MsgVpnKafkaSender#authentication_aws_msk_iam_sts_role_arn}
  */
  readonly authenticationAwsMskIamStsRoleArn?: string;
  /**
  * An identifier for the assumed role's session. Used with STS only.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_aws_msk_iam_sts_role_session_name MsgVpnKafkaSender#authentication_aws_msk_iam_sts_role_session_name}
  */
  readonly authenticationAwsMskIamStsRoleSessionName?: string;
  /**
  * The password for the Username. To be used when authentication_scheme is "basic".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_basic_password MsgVpnKafkaSender#authentication_basic_password}
  */
  readonly authenticationBasicPassword?: string;
  /**
  * The username the Kafka Sender uses to login to the remote Kafka broker. To be used when authentication_scheme is "basic".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_basic_username MsgVpnKafkaSender#authentication_basic_username}
  */
  readonly authenticationBasicUsername?: string;
  /**
  * The PEM formatted content for the client certificate used by the Kafka Sender to login to the remote Kafka broker. To be used when authentication_scheme is "client-certificate". Alternatively this will be used for other values of authentication_scheme when the Kafka broker has an `ssl.client.auth` setting of "requested" or "required" and KIP-684 (mTLS) is supported by the Kafka broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_client_cert_content MsgVpnKafkaSender#authentication_client_cert_content}
  */
  readonly authenticationClientCertContent?: string;
  /**
  * The password for the client certificate. To be used when authentication_scheme is "client-certificate". Alternatively this will be used for other values of authentication_scheme when the Kafka broker has an `ssl.client.auth` setting of "requested" or "required" and KIP-684 (mTLS) is supported by the Kafka broker.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_client_cert_password MsgVpnKafkaSender#authentication_client_cert_password}
  */
  readonly authenticationClientCertPassword?: string;
  /**
  * The base64-encoded content of this User Principal's keytab.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_kerberos_keytab_content MsgVpnKafkaSender#authentication_kerberos_keytab_content}
  */
  readonly authenticationKerberosKeytabContent?: string;
  /**
  * The name of this User Principal's keytab file.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_kerberos_keytab_file_name MsgVpnKafkaSender#authentication_kerberos_keytab_file_name}
  */
  readonly authenticationKerberosKeytabFileName?: string;
  /**
  * The Kerberos service name of the remote Kafka broker, not including /hostname@REALM.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_kerberos_service_name MsgVpnKafkaSender#authentication_kerberos_service_name}
  */
  readonly authenticationKerberosServiceName?: string;
  /**
  * The Kerberos user principal name of the Kafka Sender. This must include the @&lt;REALM&gt; suffix.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_kerberos_user_principal_name MsgVpnKafkaSender#authentication_kerberos_user_principal_name}
  */
  readonly authenticationKerberosUserPrincipalName?: string;
  /**
  * The OAuth client ID. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_oauth_client_id MsgVpnKafkaSender#authentication_oauth_client_id}
  */
  readonly authenticationOauthClientId?: string;
  /**
  * The OAuth scope. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_oauth_client_scope MsgVpnKafkaSender#authentication_oauth_client_scope}
  */
  readonly authenticationOauthClientScope?: string;
  /**
  * The OAuth client secret. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_oauth_client_secret MsgVpnKafkaSender#authentication_oauth_client_secret}
  */
  readonly authenticationOauthClientSecret?: string;
  /**
  * The OAuth token endpoint URL that the Kafka Sender will use to request a token for login to the Kafka broker. Must begin with "https". To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_oauth_client_token_endpoint MsgVpnKafkaSender#authentication_oauth_client_token_endpoint}
  */
  readonly authenticationOauthClientTokenEndpoint?: string;
  /**
  * The authentication scheme for the Kafka Sender. The bootstrap addresses must resolve to an appropriately configured and compatible listener port on the Kafka broker for the given scheme.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - Anonymous Authentication. Used with Kafka broker PLAINTEXT listener ports.
  * "aws-msk-iam" - Amazon Web Services (AWS) Managed Streaming for Kafka (MSK) Identity and Access Management (IAM) Authentication. Requires encryption.
  * "aws-msk-iam-sts" - AWS MSK IAM with Security Token Service (STS) Authentication. Requires encryption.
  * "basic" - Basic Authentication. Used with Kafka broker SASL_PLAINTEXT and SASL_SSL listener ports.
  * "scram" - Salted Challenge Response Authentication. Used with Kafka broker SASL_PLAINTEXT and SASL_SSL listener ports.
  * "client-certificate" - Client Certificate Authentication. Used with Kafka broker SSL listener ports.
  * "kerberos" - Kerberos Authentication.
  * "oauth-client" - Oauth Authentication. Used with Kafka broker SASL_SSL listener ports.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_scheme MsgVpnKafkaSender#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * The hash used for SCRAM authentication. To be used when authentication_scheme is "scram".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"sha-512"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "sha-256" - SHA-2 256 bits.
  * "sha-512" - SHA-2 512 bits.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_scram_hash MsgVpnKafkaSender#authentication_scram_hash}
  */
  readonly authenticationScramHash?: string;
  /**
  * The password for the Username. To be used when authentication_scheme is "scram".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_scram_password MsgVpnKafkaSender#authentication_scram_password}
  */
  readonly authenticationScramPassword?: string;
  /**
  * The username the Kafka Sender uses to login to the remote Kafka broker. To be used when authentication_scheme is "scram".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#authentication_scram_username MsgVpnKafkaSender#authentication_scram_username}
  */
  readonly authenticationScramUsername?: string;
  /**
  * Delay (in ms) to wait to accumulate a batch of messages to send. Batching is done for all Senders on a per-partition basis.
  * 
  * This corresponds to the Kafka producer API `linger.ms` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#batch_delay MsgVpnKafkaSender#batch_delay}
  */
  readonly batchDelay?: number;
  /**
  * Maximum number of messages sent in a single batch. Batching is done for all Senders on a per-partition basis.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#batch_max_msg_count MsgVpnKafkaSender#batch_max_msg_count}
  */
  readonly batchMaxMsgCount?: number;
  /**
  * Maximum size of a message batch, in bytes (B). Batching is done for all Senders on a per-partition basis.
  * 
  * This corresponds to the Kafka producer API `batch.size` configuration setting, and should not exceed either the Kafka broker `message.max.bytes` configuration setting, or the per-Topic override of `max.message.bytes`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#batch_max_size MsgVpnKafkaSender#batch_max_size}
  */
  readonly batchMaxSize?: number;
  /**
  * Comma separated list of addresses (and optional ports) of brokers in the Kafka Cluster from which the state of the entire Kafka Cluster can be learned. If a port is not provided with an address it will default to 9092.
  * 
  * This corresponds to the Kafka producer API `bootstrap.servers` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#bootstrap_address_list MsgVpnKafkaSender#bootstrap_address_list}
  */
  readonly bootstrapAddressList?: string;
  /**
  * Enable or disable the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#enabled MsgVpnKafkaSender#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable idempotence for the Kafka Sender. Idempotence guarantees in order at-least-once message delivery to the remote Kafka Topic, at the expense of performance. When idempotence is enabled the Queue Bindings of the Kafka Sender must have ack_mode of "all" to be operational.
  * 
  * This corresponds to the Kafka producer API `enable.idempotence` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#idempotence_enabled MsgVpnKafkaSender#idempotence_enabled}
  */
  readonly idempotenceEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#kafka_sender_name MsgVpnKafkaSender#kafka_sender_name}
  */
  readonly kafkaSenderName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#msg_vpn_name MsgVpnKafkaSender#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Enable or disable compression for the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#transport_compression_enabled MsgVpnKafkaSender#transport_compression_enabled}
  */
  readonly transportCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Compression level. The valid range is dependent on the compression type.
  * 
  * This corresponds to the Kafka producer API `compression.level` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#transport_compression_level MsgVpnKafkaSender#transport_compression_level}
  */
  readonly transportCompressionLevel?: number;
  /**
  * Compression type. Only relevant if compression is enabled.
  * 
  * This corresponds to the Kafka producer API `compression.type` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"gzip"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "gzip" - GZIP Compression.
  * "snappy" - Snappy Compression.
  * "lz4" - LZ4 Compression.
  * "zstd" - Zstandard Compression.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#transport_compression_type MsgVpnKafkaSender#transport_compression_type}
  */
  readonly transportCompressionType?: string;
  /**
  * Enable or disable encryption (TLS) for the Kafka Sender. The bootstrap addresses must resolve to PLAINTEXT or SASL_PLAINTEXT listener ports when disabled, and SSL or SASL_SSL listener ports when enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#transport_tls_enabled MsgVpnKafkaSender#transport_tls_enabled}
  */
  readonly transportTlsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender solacebroker_msg_vpn_kafka_sender}
*/
export class MsgVpnKafkaSender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_sender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnKafkaSender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnKafkaSender to import
  * @param importFromId The id of the existing MsgVpnKafkaSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnKafkaSender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_sender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender solacebroker_msg_vpn_kafka_sender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnKafkaSenderConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnKafkaSenderConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_sender',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationAwsMskIamAccessKeyId = config.authenticationAwsMskIamAccessKeyId;
    this._authenticationAwsMskIamRegion = config.authenticationAwsMskIamRegion;
    this._authenticationAwsMskIamSecretAccessKey = config.authenticationAwsMskIamSecretAccessKey;
    this._authenticationAwsMskIamStsExternalId = config.authenticationAwsMskIamStsExternalId;
    this._authenticationAwsMskIamStsRoleArn = config.authenticationAwsMskIamStsRoleArn;
    this._authenticationAwsMskIamStsRoleSessionName = config.authenticationAwsMskIamStsRoleSessionName;
    this._authenticationBasicPassword = config.authenticationBasicPassword;
    this._authenticationBasicUsername = config.authenticationBasicUsername;
    this._authenticationClientCertContent = config.authenticationClientCertContent;
    this._authenticationClientCertPassword = config.authenticationClientCertPassword;
    this._authenticationKerberosKeytabContent = config.authenticationKerberosKeytabContent;
    this._authenticationKerberosKeytabFileName = config.authenticationKerberosKeytabFileName;
    this._authenticationKerberosServiceName = config.authenticationKerberosServiceName;
    this._authenticationKerberosUserPrincipalName = config.authenticationKerberosUserPrincipalName;
    this._authenticationOauthClientId = config.authenticationOauthClientId;
    this._authenticationOauthClientScope = config.authenticationOauthClientScope;
    this._authenticationOauthClientSecret = config.authenticationOauthClientSecret;
    this._authenticationOauthClientTokenEndpoint = config.authenticationOauthClientTokenEndpoint;
    this._authenticationScheme = config.authenticationScheme;
    this._authenticationScramHash = config.authenticationScramHash;
    this._authenticationScramPassword = config.authenticationScramPassword;
    this._authenticationScramUsername = config.authenticationScramUsername;
    this._batchDelay = config.batchDelay;
    this._batchMaxMsgCount = config.batchMaxMsgCount;
    this._batchMaxSize = config.batchMaxSize;
    this._bootstrapAddressList = config.bootstrapAddressList;
    this._enabled = config.enabled;
    this._idempotenceEnabled = config.idempotenceEnabled;
    this._kafkaSenderName = config.kafkaSenderName;
    this._msgVpnName = config.msgVpnName;
    this._transportCompressionEnabled = config.transportCompressionEnabled;
    this._transportCompressionLevel = config.transportCompressionLevel;
    this._transportCompressionType = config.transportCompressionType;
    this._transportTlsEnabled = config.transportTlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_aws_msk_iam_access_key_id - computed: false, optional: true, required: false
  private _authenticationAwsMskIamAccessKeyId?: string; 
  public get authenticationAwsMskIamAccessKeyId() {
    return this.getStringAttribute('authentication_aws_msk_iam_access_key_id');
  }
  public set authenticationAwsMskIamAccessKeyId(value: string) {
    this._authenticationAwsMskIamAccessKeyId = value;
  }
  public resetAuthenticationAwsMskIamAccessKeyId() {
    this._authenticationAwsMskIamAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamAccessKeyIdInput() {
    return this._authenticationAwsMskIamAccessKeyId;
  }

  // authentication_aws_msk_iam_region - computed: false, optional: true, required: false
  private _authenticationAwsMskIamRegion?: string; 
  public get authenticationAwsMskIamRegion() {
    return this.getStringAttribute('authentication_aws_msk_iam_region');
  }
  public set authenticationAwsMskIamRegion(value: string) {
    this._authenticationAwsMskIamRegion = value;
  }
  public resetAuthenticationAwsMskIamRegion() {
    this._authenticationAwsMskIamRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamRegionInput() {
    return this._authenticationAwsMskIamRegion;
  }

  // authentication_aws_msk_iam_secret_access_key - computed: false, optional: true, required: false
  private _authenticationAwsMskIamSecretAccessKey?: string; 
  public get authenticationAwsMskIamSecretAccessKey() {
    return this.getStringAttribute('authentication_aws_msk_iam_secret_access_key');
  }
  public set authenticationAwsMskIamSecretAccessKey(value: string) {
    this._authenticationAwsMskIamSecretAccessKey = value;
  }
  public resetAuthenticationAwsMskIamSecretAccessKey() {
    this._authenticationAwsMskIamSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamSecretAccessKeyInput() {
    return this._authenticationAwsMskIamSecretAccessKey;
  }

  // authentication_aws_msk_iam_sts_external_id - computed: false, optional: true, required: false
  private _authenticationAwsMskIamStsExternalId?: string; 
  public get authenticationAwsMskIamStsExternalId() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_external_id');
  }
  public set authenticationAwsMskIamStsExternalId(value: string) {
    this._authenticationAwsMskIamStsExternalId = value;
  }
  public resetAuthenticationAwsMskIamStsExternalId() {
    this._authenticationAwsMskIamStsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamStsExternalIdInput() {
    return this._authenticationAwsMskIamStsExternalId;
  }

  // authentication_aws_msk_iam_sts_role_arn - computed: false, optional: true, required: false
  private _authenticationAwsMskIamStsRoleArn?: string; 
  public get authenticationAwsMskIamStsRoleArn() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_role_arn');
  }
  public set authenticationAwsMskIamStsRoleArn(value: string) {
    this._authenticationAwsMskIamStsRoleArn = value;
  }
  public resetAuthenticationAwsMskIamStsRoleArn() {
    this._authenticationAwsMskIamStsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamStsRoleArnInput() {
    return this._authenticationAwsMskIamStsRoleArn;
  }

  // authentication_aws_msk_iam_sts_role_session_name - computed: false, optional: true, required: false
  private _authenticationAwsMskIamStsRoleSessionName?: string; 
  public get authenticationAwsMskIamStsRoleSessionName() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_role_session_name');
  }
  public set authenticationAwsMskIamStsRoleSessionName(value: string) {
    this._authenticationAwsMskIamStsRoleSessionName = value;
  }
  public resetAuthenticationAwsMskIamStsRoleSessionName() {
    this._authenticationAwsMskIamStsRoleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsMskIamStsRoleSessionNameInput() {
    return this._authenticationAwsMskIamStsRoleSessionName;
  }

  // authentication_basic_password - computed: false, optional: true, required: false
  private _authenticationBasicPassword?: string; 
  public get authenticationBasicPassword() {
    return this.getStringAttribute('authentication_basic_password');
  }
  public set authenticationBasicPassword(value: string) {
    this._authenticationBasicPassword = value;
  }
  public resetAuthenticationBasicPassword() {
    this._authenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicPasswordInput() {
    return this._authenticationBasicPassword;
  }

  // authentication_basic_username - computed: false, optional: true, required: false
  private _authenticationBasicUsername?: string; 
  public get authenticationBasicUsername() {
    return this.getStringAttribute('authentication_basic_username');
  }
  public set authenticationBasicUsername(value: string) {
    this._authenticationBasicUsername = value;
  }
  public resetAuthenticationBasicUsername() {
    this._authenticationBasicUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicUsernameInput() {
    return this._authenticationBasicUsername;
  }

  // authentication_client_cert_content - computed: false, optional: true, required: false
  private _authenticationClientCertContent?: string; 
  public get authenticationClientCertContent() {
    return this.getStringAttribute('authentication_client_cert_content');
  }
  public set authenticationClientCertContent(value: string) {
    this._authenticationClientCertContent = value;
  }
  public resetAuthenticationClientCertContent() {
    this._authenticationClientCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertContentInput() {
    return this._authenticationClientCertContent;
  }

  // authentication_client_cert_password - computed: false, optional: true, required: false
  private _authenticationClientCertPassword?: string; 
  public get authenticationClientCertPassword() {
    return this.getStringAttribute('authentication_client_cert_password');
  }
  public set authenticationClientCertPassword(value: string) {
    this._authenticationClientCertPassword = value;
  }
  public resetAuthenticationClientCertPassword() {
    this._authenticationClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertPasswordInput() {
    return this._authenticationClientCertPassword;
  }

  // authentication_kerberos_keytab_content - computed: false, optional: true, required: false
  private _authenticationKerberosKeytabContent?: string; 
  public get authenticationKerberosKeytabContent() {
    return this.getStringAttribute('authentication_kerberos_keytab_content');
  }
  public set authenticationKerberosKeytabContent(value: string) {
    this._authenticationKerberosKeytabContent = value;
  }
  public resetAuthenticationKerberosKeytabContent() {
    this._authenticationKerberosKeytabContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosKeytabContentInput() {
    return this._authenticationKerberosKeytabContent;
  }

  // authentication_kerberos_keytab_file_name - computed: false, optional: true, required: false
  private _authenticationKerberosKeytabFileName?: string; 
  public get authenticationKerberosKeytabFileName() {
    return this.getStringAttribute('authentication_kerberos_keytab_file_name');
  }
  public set authenticationKerberosKeytabFileName(value: string) {
    this._authenticationKerberosKeytabFileName = value;
  }
  public resetAuthenticationKerberosKeytabFileName() {
    this._authenticationKerberosKeytabFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosKeytabFileNameInput() {
    return this._authenticationKerberosKeytabFileName;
  }

  // authentication_kerberos_service_name - computed: false, optional: true, required: false
  private _authenticationKerberosServiceName?: string; 
  public get authenticationKerberosServiceName() {
    return this.getStringAttribute('authentication_kerberos_service_name');
  }
  public set authenticationKerberosServiceName(value: string) {
    this._authenticationKerberosServiceName = value;
  }
  public resetAuthenticationKerberosServiceName() {
    this._authenticationKerberosServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosServiceNameInput() {
    return this._authenticationKerberosServiceName;
  }

  // authentication_kerberos_user_principal_name - computed: false, optional: true, required: false
  private _authenticationKerberosUserPrincipalName?: string; 
  public get authenticationKerberosUserPrincipalName() {
    return this.getStringAttribute('authentication_kerberos_user_principal_name');
  }
  public set authenticationKerberosUserPrincipalName(value: string) {
    this._authenticationKerberosUserPrincipalName = value;
  }
  public resetAuthenticationKerberosUserPrincipalName() {
    this._authenticationKerberosUserPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosUserPrincipalNameInput() {
    return this._authenticationKerberosUserPrincipalName;
  }

  // authentication_oauth_client_id - computed: false, optional: true, required: false
  private _authenticationOauthClientId?: string; 
  public get authenticationOauthClientId() {
    return this.getStringAttribute('authentication_oauth_client_id');
  }
  public set authenticationOauthClientId(value: string) {
    this._authenticationOauthClientId = value;
  }
  public resetAuthenticationOauthClientId() {
    this._authenticationOauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientIdInput() {
    return this._authenticationOauthClientId;
  }

  // authentication_oauth_client_scope - computed: false, optional: true, required: false
  private _authenticationOauthClientScope?: string; 
  public get authenticationOauthClientScope() {
    return this.getStringAttribute('authentication_oauth_client_scope');
  }
  public set authenticationOauthClientScope(value: string) {
    this._authenticationOauthClientScope = value;
  }
  public resetAuthenticationOauthClientScope() {
    this._authenticationOauthClientScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientScopeInput() {
    return this._authenticationOauthClientScope;
  }

  // authentication_oauth_client_secret - computed: false, optional: true, required: false
  private _authenticationOauthClientSecret?: string; 
  public get authenticationOauthClientSecret() {
    return this.getStringAttribute('authentication_oauth_client_secret');
  }
  public set authenticationOauthClientSecret(value: string) {
    this._authenticationOauthClientSecret = value;
  }
  public resetAuthenticationOauthClientSecret() {
    this._authenticationOauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientSecretInput() {
    return this._authenticationOauthClientSecret;
  }

  // authentication_oauth_client_token_endpoint - computed: false, optional: true, required: false
  private _authenticationOauthClientTokenEndpoint?: string; 
  public get authenticationOauthClientTokenEndpoint() {
    return this.getStringAttribute('authentication_oauth_client_token_endpoint');
  }
  public set authenticationOauthClientTokenEndpoint(value: string) {
    this._authenticationOauthClientTokenEndpoint = value;
  }
  public resetAuthenticationOauthClientTokenEndpoint() {
    this._authenticationOauthClientTokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientTokenEndpointInput() {
    return this._authenticationOauthClientTokenEndpoint;
  }

  // authentication_scheme - computed: false, optional: true, required: false
  private _authenticationScheme?: string; 
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }
  public set authenticationScheme(value: string) {
    this._authenticationScheme = value;
  }
  public resetAuthenticationScheme() {
    this._authenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSchemeInput() {
    return this._authenticationScheme;
  }

  // authentication_scram_hash - computed: false, optional: true, required: false
  private _authenticationScramHash?: string; 
  public get authenticationScramHash() {
    return this.getStringAttribute('authentication_scram_hash');
  }
  public set authenticationScramHash(value: string) {
    this._authenticationScramHash = value;
  }
  public resetAuthenticationScramHash() {
    this._authenticationScramHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationScramHashInput() {
    return this._authenticationScramHash;
  }

  // authentication_scram_password - computed: false, optional: true, required: false
  private _authenticationScramPassword?: string; 
  public get authenticationScramPassword() {
    return this.getStringAttribute('authentication_scram_password');
  }
  public set authenticationScramPassword(value: string) {
    this._authenticationScramPassword = value;
  }
  public resetAuthenticationScramPassword() {
    this._authenticationScramPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationScramPasswordInput() {
    return this._authenticationScramPassword;
  }

  // authentication_scram_username - computed: false, optional: true, required: false
  private _authenticationScramUsername?: string; 
  public get authenticationScramUsername() {
    return this.getStringAttribute('authentication_scram_username');
  }
  public set authenticationScramUsername(value: string) {
    this._authenticationScramUsername = value;
  }
  public resetAuthenticationScramUsername() {
    this._authenticationScramUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationScramUsernameInput() {
    return this._authenticationScramUsername;
  }

  // batch_delay - computed: false, optional: true, required: false
  private _batchDelay?: number; 
  public get batchDelay() {
    return this.getNumberAttribute('batch_delay');
  }
  public set batchDelay(value: number) {
    this._batchDelay = value;
  }
  public resetBatchDelay() {
    this._batchDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchDelayInput() {
    return this._batchDelay;
  }

  // batch_max_msg_count - computed: false, optional: true, required: false
  private _batchMaxMsgCount?: number; 
  public get batchMaxMsgCount() {
    return this.getNumberAttribute('batch_max_msg_count');
  }
  public set batchMaxMsgCount(value: number) {
    this._batchMaxMsgCount = value;
  }
  public resetBatchMaxMsgCount() {
    this._batchMaxMsgCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMaxMsgCountInput() {
    return this._batchMaxMsgCount;
  }

  // batch_max_size - computed: false, optional: true, required: false
  private _batchMaxSize?: number; 
  public get batchMaxSize() {
    return this.getNumberAttribute('batch_max_size');
  }
  public set batchMaxSize(value: number) {
    this._batchMaxSize = value;
  }
  public resetBatchMaxSize() {
    this._batchMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMaxSizeInput() {
    return this._batchMaxSize;
  }

  // bootstrap_address_list - computed: false, optional: true, required: false
  private _bootstrapAddressList?: string; 
  public get bootstrapAddressList() {
    return this.getStringAttribute('bootstrap_address_list');
  }
  public set bootstrapAddressList(value: string) {
    this._bootstrapAddressList = value;
  }
  public resetBootstrapAddressList() {
    this._bootstrapAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapAddressListInput() {
    return this._bootstrapAddressList;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idempotence_enabled - computed: false, optional: true, required: false
  private _idempotenceEnabled?: boolean | cdktf.IResolvable; 
  public get idempotenceEnabled() {
    return this.getBooleanAttribute('idempotence_enabled');
  }
  public set idempotenceEnabled(value: boolean | cdktf.IResolvable) {
    this._idempotenceEnabled = value;
  }
  public resetIdempotenceEnabled() {
    this._idempotenceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotenceEnabledInput() {
    return this._idempotenceEnabled;
  }

  // kafka_sender_name - computed: false, optional: false, required: true
  private _kafkaSenderName?: string; 
  public get kafkaSenderName() {
    return this.getStringAttribute('kafka_sender_name');
  }
  public set kafkaSenderName(value: string) {
    this._kafkaSenderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSenderNameInput() {
    return this._kafkaSenderName;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // transport_compression_enabled - computed: false, optional: true, required: false
  private _transportCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get transportCompressionEnabled() {
    return this.getBooleanAttribute('transport_compression_enabled');
  }
  public set transportCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._transportCompressionEnabled = value;
  }
  public resetTransportCompressionEnabled() {
    this._transportCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCompressionEnabledInput() {
    return this._transportCompressionEnabled;
  }

  // transport_compression_level - computed: false, optional: true, required: false
  private _transportCompressionLevel?: number; 
  public get transportCompressionLevel() {
    return this.getNumberAttribute('transport_compression_level');
  }
  public set transportCompressionLevel(value: number) {
    this._transportCompressionLevel = value;
  }
  public resetTransportCompressionLevel() {
    this._transportCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCompressionLevelInput() {
    return this._transportCompressionLevel;
  }

  // transport_compression_type - computed: false, optional: true, required: false
  private _transportCompressionType?: string; 
  public get transportCompressionType() {
    return this.getStringAttribute('transport_compression_type');
  }
  public set transportCompressionType(value: string) {
    this._transportCompressionType = value;
  }
  public resetTransportCompressionType() {
    this._transportCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCompressionTypeInput() {
    return this._transportCompressionType;
  }

  // transport_tls_enabled - computed: false, optional: true, required: false
  private _transportTlsEnabled?: boolean | cdktf.IResolvable; 
  public get transportTlsEnabled() {
    return this.getBooleanAttribute('transport_tls_enabled');
  }
  public set transportTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._transportTlsEnabled = value;
  }
  public resetTransportTlsEnabled() {
    this._transportTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsEnabledInput() {
    return this._transportTlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_aws_msk_iam_access_key_id: cdktf.stringToTerraform(this._authenticationAwsMskIamAccessKeyId),
      authentication_aws_msk_iam_region: cdktf.stringToTerraform(this._authenticationAwsMskIamRegion),
      authentication_aws_msk_iam_secret_access_key: cdktf.stringToTerraform(this._authenticationAwsMskIamSecretAccessKey),
      authentication_aws_msk_iam_sts_external_id: cdktf.stringToTerraform(this._authenticationAwsMskIamStsExternalId),
      authentication_aws_msk_iam_sts_role_arn: cdktf.stringToTerraform(this._authenticationAwsMskIamStsRoleArn),
      authentication_aws_msk_iam_sts_role_session_name: cdktf.stringToTerraform(this._authenticationAwsMskIamStsRoleSessionName),
      authentication_basic_password: cdktf.stringToTerraform(this._authenticationBasicPassword),
      authentication_basic_username: cdktf.stringToTerraform(this._authenticationBasicUsername),
      authentication_client_cert_content: cdktf.stringToTerraform(this._authenticationClientCertContent),
      authentication_client_cert_password: cdktf.stringToTerraform(this._authenticationClientCertPassword),
      authentication_kerberos_keytab_content: cdktf.stringToTerraform(this._authenticationKerberosKeytabContent),
      authentication_kerberos_keytab_file_name: cdktf.stringToTerraform(this._authenticationKerberosKeytabFileName),
      authentication_kerberos_service_name: cdktf.stringToTerraform(this._authenticationKerberosServiceName),
      authentication_kerberos_user_principal_name: cdktf.stringToTerraform(this._authenticationKerberosUserPrincipalName),
      authentication_oauth_client_id: cdktf.stringToTerraform(this._authenticationOauthClientId),
      authentication_oauth_client_scope: cdktf.stringToTerraform(this._authenticationOauthClientScope),
      authentication_oauth_client_secret: cdktf.stringToTerraform(this._authenticationOauthClientSecret),
      authentication_oauth_client_token_endpoint: cdktf.stringToTerraform(this._authenticationOauthClientTokenEndpoint),
      authentication_scheme: cdktf.stringToTerraform(this._authenticationScheme),
      authentication_scram_hash: cdktf.stringToTerraform(this._authenticationScramHash),
      authentication_scram_password: cdktf.stringToTerraform(this._authenticationScramPassword),
      authentication_scram_username: cdktf.stringToTerraform(this._authenticationScramUsername),
      batch_delay: cdktf.numberToTerraform(this._batchDelay),
      batch_max_msg_count: cdktf.numberToTerraform(this._batchMaxMsgCount),
      batch_max_size: cdktf.numberToTerraform(this._batchMaxSize),
      bootstrap_address_list: cdktf.stringToTerraform(this._bootstrapAddressList),
      enabled: cdktf.booleanToTerraform(this._enabled),
      idempotence_enabled: cdktf.booleanToTerraform(this._idempotenceEnabled),
      kafka_sender_name: cdktf.stringToTerraform(this._kafkaSenderName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      transport_compression_enabled: cdktf.booleanToTerraform(this._transportCompressionEnabled),
      transport_compression_level: cdktf.numberToTerraform(this._transportCompressionLevel),
      transport_compression_type: cdktf.stringToTerraform(this._transportCompressionType),
      transport_tls_enabled: cdktf.booleanToTerraform(this._transportTlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_aws_msk_iam_access_key_id: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_msk_iam_region: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_msk_iam_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_msk_iam_sts_external_id: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamStsExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_msk_iam_sts_role_arn: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamStsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_msk_iam_sts_role_session_name: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsMskIamStsRoleSessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_password: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_username: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_content: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_password: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_kerberos_keytab_content: {
        value: cdktf.stringToHclTerraform(this._authenticationKerberosKeytabContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_kerberos_keytab_file_name: {
        value: cdktf.stringToHclTerraform(this._authenticationKerberosKeytabFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_kerberos_service_name: {
        value: cdktf.stringToHclTerraform(this._authenticationKerberosServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_kerberos_user_principal_name: {
        value: cdktf.stringToHclTerraform(this._authenticationKerberosUserPrincipalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_client_scope: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthClientScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_client_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthClientTokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._authenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scram_hash: {
        value: cdktf.stringToHclTerraform(this._authenticationScramHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scram_password: {
        value: cdktf.stringToHclTerraform(this._authenticationScramPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scram_username: {
        value: cdktf.stringToHclTerraform(this._authenticationScramUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_delay: {
        value: cdktf.numberToHclTerraform(this._batchDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      batch_max_msg_count: {
        value: cdktf.numberToHclTerraform(this._batchMaxMsgCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      batch_max_size: {
        value: cdktf.numberToHclTerraform(this._batchMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bootstrap_address_list: {
        value: cdktf.stringToHclTerraform(this._bootstrapAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idempotence_enabled: {
        value: cdktf.booleanToHclTerraform(this._idempotenceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_sender_name: {
        value: cdktf.stringToHclTerraform(this._kafkaSenderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_compression_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportCompressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_compression_level: {
        value: cdktf.numberToHclTerraform(this._transportCompressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_compression_type: {
        value: cdktf.stringToHclTerraform(this._transportCompressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
