// https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data region or private cluster name to create the source in. Permitted values for most plans are: `us_east`, `us_west`, `germany`, `singapore`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#data_region Source#data_region}
  */
  readonly dataRegion?: string;
  /**
  * This property allows you to temporarily pause data ingesting for this source (e.g., when you are reaching your plan's usage quota and you want to prioritize some sources over others).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#ingesting_paused Source#ingesting_paused}
  */
  readonly ingestingPaused?: boolean | cdktf.IResolvable;
  /**
  * Freeform text template for formatting Live tail output with columns wrapped in {column} brackets. Example: "PID: {message_json.pid} {level} {message}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#live_tail_pattern Source#live_tail_pattern}
  */
  readonly liveTailPattern?: string;
  /**
  * Data retention for logs in days. There might be additional charges for longer retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#logs_retention Source#logs_retention}
  */
  readonly logsRetention?: number;
  /**
  * Data retention for metrics in days. There might be additional charges for longer retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#metrics_retention Source#metrics_retention}
  */
  readonly metricsRetention?: number;
  /**
  * The name of this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#name Source#name}
  */
  readonly name: string;
  /**
  * The platform of this source. This value can be set only when you're creating a new source. You can't update this value later. Valid values are:
  *     - `apache2`
  *     - `aws_cloudwatch`
  *     - `aws_ecs`
  *     - `aws_elb`
  *     - `aws_fargate`
  *     - `azure_logs`
  *     - `cloudflare_logpush`
  *     - `cloudflare_worker`
  *     - `datadog_agent`
  *     - `digitalocean`
  *     - `docker`
  *     - `dokku`
  *     - `dotnet`
  *     - `elasticsearch`
  *     - `erlang`
  *     - `filebeat`
  *     - `flights`
  *     - `fluentbit`
  *     - `fluentd`
  *     - `fly_io`
  *     - `go`
  *     - `google_cloud_pubsub`
  *     - `haproxy`
  *     - `heroku`
  *     - `http`
  *     - `java`
  *     - `javascript`
  *     - `kubernetes`
  *     - `logstash`
  *     - `minio`
  *     - `mongodb`
  *     - `mysql`
  *     - `nginx`
  *     - `open_telemetry`
  *     - `php`
  *     - `postgresql`
  *     - `prometheus`
  *     - `prometheus_scrape`
  *     - `python`
  *     - `rabbitmq`
  *     - `redis`
  *     - `render`
  *     - `rsyslog`
  *     - `ruby`
  *     - `syslog-ng`
  *     - `traefik`
  *     - `ubuntu`
  *     - `vector`
  *     - `vercel_integration`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#platform Source#platform}
  */
  readonly platform: string;
  /**
  * For scrape platform types, how often to scrape the URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#scrape_frequency_secs Source#scrape_frequency_secs}
  */
  readonly scrapeFrequencySecs?: number;
  /**
  * Basic auth password for scraping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#scrape_request_basic_auth_password Source#scrape_request_basic_auth_password}
  */
  readonly scrapeRequestBasicAuthPassword?: string;
  /**
  * Basic auth username for scraping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#scrape_request_basic_auth_user Source#scrape_request_basic_auth_user}
  */
  readonly scrapeRequestBasicAuthUser?: string;
  /**
  * An array of request headers, each containing `name` and `value` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#scrape_request_headers Source#scrape_request_headers}
  */
  readonly scrapeRequestHeaders?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * For scrape platform types, the set of urls to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#scrape_urls Source#scrape_urls}
  */
  readonly scrapeUrls?: string[];
  /**
  * The ID of the source group this source belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#source_group_id Source#source_group_id}
  */
  readonly sourceGroupId?: number;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#team_name Source#team_name}
  */
  readonly teamName?: string;
  /**
  * The VRL code that's used to transform events. Read more about [VRL transformations](https://betterstack.com/docs/logs/using-logtail/transforming-ingested-data/logs-vrl/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#vrl_transformation Source#vrl_transformation}
  */
  readonly vrlTransformation?: string;
  /**
  * custom_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#custom_bucket Source#custom_bucket}
  */
  readonly customBucket?: SourceCustomBucket;
}
export interface SourceCustomBucket {
  /**
  * Access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#access_key_id Source#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Bucket endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#endpoint Source#endpoint}
  */
  readonly endpoint: string;
  /**
  * Whether we should keep data in the bucket after the retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#keep_data_after_retention Source#keep_data_after_retention}
  */
  readonly keepDataAfterRetention?: boolean | cdktf.IResolvable;
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#name Source#name}
  */
  readonly name: string;
  /**
  * Secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#secret_access_key Source#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function sourceCustomBucketToTerraform(struct?: SourceCustomBucketOutputReference | SourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    keep_data_after_retention: cdktf.booleanToTerraform(struct!.keepDataAfterRetention),
    name: cdktf.stringToTerraform(struct!.name),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function sourceCustomBucketToHclTerraform(struct?: SourceCustomBucketOutputReference | SourceCustomBucket): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_data_after_retention: {
      value: cdktf.booleanToHclTerraform(struct!.keepDataAfterRetention),
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
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceCustomBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceCustomBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._keepDataAfterRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDataAfterRetention = this._keepDataAfterRetention;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceCustomBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._endpoint = undefined;
      this._keepDataAfterRetention = undefined;
      this._name = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._endpoint = value.endpoint;
      this._keepDataAfterRetention = value.keepDataAfterRetention;
      this._name = value.name;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // keep_data_after_retention - computed: false, optional: true, required: false
  private _keepDataAfterRetention?: boolean | cdktf.IResolvable; 
  public get keepDataAfterRetention() {
    return this.getBooleanAttribute('keep_data_after_retention');
  }
  public set keepDataAfterRetention(value: boolean | cdktf.IResolvable) {
    this._keepDataAfterRetention = value;
  }
  public resetKeepDataAfterRetention() {
    this._keepDataAfterRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDataAfterRetentionInput() {
    return this._keepDataAfterRetention;
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

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source logtail_source}
*/
export class Source extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Source resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Source to import
  * @param importFromId The id of the existing Source that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Source to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/source logtail_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceConfig
  */
  public constructor(scope: Construct, id: string, config: SourceConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_source',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.6.4',
        providerVersionConstraint: '0.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataRegion = config.dataRegion;
    this._ingestingPaused = config.ingestingPaused;
    this._liveTailPattern = config.liveTailPattern;
    this._logsRetention = config.logsRetention;
    this._metricsRetention = config.metricsRetention;
    this._name = config.name;
    this._platform = config.platform;
    this._scrapeFrequencySecs = config.scrapeFrequencySecs;
    this._scrapeRequestBasicAuthPassword = config.scrapeRequestBasicAuthPassword;
    this._scrapeRequestBasicAuthUser = config.scrapeRequestBasicAuthUser;
    this._scrapeRequestHeaders = config.scrapeRequestHeaders;
    this._scrapeUrls = config.scrapeUrls;
    this._sourceGroupId = config.sourceGroupId;
    this._teamName = config.teamName;
    this._vrlTransformation = config.vrlTransformation;
    this._customBucket.internalValue = config.customBucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_region - computed: true, optional: true, required: false
  private _dataRegion?: string; 
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }
  public set dataRegion(value: string) {
    this._dataRegion = value;
  }
  public resetDataRegion() {
    this._dataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRegionInput() {
    return this._dataRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingesting_host - computed: true, optional: false, required: false
  public get ingestingHost() {
    return this.getStringAttribute('ingesting_host');
  }

  // ingesting_paused - computed: true, optional: true, required: false
  private _ingestingPaused?: boolean | cdktf.IResolvable; 
  public get ingestingPaused() {
    return this.getBooleanAttribute('ingesting_paused');
  }
  public set ingestingPaused(value: boolean | cdktf.IResolvable) {
    this._ingestingPaused = value;
  }
  public resetIngestingPaused() {
    this._ingestingPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestingPausedInput() {
    return this._ingestingPaused;
  }

  // live_tail_pattern - computed: true, optional: true, required: false
  private _liveTailPattern?: string; 
  public get liveTailPattern() {
    return this.getStringAttribute('live_tail_pattern');
  }
  public set liveTailPattern(value: string) {
    this._liveTailPattern = value;
  }
  public resetLiveTailPattern() {
    this._liveTailPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTailPatternInput() {
    return this._liveTailPattern;
  }

  // logs_retention - computed: true, optional: true, required: false
  private _logsRetention?: number; 
  public get logsRetention() {
    return this.getNumberAttribute('logs_retention');
  }
  public set logsRetention(value: number) {
    this._logsRetention = value;
  }
  public resetLogsRetention() {
    this._logsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsRetentionInput() {
    return this._logsRetention;
  }

  // metrics_retention - computed: true, optional: true, required: false
  private _metricsRetention?: number; 
  public get metricsRetention() {
    return this.getNumberAttribute('metrics_retention');
  }
  public set metricsRetention(value: number) {
    this._metricsRetention = value;
  }
  public resetMetricsRetention() {
    this._metricsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRetentionInput() {
    return this._metricsRetention;
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // scrape_frequency_secs - computed: false, optional: true, required: false
  private _scrapeFrequencySecs?: number; 
  public get scrapeFrequencySecs() {
    return this.getNumberAttribute('scrape_frequency_secs');
  }
  public set scrapeFrequencySecs(value: number) {
    this._scrapeFrequencySecs = value;
  }
  public resetScrapeFrequencySecs() {
    this._scrapeFrequencySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeFrequencySecsInput() {
    return this._scrapeFrequencySecs;
  }

  // scrape_request_basic_auth_password - computed: false, optional: true, required: false
  private _scrapeRequestBasicAuthPassword?: string; 
  public get scrapeRequestBasicAuthPassword() {
    return this.getStringAttribute('scrape_request_basic_auth_password');
  }
  public set scrapeRequestBasicAuthPassword(value: string) {
    this._scrapeRequestBasicAuthPassword = value;
  }
  public resetScrapeRequestBasicAuthPassword() {
    this._scrapeRequestBasicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeRequestBasicAuthPasswordInput() {
    return this._scrapeRequestBasicAuthPassword;
  }

  // scrape_request_basic_auth_user - computed: false, optional: true, required: false
  private _scrapeRequestBasicAuthUser?: string; 
  public get scrapeRequestBasicAuthUser() {
    return this.getStringAttribute('scrape_request_basic_auth_user');
  }
  public set scrapeRequestBasicAuthUser(value: string) {
    this._scrapeRequestBasicAuthUser = value;
  }
  public resetScrapeRequestBasicAuthUser() {
    this._scrapeRequestBasicAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeRequestBasicAuthUserInput() {
    return this._scrapeRequestBasicAuthUser;
  }

  // scrape_request_headers - computed: false, optional: true, required: false
  private _scrapeRequestHeaders?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get scrapeRequestHeaders() {
    return this.interpolationForAttribute('scrape_request_headers');
  }
  public set scrapeRequestHeaders(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._scrapeRequestHeaders = value;
  }
  public resetScrapeRequestHeaders() {
    this._scrapeRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeRequestHeadersInput() {
    return this._scrapeRequestHeaders;
  }

  // scrape_urls - computed: false, optional: true, required: false
  private _scrapeUrls?: string[]; 
  public get scrapeUrls() {
    return this.getListAttribute('scrape_urls');
  }
  public set scrapeUrls(value: string[]) {
    this._scrapeUrls = value;
  }
  public resetScrapeUrls() {
    this._scrapeUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeUrlsInput() {
    return this._scrapeUrls;
  }

  // source_group_id - computed: false, optional: true, required: false
  private _sourceGroupId?: number; 
  public get sourceGroupId() {
    return this.getNumberAttribute('source_group_id');
  }
  public set sourceGroupId(value: number) {
    this._sourceGroupId = value;
  }
  public resetSourceGroupId() {
    this._sourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupIdInput() {
    return this._sourceGroupId;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vrl_transformation - computed: false, optional: true, required: false
  private _vrlTransformation?: string; 
  public get vrlTransformation() {
    return this.getStringAttribute('vrl_transformation');
  }
  public set vrlTransformation(value: string) {
    this._vrlTransformation = value;
  }
  public resetVrlTransformation() {
    this._vrlTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrlTransformationInput() {
    return this._vrlTransformation;
  }

  // custom_bucket - computed: false, optional: true, required: false
  private _customBucket = new SourceCustomBucketOutputReference(this, "custom_bucket");
  public get customBucket() {
    return this._customBucket;
  }
  public putCustomBucket(value: SourceCustomBucket) {
    this._customBucket.internalValue = value;
  }
  public resetCustomBucket() {
    this._customBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBucketInput() {
    return this._customBucket.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_region: cdktf.stringToTerraform(this._dataRegion),
      ingesting_paused: cdktf.booleanToTerraform(this._ingestingPaused),
      live_tail_pattern: cdktf.stringToTerraform(this._liveTailPattern),
      logs_retention: cdktf.numberToTerraform(this._logsRetention),
      metrics_retention: cdktf.numberToTerraform(this._metricsRetention),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      scrape_frequency_secs: cdktf.numberToTerraform(this._scrapeFrequencySecs),
      scrape_request_basic_auth_password: cdktf.stringToTerraform(this._scrapeRequestBasicAuthPassword),
      scrape_request_basic_auth_user: cdktf.stringToTerraform(this._scrapeRequestBasicAuthUser),
      scrape_request_headers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._scrapeRequestHeaders),
      scrape_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scrapeUrls),
      source_group_id: cdktf.numberToTerraform(this._sourceGroupId),
      team_name: cdktf.stringToTerraform(this._teamName),
      vrl_transformation: cdktf.stringToTerraform(this._vrlTransformation),
      custom_bucket: sourceCustomBucketToTerraform(this._customBucket.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_region: {
        value: cdktf.stringToHclTerraform(this._dataRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingesting_paused: {
        value: cdktf.booleanToHclTerraform(this._ingestingPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_tail_pattern: {
        value: cdktf.stringToHclTerraform(this._liveTailPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_retention: {
        value: cdktf.numberToHclTerraform(this._logsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_retention: {
        value: cdktf.numberToHclTerraform(this._metricsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_frequency_secs: {
        value: cdktf.numberToHclTerraform(this._scrapeFrequencySecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scrape_request_basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._scrapeRequestBasicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_request_basic_auth_user: {
        value: cdktf.stringToHclTerraform(this._scrapeRequestBasicAuthUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_request_headers: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._scrapeRequestHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      scrape_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scrapeUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_group_id: {
        value: cdktf.numberToHclTerraform(this._sourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrl_transformation: {
        value: cdktf.stringToHclTerraform(this._vrlTransformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_bucket: {
        value: sourceCustomBucketToHclTerraform(this._customBucket.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceCustomBucketList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
