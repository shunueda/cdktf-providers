// https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageSubscriptionDomainBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block#domain StatuspageSubscriptionDomainBlock#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block#statuspage_id StatuspageSubscriptionDomainBlock#statuspage_id}
  */
  readonly statuspageId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block uptime_statuspage_subscription_domain_block}
*/
export class StatuspageSubscriptionDomainBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_subscription_domain_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuspageSubscriptionDomainBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuspageSubscriptionDomainBlock to import
  * @param importFromId The id of the existing StatuspageSubscriptionDomainBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuspageSubscriptionDomainBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_subscription_domain_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.20.0/docs/resources/statuspage_subscription_domain_block uptime_statuspage_subscription_domain_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageSubscriptionDomainBlockConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageSubscriptionDomainBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_subscription_domain_block',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.20.0',
        providerVersionConstraint: '2.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
