// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_limit SlbTemplateVirtualServer#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_limit_no_logging SlbTemplateVirtualServer#conn_limit_no_logging}
  */
  readonly connLimitNoLogging?: number;
  /**
  * Send client reset when connection over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_limit_reset SlbTemplateVirtualServer#conn_limit_reset}
  */
  readonly connLimitReset?: number;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_rate_limit SlbTemplateVirtualServer#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_rate_limit_no_logging SlbTemplateVirtualServer#conn_rate_limit_no_logging}
  */
  readonly connRateLimitNoLogging?: number;
  /**
  * Send client reset when connection rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#conn_rate_limit_reset SlbTemplateVirtualServer#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Disable Virtual Server when all member ports are down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#disable_when_all_ports_down SlbTemplateVirtualServer#disable_when_all_ports_down}
  */
  readonly disableWhenAllPortsDown?: number;
  /**
  * Disable Virtual Server when any member port is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#disable_when_any_port_down SlbTemplateVirtualServer#disable_when_any_port_down}
  */
  readonly disableWhenAnyPortDown?: number;
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmp_lockup SlbTemplateVirtualServer#icmp_lockup}
  */
  readonly icmpLockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmp_lockup_period SlbTemplateVirtualServer#icmp_lockup_period}
  */
  readonly icmpLockupPeriod?: number;
  /**
  * ICMP rate limit (Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmp_rate_limit SlbTemplateVirtualServer#icmp_rate_limit}
  */
  readonly icmpRateLimit?: number;
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmpv6_lockup SlbTemplateVirtualServer#icmpv6_lockup}
  */
  readonly icmpv6Lockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmpv6_lockup_period SlbTemplateVirtualServer#icmpv6_lockup_period}
  */
  readonly icmpv6LockupPeriod?: number;
  /**
  * ICMPv6 rate limit (Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#icmpv6_rate_limit SlbTemplateVirtualServer#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#id SlbTemplateVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual server template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#name SlbTemplateVirtualServer#name}
  */
  readonly name: string;
  /**
  * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#rate_interval SlbTemplateVirtualServer#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Send gratuitous ARP for every IP in the subnet virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#subnet_gratuitous_arp SlbTemplateVirtualServer#subnet_gratuitous_arp}
  */
  readonly subnetGratuitousArp?: number;
  /**
  * The allowed active layer 7 tcp fast-open connection limit, default is zero (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#tcp_stack_tfo_active_conn_limit SlbTemplateVirtualServer#tcp_stack_tfo_active_conn_limit}
  */
  readonly tcpStackTfoActiveConnLimit?: number;
  /**
  * The time tcp stack will wait before allowing new fast-open requests after security condition, default 600 seconds (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#tcp_stack_tfo_backoff_time SlbTemplateVirtualServer#tcp_stack_tfo_backoff_time}
  */
  readonly tcpStackTfoBackoffTime?: number;
  /**
  * The time limit (in seconds) that a layer 7 tcp fast-open cookie is valid, default is 60 seconds (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#tcp_stack_tfo_cookie_time_limit SlbTemplateVirtualServer#tcp_stack_tfo_cookie_time_limit}
  */
  readonly tcpStackTfoCookieTimeLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#user_tag SlbTemplateVirtualServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#uuid SlbTemplateVirtualServer#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server thunder_slb_template_virtual_server}
