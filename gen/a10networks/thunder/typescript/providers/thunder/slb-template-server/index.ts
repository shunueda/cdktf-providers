// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Slow start connection limit add by a number every interval (Add by this number every interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#add SlbTemplateServer#add}
  */
  readonly add?: number;
  /**
  * Configure bandwidth rate limit on real server (Bandwidth rate limit in Kbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#bw_rate_limit SlbTemplateServer#bw_rate_limit}
  */
  readonly bwRateLimit?: number;
  /**
  * 'to-server-only': Only account for traffic sent to server; 'from-server-only': Only account for traffic received from server; 'all': Account for all traffic sent to and received from server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#bw_rate_limit_acct SlbTemplateServer#bw_rate_limit_acct}
  */
  readonly bwRateLimitAcct?: string;
  /**
  * Duration in seconds the observed rate needs to honor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#bw_rate_limit_duration SlbTemplateServer#bw_rate_limit_duration}
  */
  readonly bwRateLimitDuration?: number;
  /**
  * Do not log bandwidth rate limit related state transitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#bw_rate_limit_no_logging SlbTemplateServer#bw_rate_limit_no_logging}
  */
  readonly bwRateLimitNoLogging?: number;
  /**
  * Resume server selection after bandwidth drops below this threshold (in Kbps) (Bandwidth rate limit resume threshold (in Kbps))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#bw_rate_limit_resume SlbTemplateServer#bw_rate_limit_resume}
  */
  readonly bwRateLimitResume?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#conn_limit SlbTemplateServer#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#conn_limit_no_logging SlbTemplateServer#conn_limit_no_logging}
  */
  readonly connLimitNoLogging?: number;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#conn_rate_limit SlbTemplateServer#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#conn_rate_limit_no_logging SlbTemplateServer#conn_rate_limit_no_logging}
  */
  readonly connRateLimitNoLogging?: number;
  /**
  * The interval to retry when DNS failed to query (DNS failure interval (in second, default is 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#dns_fail_interval SlbTemplateServer#dns_fail_interval}
  */
  readonly dnsFailInterval?: number;
  /**
  * The interval to query DNS server for the hostname (DNS query interval (in minute, default is 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#dns_query_interval SlbTemplateServer#dns_query_interval}
  */
  readonly dnsQueryInterval?: number;
  /**
  * Prefix of dynamic server (Prefix of dynamic server (default is "DRS"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#dynamic_server_prefix SlbTemplateServer#dynamic_server_prefix}
  */
  readonly dynamicServerPrefix?: string;
  /**
  * Slow start connection limit increment interval (default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#every SlbTemplateServer#every}
  */
  readonly every?: number;
  /**
  * Enable extended statistics on real server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#extended_stats SlbTemplateServer#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * Health Check Monitor (Health monitor name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#health_check SlbTemplateServer#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#health_check_disable SlbTemplateServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#id SlbTemplateServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial slow start connection limit (default 128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#initial_slow_start SlbTemplateServer#initial_slow_start}
  */
  readonly initialSlowStart?: number;
  /**
  * Enable real-time logging for server selection failure event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#log_selection_failure SlbTemplateServer#log_selection_failure}
  */
  readonly logSelectionFailure?: number;
  /**
  * Maximum dynamic server number (Maximum dynamic server number (default is 255))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#max_dynamic_server SlbTemplateServer#max_dynamic_server}
  */
  readonly maxDynamicServer?: number;
  /**
  * Minimum TTL to DNS query interval ratio (Minimum TTL ratio (default is 2))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#min_ttl_ratio SlbTemplateServer#min_ttl_ratio}
  */
  readonly minTtlRatio?: number;
  /**
  * Server template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#name SlbTemplateServer#name}
  */
  readonly name: string;
  /**
  * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#rate_interval SlbTemplateServer#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Resume accepting new connection after connection number drops below threshold (Connection resume threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#resume SlbTemplateServer#resume}
  */
  readonly resume?: number;
  /**
  * Slowly ramp up the connection number after server is up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#slow_start SlbTemplateServer#slow_start}
  */
  readonly slowStart?: number;
  /**
  * Servers under the template are spoofing cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#spoofing_cache SlbTemplateServer#spoofing_cache}
  */
  readonly spoofingCache?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for real server; 'stats-data-disable': Disable statistical data collection for real server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#stats_data_action SlbTemplateServer#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Slow start ends when slow start connection limit reaches a number (default 4096) (Slow start ends when connection limit reaches this number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#till SlbTemplateServer#till}
  */
  readonly till?: number;
  /**
  * Slow start connection limit multiply by a number every interval (default 2) (Multiply by this number every interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#times SlbTemplateServer#times}
  */
  readonly times?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#user_tag SlbTemplateServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#uuid SlbTemplateServer#uuid}
  */
  readonly uuid?: string;
  /**
  * Weight for the Real Servers (Connection Weight (default is 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#weight SlbTemplateServer#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server thunder_slb_template_server}
*/
export class SlbTemplateServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateServer to import
  * @param importFromId The id of the existing SlbTemplateServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_server thunder_slb_template_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateServerConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._add = config.add;
    this._bwRateLimit = config.bwRateLimit;
    this._bwRateLimitAcct = config.bwRateLimitAcct;
    this._bwRateLimitDuration = config.bwRateLimitDuration;
    this._bwRateLimitNoLogging = config.bwRateLimitNoLogging;
    this._bwRateLimitResume = config.bwRateLimitResume;
    this._connLimit = config.connLimit;
    this._connLimitNoLogging = config.connLimitNoLogging;
    this._connRateLimit = config.connRateLimit;
    this._connRateLimitNoLogging = config.connRateLimitNoLogging;
    this._dnsFailInterval = config.dnsFailInterval;
    this._dnsQueryInterval = config.dnsQueryInterval;
    this._dynamicServerPrefix = config.dynamicServerPrefix;
    this._every = config.every;
    this._extendedStats = config.extendedStats;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._id = config.id;
    this._initialSlowStart = config.initialSlowStart;
    this._logSelectionFailure = config.logSelectionFailure;
    this._maxDynamicServer = config.maxDynamicServer;
    this._minTtlRatio = config.minTtlRatio;
    this._name = config.name;
    this._rateInterval = config.rateInterval;
    this._resume = config.resume;
    this._slowStart = config.slowStart;
    this._spoofingCache = config.spoofingCache;
    this._statsDataAction = config.statsDataAction;
    this._till = config.till;
    this._times = config.times;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add - computed: false, optional: true, required: false
  private _add?: number; 
  public get add() {
    return this.getNumberAttribute('add');
  }
  public set add(value: number) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // bw_rate_limit - computed: false, optional: true, required: false
  private _bwRateLimit?: number; 
  public get bwRateLimit() {
    return this.getNumberAttribute('bw_rate_limit');
  }
  public set bwRateLimit(value: number) {
    this._bwRateLimit = value;
  }
  public resetBwRateLimit() {
    this._bwRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitInput() {
    return this._bwRateLimit;
  }

  // bw_rate_limit_acct - computed: false, optional: true, required: false
  private _bwRateLimitAcct?: string; 
  public get bwRateLimitAcct() {
    return this.getStringAttribute('bw_rate_limit_acct');
  }
  public set bwRateLimitAcct(value: string) {
    this._bwRateLimitAcct = value;
  }
  public resetBwRateLimitAcct() {
    this._bwRateLimitAcct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitAcctInput() {
    return this._bwRateLimitAcct;
  }

  // bw_rate_limit_duration - computed: false, optional: true, required: false
  private _bwRateLimitDuration?: number; 
  public get bwRateLimitDuration() {
    return this.getNumberAttribute('bw_rate_limit_duration');
  }
  public set bwRateLimitDuration(value: number) {
    this._bwRateLimitDuration = value;
  }
  public resetBwRateLimitDuration() {
    this._bwRateLimitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitDurationInput() {
    return this._bwRateLimitDuration;
  }

  // bw_rate_limit_no_logging - computed: false, optional: true, required: false
  private _bwRateLimitNoLogging?: number; 
  public get bwRateLimitNoLogging() {
    return this.getNumberAttribute('bw_rate_limit_no_logging');
  }
  public set bwRateLimitNoLogging(value: number) {
    this._bwRateLimitNoLogging = value;
  }
  public resetBwRateLimitNoLogging() {
    this._bwRateLimitNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitNoLoggingInput() {
    return this._bwRateLimitNoLogging;
  }

  // bw_rate_limit_resume - computed: false, optional: true, required: false
  private _bwRateLimitResume?: number; 
  public get bwRateLimitResume() {
    return this.getNumberAttribute('bw_rate_limit_resume');
  }
  public set bwRateLimitResume(value: number) {
    this._bwRateLimitResume = value;
  }
  public resetBwRateLimitResume() {
    this._bwRateLimitResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitResumeInput() {
    return this._bwRateLimitResume;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_limit_no_logging - computed: false, optional: true, required: false
  private _connLimitNoLogging?: number; 
  public get connLimitNoLogging() {
    return this.getNumberAttribute('conn_limit_no_logging');
  }
  public set connLimitNoLogging(value: number) {
    this._connLimitNoLogging = value;
  }
  public resetConnLimitNoLogging() {
    this._connLimitNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitNoLoggingInput() {
    return this._connLimitNoLogging;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit?: number; 
  public get connRateLimit() {
    return this.getNumberAttribute('conn_rate_limit');
  }
  public set connRateLimit(value: number) {
    this._connRateLimit = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit;
  }

  // conn_rate_limit_no_logging - computed: false, optional: true, required: false
  private _connRateLimitNoLogging?: number; 
  public get connRateLimitNoLogging() {
    return this.getNumberAttribute('conn_rate_limit_no_logging');
  }
  public set connRateLimitNoLogging(value: number) {
    this._connRateLimitNoLogging = value;
  }
  public resetConnRateLimitNoLogging() {
    this._connRateLimitNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitNoLoggingInput() {
    return this._connRateLimitNoLogging;
  }

  // dns_fail_interval - computed: false, optional: true, required: false
  private _dnsFailInterval?: number; 
  public get dnsFailInterval() {
    return this.getNumberAttribute('dns_fail_interval');
  }
  public set dnsFailInterval(value: number) {
    this._dnsFailInterval = value;
  }
  public resetDnsFailInterval() {
    this._dnsFailInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFailIntervalInput() {
    return this._dnsFailInterval;
  }

  // dns_query_interval - computed: false, optional: true, required: false
  private _dnsQueryInterval?: number; 
  public get dnsQueryInterval() {
    return this.getNumberAttribute('dns_query_interval');
  }
  public set dnsQueryInterval(value: number) {
    this._dnsQueryInterval = value;
  }
  public resetDnsQueryInterval() {
    this._dnsQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryIntervalInput() {
    return this._dnsQueryInterval;
  }

  // dynamic_server_prefix - computed: false, optional: true, required: false
  private _dynamicServerPrefix?: string; 
  public get dynamicServerPrefix() {
    return this.getStringAttribute('dynamic_server_prefix');
  }
  public set dynamicServerPrefix(value: string) {
    this._dynamicServerPrefix = value;
  }
  public resetDynamicServerPrefix() {
    this._dynamicServerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicServerPrefixInput() {
    return this._dynamicServerPrefix;
  }

  // every - computed: false, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
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

  // initial_slow_start - computed: false, optional: true, required: false
  private _initialSlowStart?: number; 
  public get initialSlowStart() {
    return this.getNumberAttribute('initial_slow_start');
  }
  public set initialSlowStart(value: number) {
    this._initialSlowStart = value;
  }
  public resetInitialSlowStart() {
    this._initialSlowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSlowStartInput() {
    return this._initialSlowStart;
  }

  // log_selection_failure - computed: false, optional: true, required: false
  private _logSelectionFailure?: number; 
  public get logSelectionFailure() {
    return this.getNumberAttribute('log_selection_failure');
  }
  public set logSelectionFailure(value: number) {
    this._logSelectionFailure = value;
  }
  public resetLogSelectionFailure() {
    this._logSelectionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSelectionFailureInput() {
    return this._logSelectionFailure;
  }

  // max_dynamic_server - computed: false, optional: true, required: false
  private _maxDynamicServer?: number; 
  public get maxDynamicServer() {
    return this.getNumberAttribute('max_dynamic_server');
  }
  public set maxDynamicServer(value: number) {
    this._maxDynamicServer = value;
  }
  public resetMaxDynamicServer() {
    this._maxDynamicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicServerInput() {
    return this._maxDynamicServer;
  }

  // min_ttl_ratio - computed: false, optional: true, required: false
  private _minTtlRatio?: number; 
  public get minTtlRatio() {
    return this.getNumberAttribute('min_ttl_ratio');
  }
  public set minTtlRatio(value: number) {
    this._minTtlRatio = value;
  }
  public resetMinTtlRatio() {
    this._minTtlRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlRatioInput() {
    return this._minTtlRatio;
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

  // rate_interval - computed: false, optional: true, required: false
  private _rateInterval?: string; 
  public get rateInterval() {
    return this.getStringAttribute('rate_interval');
  }
  public set rateInterval(value: string) {
    this._rateInterval = value;
  }
  public resetRateInterval() {
    this._rateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIntervalInput() {
    return this._rateInterval;
  }

  // resume - computed: false, optional: true, required: false
  private _resume?: number; 
  public get resume() {
    return this.getNumberAttribute('resume');
  }
  public set resume(value: number) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: number; 
  public get slowStart() {
    return this.getNumberAttribute('slow_start');
  }
  public set slowStart(value: number) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart;
  }

  // spoofing_cache - computed: false, optional: true, required: false
  private _spoofingCache?: number; 
  public get spoofingCache() {
    return this.getNumberAttribute('spoofing_cache');
  }
  public set spoofingCache(value: number) {
    this._spoofingCache = value;
  }
  public resetSpoofingCache() {
    this._spoofingCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofingCacheInput() {
    return this._spoofingCache;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // till - computed: false, optional: true, required: false
  private _till?: number; 
  public get till() {
    return this.getNumberAttribute('till');
  }
  public set till(value: number) {
    this._till = value;
  }
  public resetTill() {
    this._till = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tillInput() {
    return this._till;
  }

  // times - computed: false, optional: true, required: false
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add: cdktf.numberToTerraform(this._add),
      bw_rate_limit: cdktf.numberToTerraform(this._bwRateLimit),
      bw_rate_limit_acct: cdktf.stringToTerraform(this._bwRateLimitAcct),
      bw_rate_limit_duration: cdktf.numberToTerraform(this._bwRateLimitDuration),
      bw_rate_limit_no_logging: cdktf.numberToTerraform(this._bwRateLimitNoLogging),
      bw_rate_limit_resume: cdktf.numberToTerraform(this._bwRateLimitResume),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_limit_no_logging: cdktf.numberToTerraform(this._connLimitNoLogging),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      conn_rate_limit_no_logging: cdktf.numberToTerraform(this._connRateLimitNoLogging),
      dns_fail_interval: cdktf.numberToTerraform(this._dnsFailInterval),
      dns_query_interval: cdktf.numberToTerraform(this._dnsQueryInterval),
      dynamic_server_prefix: cdktf.stringToTerraform(this._dynamicServerPrefix),
      every: cdktf.numberToTerraform(this._every),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      id: cdktf.stringToTerraform(this._id),
      initial_slow_start: cdktf.numberToTerraform(this._initialSlowStart),
      log_selection_failure: cdktf.numberToTerraform(this._logSelectionFailure),
      max_dynamic_server: cdktf.numberToTerraform(this._maxDynamicServer),
      min_ttl_ratio: cdktf.numberToTerraform(this._minTtlRatio),
      name: cdktf.stringToTerraform(this._name),
      rate_interval: cdktf.stringToTerraform(this._rateInterval),
      resume: cdktf.numberToTerraform(this._resume),
      slow_start: cdktf.numberToTerraform(this._slowStart),
      spoofing_cache: cdktf.numberToTerraform(this._spoofingCache),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      till: cdktf.numberToTerraform(this._till),
      times: cdktf.numberToTerraform(this._times),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add: {
        value: cdktf.numberToHclTerraform(this._add),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit: {
        value: cdktf.numberToHclTerraform(this._bwRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit_acct: {
        value: cdktf.stringToHclTerraform(this._bwRateLimitAcct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bw_rate_limit_duration: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit_no_logging: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit_resume: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitResume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit_no_logging: {
        value: cdktf.numberToHclTerraform(this._connLimitNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_no_logging: {
        value: cdktf.numberToHclTerraform(this._connRateLimitNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_fail_interval: {
        value: cdktf.numberToHclTerraform(this._dnsFailInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_query_interval: {
        value: cdktf.numberToHclTerraform(this._dnsQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_server_prefix: {
        value: cdktf.stringToHclTerraform(this._dynamicServerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      every: {
        value: cdktf.numberToHclTerraform(this._every),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_slow_start: {
        value: cdktf.numberToHclTerraform(this._initialSlowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_selection_failure: {
        value: cdktf.numberToHclTerraform(this._logSelectionFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_dynamic_server: {
        value: cdktf.numberToHclTerraform(this._maxDynamicServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ttl_ratio: {
        value: cdktf.numberToHclTerraform(this._minTtlRatio),
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
      rate_interval: {
        value: cdktf.stringToHclTerraform(this._rateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resume: {
        value: cdktf.numberToHclTerraform(this._resume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slow_start: {
        value: cdktf.numberToHclTerraform(this._slowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoofing_cache: {
        value: cdktf.numberToHclTerraform(this._spoofingCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      till: {
        value: cdktf.numberToHclTerraform(this._till),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      times: {
        value: cdktf.numberToHclTerraform(this._times),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
