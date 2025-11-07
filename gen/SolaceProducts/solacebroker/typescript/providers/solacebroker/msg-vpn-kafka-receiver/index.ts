// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnKafkaReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Access Key identifier, typically beginning "AKIA...".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_access_key_id MsgVpnKafkaReceiver#authentication_aws_msk_iam_access_key_id}
  */
  readonly authenticationAwsMskIamAccessKeyId?: string;
  /**
  * The AWS Region code, such as "us-east-1".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_region MsgVpnKafkaReceiver#authentication_aws_msk_iam_region}
  */
  readonly authenticationAwsMskIamRegion?: string;
  /**
  * The AWS Access Key secret.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_secret_access_key MsgVpnKafkaReceiver#authentication_aws_msk_iam_secret_access_key}
  */
  readonly authenticationAwsMskIamSecretAccessKey?: string;
  /**
  * The External ID is a unique identifier that might be required when assuming a role. Used with STS only; optional.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_sts_external_id MsgVpnKafkaReceiver#authentication_aws_msk_iam_sts_external_id}
  */
  readonly authenticationAwsMskIamStsExternalId?: string;
  /**
  * The Amazon Resource Name (ARN) of the role to assume, typically beginning "arn:aws:iam::...". Used with STS only.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_sts_role_arn MsgVpnKafkaReceiver#authentication_aws_msk_iam_sts_role_arn}
  */
  readonly authenticationAwsMskIamStsRoleArn?: string;
  /**
  * An identifier for the assumed role's session. Used with STS only.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_aws_msk_iam_sts_role_session_name MsgVpnKafkaReceiver#authentication_aws_msk_iam_sts_role_session_name}
  */
  readonly authenticationAwsMskIamStsRoleSessionName?: string;
  /**
  * The password for the Username. To be used when authentication_scheme is "basic".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_basic_password MsgVpnKafkaReceiver#authentication_basic_password}
  */
  readonly authenticationBasicPassword?: string;
  /**
  * The username the Kafka Receiver uses to login to the remote Kafka broker. To be used when authentication_scheme is "basic".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_basic_username MsgVpnKafkaReceiver#authentication_basic_username}
  */
  readonly authenticationBasicUsername?: string;
  /**
  * The PEM formatted content for the client certificate used by the Kafka Receiver to login to the remote Kafka broker. To be used when authentication_scheme is "client-certificate". Alternatively this will be used for other values of authentication_scheme when the Kafka broker has an `ssl.client.auth` setting of "requested" or "required" and KIP-684 (mTLS) is supported by the Kafka broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_client_cert_content MsgVpnKafkaReceiver#authentication_client_cert_content}
  */
  readonly authenticationClientCertContent?: string;
  /**
  * The password for the client certificate. To be used when authentication_scheme is "client-certificate". Alternatively this will be used for other values of authentication_scheme when the Kafka broker has an `ssl.client.auth` setting of "requested" or "required" and KIP-684 (mTLS) is supported by the Kafka broker.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_client_cert_password MsgVpnKafkaReceiver#authentication_client_cert_password}
  */
  readonly authenticationClientCertPassword?: string;
  /**
  * The base64-encoded content of this User Principal's keytab.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_kerberos_keytab_content MsgVpnKafkaReceiver#authentication_kerberos_keytab_content}
  */
  readonly authenticationKerberosKeytabContent?: string;
  /**
  * The name of this User Principal's keytab file.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_kerberos_keytab_file_name MsgVpnKafkaReceiver#authentication_kerberos_keytab_file_name}
  */
  readonly authenticationKerberosKeytabFileName?: string;
  /**
  * The Kerberos service name of the remote Kafka broker, not including /hostname@REALM.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_kerberos_service_name MsgVpnKafkaReceiver#authentication_kerberos_service_name}
  */
  readonly authenticationKerberosServiceName?: string;
  /**
  * The Kerberos user principal name of the Kafka Receiver. This must include the @&lt;REALM&gt; suffix.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_kerberos_user_principal_name MsgVpnKafkaReceiver#authentication_kerberos_user_principal_name}
  */
  readonly authenticationKerberosUserPrincipalName?: string;
  /**
  * The OAuth client ID. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_oauth_client_id MsgVpnKafkaReceiver#authentication_oauth_client_id}
  */
  readonly authenticationOauthClientId?: string;
  /**
  * The OAuth scope. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_oauth_client_scope MsgVpnKafkaReceiver#authentication_oauth_client_scope}
  */
  readonly authenticationOauthClientScope?: string;
  /**
  * The OAuth client secret. To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_oauth_client_secret MsgVpnKafkaReceiver#authentication_oauth_client_secret}
  */
  readonly authenticationOauthClientSecret?: string;
  /**
  * The OAuth token endpoint URL that the Kafka Receiver will use to request a token for login to the Kafka broker. Must begin with "https". To be used when authentication_scheme is "oauth-client".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_oauth_client_token_endpoint MsgVpnKafkaReceiver#authentication_oauth_client_token_endpoint}
  */
  readonly authenticationOauthClientTokenEndpoint?: string;
  /**
  * The authentication scheme for the Kafka Receiver. The bootstrap addresses must resolve to an appropriately configured and compatible listener port on the Kafka broker for the given scheme.
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_scheme MsgVpnKafkaReceiver#authentication_scheme}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_scram_hash MsgVpnKafkaReceiver#authentication_scram_hash}
  */
  readonly authenticationScramHash?: string;
  /**
  * The password for the Username. To be used when authentication_scheme is "scram".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_scram_password MsgVpnKafkaReceiver#authentication_scram_password}
  */
  readonly authenticationScramPassword?: string;
  /**
  * The username the Kafka Receiver uses to login to the remote Kafka broker. To be used when authentication_scheme is "scram".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#authentication_scram_username MsgVpnKafkaReceiver#authentication_scram_username}
  */
  readonly authenticationScramUsername?: string;
  /**
  * Delay (in ms) to wait to accumulate a batch of messages to receive. Batching is done on a per-partition basis.
  * 
  * This corresponds to the Kafka consumer API `fetch.max.wait.ms` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#batch_delay MsgVpnKafkaReceiver#batch_delay}
  */
  readonly batchDelay?: number;
  /**
  * Maximum size of a message batch, in bytes (B). Batching is done on a per-partition basis.
  * 
  * This corresponds to the Kafka consumer API `fetch.min.bytes` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#batch_max_size MsgVpnKafkaReceiver#batch_max_size}
  */
  readonly batchMaxSize?: number;
  /**
  * Comma separated list of addresses (and optional ports) of brokers in the Kafka Cluster from which the state of the entire Kafka Cluster can be learned. If a port is not provided with an address it will default to 9092.
  * 
  * This corresponds to the Kafka consumer API `bootstrap.servers` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#bootstrap_address_list MsgVpnKafkaReceiver#bootstrap_address_list}
  */
  readonly bootstrapAddressList?: string;
  /**
  * Enable or disable the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#enabled MsgVpnKafkaReceiver#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The id of the Kafka consumer group for the Receiver.
  * 
  * This corresponds to the Kafka consumer API `group.id` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#group_id MsgVpnKafkaReceiver#group_id}
  */
  readonly groupId?: string;
  /**
  * The time (in ms) between sending keepalives to the group.
  * 
  * This corresponds to the Kafka consumer API `heartbeat.interval.ms` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#group_keepalive_interval MsgVpnKafkaReceiver#group_keepalive_interval}
  */
  readonly groupKeepaliveInterval?: number;
  /**
  * The time (in ms) until unresponsive group members are removed, triggering a partition rebalance across other members of the group.
  * 
  * This corresponds to the Kafka consumer API `session.timeout.ms` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `45000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#group_keepalive_timeout MsgVpnKafkaReceiver#group_keepalive_timeout}
  */
  readonly groupKeepaliveTimeout?: number;
  /**
  * The membership type of the Kafka consumer group for the Receiver. Static members can leave and rejoin the group (within group_keepalive_timeout) without prompting a group rebalance.
  * 
  * This corresponds to the Kafka consumer API `group.instance.id` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"dynamic"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "dynamic" - Dynamic Membership.
  * "static" - Static Membership.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#group_membership_type MsgVpnKafkaReceiver#group_membership_type}
  */
  readonly groupMembershipType?: string;
  /**
  * The ordered, comma-separated list of schemes used for partition assignment of the consumer group for this Receiver. Both Eager ("range", "roundrobin") and Cooperative ("cooperative-sticky") schemes are supported. The elected group leader will choose the first common strategy provided by all members of the group. Eager and Cooperative schemes must not be mixed. For more information on these schemes, see Kafka documentation.
  * 
  * This corresponds to the Kafka consumer API `partition.assignment.strategy` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"range,roundrobin"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#group_partition_scheme_list MsgVpnKafkaReceiver#group_partition_scheme_list}
  */
  readonly groupPartitionSchemeList?: string;
  /**
  * The name of the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#kafka_receiver_name MsgVpnKafkaReceiver#kafka_receiver_name}
  */
  readonly kafkaReceiverName: string;
  /**
  * A comma-separated list of POSIX.2 regular expressions. Commas within each regular expression must be escaped as double commas. Any matching topic names will be ignored in broker metadata.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#metadata_topic_exclude_list MsgVpnKafkaReceiver#metadata_topic_exclude_list}
  */
  readonly metadataTopicExcludeList?: string;
  /**
  * The time between refreshes of topic metadata from the Kafka Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#metadata_topic_refresh_interval MsgVpnKafkaReceiver#metadata_topic_refresh_interval}
  */
  readonly metadataTopicRefreshInterval?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#msg_vpn_name MsgVpnKafkaReceiver#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Enable or disable encryption (TLS) for the Kafka Receiver. The bootstrap addresses must resolve to PLAINTEXT or SASL_PLAINTEXT listener ports when disabled, and SSL or SASL_SSL listener ports when enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#transport_tls_enabled MsgVpnKafkaReceiver#transport_tls_enabled}
  */
  readonly transportTlsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver solacebroker_msg_vpn_kafka_receiver}