*/
export class SlbTemplateVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateVirtualServer to import
  * @param importFromId The id of the existing SlbTemplateVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_server thunder_slb_template_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_virtual_server',
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
    this._connLimit = config.connLimit;
    this._connLimitNoLogging = config.connLimitNoLogging;
    this._connLimitReset = config.connLimitReset;
    this._connRateLimit = config.connRateLimit;
    this._connRateLimitNoLogging = config.connRateLimitNoLogging;
    this._connRateLimitReset = config.connRateLimitReset;
    this._disableWhenAllPortsDown = config.disableWhenAllPortsDown;
    this._disableWhenAnyPortDown = config.disableWhenAnyPortDown;
    this._icmpLockup = config.icmpLockup;
    this._icmpLockupPeriod = config.icmpLockupPeriod;
    this._icmpRateLimit = config.icmpRateLimit;
    this._icmpv6Lockup = config.icmpv6Lockup;
    this._icmpv6LockupPeriod = config.icmpv6LockupPeriod;
    this._icmpv6RateLimit = config.icmpv6RateLimit;
    this._id = config.id;
    this._name = config.name;
    this._rateInterval = config.rateInterval;
    this._subnetGratuitousArp = config.subnetGratuitousArp;
    this._tcpStackTfoActiveConnLimit = config.tcpStackTfoActiveConnLimit;
    this._tcpStackTfoBackoffTime = config.tcpStackTfoBackoffTime;
    this._tcpStackTfoCookieTimeLimit = config.tcpStackTfoCookieTimeLimit;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // conn_limit_reset - computed: false, optional: true, required: false
  private _connLimitReset?: number; 
  public get connLimitReset() {
    return this.getNumberAttribute('conn_limit_reset');
  }
  public set connLimitReset(value: number) {
    this._connLimitReset = value;
  }
  public resetConnLimitReset() {
    this._connLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitResetInput() {
    return this._connLimitReset;
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

  // conn_rate_limit_reset - computed: false, optional: true, required: false
  private _connRateLimitReset?: number; 
  public get connRateLimitReset() {
    return this.getNumberAttribute('conn_rate_limit_reset');
  }
  public set connRateLimitReset(value: number) {
    this._connRateLimitReset = value;
  }
  public resetConnRateLimitReset() {
    this._connRateLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitResetInput() {
    return this._connRateLimitReset;
  }

  // disable_when_all_ports_down - computed: false, optional: true, required: false
  private _disableWhenAllPortsDown?: number; 
  public get disableWhenAllPortsDown() {
    return this.getNumberAttribute('disable_when_all_ports_down');
  }
  public set disableWhenAllPortsDown(value: number) {
    this._disableWhenAllPortsDown = value;
  }
  public resetDisableWhenAllPortsDown() {
    this._disableWhenAllPortsDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWhenAllPortsDownInput() {
    return this._disableWhenAllPortsDown;
  }

  // disable_when_any_port_down - computed: false, optional: true, required: false
  private _disableWhenAnyPortDown?: number; 
  public get disableWhenAnyPortDown() {
    return this.getNumberAttribute('disable_when_any_port_down');
  }
  public set disableWhenAnyPortDown(value: number) {
    this._disableWhenAnyPortDown = value;
  }
  public resetDisableWhenAnyPortDown() {
    this._disableWhenAnyPortDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWhenAnyPortDownInput() {
    return this._disableWhenAnyPortDown;
  }

  // icmp_lockup - computed: false, optional: true, required: false
  private _icmpLockup?: number; 
  public get icmpLockup() {
    return this.getNumberAttribute('icmp_lockup');
  }
  public set icmpLockup(value: number) {
    this._icmpLockup = value;
  }
  public resetIcmpLockup() {
    this._icmpLockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpLockupInput() {
    return this._icmpLockup;
  }

  // icmp_lockup_period - computed: false, optional: true, required: false
  private _icmpLockupPeriod?: number; 
  public get icmpLockupPeriod() {
    return this.getNumberAttribute('icmp_lockup_period');
  }
  public set icmpLockupPeriod(value: number) {
    this._icmpLockupPeriod = value;
  }
  public resetIcmpLockupPeriod() {
    this._icmpLockupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpLockupPeriodInput() {
    return this._icmpLockupPeriod;
  }

  // icmp_rate_limit - computed: false, optional: true, required: false
  private _icmpRateLimit?: number; 
  public get icmpRateLimit() {
    return this.getNumberAttribute('icmp_rate_limit');
  }
  public set icmpRateLimit(value: number) {
    this._icmpRateLimit = value;
  }
  public resetIcmpRateLimit() {
    this._icmpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitInput() {
    return this._icmpRateLimit;
  }

  // icmpv6_lockup - computed: false, optional: true, required: false
  private _icmpv6Lockup?: number; 
  public get icmpv6Lockup() {
    return this.getNumberAttribute('icmpv6_lockup');
  }
  public set icmpv6Lockup(value: number) {
    this._icmpv6Lockup = value;
  }
  public resetIcmpv6Lockup() {
    this._icmpv6Lockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6LockupInput() {
    return this._icmpv6Lockup;
  }

  // icmpv6_lockup_period - computed: false, optional: true, required: false
  private _icmpv6LockupPeriod?: number; 
  public get icmpv6LockupPeriod() {
    return this.getNumberAttribute('icmpv6_lockup_period');
  }
  public set icmpv6LockupPeriod(value: number) {
    this._icmpv6LockupPeriod = value;
  }
  public resetIcmpv6LockupPeriod() {
    this._icmpv6LockupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6LockupPeriodInput() {
    return this._icmpv6LockupPeriod;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit?: number; 
  public get icmpv6RateLimit() {
    return this.getNumberAttribute('icmpv6_rate_limit');
  }
  public set icmpv6RateLimit(value: number) {
    this._icmpv6RateLimit = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit;
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

  // subnet_gratuitous_arp - computed: false, optional: true, required: false
  private _subnetGratuitousArp?: number; 
  public get subnetGratuitousArp() {
    return this.getNumberAttribute('subnet_gratuitous_arp');
  }
  public set subnetGratuitousArp(value: number) {
    this._subnetGratuitousArp = value;
  }
  public resetSubnetGratuitousArp() {
    this._subnetGratuitousArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGratuitousArpInput() {
    return this._subnetGratuitousArp;
  }

  // tcp_stack_tfo_active_conn_limit - computed: false, optional: true, required: false
  private _tcpStackTfoActiveConnLimit?: number; 
  public get tcpStackTfoActiveConnLimit() {
    return this.getNumberAttribute('tcp_stack_tfo_active_conn_limit');
  }
  public set tcpStackTfoActiveConnLimit(value: number) {
    this._tcpStackTfoActiveConnLimit = value;
  }
  public resetTcpStackTfoActiveConnLimit() {
    this._tcpStackTfoActiveConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStackTfoActiveConnLimitInput() {
    return this._tcpStackTfoActiveConnLimit;
  }

  // tcp_stack_tfo_backoff_time - computed: false, optional: true, required: false
  private _tcpStackTfoBackoffTime?: number; 
  public get tcpStackTfoBackoffTime() {
    return this.getNumberAttribute('tcp_stack_tfo_backoff_time');
  }
  public set tcpStackTfoBackoffTime(value: number) {
    this._tcpStackTfoBackoffTime = value;
  }
  public resetTcpStackTfoBackoffTime() {
    this._tcpStackTfoBackoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStackTfoBackoffTimeInput() {
    return this._tcpStackTfoBackoffTime;
  }

  // tcp_stack_tfo_cookie_time_limit - computed: false, optional: true, required: false
  private _tcpStackTfoCookieTimeLimit?: number; 
  public get tcpStackTfoCookieTimeLimit() {
    return this.getNumberAttribute('tcp_stack_tfo_cookie_time_limit');
  }
  public set tcpStackTfoCookieTimeLimit(value: number) {
    this._tcpStackTfoCookieTimeLimit = value;
  }
  public resetTcpStackTfoCookieTimeLimit() {
    this._tcpStackTfoCookieTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStackTfoCookieTimeLimitInput() {
    return this._tcpStackTfoCookieTimeLimit;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_limit_no_logging: cdktf.numberToTerraform(this._connLimitNoLogging),
      conn_limit_reset: cdktf.numberToTerraform(this._connLimitReset),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      conn_rate_limit_no_logging: cdktf.numberToTerraform(this._connRateLimitNoLogging),
      conn_rate_limit_reset: cdktf.numberToTerraform(this._connRateLimitReset),
      disable_when_all_ports_down: cdktf.numberToTerraform(this._disableWhenAllPortsDown),
      disable_when_any_port_down: cdktf.numberToTerraform(this._disableWhenAnyPortDown),
      icmp_lockup: cdktf.numberToTerraform(this._icmpLockup),
      icmp_lockup_period: cdktf.numberToTerraform(this._icmpLockupPeriod),
      icmp_rate_limit: cdktf.numberToTerraform(this._icmpRateLimit),
      icmpv6_lockup: cdktf.numberToTerraform(this._icmpv6Lockup),
      icmpv6_lockup_period: cdktf.numberToTerraform(this._icmpv6LockupPeriod),
      icmpv6_rate_limit: cdktf.numberToTerraform(this._icmpv6RateLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rate_interval: cdktf.stringToTerraform(this._rateInterval),
      subnet_gratuitous_arp: cdktf.numberToTerraform(this._subnetGratuitousArp),
      tcp_stack_tfo_active_conn_limit: cdktf.numberToTerraform(this._tcpStackTfoActiveConnLimit),
      tcp_stack_tfo_backoff_time: cdktf.numberToTerraform(this._tcpStackTfoBackoffTime),
      tcp_stack_tfo_cookie_time_limit: cdktf.numberToTerraform(this._tcpStackTfoCookieTimeLimit),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      conn_limit_reset: {
        value: cdktf.numberToHclTerraform(this._connLimitReset),
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
      conn_rate_limit_reset: {
        value: cdktf.numberToHclTerraform(this._connRateLimitReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_when_all_ports_down: {
        value: cdktf.numberToHclTerraform(this._disableWhenAllPortsDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_when_any_port_down: {
        value: cdktf.numberToHclTerraform(this._disableWhenAnyPortDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_lockup: {
        value: cdktf.numberToHclTerraform(this._icmpLockup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_lockup_period: {
        value: cdktf.numberToHclTerraform(this._icmpLockupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_rate_limit: {
        value: cdktf.numberToHclTerraform(this._icmpRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_lockup: {
        value: cdktf.numberToHclTerraform(this._icmpv6Lockup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_lockup_period: {
        value: cdktf.numberToHclTerraform(this._icmpv6LockupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_rate_limit: {
        value: cdktf.numberToHclTerraform(this._icmpv6RateLimit),
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
      subnet_gratuitous_arp: {
        value: cdktf.numberToHclTerraform(this._subnetGratuitousArp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_stack_tfo_active_conn_limit: {
        value: cdktf.numberToHclTerraform(this._tcpStackTfoActiveConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_stack_tfo_backoff_time: {
        value: cdktf.numberToHclTerraform(this._tcpStackTfoBackoffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_stack_tfo_cookie_time_limit: {
        value: cdktf.numberToHclTerraform(this._tcpStackTfoCookieTimeLimit),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
