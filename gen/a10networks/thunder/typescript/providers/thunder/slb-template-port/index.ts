// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Slow start connection limit add by a number every interval (Add by this number every interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#add SlbTemplatePort#add}
  */
  readonly add?: number;
  /**
  * Configure bandwidth rate limit on real server port (Bandwidth rate limit in Kbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#bw_rate_limit SlbTemplatePort#bw_rate_limit}
  */
  readonly bwRateLimit?: number;
  /**
  * Duration in seconds the observed rate needs to honor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#bw_rate_limit_duration SlbTemplatePort#bw_rate_limit_duration}
  */
  readonly bwRateLimitDuration?: number;
  /**
  * Do not log bandwidth rate limit related state transitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#bw_rate_limit_no_logging SlbTemplatePort#bw_rate_limit_no_logging}
  */
  readonly bwRateLimitNoLogging?: number;
  /**
  * Resume server selection after bandwidth drops below this threshold (in Kbps) (Bandwidth rate limit resume threshold (in Kbps))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#bw_rate_limit_resume SlbTemplatePort#bw_rate_limit_resume}
  */
  readonly bwRateLimitResume?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#conn_limit SlbTemplatePort#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#conn_limit_no_logging SlbTemplatePort#conn_limit_no_logging}
  */
  readonly connLimitNoLogging?: number;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#conn_rate_limit SlbTemplatePort#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#conn_rate_limit_no_logging SlbTemplatePort#conn_rate_limit_no_logging}
  */
  readonly connRateLimitNoLogging?: number;
  /**
  * service dampening flaps count (max-flaps allowed in flap period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#dampening_flaps SlbTemplatePort#dampening_flaps}
  */
  readonly dampeningFlaps?: number;
  /**
  * Decrease after every round of DNS query (default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#decrement SlbTemplatePort#decrement}
  */
  readonly decrement?: number;
  /**
  * Delete session if the server/port goes down (either disabled/hm down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#del_session_on_server_down SlbTemplatePort#del_session_on_server_down}
  */
  readonly delSessionOnServerDown?: number;
  /**
  * Destination NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#dest_nat SlbTemplatePort#dest_nat}
  */
  readonly destNat?: number;
  /**
  * Port down grace period (Down grace period in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#down_grace_period SlbTemplatePort#down_grace_period}
  */
  readonly downGracePeriod?: number;
  /**
  * The timer to bring the marked down server/port to up (default is 0, never bring up) (The timer to bring up server (in second, default is 0))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#down_timer SlbTemplatePort#down_timer}
  */
  readonly downTimer?: number;
  /**
  * Differentiated Services Code Point (DSCP to Real Server IP Mapping Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#dscp SlbTemplatePort#dscp}
  */
  readonly dscp?: number;
  /**
  * Set dynamic member's priority (Initial priority (default is 16))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#dynamic_member_priority SlbTemplatePort#dynamic_member_priority}
  */
  readonly dynamicMemberPriority?: number;
  /**
  * Slow start connection limit increment interval (default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#every SlbTemplatePort#every}
  */
  readonly every?: number;
  /**
  * Enable extended statistics on real server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#extended_stats SlbTemplatePort#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * take service out of rotation if max-flaps exceeded within time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#flap_period SlbTemplatePort#flap_period}
  */
  readonly flapPeriod?: number;
  /**
  * Health Check Monitor (Health monitor name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#health_check SlbTemplatePort#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#health_check_disable SlbTemplatePort#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#id SlbTemplatePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use inband traffic to detect port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#inband_health_check SlbTemplatePort#inband_health_check}
  */
  readonly inbandHealthCheck?: number;
  /**
  * Initial slow start connection limit (default 128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#initial_slow_start SlbTemplatePort#initial_slow_start}
  */
  readonly initialSlowStart?: number;
  /**
  * Port template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#name SlbTemplatePort#name}
  */
  readonly name: string;
  /**
  * No SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#no_ssl SlbTemplatePort#no_ssl}
  */
  readonly noSsl?: number;
  /**
  * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#rate_interval SlbTemplatePort#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Maximum reassign times before declear the server/port down (default is 25) (The maximum reassign number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#reassign SlbTemplatePort#reassign}
  */
  readonly reassign?: number;
  /**
  * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#request_rate_interval SlbTemplatePort#request_rate_interval}
  */
  readonly requestRateInterval?: string;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#request_rate_limit SlbTemplatePort#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#request_rate_no_logging SlbTemplatePort#request_rate_no_logging}
  */
  readonly requestRateNoLogging?: number;
  /**
  * When receiving reset from server, do the server/port reselection (default is 0, don't do reselection)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#resel_on_reset SlbTemplatePort#resel_on_reset}
  */
  readonly reselOnReset?: number;
  /**
  * Send client reset when connection rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#reset SlbTemplatePort#reset}
  */
  readonly reset?: number;
  /**
  * put the service back to the rotation after time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#restore_svc_time SlbTemplatePort#restore_svc_time}
  */
  readonly restoreSvcTime?: number;
  /**
  * Resume accepting new connection after connection number drops below threshold (Connection resume threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#resume SlbTemplatePort#resume}
  */
  readonly resume?: number;
  /**
  * Maximum retry times before reassign this connection to another server/port (default is 2) (The maximum retry number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#retry SlbTemplatePort#retry}
  */
  readonly retry?: number;
  /**
  * Reference a NAT pool or pool-group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#shared_partition_pool SlbTemplatePort#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Slowly ramp up the connection number after port is up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#slow_start SlbTemplatePort#slow_start}
  */
  readonly slowStart?: number;
  /**
  * Source NAT (IP NAT Pool or pool group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#source_nat SlbTemplatePort#source_nat}
  */
  readonly sourceNat?: string;
  /**
  * 'stats-data-enable': Enable statistical data collection for real server port; 'stats-data-disable': Disable statistical data collection for real server port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#stats_data_action SlbTemplatePort#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Divide service group members into different sub groups (Sub group ID (default is 0))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#sub_group SlbTemplatePort#sub_group}
  */
  readonly subGroup?: number;
  /**
  * Source NAT (IP NAT Pool or pool group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#template_port_pool_shared SlbTemplatePort#template_port_pool_shared}
  */
  readonly templatePortPoolShared?: string;
  /**
  * Slow start ends when slow start connection limit reaches a number (default 4096) (Slow start ends when connection limit reaches this number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#till SlbTemplatePort#till}
  */
  readonly till?: number;
  /**
  * Slow start connection limit multiply by a number every interval (default 2) (Multiply by this number every interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#times SlbTemplatePort#times}
  */
  readonly times?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#user_tag SlbTemplatePort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#uuid SlbTemplatePort#uuid}
  */
  readonly uuid?: string;
  /**
  * Weight (port weight)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#weight SlbTemplatePort#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port thunder_slb_template_port}
*/
export class SlbTemplatePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePort to import
  * @param importFromId The id of the existing SlbTemplatePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_port thunder_slb_template_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePortConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_port',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._bwRateLimitDuration = config.bwRateLimitDuration;
    this._bwRateLimitNoLogging = config.bwRateLimitNoLogging;
    this._bwRateLimitResume = config.bwRateLimitResume;
    this._connLimit = config.connLimit;
    this._connLimitNoLogging = config.connLimitNoLogging;
    this._connRateLimit = config.connRateLimit;
    this._connRateLimitNoLogging = config.connRateLimitNoLogging;
    this._dampeningFlaps = config.dampeningFlaps;
    this._decrement = config.decrement;
    this._delSessionOnServerDown = config.delSessionOnServerDown;
    this._destNat = config.destNat;
    this._downGracePeriod = config.downGracePeriod;
    this._downTimer = config.downTimer;
    this._dscp = config.dscp;
    this._dynamicMemberPriority = config.dynamicMemberPriority;
    this._every = config.every;
    this._extendedStats = config.extendedStats;
    this._flapPeriod = config.flapPeriod;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._id = config.id;
    this._inbandHealthCheck = config.inbandHealthCheck;
    this._initialSlowStart = config.initialSlowStart;
    this._name = config.name;
    this._noSsl = config.noSsl;
    this._rateInterval = config.rateInterval;
    this._reassign = config.reassign;
    this._requestRateInterval = config.requestRateInterval;
    this._requestRateLimit = config.requestRateLimit;
    this._requestRateNoLogging = config.requestRateNoLogging;
    this._reselOnReset = config.reselOnReset;
    this._reset = config.reset;
    this._restoreSvcTime = config.restoreSvcTime;
    this._resume = config.resume;
    this._retry = config.retry;
    this._sharedPartitionPool = config.sharedPartitionPool;
    this._slowStart = config.slowStart;
    this._sourceNat = config.sourceNat;
    this._statsDataAction = config.statsDataAction;
    this._subGroup = config.subGroup;
    this._templatePortPoolShared = config.templatePortPoolShared;
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

  // dampening_flaps - computed: false, optional: true, required: false
  private _dampeningFlaps?: number; 
  public get dampeningFlaps() {
    return this.getNumberAttribute('dampening_flaps');
  }
  public set dampeningFlaps(value: number) {
    this._dampeningFlaps = value;
  }
  public resetDampeningFlaps() {
    this._dampeningFlaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningFlapsInput() {
    return this._dampeningFlaps;
  }

  // decrement - computed: false, optional: true, required: false
  private _decrement?: number; 
  public get decrement() {
    return this.getNumberAttribute('decrement');
  }
  public set decrement(value: number) {
    this._decrement = value;
  }
  public resetDecrement() {
    this._decrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementInput() {
    return this._decrement;
  }

  // del_session_on_server_down - computed: false, optional: true, required: false
  private _delSessionOnServerDown?: number; 
  public get delSessionOnServerDown() {
    return this.getNumberAttribute('del_session_on_server_down');
  }
  public set delSessionOnServerDown(value: number) {
    this._delSessionOnServerDown = value;
  }
  public resetDelSessionOnServerDown() {
    this._delSessionOnServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delSessionOnServerDownInput() {
    return this._delSessionOnServerDown;
  }

  // dest_nat - computed: false, optional: true, required: false
  private _destNat?: number; 
  public get destNat() {
    return this.getNumberAttribute('dest_nat');
  }
  public set destNat(value: number) {
    this._destNat = value;
  }
  public resetDestNat() {
    this._destNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNatInput() {
    return this._destNat;
  }

  // down_grace_period - computed: false, optional: true, required: false
  private _downGracePeriod?: number; 
  public get downGracePeriod() {
    return this.getNumberAttribute('down_grace_period');
  }
  public set downGracePeriod(value: number) {
    this._downGracePeriod = value;
  }
  public resetDownGracePeriod() {
    this._downGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downGracePeriodInput() {
    return this._downGracePeriod;
  }

  // down_timer - computed: false, optional: true, required: false
  private _downTimer?: number; 
  public get downTimer() {
    return this.getNumberAttribute('down_timer');
  }
  public set downTimer(value: number) {
    this._downTimer = value;
  }
  public resetDownTimer() {
    this._downTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downTimerInput() {
    return this._downTimer;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dynamic_member_priority - computed: false, optional: true, required: false
  private _dynamicMemberPriority?: number; 
  public get dynamicMemberPriority() {
    return this.getNumberAttribute('dynamic_member_priority');
  }
  public set dynamicMemberPriority(value: number) {
    this._dynamicMemberPriority = value;
  }
  public resetDynamicMemberPriority() {
    this._dynamicMemberPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMemberPriorityInput() {
    return this._dynamicMemberPriority;
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

  // flap_period - computed: false, optional: true, required: false
  private _flapPeriod?: number; 
  public get flapPeriod() {
    return this.getNumberAttribute('flap_period');
  }
  public set flapPeriod(value: number) {
    this._flapPeriod = value;
  }
  public resetFlapPeriod() {
    this._flapPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapPeriodInput() {
    return this._flapPeriod;
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

  // inband_health_check - computed: false, optional: true, required: false
  private _inbandHealthCheck?: number; 
  public get inbandHealthCheck() {
    return this.getNumberAttribute('inband_health_check');
  }
  public set inbandHealthCheck(value: number) {
    this._inbandHealthCheck = value;
  }
  public resetInbandHealthCheck() {
    this._inbandHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandHealthCheckInput() {
    return this._inbandHealthCheck;
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

  // no_ssl - computed: false, optional: true, required: false
  private _noSsl?: number; 
  public get noSsl() {
    return this.getNumberAttribute('no_ssl');
  }
  public set noSsl(value: number) {
    this._noSsl = value;
  }
  public resetNoSsl() {
    this._noSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSslInput() {
    return this._noSsl;
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

  // reassign - computed: false, optional: true, required: false
  private _reassign?: number; 
  public get reassign() {
    return this.getNumberAttribute('reassign');
  }
  public set reassign(value: number) {
    this._reassign = value;
  }
  public resetReassign() {
    this._reassign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassignInput() {
    return this._reassign;
  }

  // request_rate_interval - computed: false, optional: true, required: false
  private _requestRateInterval?: string; 
  public get requestRateInterval() {
    return this.getStringAttribute('request_rate_interval');
  }
  public set requestRateInterval(value: string) {
    this._requestRateInterval = value;
  }
  public resetRequestRateInterval() {
    this._requestRateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateIntervalInput() {
    return this._requestRateInterval;
  }

  // request_rate_limit - computed: false, optional: true, required: false
  private _requestRateLimit?: number; 
  public get requestRateLimit() {
    return this.getNumberAttribute('request_rate_limit');
  }
  public set requestRateLimit(value: number) {
    this._requestRateLimit = value;
  }
  public resetRequestRateLimit() {
    this._requestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitInput() {
    return this._requestRateLimit;
  }

  // request_rate_no_logging - computed: false, optional: true, required: false
  private _requestRateNoLogging?: number; 
  public get requestRateNoLogging() {
    return this.getNumberAttribute('request_rate_no_logging');
  }
  public set requestRateNoLogging(value: number) {
    this._requestRateNoLogging = value;
  }
  public resetRequestRateNoLogging() {
    this._requestRateNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateNoLoggingInput() {
    return this._requestRateNoLogging;
  }

  // resel_on_reset - computed: false, optional: true, required: false
  private _reselOnReset?: number; 
  public get reselOnReset() {
    return this.getNumberAttribute('resel_on_reset');
  }
  public set reselOnReset(value: number) {
    this._reselOnReset = value;
  }
  public resetReselOnReset() {
    this._reselOnReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselOnResetInput() {
    return this._reselOnReset;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // restore_svc_time - computed: false, optional: true, required: false
  private _restoreSvcTime?: number; 
  public get restoreSvcTime() {
    return this.getNumberAttribute('restore_svc_time');
  }
  public set restoreSvcTime(value: number) {
    this._restoreSvcTime = value;
  }
  public resetRestoreSvcTime() {
    this._restoreSvcTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSvcTimeInput() {
    return this._restoreSvcTime;
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

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // shared_partition_pool - computed: false, optional: true, required: false
  private _sharedPartitionPool?: number; 
  public get sharedPartitionPool() {
    return this.getNumberAttribute('shared_partition_pool');
  }
  public set sharedPartitionPool(value: number) {
    this._sharedPartitionPool = value;
  }
  public resetSharedPartitionPool() {
    this._sharedPartitionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolInput() {
    return this._sharedPartitionPool;
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

  // source_nat - computed: false, optional: true, required: false
  private _sourceNat?: string; 
  public get sourceNat() {
    return this.getStringAttribute('source_nat');
  }
  public set sourceNat(value: string) {
    this._sourceNat = value;
  }
  public resetSourceNat() {
    this._sourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat;
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

  // sub_group - computed: false, optional: true, required: false
  private _subGroup?: number; 
  public get subGroup() {
    return this.getNumberAttribute('sub_group');
  }
  public set subGroup(value: number) {
    this._subGroup = value;
  }
  public resetSubGroup() {
    this._subGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subGroupInput() {
    return this._subGroup;
  }

  // template_port_pool_shared - computed: false, optional: true, required: false
  private _templatePortPoolShared?: string; 
  public get templatePortPoolShared() {
    return this.getStringAttribute('template_port_pool_shared');
  }
  public set templatePortPoolShared(value: string) {
    this._templatePortPoolShared = value;
  }
  public resetTemplatePortPoolShared() {
    this._templatePortPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePortPoolSharedInput() {
    return this._templatePortPoolShared;
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
      bw_rate_limit_duration: cdktf.numberToTerraform(this._bwRateLimitDuration),
      bw_rate_limit_no_logging: cdktf.numberToTerraform(this._bwRateLimitNoLogging),
      bw_rate_limit_resume: cdktf.numberToTerraform(this._bwRateLimitResume),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_limit_no_logging: cdktf.numberToTerraform(this._connLimitNoLogging),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      conn_rate_limit_no_logging: cdktf.numberToTerraform(this._connRateLimitNoLogging),
      dampening_flaps: cdktf.numberToTerraform(this._dampeningFlaps),
      decrement: cdktf.numberToTerraform(this._decrement),
      del_session_on_server_down: cdktf.numberToTerraform(this._delSessionOnServerDown),
      dest_nat: cdktf.numberToTerraform(this._destNat),
      down_grace_period: cdktf.numberToTerraform(this._downGracePeriod),
      down_timer: cdktf.numberToTerraform(this._downTimer),
      dscp: cdktf.numberToTerraform(this._dscp),
      dynamic_member_priority: cdktf.numberToTerraform(this._dynamicMemberPriority),
      every: cdktf.numberToTerraform(this._every),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      flap_period: cdktf.numberToTerraform(this._flapPeriod),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      id: cdktf.stringToTerraform(this._id),
      inband_health_check: cdktf.numberToTerraform(this._inbandHealthCheck),
      initial_slow_start: cdktf.numberToTerraform(this._initialSlowStart),
      name: cdktf.stringToTerraform(this._name),
      no_ssl: cdktf.numberToTerraform(this._noSsl),
      rate_interval: cdktf.stringToTerraform(this._rateInterval),
      reassign: cdktf.numberToTerraform(this._reassign),
      request_rate_interval: cdktf.stringToTerraform(this._requestRateInterval),
      request_rate_limit: cdktf.numberToTerraform(this._requestRateLimit),
      request_rate_no_logging: cdktf.numberToTerraform(this._requestRateNoLogging),
      resel_on_reset: cdktf.numberToTerraform(this._reselOnReset),
      reset: cdktf.numberToTerraform(this._reset),
      restore_svc_time: cdktf.numberToTerraform(this._restoreSvcTime),
      resume: cdktf.numberToTerraform(this._resume),
      retry: cdktf.numberToTerraform(this._retry),
      shared_partition_pool: cdktf.numberToTerraform(this._sharedPartitionPool),
      slow_start: cdktf.numberToTerraform(this._slowStart),
      source_nat: cdktf.stringToTerraform(this._sourceNat),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      sub_group: cdktf.numberToTerraform(this._subGroup),
      template_port_pool_shared: cdktf.stringToTerraform(this._templatePortPoolShared),
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
      dampening_flaps: {
        value: cdktf.numberToHclTerraform(this._dampeningFlaps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decrement: {
        value: cdktf.numberToHclTerraform(this._decrement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      del_session_on_server_down: {
        value: cdktf.numberToHclTerraform(this._delSessionOnServerDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_nat: {
        value: cdktf.numberToHclTerraform(this._destNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down_grace_period: {
        value: cdktf.numberToHclTerraform(this._downGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down_timer: {
        value: cdktf.numberToHclTerraform(this._downTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_member_priority: {
        value: cdktf.numberToHclTerraform(this._dynamicMemberPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      flap_period: {
        value: cdktf.numberToHclTerraform(this._flapPeriod),
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
      inband_health_check: {
        value: cdktf.numberToHclTerraform(this._inbandHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_slow_start: {
        value: cdktf.numberToHclTerraform(this._initialSlowStart),
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
      no_ssl: {
        value: cdktf.numberToHclTerraform(this._noSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_interval: {
        value: cdktf.stringToHclTerraform(this._rateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reassign: {
        value: cdktf.numberToHclTerraform(this._reassign),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_interval: {
        value: cdktf.stringToHclTerraform(this._requestRateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_rate_limit: {
        value: cdktf.numberToHclTerraform(this._requestRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_no_logging: {
        value: cdktf.numberToHclTerraform(this._requestRateNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resel_on_reset: {
        value: cdktf.numberToHclTerraform(this._reselOnReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset: {
        value: cdktf.numberToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restore_svc_time: {
        value: cdktf.numberToHclTerraform(this._restoreSvcTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resume: {
        value: cdktf.numberToHclTerraform(this._resume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_pool: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPool),
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
      source_nat: {
        value: cdktf.stringToHclTerraform(this._sourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_group: {
        value: cdktf.numberToHclTerraform(this._subGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_port_pool_shared: {
        value: cdktf.stringToHclTerraform(this._templatePortPoolShared),
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
