// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceComputeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Conditionally prevents new service versions from being activated. The apply step will create a new draft version but will not activate it if this is set to `false`. Default `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#activate ServiceCompute#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * Description field for the service. Default `Managed by Terraform`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#comment ServiceCompute#comment}
  */
  readonly comment?: string;
  /**
  * Services that are active cannot be destroyed. In order to destroy the Service, set `force_destroy` to `true`. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#force_destroy ServiceCompute#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#id ServiceCompute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name for the Service to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Services that are active cannot be destroyed. If set to `true` a service Terraform intends to destroy will instead be deactivated (allowing it to be reused by importing it into another Terraform project). If `false`, attempting to destroy an active service will cause an error. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#reuse ServiceCompute#reuse}
  */
  readonly reuse?: boolean | cdktf.IResolvable;
  /**
  * Conditionally enables new service versions to be staged. If set to `true`, all changes made by an `apply` step will be staged, even if `apply` did not create a new draft version. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#stage ServiceCompute#stage}
  */
  readonly stage?: boolean | cdktf.IResolvable;
  /**
  * Description field for the version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#version_comment ServiceCompute#version_comment}
  */
  readonly versionComment?: string;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#backend ServiceCompute#backend}
  */
  readonly backend?: ServiceComputeBackend[] | cdktf.IResolvable;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#dictionary ServiceCompute#dictionary}
  */
  readonly dictionary?: ServiceComputeDictionary[] | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#domain ServiceCompute#domain}
  */
  readonly domain?: ServiceComputeDomain[] | cdktf.IResolvable;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#healthcheck ServiceCompute#healthcheck}
  */
  readonly healthcheck?: ServiceComputeHealthcheck[] | cdktf.IResolvable;
  /**
  * image_optimizer_default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#image_optimizer_default_settings ServiceCompute#image_optimizer_default_settings}
  */
  readonly imageOptimizerDefaultSettings?: ServiceComputeImageOptimizerDefaultSettings;
  /**
  * logging_bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_bigquery ServiceCompute#logging_bigquery}
  */
  readonly loggingBigquery?: ServiceComputeLoggingBigquery[] | cdktf.IResolvable;
  /**
  * logging_blobstorage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_blobstorage ServiceCompute#logging_blobstorage}
  */
  readonly loggingBlobstorage?: ServiceComputeLoggingBlobstorage[] | cdktf.IResolvable;
  /**
  * logging_cloudfiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_cloudfiles ServiceCompute#logging_cloudfiles}
  */
  readonly loggingCloudfiles?: ServiceComputeLoggingCloudfiles[] | cdktf.IResolvable;
  /**
  * logging_datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_datadog ServiceCompute#logging_datadog}
  */
  readonly loggingDatadog?: ServiceComputeLoggingDatadog[] | cdktf.IResolvable;
  /**
  * logging_digitalocean block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_digitalocean ServiceCompute#logging_digitalocean}
  */
  readonly loggingDigitalocean?: ServiceComputeLoggingDigitalocean[] | cdktf.IResolvable;
  /**
  * logging_elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_elasticsearch ServiceCompute#logging_elasticsearch}
  */
  readonly loggingElasticsearch?: ServiceComputeLoggingElasticsearch[] | cdktf.IResolvable;
  /**
  * logging_ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_ftp ServiceCompute#logging_ftp}
  */
  readonly loggingFtp?: ServiceComputeLoggingFtp[] | cdktf.IResolvable;
  /**
  * logging_gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_gcs ServiceCompute#logging_gcs}
  */
  readonly loggingGcs?: ServiceComputeLoggingGcs[] | cdktf.IResolvable;
  /**
  * logging_googlepubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_googlepubsub ServiceCompute#logging_googlepubsub}
  */
  readonly loggingGooglepubsub?: ServiceComputeLoggingGooglepubsub[] | cdktf.IResolvable;
  /**
  * logging_grafanacloudlogs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_grafanacloudlogs ServiceCompute#logging_grafanacloudlogs}
  */
  readonly loggingGrafanacloudlogs?: ServiceComputeLoggingGrafanacloudlogs[] | cdktf.IResolvable;
  /**
  * logging_heroku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_heroku ServiceCompute#logging_heroku}
  */
  readonly loggingHeroku?: ServiceComputeLoggingHeroku[] | cdktf.IResolvable;
  /**
  * logging_honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_honeycomb ServiceCompute#logging_honeycomb}
  */
  readonly loggingHoneycomb?: ServiceComputeLoggingHoneycomb[] | cdktf.IResolvable;
  /**
  * logging_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_https ServiceCompute#logging_https}
  */
  readonly loggingHttps?: ServiceComputeLoggingHttps[] | cdktf.IResolvable;
  /**
  * logging_kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_kafka ServiceCompute#logging_kafka}
  */
  readonly loggingKafka?: ServiceComputeLoggingKafka[] | cdktf.IResolvable;
  /**
  * logging_kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_kinesis ServiceCompute#logging_kinesis}
  */
  readonly loggingKinesis?: ServiceComputeLoggingKinesis[] | cdktf.IResolvable;
  /**
  * logging_logentries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_logentries ServiceCompute#logging_logentries}
  */
  readonly loggingLogentries?: ServiceComputeLoggingLogentries[] | cdktf.IResolvable;
  /**
  * logging_loggly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_loggly ServiceCompute#logging_loggly}
  */
  readonly loggingLoggly?: ServiceComputeLoggingLoggly[] | cdktf.IResolvable;
  /**
  * logging_logshuttle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_logshuttle ServiceCompute#logging_logshuttle}
  */
  readonly loggingLogshuttle?: ServiceComputeLoggingLogshuttle[] | cdktf.IResolvable;
  /**
  * logging_newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_newrelic ServiceCompute#logging_newrelic}
  */
  readonly loggingNewrelic?: ServiceComputeLoggingNewrelic[] | cdktf.IResolvable;
  /**
  * logging_newrelicotlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_newrelicotlp ServiceCompute#logging_newrelicotlp}
  */
  readonly loggingNewrelicotlp?: ServiceComputeLoggingNewrelicotlp[] | cdktf.IResolvable;
  /**
  * logging_openstack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_openstack ServiceCompute#logging_openstack}
  */
  readonly loggingOpenstack?: ServiceComputeLoggingOpenstack[] | cdktf.IResolvable;
  /**
  * logging_papertrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_papertrail ServiceCompute#logging_papertrail}
  */
  readonly loggingPapertrail?: ServiceComputeLoggingPapertrail[] | cdktf.IResolvable;
  /**
  * logging_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_s3 ServiceCompute#logging_s3}
  */
  readonly loggingS3?: ServiceComputeLoggingS3[] | cdktf.IResolvable;
  /**
  * logging_scalyr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_scalyr ServiceCompute#logging_scalyr}
  */
  readonly loggingScalyr?: ServiceComputeLoggingScalyr[] | cdktf.IResolvable;
  /**
  * logging_sftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_sftp ServiceCompute#logging_sftp}
  */
  readonly loggingSftp?: ServiceComputeLoggingSftp[] | cdktf.IResolvable;
  /**
  * logging_splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_splunk ServiceCompute#logging_splunk}
  */
  readonly loggingSplunk?: ServiceComputeLoggingSplunk[] | cdktf.IResolvable;
  /**
  * logging_sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_sumologic ServiceCompute#logging_sumologic}
  */
  readonly loggingSumologic?: ServiceComputeLoggingSumologic[] | cdktf.IResolvable;
  /**
  * logging_syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#logging_syslog ServiceCompute#logging_syslog}
  */
  readonly loggingSyslog?: ServiceComputeLoggingSyslog[] | cdktf.IResolvable;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#package ServiceCompute#package}
  */
  readonly package?: ServiceComputePackage;
  /**
  * product_enablement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#product_enablement ServiceCompute#product_enablement}
  */
  readonly productEnablement?: ServiceComputeProductEnablement;
  /**
  * resource_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#resource_link ServiceCompute#resource_link}
  */
  readonly resourceLink?: ServiceComputeResourceLink[] | cdktf.IResolvable;
}
export interface ServiceComputeBackend {
  /**
  * An IPv4, hostname, or IPv6 address for the Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#address ServiceCompute#address}
  */
  readonly address: string;
  /**
  * How long to wait between bytes in milliseconds. Default `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#between_bytes_timeout ServiceCompute#between_bytes_timeout}
  */
  readonly betweenBytesTimeout?: number;
  /**
  * How long to wait for a timeout in milliseconds. Default `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#connect_timeout ServiceCompute#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Number of errors to allow before the Backend is marked as down. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#error_threshold ServiceCompute#error_threshold}
  */
  readonly errorThreshold?: number;
  /**
  * How long to wait for the first bytes in milliseconds. Default `15000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#first_byte_timeout ServiceCompute#first_byte_timeout}
  */
  readonly firstByteTimeout?: number;
  /**
  * Name of a defined `healthcheck` to assign to this backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#healthcheck ServiceCompute#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * How long in seconds to keep a persistent connection to the backend between requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#keepalive_time ServiceCompute#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Maximum number of connections for this Backend. Default `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#max_conn ServiceCompute#max_conn}
  */
  readonly maxConn?: number;
  /**
  * Maximum allowed TLS version on SSL connections to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#max_tls_version ServiceCompute#max_tls_version}
  */
  readonly maxTlsVersion?: string;
  /**
  * Minimum allowed TLS version on SSL connections to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#min_tls_version ServiceCompute#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Name for this Backend. Must be unique to this Service. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The hostname to override the Host header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#override_host ServiceCompute#override_host}
  */
  readonly overrideHost?: string;
  /**
  * The port number on which the Backend responds. Default `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port?: number;
  /**
  * Prefer IPv6 connections to origins for hostname backends. Default `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#prefer_ipv6 ServiceCompute#prefer_ipv6}
  */
  readonly preferIpv6?: boolean | cdktf.IResolvable;
  /**
  * Value that when shared across backends will enable those backends to share the same health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#share_key ServiceCompute#share_key}
  */
  readonly shareKey?: string;
  /**
  * The POP of the shield designated to reduce inbound load. Valid values for `shield` are included in the `GET /datacenters` API response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#shield ServiceCompute#shield}
  */
  readonly shield?: string;
  /**
  * CA certificate attached to origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_ca_cert ServiceCompute#ssl_ca_cert}
  */
  readonly sslCaCert?: string;
  /**
  * Configure certificate validation. Does not affect SNI at all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_cert_hostname ServiceCompute#ssl_cert_hostname}
  */
  readonly sslCertHostname?: string;
  /**
  * Be strict about checking SSL certs. Default `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_check_cert ServiceCompute#ssl_check_cert}
  */
  readonly sslCheckCert?: boolean | cdktf.IResolvable;
  /**
  * Cipher list consisting of one or more cipher strings separated by colons. Commas or spaces are also acceptable separators but colons are normally used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_ciphers ServiceCompute#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Client certificate attached to origin. Used when connecting to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_client_cert ServiceCompute#ssl_client_cert}
  */
  readonly sslClientCert?: string;
  /**
  * Client key attached to origin. Used when connecting to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_client_key ServiceCompute#ssl_client_key}
  */
  readonly sslClientKey?: string;
  /**
  * Configure SNI in the TLS handshake. Does not affect cert validation at all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssl_sni_hostname ServiceCompute#ssl_sni_hostname}
  */
  readonly sslSniHostname?: string;
  /**
  * Whether or not to use SSL to reach the Backend. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#use_ssl ServiceCompute#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * The [portion of traffic](https://docs.fastly.com/en/guides/load-balancing-configuration#how-weight-affects-load-balancing) to send to this Backend. Each Backend receives weight / total of the traffic. Default `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#weight ServiceCompute#weight}
  */
  readonly weight?: number;
}

