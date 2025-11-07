// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonConnRateLimitSrcIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#disable_ipv6_support SlbCommonConnRateLimitSrcIp#disable_ipv6_support}
  */
  readonly disableIpv6Support: number;
  /**
  * Set action if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#exceed_action SlbCommonConnRateLimitSrcIp#exceed_action}
  */
  readonly exceedAction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#id SlbCommonConnRateLimitSrcIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set max connections per period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#limit SlbCommonConnRateLimitSrcIp#limit}
  */
  readonly limit?: number;
  /**
  * '100': 100 ms; '1000': 1000 ms;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#limit_period SlbCommonConnRateLimitSrcIp#limit_period}
  */
  readonly limitPeriod?: string;
  /**
  * Set lockout period in seconds if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#lock_out SlbCommonConnRateLimitSrcIp#lock_out}
  */
  readonly lockOut?: number;
  /**
  * Send log if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#log SlbCommonConnRateLimitSrcIp#log}
  */
  readonly log?: number;
  /**
  * 'tcp': Set TCP connection rate limit; 'udp': Set UDP packet rate limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#protocol SlbCommonConnRateLimitSrcIp#protocol}
  */
  readonly protocol: string;
  /**
  * Set threshold shared amongst all virtual ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#shared SlbCommonConnRateLimitSrcIp#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#uuid SlbCommonConnRateLimitSrcIp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip thunder_slb_common_conn_rate_limit_src_ip}
*/
export class SlbCommonConnRateLimitSrcIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_conn_rate_limit_src_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonConnRateLimitSrcIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonConnRateLimitSrcIp to import
  * @param importFromId The id of the existing SlbCommonConnRateLimitSrcIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonConnRateLimitSrcIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_conn_rate_limit_src_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_conn_rate_limit_src_ip thunder_slb_common_conn_rate_limit_src_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonConnRateLimitSrcIpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbCommonConnRateLimitSrcIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_conn_rate_limit_src_ip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableIpv6Support = config.disableIpv6Support;
    this._exceedAction = config.exceedAction;
    this._id = config.id;
    this._limit = config.limit;
    this._limitPeriod = config.limitPeriod;
    this._lockOut = config.lockOut;
    this._log = config.log;
    this._protocol = config.protocol;
    this._shared = config.shared;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_ipv6_support - computed: false, optional: false, required: true
  private _disableIpv6Support?: number; 
  public get disableIpv6Support() {
    return this.getNumberAttribute('disable_ipv6_support');
  }
  public set disableIpv6Support(value: number) {
    this._disableIpv6Support = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpv6SupportInput() {
    return this._disableIpv6Support;
  }

  // exceed_action - computed: false, optional: true, required: false
  private _exceedAction?: number; 
  public get exceedAction() {
    return this.getNumberAttribute('exceed_action');
  }
  public set exceedAction(value: number) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_period - computed: false, optional: true, required: false
  private _limitPeriod?: string; 
  public get limitPeriod() {
    return this.getStringAttribute('limit_period');
  }
  public set limitPeriod(value: string) {
    this._limitPeriod = value;
  }
  public resetLimitPeriod() {
    this._limitPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPeriodInput() {
    return this._limitPeriod;
  }

  // lock_out - computed: false, optional: true, required: false
  private _lockOut?: number; 
  public get lockOut() {
    return this.getNumberAttribute('lock_out');
  }
  public set lockOut(value: number) {
    this._lockOut = value;
  }
  public resetLockOut() {
    this._lockOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockOutInput() {
    return this._lockOut;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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
      disable_ipv6_support: cdktf.numberToTerraform(this._disableIpv6Support),
      exceed_action: cdktf.numberToTerraform(this._exceedAction),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      limit_period: cdktf.stringToTerraform(this._limitPeriod),
      lock_out: cdktf.numberToTerraform(this._lockOut),
      log: cdktf.numberToTerraform(this._log),
      protocol: cdktf.stringToTerraform(this._protocol),
      shared: cdktf.numberToTerraform(this._shared),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_ipv6_support: {
        value: cdktf.numberToHclTerraform(this._disableIpv6Support),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_action: {
        value: cdktf.numberToHclTerraform(this._exceedAction),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_period: {
        value: cdktf.stringToHclTerraform(this._limitPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_out: {
        value: cdktf.numberToHclTerraform(this._lockOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
