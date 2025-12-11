// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationAlertsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile#id DataMerakiOrganizationAlertsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile#organization_id DataMerakiOrganizationAlertsProfile#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile meraki_organization_alerts_profile}
*/
export class DataMerakiOrganizationAlertsProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_alerts_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationAlertsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationAlertsProfile to import
  * @param importFromId The id of the existing DataMerakiOrganizationAlertsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationAlertsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_alerts_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_alerts_profile meraki_organization_alerts_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationAlertsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationAlertsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_alerts_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_condition_bit_rate_bps - computed: true, optional: false, required: false
  public get alertConditionBitRateBps() {
    return this.getNumberAttribute('alert_condition_bit_rate_bps');
  }

  // alert_condition_duration - computed: true, optional: false, required: false
  public get alertConditionDuration() {
    return this.getNumberAttribute('alert_condition_duration');
  }

  // alert_condition_interface - computed: true, optional: false, required: false
  public get alertConditionInterface() {
    return this.getStringAttribute('alert_condition_interface');
  }

  // alert_condition_jitter_ms - computed: true, optional: false, required: false
  public get alertConditionJitterMs() {
    return this.getNumberAttribute('alert_condition_jitter_ms');
  }

  // alert_condition_latency_ms - computed: true, optional: false, required: false
  public get alertConditionLatencyMs() {
    return this.getNumberAttribute('alert_condition_latency_ms');
  }

  // alert_condition_loss_ratio - computed: true, optional: false, required: false
  public get alertConditionLossRatio() {
    return this.getNumberAttribute('alert_condition_loss_ratio');
  }

  // alert_condition_mos - computed: true, optional: false, required: false
  public get alertConditionMos() {
    return this.getNumberAttribute('alert_condition_mos');
  }

  // alert_condition_window - computed: true, optional: false, required: false
  public get alertConditionWindow() {
    return this.getNumberAttribute('alert_condition_window');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // network_tags - computed: true, optional: false, required: false
  public get networkTags() {
    return cdktf.Fn.tolist(this.getListAttribute('network_tags'));
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // recipients_emails - computed: true, optional: false, required: false
  public get recipientsEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_emails'));
  }

  // recipients_http_server_ids - computed: true, optional: false, required: false
  public get recipientsHttpServerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_http_server_ids'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
