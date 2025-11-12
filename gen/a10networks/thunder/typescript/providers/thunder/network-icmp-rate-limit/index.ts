// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkIcmpRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#icmp_lockup NetworkIcmpRateLimit#icmp_lockup}
  */
  readonly icmpLockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#icmp_lockup_period NetworkIcmpRateLimit#icmp_lockup_period}
  */
  readonly icmpLockupPeriod?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#icmp_normal_rate_limit NetworkIcmpRateLimit#icmp_normal_rate_limit}
  */
  readonly icmpNormalRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#id NetworkIcmpRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#uuid NetworkIcmpRateLimit#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit thunder_network_icmp_rate_limit}
*/
export class NetworkIcmpRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_icmp_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkIcmpRateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkIcmpRateLimit to import
  * @param importFromId The id of the existing NetworkIcmpRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkIcmpRateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_icmp_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_icmp_rate_limit thunder_network_icmp_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkIcmpRateLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkIcmpRateLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_icmp_rate_limit',
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
    this._icmpLockup = config.icmpLockup;
    this._icmpLockupPeriod = config.icmpLockupPeriod;
    this._icmpNormalRateLimit = config.icmpNormalRateLimit;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // icmp_normal_rate_limit - computed: false, optional: true, required: false
  private _icmpNormalRateLimit?: number; 
  public get icmpNormalRateLimit() {
    return this.getNumberAttribute('icmp_normal_rate_limit');
  }
  public set icmpNormalRateLimit(value: number) {
    this._icmpNormalRateLimit = value;
  }
  public resetIcmpNormalRateLimit() {
    this._icmpNormalRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpNormalRateLimitInput() {
    return this._icmpNormalRateLimit;
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
      icmp_lockup: cdktf.numberToTerraform(this._icmpLockup),
      icmp_lockup_period: cdktf.numberToTerraform(this._icmpLockupPeriod),
      icmp_normal_rate_limit: cdktf.numberToTerraform(this._icmpNormalRateLimit),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      icmp_normal_rate_limit: {
        value: cdktf.numberToHclTerraform(this._icmpNormalRateLimit),
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
