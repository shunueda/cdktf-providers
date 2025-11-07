// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyServicesRateLimitsBucketsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#id VerifyServicesRateLimitsBucketsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#interval VerifyServicesRateLimitsBucketsV2#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#max VerifyServicesRateLimitsBucketsV2#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#rate_limit_sid VerifyServicesRateLimitsBucketsV2#rate_limit_sid}
  */
  readonly rateLimitSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#service_sid VerifyServicesRateLimitsBucketsV2#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2 twilio_verify_services_rate_limits_buckets_v2}
*/
export class VerifyServicesRateLimitsBucketsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_verify_services_rate_limits_buckets_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyServicesRateLimitsBucketsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyServicesRateLimitsBucketsV2 to import
  * @param importFromId The id of the existing VerifyServicesRateLimitsBucketsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyServicesRateLimitsBucketsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_verify_services_rate_limits_buckets_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_rate_limits_buckets_v2 twilio_verify_services_rate_limits_buckets_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyServicesRateLimitsBucketsV2Config
  */
  public constructor(scope: Construct, id: string, config: VerifyServicesRateLimitsBucketsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_verify_services_rate_limits_buckets_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interval = config.interval;
    this._max = config.max;
    this._rateLimitSid = config.rateLimitSid;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // rate_limit_sid - computed: false, optional: false, required: true
  private _rateLimitSid?: string; 
  public get rateLimitSid() {
    return this.getStringAttribute('rate_limit_sid');
  }
  public set rateLimitSid(value: string) {
    this._rateLimitSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitSidInput() {
    return this._rateLimitSid;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      max: cdktf.numberToTerraform(this._max),
      rate_limit_sid: cdktf.stringToTerraform(this._rateLimitSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max: {
        value: cdktf.numberToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_sid: {
        value: cdktf.stringToHclTerraform(this._rateLimitSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