*/
export class MsgVpnKafkaReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnKafkaReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnKafkaReceiver to import
  * @param importFromId The id of the existing MsgVpnKafkaReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnKafkaReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_receiver solacebroker_msg_vpn_kafka_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnKafkaReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnKafkaReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_receiver',
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
    this._batchMaxSize = config.batchMaxSize;
    this._bootstrapAddressList = config.bootstrapAddressList;
    this._enabled = config.enabled;
    this._groupId = config.groupId;
    this._groupKeepaliveInterval = config.groupKeepaliveInterval;
    this._groupKeepaliveTimeout = config.groupKeepaliveTimeout;
    this._groupMembershipType = config.groupMembershipType;
    this._groupPartitionSchemeList = config.groupPartitionSchemeList;
    this._kafkaReceiverName = config.kafkaReceiverName;
    this._metadataTopicExcludeList = config.metadataTopicExcludeList;
    this._metadataTopicRefreshInterval = config.metadataTopicRefreshInterval;
    this._msgVpnName = config.msgVpnName;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_keepalive_interval - computed: false, optional: true, required: false
  private _groupKeepaliveInterval?: number; 
  public get groupKeepaliveInterval() {
    return this.getNumberAttribute('group_keepalive_interval');
  }
  public set groupKeepaliveInterval(value: number) {
    this._groupKeepaliveInterval = value;
  }
  public resetGroupKeepaliveInterval() {
    this._groupKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeepaliveIntervalInput() {
    return this._groupKeepaliveInterval;
  }

  // group_keepalive_timeout - computed: false, optional: true, required: false
  private _groupKeepaliveTimeout?: number; 
  public get groupKeepaliveTimeout() {
    return this.getNumberAttribute('group_keepalive_timeout');
  }
  public set groupKeepaliveTimeout(value: number) {
    this._groupKeepaliveTimeout = value;
  }
  public resetGroupKeepaliveTimeout() {
    this._groupKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeepaliveTimeoutInput() {
    return this._groupKeepaliveTimeout;
  }

  // group_membership_type - computed: false, optional: true, required: false
  private _groupMembershipType?: string; 
  public get groupMembershipType() {
    return this.getStringAttribute('group_membership_type');
  }
  public set groupMembershipType(value: string) {
    this._groupMembershipType = value;
  }
  public resetGroupMembershipType() {
    this._groupMembershipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipTypeInput() {
    return this._groupMembershipType;
  }

  // group_partition_scheme_list - computed: false, optional: true, required: false
  private _groupPartitionSchemeList?: string; 
  public get groupPartitionSchemeList() {
    return this.getStringAttribute('group_partition_scheme_list');
  }
  public set groupPartitionSchemeList(value: string) {
    this._groupPartitionSchemeList = value;
  }
  public resetGroupPartitionSchemeList() {
    this._groupPartitionSchemeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPartitionSchemeListInput() {
    return this._groupPartitionSchemeList;
  }

  // kafka_receiver_name - computed: false, optional: false, required: true
  private _kafkaReceiverName?: string; 
  public get kafkaReceiverName() {
    return this.getStringAttribute('kafka_receiver_name');
  }
  public set kafkaReceiverName(value: string) {
    this._kafkaReceiverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReceiverNameInput() {
    return this._kafkaReceiverName;
  }

  // metadata_topic_exclude_list - computed: false, optional: true, required: false
  private _metadataTopicExcludeList?: string; 
  public get metadataTopicExcludeList() {
    return this.getStringAttribute('metadata_topic_exclude_list');
  }
  public set metadataTopicExcludeList(value: string) {
    this._metadataTopicExcludeList = value;
  }
  public resetMetadataTopicExcludeList() {
    this._metadataTopicExcludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataTopicExcludeListInput() {
    return this._metadataTopicExcludeList;
  }

  // metadata_topic_refresh_interval - computed: false, optional: true, required: false
  private _metadataTopicRefreshInterval?: number; 
  public get metadataTopicRefreshInterval() {
    return this.getNumberAttribute('metadata_topic_refresh_interval');
  }
  public set metadataTopicRefreshInterval(value: number) {
    this._metadataTopicRefreshInterval = value;
  }
  public resetMetadataTopicRefreshInterval() {
    this._metadataTopicRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataTopicRefreshIntervalInput() {
    return this._metadataTopicRefreshInterval;
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
      batch_max_size: cdktf.numberToTerraform(this._batchMaxSize),
      bootstrap_address_list: cdktf.stringToTerraform(this._bootstrapAddressList),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_keepalive_interval: cdktf.numberToTerraform(this._groupKeepaliveInterval),
      group_keepalive_timeout: cdktf.numberToTerraform(this._groupKeepaliveTimeout),
      group_membership_type: cdktf.stringToTerraform(this._groupMembershipType),
      group_partition_scheme_list: cdktf.stringToTerraform(this._groupPartitionSchemeList),
      kafka_receiver_name: cdktf.stringToTerraform(this._kafkaReceiverName),
      metadata_topic_exclude_list: cdktf.stringToTerraform(this._metadataTopicExcludeList),
      metadata_topic_refresh_interval: cdktf.numberToTerraform(this._metadataTopicRefreshInterval),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
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
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._groupKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_keepalive_timeout: {
        value: cdktf.numberToHclTerraform(this._groupKeepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_membership_type: {
        value: cdktf.stringToHclTerraform(this._groupMembershipType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_partition_scheme_list: {
        value: cdktf.stringToHclTerraform(this._groupPartitionSchemeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_receiver_name: {
        value: cdktf.stringToHclTerraform(this._kafkaReceiverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_topic_exclude_list: {
        value: cdktf.stringToHclTerraform(this._metadataTopicExcludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_topic_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._metadataTopicRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
