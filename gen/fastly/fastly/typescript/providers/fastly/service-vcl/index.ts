// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceVclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Conditionally prevents new service versions from being activated. The apply step will create a new draft version but will not activate it if this is set to `false`. Default `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#activate ServiceVcl#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * Description field for the service. Default `Managed by Terraform`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#comment ServiceVcl#comment}
  */
  readonly comment?: string;
  /**
  * The default hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#default_host ServiceVcl#default_host}
  */
  readonly defaultHost?: string;
  /**
  * The default Time-to-live (TTL) for requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#default_ttl ServiceVcl#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Services that are active cannot be destroyed. In order to destroy the Service, set `force_destroy` to `true`. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#force_destroy ServiceVcl#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Enables support for the HTTP/3 (QUIC) protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#http3 ServiceVcl#http3}
  */
  readonly http3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#id ServiceVcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name for the Service to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Services that are active cannot be destroyed. If set to `true` a service Terraform intends to destroy will instead be deactivated (allowing it to be reused by importing it into another Terraform project). If `false`, attempting to destroy an active service will cause an error. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#reuse ServiceVcl#reuse}
  */
  readonly reuse?: boolean | cdktf.IResolvable;
  /**
  * Conditionally enables new service versions to be staged. If set to `true`, all changes made by an `apply` step will be staged, even if `apply` did not create a new draft version. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#stage ServiceVcl#stage}
  */
  readonly stage?: boolean | cdktf.IResolvable;
  /**
  * Enables serving a stale object if there is an error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#stale_if_error ServiceVcl#stale_if_error}
  */
  readonly staleIfError?: boolean | cdktf.IResolvable;
  /**
  * The default time-to-live (TTL) for serving the stale object for the version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#stale_if_error_ttl ServiceVcl#stale_if_error_ttl}
  */
  readonly staleIfErrorTtl?: number;
  /**
  * Description field for the version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#version_comment ServiceVcl#version_comment}
  */
  readonly versionComment?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#acl ServiceVcl#acl}
  */
  readonly acl?: ServiceVclAcl[] | cdktf.IResolvable;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#backend ServiceVcl#backend}
  */
  readonly backend?: ServiceVclBackend[] | cdktf.IResolvable;
  /**
  * cache_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#cache_setting ServiceVcl#cache_setting}
  */
  readonly cacheSetting?: ServiceVclCacheSetting[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#condition ServiceVcl#condition}
  */
  readonly condition?: ServiceVclCondition[] | cdktf.IResolvable;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#dictionary ServiceVcl#dictionary}
  */
  readonly dictionary?: ServiceVclDictionary[] | cdktf.IResolvable;
  /**
  * director block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#director ServiceVcl#director}
  */
  readonly director?: ServiceVclDirector[] | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#domain ServiceVcl#domain}
  */
  readonly domain?: ServiceVclDomain[] | cdktf.IResolvable;
  /**
  * dynamicsnippet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#dynamicsnippet ServiceVcl#dynamicsnippet}
  */
  readonly dynamicsnippet?: ServiceVclDynamicsnippet[] | cdktf.IResolvable;
  /**
  * gzip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip ServiceVcl#gzip}
  */
  readonly gzip?: ServiceVclGzip[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#header ServiceVcl#header}
  */
  readonly header?: ServiceVclHeader[] | cdktf.IResolvable;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#healthcheck ServiceVcl#healthcheck}
  */
  readonly healthcheck?: ServiceVclHealthcheck[] | cdktf.IResolvable;
  /**
  * image_optimizer_default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#image_optimizer_default_settings ServiceVcl#image_optimizer_default_settings}
  */
  readonly imageOptimizerDefaultSettings?: ServiceVclImageOptimizerDefaultSettings;
  /**
  * logging_bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_bigquery ServiceVcl#logging_bigquery}
  */
  readonly loggingBigquery?: ServiceVclLoggingBigquery[] | cdktf.IResolvable;
  /**
  * logging_blobstorage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_blobstorage ServiceVcl#logging_blobstorage}
  */
  readonly loggingBlobstorage?: ServiceVclLoggingBlobstorage[] | cdktf.IResolvable;
  /**
  * logging_cloudfiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_cloudfiles ServiceVcl#logging_cloudfiles}
  */
  readonly loggingCloudfiles?: ServiceVclLoggingCloudfiles[] | cdktf.IResolvable;
  /**
  * logging_datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_datadog ServiceVcl#logging_datadog}
  */
  readonly loggingDatadog?: ServiceVclLoggingDatadog[] | cdktf.IResolvable;
  /**
  * logging_digitalocean block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_digitalocean ServiceVcl#logging_digitalocean}
  */
  readonly loggingDigitalocean?: ServiceVclLoggingDigitalocean[] | cdktf.IResolvable;
  /**
  * logging_elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_elasticsearch ServiceVcl#logging_elasticsearch}
  */
  readonly loggingElasticsearch?: ServiceVclLoggingElasticsearch[] | cdktf.IResolvable;
  /**
  * logging_ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_ftp ServiceVcl#logging_ftp}
  */
  readonly loggingFtp?: ServiceVclLoggingFtp[] | cdktf.IResolvable;
  /**
  * logging_gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_gcs ServiceVcl#logging_gcs}
  */
  readonly loggingGcs?: ServiceVclLoggingGcs[] | cdktf.IResolvable;
  /**
  * logging_googlepubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_googlepubsub ServiceVcl#logging_googlepubsub}
  */
  readonly loggingGooglepubsub?: ServiceVclLoggingGooglepubsub[] | cdktf.IResolvable;
  /**
  * logging_grafanacloudlogs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_grafanacloudlogs ServiceVcl#logging_grafanacloudlogs}
  */
  readonly loggingGrafanacloudlogs?: ServiceVclLoggingGrafanacloudlogs[] | cdktf.IResolvable;
  /**
  * logging_heroku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_heroku ServiceVcl#logging_heroku}
  */
  readonly loggingHeroku?: ServiceVclLoggingHeroku[] | cdktf.IResolvable;
  /**
  * logging_honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_honeycomb ServiceVcl#logging_honeycomb}
  */
  readonly loggingHoneycomb?: ServiceVclLoggingHoneycomb[] | cdktf.IResolvable;
  /**
  * logging_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_https ServiceVcl#logging_https}
  */
  readonly loggingHttps?: ServiceVclLoggingHttps[] | cdktf.IResolvable;
  /**
  * logging_kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_kafka ServiceVcl#logging_kafka}
  */
  readonly loggingKafka?: ServiceVclLoggingKafka[] | cdktf.IResolvable;
  /**
  * logging_kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_kinesis ServiceVcl#logging_kinesis}
  */
  readonly loggingKinesis?: ServiceVclLoggingKinesis[] | cdktf.IResolvable;
  /**
  * logging_logentries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_logentries ServiceVcl#logging_logentries}
  */
  readonly loggingLogentries?: ServiceVclLoggingLogentries[] | cdktf.IResolvable;
  /**
  * logging_loggly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_loggly ServiceVcl#logging_loggly}
  */
  readonly loggingLoggly?: ServiceVclLoggingLoggly[] | cdktf.IResolvable;
  /**
  * logging_logshuttle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_logshuttle ServiceVcl#logging_logshuttle}
  */
  readonly loggingLogshuttle?: ServiceVclLoggingLogshuttle[] | cdktf.IResolvable;
  /**
  * logging_newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_newrelic ServiceVcl#logging_newrelic}
  */
  readonly loggingNewrelic?: ServiceVclLoggingNewrelic[] | cdktf.IResolvable;
  /**
  * logging_newrelicotlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_newrelicotlp ServiceVcl#logging_newrelicotlp}
  */
  readonly loggingNewrelicotlp?: ServiceVclLoggingNewrelicotlp[] | cdktf.IResolvable;
  /**
  * logging_openstack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_openstack ServiceVcl#logging_openstack}
  */
  readonly loggingOpenstack?: ServiceVclLoggingOpenstack[] | cdktf.IResolvable;
  /**
  * logging_papertrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_papertrail ServiceVcl#logging_papertrail}
  */
  readonly loggingPapertrail?: ServiceVclLoggingPapertrail[] | cdktf.IResolvable;
  /**
  * logging_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_s3 ServiceVcl#logging_s3}
  */
  readonly loggingS3?: ServiceVclLoggingS3[] | cdktf.IResolvable;
  /**
  * logging_scalyr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_scalyr ServiceVcl#logging_scalyr}
  */
  readonly loggingScalyr?: ServiceVclLoggingScalyr[] | cdktf.IResolvable;
  /**
  * logging_sftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_sftp ServiceVcl#logging_sftp}
  */
  readonly loggingSftp?: ServiceVclLoggingSftp[] | cdktf.IResolvable;
  /**
  * logging_splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_splunk ServiceVcl#logging_splunk}
  */
  readonly loggingSplunk?: ServiceVclLoggingSplunk[] | cdktf.IResolvable;
  /**
  * logging_sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_sumologic ServiceVcl#logging_sumologic}
  */
  readonly loggingSumologic?: ServiceVclLoggingSumologic[] | cdktf.IResolvable;
  /**
  * logging_syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logging_syslog ServiceVcl#logging_syslog}
  */
  readonly loggingSyslog?: ServiceVclLoggingSyslog[] | cdktf.IResolvable;
  /**
  * product_enablement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#product_enablement ServiceVcl#product_enablement}
  */
  readonly productEnablement?: ServiceVclProductEnablement;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#rate_limiter ServiceVcl#rate_limiter}
  */
  readonly rateLimiter?: ServiceVclRateLimiter[] | cdktf.IResolvable;
  /**
  * request_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_setting ServiceVcl#request_setting}
  */
  readonly requestSetting?: ServiceVclRequestSetting[] | cdktf.IResolvable;
  /**
  * response_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_object ServiceVcl#response_object}
  */
  readonly responseObject?: ServiceVclResponseObject[] | cdktf.IResolvable;
  /**
  * snippet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#snippet ServiceVcl#snippet}
  */
  readonly snippet?: ServiceVclSnippet[] | cdktf.IResolvable;
  /**
  * vcl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#vcl ServiceVcl#vcl}
  */
  readonly vcl?: ServiceVclVcl[] | cdktf.IResolvable;
}
export interface ServiceVclAcl {
  /**
  * Allow the ACL to be deleted, even if it contains entries. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#force_destroy ServiceVcl#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A unique name to identify this ACL. It is important to note that changing this attribute will delete and recreate the ACL, and discard the current items in the ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
}

export function serviceVclAclToTerraform(struct?: ServiceVclAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_destroy: cdktf.booleanToTerraform(struct!.forceDestroy),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceVclAclToHclTerraform(struct?: ServiceVclAcl | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclAcl | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceDestroy = undefined;
      this._name = undefined;
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
    }
  }

  // acl_id - computed: true, optional: false, required: false
  public get aclId() {
    return this.getStringAttribute('acl_id');
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
}

export class ServiceVclAclList extends cdktf.ComplexList {
  public internalValue? : ServiceVclAcl[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclAclOutputReference {
    return new ServiceVclAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclBackend {
  /**
  * An IPv4, hostname, or IPv6 address for the Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#address ServiceVcl#address}
  */
  readonly address: string;
  /**
  * Denotes if this Backend should be included in the pool of backends that requests are load balanced against. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#auto_loadbalance ServiceVcl#auto_loadbalance}
  */
  readonly autoLoadbalance?: boolean | cdktf.IResolvable;
  /**
  * How long to wait between bytes in milliseconds. Default `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#between_bytes_timeout ServiceVcl#between_bytes_timeout}
  */
  readonly betweenBytesTimeout?: number;
  /**
  * How long to wait for a timeout in milliseconds. Default `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#connect_timeout ServiceVcl#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Number of errors to allow before the Backend is marked as down. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#error_threshold ServiceVcl#error_threshold}
  */
  readonly errorThreshold?: number;
  /**
  * How long to wait for the first bytes in milliseconds. Default `15000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#first_byte_timeout ServiceVcl#first_byte_timeout}
  */
  readonly firstByteTimeout?: number;
  /**
  * Name of a defined `healthcheck` to assign to this backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#healthcheck ServiceVcl#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * How long in seconds to keep a persistent connection to the backend between requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#keepalive_time ServiceVcl#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Maximum number of connections for this Backend. Default `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#max_conn ServiceVcl#max_conn}
  */
  readonly maxConn?: number;
  /**
  * Maximum allowed TLS version on SSL connections to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#max_tls_version ServiceVcl#max_tls_version}
  */
  readonly maxTlsVersion?: string;
  /**
  * Minimum allowed TLS version on SSL connections to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#min_tls_version ServiceVcl#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Name for this Backend. Must be unique to this Service. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The hostname to override the Host header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#override_host ServiceVcl#override_host}
  */
  readonly overrideHost?: string;
  /**
  * The port number on which the Backend responds. Default `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port?: number;
  /**
  * Prefer IPv6 connections to origins for hostname backends. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#prefer_ipv6 ServiceVcl#prefer_ipv6}
  */
  readonly preferIpv6?: boolean | cdktf.IResolvable;
  /**
  * Name of a condition, which if met, will select this backend during a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_condition ServiceVcl#request_condition}
  */
  readonly requestCondition?: string;
  /**
  * Value that when shared across backends will enable those backends to share the same health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#share_key ServiceVcl#share_key}
  */
  readonly shareKey?: string;
  /**
  * The POP of the shield designated to reduce inbound load. Valid values for `shield` are included in the `GET /datacenters` API response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#shield ServiceVcl#shield}
  */
  readonly shield?: string;
  /**
  * CA certificate attached to origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_ca_cert ServiceVcl#ssl_ca_cert}
  */
  readonly sslCaCert?: string;
  /**
  * Configure certificate validation. Does not affect SNI at all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_cert_hostname ServiceVcl#ssl_cert_hostname}
  */
  readonly sslCertHostname?: string;
  /**
  * Be strict about checking SSL certs. Default `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_check_cert ServiceVcl#ssl_check_cert}
  */
  readonly sslCheckCert?: boolean | cdktf.IResolvable;
  /**
  * Cipher list consisting of one or more cipher strings separated by colons. Commas or spaces are also acceptable separators but colons are normally used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_ciphers ServiceVcl#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Client certificate attached to origin. Used when connecting to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_client_cert ServiceVcl#ssl_client_cert}
  */
  readonly sslClientCert?: string;
  /**
  * Client key attached to origin. Used when connecting to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_client_key ServiceVcl#ssl_client_key}
  */
  readonly sslClientKey?: string;
  /**
  * Configure SNI in the TLS handshake. Does not affect cert validation at all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssl_sni_hostname ServiceVcl#ssl_sni_hostname}
  */
  readonly sslSniHostname?: string;
  /**
  * Whether or not to use SSL to reach the Backend. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#use_ssl ServiceVcl#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * The [portion of traffic](https://docs.fastly.com/en/guides/load-balancing-configuration#how-weight-affects-load-balancing) to send to this Backend. Each Backend receives weight / total of the traffic. Default `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#weight ServiceVcl#weight}
  */
  readonly weight?: number;
}

export function serviceVclBackendToTerraform(struct?: ServiceVclBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    auto_loadbalance: cdktf.booleanToTerraform(struct!.autoLoadbalance),
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
    request_condition: cdktf.stringToTerraform(struct!.requestCondition),
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


export function serviceVclBackendToHclTerraform(struct?: ServiceVclBackend | cdktf.IResolvable): any {
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
    auto_loadbalance: {
      value: cdktf.booleanToHclTerraform(struct!.autoLoadbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    request_condition: {
      value: cdktf.stringToHclTerraform(struct!.requestCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceVclBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._autoLoadbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLoadbalance = this._autoLoadbalance;
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
    if (this._requestCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCondition = this._requestCondition;
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

  public set internalValue(value: ServiceVclBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._autoLoadbalance = undefined;
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
      this._requestCondition = undefined;
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
      this._autoLoadbalance = value.autoLoadbalance;
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
      this._requestCondition = value.requestCondition;
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

  // auto_loadbalance - computed: false, optional: true, required: false
  private _autoLoadbalance?: boolean | cdktf.IResolvable; 
  public get autoLoadbalance() {
    return this.getBooleanAttribute('auto_loadbalance');
  }
  public set autoLoadbalance(value: boolean | cdktf.IResolvable) {
    this._autoLoadbalance = value;
  }
  public resetAutoLoadbalance() {
    this._autoLoadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoadbalanceInput() {
    return this._autoLoadbalance;
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

  // keepalive_time - computed: false, optional: true, required: false
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

  // request_condition - computed: false, optional: true, required: false
  private _requestCondition?: string; 
  public get requestCondition() {
    return this.getStringAttribute('request_condition');
  }
  public set requestCondition(value: string) {
    this._requestCondition = value;
  }
  public resetRequestCondition() {
    this._requestCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConditionInput() {
    return this._requestCondition;
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

export class ServiceVclBackendList extends cdktf.ComplexList {
  public internalValue? : ServiceVclBackend[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclBackendOutputReference {
    return new ServiceVclBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclCacheSetting {
  /**
  * One of cache, pass, or restart, as defined on Fastly's documentation under "[Caching action descriptions](https://docs.fastly.com/en/guides/controlling-caching#caching-action-descriptions)"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#action ServiceVcl#action}
  */
  readonly action?: string;
  /**
  * Name of already defined `condition` used to test whether this settings object should be used. This `condition` must be of type `CACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#cache_condition ServiceVcl#cache_condition}
  */
  readonly cacheCondition?: string;
  /**
  * Unique name for this Cache Setting. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Max "Time To Live" for stale (unreachable) objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#stale_ttl ServiceVcl#stale_ttl}
  */
  readonly staleTtl?: number;
  /**
  * The Time-To-Live (TTL) for the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ttl ServiceVcl#ttl}
  */
  readonly ttl?: number;
}

export function serviceVclCacheSettingToTerraform(struct?: ServiceVclCacheSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cache_condition: cdktf.stringToTerraform(struct!.cacheCondition),
    name: cdktf.stringToTerraform(struct!.name),
    stale_ttl: cdktf.numberToTerraform(struct!.staleTtl),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function serviceVclCacheSettingToHclTerraform(struct?: ServiceVclCacheSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_condition: {
      value: cdktf.stringToHclTerraform(struct!.cacheCondition),
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
    stale_ttl: {
      value: cdktf.numberToHclTerraform(struct!.staleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclCacheSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclCacheSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cacheCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCondition = this._cacheCondition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._staleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleTtl = this._staleTtl;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclCacheSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cacheCondition = undefined;
      this._name = undefined;
      this._staleTtl = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cacheCondition = value.cacheCondition;
      this._name = value.name;
      this._staleTtl = value.staleTtl;
      this._ttl = value.ttl;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cache_condition - computed: false, optional: true, required: false
  private _cacheCondition?: string; 
  public get cacheCondition() {
    return this.getStringAttribute('cache_condition');
  }
  public set cacheCondition(value: string) {
    this._cacheCondition = value;
  }
  public resetCacheCondition() {
    this._cacheCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConditionInput() {
    return this._cacheCondition;
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

  // stale_ttl - computed: false, optional: true, required: false
  private _staleTtl?: number; 
  public get staleTtl() {
    return this.getNumberAttribute('stale_ttl');
  }
  public set staleTtl(value: number) {
    this._staleTtl = value;
  }
  public resetStaleTtl() {
    this._staleTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleTtlInput() {
    return this._staleTtl;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ServiceVclCacheSettingList extends cdktf.ComplexList {
  public internalValue? : ServiceVclCacheSetting[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclCacheSettingOutputReference {
    return new ServiceVclCacheSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclCondition {
  /**
  * The unique name for the condition. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * A number used to determine the order in which multiple conditions execute. Lower numbers execute first. Default `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#priority ServiceVcl#priority}
  */
  readonly priority?: number;
  /**
  * The statement used to determine if the condition is met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#statement ServiceVcl#statement}
  */
  readonly statement: string;
  /**
  * Type of condition, either `REQUEST` (req), `RESPONSE` (req, resp), or `CACHE` (req, beresp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#type ServiceVcl#type}
  */
  readonly type: string;
}

export function serviceVclConditionToTerraform(struct?: ServiceVclCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    statement: cdktf.stringToTerraform(struct!.statement),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceVclConditionToHclTerraform(struct?: ServiceVclCondition | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statement: {
      value: cdktf.stringToHclTerraform(struct!.statement),
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

export class ServiceVclConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._statement = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._statement = value.statement;
      this._type = value.type;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
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

export class ServiceVclConditionList extends cdktf.ComplexList {
  public internalValue? : ServiceVclCondition[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclConditionOutputReference {
    return new ServiceVclConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclDictionary {
  /**
  * Allow the dictionary to be deleted, even if it contains entries. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#force_destroy ServiceVcl#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A unique name to identify this dictionary. It is important to note that changing this attribute will delete and recreate the dictionary, and discard the current items in the dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * If `true`, the dictionary is a [private dictionary](https://docs.fastly.com/en/guides/private-dictionaries). Default is `false`. Please note that changing this attribute will delete and recreate the dictionary, and discard the current items in the dictionary. `fastly_service_vcl` resource will only manage the dictionary object itself, and items under private dictionaries can not be managed using [`fastly_service_dictionary_items`](https://registry.terraform.io/providers/fastly/fastly/latest/docs/resources/service_dictionary_items#limitations) resource. Therefore, using a write-only/private dictionary should only be done if the items are managed outside of Terraform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#write_only ServiceVcl#write_only}
  */
  readonly writeOnly?: boolean | cdktf.IResolvable;
}

export function serviceVclDictionaryToTerraform(struct?: ServiceVclDictionary | cdktf.IResolvable): any {
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


export function serviceVclDictionaryToHclTerraform(struct?: ServiceVclDictionary | cdktf.IResolvable): any {
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

export class ServiceVclDictionaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclDictionary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclDictionary | cdktf.IResolvable | undefined) {
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

export class ServiceVclDictionaryList extends cdktf.ComplexList {
  public internalValue? : ServiceVclDictionary[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclDictionaryOutputReference {
    return new ServiceVclDictionaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclDirector {
  /**
  * Names of defined backends to map the director to. Example: `[ "origin1", "origin2" ]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#backends ServiceVcl#backends}
  */
  readonly backends: string[];
  /**
  * An optional comment about the Director
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#comment ServiceVcl#comment}
  */
  readonly comment?: string;
  /**
  * Unique name for this Director. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Percentage of capacity that needs to be up for the director itself to be considered up. Default `75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#quorum ServiceVcl#quorum}
  */
  readonly quorum?: number;
  /**
  * How many backends to search if it fails. Default `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#retries ServiceVcl#retries}
  */
  readonly retries?: number;
  /**
  * Selected POP to serve as a "shield" for backends. Valid values for `shield` are included in the [`GET /datacenters`](https://developer.fastly.com/reference/api/utils/datacenter/) API response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#shield ServiceVcl#shield}
  */
  readonly shield?: string;
  /**
  * Type of load balance group to use. Integer, 1 to 4. Values: `1` (random), `3` (hash), `4` (client). Default `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#type ServiceVcl#type}
  */
  readonly type?: number;
}

export function serviceVclDirectorToTerraform(struct?: ServiceVclDirector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    quorum: cdktf.numberToTerraform(struct!.quorum),
    retries: cdktf.numberToTerraform(struct!.retries),
    shield: cdktf.stringToTerraform(struct!.shield),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function serviceVclDirectorToHclTerraform(struct?: ServiceVclDirector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
    quorum: {
      value: cdktf.numberToHclTerraform(struct!.quorum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shield: {
      value: cdktf.stringToHclTerraform(struct!.shield),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclDirectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclDirector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quorum !== undefined) {
      hasAnyValues = true;
      internalValueResult.quorum = this._quorum;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._shield !== undefined) {
      hasAnyValues = true;
      internalValueResult.shield = this._shield;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclDirector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backends = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._quorum = undefined;
      this._retries = undefined;
      this._shield = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backends = value.backends;
      this._comment = value.comment;
      this._name = value.name;
      this._quorum = value.quorum;
      this._retries = value.retries;
      this._shield = value.shield;
      this._type = value.type;
    }
  }

  // backends - computed: false, optional: false, required: true
  private _backends?: string[]; 
  public get backends() {
    return cdktf.Fn.tolist(this.getListAttribute('backends'));
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
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

  // quorum - computed: false, optional: true, required: false
  private _quorum?: number; 
  public get quorum() {
    return this.getNumberAttribute('quorum');
  }
  public set quorum(value: number) {
    this._quorum = value;
  }
  public resetQuorum() {
    this._quorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quorumInput() {
    return this._quorum;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServiceVclDirectorList extends cdktf.ComplexList {
  public internalValue? : ServiceVclDirector[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclDirectorOutputReference {
    return new ServiceVclDirectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclDomain {
  /**
  * An optional comment about the Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#comment ServiceVcl#comment}
  */
  readonly comment?: string;
  /**
  * The domain that this Service will respond to. It is important to note that changing this attribute will delete and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
}

export function serviceVclDomainToTerraform(struct?: ServiceVclDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceVclDomainToHclTerraform(struct?: ServiceVclDomain | cdktf.IResolvable): any {
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

export class ServiceVclDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclDomain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclDomain | cdktf.IResolvable | undefined) {
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

export class ServiceVclDomainList extends cdktf.ComplexList {
  public internalValue? : ServiceVclDomain[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclDomainOutputReference {
    return new ServiceVclDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclDynamicsnippet {
  /**
  * The VCL code that specifies exactly what the snippet does
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content ServiceVcl#content}
  */
  readonly content?: string;
  /**
  * A name that is unique across "regular" and "dynamic" VCL Snippet configuration blocks. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Priority determines the ordering for multiple snippets. Lower numbers execute first. Defaults to `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#priority ServiceVcl#priority}
  */
  readonly priority?: number;
  /**
  * The location in generated VCL where the snippet should be placed (can be one of `init`, `recv`, `hash`, `hit`, `miss`, `pass`, `fetch`, `error`, `deliver`, `log` or `none`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#type ServiceVcl#type}
  */
  readonly type: string;
}

export function serviceVclDynamicsnippetToTerraform(struct?: ServiceVclDynamicsnippet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceVclDynamicsnippetToHclTerraform(struct?: ServiceVclDynamicsnippet | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ServiceVclDynamicsnippetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclDynamicsnippet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclDynamicsnippet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
      this._priority = value.priority;
      this._type = value.type;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // snippet_id - computed: true, optional: false, required: false
  public get snippetId() {
    return this.getStringAttribute('snippet_id');
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

export class ServiceVclDynamicsnippetList extends cdktf.ComplexList {
  public internalValue? : ServiceVclDynamicsnippet[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclDynamicsnippetOutputReference {
    return new ServiceVclDynamicsnippetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclGzip {
  /**
  * Name of already defined `condition` controlling when this gzip configuration applies. This `condition` must be of type `CACHE`. For detailed information about Conditionals, see [Fastly's Documentation on Conditionals](https://docs.fastly.com/en/guides/using-conditions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#cache_condition ServiceVcl#cache_condition}
  */
  readonly cacheCondition?: string;
  /**
  * The content-type for each type of content you wish to have dynamically gzip'ed. Example: `["text/html", "text/css"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content_types ServiceVcl#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * File extensions for each file type to dynamically gzip. Example: `["css", "js"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#extensions ServiceVcl#extensions}
  */
  readonly extensions?: string[];
  /**
  * A name to refer to this gzip condition. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
}

export function serviceVclGzipToTerraform(struct?: ServiceVclGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_condition: cdktf.stringToTerraform(struct!.cacheCondition),
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
    extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceVclGzipToHclTerraform(struct?: ServiceVclGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_condition: {
      value: cdktf.stringToHclTerraform(struct!.cacheCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ServiceVclGzipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclGzip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCondition = this._cacheCondition;
    }
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclGzip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheCondition = undefined;
      this._contentTypes = undefined;
      this._extensions = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheCondition = value.cacheCondition;
      this._contentTypes = value.contentTypes;
      this._extensions = value.extensions;
      this._name = value.name;
    }
  }

  // cache_condition - computed: false, optional: true, required: false
  private _cacheCondition?: string; 
  public get cacheCondition() {
    return this.getStringAttribute('cache_condition');
  }
  public set cacheCondition(value: string) {
    this._cacheCondition = value;
  }
  public resetCacheCondition() {
    this._cacheCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConditionInput() {
    return this._cacheCondition;
  }

  // content_types - computed: false, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return this.getListAttribute('extensions');
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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

export class ServiceVclGzipList extends cdktf.ComplexList {
  public internalValue? : ServiceVclGzip[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclGzipOutputReference {
    return new ServiceVclGzipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclHeader {
  /**
  * The Header manipulation action to take; must be one of `set`, `append`, `delete`, `regex`, or `regex_repeat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#action ServiceVcl#action}
  */
  readonly action: string;
  /**
  * Name of already defined `condition` to apply. This `condition` must be of type `CACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#cache_condition ServiceVcl#cache_condition}
  */
  readonly cacheCondition?: string;
  /**
  * The name of the header that is going to be affected by the Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#destination ServiceVcl#destination}
  */
  readonly destination: string;
  /**
  * Don't add the header if it is already. (Only applies to `set` action.). Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ignore_if_set ServiceVcl#ignore_if_set}
  */
  readonly ignoreIfSet?: boolean | cdktf.IResolvable;
  /**
  * Unique name for this header attribute. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Lower priorities execute first. Default: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#priority ServiceVcl#priority}
  */
  readonly priority?: number;
  /**
  * Regular expression to use (Only applies to `regex` and `regex_repeat` actions.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#regex ServiceVcl#regex}
  */
  readonly regex?: string;
  /**
  * Name of already defined `condition` to apply. This `condition` must be of type `REQUEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_condition ServiceVcl#request_condition}
  */
  readonly requestCondition?: string;
  /**
  * Name of already defined `condition` to apply. This `condition` must be of type `RESPONSE`. For detailed information about Conditionals, see [Fastly's Documentation on Conditionals](https://docs.fastly.com/en/guides/using-conditions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * Variable to be used as a source for the header content (Does not apply to `delete` action.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#source ServiceVcl#source}
  */
  readonly source?: string;
  /**
  * Value to substitute in place of regular expression. (Only applies to `regex` and `regex_repeat`.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#substitution ServiceVcl#substitution}
  */
  readonly substitution?: string;
  /**
  * The Request type on which to apply the selected Action; must be one of `request`, `fetch`, `cache` or `response`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#type ServiceVcl#type}
  */
  readonly type: string;
}

export function serviceVclHeaderToTerraform(struct?: ServiceVclHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cache_condition: cdktf.stringToTerraform(struct!.cacheCondition),
    destination: cdktf.stringToTerraform(struct!.destination),
    ignore_if_set: cdktf.booleanToTerraform(struct!.ignoreIfSet),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    regex: cdktf.stringToTerraform(struct!.regex),
    request_condition: cdktf.stringToTerraform(struct!.requestCondition),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    source: cdktf.stringToTerraform(struct!.source),
    substitution: cdktf.stringToTerraform(struct!.substitution),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceVclHeaderToHclTerraform(struct?: ServiceVclHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_condition: {
      value: cdktf.stringToHclTerraform(struct!.cacheCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_if_set: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreIfSet),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_condition: {
      value: cdktf.stringToHclTerraform(struct!.requestCondition),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
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

export class ServiceVclHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cacheCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCondition = this._cacheCondition;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._ignoreIfSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIfSet = this._ignoreIfSet;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._requestCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCondition = this._requestCondition;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cacheCondition = undefined;
      this._destination = undefined;
      this._ignoreIfSet = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._regex = undefined;
      this._requestCondition = undefined;
      this._responseCondition = undefined;
      this._source = undefined;
      this._substitution = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cacheCondition = value.cacheCondition;
      this._destination = value.destination;
      this._ignoreIfSet = value.ignoreIfSet;
      this._name = value.name;
      this._priority = value.priority;
      this._regex = value.regex;
      this._requestCondition = value.requestCondition;
      this._responseCondition = value.responseCondition;
      this._source = value.source;
      this._substitution = value.substitution;
      this._type = value.type;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cache_condition - computed: false, optional: true, required: false
  private _cacheCondition?: string; 
  public get cacheCondition() {
    return this.getStringAttribute('cache_condition');
  }
  public set cacheCondition(value: string) {
    this._cacheCondition = value;
  }
  public resetCacheCondition() {
    this._cacheCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConditionInput() {
    return this._cacheCondition;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // ignore_if_set - computed: false, optional: true, required: false
  private _ignoreIfSet?: boolean | cdktf.IResolvable; 
  public get ignoreIfSet() {
    return this.getBooleanAttribute('ignore_if_set');
  }
  public set ignoreIfSet(value: boolean | cdktf.IResolvable) {
    this._ignoreIfSet = value;
  }
  public resetIgnoreIfSet() {
    this._ignoreIfSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIfSetInput() {
    return this._ignoreIfSet;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // request_condition - computed: false, optional: true, required: false
  private _requestCondition?: string; 
  public get requestCondition() {
    return this.getStringAttribute('request_condition');
  }
  public set requestCondition(value: string) {
    this._requestCondition = value;
  }
  public resetRequestCondition() {
    this._requestCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConditionInput() {
    return this._requestCondition;
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // substitution - computed: true, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
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

export class ServiceVclHeaderList extends cdktf.ComplexList {
  public internalValue? : ServiceVclHeader[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclHeaderOutputReference {
    return new ServiceVclHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclHealthcheck {
  /**
  * How often to run the Healthcheck in milliseconds. Default `5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#check_interval ServiceVcl#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * The status code expected from the host. Default `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#expected_response ServiceVcl#expected_response}
  */
  readonly expectedResponse?: number;
  /**
  * Custom health check HTTP headers (e.g. if your health check requires an API key to be provided).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#headers ServiceVcl#headers}
  */
  readonly headers?: string[];
  /**
  * The Host header to send for this Healthcheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#host ServiceVcl#host}
  */
  readonly host: string;
  /**
  * Whether to use version 1.0 or 1.1 HTTP. Default `1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#http_version ServiceVcl#http_version}
  */
  readonly httpVersion?: string;
  /**
  * When loading a config, the initial number of probes to be seen as OK. Default `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#initial ServiceVcl#initial}
  */
  readonly initial?: number;
  /**
  * Which HTTP method to use. Default `HEAD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#method ServiceVcl#method}
  */
  readonly method?: string;
  /**
  * A unique name to identify this Healthcheck. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The path to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path: string;
  /**
  * How many Healthchecks must succeed to be considered healthy. Default `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#threshold ServiceVcl#threshold}
  */
  readonly threshold?: number;
  /**
  * Timeout in milliseconds. Default `5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timeout ServiceVcl#timeout}
  */
  readonly timeout?: number;
  /**
  * The number of most recent Healthcheck queries to keep for this Healthcheck. Default `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#window ServiceVcl#window}
  */
  readonly window?: number;
}

export function serviceVclHealthcheckToTerraform(struct?: ServiceVclHealthcheck | cdktf.IResolvable): any {
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


export function serviceVclHealthcheckToHclTerraform(struct?: ServiceVclHealthcheck | cdktf.IResolvable): any {
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

export class ServiceVclHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclHealthcheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclHealthcheck | cdktf.IResolvable | undefined) {
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

export class ServiceVclHealthcheckList extends cdktf.ComplexList {
  public internalValue? : ServiceVclHealthcheck[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclHealthcheckOutputReference {
    return new ServiceVclHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclImageOptimizerDefaultSettings {
  /**
  * Enables GIF to MP4 transformations on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#allow_video ServiceVcl#allow_video}
  */
  readonly allowVideo?: boolean | cdktf.IResolvable;
  /**
  * The default quality to use with JPEG output. This can be overridden with the "quality" parameter on specific image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#jpeg_quality ServiceVcl#jpeg_quality}
  */
  readonly jpegQuality?: number;
  /**
  * The default type of JPEG output to use. This can be overridden with "format=bjpeg" and "format=pjpeg" on specific image optimizer requests. Valid values are `auto`, `baseline` and `progressive`.
  * 	- auto: Match the input JPEG type, or baseline if transforming from a non-JPEG input.
  * 	- baseline: Output baseline JPEG images
  * 	- progressive: Output progressive JPEG images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#jpeg_type ServiceVcl#jpeg_type}
  */
  readonly jpegType?: string;
  /**
  * Used by the provider to identify modified settings. Changing this value will force the entire block to be deleted, then recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#resize_filter ServiceVcl#resize_filter}
  */
  readonly resizeFilter?: string;
  /**
  * Whether or not we should allow output images to render at sizes larger than input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#upscale ServiceVcl#upscale}
  */
  readonly upscale?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not to default to WebP output when the client supports it. This is equivalent to adding "auto=webp" to all image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#webp ServiceVcl#webp}
  */
  readonly webp?: boolean | cdktf.IResolvable;
  /**
  * The default quality to use with WebP output. This can be overridden with the second option in the "quality" URL parameter on specific image optimizer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#webp_quality ServiceVcl#webp_quality}
  */
  readonly webpQuality?: number;
}

export function serviceVclImageOptimizerDefaultSettingsToTerraform(struct?: ServiceVclImageOptimizerDefaultSettingsOutputReference | ServiceVclImageOptimizerDefaultSettings): any {
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


export function serviceVclImageOptimizerDefaultSettingsToHclTerraform(struct?: ServiceVclImageOptimizerDefaultSettingsOutputReference | ServiceVclImageOptimizerDefaultSettings): any {
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

export class ServiceVclImageOptimizerDefaultSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceVclImageOptimizerDefaultSettings | undefined {
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

  public set internalValue(value: ServiceVclImageOptimizerDefaultSettings | undefined) {
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
export interface ServiceVclLoggingBigquery {
  /**
  * The google account name used to obtain temporary credentials (default none). You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#account_name ServiceVcl#account_name}
  */
  readonly accountName?: string;
  /**
  * The ID of your BigQuery dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#dataset ServiceVcl#dataset}
  */
  readonly dataset: string;
  /**
  * The email for the service account with write access to your BigQuery dataset. If not provided, this will be pulled from a `FASTLY_BQ_EMAIL` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#email ServiceVcl#email}
  */
  readonly email?: string;
  /**
  * The logging format desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * A unique name to identify this BigQuery logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your GCP project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#project_id ServiceVcl#project_id}
  */
  readonly projectId: string;
  /**
  * Name of a condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The secret key associated with the service account that has write access to your BigQuery table. If not provided, this will be pulled from the `FASTLY_BQ_SECRET_KEY` environment variable. Typical format for this is a private key in a string with newlines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The ID of your BigQuery table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#table ServiceVcl#table}
  */
  readonly table: string;
  /**
  * BigQuery table name suffix template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#template ServiceVcl#template}
  */
  readonly template?: string;
}

export function serviceVclLoggingBigqueryToTerraform(struct?: ServiceVclLoggingBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    email: cdktf.stringToTerraform(struct!.email),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    table: cdktf.stringToTerraform(struct!.table),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function serviceVclLoggingBigqueryToHclTerraform(struct?: ServiceVclLoggingBigquery | cdktf.IResolvable): any {
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
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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

export class ServiceVclLoggingBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingBigquery | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
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
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._dataset = undefined;
      this._email = undefined;
      this._format = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingBigqueryList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingBigquery[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingBigqueryOutputReference {
    return new ServiceVclLoggingBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingBlobstorage {
  /**
  * The unique Azure Blob Storage namespace in which your data objects are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#account_name ServiceVcl#account_name}
  */
  readonly accountName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The name of the Azure Blob Storage container in which to store logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#container ServiceVcl#container}
  */
  readonly container: string;
  /**
  * Maximum size of an uploaded log file, if non-zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#file_max_bytes ServiceVcl#file_max_bytes}
  */
  readonly fileMaxBytes?: number;
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify the Azure Blob Storage endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to. Must end with a trailing slash. If this field is left empty, the files will be saved in the container's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The name of the condition to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#sas_token ServiceVcl#sas_token}
  */
  readonly sasToken?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceVclLoggingBlobstorageToTerraform(struct?: ServiceVclLoggingBlobstorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    container: cdktf.stringToTerraform(struct!.container),
    file_max_bytes: cdktf.numberToTerraform(struct!.fileMaxBytes),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceVclLoggingBlobstorageToHclTerraform(struct?: ServiceVclLoggingBlobstorage | cdktf.IResolvable): any {
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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

export class ServiceVclLoggingBlobstorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingBlobstorage | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingBlobstorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._compressionCodec = undefined;
      this._container = undefined;
      this._fileMaxBytes = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingBlobstorageList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingBlobstorage[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingBlobstorageOutputReference {
    return new ServiceVclLoggingBlobstorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingCloudfiles {
  /**
  * Your Cloud File account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#access_key ServiceVcl#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of your Cloud Files container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bucket_name ServiceVcl#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the Rackspace Cloud Files logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The region to stream logs to. One of: DFW (Dallas), ORD (Chicago), IAD (Northern Virginia), LON (London), SYD (Sydney), HKG (Hong Kong)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for your Cloud Files account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user: string;
}

export function serviceVclLoggingCloudfilesToTerraform(struct?: ServiceVclLoggingCloudfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    region: cdktf.stringToTerraform(struct!.region),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingCloudfilesToHclTerraform(struct?: ServiceVclLoggingCloudfiles | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingCloudfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingCloudfiles | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingCloudfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._region = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._region = value.region;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingCloudfilesList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingCloudfiles[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingCloudfilesOutputReference {
    return new ServiceVclLoggingCloudfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingDatadog {
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Datadog logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Defaults to `US` if undefined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The API key from your Datadog account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
}

export function serviceVclLoggingDatadogToTerraform(struct?: ServiceVclLoggingDatadog | cdktf.IResolvable): any {
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
  }
}


export function serviceVclLoggingDatadogToHclTerraform(struct?: ServiceVclLoggingDatadog | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingDatadog | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingDatadog | cdktf.IResolvable | undefined) {
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
}

export class ServiceVclLoggingDatadogList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingDatadog[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingDatadogOutputReference {
    return new ServiceVclLoggingDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingDigitalocean {
  /**
  * Your DigitalOcean Spaces account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#access_key ServiceVcl#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of the DigitalOcean Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bucket_name ServiceVcl#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The domain of the DigitalOcean Spaces endpoint (default `nyc3.digitaloceanspaces.com`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#domain ServiceVcl#domain}
  */
  readonly domain?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the DigitalOcean Spaces logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The path to upload logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * Your DigitalOcean Spaces account secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceVclLoggingDigitaloceanToTerraform(struct?: ServiceVclLoggingDigitalocean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    domain: cdktf.stringToTerraform(struct!.domain),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceVclLoggingDigitaloceanToHclTerraform(struct?: ServiceVclLoggingDigitalocean | cdktf.IResolvable): any {
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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

export class ServiceVclLoggingDigitaloceanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingDigitalocean | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingDigitalocean | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._domain = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingDigitaloceanList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingDigitalocean[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingDigitaloceanOutputReference {
    return new ServiceVclLoggingDigitaloceanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingElasticsearch {
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The name of the Elasticsearch index to send documents (logs) to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#index ServiceVcl#index}
  */
  readonly index: string;
  /**
  * The unique name of the Elasticsearch logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * BasicAuth password for Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#password ServiceVcl#password}
  */
  readonly password?: string;
  /**
  * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#pipeline ServiceVcl#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The maximum number of logs sent in one request. Defaults to `0` for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_max_bytes ServiceVcl#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The maximum number of bytes sent in one request. Defaults to `0` for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_max_entries ServiceVcl#request_max_entries}
  */
  readonly requestMaxEntries?: number;
  /**
  * The name of the condition to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_ca_cert ServiceVcl#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_cert ServiceVcl#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_key ServiceVcl#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_hostname ServiceVcl#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Elasticsearch URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
  /**
  * BasicAuth username for Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user?: string;
}

export function serviceVclLoggingElasticsearchToTerraform(struct?: ServiceVclLoggingElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    request_max_entries: cdktf.numberToTerraform(struct!.requestMaxEntries),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingElasticsearchToHclTerraform(struct?: ServiceVclLoggingElasticsearch | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingElasticsearch | cdktf.IResolvable | undefined {
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._index = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pipeline = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requestMaxEntries = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._index = value.index;
      this._name = value.name;
      this._password = value.password;
      this._pipeline = value.pipeline;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requestMaxEntries = value.requestMaxEntries;
      this._responseCondition = value.responseCondition;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._url = value.url;
      this._user = value.user;
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

export class ServiceVclLoggingElasticsearchList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingElasticsearchOutputReference {
    return new ServiceVclLoggingElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingFtp {
  /**
  * The FTP address to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#address ServiceVcl#address}
  */
  readonly address: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the FTP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The password for the server (for anonymous use an email address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#password ServiceVcl#password}
  */
  readonly password: string;
  /**
  * The path to upload log files to. If the path ends in `/` then it is treated as a directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path: string;
  /**
  * How frequently the logs should be transferred, in seconds (Default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * The port number. Default: `21`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for the server (can be `anonymous`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user: string;
}

export function serviceVclLoggingFtpToTerraform(struct?: ServiceVclLoggingFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingFtpToHclTerraform(struct?: ServiceVclLoggingFtp | cdktf.IResolvable): any {
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
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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

export class ServiceVclLoggingFtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingFtp | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingFtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._password = value.password;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingFtpList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingFtp[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingFtpOutputReference {
    return new ServiceVclLoggingFtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingGcs {
  /**
  * The google account name used to obtain temporary credentials (default none). You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#account_name ServiceVcl#account_name}
  */
  readonly accountName?: string;
  /**
  * The name of the bucket in which to store the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bucket_name ServiceVcl#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache-style string or VCL variables to use for log formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (Default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this GCS endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds (Default 3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your Google Cloud Platform project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#project_id ServiceVcl#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of a condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The secret key associated with the target gcs bucket on your account. You may optionally provide this secret via an environment variable, `FASTLY_GCS_SECRET_KEY`. A typical format for the key is PEM format, containing actual newline characters where required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. You may optionally provide this via an environment variable, `FASTLY_GCS_EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user?: string;
}

export function serviceVclLoggingGcsToTerraform(struct?: ServiceVclLoggingGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingGcsToHclTerraform(struct?: ServiceVclLoggingGcs | cdktf.IResolvable): any {
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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

export class ServiceVclLoggingGcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingGcs | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingGcsList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingGcs[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingGcsOutputReference {
    return new ServiceVclLoggingGcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingGooglepubsub {
  /**
  * The google account name used to obtain temporary credentials (default none). You may optionally provide this via an environment variable, `FASTLY_GCS_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#account_name ServiceVcl#account_name}
  */
  readonly accountName?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Google Cloud Pub/Sub logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The ID of your Google Cloud Platform project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#project_id ServiceVcl#project_id}
  */
  readonly projectId: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. You may optionally provide this secret via an environment variable, `FASTLY_GOOGLE_PUBSUB_SECRET_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The Google Cloud Pub/Sub topic to which logs will be published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#topic ServiceVcl#topic}
  */
  readonly topic: string;
  /**
  * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. You may optionally provide this via an environment variable, `FASTLY_GOOGLE_PUBSUB_EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user?: string;
}

export function serviceVclLoggingGooglepubsubToTerraform(struct?: ServiceVclLoggingGooglepubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    topic: cdktf.stringToTerraform(struct!.topic),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingGooglepubsubToHclTerraform(struct?: ServiceVclLoggingGooglepubsub | cdktf.IResolvable): any {
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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

export class ServiceVclLoggingGooglepubsubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingGooglepubsub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
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
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingGooglepubsub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._projectId = value.projectId;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingGooglepubsubList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingGooglepubsub[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingGooglepubsubOutputReference {
    return new ServiceVclLoggingGooglepubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingGrafanacloudlogs {
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The stream identifier as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#index ServiceVcl#index}
  */
  readonly index: string;
  /**
  * The unique name of the GrafanaCloudLogs logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Access Policy Token key for your GrafanaCloudLogs account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * The URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
  /**
  * The Grafana User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user: string;
}

export function serviceVclLoggingGrafanacloudlogsToTerraform(struct?: ServiceVclLoggingGrafanacloudlogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingGrafanacloudlogsToHclTerraform(struct?: ServiceVclLoggingGrafanacloudlogs | cdktf.IResolvable): any {
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

export class ServiceVclLoggingGrafanacloudlogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingGrafanacloudlogs | cdktf.IResolvable | undefined {
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
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
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
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingGrafanacloudlogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._index = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._index = value.index;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
      this._token = value.token;
      this._url = value.url;
      this._user = value.user;
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

export class ServiceVclLoggingGrafanacloudlogsList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingGrafanacloudlogs[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingGrafanacloudlogsOutputReference {
    return new ServiceVclLoggingGrafanacloudlogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingHeroku {
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Heroku logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The token to use for authentication (https://www.heroku.com/docs/customer-token-authentication-token/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * The URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
}

export function serviceVclLoggingHerokuToTerraform(struct?: ServiceVclLoggingHeroku | cdktf.IResolvable): any {
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
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceVclLoggingHerokuToHclTerraform(struct?: ServiceVclLoggingHeroku | cdktf.IResolvable): any {
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

export class ServiceVclLoggingHerokuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingHeroku | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclLoggingHeroku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
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

export class ServiceVclLoggingHerokuList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingHeroku[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingHerokuOutputReference {
    return new ServiceVclLoggingHerokuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingHoneycomb {
  /**
  * The Honeycomb Dataset you want to log to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#dataset ServiceVcl#dataset}
  */
  readonly dataset: string;
  /**
  * Apache style log formatting. Your log must produce valid JSON that Honeycomb can ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Honeycomb logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Write Key from the Account page of your Honeycomb account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
}

export function serviceVclLoggingHoneycombToTerraform(struct?: ServiceVclLoggingHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceVclLoggingHoneycombToHclTerraform(struct?: ServiceVclLoggingHoneycomb | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
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
}

export class ServiceVclLoggingHoneycombList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingHoneycombOutputReference {
    return new ServiceVclLoggingHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingHttps {
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Value of the `Content-Type` header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content_type ServiceVcl#content_type}
  */
  readonly contentType?: string;
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * Custom header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#header_name ServiceVcl#header_name}
  */
  readonly headerName?: string;
  /**
  * Value of the custom header sent with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#header_value ServiceVcl#header_value}
  */
  readonly headerValue?: string;
  /**
  * Formats log entries as JSON. Can be either disabled (`0`), array of json (`1`), or newline delimited json (`2`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#json_format ServiceVcl#json_format}
  */
  readonly jsonFormat?: string;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * HTTP method used for request. Can be either `POST` or `PUT`. Default `POST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#method ServiceVcl#method}
  */
  readonly method?: string;
  /**
  * The unique name of the HTTPS logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * How frequently, in seconds, batches of log data are sent to the HTTPS endpoint. A value of 0 sends logs at the same interval as the default, which is 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The maximum number of bytes sent in one request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_max_bytes ServiceVcl#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The maximum number of logs sent in one request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_max_entries ServiceVcl#request_max_entries}
  */
  readonly requestMaxEntries?: number;
  /**
  * The name of the condition to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_ca_cert ServiceVcl#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_cert ServiceVcl#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_key ServiceVcl#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * Used during the TLS handshake to validate the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_hostname ServiceVcl#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * URL that log data will be sent to. Must use the https protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
}

export function serviceVclLoggingHttpsToTerraform(struct?: ServiceVclLoggingHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    json_format: cdktf.stringToTerraform(struct!.jsonFormat),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    request_max_entries: cdktf.numberToTerraform(struct!.requestMaxEntries),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceVclLoggingHttpsToHclTerraform(struct?: ServiceVclLoggingHttps | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingHttpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingHttps | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionCodec = undefined;
      this._contentType = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._jsonFormat = undefined;
      this._messageType = undefined;
      this._method = undefined;
      this._name = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requestMaxEntries = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._jsonFormat = value.jsonFormat;
      this._messageType = value.messageType;
      this._method = value.method;
      this._name = value.name;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requestMaxEntries = value.requestMaxEntries;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingHttpsList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingHttps[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingHttpsOutputReference {
    return new ServiceVclLoggingHttpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingKafka {
  /**
  * SASL authentication method. One of: plain, scram-sha-256, scram-sha-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#auth_method ServiceVcl#auth_method}
  */
  readonly authMethod?: string;
  /**
  * A comma-separated list of IP addresses or hostnames of Kafka brokers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#brokers ServiceVcl#brokers}
  */
  readonly brokers: string;
  /**
  * The codec used for compression of your logs. One of: `gzip`, `snappy`, `lz4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Kafka logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Enables parsing of key=value tuples from the beginning of a logline, turning them into record headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#parse_log_keyvals ServiceVcl#parse_log_keyvals}
  */
  readonly parseLogKeyvals?: boolean | cdktf.IResolvable;
  /**
  * SASL Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#password ServiceVcl#password}
  */
  readonly password?: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Maximum size of log batch, if non-zero. Defaults to 0 for unbounded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_max_bytes ServiceVcl#request_max_bytes}
  */
  readonly requestMaxBytes?: number;
  /**
  * The Number of acknowledgements a leader must receive before a write is considered successful. One of: `1` (default) One server needs to respond. `0` No servers need to respond. `-1` Wait for all in-sync replicas to respond
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#required_acks ServiceVcl#required_acks}
  */
  readonly requiredAcks?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_ca_cert ServiceVcl#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_cert ServiceVcl#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_key ServiceVcl#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_hostname ServiceVcl#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Kafka topic to send logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#topic ServiceVcl#topic}
  */
  readonly topic: string;
  /**
  * Whether to use TLS for secure logging. Can be either `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#use_tls ServiceVcl#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
  /**
  * SASL User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user?: string;
}

export function serviceVclLoggingKafkaToTerraform(struct?: ServiceVclLoggingKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    brokers: cdktf.stringToTerraform(struct!.brokers),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    parse_log_keyvals: cdktf.booleanToTerraform(struct!.parseLogKeyvals),
    password: cdktf.stringToTerraform(struct!.password),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    request_max_bytes: cdktf.numberToTerraform(struct!.requestMaxBytes),
    required_acks: cdktf.stringToTerraform(struct!.requiredAcks),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    topic: cdktf.stringToTerraform(struct!.topic),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingKafkaToHclTerraform(struct?: ServiceVclLoggingKafka | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingKafka | cdktf.IResolvable | undefined {
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
    if (this._parseLogKeyvals !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseLogKeyvals = this._parseLogKeyvals;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._brokers = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._parseLogKeyvals = undefined;
      this._password = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._requestMaxBytes = undefined;
      this._requiredAcks = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._parseLogKeyvals = value.parseLogKeyvals;
      this._password = value.password;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._requestMaxBytes = value.requestMaxBytes;
      this._requiredAcks = value.requiredAcks;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingKafkaList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingKafka[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingKafkaOutputReference {
    return new ServiceVclLoggingKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingKinesis {
  /**
  * The AWS access key to be used to write to the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#access_key ServiceVcl#access_key}
  */
  readonly accessKey?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The Amazon Resource Name (ARN) for the IAM role granting Fastly access to Kinesis. Not required if `access_key` and `secret_key` are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#iam_role ServiceVcl#iam_role}
  */
  readonly iamRole?: string;
  /**
  * The unique name of the Kinesis logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The AWS region the stream resides in. (Default: `us-east-1`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The AWS secret access key to authenticate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The Kinesis stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#topic ServiceVcl#topic}
  */
  readonly topic: string;
}

export function serviceVclLoggingKinesisToTerraform(struct?: ServiceVclLoggingKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    region: cdktf.stringToTerraform(struct!.region),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function serviceVclLoggingKinesisToHclTerraform(struct?: ServiceVclLoggingKinesis | cdktf.IResolvable): any {
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

export class ServiceVclLoggingKinesisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingKinesis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
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

  public set internalValue(value: ServiceVclLoggingKinesis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._iamRole = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._region = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._iamRole = value.iamRole;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._region = value.region;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingKinesisList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingKinesis[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingKinesisOutputReference {
    return new ServiceVclLoggingKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingLogentries {
  /**
  * Apache-style string or VCL variables to use for log formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (Default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Logentries logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * The port number configured in Logentries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Name of blockAttributes condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * Use token based authentication (https://logentries.com/doc/input-token/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * Whether to use TLS for secure logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#use_tls ServiceVcl#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceVclLoggingLogentriesToTerraform(struct?: ServiceVclLoggingLogentries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceVclLoggingLogentriesToHclTerraform(struct?: ServiceVclLoggingLogentries | cdktf.IResolvable): any {
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

export class ServiceVclLoggingLogentriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingLogentries | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingLogentries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
      this._token = value.token;
      this._useTls = value.useTls;
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

export class ServiceVclLoggingLogentriesList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingLogentries[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingLogentriesOutputReference {
    return new ServiceVclLoggingLogentriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingLoggly {
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Loggly logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
}

export function serviceVclLoggingLogglyToTerraform(struct?: ServiceVclLoggingLoggly | cdktf.IResolvable): any {
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
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceVclLoggingLogglyToHclTerraform(struct?: ServiceVclLoggingLoggly | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingLogglyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingLoggly | cdktf.IResolvable | undefined {
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingLoggly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
      this._token = undefined;
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
      this._responseCondition = value.responseCondition;
      this._token = value.token;
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
}

export class ServiceVclLoggingLogglyList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingLoggly[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingLogglyOutputReference {
    return new ServiceVclLoggingLogglyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingLogshuttle {
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Log Shuttle logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The data authentication token associated with this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * Your Log Shuttle endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
}

export function serviceVclLoggingLogshuttleToTerraform(struct?: ServiceVclLoggingLogshuttle | cdktf.IResolvable): any {
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
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceVclLoggingLogshuttleToHclTerraform(struct?: ServiceVclLoggingLogshuttle | cdktf.IResolvable): any {
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

export class ServiceVclLoggingLogshuttleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingLogshuttle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclLoggingLogshuttle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
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

export class ServiceVclLoggingLogshuttleList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingLogshuttle[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingLogshuttleOutputReference {
    return new ServiceVclLoggingLogshuttleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingNewrelic {
  /**
  * Apache style log formatting. Your log must produce valid JSON that New Relic Logs can ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the New Relic logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Default: `US`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Insert API key from the Account page of your New Relic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
}

export function serviceVclLoggingNewrelicToTerraform(struct?: ServiceVclLoggingNewrelic | cdktf.IResolvable): any {
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
  }
}


export function serviceVclLoggingNewrelicToHclTerraform(struct?: ServiceVclLoggingNewrelic | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingNewrelic | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingNewrelic | cdktf.IResolvable | undefined) {
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
}

export class ServiceVclLoggingNewrelicList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingNewrelic[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingNewrelicOutputReference {
    return new ServiceVclLoggingNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingNewrelicotlp {
  /**
  * Apache style log formatting. Your log must produce valid JSON that New Relic OTLP can ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the New Relic OTLP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The region that log data will be sent to. Default: `US`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The Insert API key from the Account page of your New Relic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * The optional New Relic Trace Observer URL to stream logs to for Infinite Tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url?: string;
}

export function serviceVclLoggingNewrelicotlpToTerraform(struct?: ServiceVclLoggingNewrelicotlp | cdktf.IResolvable): any {
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


export function serviceVclLoggingNewrelicotlpToHclTerraform(struct?: ServiceVclLoggingNewrelicotlp | cdktf.IResolvable): any {
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

export class ServiceVclLoggingNewrelicotlpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingNewrelicotlp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceVclLoggingNewrelicotlp | cdktf.IResolvable | undefined) {
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

export class ServiceVclLoggingNewrelicotlpList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingNewrelicotlp[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingNewrelicotlpOutputReference {
    return new ServiceVclLoggingNewrelicotlpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingOpenstack {
  /**
  * Your OpenStack account access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#access_key ServiceVcl#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of your OpenStack container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bucket_name ServiceVcl#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either `1` or `2`. (default: `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the OpenStack logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed. Can be `none` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Your OpenStack auth url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
  /**
  * The username for your OpenStack account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user: string;
}

export function serviceVclLoggingOpenstackToTerraform(struct?: ServiceVclLoggingOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingOpenstackToHclTerraform(struct?: ServiceVclLoggingOpenstack | cdktf.IResolvable): any {
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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

export class ServiceVclLoggingOpenstackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingOpenstack | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingOpenstack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingOpenstackList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingOpenstack[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingOpenstackOutputReference {
    return new ServiceVclLoggingOpenstackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingPapertrail {
  /**
  * The address of the Papertrail endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#address ServiceVcl#address}
  */
  readonly address: string;
  /**
  * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * A unique name to identify this Papertrail endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * The port associated with the address where the Papertrail endpoint can be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
}

export function serviceVclLoggingPapertrailToTerraform(struct?: ServiceVclLoggingPapertrail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
  }
}


export function serviceVclLoggingPapertrailToHclTerraform(struct?: ServiceVclLoggingPapertrail | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingPapertrailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingPapertrail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingPapertrail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
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
}

export class ServiceVclLoggingPapertrailList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingPapertrail[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingPapertrailOutputReference {
    return new ServiceVclLoggingPapertrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingS3 {
  /**
  * The AWS [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) to use for objects uploaded to the S3 bucket. Options are: `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#acl ServiceVcl#acl}
  */
  readonly acl?: string;
  /**
  * The name of the bucket in which to store the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bucket_name ServiceVcl#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * If you created the S3 bucket outside of `us-east-1`, then specify the corresponding bucket endpoint. Example: `s3-us-west-2.amazonaws.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#domain ServiceVcl#domain}
  */
  readonly domain?: string;
  /**
  * Maximum size of an uploaded log file, if non-zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#file_max_bytes ServiceVcl#file_max_bytes}
  */
  readonly fileMaxBytes?: number;
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (Default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the S3 logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Path to store the files. Must end with a trailing slash. If this field is left empty, the files will be saved in the bucket's root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path?: string;
  /**
  * How frequently the logs should be transferred, in seconds. Default `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The S3 storage class (redundancy level). Should be one of: `standard`, `intelligent_tiering`, `standard_ia`, `onezone_ia`, `glacier`, `glacier_ir`, `deep_archive`, or `reduced_redundancy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#redundancy ServiceVcl#redundancy}
  */
  readonly redundancy?: string;
  /**
  * Name of blockAttributes condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * AWS Access Key of an account with the required permissions to post logs. It is **strongly** recommended you create a separate IAM user with permissions to only operate on this Bucket. This key will be not be encrypted. Not required if `iam_role` is provided. You can provide this key via an environment variable, `FASTLY_S3_ACCESS_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#s3_access_key ServiceVcl#s3_access_key}
  */
  readonly s3AccessKey?: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided. You can provide this value via an environment variable, `FASTLY_S3_IAM_ROLE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#s3_iam_role ServiceVcl#s3_iam_role}
  */
  readonly s3IamRole?: string;
  /**
  * AWS Secret Key of an account with the required permissions to post logs. It is **strongly** recommended you create a separate IAM user with permissions to only operate on this Bucket. This secret will be not be encrypted. Not required if `iam_role` is provided. You can provide this secret via an environment variable, `FASTLY_S3_SECRET_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#s3_secret_key ServiceVcl#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * Specify what type of server side encryption should be used. Can be either `AES256` or `aws:kms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#server_side_encryption ServiceVcl#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Optional server-side KMS Key Id. Must be set if server_side_encryption is set to `aws:kms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#server_side_encryption_kms_key_id ServiceVcl#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function serviceVclLoggingS3ToTerraform(struct?: ServiceVclLoggingS3 | cdktf.IResolvable): any {
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
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    redundancy: cdktf.stringToTerraform(struct!.redundancy),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    s3_access_key: cdktf.stringToTerraform(struct!.s3AccessKey),
    s3_iam_role: cdktf.stringToTerraform(struct!.s3IamRole),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    server_side_encryption: cdktf.stringToTerraform(struct!.serverSideEncryption),
    server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
  }
}


export function serviceVclLoggingS3ToHclTerraform(struct?: ServiceVclLoggingS3 | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingS3 | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._bucketName = undefined;
      this._compressionCodec = undefined;
      this._domain = undefined;
      this._fileMaxBytes = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._redundancy = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._redundancy = value.redundancy;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingS3List extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingS3[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingS3OutputReference {
    return new ServiceVclLoggingS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingScalyr {
  /**
  * Apache style log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * The unique name of the Scalyr logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of the logfile field sent to Scalyr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#project_id ServiceVcl#project_id}
  */
  readonly projectId?: string;
  /**
  * The region that log data will be sent to. One of `US` or `EU`. Defaults to `US` if undefined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#region ServiceVcl#region}
  */
  readonly region?: string;
  /**
  * The name of an existing condition in the configured endpoint, or leave blank to always execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The token to use for authentication (https://www.scalyr.com/keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
}

export function serviceVclLoggingScalyrToTerraform(struct?: ServiceVclLoggingScalyr | cdktf.IResolvable): any {
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
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceVclLoggingScalyrToHclTerraform(struct?: ServiceVclLoggingScalyr | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclLoggingScalyrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingScalyr | cdktf.IResolvable | undefined {
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
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingScalyr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._responseCondition = undefined;
      this._token = undefined;
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
      this._projectId = value.projectId;
      this._region = value.region;
      this._responseCondition = value.responseCondition;
      this._token = value.token;
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
}

export class ServiceVclLoggingScalyrList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingScalyr[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingScalyrOutputReference {
    return new ServiceVclLoggingScalyrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingSftp {
  /**
  * The SFTP address to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#address ServiceVcl#address}
  */
  readonly address: string;
  /**
  * The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#compression_codec ServiceVcl#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Apache-style string or VCL variables to use for log formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * Level of Gzip compression from `0-9`. `0` means no compression. `1` is the fastest and the least compressed version, `9` is the slowest and the most compressed version. Default `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#gzip_level ServiceVcl#gzip_level}
  */
  readonly gzipLevel?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * The unique name of the SFTP logging endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#password ServiceVcl#password}
  */
  readonly password?: string;
  /**
  * The path to upload log files to. If the path ends in `/` then it is treated as a directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#path ServiceVcl#path}
  */
  readonly path: string;
  /**
  * How frequently log files are finalized so they can be available for reading (in seconds, default `3600`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#period ServiceVcl#period}
  */
  readonly period?: number;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * The port the SFTP service listens on. (Default: `22`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * A PGP public key that Fastly will use to encrypt your log files before writing them to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#public_key ServiceVcl#public_key}
  */
  readonly publicKey?: string;
  /**
  * The name of the condition to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#secret_key ServiceVcl#secret_key}
  */
  readonly secretKey?: string;
  /**
  * A list of host keys for all hosts we can connect to over SFTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ssh_known_hosts ServiceVcl#ssh_known_hosts}
  */
  readonly sshKnownHosts: string;
  /**
  * The `strftime` specified timestamp formatting (default `%Y-%m-%dT%H:%M:%S.000`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timestamp_format ServiceVcl#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * The username for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#user ServiceVcl#user}
  */
  readonly user: string;
}

export function serviceVclLoggingSftpToTerraform(struct?: ServiceVclLoggingSftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    gzip_level: cdktf.numberToTerraform(struct!.gzipLevel),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    placement: cdktf.stringToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    ssh_known_hosts: cdktf.stringToTerraform(struct!.sshKnownHosts),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceVclLoggingSftpToHclTerraform(struct?: ServiceVclLoggingSftp | cdktf.IResolvable): any {
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
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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

export class ServiceVclLoggingSftpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingSftp | cdktf.IResolvable | undefined {
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
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
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
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingSftp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._compressionCodec = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._gzipLevel = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._path = undefined;
      this._period = undefined;
      this._placement = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._publicKey = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._gzipLevel = value.gzipLevel;
      this._messageType = value.messageType;
      this._name = value.name;
      this._password = value.password;
      this._path = value.path;
      this._period = value.period;
      this._placement = value.placement;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._publicKey = value.publicKey;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingSftpList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingSftp[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingSftpOutputReference {
    return new ServiceVclLoggingSftpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingSplunk {
  /**
  * Apache-style string or VCL variables to use for log formatting (default: `%h %l %u %t "%r" %>s %b`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * A unique name to identify the Splunk endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * The name of the condition to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SPLUNK_CA_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_ca_cert ServiceVcl#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_cert ServiceVcl#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_key ServiceVcl#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_hostname ServiceVcl#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Splunk token to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token: string;
  /**
  * The Splunk URL to stream logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
  /**
  * Whether to use TLS for secure logging. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#use_tls ServiceVcl#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceVclLoggingSplunkToTerraform(struct?: ServiceVclLoggingSplunk | cdktf.IResolvable): any {
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
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceVclLoggingSplunkToHclTerraform(struct?: ServiceVclLoggingSplunk | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingSplunk | cdktf.IResolvable | undefined {
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
      this._tlsCaCert = value.tlsCaCert;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsHostname = value.tlsHostname;
      this._token = value.token;
      this._url = value.url;
      this._useTls = value.useTls;
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

export class ServiceVclLoggingSplunkList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingSplunk[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingSplunkOutputReference {
    return new ServiceVclLoggingSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingSumologic {
  /**
  * Apache-style string or VCL variables to use for log formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format used for the configured endpoint. Can be either 1 or 2. (Default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this Sumologic endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Name of blockAttributes condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * The URL to Sumologic collector endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#url ServiceVcl#url}
  */
  readonly url: string;
}

export function serviceVclLoggingSumologicToTerraform(struct?: ServiceVclLoggingSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceVclLoggingSumologicToHclTerraform(struct?: ServiceVclLoggingSumologic | cdktf.IResolvable): any {
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingSumologic | cdktf.IResolvable | undefined {
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
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
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
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclLoggingSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._messageType = value.messageType;
      this._name = value.name;
      this._placement = value.placement;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingSumologicList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingSumologic[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingSumologicOutputReference {
    return new ServiceVclLoggingSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclLoggingSyslog {
  /**
  * A hostname or IPv4 address of the Syslog endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#address ServiceVcl#address}
  */
  readonly address: string;
  /**
  * Apache-style string or VCL variables to use for log formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format ServiceVcl#format}
  */
  readonly format?: string;
  /**
  * The version of the custom logging format. Can be either 1 or 2. (Default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#format_version ServiceVcl#format_version}
  */
  readonly formatVersion?: number;
  /**
  * How the message should be formatted. Can be either `classic`, `loggly`, `logplex` or `blank`. Default is `classic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#message_type ServiceVcl#message_type}
  */
  readonly messageType?: string;
  /**
  * A unique name to identify this Syslog endpoint. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Where in the generated VCL the logging call should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#placement ServiceVcl#placement}
  */
  readonly placement?: string;
  /**
  * The port associated with the address where the Syslog endpoint can be accessed. Default `514`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#port ServiceVcl#port}
  */
  readonly port?: number;
  /**
  * Region where logs will be processed before streaming to BigQuery. Valid values are 'none', 'us' and 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#processing_region ServiceVcl#processing_region}
  */
  readonly processingRegion?: string;
  /**
  * Name of blockAttributes condition to apply this logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_condition ServiceVcl#response_condition}
  */
  readonly responseCondition?: string;
  /**
  * A secure certificate to authenticate the server with. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SYSLOG_CA_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_ca_cert ServiceVcl#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * The client certificate used to make authenticated requests. Must be in PEM format. You can provide this certificate via an environment variable, `FASTLY_SYSLOG_CLIENT_CERT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_cert ServiceVcl#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The client private key used to make authenticated requests. Must be in PEM format. You can provide this key via an environment variable, `FASTLY_SYSLOG_CLIENT_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_client_key ServiceVcl#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * Used during the TLS handshake to validate the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#tls_hostname ServiceVcl#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * Whether to prepend each message with a specific token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#token ServiceVcl#token}
  */
  readonly token?: string;
  /**
  * Whether to use TLS for secure logging. Default `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#use_tls ServiceVcl#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function serviceVclLoggingSyslogToTerraform(struct?: ServiceVclLoggingSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    format: cdktf.stringToTerraform(struct!.format),
    format_version: cdktf.numberToTerraform(struct!.formatVersion),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    name: cdktf.stringToTerraform(struct!.name),
    placement: cdktf.stringToTerraform(struct!.placement),
    port: cdktf.numberToTerraform(struct!.port),
    processing_region: cdktf.stringToTerraform(struct!.processingRegion),
    response_condition: cdktf.stringToTerraform(struct!.responseCondition),
    tls_ca_cert: cdktf.stringToTerraform(struct!.tlsCaCert),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    token: cdktf.stringToTerraform(struct!.token),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function serviceVclLoggingSyslogToHclTerraform(struct?: ServiceVclLoggingSyslog | cdktf.IResolvable): any {
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
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
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
    response_condition: {
      value: cdktf.stringToHclTerraform(struct!.responseCondition),
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

export class ServiceVclLoggingSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclLoggingSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRegion = this._processingRegion;
    }
    if (this._responseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCondition = this._responseCondition;
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

  public set internalValue(value: ServiceVclLoggingSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._format = undefined;
      this._formatVersion = undefined;
      this._messageType = undefined;
      this._name = undefined;
      this._placement = undefined;
      this._port = undefined;
      this._processingRegion = undefined;
      this._responseCondition = undefined;
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
      this._format = value.format;
      this._formatVersion = value.formatVersion;
      this._messageType = value.messageType;
      this._name = value.name;
      this._placement = value.placement;
      this._port = value.port;
      this._processingRegion = value.processingRegion;
      this._responseCondition = value.responseCondition;
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

export class ServiceVclLoggingSyslogList extends cdktf.ComplexList {
  public internalValue? : ServiceVclLoggingSyslog[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclLoggingSyslogOutputReference {
    return new ServiceVclLoggingSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclProductEnablementDdosProtection {
  /**
  * Enable DDoS Protection support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#enabled ServiceVcl#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Operation mode. Can be either `off`, `log`, or `block`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#mode ServiceVcl#mode}
  */
  readonly mode: string;
}

export function serviceVclProductEnablementDdosProtectionToTerraform(struct?: ServiceVclProductEnablementDdosProtectionOutputReference | ServiceVclProductEnablementDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function serviceVclProductEnablementDdosProtectionToHclTerraform(struct?: ServiceVclProductEnablementDdosProtectionOutputReference | ServiceVclProductEnablementDdosProtection): any {
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

export class ServiceVclProductEnablementDdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceVclProductEnablementDdosProtection | undefined {
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

  public set internalValue(value: ServiceVclProductEnablementDdosProtection | undefined) {
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
export interface ServiceVclProductEnablementNgwaf {
  /**
  * Enable Next-Gen WAF support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#enabled ServiceVcl#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The percentage of traffic to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#traffic_ramp ServiceVcl#traffic_ramp}
  */
  readonly trafficRamp?: number;
  /**
  * The workspace to link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#workspace_id ServiceVcl#workspace_id}
  */
  readonly workspaceId: string;
}

export function serviceVclProductEnablementNgwafToTerraform(struct?: ServiceVclProductEnablementNgwafOutputReference | ServiceVclProductEnablementNgwaf): any {
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


export function serviceVclProductEnablementNgwafToHclTerraform(struct?: ServiceVclProductEnablementNgwafOutputReference | ServiceVclProductEnablementNgwaf): any {
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

export class ServiceVclProductEnablementNgwafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceVclProductEnablementNgwaf | undefined {
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

  public set internalValue(value: ServiceVclProductEnablementNgwaf | undefined) {
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
export interface ServiceVclProductEnablement {
  /**
  * Enable API Discovery support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#api_discovery ServiceVcl#api_discovery}
  */
  readonly apiDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable Bot Management support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bot_management ServiceVcl#bot_management}
  */
  readonly botManagement?: boolean | cdktf.IResolvable;
  /**
  * Enable Brotli Compression support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#brotli_compression ServiceVcl#brotli_compression}
  */
  readonly brotliCompression?: boolean | cdktf.IResolvable;
  /**
  * Enable Domain Inspector support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#domain_inspector ServiceVcl#domain_inspector}
  */
  readonly domainInspector?: boolean | cdktf.IResolvable;
  /**
  * Enable Image Optimizer support (all backends must have a `shield` attribute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#image_optimizer ServiceVcl#image_optimizer}
  */
  readonly imageOptimizer?: boolean | cdktf.IResolvable;
  /**
  * Enable Log Explorer & Insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#log_explorer_insights ServiceVcl#log_explorer_insights}
  */
  readonly logExplorerInsights?: boolean | cdktf.IResolvable;
  /**
  * Used by the provider to identify modified settings (changing this value will force the entire block to be deleted, then recreated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name?: string;
  /**
  * Enable Origin Inspector support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#origin_inspector ServiceVcl#origin_inspector}
  */
  readonly originInspector?: boolean | cdktf.IResolvable;
  /**
  * Enable WebSockets support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#websockets ServiceVcl#websockets}
  */
  readonly websockets?: boolean | cdktf.IResolvable;
  /**
  * ddos_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ddos_protection ServiceVcl#ddos_protection}
  */
  readonly ddosProtection?: ServiceVclProductEnablementDdosProtection;
  /**
  * ngwaf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#ngwaf ServiceVcl#ngwaf}
  */
  readonly ngwaf?: ServiceVclProductEnablementNgwaf;
}

export function serviceVclProductEnablementToTerraform(struct?: ServiceVclProductEnablementOutputReference | ServiceVclProductEnablement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery: cdktf.booleanToTerraform(struct!.apiDiscovery),
    bot_management: cdktf.booleanToTerraform(struct!.botManagement),
    brotli_compression: cdktf.booleanToTerraform(struct!.brotliCompression),
    domain_inspector: cdktf.booleanToTerraform(struct!.domainInspector),
    image_optimizer: cdktf.booleanToTerraform(struct!.imageOptimizer),
    log_explorer_insights: cdktf.booleanToTerraform(struct!.logExplorerInsights),
    name: cdktf.stringToTerraform(struct!.name),
    origin_inspector: cdktf.booleanToTerraform(struct!.originInspector),
    websockets: cdktf.booleanToTerraform(struct!.websockets),
    ddos_protection: serviceVclProductEnablementDdosProtectionToTerraform(struct!.ddosProtection),
    ngwaf: serviceVclProductEnablementNgwafToTerraform(struct!.ngwaf),
  }
}


export function serviceVclProductEnablementToHclTerraform(struct?: ServiceVclProductEnablementOutputReference | ServiceVclProductEnablement): any {
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
    bot_management: {
      value: cdktf.booleanToHclTerraform(struct!.botManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    brotli_compression: {
      value: cdktf.booleanToHclTerraform(struct!.brotliCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_inspector: {
      value: cdktf.booleanToHclTerraform(struct!.domainInspector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_optimizer: {
      value: cdktf.booleanToHclTerraform(struct!.imageOptimizer),
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
    origin_inspector: {
      value: cdktf.booleanToHclTerraform(struct!.originInspector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    websockets: {
      value: cdktf.booleanToHclTerraform(struct!.websockets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddos_protection: {
      value: serviceVclProductEnablementDdosProtectionToHclTerraform(struct!.ddosProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceVclProductEnablementDdosProtectionList",
    },
    ngwaf: {
      value: serviceVclProductEnablementNgwafToHclTerraform(struct!.ngwaf),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceVclProductEnablementNgwafList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclProductEnablementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceVclProductEnablement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscovery = this._apiDiscovery;
    }
    if (this._botManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.botManagement = this._botManagement;
    }
    if (this._brotliCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.brotliCompression = this._brotliCompression;
    }
    if (this._domainInspector !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainInspector = this._domainInspector;
    }
    if (this._imageOptimizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimizer = this._imageOptimizer;
    }
    if (this._logExplorerInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.logExplorerInsights = this._logExplorerInsights;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originInspector !== undefined) {
      hasAnyValues = true;
      internalValueResult.originInspector = this._originInspector;
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

  public set internalValue(value: ServiceVclProductEnablement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscovery = undefined;
      this._botManagement = undefined;
      this._brotliCompression = undefined;
      this._domainInspector = undefined;
      this._imageOptimizer = undefined;
      this._logExplorerInsights = undefined;
      this._name = undefined;
      this._originInspector = undefined;
      this._websockets = undefined;
      this._ddosProtection.internalValue = undefined;
      this._ngwaf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscovery = value.apiDiscovery;
      this._botManagement = value.botManagement;
      this._brotliCompression = value.brotliCompression;
      this._domainInspector = value.domainInspector;
      this._imageOptimizer = value.imageOptimizer;
      this._logExplorerInsights = value.logExplorerInsights;
      this._name = value.name;
      this._originInspector = value.originInspector;
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

  // bot_management - computed: false, optional: true, required: false
  private _botManagement?: boolean | cdktf.IResolvable; 
  public get botManagement() {
    return this.getBooleanAttribute('bot_management');
  }
  public set botManagement(value: boolean | cdktf.IResolvable) {
    this._botManagement = value;
  }
  public resetBotManagement() {
    this._botManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botManagementInput() {
    return this._botManagement;
  }

  // brotli_compression - computed: false, optional: true, required: false
  private _brotliCompression?: boolean | cdktf.IResolvable; 
  public get brotliCompression() {
    return this.getBooleanAttribute('brotli_compression');
  }
  public set brotliCompression(value: boolean | cdktf.IResolvable) {
    this._brotliCompression = value;
  }
  public resetBrotliCompression() {
    this._brotliCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brotliCompressionInput() {
    return this._brotliCompression;
  }

  // domain_inspector - computed: false, optional: true, required: false
  private _domainInspector?: boolean | cdktf.IResolvable; 
  public get domainInspector() {
    return this.getBooleanAttribute('domain_inspector');
  }
  public set domainInspector(value: boolean | cdktf.IResolvable) {
    this._domainInspector = value;
  }
  public resetDomainInspector() {
    this._domainInspector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInspectorInput() {
    return this._domainInspector;
  }

  // image_optimizer - computed: false, optional: true, required: false
  private _imageOptimizer?: boolean | cdktf.IResolvable; 
  public get imageOptimizer() {
    return this.getBooleanAttribute('image_optimizer');
  }
  public set imageOptimizer(value: boolean | cdktf.IResolvable) {
    this._imageOptimizer = value;
  }
  public resetImageOptimizer() {
    this._imageOptimizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizerInput() {
    return this._imageOptimizer;
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

  // origin_inspector - computed: false, optional: true, required: false
  private _originInspector?: boolean | cdktf.IResolvable; 
  public get originInspector() {
    return this.getBooleanAttribute('origin_inspector');
  }
  public set originInspector(value: boolean | cdktf.IResolvable) {
    this._originInspector = value;
  }
  public resetOriginInspector() {
    this._originInspector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInspectorInput() {
    return this._originInspector;
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
  private _ddosProtection = new ServiceVclProductEnablementDdosProtectionOutputReference(this, "ddos_protection");
  public get ddosProtection() {
    return this._ddosProtection;
  }
  public putDdosProtection(value: ServiceVclProductEnablementDdosProtection) {
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
  private _ngwaf = new ServiceVclProductEnablementNgwafOutputReference(this, "ngwaf");
  public get ngwaf() {
    return this._ngwaf;
  }
  public putNgwaf(value: ServiceVclProductEnablementNgwaf) {
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
export interface ServiceVclRateLimiterResponse {
  /**
  * HTTP response body data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content ServiceVcl#content}
  */
  readonly content: string;
  /**
  * HTTP Content-Type (e.g. application/json)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content_type ServiceVcl#content_type}
  */
  readonly contentType: string;
  /**
  * HTTP response status code (e.g. 429)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#status ServiceVcl#status}
  */
  readonly status: number;
}

export function serviceVclRateLimiterResponseToTerraform(struct?: ServiceVclRateLimiterResponseOutputReference | ServiceVclRateLimiterResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function serviceVclRateLimiterResponseToHclTerraform(struct?: ServiceVclRateLimiterResponseOutputReference | ServiceVclRateLimiterResponse): any {
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
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclRateLimiterResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceVclRateLimiterResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclRateLimiterResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ServiceVclRateLimiter {
  /**
  * The action to take when a rate limiter violation is detected (one of: log_only, response, response_object)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#action ServiceVcl#action}
  */
  readonly action: string;
  /**
  * Comma-separated list of VCL variables used to generate a counter key to identify a client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#client_key ServiceVcl#client_key}
  */
  readonly clientKey: string;
  /**
  * Revision number of the rate limiting feature implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#feature_revision ServiceVcl#feature_revision}
  */
  readonly featureRevision?: number;
  /**
  * Comma-separated list of HTTP methods to apply rate limiting to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#http_methods ServiceVcl#http_methods}
  */
  readonly httpMethods: string;
  /**
  * Name of the type of logging endpoint to be used when action is log_only (one of: azureblob, bigquery, cloudfiles, datadog, digitalocean, elasticsearch, ftp, gcs, googleanalytics, heroku, honeycomb, http, https, kafka, kinesis, logentries, loggly, logshuttle, newrelic, openstack, papertrail, pubsub, s3, scalyr, sftp, splunk, stackdriver, sumologic, syslog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#logger_type ServiceVcl#logger_type}
  */
  readonly loggerType?: string;
  /**
  * A unique human readable name for the rate limiting rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Length of time in minutes that the rate limiter is in effect after the initial violation is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#penalty_box_duration ServiceVcl#penalty_box_duration}
  */
  readonly penaltyBoxDuration: number;
  /**
  * Name of existing response object. Required if action is response_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response_object_name ServiceVcl#response_object_name}
  */
  readonly responseObjectName?: string;
  /**
  * Upper limit of requests per second allowed by the rate limiter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#rps_limit ServiceVcl#rps_limit}
  */
  readonly rpsLimit: number;
  /**
  * The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#uri_dictionary_name ServiceVcl#uri_dictionary_name}
  */
  readonly uriDictionaryName?: string;
  /**
  * Number of seconds during which the RPS limit must be exceeded in order to trigger a violation (one of: 1, 10, 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#window_size ServiceVcl#window_size}
  */
  readonly windowSize: number;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response ServiceVcl#response}
  */
  readonly response?: ServiceVclRateLimiterResponse;
}

export function serviceVclRateLimiterToTerraform(struct?: ServiceVclRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    feature_revision: cdktf.numberToTerraform(struct!.featureRevision),
    http_methods: cdktf.stringToTerraform(struct!.httpMethods),
    logger_type: cdktf.stringToTerraform(struct!.loggerType),
    name: cdktf.stringToTerraform(struct!.name),
    penalty_box_duration: cdktf.numberToTerraform(struct!.penaltyBoxDuration),
    response_object_name: cdktf.stringToTerraform(struct!.responseObjectName),
    rps_limit: cdktf.numberToTerraform(struct!.rpsLimit),
    uri_dictionary_name: cdktf.stringToTerraform(struct!.uriDictionaryName),
    window_size: cdktf.numberToTerraform(struct!.windowSize),
    response: serviceVclRateLimiterResponseToTerraform(struct!.response),
  }
}


export function serviceVclRateLimiterToHclTerraform(struct?: ServiceVclRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_revision: {
      value: cdktf.numberToHclTerraform(struct!.featureRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_methods: {
      value: cdktf.stringToHclTerraform(struct!.httpMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logger_type: {
      value: cdktf.stringToHclTerraform(struct!.loggerType),
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
    penalty_box_duration: {
      value: cdktf.numberToHclTerraform(struct!.penaltyBoxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_object_name: {
      value: cdktf.stringToHclTerraform(struct!.responseObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rps_limit: {
      value: cdktf.numberToHclTerraform(struct!.rpsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.uriDictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.numberToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response: {
      value: serviceVclRateLimiterResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceVclRateLimiterResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._featureRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureRevision = this._featureRevision;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._loggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggerType = this._loggerType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._penaltyBoxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.penaltyBoxDuration = this._penaltyBoxDuration;
    }
    if (this._responseObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseObjectName = this._responseObjectName;
    }
    if (this._rpsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpsLimit = this._rpsLimit;
    }
    if (this._uriDictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriDictionaryName = this._uriDictionaryName;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._clientKey = undefined;
      this._featureRevision = undefined;
      this._httpMethods = undefined;
      this._loggerType = undefined;
      this._name = undefined;
      this._penaltyBoxDuration = undefined;
      this._responseObjectName = undefined;
      this._rpsLimit = undefined;
      this._uriDictionaryName = undefined;
      this._windowSize = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._clientKey = value.clientKey;
      this._featureRevision = value.featureRevision;
      this._httpMethods = value.httpMethods;
      this._loggerType = value.loggerType;
      this._name = value.name;
      this._penaltyBoxDuration = value.penaltyBoxDuration;
      this._responseObjectName = value.responseObjectName;
      this._rpsLimit = value.rpsLimit;
      this._uriDictionaryName = value.uriDictionaryName;
      this._windowSize = value.windowSize;
      this._response.internalValue = value.response;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // feature_revision - computed: false, optional: true, required: false
  private _featureRevision?: number; 
  public get featureRevision() {
    return this.getNumberAttribute('feature_revision');
  }
  public set featureRevision(value: number) {
    this._featureRevision = value;
  }
  public resetFeatureRevision() {
    this._featureRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureRevisionInput() {
    return this._featureRevision;
  }

  // http_methods - computed: false, optional: false, required: true
  private _httpMethods?: string; 
  public get httpMethods() {
    return this.getStringAttribute('http_methods');
  }
  public set httpMethods(value: string) {
    this._httpMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // logger_type - computed: false, optional: true, required: false
  private _loggerType?: string; 
  public get loggerType() {
    return this.getStringAttribute('logger_type');
  }
  public set loggerType(value: string) {
    this._loggerType = value;
  }
  public resetLoggerType() {
    this._loggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggerTypeInput() {
    return this._loggerType;
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

  // penalty_box_duration - computed: false, optional: false, required: true
  private _penaltyBoxDuration?: number; 
  public get penaltyBoxDuration() {
    return this.getNumberAttribute('penalty_box_duration');
  }
  public set penaltyBoxDuration(value: number) {
    this._penaltyBoxDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get penaltyBoxDurationInput() {
    return this._penaltyBoxDuration;
  }

  // ratelimiter_id - computed: true, optional: false, required: false
  public get ratelimiterId() {
    return this.getStringAttribute('ratelimiter_id');
  }

  // response_object_name - computed: false, optional: true, required: false
  private _responseObjectName?: string; 
  public get responseObjectName() {
    return this.getStringAttribute('response_object_name');
  }
  public set responseObjectName(value: string) {
    this._responseObjectName = value;
  }
  public resetResponseObjectName() {
    this._responseObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseObjectNameInput() {
    return this._responseObjectName;
  }

  // rps_limit - computed: false, optional: false, required: true
  private _rpsLimit?: number; 
  public get rpsLimit() {
    return this.getNumberAttribute('rps_limit');
  }
  public set rpsLimit(value: number) {
    this._rpsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpsLimitInput() {
    return this._rpsLimit;
  }

  // uri_dictionary_name - computed: false, optional: true, required: false
  private _uriDictionaryName?: string; 
  public get uriDictionaryName() {
    return this.getStringAttribute('uri_dictionary_name');
  }
  public set uriDictionaryName(value: string) {
    this._uriDictionaryName = value;
  }
  public resetUriDictionaryName() {
    this._uriDictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriDictionaryNameInput() {
    return this._uriDictionaryName;
  }

  // window_size - computed: false, optional: false, required: true
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // response - computed: false, optional: true, required: false
  private _response = new ServiceVclRateLimiterResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: ServiceVclRateLimiterResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class ServiceVclRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ServiceVclRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclRateLimiterOutputReference {
    return new ServiceVclRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclRequestSetting {
  /**
  * Allows you to terminate request handling and immediately perform an action. When set it can be `lookup` or `pass` (Ignore the cache completely)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#action ServiceVcl#action}
  */
  readonly action?: string;
  /**
  * Disable collapsed forwarding, so you don't wait for other objects to origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#bypass_busy_wait ServiceVcl#bypass_busy_wait}
  */
  readonly bypassBusyWait?: boolean | cdktf.IResolvable;
  /**
  * Sets the host header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#default_host ServiceVcl#default_host}
  */
  readonly defaultHost?: string;
  /**
  * Force a cache miss for the request. If specified, can be `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#force_miss ServiceVcl#force_miss}
  */
  readonly forceMiss?: boolean | cdktf.IResolvable;
  /**
  * Forces the request to use SSL (Redirects a non-SSL request to SSL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#force_ssl ServiceVcl#force_ssl}
  */
  readonly forceSsl?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of varnish request object fields that should be in the hash key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#hash_keys ServiceVcl#hash_keys}
  */
  readonly hashKeys?: string;
  /**
  * How old an object is allowed to be to serve `stale-if-error` or `stale-while-revalidate`, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#max_stale_age ServiceVcl#max_stale_age}
  */
  readonly maxStaleAge?: number;
  /**
  * Unique name to refer to this Request Setting. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Name of already defined `condition` to determine if this request setting should be applied (should be unique across multiple instances of `request_setting`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_condition ServiceVcl#request_condition}
  */
  readonly requestCondition?: string;
  /**
  * Injects the X-Timer info into the request for viewing origin fetch durations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#timer_support ServiceVcl#timer_support}
  */
  readonly timerSupport?: boolean | cdktf.IResolvable;
  /**
  * X-Forwarded-For, should be `clear`, `leave`, `append`, `append_all`, or `overwrite`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#xff ServiceVcl#xff}
  */
  readonly xff?: string;
}

export function serviceVclRequestSettingToTerraform(struct?: ServiceVclRequestSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bypass_busy_wait: cdktf.booleanToTerraform(struct!.bypassBusyWait),
    default_host: cdktf.stringToTerraform(struct!.defaultHost),
    force_miss: cdktf.booleanToTerraform(struct!.forceMiss),
    force_ssl: cdktf.booleanToTerraform(struct!.forceSsl),
    hash_keys: cdktf.stringToTerraform(struct!.hashKeys),
    max_stale_age: cdktf.numberToTerraform(struct!.maxStaleAge),
    name: cdktf.stringToTerraform(struct!.name),
    request_condition: cdktf.stringToTerraform(struct!.requestCondition),
    timer_support: cdktf.booleanToTerraform(struct!.timerSupport),
    xff: cdktf.stringToTerraform(struct!.xff),
  }
}


export function serviceVclRequestSettingToHclTerraform(struct?: ServiceVclRequestSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_busy_wait: {
      value: cdktf.booleanToHclTerraform(struct!.bypassBusyWait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_host: {
      value: cdktf.stringToHclTerraform(struct!.defaultHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_miss: {
      value: cdktf.booleanToHclTerraform(struct!.forceMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.forceSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash_keys: {
      value: cdktf.stringToHclTerraform(struct!.hashKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_stale_age: {
      value: cdktf.numberToHclTerraform(struct!.maxStaleAge),
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
    request_condition: {
      value: cdktf.stringToHclTerraform(struct!.requestCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer_support: {
      value: cdktf.booleanToHclTerraform(struct!.timerSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xff: {
      value: cdktf.stringToHclTerraform(struct!.xff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclRequestSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclRequestSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._bypassBusyWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassBusyWait = this._bypassBusyWait;
    }
    if (this._defaultHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHost = this._defaultHost;
    }
    if (this._forceMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMiss = this._forceMiss;
    }
    if (this._forceSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSsl = this._forceSsl;
    }
    if (this._hashKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeys = this._hashKeys;
    }
    if (this._maxStaleAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStaleAge = this._maxStaleAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCondition = this._requestCondition;
    }
    if (this._timerSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerSupport = this._timerSupport;
    }
    if (this._xff !== undefined) {
      hasAnyValues = true;
      internalValueResult.xff = this._xff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclRequestSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._bypassBusyWait = undefined;
      this._defaultHost = undefined;
      this._forceMiss = undefined;
      this._forceSsl = undefined;
      this._hashKeys = undefined;
      this._maxStaleAge = undefined;
      this._name = undefined;
      this._requestCondition = undefined;
      this._timerSupport = undefined;
      this._xff = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._bypassBusyWait = value.bypassBusyWait;
      this._defaultHost = value.defaultHost;
      this._forceMiss = value.forceMiss;
      this._forceSsl = value.forceSsl;
      this._hashKeys = value.hashKeys;
      this._maxStaleAge = value.maxStaleAge;
      this._name = value.name;
      this._requestCondition = value.requestCondition;
      this._timerSupport = value.timerSupport;
      this._xff = value.xff;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // bypass_busy_wait - computed: false, optional: true, required: false
  private _bypassBusyWait?: boolean | cdktf.IResolvable; 
  public get bypassBusyWait() {
    return this.getBooleanAttribute('bypass_busy_wait');
  }
  public set bypassBusyWait(value: boolean | cdktf.IResolvable) {
    this._bypassBusyWait = value;
  }
  public resetBypassBusyWait() {
    this._bypassBusyWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassBusyWaitInput() {
    return this._bypassBusyWait;
  }

  // default_host - computed: false, optional: true, required: false
  private _defaultHost?: string; 
  public get defaultHost() {
    return this.getStringAttribute('default_host');
  }
  public set defaultHost(value: string) {
    this._defaultHost = value;
  }
  public resetDefaultHost() {
    this._defaultHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHostInput() {
    return this._defaultHost;
  }

  // force_miss - computed: false, optional: true, required: false
  private _forceMiss?: boolean | cdktf.IResolvable; 
  public get forceMiss() {
    return this.getBooleanAttribute('force_miss');
  }
  public set forceMiss(value: boolean | cdktf.IResolvable) {
    this._forceMiss = value;
  }
  public resetForceMiss() {
    this._forceMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMissInput() {
    return this._forceMiss;
  }

  // force_ssl - computed: false, optional: true, required: false
  private _forceSsl?: boolean | cdktf.IResolvable; 
  public get forceSsl() {
    return this.getBooleanAttribute('force_ssl');
  }
  public set forceSsl(value: boolean | cdktf.IResolvable) {
    this._forceSsl = value;
  }
  public resetForceSsl() {
    this._forceSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSslInput() {
    return this._forceSsl;
  }

  // hash_keys - computed: false, optional: true, required: false
  private _hashKeys?: string; 
  public get hashKeys() {
    return this.getStringAttribute('hash_keys');
  }
  public set hashKeys(value: string) {
    this._hashKeys = value;
  }
  public resetHashKeys() {
    this._hashKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeysInput() {
    return this._hashKeys;
  }

  // max_stale_age - computed: false, optional: true, required: false
  private _maxStaleAge?: number; 
  public get maxStaleAge() {
    return this.getNumberAttribute('max_stale_age');
  }
  public set maxStaleAge(value: number) {
    this._maxStaleAge = value;
  }
  public resetMaxStaleAge() {
    this._maxStaleAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStaleAgeInput() {
    return this._maxStaleAge;
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

  // request_condition - computed: false, optional: true, required: false
  private _requestCondition?: string; 
  public get requestCondition() {
    return this.getStringAttribute('request_condition');
  }
  public set requestCondition(value: string) {
    this._requestCondition = value;
  }
  public resetRequestCondition() {
    this._requestCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConditionInput() {
    return this._requestCondition;
  }

  // timer_support - computed: false, optional: true, required: false
  private _timerSupport?: boolean | cdktf.IResolvable; 
  public get timerSupport() {
    return this.getBooleanAttribute('timer_support');
  }
  public set timerSupport(value: boolean | cdktf.IResolvable) {
    this._timerSupport = value;
  }
  public resetTimerSupport() {
    this._timerSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerSupportInput() {
    return this._timerSupport;
  }

  // xff - computed: false, optional: true, required: false
  private _xff?: string; 
  public get xff() {
    return this.getStringAttribute('xff');
  }
  public set xff(value: string) {
    this._xff = value;
  }
  public resetXff() {
    this._xff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffInput() {
    return this._xff;
  }
}

export class ServiceVclRequestSettingList extends cdktf.ComplexList {
  public internalValue? : ServiceVclRequestSetting[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclRequestSettingOutputReference {
    return new ServiceVclRequestSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclResponseObject {
  /**
  * Name of already defined `condition` to check after we have retrieved an object. If the condition passes then deliver this Request Object instead. This `condition` must be of type `CACHE`. For detailed information about Conditionals, see [Fastly's Documentation on Conditionals](https://docs.fastly.com/en/guides/using-conditions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#cache_condition ServiceVcl#cache_condition}
  */
  readonly cacheCondition?: string;
  /**
  * The content to deliver for the response object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content ServiceVcl#content}
  */
  readonly content?: string;
  /**
  * The MIME type of the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content_type ServiceVcl#content_type}
  */
  readonly contentType?: string;
  /**
  * A unique name to identify this Response Object. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Name of already defined `condition` to be checked during the request phase. If the condition passes then this object will be delivered. This `condition` must be of type `REQUEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#request_condition ServiceVcl#request_condition}
  */
  readonly requestCondition?: string;
  /**
  * The HTTP Response. Default `OK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#response ServiceVcl#response}
  */
  readonly response?: string;
  /**
  * The HTTP Status Code. Default `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#status ServiceVcl#status}
  */
  readonly status?: number;
}

export function serviceVclResponseObjectToTerraform(struct?: ServiceVclResponseObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_condition: cdktf.stringToTerraform(struct!.cacheCondition),
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    name: cdktf.stringToTerraform(struct!.name),
    request_condition: cdktf.stringToTerraform(struct!.requestCondition),
    response: cdktf.stringToTerraform(struct!.response),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function serviceVclResponseObjectToHclTerraform(struct?: ServiceVclResponseObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_condition: {
      value: cdktf.stringToHclTerraform(struct!.cacheCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_condition: {
      value: cdktf.stringToHclTerraform(struct!.requestCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclResponseObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclResponseObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCondition = this._cacheCondition;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCondition = this._requestCondition;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclResponseObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheCondition = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._name = undefined;
      this._requestCondition = undefined;
      this._response = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheCondition = value.cacheCondition;
      this._content = value.content;
      this._contentType = value.contentType;
      this._name = value.name;
      this._requestCondition = value.requestCondition;
      this._response = value.response;
      this._status = value.status;
    }
  }

  // cache_condition - computed: false, optional: true, required: false
  private _cacheCondition?: string; 
  public get cacheCondition() {
    return this.getStringAttribute('cache_condition');
  }
  public set cacheCondition(value: string) {
    this._cacheCondition = value;
  }
  public resetCacheCondition() {
    this._cacheCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConditionInput() {
    return this._cacheCondition;
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

  // request_condition - computed: false, optional: true, required: false
  private _requestCondition?: string; 
  public get requestCondition() {
    return this.getStringAttribute('request_condition');
  }
  public set requestCondition(value: string) {
    this._requestCondition = value;
  }
  public resetRequestCondition() {
    this._requestCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConditionInput() {
    return this._requestCondition;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServiceVclResponseObjectList extends cdktf.ComplexList {
  public internalValue? : ServiceVclResponseObject[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclResponseObjectOutputReference {
    return new ServiceVclResponseObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclSnippet {
  /**
  * The VCL code that specifies exactly what the snippet does
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content ServiceVcl#content}
  */
  readonly content: string;
  /**
  * A name that is unique across "regular" and "dynamic" VCL Snippet configuration blocks. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
  /**
  * Priority determines the ordering for multiple snippets. Lower numbers execute first. Defaults to `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#priority ServiceVcl#priority}
  */
  readonly priority?: number;
  /**
  * The location in generated VCL where the snippet should be placed (can be one of `init`, `recv`, `hash`, `hit`, `miss`, `pass`, `fetch`, `error`, `deliver`, `log` or `none`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#type ServiceVcl#type}
  */
  readonly type: string;
}

export function serviceVclSnippetToTerraform(struct?: ServiceVclSnippet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceVclSnippetToHclTerraform(struct?: ServiceVclSnippet | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ServiceVclSnippetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclSnippet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclSnippet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class ServiceVclSnippetList extends cdktf.ComplexList {
  public internalValue? : ServiceVclSnippet[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclSnippetOutputReference {
    return new ServiceVclSnippetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceVclVcl {
  /**
  * The custom VCL code to upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#content ServiceVcl#content}
  */
  readonly content: string;
  /**
  * If `true`, use this block as the main configuration. If `false`, use this block as an includable library. Only a single VCL block can be marked as the main block. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#main ServiceVcl#main}
  */
  readonly main?: boolean | cdktf.IResolvable;
  /**
  * A unique name for this configuration block. It is important to note that changing this attribute will delete and recreate the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#name ServiceVcl#name}
  */
  readonly name: string;
}

export function serviceVclVclToTerraform(struct?: ServiceVclVcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    main: cdktf.booleanToTerraform(struct!.main),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceVclVclToHclTerraform(struct?: ServiceVclVcl | cdktf.IResolvable): any {
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
    main: {
      value: cdktf.booleanToHclTerraform(struct!.main),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVclVclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVclVcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVclVcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._main = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._main = value.main;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // main - computed: false, optional: true, required: false
  private _main?: boolean | cdktf.IResolvable; 
  public get main() {
    return this.getBooleanAttribute('main');
  }
  public set main(value: boolean | cdktf.IResolvable) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
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

export class ServiceVclVclList extends cdktf.ComplexList {
  public internalValue? : ServiceVclVcl[] | cdktf.IResolvable

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
  public get(index: number): ServiceVclVclOutputReference {
    return new ServiceVclVclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl fastly_service_vcl}
*/
export class ServiceVcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_service_vcl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceVcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceVcl to import
  * @param importFromId The id of the existing ServiceVcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceVcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_service_vcl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_vcl fastly_service_vcl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceVclConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceVclConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_service_vcl',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0'
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
    this._defaultHost = config.defaultHost;
    this._defaultTtl = config.defaultTtl;
    this._forceDestroy = config.forceDestroy;
    this._http3 = config.http3;
    this._id = config.id;
    this._name = config.name;
    this._reuse = config.reuse;
    this._stage = config.stage;
    this._staleIfError = config.staleIfError;
    this._staleIfErrorTtl = config.staleIfErrorTtl;
    this._versionComment = config.versionComment;
    this._acl.internalValue = config.acl;
    this._backend.internalValue = config.backend;
    this._cacheSetting.internalValue = config.cacheSetting;
    this._condition.internalValue = config.condition;
    this._dictionary.internalValue = config.dictionary;
    this._director.internalValue = config.director;
    this._domain.internalValue = config.domain;
    this._dynamicsnippet.internalValue = config.dynamicsnippet;
    this._gzip.internalValue = config.gzip;
    this._header.internalValue = config.header;
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
    this._productEnablement.internalValue = config.productEnablement;
    this._rateLimiter.internalValue = config.rateLimiter;
    this._requestSetting.internalValue = config.requestSetting;
    this._responseObject.internalValue = config.responseObject;
    this._snippet.internalValue = config.snippet;
    this._vcl.internalValue = config.vcl;
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

  // default_host - computed: false, optional: true, required: false
  private _defaultHost?: string; 
  public get defaultHost() {
    return this.getStringAttribute('default_host');
  }
  public set defaultHost(value: string) {
    this._defaultHost = value;
  }
  public resetDefaultHost() {
    this._defaultHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHostInput() {
    return this._defaultHost;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // http3 - computed: false, optional: true, required: false
  private _http3?: boolean | cdktf.IResolvable; 
  public get http3() {
    return this.getBooleanAttribute('http3');
  }
  public set http3(value: boolean | cdktf.IResolvable) {
    this._http3 = value;
  }
  public resetHttp3() {
    this._http3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3Input() {
    return this._http3;
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

  // stale_if_error - computed: false, optional: true, required: false
  private _staleIfError?: boolean | cdktf.IResolvable; 
  public get staleIfError() {
    return this.getBooleanAttribute('stale_if_error');
  }
  public set staleIfError(value: boolean | cdktf.IResolvable) {
    this._staleIfError = value;
  }
  public resetStaleIfError() {
    this._staleIfError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleIfErrorInput() {
    return this._staleIfError;
  }

  // stale_if_error_ttl - computed: false, optional: true, required: false
  private _staleIfErrorTtl?: number; 
  public get staleIfErrorTtl() {
    return this.getNumberAttribute('stale_if_error_ttl');
  }
  public set staleIfErrorTtl(value: number) {
    this._staleIfErrorTtl = value;
  }
  public resetStaleIfErrorTtl() {
    this._staleIfErrorTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleIfErrorTtlInput() {
    return this._staleIfErrorTtl;
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

  // acl - computed: false, optional: true, required: false
  private _acl = new ServiceVclAclList(this, "acl", true);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: ServiceVclAcl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new ServiceVclBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ServiceVclBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // cache_setting - computed: false, optional: true, required: false
  private _cacheSetting = new ServiceVclCacheSettingList(this, "cache_setting", true);
  public get cacheSetting() {
    return this._cacheSetting;
  }
  public putCacheSetting(value: ServiceVclCacheSetting[] | cdktf.IResolvable) {
    this._cacheSetting.internalValue = value;
  }
  public resetCacheSetting() {
    this._cacheSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSettingInput() {
    return this._cacheSetting.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ServiceVclConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ServiceVclCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new ServiceVclDictionaryList(this, "dictionary", true);
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: ServiceVclDictionary[] | cdktf.IResolvable) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // director - computed: false, optional: true, required: false
  private _director = new ServiceVclDirectorList(this, "director", true);
  public get director() {
    return this._director;
  }
  public putDirector(value: ServiceVclDirector[] | cdktf.IResolvable) {
    this._director.internalValue = value;
  }
  public resetDirector() {
    this._director.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directorInput() {
    return this._director.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new ServiceVclDomainList(this, "domain", true);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ServiceVclDomain[] | cdktf.IResolvable) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // dynamicsnippet - computed: false, optional: true, required: false
  private _dynamicsnippet = new ServiceVclDynamicsnippetList(this, "dynamicsnippet", true);
  public get dynamicsnippet() {
    return this._dynamicsnippet;
  }
  public putDynamicsnippet(value: ServiceVclDynamicsnippet[] | cdktf.IResolvable) {
    this._dynamicsnippet.internalValue = value;
  }
  public resetDynamicsnippet() {
    this._dynamicsnippet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicsnippetInput() {
    return this._dynamicsnippet.internalValue;
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip = new ServiceVclGzipList(this, "gzip", true);
  public get gzip() {
    return this._gzip;
  }
  public putGzip(value: ServiceVclGzip[] | cdktf.IResolvable) {
    this._gzip.internalValue = value;
  }
  public resetGzip() {
    this._gzip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ServiceVclHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: ServiceVclHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new ServiceVclHealthcheckList(this, "healthcheck", true);
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: ServiceVclHealthcheck[] | cdktf.IResolvable) {
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
  private _imageOptimizerDefaultSettings = new ServiceVclImageOptimizerDefaultSettingsOutputReference(this, "image_optimizer_default_settings");
  public get imageOptimizerDefaultSettings() {
    return this._imageOptimizerDefaultSettings;
  }
  public putImageOptimizerDefaultSettings(value: ServiceVclImageOptimizerDefaultSettings) {
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
  private _loggingBigquery = new ServiceVclLoggingBigqueryList(this, "logging_bigquery", true);
  public get loggingBigquery() {
    return this._loggingBigquery;
  }
  public putLoggingBigquery(value: ServiceVclLoggingBigquery[] | cdktf.IResolvable) {
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
  private _loggingBlobstorage = new ServiceVclLoggingBlobstorageList(this, "logging_blobstorage", true);
  public get loggingBlobstorage() {
    return this._loggingBlobstorage;
  }
  public putLoggingBlobstorage(value: ServiceVclLoggingBlobstorage[] | cdktf.IResolvable) {
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
  private _loggingCloudfiles = new ServiceVclLoggingCloudfilesList(this, "logging_cloudfiles", true);
  public get loggingCloudfiles() {
    return this._loggingCloudfiles;
  }
  public putLoggingCloudfiles(value: ServiceVclLoggingCloudfiles[] | cdktf.IResolvable) {
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
  private _loggingDatadog = new ServiceVclLoggingDatadogList(this, "logging_datadog", true);
  public get loggingDatadog() {
    return this._loggingDatadog;
  }
  public putLoggingDatadog(value: ServiceVclLoggingDatadog[] | cdktf.IResolvable) {
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
  private _loggingDigitalocean = new ServiceVclLoggingDigitaloceanList(this, "logging_digitalocean", true);
  public get loggingDigitalocean() {
    return this._loggingDigitalocean;
  }
  public putLoggingDigitalocean(value: ServiceVclLoggingDigitalocean[] | cdktf.IResolvable) {
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
  private _loggingElasticsearch = new ServiceVclLoggingElasticsearchList(this, "logging_elasticsearch", true);
  public get loggingElasticsearch() {
    return this._loggingElasticsearch;
  }
  public putLoggingElasticsearch(value: ServiceVclLoggingElasticsearch[] | cdktf.IResolvable) {
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
  private _loggingFtp = new ServiceVclLoggingFtpList(this, "logging_ftp", true);
  public get loggingFtp() {
    return this._loggingFtp;
  }
  public putLoggingFtp(value: ServiceVclLoggingFtp[] | cdktf.IResolvable) {
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
  private _loggingGcs = new ServiceVclLoggingGcsList(this, "logging_gcs", true);
  public get loggingGcs() {
    return this._loggingGcs;
  }
  public putLoggingGcs(value: ServiceVclLoggingGcs[] | cdktf.IResolvable) {
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
  private _loggingGooglepubsub = new ServiceVclLoggingGooglepubsubList(this, "logging_googlepubsub", true);
  public get loggingGooglepubsub() {
    return this._loggingGooglepubsub;
  }
  public putLoggingGooglepubsub(value: ServiceVclLoggingGooglepubsub[] | cdktf.IResolvable) {
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
  private _loggingGrafanacloudlogs = new ServiceVclLoggingGrafanacloudlogsList(this, "logging_grafanacloudlogs", true);
  public get loggingGrafanacloudlogs() {
    return this._loggingGrafanacloudlogs;
  }
  public putLoggingGrafanacloudlogs(value: ServiceVclLoggingGrafanacloudlogs[] | cdktf.IResolvable) {
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
  private _loggingHeroku = new ServiceVclLoggingHerokuList(this, "logging_heroku", true);
  public get loggingHeroku() {
    return this._loggingHeroku;
  }
  public putLoggingHeroku(value: ServiceVclLoggingHeroku[] | cdktf.IResolvable) {
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
  private _loggingHoneycomb = new ServiceVclLoggingHoneycombList(this, "logging_honeycomb", true);
  public get loggingHoneycomb() {
    return this._loggingHoneycomb;
  }
  public putLoggingHoneycomb(value: ServiceVclLoggingHoneycomb[] | cdktf.IResolvable) {
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
  private _loggingHttps = new ServiceVclLoggingHttpsList(this, "logging_https", true);
  public get loggingHttps() {
    return this._loggingHttps;
  }
  public putLoggingHttps(value: ServiceVclLoggingHttps[] | cdktf.IResolvable) {
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
  private _loggingKafka = new ServiceVclLoggingKafkaList(this, "logging_kafka", true);
  public get loggingKafka() {
    return this._loggingKafka;
  }
  public putLoggingKafka(value: ServiceVclLoggingKafka[] | cdktf.IResolvable) {
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
  private _loggingKinesis = new ServiceVclLoggingKinesisList(this, "logging_kinesis", true);
  public get loggingKinesis() {
    return this._loggingKinesis;
  }
  public putLoggingKinesis(value: ServiceVclLoggingKinesis[] | cdktf.IResolvable) {
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
  private _loggingLogentries = new ServiceVclLoggingLogentriesList(this, "logging_logentries", true);
  public get loggingLogentries() {
    return this._loggingLogentries;
  }
  public putLoggingLogentries(value: ServiceVclLoggingLogentries[] | cdktf.IResolvable) {
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
  private _loggingLoggly = new ServiceVclLoggingLogglyList(this, "logging_loggly", true);
  public get loggingLoggly() {
    return this._loggingLoggly;
  }
  public putLoggingLoggly(value: ServiceVclLoggingLoggly[] | cdktf.IResolvable) {
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
  private _loggingLogshuttle = new ServiceVclLoggingLogshuttleList(this, "logging_logshuttle", true);
  public get loggingLogshuttle() {
    return this._loggingLogshuttle;
  }
  public putLoggingLogshuttle(value: ServiceVclLoggingLogshuttle[] | cdktf.IResolvable) {
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
  private _loggingNewrelic = new ServiceVclLoggingNewrelicList(this, "logging_newrelic", true);
  public get loggingNewrelic() {
    return this._loggingNewrelic;
  }
  public putLoggingNewrelic(value: ServiceVclLoggingNewrelic[] | cdktf.IResolvable) {
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
  private _loggingNewrelicotlp = new ServiceVclLoggingNewrelicotlpList(this, "logging_newrelicotlp", true);
  public get loggingNewrelicotlp() {
    return this._loggingNewrelicotlp;
  }
  public putLoggingNewrelicotlp(value: ServiceVclLoggingNewrelicotlp[] | cdktf.IResolvable) {
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
  private _loggingOpenstack = new ServiceVclLoggingOpenstackList(this, "logging_openstack", true);
  public get loggingOpenstack() {
    return this._loggingOpenstack;
  }
  public putLoggingOpenstack(value: ServiceVclLoggingOpenstack[] | cdktf.IResolvable) {
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
  private _loggingPapertrail = new ServiceVclLoggingPapertrailList(this, "logging_papertrail", true);
  public get loggingPapertrail() {
    return this._loggingPapertrail;
  }
  public putLoggingPapertrail(value: ServiceVclLoggingPapertrail[] | cdktf.IResolvable) {
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
  private _loggingS3 = new ServiceVclLoggingS3List(this, "logging_s3", true);
  public get loggingS3() {
    return this._loggingS3;
  }
  public putLoggingS3(value: ServiceVclLoggingS3[] | cdktf.IResolvable) {
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
  private _loggingScalyr = new ServiceVclLoggingScalyrList(this, "logging_scalyr", true);
  public get loggingScalyr() {
    return this._loggingScalyr;
  }
  public putLoggingScalyr(value: ServiceVclLoggingScalyr[] | cdktf.IResolvable) {
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
  private _loggingSftp = new ServiceVclLoggingSftpList(this, "logging_sftp", true);
  public get loggingSftp() {
    return this._loggingSftp;
  }
  public putLoggingSftp(value: ServiceVclLoggingSftp[] | cdktf.IResolvable) {
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
  private _loggingSplunk = new ServiceVclLoggingSplunkList(this, "logging_splunk", true);
  public get loggingSplunk() {
    return this._loggingSplunk;
  }
  public putLoggingSplunk(value: ServiceVclLoggingSplunk[] | cdktf.IResolvable) {
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
  private _loggingSumologic = new ServiceVclLoggingSumologicList(this, "logging_sumologic", true);
  public get loggingSumologic() {
    return this._loggingSumologic;
  }
  public putLoggingSumologic(value: ServiceVclLoggingSumologic[] | cdktf.IResolvable) {
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
  private _loggingSyslog = new ServiceVclLoggingSyslogList(this, "logging_syslog", true);
  public get loggingSyslog() {
    return this._loggingSyslog;
  }
  public putLoggingSyslog(value: ServiceVclLoggingSyslog[] | cdktf.IResolvable) {
    this._loggingSyslog.internalValue = value;
  }
  public resetLoggingSyslog() {
    this._loggingSyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSyslogInput() {
    return this._loggingSyslog.internalValue;
  }

  // product_enablement - computed: false, optional: true, required: false
  private _productEnablement = new ServiceVclProductEnablementOutputReference(this, "product_enablement");
  public get productEnablement() {
    return this._productEnablement;
  }
  public putProductEnablement(value: ServiceVclProductEnablement) {
    this._productEnablement.internalValue = value;
  }
  public resetProductEnablement() {
    this._productEnablement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productEnablementInput() {
    return this._productEnablement.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ServiceVclRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ServiceVclRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }

  // request_setting - computed: false, optional: true, required: false
  private _requestSetting = new ServiceVclRequestSettingList(this, "request_setting", true);
  public get requestSetting() {
    return this._requestSetting;
  }
  public putRequestSetting(value: ServiceVclRequestSetting[] | cdktf.IResolvable) {
    this._requestSetting.internalValue = value;
  }
  public resetRequestSetting() {
    this._requestSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSettingInput() {
    return this._requestSetting.internalValue;
  }

  // response_object - computed: false, optional: true, required: false
  private _responseObject = new ServiceVclResponseObjectList(this, "response_object", true);
  public get responseObject() {
    return this._responseObject;
  }
  public putResponseObject(value: ServiceVclResponseObject[] | cdktf.IResolvable) {
    this._responseObject.internalValue = value;
  }
  public resetResponseObject() {
    this._responseObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseObjectInput() {
    return this._responseObject.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet = new ServiceVclSnippetList(this, "snippet", true);
  public get snippet() {
    return this._snippet;
  }
  public putSnippet(value: ServiceVclSnippet[] | cdktf.IResolvable) {
    this._snippet.internalValue = value;
  }
  public resetSnippet() {
    this._snippet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet.internalValue;
  }

  // vcl - computed: false, optional: true, required: false
  private _vcl = new ServiceVclVclList(this, "vcl", true);
  public get vcl() {
    return this._vcl;
  }
  public putVcl(value: ServiceVclVcl[] | cdktf.IResolvable) {
    this._vcl.internalValue = value;
  }
  public resetVcl() {
    this._vcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclInput() {
    return this._vcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.booleanToTerraform(this._activate),
      comment: cdktf.stringToTerraform(this._comment),
      default_host: cdktf.stringToTerraform(this._defaultHost),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      http3: cdktf.booleanToTerraform(this._http3),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reuse: cdktf.booleanToTerraform(this._reuse),
      stage: cdktf.booleanToTerraform(this._stage),
      stale_if_error: cdktf.booleanToTerraform(this._staleIfError),
      stale_if_error_ttl: cdktf.numberToTerraform(this._staleIfErrorTtl),
      version_comment: cdktf.stringToTerraform(this._versionComment),
      acl: cdktf.listMapper(serviceVclAclToTerraform, true)(this._acl.internalValue),
      backend: cdktf.listMapper(serviceVclBackendToTerraform, true)(this._backend.internalValue),
      cache_setting: cdktf.listMapper(serviceVclCacheSettingToTerraform, true)(this._cacheSetting.internalValue),
      condition: cdktf.listMapper(serviceVclConditionToTerraform, true)(this._condition.internalValue),
      dictionary: cdktf.listMapper(serviceVclDictionaryToTerraform, true)(this._dictionary.internalValue),
      director: cdktf.listMapper(serviceVclDirectorToTerraform, true)(this._director.internalValue),
      domain: cdktf.listMapper(serviceVclDomainToTerraform, true)(this._domain.internalValue),
      dynamicsnippet: cdktf.listMapper(serviceVclDynamicsnippetToTerraform, true)(this._dynamicsnippet.internalValue),
      gzip: cdktf.listMapper(serviceVclGzipToTerraform, true)(this._gzip.internalValue),
      header: cdktf.listMapper(serviceVclHeaderToTerraform, true)(this._header.internalValue),
      healthcheck: cdktf.listMapper(serviceVclHealthcheckToTerraform, true)(this._healthcheck.internalValue),
      image_optimizer_default_settings: serviceVclImageOptimizerDefaultSettingsToTerraform(this._imageOptimizerDefaultSettings.internalValue),
      logging_bigquery: cdktf.listMapper(serviceVclLoggingBigqueryToTerraform, true)(this._loggingBigquery.internalValue),
      logging_blobstorage: cdktf.listMapper(serviceVclLoggingBlobstorageToTerraform, true)(this._loggingBlobstorage.internalValue),
      logging_cloudfiles: cdktf.listMapper(serviceVclLoggingCloudfilesToTerraform, true)(this._loggingCloudfiles.internalValue),
      logging_datadog: cdktf.listMapper(serviceVclLoggingDatadogToTerraform, true)(this._loggingDatadog.internalValue),
      logging_digitalocean: cdktf.listMapper(serviceVclLoggingDigitaloceanToTerraform, true)(this._loggingDigitalocean.internalValue),
      logging_elasticsearch: cdktf.listMapper(serviceVclLoggingElasticsearchToTerraform, true)(this._loggingElasticsearch.internalValue),
      logging_ftp: cdktf.listMapper(serviceVclLoggingFtpToTerraform, true)(this._loggingFtp.internalValue),
      logging_gcs: cdktf.listMapper(serviceVclLoggingGcsToTerraform, true)(this._loggingGcs.internalValue),
      logging_googlepubsub: cdktf.listMapper(serviceVclLoggingGooglepubsubToTerraform, true)(this._loggingGooglepubsub.internalValue),
      logging_grafanacloudlogs: cdktf.listMapper(serviceVclLoggingGrafanacloudlogsToTerraform, true)(this._loggingGrafanacloudlogs.internalValue),
      logging_heroku: cdktf.listMapper(serviceVclLoggingHerokuToTerraform, true)(this._loggingHeroku.internalValue),
      logging_honeycomb: cdktf.listMapper(serviceVclLoggingHoneycombToTerraform, true)(this._loggingHoneycomb.internalValue),
      logging_https: cdktf.listMapper(serviceVclLoggingHttpsToTerraform, true)(this._loggingHttps.internalValue),
      logging_kafka: cdktf.listMapper(serviceVclLoggingKafkaToTerraform, true)(this._loggingKafka.internalValue),
      logging_kinesis: cdktf.listMapper(serviceVclLoggingKinesisToTerraform, true)(this._loggingKinesis.internalValue),
      logging_logentries: cdktf.listMapper(serviceVclLoggingLogentriesToTerraform, true)(this._loggingLogentries.internalValue),
      logging_loggly: cdktf.listMapper(serviceVclLoggingLogglyToTerraform, true)(this._loggingLoggly.internalValue),
      logging_logshuttle: cdktf.listMapper(serviceVclLoggingLogshuttleToTerraform, true)(this._loggingLogshuttle.internalValue),
      logging_newrelic: cdktf.listMapper(serviceVclLoggingNewrelicToTerraform, true)(this._loggingNewrelic.internalValue),
      logging_newrelicotlp: cdktf.listMapper(serviceVclLoggingNewrelicotlpToTerraform, true)(this._loggingNewrelicotlp.internalValue),
      logging_openstack: cdktf.listMapper(serviceVclLoggingOpenstackToTerraform, true)(this._loggingOpenstack.internalValue),
      logging_papertrail: cdktf.listMapper(serviceVclLoggingPapertrailToTerraform, true)(this._loggingPapertrail.internalValue),
      logging_s3: cdktf.listMapper(serviceVclLoggingS3ToTerraform, true)(this._loggingS3.internalValue),
      logging_scalyr: cdktf.listMapper(serviceVclLoggingScalyrToTerraform, true)(this._loggingScalyr.internalValue),
      logging_sftp: cdktf.listMapper(serviceVclLoggingSftpToTerraform, true)(this._loggingSftp.internalValue),
      logging_splunk: cdktf.listMapper(serviceVclLoggingSplunkToTerraform, true)(this._loggingSplunk.internalValue),
      logging_sumologic: cdktf.listMapper(serviceVclLoggingSumologicToTerraform, true)(this._loggingSumologic.internalValue),
      logging_syslog: cdktf.listMapper(serviceVclLoggingSyslogToTerraform, true)(this._loggingSyslog.internalValue),
      product_enablement: serviceVclProductEnablementToTerraform(this._productEnablement.internalValue),
      rate_limiter: cdktf.listMapper(serviceVclRateLimiterToTerraform, true)(this._rateLimiter.internalValue),
      request_setting: cdktf.listMapper(serviceVclRequestSettingToTerraform, true)(this._requestSetting.internalValue),
      response_object: cdktf.listMapper(serviceVclResponseObjectToTerraform, true)(this._responseObject.internalValue),
      snippet: cdktf.listMapper(serviceVclSnippetToTerraform, true)(this._snippet.internalValue),
      vcl: cdktf.listMapper(serviceVclVclToTerraform, true)(this._vcl.internalValue),
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
      default_host: {
        value: cdktf.stringToHclTerraform(this._defaultHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http3: {
        value: cdktf.booleanToHclTerraform(this._http3),
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
      stale_if_error: {
        value: cdktf.booleanToHclTerraform(this._staleIfError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stale_if_error_ttl: {
        value: cdktf.numberToHclTerraform(this._staleIfErrorTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_comment: {
        value: cdktf.stringToHclTerraform(this._versionComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.listMapperHcl(serviceVclAclToHclTerraform, true)(this._acl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclAclList",
      },
      backend: {
        value: cdktf.listMapperHcl(serviceVclBackendToHclTerraform, true)(this._backend.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclBackendList",
      },
      cache_setting: {
        value: cdktf.listMapperHcl(serviceVclCacheSettingToHclTerraform, true)(this._cacheSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclCacheSettingList",
      },
      condition: {
        value: cdktf.listMapperHcl(serviceVclConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclConditionList",
      },
      dictionary: {
        value: cdktf.listMapperHcl(serviceVclDictionaryToHclTerraform, true)(this._dictionary.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclDictionaryList",
      },
      director: {
        value: cdktf.listMapperHcl(serviceVclDirectorToHclTerraform, true)(this._director.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclDirectorList",
      },
      domain: {
        value: cdktf.listMapperHcl(serviceVclDomainToHclTerraform, true)(this._domain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclDomainList",
      },
      dynamicsnippet: {
        value: cdktf.listMapperHcl(serviceVclDynamicsnippetToHclTerraform, true)(this._dynamicsnippet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclDynamicsnippetList",
      },
      gzip: {
        value: cdktf.listMapperHcl(serviceVclGzipToHclTerraform, true)(this._gzip.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclGzipList",
      },
      header: {
        value: cdktf.listMapperHcl(serviceVclHeaderToHclTerraform, true)(this._header.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclHeaderList",
      },
      healthcheck: {
        value: cdktf.listMapperHcl(serviceVclHealthcheckToHclTerraform, true)(this._healthcheck.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclHealthcheckList",
      },
      image_optimizer_default_settings: {
        value: serviceVclImageOptimizerDefaultSettingsToHclTerraform(this._imageOptimizerDefaultSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclImageOptimizerDefaultSettingsList",
      },
      logging_bigquery: {
        value: cdktf.listMapperHcl(serviceVclLoggingBigqueryToHclTerraform, true)(this._loggingBigquery.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingBigqueryList",
      },
      logging_blobstorage: {
        value: cdktf.listMapperHcl(serviceVclLoggingBlobstorageToHclTerraform, true)(this._loggingBlobstorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingBlobstorageList",
      },
      logging_cloudfiles: {
        value: cdktf.listMapperHcl(serviceVclLoggingCloudfilesToHclTerraform, true)(this._loggingCloudfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingCloudfilesList",
      },
      logging_datadog: {
        value: cdktf.listMapperHcl(serviceVclLoggingDatadogToHclTerraform, true)(this._loggingDatadog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingDatadogList",
      },
      logging_digitalocean: {
        value: cdktf.listMapperHcl(serviceVclLoggingDigitaloceanToHclTerraform, true)(this._loggingDigitalocean.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingDigitaloceanList",
      },
      logging_elasticsearch: {
        value: cdktf.listMapperHcl(serviceVclLoggingElasticsearchToHclTerraform, true)(this._loggingElasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingElasticsearchList",
      },
      logging_ftp: {
        value: cdktf.listMapperHcl(serviceVclLoggingFtpToHclTerraform, true)(this._loggingFtp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingFtpList",
      },
      logging_gcs: {
        value: cdktf.listMapperHcl(serviceVclLoggingGcsToHclTerraform, true)(this._loggingGcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingGcsList",
      },
      logging_googlepubsub: {
        value: cdktf.listMapperHcl(serviceVclLoggingGooglepubsubToHclTerraform, true)(this._loggingGooglepubsub.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingGooglepubsubList",
      },
      logging_grafanacloudlogs: {
        value: cdktf.listMapperHcl(serviceVclLoggingGrafanacloudlogsToHclTerraform, true)(this._loggingGrafanacloudlogs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingGrafanacloudlogsList",
      },
      logging_heroku: {
        value: cdktf.listMapperHcl(serviceVclLoggingHerokuToHclTerraform, true)(this._loggingHeroku.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingHerokuList",
      },
      logging_honeycomb: {
        value: cdktf.listMapperHcl(serviceVclLoggingHoneycombToHclTerraform, true)(this._loggingHoneycomb.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingHoneycombList",
      },
      logging_https: {
        value: cdktf.listMapperHcl(serviceVclLoggingHttpsToHclTerraform, true)(this._loggingHttps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingHttpsList",
      },
      logging_kafka: {
        value: cdktf.listMapperHcl(serviceVclLoggingKafkaToHclTerraform, true)(this._loggingKafka.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingKafkaList",
      },
      logging_kinesis: {
        value: cdktf.listMapperHcl(serviceVclLoggingKinesisToHclTerraform, true)(this._loggingKinesis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingKinesisList",
      },
      logging_logentries: {
        value: cdktf.listMapperHcl(serviceVclLoggingLogentriesToHclTerraform, true)(this._loggingLogentries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingLogentriesList",
      },
      logging_loggly: {
        value: cdktf.listMapperHcl(serviceVclLoggingLogglyToHclTerraform, true)(this._loggingLoggly.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingLogglyList",
      },
      logging_logshuttle: {
        value: cdktf.listMapperHcl(serviceVclLoggingLogshuttleToHclTerraform, true)(this._loggingLogshuttle.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingLogshuttleList",
      },
      logging_newrelic: {
        value: cdktf.listMapperHcl(serviceVclLoggingNewrelicToHclTerraform, true)(this._loggingNewrelic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingNewrelicList",
      },
      logging_newrelicotlp: {
        value: cdktf.listMapperHcl(serviceVclLoggingNewrelicotlpToHclTerraform, true)(this._loggingNewrelicotlp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingNewrelicotlpList",
      },
      logging_openstack: {
        value: cdktf.listMapperHcl(serviceVclLoggingOpenstackToHclTerraform, true)(this._loggingOpenstack.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingOpenstackList",
      },
      logging_papertrail: {
        value: cdktf.listMapperHcl(serviceVclLoggingPapertrailToHclTerraform, true)(this._loggingPapertrail.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingPapertrailList",
      },
      logging_s3: {
        value: cdktf.listMapperHcl(serviceVclLoggingS3ToHclTerraform, true)(this._loggingS3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingS3List",
      },
      logging_scalyr: {
        value: cdktf.listMapperHcl(serviceVclLoggingScalyrToHclTerraform, true)(this._loggingScalyr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingScalyrList",
      },
      logging_sftp: {
        value: cdktf.listMapperHcl(serviceVclLoggingSftpToHclTerraform, true)(this._loggingSftp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingSftpList",
      },
      logging_splunk: {
        value: cdktf.listMapperHcl(serviceVclLoggingSplunkToHclTerraform, true)(this._loggingSplunk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingSplunkList",
      },
      logging_sumologic: {
        value: cdktf.listMapperHcl(serviceVclLoggingSumologicToHclTerraform, true)(this._loggingSumologic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingSumologicList",
      },
      logging_syslog: {
        value: cdktf.listMapperHcl(serviceVclLoggingSyslogToHclTerraform, true)(this._loggingSyslog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclLoggingSyslogList",
      },
      product_enablement: {
        value: serviceVclProductEnablementToHclTerraform(this._productEnablement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclProductEnablementList",
      },
      rate_limiter: {
        value: cdktf.listMapperHcl(serviceVclRateLimiterToHclTerraform, true)(this._rateLimiter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclRateLimiterList",
      },
      request_setting: {
        value: cdktf.listMapperHcl(serviceVclRequestSettingToHclTerraform, true)(this._requestSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclRequestSettingList",
      },
      response_object: {
        value: cdktf.listMapperHcl(serviceVclResponseObjectToHclTerraform, true)(this._responseObject.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclResponseObjectList",
      },
      snippet: {
        value: cdktf.listMapperHcl(serviceVclSnippetToHclTerraform, true)(this._snippet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclSnippetList",
      },
      vcl: {
        value: cdktf.listMapperHcl(serviceVclVclToHclTerraform, true)(this._vcl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceVclVclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