export function serviceComputeBackendToTerraform(struct?: ServiceComputeBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    between_bytes_timeout: cdktf.numberToTerraform(struct!.betweenBytesTimeout),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    error_threshold: cdktf.numberToTerraform(struct!.errorThreshold),
    first_byte_timeout: cdktf.numberToTerraform(struct!.firstByteTimeout),
    healthcheck: cdktf.stringToTerraform(struct!.healthcheck),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    max_conn: cdktf.numberToTerraform(struct!.maxConn),
    max_tls_version: cdktf.stringToTerraform(struct!.maxTlsVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    name: cdktf.stringToTerraform(struct!.name),
    override_host: cdktf.stringToTerraform(struct!.overrideHost),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_ipv6: cdktf.booleanToTerraform(struct!.preferIpv6),
    share_key: cdktf.stringToTerraform(struct!.shareKey),
    shield: cdktf.stringToTerraform(struct!.shield),
    ssl_ca_cert: cdktf.stringToTerraform(struct!.sslCaCert),
    ssl_cert_hostname: cdktf.stringToTerraform(struct!.sslCertHostname),
    ssl_check_cert: cdktf.booleanToTerraform(struct!.sslCheckCert),
    ssl_ciphers: cdktf.stringToTerraform(struct!.sslCiphers),
    ssl_client_cert: cdktf.stringToTerraform(struct!.sslClientCert),
    ssl_client_key: cdktf.stringToTerraform(struct!.sslClientKey),
    ssl_sni_hostname: cdktf.stringToTerraform(struct!.sslSniHostname),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function serviceComputeBackendToHclTerraform(struct?: ServiceComputeBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    between_bytes_timeout: {
      value: cdktf.numberToHclTerraform(struct!.betweenBytesTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_threshold: {
      value: cdktf.numberToHclTerraform(struct!.errorThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_byte_timeout: {
      value: cdktf.numberToHclTerraform(struct!.firstByteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthcheck: {
      value: cdktf.stringToHclTerraform(struct!.healthcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_conn: {
      value: cdktf.numberToHclTerraform(struct!.maxConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.maxTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
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
    override_host: {
      value: cdktf.stringToHclTerraform(struct!.overrideHost),
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
    prefer_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.preferIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_key: {
      value: cdktf.stringToHclTerraform(struct!.shareKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shield: {
      value: cdktf.stringToHclTerraform(struct!.shield),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_hostname: {
      value: cdktf.stringToHclTerraform(struct!.sslCertHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_check_cert: {
      value: cdktf.booleanToHclTerraform(struct!.sslCheckCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.sslCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_key: {
      value: cdktf.stringToHclTerraform(struct!.sslClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_sni_hostname: {
      value: cdktf.stringToHclTerraform(struct!.sslSniHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._betweenBytesTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenBytesTimeout = this._betweenBytesTimeout;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._errorThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorThreshold = this._errorThreshold;
    }
    if (this._firstByteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstByteTimeout = this._firstByteTimeout;
    }
    if (this._healthcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._maxConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConn = this._maxConn;
    }
    if (this._maxTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTlsVersion = this._maxTlsVersion;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHost = this._overrideHost;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferIpv6 = this._preferIpv6;
    }
    if (this._shareKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareKey = this._shareKey;
    }
    if (this._shield !== undefined) {
      hasAnyValues = true;
      internalValueResult.shield = this._shield;
    }
    if (this._sslCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCert = this._sslCaCert;
    }
    if (this._sslCertHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertHostname = this._sslCertHostname;
    }
    if (this._sslCheckCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCheckCert = this._sslCheckCert;
    }
    if (this._sslCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCiphers = this._sslCiphers;
    }
    if (this._sslClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCert = this._sslClientCert;
    }
    if (this._sslClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKey = this._sslClientKey;
    }
    if (this._sslSniHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSniHostname = this._sslSniHostname;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._betweenBytesTimeout = undefined;
      this._connectTimeout = undefined;
      this._errorThreshold = undefined;
      this._firstByteTimeout = undefined;
      this._healthcheck = undefined;
      this._keepaliveTime = undefined;
      this._maxConn = undefined;
      this._maxTlsVersion = undefined;
      this._minTlsVersion = undefined;
      this._name = undefined;
      this._overrideHost = undefined;
      this._port = undefined;
      this._preferIpv6 = undefined;
      this._shareKey = undefined;
      this._shield = undefined;
      this._sslCaCert = undefined;
      this._sslCertHostname = undefined;
      this._sslCheckCert = undefined;
      this._sslCiphers = undefined;
      this._sslClientCert = undefined;
      this._sslClientKey = undefined;
      this._sslSniHostname = undefined;
      this._useSsl = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._betweenBytesTimeout = value.betweenBytesTimeout;
      this._connectTimeout = value.connectTimeout;
      this._errorThreshold = value.errorThreshold;
      this._firstByteTimeout = value.firstByteTimeout;
      this._healthcheck = value.healthcheck;
      this._keepaliveTime = value.keepaliveTime;
      this._maxConn = value.maxConn;
      this._maxTlsVersion = value.maxTlsVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._name = value.name;
      this._overrideHost = value.overrideHost;
      this._port = value.port;
      this._preferIpv6 = value.preferIpv6;
      this._shareKey = value.shareKey;
      this._shield = value.shield;
      this._sslCaCert = value.sslCaCert;
      this._sslCertHostname = value.sslCertHostname;
      this._sslCheckCert = value.sslCheckCert;
      this._sslCiphers = value.sslCiphers;
      this._sslClientCert = value.sslClientCert;
      this._sslClientKey = value.sslClientKey;
      this._sslSniHostname = value.sslSniHostname;
      this._useSsl = value.useSsl;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // between_bytes_timeout - computed: false, optional: true, required: false
  private _betweenBytesTimeout?: number; 
  public get betweenBytesTimeout() {
    return this.getNumberAttribute('between_bytes_timeout');
  }
  public set betweenBytesTimeout(value: number) {
    this._betweenBytesTimeout = value;
  }
  public resetBetweenBytesTimeout() {
    this._betweenBytesTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenBytesTimeoutInput() {
    return this._betweenBytesTimeout;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // error_threshold - computed: false, optional: true, required: false
  private _errorThreshold?: number; 
  public get errorThreshold() {
    return this.getNumberAttribute('error_threshold');
  }
  public set errorThreshold(value: number) {
    this._errorThreshold = value;
  }
  public resetErrorThreshold() {
    this._errorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorThresholdInput() {
    return this._errorThreshold;
  }

  // first_byte_timeout - computed: false, optional: true, required: false
  private _firstByteTimeout?: number; 
  public get firstByteTimeout() {
    return this.getNumberAttribute('first_byte_timeout');
  }
  public set firstByteTimeout(value: number) {
    this._firstByteTimeout = value;
  }
  public resetFirstByteTimeout() {
    this._firstByteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstByteTimeoutInput() {
    return this._firstByteTimeout;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: string; 
  public get healthcheck() {
    return this.getStringAttribute('healthcheck');
  }
  public set healthcheck(value: string) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // keepalive_time - computed: true, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // max_conn - computed: false, optional: true, required: false
  private _maxConn?: number; 
  public get maxConn() {
    return this.getNumberAttribute('max_conn');
  }
  public set maxConn(value: number) {
    this._maxConn = value;
  }
  public resetMaxConn() {
    this._maxConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnInput() {
    return this._maxConn;
  }

  // max_tls_version - computed: false, optional: true, required: false
  private _maxTlsVersion?: string; 
  public get maxTlsVersion() {
    return this.getStringAttribute('max_tls_version');
  }
  public set maxTlsVersion(value: string) {
    this._maxTlsVersion = value;
  }
  public resetMaxTlsVersion() {
    this._maxTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTlsVersionInput() {
    return this._maxTlsVersion;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // override_host - computed: false, optional: true, required: false
  private _overrideHost?: string; 
  public get overrideHost() {
    return this.getStringAttribute('override_host');
  }
  public set overrideHost(value: string) {
    this._overrideHost = value;
  }
  public resetOverrideHost() {
    this._overrideHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideHostInput() {
    return this._overrideHost;
  }

  // port - computed: false, optional: true, required: false
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

  // prefer_ipv6 - computed: false, optional: true, required: false
  private _preferIpv6?: boolean | cdktf.IResolvable; 
  public get preferIpv6() {
    return this.getBooleanAttribute('prefer_ipv6');
  }
  public set preferIpv6(value: boolean | cdktf.IResolvable) {
    this._preferIpv6 = value;
  }
  public resetPreferIpv6() {
    this._preferIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferIpv6Input() {
    return this._preferIpv6;
  }

  // share_key - computed: false, optional: true, required: false
  private _shareKey?: string; 
  public get shareKey() {
    return this.getStringAttribute('share_key');
  }
  public set shareKey(value: string) {
    this._shareKey = value;
  }
  public resetShareKey() {
    this._shareKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareKeyInput() {
    return this._shareKey;
  }

  // shield - computed: false, optional: true, required: false
  private _shield?: string; 
  public get shield() {
    return this.getStringAttribute('shield');
  }
  public set shield(value: string) {
    this._shield = value;
  }
  public resetShield() {
    this._shield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldInput() {
    return this._shield;
  }

  // ssl_ca_cert - computed: false, optional: true, required: false
  private _sslCaCert?: string; 
  public get sslCaCert() {
    return this.getStringAttribute('ssl_ca_cert');
  }
  public set sslCaCert(value: string) {
    this._sslCaCert = value;
  }
  public resetSslCaCert() {
    this._sslCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertInput() {
    return this._sslCaCert;
  }

  // ssl_cert_hostname - computed: false, optional: true, required: false
  private _sslCertHostname?: string; 
  public get sslCertHostname() {
    return this.getStringAttribute('ssl_cert_hostname');
  }
  public set sslCertHostname(value: string) {
    this._sslCertHostname = value;
  }
  public resetSslCertHostname() {
    this._sslCertHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertHostnameInput() {
    return this._sslCertHostname;
  }

  // ssl_check_cert - computed: false, optional: true, required: false
  private _sslCheckCert?: boolean | cdktf.IResolvable; 
  public get sslCheckCert() {
    return this.getBooleanAttribute('ssl_check_cert');
  }
  public set sslCheckCert(value: boolean | cdktf.IResolvable) {
    this._sslCheckCert = value;
  }
  public resetSslCheckCert() {
    this._sslCheckCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCheckCertInput() {
    return this._sslCheckCert;
  }

  // ssl_ciphers - computed: false, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_client_cert - computed: false, optional: true, required: false
  private _sslClientCert?: string; 
  public get sslClientCert() {
    return this.getStringAttribute('ssl_client_cert');
  }
  public set sslClientCert(value: string) {
    this._sslClientCert = value;
  }
  public resetSslClientCert() {
    this._sslClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertInput() {
    return this._sslClientCert;
  }

  // ssl_client_key - computed: false, optional: true, required: false
  private _sslClientKey?: string; 
  public get sslClientKey() {
    return this.getStringAttribute('ssl_client_key');
  }
  public set sslClientKey(value: string) {
    this._sslClientKey = value;
  }
  public resetSslClientKey() {
    this._sslClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyInput() {
    return this._sslClientKey;
  }

  // ssl_sni_hostname - computed: false, optional: true, required: false
  private _sslSniHostname?: string; 
  public get sslSniHostname() {
    return this.getStringAttribute('ssl_sni_hostname');
  }
  public set sslSniHostname(value: string) {
    this._sslSniHostname = value;
  }
  public resetSslSniHostname() {
    this._sslSniHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSniHostnameInput() {
    return this._sslSniHostname;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ServiceComputeBackendList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeBackend[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeBackendOutputReference {
    return new ServiceComputeBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeDictionary {
  /**
  * Allow the dictionary to be deleted, even if it contains entries. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#force_destroy ServiceCompute#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A unique name to identify this dictionary. It is important to note that changing this attribute will delete and recreate the dictionary, and discard the current items in the dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * If `true`, the dictionary is a [private dictionary](https://docs.fastly.com/en/guides/private-dictionaries). Default is `false`. Please note that changing this attribute will delete and recreate the dictionary, and discard the current items in the dictionary. `fastly_service_vcl` resource will only manage the dictionary object itself, and items under private dictionaries can not be managed using [`fastly_service_dictionary_items`](https://registry.terraform.io/providers/fastly/fastly/latest/docs/resources/service_dictionary_items#limitations) resource. Therefore, using a write-only/private dictionary should only be done if the items are managed outside of Terraform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#write_only ServiceCompute#write_only}
  */
  readonly writeOnly?: boolean | cdktf.IResolvable;
}

export function serviceComputeDictionaryToTerraform(struct?: ServiceComputeDictionary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_destroy: cdktf.booleanToTerraform(struct!.forceDestroy),
    name: cdktf.stringToTerraform(struct!.name),
    write_only: cdktf.booleanToTerraform(struct!.writeOnly),
  }
}


export function serviceComputeDictionaryToHclTerraform(struct?: ServiceComputeDictionary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.forceDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_only: {
      value: cdktf.booleanToHclTerraform(struct!.writeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeDictionaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeDictionary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDestroy = this._forceDestroy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._writeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOnly = this._writeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeDictionary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceDestroy = undefined;
      this._name = undefined;
      this._writeOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceDestroy = value.forceDestroy;
      this._name = value.name;
      this._writeOnly = value.writeOnly;
    }
  }

  // dictionary_id - computed: true, optional: false, required: false
  public get dictionaryId() {
    return this.getStringAttribute('dictionary_id');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // write_only - computed: false, optional: true, required: false
  private _writeOnly?: boolean | cdktf.IResolvable; 
  public get writeOnly() {
    return this.getBooleanAttribute('write_only');
  }
  public set writeOnly(value: boolean | cdktf.IResolvable) {
    this._writeOnly = value;
  }
  public resetWriteOnly() {
    this._writeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnlyInput() {
    return this._writeOnly;
  }
}

export class ServiceComputeDictionaryList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeDictionary[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeDictionaryOutputReference {
    return new ServiceComputeDictionaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeDomain {
  /**
  * An optional comment about the Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#comment ServiceCompute#comment}
  */
  readonly comment?: string;
  /**
  * The domain that this Service will respond to. It is important to note that changing this attribute will delete and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
}

export function serviceComputeDomainToTerraform(struct?: ServiceComputeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceComputeDomainToHclTerraform(struct?: ServiceComputeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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
}

export class ServiceComputeDomainList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeDomain[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeDomainOutputReference {
    return new ServiceComputeDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeHealthcheck {
  /**
  * How often to run the Healthcheck in milliseconds. Default `5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#check_interval ServiceCompute#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * The status code expected from the host. Default `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#expected_response ServiceCompute#expected_response}
  */
  readonly expectedResponse?: number;
  /**
  * Custom health check HTTP headers (e.g. if your health check requires an API key to be provided).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#headers ServiceCompute#headers}
  */
  readonly headers?: string[];
  /**
  * The Host header to send for this Healthcheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#host ServiceCompute#host}
  */
  readonly host: string;
  /**
  * Whether to use version 1.0 or 1.1 HTTP. Default `1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#http_version ServiceCompute#http_version}
  */
  readonly httpVersion?: string;
  /**
  * When loading a config, the initial number of probes to be seen as OK. Default `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#initial ServiceCompute#initial}
  */
  readonly initial?: number;
  /**
  * Which HTTP method to use. Default `HEAD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#method ServiceCompute#method}
  */
  readonly method?: string;
  /**
  * A unique name to identify this Healthcheck. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The path to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path: string;
  /**
  * How many Healthchecks must succeed to be considered healthy. Default `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#threshold ServiceCompute#threshold}
  */
  readonly threshold?: number;
  /**
  * Timeout in milliseconds. Default `5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timeout ServiceCompute#timeout}
  */
  readonly timeout?: number;
  /**
  * The number of most recent Healthcheck queries to keep for this Healthcheck. Default `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#window ServiceCompute#window}
  */
  readonly window?: number;
}

export function serviceComputeHealthcheckToTerraform(struct?: ServiceComputeHealthcheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval: cdktf.numberToTerraform(struct!.checkInterval),
    expected_response: cdktf.numberToTerraform(struct!.expectedResponse),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    initial: cdktf.numberToTerraform(struct!.initial),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function serviceComputeHealthcheckToHclTerraform(struct?: ServiceComputeHealthcheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_interval: {
      value: cdktf.numberToHclTerraform(struct!.checkInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expected_response: {
      value: cdktf.numberToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial: {
      value: cdktf.numberToHclTerraform(struct!.initial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeHealthcheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._initial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initial = this._initial;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeHealthcheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkInterval = undefined;
      this._expectedResponse = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._httpVersion = undefined;
      this._initial = undefined;
      this._method = undefined;
      this._name = undefined;
      this._path = undefined;
      this._threshold = undefined;
      this._timeout = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkInterval = value.checkInterval;
      this._expectedResponse = value.expectedResponse;
      this._headers = value.headers;
      this._host = value.host;
      this._httpVersion = value.httpVersion;
      this._initial = value.initial;
      this._method = value.method;
      this._name = value.name;
      this._path = value.path;
      this._threshold = value.threshold;
      this._timeout = value.timeout;
      this._window = value.window;
    }
  }

  // check_interval - computed: false, optional: true, required: false
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // expected_response - computed: false, optional: true, required: false
  private _expectedResponse?: number; 
  public get expectedResponse() {
    return this.getNumberAttribute('expected_response');
  }
  public set expectedResponse(value: number) {
    this._expectedResponse = value;
  }
  public resetExpectedResponse() {
    this._expectedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // initial - computed: false, optional: true, required: false
  private _initial?: number; 
  public get initial() {
    return this.getNumberAttribute('initial');
  }
  public set initial(value: number) {
    this._initial = value;
  }
  public resetInitial() {
    this._initial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInput() {
    return this._initial;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class ServiceComputeHealthcheckList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeHealthcheck[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeHealthcheckOutputReference {
    return new ServiceComputeHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeImageOptimizerDefaultSettings {
  /**
  * Enables GIF to MP4 transformations on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#allow_video ServiceCompute#allow_video}
  */
  readonly allowVideo?: boolean | cdktf.IResolvable;
  /**
  * The default quality to use with JPEG output. This can be overridden with the "quality" parameter on specific image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#jpeg_quality ServiceCompute#jpeg_quality}
  */
  readonly jpegQuality?: number;
  /**
  * The default type of JPEG output to use. This can be overridden with "format=bjpeg" and "format=pjpeg" on specific image optimizer requests. Valid values are `auto`, `baseline` and `progressive`.
  * 	- auto: Match the input JPEG type, or baseline if transforming from a non-JPEG input.
  * 	- baseline: Output baseline JPEG images
  * 	- progressive: Output progressive JPEG images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#jpeg_type ServiceCompute#jpeg_type}
  */
  readonly jpegType?: string;
  /**
  * Used by the provider to identify modified settings. Changing this value will force the entire block to be deleted, then recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name?: string;
  /**
  * The type of filter to use while resizing an image. Valid values are `lanczos3`, `lanczos2`, `bicubic`, `bilinear` and `nearest`.
  * 	- lanczos3: A Lanczos filter with a kernel size of 3. Lanczos filters can detect edges and linear features within an image, providing the best possible reconstruction.
  * 	- lanczos2: A Lanczos filter with a kernel size of 2.
  * 	- bicubic: A filter using an average of a 4x4 environment of pixels, weighing the innermost pixels higher.
  * 	- bilinear: A filter using an average of a 2x2 environment of pixels.
  * 	- nearest: A filter using the value of nearby translated pixel values. Preserves hard edges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#resize_filter ServiceCompute#resize_filter}
  */
  readonly resizeFilter?: string;
  /**
  * Whether or not we should allow output images to render at sizes larger than input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#upscale ServiceCompute#upscale}
  */
  readonly upscale?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not to default to WebP output when the client supports it. This is equivalent to adding "auto=webp" to all image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#webp ServiceCompute#webp}
  */
  readonly webp?: boolean | cdktf.IResolvable;
  /**
  * The default quality to use with WebP output. This can be overridden with the second option in the "quality" URL parameter on specific image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#webp_quality ServiceCompute#webp_quality}
  */
  readonly webpQuality?: number;
}

export function serviceComputeImageOptimizerDefaultSettingsToTerraform(struct?: ServiceComputeImageOptimizerDefaultSettingsOutputReference | ServiceComputeImageOptimizerDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_video: cdktf.booleanToTerraform(struct!.allowVideo),
    jpeg_quality: cdktf.numberToTerraform(struct!.jpegQuality),
    jpeg_type: cdktf.stringToTerraform(struct!.jpegType),
    name: cdktf.stringToTerraform(struct!.name),
    resize_filter: cdktf.stringToTerraform(struct!.resizeFilter),
    upscale: cdktf.booleanToTerraform(struct!.upscale),
    webp: cdktf.booleanToTerraform(struct!.webp),
    webp_quality: cdktf.numberToTerraform(struct!.webpQuality),
  }
}


export function serviceComputeImageOptimizerDefaultSettingsToHclTerraform(struct?: ServiceComputeImageOptimizerDefaultSettingsOutputReference | ServiceComputeImageOptimizerDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_video: {
      value: cdktf.booleanToHclTerraform(struct!.allowVideo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jpeg_quality: {
      value: cdktf.numberToHclTerraform(struct!.jpegQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jpeg_type: {
      value: cdktf.stringToHclTerraform(struct!.jpegType),
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
    resize_filter: {
      value: cdktf.stringToHclTerraform(struct!.resizeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upscale: {
      value: cdktf.booleanToHclTerraform(struct!.upscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webp: {
      value: cdktf.booleanToHclTerraform(struct!.webp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webp_quality: {
      value: cdktf.numberToHclTerraform(struct!.webpQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeImageOptimizerDefaultSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceComputeImageOptimizerDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowVideo !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVideo = this._allowVideo;
    }
    if (this._jpegQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpegQuality = this._jpegQuality;
    }
    if (this._jpegType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpegType = this._jpegType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resizeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeFilter = this._resizeFilter;
    }
    if (this._upscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.upscale = this._upscale;
    }
    if (this._webp !== undefined) {
      hasAnyValues = true;
      internalValueResult.webp = this._webp;
    }
    if (this._webpQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.webpQuality = this._webpQuality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeImageOptimizerDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowVideo = undefined;
      this._jpegQuality = undefined;
      this._jpegType = undefined;
      this._name = undefined;
      this._resizeFilter = undefined;
      this._upscale = undefined;
      this._webp = undefined;
      this._webpQuality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowVideo = value.allowVideo;
      this._jpegQuality = value.jpegQuality;
      this._jpegType = value.jpegType;
      this._name = value.name;
      this._resizeFilter = value.resizeFilter;
      this._upscale = value.upscale;
      this._webp = value.webp;
      this._webpQuality = value.webpQuality;
    }
  }

  // allow_video - computed: false, optional: true, required: false
  private _allowVideo?: boolean | cdktf.IResolvable; 
  public get allowVideo() {
    return this.getBooleanAttribute('allow_video');
  }
  public set allowVideo(value: boolean | cdktf.IResolvable) {
    this._allowVideo = value;
  }
  public resetAllowVideo() {
    this._allowVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVideoInput() {
    return this._allowVideo;
  }

  // jpeg_quality - computed: false, optional: true, required: false
  private _jpegQuality?: number; 
  public get jpegQuality() {
    return this.getNumberAttribute('jpeg_quality');
  }
  public set jpegQuality(value: number) {
    this._jpegQuality = value;
  }
  public resetJpegQuality() {
    this._jpegQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegQualityInput() {
    return this._jpegQuality;
  }

  // jpeg_type - computed: false, optional: true, required: false
  private _jpegType?: string; 
  public get jpegType() {
    return this.getStringAttribute('jpeg_type');
  }
  public set jpegType(value: string) {
    this._jpegType = value;
  }
  public resetJpegType() {
    this._jpegType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegTypeInput() {
    return this._jpegType;
  }

  // name - computed: false, optional: true, required: false
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

  // resize_filter - computed: false, optional: true, required: false
  private _resizeFilter?: string; 
  public get resizeFilter() {
    return this.getStringAttribute('resize_filter');
  }
  public set resizeFilter(value: string) {
    this._resizeFilter = value;
  }
  public resetResizeFilter() {
    this._resizeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeFilterInput() {
    return this._resizeFilter;
  }

  // upscale - computed: false, optional: true, required: false
  private _upscale?: boolean | cdktf.IResolvable; 
  public get upscale() {
    return this.getBooleanAttribute('upscale');
  }
  public set upscale(value: boolean | cdktf.IResolvable) {
    this._upscale = value;
  }
  public resetUpscale() {
    this._upscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upscaleInput() {
    return this._upscale;
  }

  // webp - computed: false, optional: true, required: false
  private _webp?: boolean | cdktf.IResolvable; 
  public get webp() {
    return this.getBooleanAttribute('webp');
  }
  public set webp(value: boolean | cdktf.IResolvable) {
    this._webp = value;
  }
  public resetWebp() {
    this._webp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpInput() {
    return this._webp;
  }

  // webp_quality - computed: false, optional: true, required: false
  private _webpQuality?: number; 
  public get webpQuality() {
    return this.getNumberAttribute('webp_quality');
  }
  public set webpQuality(value: number) {
    this._webpQuality = value;
  }
  public resetWebpQuality() {
    this._webpQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpQualityInput() {
    return this._webpQuality;
  }
}
export interface ServiceComputeLoggingBigquery {
  /**
  * The google account name used to obtain temporary credentials (default none). Not required if 'email' and 'secret_key' are provided. You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#account_name ServiceCompute#account_name}
  */
  readonly accountName?: string;
  /**
  * The ID of your BigQuery dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#dataset ServiceCompute#dataset}
  */
  readonly dataset: string;
  /**
  * The email for the service account with write access to your BigQuery dataset. If not provided, this will be pulled from a `FASTLY_BQ_EMAIL` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#email ServiceCompute#email}
  */
  readonly email?: string;
  /**
  * A unique name to identify this BigQuery logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your GCP project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#project_id ServiceCompute#project_id}
  */
  readonly projectId: string;
  /**
  * The secret key associated with the service account that has write access to your BigQuery table. If not provided, this will be pulled from the `FASTLY_BQ_SECRET_KEY` environment variable. Typical format for this is a private key in a string with newlines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The ID of your BigQuery table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#table ServiceCompute#table}
  */
  readonly table: string;
  /**
  * BigQuery table name suffix template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#template ServiceCompute#template}
  */
  readonly template?: string;
}

export function serviceComputeLoggingBigqueryToTerraform(struct?: ServiceComputeLoggingBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    table: cdktf.stringToTerraform(struct!.table),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function serviceComputeLoggingBigqueryToHclTerraform(struct?: ServiceComputeLoggingBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._dataset = undefined;
      this._email = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._secretKey = undefined;
      this._table = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._dataset = value.dataset;
      this._email = value.email;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._secretKey = value.secretKey;
      this._table = value.table;
      this._template = value.template;
    }
  }

  // account_name - computed: false, optional: true, required: false
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

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class ServiceComputeLoggingBigqueryList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingBigquery[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingBigqueryOutputReference {
    return new ServiceComputeLoggingBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingBlobstorage {
  /**
  * The unique Azure Blob Storage namespace in which your data objects are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#account_name ServiceCompute#account_name}
  */
  readonly accountName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The name of the Azure Blob Storage container in which to store logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#container ServiceCompute#container}
  */
  readonly container: string;
  /**
  * Maximum size of an uploaded log file, if non-zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#file_max_bytes ServiceCompute#file_max_bytes}
  */
  readonly fileMaxBytes?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify the Azure Blob Storage endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to. Must end with a trailing slash. If this field is left empty, the files will be saved in the container's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#sas_token ServiceCompute#sas_token}
  */
  readonly sasToken?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceComputeLoggingBlobstorageToTerraform(struct?: ServiceComputeLoggingBlobstorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    container: cdktf.stringToTerraform(struct!.container),
    file_max_bytes: cdktf.numberToTerraform(struct!.fileMaxBytes),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceComputeLoggingBlobstorageToHclTerraform(struct?: ServiceComputeLoggingBlobstorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
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
    file_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.fileMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingBlobstorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingBlobstorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._fileMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMaxBytes = this._fileMaxBytes;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingBlobstorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._compressionCodec = undefined;
      this._container = undefined;
      this._fileMaxBytes = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._sasToken = undefined;
      this._timestampFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._compressionCodec = value.compressionCodec;
      this._container = value.container;
      this._fileMaxBytes = value.fileMaxBytes;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._sasToken = value.sasToken;
      this._timestampFormat = value.timestampFormat;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // file_max_bytes - computed: false, optional: true, required: false
  private _fileMaxBytes?: number; 
  public get fileMaxBytes() {
    return this.getNumberAttribute('file_max_bytes');
  }
  public set fileMaxBytes(value: number) {
    this._fileMaxBytes = value;
  }
  public resetFileMaxBytes() {
    this._fileMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMaxBytesInput() {
    return this._fileMaxBytes;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
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

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }
}

export class ServiceComputeLoggingBlobstorageList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingBlobstorage[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingBlobstorageOutputReference {
    return new ServiceComputeLoggingBlobstorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingCloudfiles {
  /**
  * Your Cloud File account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#access_key ServiceCompute#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of your Cloud Files container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#bucket_name ServiceCompute#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the Rackspace Cloud Files logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The region to stream logs to. One of: DFW (Dallas), ORD (Chicago), IAD (Northern Virginia), LON (London), SYD (Sydney), HKG (Hong Kong)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for your Cloud Files account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user: string;
}

export function serviceComputeLoggingCloudfilesToTerraform(struct?: ServiceComputeLoggingCloudfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    region: cdktf.stringToTerraform(struct!.region),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingCloudfilesToHclTerraform(struct?: ServiceComputeLoggingCloudfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingCloudfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingCloudfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingCloudfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._region = undefined;
      this._timestampFormat = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._compressionCodec = value.compressionCodec;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._region = value.region;
      this._timestampFormat = value.timestampFormat;
      this._user = value.user;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
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

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceComputeLoggingCloudfilesList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingCloudfiles[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingCloudfilesOutputReference {
    return new ServiceComputeLoggingCloudfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingDatadog {
  /**
  * The unique name of the Datadog logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Defaults to `US` if undefined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The API key from your Datadog account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
}

export function serviceComputeLoggingDatadogToTerraform(struct?: ServiceComputeLoggingDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    region: cdktf.stringToTerraform(struct!.region),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceComputeLoggingDatadogToHclTerraform(struct?: ServiceComputeLoggingDatadog | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._region = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._region = value.region;
      this._token = value.token;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class ServiceComputeLoggingDatadogList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingDatadog[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingDatadogOutputReference {
    return new ServiceComputeLoggingDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingDigitalocean {
  /**
  * Your DigitalOcean Spaces account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#access_key ServiceCompute#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of the DigitalOcean Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#bucket_name ServiceCompute#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The domain of the DigitalOcean Spaces endpoint (default `nyc3.digitaloceanspaces.com`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#domain ServiceCompute#domain}
  */
  readonly domain?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the DigitalOcean Spaces logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * Your DigitalOcean Spaces account secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceComputeLoggingDigitaloceanToTerraform(struct?: ServiceComputeLoggingDigitalocean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    domain: cdktf.stringToTerraform(struct!.domain),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceComputeLoggingDigitaloceanToHclTerraform(struct?: ServiceComputeLoggingDigitalocean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingDigitaloceanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingDigitalocean | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingDigitalocean | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._domain = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._secretKey = undefined;
      this._timestampFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._compressionCodec = value.compressionCodec;
      this._domain = value.domain;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._secretKey = value.secretKey;
      this._timestampFormat = value.timestampFormat;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }
}

export class ServiceComputeLoggingDigitaloceanList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingDigitalocean[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingDigitaloceanOutputReference {
    return new ServiceComputeLoggingDigitaloceanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingElasticsearch {
  /**
  * The name of the Elasticsearch index to send documents (logs) to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#index ServiceCompute#index}
  */
  readonly index: string;
  /**
  * The unique name of the Elasticsearch logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * BasicAuth password for Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#password ServiceCompute#password}
  */
  readonly password?: string;
  /**
  * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#pipeline ServiceCompute#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The maximum number of logs sent in one request. Defaults to `0` for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#request_max_bytes ServiceCompute#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The maximum number of bytes sent in one request. Defaults to `0` for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#request_max_entries ServiceCompute#request_max_entries}
  */
  readonly requestMaxEntries?: number;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_ca_cert ServiceCompute#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_cert ServiceCompute#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_key ServiceCompute#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_hostname ServiceCompute#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Elasticsearch URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
  /**
  * BasicAuth username for Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user?: string;
}

export function serviceComputeLoggingElasticsearchToTerraform(struct?: ServiceComputeLoggingElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    request_max_entries: cdktf.numberToTerraform(struct!.requestMaxEntries),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingElasticsearchToHclTerraform(struct?: ServiceComputeLoggingElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.requestMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_max_entries: {
      value: cdktf.numberToHclTerraform(struct!.requestMaxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._requestMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMaxBytes = this._requestMaxBytes;
    }
    if (this._requestMaxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMaxEntries = this._requestMaxEntries;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pipeline = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requestMaxEntries = undefined;
      this._tlsCaCert = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsHostname = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._name = value.name;
      this._password = value.password;
      this._pipeline = value.pipeline;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requestMaxEntries = value.requestMaxEntries;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // request_max_bytes - computed: false, optional: true, required: false
  private _requestMaxBytes?: number; 
  public get requestMaxBytes() {
    return this.getNumberAttribute('request_max_bytes');
  }
  public set requestMaxBytes(value: number) {
    this._requestMaxBytes = value;
  }
  public resetRequestMaxBytes() {
    this._requestMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxBytesInput() {
    return this._requestMaxBytes;
  }

  // request_max_entries - computed: false, optional: true, required: false
  private _requestMaxEntries?: number; 
  public get requestMaxEntries() {
    return this.getNumberAttribute('request_max_entries');
  }
  public set requestMaxEntries(value: number) {
    this._requestMaxEntries = value;
  }
  public resetRequestMaxEntries() {
    this._requestMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxEntriesInput() {
    return this._requestMaxEntries;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
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
}

export class ServiceComputeLoggingElasticsearchList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingElasticsearchOutputReference {
    return new ServiceComputeLoggingElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingFtp {
  /**
  * The FTP address to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#address ServiceCompute#address}
  */
  readonly address: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the FTP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The password for the server (for anonymous use an email address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#password ServiceCompute#password}
  */
  readonly password: string;
  /**
  * The path to upload log files to. If the path ends in `/` then it is treated as a directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path: string;
  /**
  * How frequently the logs should be transferred, in seconds (Default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * The port number. Default: `21`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for the server (can be `anonymous`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user: string;
}

export function serviceComputeLoggingFtpToTerraform(struct?: ServiceComputeLoggingFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingFtpToHclTerraform(struct?: ServiceComputeLoggingFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingFtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingFtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingFtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._compressionCodec = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._path = undefined;
      this._period = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._timestampFormat = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._compressionCodec = value.compressionCodec;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._password = value.password;
      this._path = value.path;
      this._period = value.period;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._timestampFormat = value.timestampFormat;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: true, required: false
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceComputeLoggingFtpList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingFtp[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingFtpOutputReference {
    return new ServiceComputeLoggingFtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingGcs {
  /**
  * The google account name used to obtain temporary credentials (default none). You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#account_name ServiceCompute#account_name}
  */
  readonly accountName?: string;
  /**
  * The name of the bucket in which to store the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#bucket_name ServiceCompute#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this GCS endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds (Default 3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your Google Cloud Platform project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#project_id ServiceCompute#project_id}
  */
  readonly projectId?: string;
  /**
  * The secret key associated with the target gcs bucket on your account. You may optionally provide this secret via an environment variable, `FASTLY_GCS_SECRET_KEY`. A typical format for the key is PEM format, containing actual newline characters where required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. You may optionally provide this via an environment variable, `FASTLY_GCS_EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user?: string;
}

export function serviceComputeLoggingGcsToTerraform(struct?: ServiceComputeLoggingGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingGcsToHclTerraform(struct?: ServiceComputeLoggingGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingGcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._secretKey = undefined;
      this._timestampFormat = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._bucketName = value.bucketName;
      this._compressionCodec = value.compressionCodec;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._secretKey = value.secretKey;
      this._timestampFormat = value.timestampFormat;
      this._user = value.user;
    }
  }

  // account_name - computed: false, optional: true, required: false
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
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
}

export class ServiceComputeLoggingGcsList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingGcs[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingGcsOutputReference {
    return new ServiceComputeLoggingGcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingGooglepubsub {
  /**
  * The google account name used to obtain temporary credentials (default none). You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#account_name ServiceCompute#account_name}
  */
  readonly accountName?: string;
  /**
  * The unique name of the Google Cloud Pub/Sub logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your Google Cloud Platform project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#project_id ServiceCompute#project_id}
  */
  readonly projectId: string;
  /**
  * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. You may optionally provide this secret via an environment variable, `FASTLY_GOOGLE_PUBSUB_SECRET_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The Google Cloud Pub/Sub topic to which logs will be published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#topic ServiceCompute#topic}
  */
  readonly topic: string;
  /**
  * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. You may optionally provide this via an environment variable, `FASTLY_GOOGLE_PUBSUB_EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user?: string;
}

export function serviceComputeLoggingGooglepubsubToTerraform(struct?: ServiceComputeLoggingGooglepubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    topic: cdktf.stringToTerraform(struct!.topic),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingGooglepubsubToHclTerraform(struct?: ServiceComputeLoggingGooglepubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingGooglepubsubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingGooglepubsub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingGooglepubsub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._secretKey = undefined;
      this._topic = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._secretKey = value.secretKey;
      this._topic = value.topic;
      this._user = value.user;
    }
  }

  // account_name - computed: false, optional: true, required: false
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
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
}

export class ServiceComputeLoggingGooglepubsubList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingGooglepubsub[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingGooglepubsubOutputReference {
    return new ServiceComputeLoggingGooglepubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingGrafanacloudlogs {
  /**
  * The stream identifier as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#index ServiceCompute#index}
  */
  readonly index: string;
  /**
  * The unique name of the GrafanaCloudLogs logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The Access Policy Token key for your GrafanaCloudLogs account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * The URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
  /**
  * The Grafana User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user: string;
}

export function serviceComputeLoggingGrafanacloudlogsToTerraform(struct?: ServiceComputeLoggingGrafanacloudlogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingGrafanacloudlogsToHclTerraform(struct?: ServiceComputeLoggingGrafanacloudlogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingGrafanacloudlogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingGrafanacloudlogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingGrafanacloudlogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceComputeLoggingGrafanacloudlogsList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingGrafanacloudlogs[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingGrafanacloudlogsOutputReference {
    return new ServiceComputeLoggingGrafanacloudlogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingHeroku {
  /**
  * The unique name of the Heroku logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The token to use for authentication (https://www.heroku.com/docs/customer-token-authentication-token/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * The URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
}

export function serviceComputeLoggingHerokuToTerraform(struct?: ServiceComputeLoggingHeroku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceComputeLoggingHerokuToHclTerraform(struct?: ServiceComputeLoggingHeroku | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingHerokuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingHeroku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingHeroku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
      this._url = value.url;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceComputeLoggingHerokuList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingHeroku[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingHerokuOutputReference {
    return new ServiceComputeLoggingHerokuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingHoneycomb {
  /**
  * The Honeycomb Dataset you want to log to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#dataset ServiceCompute#dataset}
  */
  readonly dataset: string;
  /**
  * The unique name of the Honeycomb logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The Write Key from the Account page of your Honeycomb account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
}

export function serviceComputeLoggingHoneycombToTerraform(struct?: ServiceComputeLoggingHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceComputeLoggingHoneycombToHclTerraform(struct?: ServiceComputeLoggingHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class ServiceComputeLoggingHoneycombList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingHoneycombOutputReference {
    return new ServiceComputeLoggingHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingHttps {
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Value of the `Content-Type` header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#content_type ServiceCompute#content_type}
  */
  readonly contentType?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * Custom header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#header_name ServiceCompute#header_name}
  */
  readonly headerName?: string;
  /**
  * Value of the custom header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#header_value ServiceCompute#header_value}
  */
  readonly headerValue?: string;
  /**
  * Formats log entries as JSON. Can be either disabled (`0`), array of json (`1`), or newline delimited json (`2`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#json_format ServiceCompute#json_format}
  */
  readonly jsonFormat?: string;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * HTTP method used for request. Can be either `POST` or `PUT`. Default `POST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#method ServiceCompute#method}
  */
  readonly method?: string;
  /**
  * The unique name of the HTTPS logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * How frequently, in seconds, batches of log data are sent to the HTTPS endpoint. A value of 0 sends logs at the same interval as the default, which is 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The maximum number of bytes sent in one request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#request_max_bytes ServiceCompute#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The maximum number of logs sent in one request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#request_max_entries ServiceCompute#request_max_entries}
  */
  readonly requestMaxEntries?: number;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_ca_cert ServiceCompute#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_cert ServiceCompute#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_key ServiceCompute#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * Used during the TLS handshake to validate the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_hostname ServiceCompute#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * URL that log data will be sent to. Must use the https protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
}

export function serviceComputeLoggingHttpsToTerraform(struct?: ServiceComputeLoggingHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    json_format: cdktf.stringToTerraform(struct!.jsonFormat),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    request_max_entries: cdktf.numberToTerraform(struct!.requestMaxEntries),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceComputeLoggingHttpsToHclTerraform(struct?: ServiceComputeLoggingHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_format: {
      value: cdktf.stringToHclTerraform(struct!.jsonFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.requestMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_max_entries: {
      value: cdktf.numberToHclTerraform(struct!.requestMaxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingHttpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._jsonFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFormat = this._jsonFormat;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._requestMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMaxBytes = this._requestMaxBytes;
    }
    if (this._requestMaxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMaxEntries = this._requestMaxEntries;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionCodec = undefined;
      this._contentType = undefined;
      this._gzipLevel = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._jsonFormat = undefined;
      this._messageType = undefined;
      this._method = undefined;
      this._name = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requestMaxEntries = undefined;
      this._tlsCaCert = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsHostname = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionCodec = value.compressionCodec;
      this._contentType = value.contentType;
      this._gzipLevel = value.gzipLevel;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._jsonFormat = value.jsonFormat;
      this._messageType = value.messageType;
      this._method = value.method;
      this._name = value.name;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requestMaxEntries = value.requestMaxEntries;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._url = value.url;
    }
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // json_format - computed: false, optional: true, required: false
  private _jsonFormat?: string; 
  public get jsonFormat() {
    return this.getStringAttribute('json_format');
  }
  public set jsonFormat(value: string) {
    this._jsonFormat = value;
  }
  public resetJsonFormat() {
    this._jsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFormatInput() {
    return this._jsonFormat;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // request_max_bytes - computed: false, optional: true, required: false
  private _requestMaxBytes?: number; 
  public get requestMaxBytes() {
    return this.getNumberAttribute('request_max_bytes');
  }
  public set requestMaxBytes(value: number) {
    this._requestMaxBytes = value;
  }
  public resetRequestMaxBytes() {
    this._requestMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxBytesInput() {
    return this._requestMaxBytes;
  }

  // request_max_entries - computed: false, optional: true, required: false
  private _requestMaxEntries?: number; 
  public get requestMaxEntries() {
    return this.getNumberAttribute('request_max_entries');
  }
  public set requestMaxEntries(value: number) {
    this._requestMaxEntries = value;
  }
  public resetRequestMaxEntries() {
    this._requestMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxEntriesInput() {
    return this._requestMaxEntries;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceComputeLoggingHttpsList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingHttps[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingHttpsOutputReference {
    return new ServiceComputeLoggingHttpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingKafka {
  /**
  * SASL authentication method. One of: plain, scram-sha-256, scram-sha-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#auth_method ServiceCompute#auth_method}
  */
  readonly authMethod?: string;
  /**
  * A comma-separated list of IP addresses or hostnames of Kafka brokers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#brokers ServiceCompute#brokers}
  */
  readonly brokers: string;
  /**
  * The codec used for compression of your logs. One of: `gzip`, `snappy`, `lz4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The unique name of the Kafka logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Enables parsing of key=value tuples from the beginning of a logline, turning them into record headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#parse_log_keyvals ServiceCompute#parse_log_keyvals}
  */
  readonly parseLogKeyvals?: boolean | cdktf.IResolvable;
  /**
  * SASL Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#password ServiceCompute#password}
  */
  readonly password?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Maximum size of log batch, if non-zero. Defaults to 0 for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#request_max_bytes ServiceCompute#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The Number of acknowledgements a leader must receive before a write is considered successful. One of: `1` (default) One server needs to respond. `0` No servers need to respond. `-1` Wait for all in-sync replicas to respond
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#required_acks ServiceCompute#required_acks}
  */
  readonly requiredAcks?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_ca_cert ServiceCompute#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_cert ServiceCompute#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_key ServiceCompute#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_hostname ServiceCompute#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Kafka topic to send logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#topic ServiceCompute#topic}
  */
  readonly topic: string;
  /**
  * Whether to use TLS for secure logging. Can be either `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#use_tls ServiceCompute#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
  /**
  * SASL User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user?: string;
}

export function serviceComputeLoggingKafkaToTerraform(struct?: ServiceComputeLoggingKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    brokers: cdktf.stringToTerraform(struct!.brokers),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    name: cdktf.stringToTerraform(struct!.name),
    parse_log_keyvals: cdktf.booleanToTerraform(struct!.parseLogKeyvals),
    password: cdktf.stringToTerraform(struct!.password),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    required_acks: cdktf.stringToTerraform(struct!.requiredAcks),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    topic: cdktf.stringToTerraform(struct!.topic),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingKafkaToHclTerraform(struct?: ServiceComputeLoggingKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brokers: {
      value: cdktf.stringToHclTerraform(struct!.brokers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
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
    parse_log_keyvals: {
      value: cdktf.booleanToHclTerraform(struct!.parseLogKeyvals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.requestMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_acks: {
      value: cdktf.stringToHclTerraform(struct!.requiredAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parseLogKeyvals !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseLogKeyvals = this._parseLogKeyvals;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._requestMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMaxBytes = this._requestMaxBytes;
    }
    if (this._requiredAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAcks = this._requiredAcks;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._brokers = undefined;
      this._compressionCodec = undefined;
      this._name = undefined;
      this._parseLogKeyvals = undefined;
      this._password = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requiredAcks = undefined;
      this._tlsCaCert = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsHostname = undefined;
      this._topic = undefined;
      this._useTls = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._brokers = value.brokers;
      this._compressionCodec = value.compressionCodec;
      this._name = value.name;
      this._parseLogKeyvals = value.parseLogKeyvals;
      this._password = value.password;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requiredAcks = value.requiredAcks;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._topic = value.topic;
      this._useTls = value.useTls;
      this._user = value.user;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // brokers - computed: false, optional: false, required: true
  private _brokers?: string; 
  public get brokers() {
    return this.getStringAttribute('brokers');
  }
  public set brokers(value: string) {
    this._brokers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
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

  // parse_log_keyvals - computed: false, optional: true, required: false
  private _parseLogKeyvals?: boolean | cdktf.IResolvable; 
  public get parseLogKeyvals() {
    return this.getBooleanAttribute('parse_log_keyvals');
  }
  public set parseLogKeyvals(value: boolean | cdktf.IResolvable) {
    this._parseLogKeyvals = value;
  }
  public resetParseLogKeyvals() {
    this._parseLogKeyvals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseLogKeyvalsInput() {
    return this._parseLogKeyvals;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // request_max_bytes - computed: false, optional: true, required: false
  private _requestMaxBytes?: number; 
  public get requestMaxBytes() {
    return this.getNumberAttribute('request_max_bytes');
  }
  public set requestMaxBytes(value: number) {
    this._requestMaxBytes = value;
  }
  public resetRequestMaxBytes() {
    this._requestMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxBytesInput() {
    return this._requestMaxBytes;
  }

  // required_acks - computed: false, optional: true, required: false
  private _requiredAcks?: string; 
  public get requiredAcks() {
    return this.getStringAttribute('required_acks');
  }
  public set requiredAcks(value: string) {
    this._requiredAcks = value;
  }
  public resetRequiredAcks() {
    this._requiredAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAcksInput() {
    return this._requiredAcks;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
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
}

export class ServiceComputeLoggingKafkaList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingKafka[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingKafkaOutputReference {
    return new ServiceComputeLoggingKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingKinesis {
  /**
  * The AWS access key to be used to write to the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#access_key ServiceCompute#access_key}
  */
  readonly accessKey?: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM role granting Fastly access to Kinesis. Not required if `access_key` and `secret_key` are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#iam_role ServiceCompute#iam_role}
  */
  readonly iamRole?: string;
  /**
  * The unique name of the Kinesis logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The AWS region the stream resides in. (Default: `us-east-1`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The AWS secret access key to authenticate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The Kinesis stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#topic ServiceCompute#topic}
  */
  readonly topic: string;
}

export function serviceComputeLoggingKinesisToTerraform(struct?: ServiceComputeLoggingKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function serviceComputeLoggingKinesisToHclTerraform(struct?: ServiceComputeLoggingKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingKinesisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingKinesis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingKinesis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._iamRole = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._iamRole = value.iamRole;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._topic = value.topic;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class ServiceComputeLoggingKinesisList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingKinesis[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingKinesisOutputReference {
    return new ServiceComputeLoggingKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingLogentries {
  /**
  * The unique name of the Logentries logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The port number configured in Logentries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Use token based authentication (https://logentries.com/doc/input-token/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * Whether to use TLS for secure logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#use_tls ServiceCompute#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceComputeLoggingLogentriesToTerraform(struct?: ServiceComputeLoggingLogentries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceComputeLoggingLogentriesToHclTerraform(struct?: ServiceComputeLoggingLogentries | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingLogentriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingLogentries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingLogentries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
      this._useTls = value.useTls;
    }
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

  // port - computed: false, optional: true, required: false
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}

export class ServiceComputeLoggingLogentriesList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingLogentries[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingLogentriesOutputReference {
    return new ServiceComputeLoggingLogentriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingLoggly {
  /**
  * The unique name of the Loggly logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
}

export function serviceComputeLoggingLogglyToTerraform(struct?: ServiceComputeLoggingLoggly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceComputeLoggingLogglyToHclTerraform(struct?: ServiceComputeLoggingLoggly | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingLogglyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingLoggly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingLoggly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class ServiceComputeLoggingLogglyList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingLoggly[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingLogglyOutputReference {
    return new ServiceComputeLoggingLogglyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingLogshuttle {
  /**
  * The unique name of the Log Shuttle logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The data authentication token associated with this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * Your Log Shuttle endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
}

export function serviceComputeLoggingLogshuttleToTerraform(struct?: ServiceComputeLoggingLogshuttle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceComputeLoggingLogshuttleToHclTerraform(struct?: ServiceComputeLoggingLogshuttle | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingLogshuttleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingLogshuttle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingLogshuttle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._token = value.token;
      this._url = value.url;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceComputeLoggingLogshuttleList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingLogshuttle[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingLogshuttleOutputReference {
    return new ServiceComputeLoggingLogshuttleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingNewrelic {
  /**
  * The unique name of the New Relic logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Default: `US`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The Insert API key from the Account page of your New Relic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
}

export function serviceComputeLoggingNewrelicToTerraform(struct?: ServiceComputeLoggingNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    region: cdktf.stringToTerraform(struct!.region),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceComputeLoggingNewrelicToHclTerraform(struct?: ServiceComputeLoggingNewrelic | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._region = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._region = value.region;
      this._token = value.token;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class ServiceComputeLoggingNewrelicList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingNewrelic[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingNewrelicOutputReference {
    return new ServiceComputeLoggingNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingNewrelicotlp {
  /**
  * Apache style log formatting. Your log must produce valid JSON that New Relic OTLP can ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#format ServiceCompute#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#format_version ServiceCompute#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the New Relic OTLP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#placement ServiceCompute#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Default: `US`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#response_condition ServiceCompute#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Insert API key from the Account page of your New Relic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * The optional New Relic Trace Observer URL to stream logs to for Infinite Tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url?: string;
}

export function serviceComputeLoggingNewrelicotlpToTerraform(struct?: ServiceComputeLoggingNewrelicotlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    region: cdktf.stringToTerraform(struct!.region),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceComputeLoggingNewrelicotlpToHclTerraform(struct?: ServiceComputeLoggingNewrelicotlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_version: {
      value: cdktf.numberToHclTerraform(struct!.formatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingNewrelicotlpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingNewrelicotlp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingNewrelicotlp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._region = undefined;
      this._responseCondition = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._region = value.region;
      this._responseCondition = value.responseCondition;
      this._token = value.token;
      this._url = value.url;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: number; 
  public get formatVersion() {
    return this.getNumberAttribute('format_version');
  }
  public set formatVersion(value: number) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
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

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // response_condition - computed: false, optional: true, required: false
  private _responseCondition?: string; 
  public get responseCondition() {
    return this.getStringAttribute('response_condition');
  }
  public set responseCondition(value: string) {
    this._responseCondition = value;
  }
  public resetResponseCondition() {
    this._responseCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseConditionInput() {
    return this._responseCondition;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
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
}

export class ServiceComputeLoggingNewrelicotlpList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingNewrelicotlp[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingNewrelicotlpOutputReference {
    return new ServiceComputeLoggingNewrelicotlpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingOpenstack {
  /**
  * Your OpenStack account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#access_key ServiceCompute#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of your OpenStack container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#bucket_name ServiceCompute#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the OpenStack logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Your OpenStack auth url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
  /**
  * The username for your OpenStack account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user: string;
}

export function serviceComputeLoggingOpenstackToTerraform(struct?: ServiceComputeLoggingOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingOpenstackToHclTerraform(struct?: ServiceComputeLoggingOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingOpenstackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingOpenstack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingOpenstack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._timestampFormat = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._compressionCodec = value.compressionCodec;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._timestampFormat = value.timestampFormat;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceComputeLoggingOpenstackList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingOpenstack[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingOpenstackOutputReference {
    return new ServiceComputeLoggingOpenstackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingPapertrail {
  /**
  * The address of the Papertrail endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#address ServiceCompute#address}
  */
  readonly address: string;
  /**
  * A unique name to identify this Papertrail endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The port associated with the address where the Papertrail endpoint can be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
}

export function serviceComputeLoggingPapertrailToTerraform(struct?: ServiceComputeLoggingPapertrail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
  }
}


export function serviceComputeLoggingPapertrailToHclTerraform(struct?: ServiceComputeLoggingPapertrail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingPapertrailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingPapertrail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingPapertrail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }
}

export class ServiceComputeLoggingPapertrailList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingPapertrail[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingPapertrailOutputReference {
    return new ServiceComputeLoggingPapertrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingS3 {
  /**
  * The AWS [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) to use for objects uploaded to the S3 bucket. Options are: `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#acl ServiceCompute#acl}
  */
  readonly acl?: string;
  /**
  * The name of the bucket in which to store the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#bucket_name ServiceCompute#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * If you created the S3 bucket outside of `us-east-1`, then specify the corresponding bucket endpoint. Example: `s3-us-west-2.amazonaws.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#domain ServiceCompute#domain}
  */
  readonly domain?: string;
  /**
  * Maximum size of an uploaded log file, if non-zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#file_max_bytes ServiceCompute#file_max_bytes}
  */
  readonly fileMaxBytes?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the S3 logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The S3 storage class (redundancy level). Should be one of: `standard`, `intelligent_tiering`, `standard_ia`, `onezone_ia`, `glacier`, `glacier_ir`, `deep_archive`, or `reduced_redundancy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#redundancy ServiceCompute#redundancy}
  */
  readonly redundancy?: string;
  /**
  * AWS Access Key of an account with the required permissions to post logs. It is **strongly** recommended you create a separate IAM user with permissions to only operate on this Bucket. This key will be not be encrypted. Not required if `iam_role` is provided. You can provide this key via an environment variable, `FASTLY_S3_ACCESS_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#s3_access_key ServiceCompute#s3_access_key}
  */
  readonly s3AccessKey?: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided. You can provide this value via an environment variable, `FASTLY_S3_IAM_ROLE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#s3_iam_role ServiceCompute#s3_iam_role}
  */
  readonly s3IamRole?: string;
  /**
  * AWS Secret Key of an account with the required permissions to post logs. It is **strongly** recommended you create a separate IAM user with permissions to only operate on this Bucket. This secret will be not be encrypted. Not required if `iam_role` is provided. You can provide this secret via an environment variable, `FASTLY_S3_SECRET_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#s3_secret_key ServiceCompute#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * Specify what type of server side encryption should be used. Can be either `AES256` or `aws:kms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#server_side_encryption ServiceCompute#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Optional server-side KMS Key Id. Must be set if server_side_encryption is set to `aws:kms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#server_side_encryption_kms_key_id ServiceCompute#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceComputeLoggingS3ToTerraform(struct?: ServiceComputeLoggingS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    domain: cdktf.stringToTerraform(struct!.domain),
    file_max_bytes: cdktf.numberToTerraform(struct!.fileMaxBytes),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    redundancy: cdktf.stringToTerraform(struct!.redundancy),
    s3_access_key: cdktf.stringToTerraform(struct!.s3AccessKey),
    s3_iam_role: cdktf.stringToTerraform(struct!.s3IamRole),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    server_side_encryption: cdktf.stringToTerraform(struct!.serverSideEncryption),
    server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceComputeLoggingS3ToHclTerraform(struct?: ServiceComputeLoggingS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.fileMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundancy: {
      value: cdktf.stringToHclTerraform(struct!.redundancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_access_key: {
      value: cdktf.stringToHclTerraform(struct!.s3AccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_iam_role: {
      value: cdktf.stringToHclTerraform(struct!.s3IamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_encryption: {
      value: cdktf.stringToHclTerraform(struct!.serverSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_encryption_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.serverSideEncryptionKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._fileMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMaxBytes = this._fileMaxBytes;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._redundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancy = this._redundancy;
    }
    if (this._s3AccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessKey = this._s3AccessKey;
    }
    if (this._s3IamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3IamRole = this._s3IamRole;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    if (this._serverSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption;
    }
    if (this._serverSideEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._domain = undefined;
      this._fileMaxBytes = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._redundancy = undefined;
      this._s3AccessKey = undefined;
      this._s3IamRole = undefined;
      this._s3SecretKey = undefined;
      this._serverSideEncryption = undefined;
      this._serverSideEncryptionKmsKeyId = undefined;
      this._timestampFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._bucketName = value.bucketName;
      this._compressionCodec = value.compressionCodec;
      this._domain = value.domain;
      this._fileMaxBytes = value.fileMaxBytes;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._redundancy = value.redundancy;
      this._s3AccessKey = value.s3AccessKey;
      this._s3IamRole = value.s3IamRole;
      this._s3SecretKey = value.s3SecretKey;
      this._serverSideEncryption = value.serverSideEncryption;
      this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
      this._timestampFormat = value.timestampFormat;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // file_max_bytes - computed: false, optional: true, required: false
  private _fileMaxBytes?: number; 
  public get fileMaxBytes() {
    return this.getNumberAttribute('file_max_bytes');
  }
  public set fileMaxBytes(value: number) {
    this._fileMaxBytes = value;
  }
  public resetFileMaxBytes() {
    this._fileMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMaxBytesInput() {
    return this._fileMaxBytes;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // redundancy - computed: false, optional: true, required: false
  private _redundancy?: string; 
  public get redundancy() {
    return this.getStringAttribute('redundancy');
  }
  public set redundancy(value: string) {
    this._redundancy = value;
  }
  public resetRedundancy() {
    this._redundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy;
  }

  // s3_access_key - computed: false, optional: true, required: false
  private _s3AccessKey?: string; 
  public get s3AccessKey() {
    return this.getStringAttribute('s3_access_key');
  }
  public set s3AccessKey(value: string) {
    this._s3AccessKey = value;
  }
  public resetS3AccessKey() {
    this._s3AccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyInput() {
    return this._s3AccessKey;
  }

  // s3_iam_role - computed: false, optional: true, required: false
  private _s3IamRole?: string; 
  public get s3IamRole() {
    return this.getStringAttribute('s3_iam_role');
  }
  public set s3IamRole(value: string) {
    this._s3IamRole = value;
  }
  public resetS3IamRole() {
    this._s3IamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3IamRoleInput() {
    return this._s3IamRole;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: string; 
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // server_side_encryption_kms_key_id - computed: false, optional: true, required: false
  private _serverSideEncryptionKmsKeyId?: string; 
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }
  public set serverSideEncryptionKmsKeyId(value: string) {
    this._serverSideEncryptionKmsKeyId = value;
  }
  public resetServerSideEncryptionKmsKeyId() {
    this._serverSideEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionKmsKeyIdInput() {
    return this._serverSideEncryptionKmsKeyId;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }
}

export class ServiceComputeLoggingS3List extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingS3[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingS3OutputReference {
    return new ServiceComputeLoggingS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingScalyr {
  /**
  * The unique name of the Scalyr logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of the logfile field sent to Scalyr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#project_id ServiceCompute#project_id}
  */
  readonly projectId?: string;
  /**
  * The region that log data will be sent to. One of `US` or `EU`. Defaults to `US` if undefined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#region ServiceCompute#region}
  */
  readonly region?: string;
  /**
  * The token to use for authentication (https://www.scalyr.com/keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
}

export function serviceComputeLoggingScalyrToTerraform(struct?: ServiceComputeLoggingScalyr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceComputeLoggingScalyrToHclTerraform(struct?: ServiceComputeLoggingScalyr | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingScalyrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingScalyr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingScalyr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._region = value.region;
      this._token = value.token;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class ServiceComputeLoggingScalyrList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingScalyr[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingScalyrOutputReference {
    return new ServiceComputeLoggingScalyrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingSftp {
  /**
  * The SFTP address to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#address ServiceCompute#address}
  */
  readonly address: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#compression_codec ServiceCompute#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#gzip_level ServiceCompute#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the SFTP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#password ServiceCompute#password}
  */
  readonly password?: string;
  /**
  * The path to upload log files to. If the path ends in `/` then it is treated as a directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#path ServiceCompute#path}
  */
  readonly path: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#period ServiceCompute#period}
  */
  readonly period?: number;
  /**
  * The port the SFTP service listens on. (Default: `22`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#public_key ServiceCompute#public_key}
  */
  readonly publicKey?: string;
  /**
  * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#secret_key ServiceCompute#secret_key}
  */
  readonly secretKey?: string;
  /**
  * A list of host keys for all hosts we can connect to over SFTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ssh_known_hosts ServiceCompute#ssh_known_hosts}
  */
  readonly sshKnownHosts: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#timestamp_format ServiceCompute#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#user ServiceCompute#user}
  */
  readonly user: string;
}

export function serviceComputeLoggingSftpToTerraform(struct?: ServiceComputeLoggingSftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    ssh_known_hosts: cdktf.stringToTerraform(struct!.sshKnownHosts),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceComputeLoggingSftpToHclTerraform(struct?: ServiceComputeLoggingSftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_level: {
      value: cdktf.numberToHclTerraform(struct!.gzipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_known_hosts: {
      value: cdktf.stringToHclTerraform(struct!.sshKnownHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingSftpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingSftp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._gzipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipLevel = this._gzipLevel;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._sshKnownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKnownHosts = this._sshKnownHosts;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingSftp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._compressionCodec = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._path = undefined;
      this._period = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._secretKey = undefined;
      this._sshKnownHosts = undefined;
      this._timestampFormat = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._compressionCodec = value.compressionCodec;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._password = value.password;
      this._path = value.path;
      this._period = value.period;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._secretKey = value.secretKey;
      this._sshKnownHosts = value.sshKnownHosts;
      this._timestampFormat = value.timestampFormat;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // gzip_level - computed: false, optional: true, required: false
  private _gzipLevel?: number; 
  public get gzipLevel() {
    return this.getNumberAttribute('gzip_level');
  }
  public set gzipLevel(value: number) {
    this._gzipLevel = value;
  }
  public resetGzipLevel() {
    this._gzipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLevelInput() {
    return this._gzipLevel;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: true, required: false
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // ssh_known_hosts - computed: false, optional: false, required: true
  private _sshKnownHosts?: string; 
  public get sshKnownHosts() {
    return this.getStringAttribute('ssh_known_hosts');
  }
  public set sshKnownHosts(value: string) {
    this._sshKnownHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKnownHostsInput() {
    return this._sshKnownHosts;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceComputeLoggingSftpList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingSftp[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingSftpOutputReference {
    return new ServiceComputeLoggingSftpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingSplunk {
  /**
  * A unique name to identify the Splunk endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SPLUNK_CA_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_ca_cert ServiceCompute#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_cert ServiceCompute#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_key ServiceCompute#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_hostname ServiceCompute#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Splunk token to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token: string;
  /**
  * The Splunk URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
  /**
  * Whether to use TLS for secure logging. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#use_tls ServiceCompute#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceComputeLoggingSplunkToTerraform(struct?: ServiceComputeLoggingSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceComputeLoggingSplunkToHclTerraform(struct?: ServiceComputeLoggingSplunk | cdktf.IResolvable): any {
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._tlsCaCert = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsHostname = undefined;
      this._token = undefined;
      this._url = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._token = value.token;
      this._url = value.url;
      this._useTls = value.useTls;
    }
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}

export class ServiceComputeLoggingSplunkList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingSplunk[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingSplunkOutputReference {
    return new ServiceComputeLoggingSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingSumologic {
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this Sumologic endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The URL to Sumologic collector endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#url ServiceCompute#url}
  */
  readonly url: string;
}

export function serviceComputeLoggingSumologicToTerraform(struct?: ServiceComputeLoggingSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceComputeLoggingSumologicToHclTerraform(struct?: ServiceComputeLoggingSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._processingRegion = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageType = value.messageType;
      this._name = value.name;
      this._processingRegion = value.processingRegion;
      this._url = value.url;
    }
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceComputeLoggingSumologicList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingSumologic[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingSumologicOutputReference {
    return new ServiceComputeLoggingSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputeLoggingSyslog {
  /**
  * A hostname or IPv4 address of the Syslog endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#address ServiceCompute#address}
  */
  readonly address: string;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#message_type ServiceCompute#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this Syslog endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The port associated with the address where the Syslog endpoint can be accessed. Default `514`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#port ServiceCompute#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#processing_region ServiceCompute#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SYSLOG_CA_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_ca_cert ServiceCompute#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SYSLOG_CLIENT_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_cert ServiceCompute#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format. You can provide this key via an environment variable, `FASTLY_SYSLOG_CLIENT_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_client_key ServiceCompute#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * Used during the TLS handshake to validate the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#tls_hostname ServiceCompute#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * Whether to prepend each message with a specific token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#token ServiceCompute#token}
  */
  readonly token?: string;
  /**
  * Whether to use TLS for secure logging. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#use_tls ServiceCompute#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceComputeLoggingSyslogToTerraform(struct?: ServiceComputeLoggingSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    token: cdktf.stringToTerraform(struct!.token),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceComputeLoggingSyslogToHclTerraform(struct?: ServiceComputeLoggingSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_region: {
      value: cdktf.stringToHclTerraform(struct!.processingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeLoggingSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeLoggingSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._tlsCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCert = this._tlsCaCert;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeLoggingSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._tlsCaCert = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsHostname = undefined;
      this._token = undefined;
      this._useTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._messageType = value.messageType;
      this._name = value.name;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._token = value.token;
      this._useTls = value.useTls;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
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

  // port - computed: false, optional: true, required: false
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

  // processing_region - computed: false, optional: true, required: false
  private _processingRegion?: string; 
  public get processingRegion() {
    return this.getStringAttribute('processing_region');
  }
  public set processingRegion(value: string) {
    this._processingRegion = value;
  }
  public resetProcessingRegion() {
    this._processingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRegionInput() {
    return this._processingRegion;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
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

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}

export class ServiceComputeLoggingSyslogList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeLoggingSyslog[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeLoggingSyslogOutputReference {
    return new ServiceComputeLoggingSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceComputePackage {
  /**
  * The contents of the Wasm deployment package as a base64 encoded string (e.g. could be provided using an input variable or via external data source output variable). Conflicts with `filename`. Exactly one of these two arguments must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#content ServiceCompute#content}
  */
  readonly content?: string;
  /**
  * The path to the Wasm deployment package within your local filesystem. Conflicts with `content`. Exactly one of these two arguments must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#filename ServiceCompute#filename}
  */
  readonly filename?: string;
  /**
  * Used to trigger updates. Must be set to a SHA512 hash of all files (in sorted order) within the package. The usual way to set this is using the fastly_package_hash data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#source_code_hash ServiceCompute#source_code_hash}
  */
  readonly sourceCodeHash?: string;
}

export function serviceComputePackageToTerraform(struct?: ServiceComputePackageOutputReference | ServiceComputePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
    source_code_hash: cdktf.stringToTerraform(struct!.sourceCodeHash),
  }
}


export function serviceComputePackageToHclTerraform(struct?: ServiceComputePackageOutputReference | ServiceComputePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_hash: {
      value: cdktf.stringToHclTerraform(struct!.sourceCodeHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputePackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceComputePackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._sourceCodeHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeHash = this._sourceCodeHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputePackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
      this._sourceCodeHash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
      this._sourceCodeHash = value.sourceCodeHash;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string; 
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash;
  }
}
export interface ServiceComputeProductEnablementDdosProtection {
  /**
  * Enable DDoS Protection support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#enabled ServiceCompute#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Operation mode. Can be either `off`, `log`, or `block`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#mode ServiceCompute#mode}
  */
  readonly mode: string;
}

export function serviceComputeProductEnablementDdosProtectionToTerraform(struct?: ServiceComputeProductEnablementDdosProtectionOutputReference | ServiceComputeProductEnablementDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function serviceComputeProductEnablementDdosProtectionToHclTerraform(struct?: ServiceComputeProductEnablementDdosProtectionOutputReference | ServiceComputeProductEnablementDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeProductEnablementDdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceComputeProductEnablementDdosProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeProductEnablementDdosProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._mode = value.mode;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ServiceComputeProductEnablementNgwaf {
  /**
  * Enable Next-Gen WAF support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#enabled ServiceCompute#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The percentage of traffic to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#traffic_ramp ServiceCompute#traffic_ramp}
  */
  readonly trafficRamp?: number;
  /**
  * The workspace to link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#workspace_id ServiceCompute#workspace_id}
  */
  readonly workspaceId: string;
}

export function serviceComputeProductEnablementNgwafToTerraform(struct?: ServiceComputeProductEnablementNgwafOutputReference | ServiceComputeProductEnablementNgwaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    traffic_ramp: cdktf.numberToTerraform(struct!.trafficRamp),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function serviceComputeProductEnablementNgwafToHclTerraform(struct?: ServiceComputeProductEnablementNgwafOutputReference | ServiceComputeProductEnablementNgwaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_ramp: {
      value: cdktf.numberToHclTerraform(struct!.trafficRamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeProductEnablementNgwafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceComputeProductEnablementNgwaf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trafficRamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRamp = this._trafficRamp;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeProductEnablementNgwaf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._trafficRamp = undefined;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._trafficRamp = value.trafficRamp;
      this._workspaceId = value.workspaceId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // traffic_ramp - computed: false, optional: true, required: false
  private _trafficRamp?: number; 
  public get trafficRamp() {
    return this.getNumberAttribute('traffic_ramp');
  }
  public set trafficRamp(value: number) {
    this._trafficRamp = value;
  }
  public resetTrafficRamp() {
    this._trafficRamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRampInput() {
    return this._trafficRamp;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface ServiceComputeProductEnablement {
  /**
  * Enable API Discovery support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#api_discovery ServiceCompute#api_discovery}
  */
  readonly apiDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable Fanout support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#fanout ServiceCompute#fanout}
  */
  readonly fanout?: boolean | cdktf.IResolvable;
  /**
  * Enable Log Explorer & Insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#log_explorer_insights ServiceCompute#log_explorer_insights}
  */
  readonly logExplorerInsights?: boolean | cdktf.IResolvable;
  /**
  * Used by the provider to identify modified settings (changing this value will force the entire block to be deleted, then recreated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name?: string;
  /**
  * Enable WebSockets support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#websockets ServiceCompute#websockets}
  */
  readonly websockets?: boolean | cdktf.IResolvable;
  /**
  * ddos_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ddos_protection ServiceCompute#ddos_protection}
  */
  readonly ddosProtection?: ServiceComputeProductEnablementDdosProtection;
  /**
  * ngwaf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#ngwaf ServiceCompute#ngwaf}
  */
  readonly ngwaf?: ServiceComputeProductEnablementNgwaf;
}

export function serviceComputeProductEnablementToTerraform(struct?: ServiceComputeProductEnablementOutputReference | ServiceComputeProductEnablement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery: cdktf.booleanToTerraform(struct!.apiDiscovery),
    fanout: cdktf.booleanToTerraform(struct!.fanout),
    log_explorer_insights: cdktf.booleanToTerraform(struct!.logExplorerInsights),
    name: cdktf.stringToTerraform(struct!.name),
    websockets: cdktf.booleanToTerraform(struct!.websockets),
    ddos_protection: serviceComputeProductEnablementDdosProtectionToTerraform(struct!.ddosProtection),
    ngwaf: serviceComputeProductEnablementNgwafToTerraform(struct!.ngwaf),
  }
}


export function serviceComputeProductEnablementToHclTerraform(struct?: ServiceComputeProductEnablementOutputReference | ServiceComputeProductEnablement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.apiDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fanout: {
      value: cdktf.booleanToHclTerraform(struct!.fanout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_explorer_insights: {
      value: cdktf.booleanToHclTerraform(struct!.logExplorerInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    websockets: {
      value: cdktf.booleanToHclTerraform(struct!.websockets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddos_protection: {
      value: serviceComputeProductEnablementDdosProtectionToHclTerraform(struct!.ddosProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceComputeProductEnablementDdosProtectionList",
    },
    ngwaf: {
      value: serviceComputeProductEnablementNgwafToHclTerraform(struct!.ngwaf),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceComputeProductEnablementNgwafList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeProductEnablementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceComputeProductEnablement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscovery = this._apiDiscovery;
    }
    if (this._fanout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fanout = this._fanout;
    }
    if (this._logExplorerInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.logExplorerInsights = this._logExplorerInsights;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._websockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.websockets = this._websockets;
    }
    if (this._ddosProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosProtection = this._ddosProtection?.internalValue;
    }
    if (this._ngwaf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwaf = this._ngwaf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeProductEnablement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscovery = undefined;
      this._fanout = undefined;
      this._logExplorerInsights = undefined;
      this._name = undefined;
      this._websockets = undefined;
      this._ddosProtection.internalValue = undefined;
      this._ngwaf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscovery = value.apiDiscovery;
      this._fanout = value.fanout;
      this._logExplorerInsights = value.logExplorerInsights;
      this._name = value.name;
      this._websockets = value.websockets;
      this._ddosProtection.internalValue = value.ddosProtection;
      this._ngwaf.internalValue = value.ngwaf;
    }
  }

  // api_discovery - computed: false, optional: true, required: false
  private _apiDiscovery?: boolean | cdktf.IResolvable; 
  public get apiDiscovery() {
    return this.getBooleanAttribute('api_discovery');
  }
  public set apiDiscovery(value: boolean | cdktf.IResolvable) {
    this._apiDiscovery = value;
  }
  public resetApiDiscovery() {
    this._apiDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryInput() {
    return this._apiDiscovery;
  }

  // fanout - computed: false, optional: true, required: false
  private _fanout?: boolean | cdktf.IResolvable; 
  public get fanout() {
    return this.getBooleanAttribute('fanout');
  }
  public set fanout(value: boolean | cdktf.IResolvable) {
    this._fanout = value;
  }
  public resetFanout() {
    this._fanout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanoutInput() {
    return this._fanout;
  }

  // log_explorer_insights - computed: false, optional: true, required: false
  private _logExplorerInsights?: boolean | cdktf.IResolvable; 
  public get logExplorerInsights() {
    return this.getBooleanAttribute('log_explorer_insights');
  }
  public set logExplorerInsights(value: boolean | cdktf.IResolvable) {
    this._logExplorerInsights = value;
  }
  public resetLogExplorerInsights() {
    this._logExplorerInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExplorerInsightsInput() {
    return this._logExplorerInsights;
  }

  // name - computed: false, optional: true, required: false
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

  // websockets - computed: false, optional: true, required: false
  private _websockets?: boolean | cdktf.IResolvable; 
  public get websockets() {
    return this.getBooleanAttribute('websockets');
  }
  public set websockets(value: boolean | cdktf.IResolvable) {
    this._websockets = value;
  }
  public resetWebsockets() {
    this._websockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsInput() {
    return this._websockets;
  }

  // ddos_protection - computed: false, optional: true, required: false
  private _ddosProtection = new ServiceComputeProductEnablementDdosProtectionOutputReference(this, "ddos_protection");
  public get ddosProtection() {
    return this._ddosProtection;
  }
  public putDdosProtection(value: ServiceComputeProductEnablementDdosProtection) {
    this._ddosProtection.internalValue = value;
  }
  public resetDdosProtection() {
    this._ddosProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection.internalValue;
  }

  // ngwaf - computed: false, optional: true, required: false
  private _ngwaf = new ServiceComputeProductEnablementNgwafOutputReference(this, "ngwaf");
  public get ngwaf() {
    return this._ngwaf;
  }
  public putNgwaf(value: ServiceComputeProductEnablementNgwaf) {
    this._ngwaf.internalValue = value;
  }
  public resetNgwaf() {
    this._ngwaf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafInput() {
    return this._ngwaf.internalValue;
  }
}
export interface ServiceComputeResourceLink {
  /**
  * The name of the resource link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#name ServiceCompute#name}
  */
  readonly name: string;
  /**
  * The ID of the underlying linked resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#resource_id ServiceCompute#resource_id}
  */
  readonly resourceId: string;
}

export function serviceComputeResourceLinkToTerraform(struct?: ServiceComputeResourceLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function serviceComputeResourceLinkToHclTerraform(struct?: ServiceComputeResourceLink | cdktf.IResolvable): any {
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
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceComputeResourceLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceComputeResourceLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceComputeResourceLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceId = value.resourceId;
    }
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class ServiceComputeResourceLinkList extends cdktf.ComplexList {
  public internalValue? : ServiceComputeResourceLink[] | cdktf.IResolvable

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
  public get(index: number): ServiceComputeResourceLinkOutputReference {
    return new ServiceComputeResourceLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute fastly_service_compute}
*/
export class ServiceCompute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_service_compute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCompute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCompute to import
  * @param importFromId The id of the existing ServiceCompute that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCompute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_service_compute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/service_compute fastly_service_compute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceComputeConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceComputeConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_service_compute',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._comment = config.comment;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._reuse = config.reuse;
    this._stage = config.stage;
    this._versionComment = config.versionComment;
    this._backend.internalValue = config.backend;
    this._dictionary.internalValue = config.dictionary;
    this._domain.internalValue = config.domain;
    this._healthcheck.internalValue = config.healthcheck;
    this._imageOptimizerDefaultSettings.internalValue = config.imageOptimizerDefaultSettings;
    this._loggingBigquery.internalValue = config.loggingBigquery;
    this._loggingBlobstorage.internalValue = config.loggingBlobstorage;
    this._loggingCloudfiles.internalValue = config.loggingCloudfiles;
    this._loggingDatadog.internalValue = config.loggingDatadog;
    this._loggingDigitalocean.internalValue = config.loggingDigitalocean;
    this._loggingElasticsearch.internalValue = config.loggingElasticsearch;
    this._loggingFtp.internalValue = config.loggingFtp;
    this._loggingGcs.internalValue = config.loggingGcs;
    this._loggingGooglepubsub.internalValue = config.loggingGooglepubsub;
    this._loggingGrafanacloudlogs.internalValue = config.loggingGrafanacloudlogs;
    this._loggingHeroku.internalValue = config.loggingHeroku;
    this._loggingHoneycomb.internalValue = config.loggingHoneycomb;
    this._loggingHttps.internalValue = config.loggingHttps;
    this._loggingKafka.internalValue = config.loggingKafka;
    this._loggingKinesis.internalValue = config.loggingKinesis;
    this._loggingLogentries.internalValue = config.loggingLogentries;
    this._loggingLoggly.internalValue = config.loggingLoggly;
    this._loggingLogshuttle.internalValue = config.loggingLogshuttle;
    this._loggingNewrelic.internalValue = config.loggingNewrelic;
    this._loggingNewrelicotlp.internalValue = config.loggingNewrelicotlp;
    this._loggingOpenstack.internalValue = config.loggingOpenstack;
    this._loggingPapertrail.internalValue = config.loggingPapertrail;
    this._loggingS3.internalValue = config.loggingS3;
    this._loggingScalyr.internalValue = config.loggingScalyr;
    this._loggingSftp.internalValue = config.loggingSftp;
    this._loggingSplunk.internalValue = config.loggingSplunk;
    this._loggingSumologic.internalValue = config.loggingSumologic;
    this._loggingSyslog.internalValue = config.loggingSyslog;
    this._package.internalValue = config.package;
    this._productEnablement.internalValue = config.productEnablement;
    this._resourceLink.internalValue = config.resourceLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: false, optional: true, required: false
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // active_version - computed: true, optional: false, required: false
  public get activeVersion() {
    return this.getNumberAttribute('active_version');
  }

  // cloned_version - computed: true, optional: false, required: false
  public get clonedVersion() {
    return this.getNumberAttribute('cloned_version');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // force_refresh - computed: true, optional: false, required: false
  public get forceRefresh() {
    return this.getBooleanAttribute('force_refresh');
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

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
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

  // reuse - computed: false, optional: true, required: false
  private _reuse?: boolean | cdktf.IResolvable; 
  public get reuse() {
    return this.getBooleanAttribute('reuse');
  }
  public set reuse(value: boolean | cdktf.IResolvable) {
    this._reuse = value;
  }
  public resetReuse() {
    this._reuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseInput() {
    return this._reuse;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: boolean | cdktf.IResolvable; 
  public get stage() {
    return this.getBooleanAttribute('stage');
  }
  public set stage(value: boolean | cdktf.IResolvable) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // staged_version - computed: true, optional: false, required: false
  public get stagedVersion() {
    return this.getNumberAttribute('staged_version');
  }

  // version_comment - computed: false, optional: true, required: false
  private _versionComment?: string; 
  public get versionComment() {
    return this.getStringAttribute('version_comment');
  }
  public set versionComment(value: string) {
    this._versionComment = value;
  }
  public resetVersionComment() {
    this._versionComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCommentInput() {
    return this._versionComment;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new ServiceComputeBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ServiceComputeBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new ServiceComputeDictionaryList(this, "dictionary", true);
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: ServiceComputeDictionary[] | cdktf.IResolvable) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new ServiceComputeDomainList(this, "domain", true);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ServiceComputeDomain[] | cdktf.IResolvable) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new ServiceComputeHealthcheckList(this, "healthcheck", true);
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: ServiceComputeHealthcheck[] | cdktf.IResolvable) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // image_optimizer_default_settings - computed: false, optional: true, required: false
  private _imageOptimizerDefaultSettings = new ServiceComputeImageOptimizerDefaultSettingsOutputReference(this, "image_optimizer_default_settings");
  public get imageOptimizerDefaultSettings() {
    return this._imageOptimizerDefaultSettings;
  }
  public putImageOptimizerDefaultSettings(value: ServiceComputeImageOptimizerDefaultSettings) {
    this._imageOptimizerDefaultSettings.internalValue = value;
  }
  public resetImageOptimizerDefaultSettings() {
    this._imageOptimizerDefaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizerDefaultSettingsInput() {
    return this._imageOptimizerDefaultSettings.internalValue;
  }

  // logging_bigquery - computed: false, optional: true, required: false
  private _loggingBigquery = new ServiceComputeLoggingBigqueryList(this, "logging_bigquery", true);
  public get loggingBigquery() {
    return this._loggingBigquery;
  }
  public putLoggingBigquery(value: ServiceComputeLoggingBigquery[] | cdktf.IResolvable) {
    this._loggingBigquery.internalValue = value;
  }
  public resetLoggingBigquery() {
    this._loggingBigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingBigqueryInput() {
    return this._loggingBigquery.internalValue;
  }

  // logging_blobstorage - computed: false, optional: true, required: false
  private _loggingBlobstorage = new ServiceComputeLoggingBlobstorageList(this, "logging_blobstorage", true);
  public get loggingBlobstorage() {
    return this._loggingBlobstorage;
  }
  public putLoggingBlobstorage(value: ServiceComputeLoggingBlobstorage[] | cdktf.IResolvable) {
    this._loggingBlobstorage.internalValue = value;
  }
  public resetLoggingBlobstorage() {
    this._loggingBlobstorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingBlobstorageInput() {
    return this._loggingBlobstorage.internalValue;
  }

  // logging_cloudfiles - computed: false, optional: true, required: false
  private _loggingCloudfiles = new ServiceComputeLoggingCloudfilesList(this, "logging_cloudfiles", true);
  public get loggingCloudfiles() {
    return this._loggingCloudfiles;
  }
  public putLoggingCloudfiles(value: ServiceComputeLoggingCloudfiles[] | cdktf.IResolvable) {
    this._loggingCloudfiles.internalValue = value;
  }
  public resetLoggingCloudfiles() {
    this._loggingCloudfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCloudfilesInput() {
    return this._loggingCloudfiles.internalValue;
  }

  // logging_datadog - computed: false, optional: true, required: false
  private _loggingDatadog = new ServiceComputeLoggingDatadogList(this, "logging_datadog", true);
  public get loggingDatadog() {
    return this._loggingDatadog;
  }
  public putLoggingDatadog(value: ServiceComputeLoggingDatadog[] | cdktf.IResolvable) {
    this._loggingDatadog.internalValue = value;
  }
  public resetLoggingDatadog() {
    this._loggingDatadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDatadogInput() {
    return this._loggingDatadog.internalValue;
  }

  // logging_digitalocean - computed: false, optional: true, required: false
  private _loggingDigitalocean = new ServiceComputeLoggingDigitaloceanList(this, "logging_digitalocean", true);
  public get loggingDigitalocean() {
    return this._loggingDigitalocean;
  }
  public putLoggingDigitalocean(value: ServiceComputeLoggingDigitalocean[] | cdktf.IResolvable) {
    this._loggingDigitalocean.internalValue = value;
  }
  public resetLoggingDigitalocean() {
    this._loggingDigitalocean.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDigitaloceanInput() {
    return this._loggingDigitalocean.internalValue;
  }

  // logging_elasticsearch - computed: false, optional: true, required: false
  private _loggingElasticsearch = new ServiceComputeLoggingElasticsearchList(this, "logging_elasticsearch", true);
  public get loggingElasticsearch() {
    return this._loggingElasticsearch;
  }
  public putLoggingElasticsearch(value: ServiceComputeLoggingElasticsearch[] | cdktf.IResolvable) {
    this._loggingElasticsearch.internalValue = value;
  }
  public resetLoggingElasticsearch() {
    this._loggingElasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingElasticsearchInput() {
    return this._loggingElasticsearch.internalValue;
  }

  // logging_ftp - computed: false, optional: true, required: false
  private _loggingFtp = new ServiceComputeLoggingFtpList(this, "logging_ftp", true);
  public get loggingFtp() {
    return this._loggingFtp;
  }
  public putLoggingFtp(value: ServiceComputeLoggingFtp[] | cdktf.IResolvable) {
    this._loggingFtp.internalValue = value;
  }
  public resetLoggingFtp() {
    this._loggingFtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFtpInput() {
    return this._loggingFtp.internalValue;
  }

  // logging_gcs - computed: false, optional: true, required: false
  private _loggingGcs = new ServiceComputeLoggingGcsList(this, "logging_gcs", true);
  public get loggingGcs() {
    return this._loggingGcs;
  }
  public putLoggingGcs(value: ServiceComputeLoggingGcs[] | cdktf.IResolvable) {
    this._loggingGcs.internalValue = value;
  }
  public resetLoggingGcs() {
    this._loggingGcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingGcsInput() {
    return this._loggingGcs.internalValue;
  }

  // logging_googlepubsub - computed: false, optional: true, required: false
  private _loggingGooglepubsub = new ServiceComputeLoggingGooglepubsubList(this, "logging_googlepubsub", true);
  public get loggingGooglepubsub() {
    return this._loggingGooglepubsub;
  }
  public putLoggingGooglepubsub(value: ServiceComputeLoggingGooglepubsub[] | cdktf.IResolvable) {
    this._loggingGooglepubsub.internalValue = value;
  }
  public resetLoggingGooglepubsub() {
    this._loggingGooglepubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingGooglepubsubInput() {
    return this._loggingGooglepubsub.internalValue;
  }

  // logging_grafanacloudlogs - computed: false, optional: true, required: false
  private _loggingGrafanacloudlogs = new ServiceComputeLoggingGrafanacloudlogsList(this, "logging_grafanacloudlogs", true);
  public get loggingGrafanacloudlogs() {
    return this._loggingGrafanacloudlogs;
  }
  public putLoggingGrafanacloudlogs(value: ServiceComputeLoggingGrafanacloudlogs[] | cdktf.IResolvable) {
    this._loggingGrafanacloudlogs.internalValue = value;
  }
  public resetLoggingGrafanacloudlogs() {
    this._loggingGrafanacloudlogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingGrafanacloudlogsInput() {
    return this._loggingGrafanacloudlogs.internalValue;
  }

  // logging_heroku - computed: false, optional: true, required: false
  private _loggingHeroku = new ServiceComputeLoggingHerokuList(this, "logging_heroku", true);
  public get loggingHeroku() {
    return this._loggingHeroku;
  }
  public putLoggingHeroku(value: ServiceComputeLoggingHeroku[] | cdktf.IResolvable) {
    this._loggingHeroku.internalValue = value;
  }
  public resetLoggingHeroku() {
    this._loggingHeroku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingHerokuInput() {
    return this._loggingHeroku.internalValue;
  }

  // logging_honeycomb - computed: false, optional: true, required: false
  private _loggingHoneycomb = new ServiceComputeLoggingHoneycombList(this, "logging_honeycomb", true);
  public get loggingHoneycomb() {
    return this._loggingHoneycomb;
  }
  public putLoggingHoneycomb(value: ServiceComputeLoggingHoneycomb[] | cdktf.IResolvable) {
    this._loggingHoneycomb.internalValue = value;
  }
  public resetLoggingHoneycomb() {
    this._loggingHoneycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingHoneycombInput() {
    return this._loggingHoneycomb.internalValue;
  }

  // logging_https - computed: false, optional: true, required: false
  private _loggingHttps = new ServiceComputeLoggingHttpsList(this, "logging_https", true);
  public get loggingHttps() {
    return this._loggingHttps;
  }
  public putLoggingHttps(value: ServiceComputeLoggingHttps[] | cdktf.IResolvable) {
    this._loggingHttps.internalValue = value;
  }
  public resetLoggingHttps() {
    this._loggingHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingHttpsInput() {
    return this._loggingHttps.internalValue;
  }

  // logging_kafka - computed: false, optional: true, required: false
  private _loggingKafka = new ServiceComputeLoggingKafkaList(this, "logging_kafka", true);
  public get loggingKafka() {
    return this._loggingKafka;
  }
  public putLoggingKafka(value: ServiceComputeLoggingKafka[] | cdktf.IResolvable) {
    this._loggingKafka.internalValue = value;
  }
  public resetLoggingKafka() {
    this._loggingKafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingKafkaInput() {
    return this._loggingKafka.internalValue;
  }

  // logging_kinesis - computed: false, optional: true, required: false
  private _loggingKinesis = new ServiceComputeLoggingKinesisList(this, "logging_kinesis", true);
  public get loggingKinesis() {
    return this._loggingKinesis;
  }
  public putLoggingKinesis(value: ServiceComputeLoggingKinesis[] | cdktf.IResolvable) {
    this._loggingKinesis.internalValue = value;
  }
  public resetLoggingKinesis() {
    this._loggingKinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingKinesisInput() {
    return this._loggingKinesis.internalValue;
  }

  // logging_logentries - computed: false, optional: true, required: false
  private _loggingLogentries = new ServiceComputeLoggingLogentriesList(this, "logging_logentries", true);
  public get loggingLogentries() {
    return this._loggingLogentries;
  }
  public putLoggingLogentries(value: ServiceComputeLoggingLogentries[] | cdktf.IResolvable) {
    this._loggingLogentries.internalValue = value;
  }
  public resetLoggingLogentries() {
    this._loggingLogentries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLogentriesInput() {
    return this._loggingLogentries.internalValue;
  }

  // logging_loggly - computed: false, optional: true, required: false
  private _loggingLoggly = new ServiceComputeLoggingLogglyList(this, "logging_loggly", true);
  public get loggingLoggly() {
    return this._loggingLoggly;
  }
  public putLoggingLoggly(value: ServiceComputeLoggingLoggly[] | cdktf.IResolvable) {
    this._loggingLoggly.internalValue = value;
  }
  public resetLoggingLoggly() {
    this._loggingLoggly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLogglyInput() {
    return this._loggingLoggly.internalValue;
  }

  // logging_logshuttle - computed: false, optional: true, required: false
  private _loggingLogshuttle = new ServiceComputeLoggingLogshuttleList(this, "logging_logshuttle", true);
  public get loggingLogshuttle() {
    return this._loggingLogshuttle;
  }
  public putLoggingLogshuttle(value: ServiceComputeLoggingLogshuttle[] | cdktf.IResolvable) {
    this._loggingLogshuttle.internalValue = value;
  }
  public resetLoggingLogshuttle() {
    this._loggingLogshuttle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLogshuttleInput() {
    return this._loggingLogshuttle.internalValue;
  }

  // logging_newrelic - computed: false, optional: true, required: false
  private _loggingNewrelic = new ServiceComputeLoggingNewrelicList(this, "logging_newrelic", true);
  public get loggingNewrelic() {
    return this._loggingNewrelic;
  }
  public putLoggingNewrelic(value: ServiceComputeLoggingNewrelic[] | cdktf.IResolvable) {
    this._loggingNewrelic.internalValue = value;
  }
  public resetLoggingNewrelic() {
    this._loggingNewrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingNewrelicInput() {
    return this._loggingNewrelic.internalValue;
  }

  // logging_newrelicotlp - computed: false, optional: true, required: false
  private _loggingNewrelicotlp = new ServiceComputeLoggingNewrelicotlpList(this, "logging_newrelicotlp", true);
  public get loggingNewrelicotlp() {
    return this._loggingNewrelicotlp;
  }
  public putLoggingNewrelicotlp(value: ServiceComputeLoggingNewrelicotlp[] | cdktf.IResolvable) {
    this._loggingNewrelicotlp.internalValue = value;
  }
  public resetLoggingNewrelicotlp() {
    this._loggingNewrelicotlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingNewrelicotlpInput() {
    return this._loggingNewrelicotlp.internalValue;
  }

  // logging_openstack - computed: false, optional: true, required: false
  private _loggingOpenstack = new ServiceComputeLoggingOpenstackList(this, "logging_openstack", true);
  public get loggingOpenstack() {
    return this._loggingOpenstack;
  }
  public putLoggingOpenstack(value: ServiceComputeLoggingOpenstack[] | cdktf.IResolvable) {
    this._loggingOpenstack.internalValue = value;
  }
  public resetLoggingOpenstack() {
    this._loggingOpenstack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingOpenstackInput() {
    return this._loggingOpenstack.internalValue;
  }

  // logging_papertrail - computed: false, optional: true, required: false
  private _loggingPapertrail = new ServiceComputeLoggingPapertrailList(this, "logging_papertrail", true);
  public get loggingPapertrail() {
    return this._loggingPapertrail;
  }
  public putLoggingPapertrail(value: ServiceComputeLoggingPapertrail[] | cdktf.IResolvable) {
    this._loggingPapertrail.internalValue = value;
  }
  public resetLoggingPapertrail() {
    this._loggingPapertrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPapertrailInput() {
    return this._loggingPapertrail.internalValue;
  }

  // logging_s3 - computed: false, optional: true, required: false
  private _loggingS3 = new ServiceComputeLoggingS3List(this, "logging_s3", true);
  public get loggingS3() {
    return this._loggingS3;
  }
  public putLoggingS3(value: ServiceComputeLoggingS3[] | cdktf.IResolvable) {
    this._loggingS3.internalValue = value;
  }
  public resetLoggingS3() {
    this._loggingS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingS3Input() {
    return this._loggingS3.internalValue;
  }

  // logging_scalyr - computed: false, optional: true, required: false
  private _loggingScalyr = new ServiceComputeLoggingScalyrList(this, "logging_scalyr", true);
  public get loggingScalyr() {
    return this._loggingScalyr;
  }
  public putLoggingScalyr(value: ServiceComputeLoggingScalyr[] | cdktf.IResolvable) {
    this._loggingScalyr.internalValue = value;
  }
  public resetLoggingScalyr() {
    this._loggingScalyr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingScalyrInput() {
    return this._loggingScalyr.internalValue;
  }

  // logging_sftp - computed: false, optional: true, required: false
  private _loggingSftp = new ServiceComputeLoggingSftpList(this, "logging_sftp", true);
  public get loggingSftp() {
    return this._loggingSftp;
  }
  public putLoggingSftp(value: ServiceComputeLoggingSftp[] | cdktf.IResolvable) {
    this._loggingSftp.internalValue = value;
  }
  public resetLoggingSftp() {
    this._loggingSftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSftpInput() {
    return this._loggingSftp.internalValue;
  }

  // logging_splunk - computed: false, optional: true, required: false
  private _loggingSplunk = new ServiceComputeLoggingSplunkList(this, "logging_splunk", true);
  public get loggingSplunk() {
    return this._loggingSplunk;
  }
  public putLoggingSplunk(value: ServiceComputeLoggingSplunk[] | cdktf.IResolvable) {
    this._loggingSplunk.internalValue = value;
  }
  public resetLoggingSplunk() {
    this._loggingSplunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSplunkInput() {
    return this._loggingSplunk.internalValue;
  }

  // logging_sumologic - computed: false, optional: true, required: false
  private _loggingSumologic = new ServiceComputeLoggingSumologicList(this, "logging_sumologic", true);
  public get loggingSumologic() {
    return this._loggingSumologic;
  }
  public putLoggingSumologic(value: ServiceComputeLoggingSumologic[] | cdktf.IResolvable) {
    this._loggingSumologic.internalValue = value;
  }
  public resetLoggingSumologic() {
    this._loggingSumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSumologicInput() {
    return this._loggingSumologic.internalValue;
  }

  // logging_syslog - computed: false, optional: true, required: false
  private _loggingSyslog = new ServiceComputeLoggingSyslogList(this, "logging_syslog", true);
  public get loggingSyslog() {
    return this._loggingSyslog;
  }
  public putLoggingSyslog(value: ServiceComputeLoggingSyslog[] | cdktf.IResolvable) {
    this._loggingSyslog.internalValue = value;
  }
  public resetLoggingSyslog() {
    this._loggingSyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSyslogInput() {
    return this._loggingSyslog.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new ServiceComputePackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }
  public putPackage(value: ServiceComputePackage) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // product_enablement - computed: false, optional: true, required: false
  private _productEnablement = new ServiceComputeProductEnablementOutputReference(this, "product_enablement");
  public get productEnablement() {
    return this._productEnablement;
  }
  public putProductEnablement(value: ServiceComputeProductEnablement) {
    this._productEnablement.internalValue = value;
  }
  public resetProductEnablement() {
    this._productEnablement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productEnablementInput() {
    return this._productEnablement.internalValue;
  }

  // resource_link - computed: false, optional: true, required: false
  private _resourceLink = new ServiceComputeResourceLinkList(this, "resource_link", true);
  public get resourceLink() {
    return this._resourceLink;
  }
  public putResourceLink(value: ServiceComputeResourceLink[] | cdktf.IResolvable) {
    this._resourceLink.internalValue = value;
  }
  public resetResourceLink() {
    this._resourceLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLinkInput() {
    return this._resourceLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.booleanToTerraform(this._activate),
      comment: cdktf.stringToTerraform(this._comment),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reuse: cdktf.booleanToTerraform(this._reuse),
      stage: cdktf.booleanToTerraform(this._stage),
      version_comment: cdktf.stringToTerraform(this._versionComment),
      backend: cdktf.listMapper(serviceComputeBackendToTerraform, true)(this._backend.internalValue),
      dictionary: cdktf.listMapper(serviceComputeDictionaryToTerraform, true)(this._dictionary.internalValue),
      domain: cdktf.listMapper(serviceComputeDomainToTerraform, true)(this._domain.internalValue),
      healthcheck: cdktf.listMapper(serviceComputeHealthcheckToTerraform, true)(this._healthcheck.internalValue),
      image_optimizer_default_settings: serviceComputeImageOptimizerDefaultSettingsToTerraform(this._imageOptimizerDefaultSettings.internalValue),
      logging_bigquery: cdktf.listMapper(serviceComputeLoggingBigqueryToTerraform, true)(this._loggingBigquery.internalValue),
      logging_blobstorage: cdktf.listMapper(serviceComputeLoggingBlobstorageToTerraform, true)(this._loggingBlobstorage.internalValue),
      logging_cloudfiles: cdktf.listMapper(serviceComputeLoggingCloudfilesToTerraform, true)(this._loggingCloudfiles.internalValue),
      logging_datadog: cdktf.listMapper(serviceComputeLoggingDatadogToTerraform, true)(this._loggingDatadog.internalValue),
      logging_digitalocean: cdktf.listMapper(serviceComputeLoggingDigitaloceanToTerraform, true)(this._loggingDigitalocean.internalValue),
      logging_elasticsearch: cdktf.listMapper(serviceComputeLoggingElasticsearchToTerraform, true)(this._loggingElasticsearch.internalValue),
      logging_ftp: cdktf.listMapper(serviceComputeLoggingFtpToTerraform, true)(this._loggingFtp.internalValue),
      logging_gcs: cdktf.listMapper(serviceComputeLoggingGcsToTerraform, true)(this._loggingGcs.internalValue),
      logging_googlepubsub: cdktf.listMapper(serviceComputeLoggingGooglepubsubToTerraform, true)(this._loggingGooglepubsub.internalValue),
      logging_grafanacloudlogs: cdktf.listMapper(serviceComputeLoggingGrafanacloudlogsToTerraform, true)(this._loggingGrafanacloudlogs.internalValue),
      logging_heroku: cdktf.listMapper(serviceComputeLoggingHerokuToTerraform, true)(this._loggingHeroku.internalValue),
      logging_honeycomb: cdktf.listMapper(serviceComputeLoggingHoneycombToTerraform, true)(this._loggingHoneycomb.internalValue),
      logging_https: cdktf.listMapper(serviceComputeLoggingHttpsToTerraform, true)(this._loggingHttps.internalValue),
      logging_kafka: cdktf.listMapper(serviceComputeLoggingKafkaToTerraform, true)(this._loggingKafka.internalValue),
      logging_kinesis: cdktf.listMapper(serviceComputeLoggingKinesisToTerraform, true)(this._loggingKinesis.internalValue),
      logging_logentries: cdktf.listMapper(serviceComputeLoggingLogentriesToTerraform, true)(this._loggingLogentries.internalValue),
      logging_loggly: cdktf.listMapper(serviceComputeLoggingLogglyToTerraform, true)(this._loggingLoggly.internalValue),
      logging_logshuttle: cdktf.listMapper(serviceComputeLoggingLogshuttleToTerraform, true)(this._loggingLogshuttle.internalValue),
      logging_newrelic: cdktf.listMapper(serviceComputeLoggingNewrelicToTerraform, true)(this._loggingNewrelic.internalValue),
      logging_newrelicotlp: cdktf.listMapper(serviceComputeLoggingNewrelicotlpToTerraform, true)(this._loggingNewrelicotlp.internalValue),
      logging_openstack: cdktf.listMapper(serviceComputeLoggingOpenstackToTerraform, true)(this._loggingOpenstack.internalValue),
      logging_papertrail: cdktf.listMapper(serviceComputeLoggingPapertrailToTerraform, true)(this._loggingPapertrail.internalValue),
      logging_s3: cdktf.listMapper(serviceComputeLoggingS3ToTerraform, true)(this._loggingS3.internalValue),
      logging_scalyr: cdktf.listMapper(serviceComputeLoggingScalyrToTerraform, true)(this._loggingScalyr.internalValue),
      logging_sftp: cdktf.listMapper(serviceComputeLoggingSftpToTerraform, true)(this._loggingSftp.internalValue),
      logging_splunk: cdktf.listMapper(serviceComputeLoggingSplunkToTerraform, true)(this._loggingSplunk.internalValue),
      logging_sumologic: cdktf.listMapper(serviceComputeLoggingSumologicToTerraform, true)(this._loggingSumologic.internalValue),
      logging_syslog: cdktf.listMapper(serviceComputeLoggingSyslogToTerraform, true)(this._loggingSyslog.internalValue),
      package: serviceComputePackageToTerraform(this._package.internalValue),
      product_enablement: serviceComputeProductEnablementToTerraform(this._productEnablement.internalValue),
      resource_link: cdktf.listMapper(serviceComputeResourceLinkToTerraform, true)(this._resourceLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse: {
        value: cdktf.booleanToHclTerraform(this._reuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stage: {
        value: cdktf.booleanToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_comment: {
        value: cdktf.stringToHclTerraform(this._versionComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.listMapperHcl(serviceComputeBackendToHclTerraform, true)(this._backend.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeBackendList",
      },
      dictionary: {
        value: cdktf.listMapperHcl(serviceComputeDictionaryToHclTerraform, true)(this._dictionary.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeDictionaryList",
      },
      domain: {
        value: cdktf.listMapperHcl(serviceComputeDomainToHclTerraform, true)(this._domain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeDomainList",
      },
      healthcheck: {
        value: cdktf.listMapperHcl(serviceComputeHealthcheckToHclTerraform, true)(this._healthcheck.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeHealthcheckList",
      },
      image_optimizer_default_settings: {
        value: serviceComputeImageOptimizerDefaultSettingsToHclTerraform(this._imageOptimizerDefaultSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeImageOptimizerDefaultSettingsList",
      },
      logging_bigquery: {
        value: cdktf.listMapperHcl(serviceComputeLoggingBigqueryToHclTerraform, true)(this._loggingBigquery.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingBigqueryList",
      },
      logging_blobstorage: {
        value: cdktf.listMapperHcl(serviceComputeLoggingBlobstorageToHclTerraform, true)(this._loggingBlobstorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingBlobstorageList",
      },
      logging_cloudfiles: {
        value: cdktf.listMapperHcl(serviceComputeLoggingCloudfilesToHclTerraform, true)(this._loggingCloudfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingCloudfilesList",
      },
      logging_datadog: {
        value: cdktf.listMapperHcl(serviceComputeLoggingDatadogToHclTerraform, true)(this._loggingDatadog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingDatadogList",
      },
      logging_digitalocean: {
        value: cdktf.listMapperHcl(serviceComputeLoggingDigitaloceanToHclTerraform, true)(this._loggingDigitalocean.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingDigitaloceanList",
      },
      logging_elasticsearch: {
        value: cdktf.listMapperHcl(serviceComputeLoggingElasticsearchToHclTerraform, true)(this._loggingElasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingElasticsearchList",
      },
      logging_ftp: {
        value: cdktf.listMapperHcl(serviceComputeLoggingFtpToHclTerraform, true)(this._loggingFtp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingFtpList",
      },
      logging_gcs: {
        value: cdktf.listMapperHcl(serviceComputeLoggingGcsToHclTerraform, true)(this._loggingGcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingGcsList",
      },
      logging_googlepubsub: {
        value: cdktf.listMapperHcl(serviceComputeLoggingGooglepubsubToHclTerraform, true)(this._loggingGooglepubsub.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingGooglepubsubList",
      },
      logging_grafanacloudlogs: {
        value: cdktf.listMapperHcl(serviceComputeLoggingGrafanacloudlogsToHclTerraform, true)(this._loggingGrafanacloudlogs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingGrafanacloudlogsList",
      },
      logging_heroku: {
        value: cdktf.listMapperHcl(serviceComputeLoggingHerokuToHclTerraform, true)(this._loggingHeroku.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingHerokuList",
      },
      logging_honeycomb: {
        value: cdktf.listMapperHcl(serviceComputeLoggingHoneycombToHclTerraform, true)(this._loggingHoneycomb.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingHoneycombList",
      },
      logging_https: {
        value: cdktf.listMapperHcl(serviceComputeLoggingHttpsToHclTerraform, true)(this._loggingHttps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingHttpsList",
      },
      logging_kafka: {
        value: cdktf.listMapperHcl(serviceComputeLoggingKafkaToHclTerraform, true)(this._loggingKafka.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingKafkaList",
      },
      logging_kinesis: {
        value: cdktf.listMapperHcl(serviceComputeLoggingKinesisToHclTerraform, true)(this._loggingKinesis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingKinesisList",
      },
      logging_logentries: {
        value: cdktf.listMapperHcl(serviceComputeLoggingLogentriesToHclTerraform, true)(this._loggingLogentries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingLogentriesList",
      },
      logging_loggly: {
        value: cdktf.listMapperHcl(serviceComputeLoggingLogglyToHclTerraform, true)(this._loggingLoggly.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingLogglyList",
      },
      logging_logshuttle: {
        value: cdktf.listMapperHcl(serviceComputeLoggingLogshuttleToHclTerraform, true)(this._loggingLogshuttle.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingLogshuttleList",
      },
      logging_newrelic: {
        value: cdktf.listMapperHcl(serviceComputeLoggingNewrelicToHclTerraform, true)(this._loggingNewrelic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingNewrelicList",
      },
      logging_newrelicotlp: {
        value: cdktf.listMapperHcl(serviceComputeLoggingNewrelicotlpToHclTerraform, true)(this._loggingNewrelicotlp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingNewrelicotlpList",
      },
      logging_openstack: {
        value: cdktf.listMapperHcl(serviceComputeLoggingOpenstackToHclTerraform, true)(this._loggingOpenstack.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingOpenstackList",
      },
      logging_papertrail: {
        value: cdktf.listMapperHcl(serviceComputeLoggingPapertrailToHclTerraform, true)(this._loggingPapertrail.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingPapertrailList",
      },
      logging_s3: {
        value: cdktf.listMapperHcl(serviceComputeLoggingS3ToHclTerraform, true)(this._loggingS3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingS3List",
      },
      logging_scalyr: {
        value: cdktf.listMapperHcl(serviceComputeLoggingScalyrToHclTerraform, true)(this._loggingScalyr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingScalyrList",
      },
      logging_sftp: {
        value: cdktf.listMapperHcl(serviceComputeLoggingSftpToHclTerraform, true)(this._loggingSftp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingSftpList",
      },
      logging_splunk: {
        value: cdktf.listMapperHcl(serviceComputeLoggingSplunkToHclTerraform, true)(this._loggingSplunk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingSplunkList",
      },
      logging_sumologic: {
        value: cdktf.listMapperHcl(serviceComputeLoggingSumologicToHclTerraform, true)(this._loggingSumologic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingSumologicList",
      },
      logging_syslog: {
        value: cdktf.listMapperHcl(serviceComputeLoggingSyslogToHclTerraform, true)(this._loggingSyslog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeLoggingSyslogList",
      },
      package: {
        value: serviceComputePackageToHclTerraform(this._package.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceComputePackageList",
      },
      product_enablement: {
        value: serviceComputeProductEnablementToHclTerraform(this._productEnablement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeProductEnablementList",
      },
      resource_link: {
        value: cdktf.listMapperHcl(serviceComputeResourceLinkToHclTerraform, true)(this._resourceLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceComputeResourceLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
