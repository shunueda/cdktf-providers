// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkIcmpv6RateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#icmpv6_lockup NetworkIcmpv6RateLimit#icmpv6_lockup}
  */
  readonly icmpv6Lockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#icmpv6_lockup_period NetworkIcmpv6RateLimit#icmpv6_lockup_period}
  */
  readonly icmpv6LockupPeriod?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#icmpv6_normal_rate_limit NetworkIcmpv6RateLimit#icmpv6_normal_rate_limit}
  */
  readonly icmpv6NormalRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#id NetworkIcmpv6RateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#uuid NetworkIcmpv6RateLimit#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit thunder_network_icmpv6_rate_limit}
*/
export class NetworkIcmpv6RateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_icmpv6_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkIcmpv6RateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkIcmpv6RateLimit to import
  * @param importFromId The id of the existing NetworkIcmpv6RateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkIcmpv6RateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_icmpv6_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmpv6_rate_limit thunder_network_icmpv6_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkIcmpv6RateLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkIcmpv6RateLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_icmpv6_rate_limit',
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
    this._icmpv6Lockup = config.icmpv6Lockup;
    this._icmpv6LockupPeriod = config.icmpv6LockupPeriod;
    this._icmpv6NormalRateLimit = config.icmpv6NormalRateLimit;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // icmpv6_normal_rate_limit - computed: false, optional: true, required: false
  private _icmpv6NormalRateLimit?: number; 
  public get icmpv6NormalRateLimit() {
    return this.getNumberAttribute('icmpv6_normal_rate_limit');
  }
  public set icmpv6NormalRateLimit(value: number) {
    this._icmpv6NormalRateLimit = value;
  }
  public resetIcmpv6NormalRateLimit() {
    this._icmpv6NormalRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6NormalRateLimitInput() {
    return this._icmpv6NormalRateLimit;
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
      icmpv6_lockup: cdktf.numberToTerraform(this._icmpv6Lockup),
      icmpv6_lockup_period: cdktf.numberToTerraform(this._icmpv6LockupPeriod),
      icmpv6_normal_rate_limit: cdktf.numberToTerraform(this._icmpv6NormalRateLimit),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      icmpv6_normal_rate_limit: {
        value: cdktf.numberToHclTerraform(this._icmpv6NormalRateLimit),
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
