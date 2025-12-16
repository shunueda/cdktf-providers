// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS access key id.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_aws_access_key_id SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_aws_access_key_id}
  */
  readonly authenticationAwsAccessKeyId?: string;
  /**
  * The AWS region id.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_aws_region SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_aws_region}
  */
  readonly authenticationAwsRegion?: string;
  /**
  * The AWS secret access key.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_aws_secret_access_key SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_aws_secret_access_key}
  */
  readonly authenticationAwsSecretAccessKey?: string;
  /**
  * The AWS service id.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_aws_service SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_aws_service}
  */
  readonly authenticationAwsService?: string;
  /**
  * The PEM formatted content for the client certificate that the REST Consumer will present to the REST host. It must consist of a private key and between one and three certificates comprising the certificate trust chain.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_client_cert_content SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_client_cert_content}
  */
  readonly authenticationClientCertContent?: string;
  /**
  * The password for the client certificate.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_client_cert_password SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_client_cert_password}
  */
  readonly authenticationClientCertPassword?: string;
  /**
  * The password for the username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_http_basic_password SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_http_basic_password}
  */
  readonly authenticationHttpBasicPassword?: string;
  /**
  * The username that the REST Consumer will use to login to the REST host. Normally a username is only configured when basic authentication is selected for the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_http_basic_username SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_http_basic_username}
  */
  readonly authenticationHttpBasicUsername?: string;
  /**
  * The authentication header name.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_http_header_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_http_header_name}
  */
  readonly authenticationHttpHeaderName?: string;
  /**
  * The authentication header value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_http_header_value SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_http_header_value}
  */
  readonly authenticationHttpHeaderValue?: string;
  /**
  * The OAuth client ID.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_id SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_id}
  */
  readonly authenticationOauthClientId?: string;
  /**
  * The name of the proxy to use. Leave empty for no proxy.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.42.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_proxy_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_proxy_name}
  */
  readonly authenticationOauthClientProxyName?: string;
  /**
  * The OAuth scope.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_scope SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_scope}
  */
  readonly authenticationOauthClientScope?: string;
  /**
  * The OAuth client secret.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_secret SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_secret}
  */
  readonly authenticationOauthClientSecret?: string;
  /**
  * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_token_endpoint SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_token_endpoint}
  */
  readonly authenticationOauthClientTokenEndpoint?: string;
  /**
  * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `900`. Available since SEMP API version 2.30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_client_token_expiry_default SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_client_token_expiry_default}
  */
  readonly authenticationOauthClientTokenExpiryDefault?: number;
  /**
  * The name of the proxy to use. Leave empty for no proxy.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.42.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_jwt_proxy_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_jwt_proxy_name}
  */
  readonly authenticationOauthJwtProxyName?: string;
  /**
  * The OAuth secret key used to sign the token request JWT.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_jwt_secret_key SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_jwt_secret_key}
  */
  readonly authenticationOauthJwtSecretKey?: string;
  /**
  * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_jwt_token_endpoint SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_jwt_token_endpoint}
  */
  readonly authenticationOauthJwtTokenEndpoint?: string;
  /**
  * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `900`. Available since SEMP API version 2.30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_oauth_jwt_token_expiry_default SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_oauth_jwt_token_expiry_default}
  */
  readonly authenticationOauthJwtTokenExpiryDefault?: number;
  /**
  * The authentication scheme used by the REST Consumer to login to the REST host.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - Login with no authentication. This may be useful for anonymous connections or when a REST Consumer does not require authentication.
  * "http-basic" - Login with a username and optional password according to HTTP Basic authentication as per RFC 2616.
  * "client-certificate" - Login with a client TLS certificate as per RFC 5246. Client certificate authentication is only available on TLS connections.
  * "http-header" - Login with a specified HTTP header.
  * "oauth-client" - Login with OAuth 2.0 client credentials.
  * "oauth-jwt" - Login with OAuth (RFC 7523 JWT Profile).
  * "transparent" - Login using the Authorization header from the message properties, if present. Transparent authentication passes along existing Authorization header metadata instead of discarding it. Note that if the message is coming from a REST producer, the REST service must be configured to forward the Authorization header.
  * "aws" - Login using AWS Signature Version 4 authentication (AWS4-HMAC-SHA256).
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#authentication_scheme SolacebrokerMsgVpnRestDeliveryPointRestConsumer#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * Enable or disable the REST Consumer. When disabled, no connections are initiated or messages delivered to this particular REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#enabled SolacebrokerMsgVpnRestDeliveryPointRestConsumer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The HTTP method to use (POST or PUT). This is used only when operating in the REST service "messaging" mode and is ignored in "gateway" mode.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"post"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "post" - Use the POST HTTP method.
  * "put" - Use the PUT HTTP method.
  * </pre>
  *  Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#http_method SolacebrokerMsgVpnRestDeliveryPointRestConsumer#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The interface that will be used for all outgoing connections associated with the REST Consumer. When unspecified, an interface is automatically chosen.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#local_interface SolacebrokerMsgVpnRestDeliveryPointRestConsumer#local_interface}
  */
  readonly localInterface?: string;
  /**
  * The maximum amount of time (in seconds) to wait for an HTTP POST response from the REST Consumer. Once this time is exceeded, the TCP connection is reset.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#max_post_wait_time SolacebrokerMsgVpnRestDeliveryPointRestConsumer#max_post_wait_time}
  */
  readonly maxPostWaitTime?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#msg_vpn_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The number of concurrent TCP connections open to the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#outgoing_connection_count SolacebrokerMsgVpnRestDeliveryPointRestConsumer#outgoing_connection_count}
  */
  readonly outgoingConnectionCount?: number;
  /**
  * The name of the proxy to use. Leave empty for no proxy.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#proxy_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#proxy_name}
  */
  readonly proxyName?: string;
  /**
  * Comma-separated list of HTTP status codes or status code ranges which should be processed as a "rejected" (do not retry) outcome.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.47.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#rejected_status_code_list SolacebrokerMsgVpnRestDeliveryPointRestConsumer#rejected_status_code_list}
  */
  readonly rejectedStatusCodeList?: string;
  /**
  * The IP address or DNS name to which the broker is to connect to deliver messages for the REST Consumer. A host value must be configured for the REST Consumer to be operationally up.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#remote_host SolacebrokerMsgVpnRestDeliveryPointRestConsumer#remote_host}
  */
  readonly remoteHost?: string;
  /**
  * The port associated with the host of the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `8080`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#remote_port SolacebrokerMsgVpnRestDeliveryPointRestConsumer#remote_port}
  */
  readonly remotePort?: number;
  /**
  * The name of the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#rest_consumer_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#rest_consumer_name}
  */
  readonly restConsumerName: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#rest_delivery_point_name SolacebrokerMsgVpnRestDeliveryPointRestConsumer#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
  /**
  * The number of seconds that must pass before retrying the remote REST Consumer connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#retry_delay SolacebrokerMsgVpnRestDeliveryPointRestConsumer#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * The colon-separated list of cipher suites the REST Consumer uses in its encrypted connection when using TLS 1.2 and lower. The value `"default"` implies all supported suites ordered from most secure to least secure. The list of default cipher suites is available in the `tlsCipherSuiteMsgBackboneDefaultList` attribute of the broker object in the Monitoring API. The REST Consumer should choose the first suite from this list that it supports.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#tls_cipher_suite_list SolacebrokerMsgVpnRestDeliveryPointRestConsumer#tls_cipher_suite_list}
  */
  readonly tlsCipherSuiteList?: string;
  /**
  * Enable or disable encryption (TLS) for the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#tls_enabled SolacebrokerMsgVpnRestDeliveryPointRestConsumer#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer solacebroker_msg_vpn_rest_delivery_point_rest_consumer}
*/
export class SolacebrokerMsgVpnRestDeliveryPointRestConsumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point_rest_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnRestDeliveryPointRestConsumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnRestDeliveryPointRestConsumer to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnRestDeliveryPointRestConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnRestDeliveryPointRestConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point_rest_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer solacebroker_msg_vpn_rest_delivery_point_rest_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point_rest_consumer',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationAwsAccessKeyId = config.authenticationAwsAccessKeyId;
    this._authenticationAwsRegion = config.authenticationAwsRegion;
    this._authenticationAwsSecretAccessKey = config.authenticationAwsSecretAccessKey;
    this._authenticationAwsService = config.authenticationAwsService;
    this._authenticationClientCertContent = config.authenticationClientCertContent;
    this._authenticationClientCertPassword = config.authenticationClientCertPassword;
    this._authenticationHttpBasicPassword = config.authenticationHttpBasicPassword;
    this._authenticationHttpBasicUsername = config.authenticationHttpBasicUsername;
    this._authenticationHttpHeaderName = config.authenticationHttpHeaderName;
    this._authenticationHttpHeaderValue = config.authenticationHttpHeaderValue;
    this._authenticationOauthClientId = config.authenticationOauthClientId;
    this._authenticationOauthClientProxyName = config.authenticationOauthClientProxyName;
    this._authenticationOauthClientScope = config.authenticationOauthClientScope;
    this._authenticationOauthClientSecret = config.authenticationOauthClientSecret;
    this._authenticationOauthClientTokenEndpoint = config.authenticationOauthClientTokenEndpoint;
    this._authenticationOauthClientTokenExpiryDefault = config.authenticationOauthClientTokenExpiryDefault;
    this._authenticationOauthJwtProxyName = config.authenticationOauthJwtProxyName;
    this._authenticationOauthJwtSecretKey = config.authenticationOauthJwtSecretKey;
    this._authenticationOauthJwtTokenEndpoint = config.authenticationOauthJwtTokenEndpoint;
    this._authenticationOauthJwtTokenExpiryDefault = config.authenticationOauthJwtTokenExpiryDefault;
    this._authenticationScheme = config.authenticationScheme;
    this._enabled = config.enabled;
    this._httpMethod = config.httpMethod;
    this._localInterface = config.localInterface;
    this._maxPostWaitTime = config.maxPostWaitTime;
    this._msgVpnName = config.msgVpnName;
    this._outgoingConnectionCount = config.outgoingConnectionCount;
    this._proxyName = config.proxyName;
    this._rejectedStatusCodeList = config.rejectedStatusCodeList;
    this._remoteHost = config.remoteHost;
    this._remotePort = config.remotePort;
    this._restConsumerName = config.restConsumerName;
    this._restDeliveryPointName = config.restDeliveryPointName;
    this._retryDelay = config.retryDelay;
    this._tlsCipherSuiteList = config.tlsCipherSuiteList;
    this._tlsEnabled = config.tlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_aws_access_key_id - computed: false, optional: true, required: false
  private _authenticationAwsAccessKeyId?: string; 
  public get authenticationAwsAccessKeyId() {
    return this.getStringAttribute('authentication_aws_access_key_id');
  }
  public set authenticationAwsAccessKeyId(value: string) {
    this._authenticationAwsAccessKeyId = value;
  }
  public resetAuthenticationAwsAccessKeyId() {
    this._authenticationAwsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsAccessKeyIdInput() {
    return this._authenticationAwsAccessKeyId;
  }

  // authentication_aws_region - computed: false, optional: true, required: false
  private _authenticationAwsRegion?: string; 
  public get authenticationAwsRegion() {
    return this.getStringAttribute('authentication_aws_region');
  }
  public set authenticationAwsRegion(value: string) {
    this._authenticationAwsRegion = value;
  }
  public resetAuthenticationAwsRegion() {
    this._authenticationAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsRegionInput() {
    return this._authenticationAwsRegion;
  }

  // authentication_aws_secret_access_key - computed: false, optional: true, required: false
  private _authenticationAwsSecretAccessKey?: string; 
  public get authenticationAwsSecretAccessKey() {
    return this.getStringAttribute('authentication_aws_secret_access_key');
  }
  public set authenticationAwsSecretAccessKey(value: string) {
    this._authenticationAwsSecretAccessKey = value;
  }
  public resetAuthenticationAwsSecretAccessKey() {
    this._authenticationAwsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsSecretAccessKeyInput() {
    return this._authenticationAwsSecretAccessKey;
  }

  // authentication_aws_service - computed: false, optional: true, required: false
  private _authenticationAwsService?: string; 
  public get authenticationAwsService() {
    return this.getStringAttribute('authentication_aws_service');
  }
  public set authenticationAwsService(value: string) {
    this._authenticationAwsService = value;
  }
  public resetAuthenticationAwsService() {
    this._authenticationAwsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAwsServiceInput() {
    return this._authenticationAwsService;
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

  // authentication_http_basic_password - computed: false, optional: true, required: false
  private _authenticationHttpBasicPassword?: string; 
  public get authenticationHttpBasicPassword() {
    return this.getStringAttribute('authentication_http_basic_password');
  }
  public set authenticationHttpBasicPassword(value: string) {
    this._authenticationHttpBasicPassword = value;
  }
  public resetAuthenticationHttpBasicPassword() {
    this._authenticationHttpBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationHttpBasicPasswordInput() {
    return this._authenticationHttpBasicPassword;
  }

  // authentication_http_basic_username - computed: false, optional: true, required: false
  private _authenticationHttpBasicUsername?: string; 
  public get authenticationHttpBasicUsername() {
    return this.getStringAttribute('authentication_http_basic_username');
  }
  public set authenticationHttpBasicUsername(value: string) {
    this._authenticationHttpBasicUsername = value;
  }
  public resetAuthenticationHttpBasicUsername() {
    this._authenticationHttpBasicUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationHttpBasicUsernameInput() {
    return this._authenticationHttpBasicUsername;
  }

  // authentication_http_header_name - computed: false, optional: true, required: false
  private _authenticationHttpHeaderName?: string; 
  public get authenticationHttpHeaderName() {
    return this.getStringAttribute('authentication_http_header_name');
  }
  public set authenticationHttpHeaderName(value: string) {
    this._authenticationHttpHeaderName = value;
  }
  public resetAuthenticationHttpHeaderName() {
    this._authenticationHttpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationHttpHeaderNameInput() {
    return this._authenticationHttpHeaderName;
  }

  // authentication_http_header_value - computed: false, optional: true, required: false
  private _authenticationHttpHeaderValue?: string; 
  public get authenticationHttpHeaderValue() {
    return this.getStringAttribute('authentication_http_header_value');
  }
  public set authenticationHttpHeaderValue(value: string) {
    this._authenticationHttpHeaderValue = value;
  }
  public resetAuthenticationHttpHeaderValue() {
    this._authenticationHttpHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationHttpHeaderValueInput() {
    return this._authenticationHttpHeaderValue;
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

  // authentication_oauth_client_proxy_name - computed: false, optional: true, required: false
  private _authenticationOauthClientProxyName?: string; 
  public get authenticationOauthClientProxyName() {
    return this.getStringAttribute('authentication_oauth_client_proxy_name');
  }
  public set authenticationOauthClientProxyName(value: string) {
    this._authenticationOauthClientProxyName = value;
  }
  public resetAuthenticationOauthClientProxyName() {
    this._authenticationOauthClientProxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientProxyNameInput() {
    return this._authenticationOauthClientProxyName;
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

  // authentication_oauth_client_token_expiry_default - computed: false, optional: true, required: false
  private _authenticationOauthClientTokenExpiryDefault?: number; 
  public get authenticationOauthClientTokenExpiryDefault() {
    return this.getNumberAttribute('authentication_oauth_client_token_expiry_default');
  }
  public set authenticationOauthClientTokenExpiryDefault(value: number) {
    this._authenticationOauthClientTokenExpiryDefault = value;
  }
  public resetAuthenticationOauthClientTokenExpiryDefault() {
    this._authenticationOauthClientTokenExpiryDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthClientTokenExpiryDefaultInput() {
    return this._authenticationOauthClientTokenExpiryDefault;
  }

  // authentication_oauth_jwt_proxy_name - computed: false, optional: true, required: false
  private _authenticationOauthJwtProxyName?: string; 
  public get authenticationOauthJwtProxyName() {
    return this.getStringAttribute('authentication_oauth_jwt_proxy_name');
  }
  public set authenticationOauthJwtProxyName(value: string) {
    this._authenticationOauthJwtProxyName = value;
  }
  public resetAuthenticationOauthJwtProxyName() {
    this._authenticationOauthJwtProxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthJwtProxyNameInput() {
    return this._authenticationOauthJwtProxyName;
  }

  // authentication_oauth_jwt_secret_key - computed: false, optional: true, required: false
  private _authenticationOauthJwtSecretKey?: string; 
  public get authenticationOauthJwtSecretKey() {
    return this.getStringAttribute('authentication_oauth_jwt_secret_key');
  }
  public set authenticationOauthJwtSecretKey(value: string) {
    this._authenticationOauthJwtSecretKey = value;
  }
  public resetAuthenticationOauthJwtSecretKey() {
    this._authenticationOauthJwtSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthJwtSecretKeyInput() {
    return this._authenticationOauthJwtSecretKey;
  }

  // authentication_oauth_jwt_token_endpoint - computed: false, optional: true, required: false
  private _authenticationOauthJwtTokenEndpoint?: string; 
  public get authenticationOauthJwtTokenEndpoint() {
    return this.getStringAttribute('authentication_oauth_jwt_token_endpoint');
  }
  public set authenticationOauthJwtTokenEndpoint(value: string) {
    this._authenticationOauthJwtTokenEndpoint = value;
  }
  public resetAuthenticationOauthJwtTokenEndpoint() {
    this._authenticationOauthJwtTokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthJwtTokenEndpointInput() {
    return this._authenticationOauthJwtTokenEndpoint;
  }

  // authentication_oauth_jwt_token_expiry_default - computed: false, optional: true, required: false
  private _authenticationOauthJwtTokenExpiryDefault?: number; 
  public get authenticationOauthJwtTokenExpiryDefault() {
    return this.getNumberAttribute('authentication_oauth_jwt_token_expiry_default');
  }
  public set authenticationOauthJwtTokenExpiryDefault(value: number) {
    this._authenticationOauthJwtTokenExpiryDefault = value;
  }
  public resetAuthenticationOauthJwtTokenExpiryDefault() {
    this._authenticationOauthJwtTokenExpiryDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthJwtTokenExpiryDefaultInput() {
    return this._authenticationOauthJwtTokenExpiryDefault;
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

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // local_interface - computed: false, optional: true, required: false
  private _localInterface?: string; 
  public get localInterface() {
    return this.getStringAttribute('local_interface');
  }
  public set localInterface(value: string) {
    this._localInterface = value;
  }
  public resetLocalInterface() {
    this._localInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInterfaceInput() {
    return this._localInterface;
  }

  // max_post_wait_time - computed: false, optional: true, required: false
  private _maxPostWaitTime?: number; 
  public get maxPostWaitTime() {
    return this.getNumberAttribute('max_post_wait_time');
  }
  public set maxPostWaitTime(value: number) {
    this._maxPostWaitTime = value;
  }
  public resetMaxPostWaitTime() {
    this._maxPostWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPostWaitTimeInput() {
    return this._maxPostWaitTime;
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

  // outgoing_connection_count - computed: false, optional: true, required: false
  private _outgoingConnectionCount?: number; 
  public get outgoingConnectionCount() {
    return this.getNumberAttribute('outgoing_connection_count');
  }
  public set outgoingConnectionCount(value: number) {
    this._outgoingConnectionCount = value;
  }
  public resetOutgoingConnectionCount() {
    this._outgoingConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingConnectionCountInput() {
    return this._outgoingConnectionCount;
  }

  // proxy_name - computed: false, optional: true, required: false
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  public resetProxyName() {
    this._proxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // rejected_status_code_list - computed: false, optional: true, required: false
  private _rejectedStatusCodeList?: string; 
  public get rejectedStatusCodeList() {
    return this.getStringAttribute('rejected_status_code_list');
  }
  public set rejectedStatusCodeList(value: string) {
    this._rejectedStatusCodeList = value;
  }
  public resetRejectedStatusCodeList() {
    this._rejectedStatusCodeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedStatusCodeListInput() {
    return this._rejectedStatusCodeList;
  }

  // remote_host - computed: false, optional: true, required: false
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  public resetRemoteHost() {
    this._remoteHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // rest_consumer_name - computed: false, optional: false, required: true
  private _restConsumerName?: string; 
  public get restConsumerName() {
    return this.getStringAttribute('rest_consumer_name');
  }
  public set restConsumerName(value: string) {
    this._restConsumerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restConsumerNameInput() {
    return this._restConsumerName;
  }

  // rest_delivery_point_name - computed: false, optional: false, required: true
  private _restDeliveryPointName?: string; 
  public get restDeliveryPointName() {
    return this.getStringAttribute('rest_delivery_point_name');
  }
  public set restDeliveryPointName(value: string) {
    this._restDeliveryPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restDeliveryPointNameInput() {
    return this._restDeliveryPointName;
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // tls_cipher_suite_list - computed: false, optional: true, required: false
  private _tlsCipherSuiteList?: string; 
  public get tlsCipherSuiteList() {
    return this.getStringAttribute('tls_cipher_suite_list');
  }
  public set tlsCipherSuiteList(value: string) {
    this._tlsCipherSuiteList = value;
  }
  public resetTlsCipherSuiteList() {
    this._tlsCipherSuiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteListInput() {
    return this._tlsCipherSuiteList;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_aws_access_key_id: cdktf.stringToTerraform(this._authenticationAwsAccessKeyId),
      authentication_aws_region: cdktf.stringToTerraform(this._authenticationAwsRegion),
      authentication_aws_secret_access_key: cdktf.stringToTerraform(this._authenticationAwsSecretAccessKey),
      authentication_aws_service: cdktf.stringToTerraform(this._authenticationAwsService),
      authentication_client_cert_content: cdktf.stringToTerraform(this._authenticationClientCertContent),
      authentication_client_cert_password: cdktf.stringToTerraform(this._authenticationClientCertPassword),
      authentication_http_basic_password: cdktf.stringToTerraform(this._authenticationHttpBasicPassword),
      authentication_http_basic_username: cdktf.stringToTerraform(this._authenticationHttpBasicUsername),
      authentication_http_header_name: cdktf.stringToTerraform(this._authenticationHttpHeaderName),
      authentication_http_header_value: cdktf.stringToTerraform(this._authenticationHttpHeaderValue),
      authentication_oauth_client_id: cdktf.stringToTerraform(this._authenticationOauthClientId),
      authentication_oauth_client_proxy_name: cdktf.stringToTerraform(this._authenticationOauthClientProxyName),
      authentication_oauth_client_scope: cdktf.stringToTerraform(this._authenticationOauthClientScope),
      authentication_oauth_client_secret: cdktf.stringToTerraform(this._authenticationOauthClientSecret),
      authentication_oauth_client_token_endpoint: cdktf.stringToTerraform(this._authenticationOauthClientTokenEndpoint),
      authentication_oauth_client_token_expiry_default: cdktf.numberToTerraform(this._authenticationOauthClientTokenExpiryDefault),
      authentication_oauth_jwt_proxy_name: cdktf.stringToTerraform(this._authenticationOauthJwtProxyName),
      authentication_oauth_jwt_secret_key: cdktf.stringToTerraform(this._authenticationOauthJwtSecretKey),
      authentication_oauth_jwt_token_endpoint: cdktf.stringToTerraform(this._authenticationOauthJwtTokenEndpoint),
      authentication_oauth_jwt_token_expiry_default: cdktf.numberToTerraform(this._authenticationOauthJwtTokenExpiryDefault),
      authentication_scheme: cdktf.stringToTerraform(this._authenticationScheme),
      enabled: cdktf.booleanToTerraform(this._enabled),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      local_interface: cdktf.stringToTerraform(this._localInterface),
      max_post_wait_time: cdktf.numberToTerraform(this._maxPostWaitTime),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      outgoing_connection_count: cdktf.numberToTerraform(this._outgoingConnectionCount),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      rejected_status_code_list: cdktf.stringToTerraform(this._rejectedStatusCodeList),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      rest_consumer_name: cdktf.stringToTerraform(this._restConsumerName),
      rest_delivery_point_name: cdktf.stringToTerraform(this._restDeliveryPointName),
      retry_delay: cdktf.numberToTerraform(this._retryDelay),
      tls_cipher_suite_list: cdktf.stringToTerraform(this._tlsCipherSuiteList),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_region: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_aws_service: {
        value: cdktf.stringToHclTerraform(this._authenticationAwsService),
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
      authentication_http_basic_password: {
        value: cdktf.stringToHclTerraform(this._authenticationHttpBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_http_basic_username: {
        value: cdktf.stringToHclTerraform(this._authenticationHttpBasicUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_http_header_name: {
        value: cdktf.stringToHclTerraform(this._authenticationHttpHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_http_header_value: {
        value: cdktf.stringToHclTerraform(this._authenticationHttpHeaderValue),
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
      authentication_oauth_client_proxy_name: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthClientProxyName),
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
      authentication_oauth_client_token_expiry_default: {
        value: cdktf.numberToHclTerraform(this._authenticationOauthClientTokenExpiryDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_oauth_jwt_proxy_name: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthJwtProxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_jwt_secret_key: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthJwtSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_jwt_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthJwtTokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_jwt_token_expiry_default: {
        value: cdktf.numberToHclTerraform(this._authenticationOauthJwtTokenExpiryDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._authenticationScheme),
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
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_interface: {
        value: cdktf.stringToHclTerraform(this._localInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_post_wait_time: {
        value: cdktf.numberToHclTerraform(this._maxPostWaitTime),
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
      outgoing_connection_count: {
        value: cdktf.numberToHclTerraform(this._outgoingConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rejected_status_code_list: {
        value: cdktf.stringToHclTerraform(this._rejectedStatusCodeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rest_consumer_name: {
        value: cdktf.stringToHclTerraform(this._restConsumerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_delivery_point_name: {
        value: cdktf.stringToHclTerraform(this._restDeliveryPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_delay: {
        value: cdktf.numberToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_cipher_suite_list: {
        value: cdktf.stringToHclTerraform(this._tlsCipherSuiteList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
