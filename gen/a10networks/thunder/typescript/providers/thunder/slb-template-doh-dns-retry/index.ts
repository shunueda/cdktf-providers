// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDohDnsRetryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'close': Close client side connection; 'retry-with-tcp': Retry DNS query to server using TCP (If UDP was tried initially. Close after.);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#after_timeout SlbTemplateDohDnsRetryA#after_timeout}
  */
  readonly afterTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#id SlbTemplateDohDnsRetryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total number of times to try DNS query to server before closing client connection, default 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#max_trials SlbTemplateDohDnsRetryA#max_trials}
  */
  readonly maxTrials?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#name SlbTemplateDohDnsRetryA#name}
  */
  readonly name: string;
  /**
  * DNS Retry Interval value 1 - 400 in units of 100ms, default is 10 (default is 1000ms) (1 - 400 in units of 100ms, default is 10 (1000ms/1sec))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#retry_interval SlbTemplateDohDnsRetryA#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#uuid SlbTemplateDohDnsRetryA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry thunder_slb_template_doh_dns_retry}
*/
export class SlbTemplateDohDnsRetryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_doh_dns_retry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDohDnsRetryA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDohDnsRetryA to import
  * @param importFromId The id of the existing SlbTemplateDohDnsRetryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDohDnsRetryA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_doh_dns_retry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh_dns_retry thunder_slb_template_doh_dns_retry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDohDnsRetryAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDohDnsRetryAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_doh_dns_retry',
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
    this._afterTimeout = config.afterTimeout;
    this._id = config.id;
    this._maxTrials = config.maxTrials;
    this._name = config.name;
    this._retryInterval = config.retryInterval;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_timeout - computed: false, optional: true, required: false
  private _afterTimeout?: string; 
  public get afterTimeout() {
    return this.getStringAttribute('after_timeout');
  }
  public set afterTimeout(value: string) {
    this._afterTimeout = value;
  }
  public resetAfterTimeout() {
    this._afterTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterTimeoutInput() {
    return this._afterTimeout;
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

  // max_trials - computed: false, optional: true, required: false
  private _maxTrials?: number; 
  public get maxTrials() {
    return this.getNumberAttribute('max_trials');
  }
  public set maxTrials(value: number) {
    this._maxTrials = value;
  }
  public resetMaxTrials() {
    this._maxTrials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrialsInput() {
    return this._maxTrials;
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

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
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
      after_timeout: cdktf.stringToTerraform(this._afterTimeout),
      id: cdktf.stringToTerraform(this._id),
      max_trials: cdktf.numberToTerraform(this._maxTrials),
      name: cdktf.stringToTerraform(this._name),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after_timeout: {
        value: cdktf.stringToHclTerraform(this._afterTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_trials: {
        value: cdktf.numberToHclTerraform(this._maxTrials),
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
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
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
