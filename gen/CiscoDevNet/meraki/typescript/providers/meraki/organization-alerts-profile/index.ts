// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAlertsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The threshold the metric must cross to be valid for alerting. Used only for WAN Utilization alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_bit_rate_bps OrganizationAlertsProfile#alert_condition_bit_rate_bps}
  */
  readonly alertConditionBitRateBps?: number;
  /**
  * The total duration in seconds that the threshold should be crossed before alerting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_duration OrganizationAlertsProfile#alert_condition_duration}
  */
  readonly alertConditionDuration?: number;
  /**
  * The uplink observed for the alert. interface must be one of the following: wan1, wan2, wan3, cellular
  *   - Choices: `cellular`, `wan1`, `wan2`, `wan3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_interface OrganizationAlertsProfile#alert_condition_interface}
  */
  readonly alertConditionInterface?: string;
  /**
  * The threshold the metric must cross to be valid for alerting. Used only for VoIP Jitter alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_jitter_ms OrganizationAlertsProfile#alert_condition_jitter_ms}
  */
  readonly alertConditionJitterMs?: number;
  /**
  * The threshold the metric must cross to be valid for alerting. Used only for WAN Latency alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_latency_ms OrganizationAlertsProfile#alert_condition_latency_ms}
  */
  readonly alertConditionLatencyMs?: number;
  /**
  * The threshold the metric must cross to be valid for alerting. Used only for Packet Loss alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_loss_ratio OrganizationAlertsProfile#alert_condition_loss_ratio}
  */
  readonly alertConditionLossRatio?: number;
  /**
  * The threshold the metric must drop below to be valid for alerting. Used only for VoIP MOS alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_mos OrganizationAlertsProfile#alert_condition_mos}
  */
  readonly alertConditionMos?: number;
  /**
  * The look back period in seconds for sensing the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#alert_condition_window OrganizationAlertsProfile#alert_condition_window}
  */
  readonly alertConditionWindow?: number;
  /**
  * User supplied description of the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#description OrganizationAlertsProfile#description}
  */
  readonly description?: string;
  /**
  * Networks with these tags will be monitored for the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#network_tags OrganizationAlertsProfile#network_tags}
  */
  readonly networkTags: string[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#organization_id OrganizationAlertsProfile#organization_id}
  */
  readonly organizationId: string;
  /**
  * A list of emails that will receive information about the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#recipients_emails OrganizationAlertsProfile#recipients_emails}
  */
  readonly recipientsEmails?: string[];
  /**
  * A list base64 encoded urls of webhook endpoints that will receive information about the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#recipients_http_server_ids OrganizationAlertsProfile#recipients_http_server_ids}
  */
  readonly recipientsHttpServerIds?: string[];
  /**
  * The alert type
  *   - Choices: `appOutage`, `voipJitter`, `voipMos`, `voipPacketLoss`, `wanLatency`, `wanPacketLoss`, `wanStatus`, `wanUtilization`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#type OrganizationAlertsProfile#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile meraki_organization_alerts_profile}
*/
export class OrganizationAlertsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_alerts_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAlertsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAlertsProfile to import
  * @param importFromId The id of the existing OrganizationAlertsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAlertsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_alerts_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_alerts_profile meraki_organization_alerts_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAlertsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAlertsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_alerts_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertConditionBitRateBps = config.alertConditionBitRateBps;
    this._alertConditionDuration = config.alertConditionDuration;
    this._alertConditionInterface = config.alertConditionInterface;
    this._alertConditionJitterMs = config.alertConditionJitterMs;
    this._alertConditionLatencyMs = config.alertConditionLatencyMs;
    this._alertConditionLossRatio = config.alertConditionLossRatio;
    this._alertConditionMos = config.alertConditionMos;
    this._alertConditionWindow = config.alertConditionWindow;
    this._description = config.description;
    this._networkTags = config.networkTags;
    this._organizationId = config.organizationId;
    this._recipientsEmails = config.recipientsEmails;
    this._recipientsHttpServerIds = config.recipientsHttpServerIds;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_condition_bit_rate_bps - computed: false, optional: true, required: false
  private _alertConditionBitRateBps?: number; 
  public get alertConditionBitRateBps() {
    return this.getNumberAttribute('alert_condition_bit_rate_bps');
  }
  public set alertConditionBitRateBps(value: number) {
    this._alertConditionBitRateBps = value;
  }
  public resetAlertConditionBitRateBps() {
    this._alertConditionBitRateBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionBitRateBpsInput() {
    return this._alertConditionBitRateBps;
  }

  // alert_condition_duration - computed: false, optional: true, required: false
  private _alertConditionDuration?: number; 
  public get alertConditionDuration() {
    return this.getNumberAttribute('alert_condition_duration');
  }
  public set alertConditionDuration(value: number) {
    this._alertConditionDuration = value;
  }
  public resetAlertConditionDuration() {
    this._alertConditionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionDurationInput() {
    return this._alertConditionDuration;
  }

  // alert_condition_interface - computed: false, optional: true, required: false
  private _alertConditionInterface?: string; 
  public get alertConditionInterface() {
    return this.getStringAttribute('alert_condition_interface');
  }
  public set alertConditionInterface(value: string) {
    this._alertConditionInterface = value;
  }
  public resetAlertConditionInterface() {
    this._alertConditionInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInterfaceInput() {
    return this._alertConditionInterface;
  }

  // alert_condition_jitter_ms - computed: false, optional: true, required: false
  private _alertConditionJitterMs?: number; 
  public get alertConditionJitterMs() {
    return this.getNumberAttribute('alert_condition_jitter_ms');
  }
  public set alertConditionJitterMs(value: number) {
    this._alertConditionJitterMs = value;
  }
  public resetAlertConditionJitterMs() {
    this._alertConditionJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionJitterMsInput() {
    return this._alertConditionJitterMs;
  }

  // alert_condition_latency_ms - computed: false, optional: true, required: false
  private _alertConditionLatencyMs?: number; 
  public get alertConditionLatencyMs() {
    return this.getNumberAttribute('alert_condition_latency_ms');
  }
  public set alertConditionLatencyMs(value: number) {
    this._alertConditionLatencyMs = value;
  }
  public resetAlertConditionLatencyMs() {
    this._alertConditionLatencyMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionLatencyMsInput() {
    return this._alertConditionLatencyMs;
  }

  // alert_condition_loss_ratio - computed: false, optional: true, required: false
  private _alertConditionLossRatio?: number; 
  public get alertConditionLossRatio() {
    return this.getNumberAttribute('alert_condition_loss_ratio');
  }
  public set alertConditionLossRatio(value: number) {
    this._alertConditionLossRatio = value;
  }
  public resetAlertConditionLossRatio() {
    this._alertConditionLossRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionLossRatioInput() {
    return this._alertConditionLossRatio;
  }

  // alert_condition_mos - computed: false, optional: true, required: false
  private _alertConditionMos?: number; 
  public get alertConditionMos() {
    return this.getNumberAttribute('alert_condition_mos');
  }
  public set alertConditionMos(value: number) {
    this._alertConditionMos = value;
  }
  public resetAlertConditionMos() {
    this._alertConditionMos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionMosInput() {
    return this._alertConditionMos;
  }

  // alert_condition_window - computed: false, optional: true, required: false
  private _alertConditionWindow?: number; 
  public get alertConditionWindow() {
    return this.getNumberAttribute('alert_condition_window');
  }
  public set alertConditionWindow(value: number) {
    this._alertConditionWindow = value;
  }
  public resetAlertConditionWindow() {
    this._alertConditionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionWindowInput() {
    return this._alertConditionWindow;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_tags - computed: false, optional: false, required: true
  private _networkTags?: string[]; 
  public get networkTags() {
    return cdktf.Fn.tolist(this.getListAttribute('network_tags'));
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
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

  // recipients_emails - computed: false, optional: true, required: false
  private _recipientsEmails?: string[]; 
  public get recipientsEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_emails'));
  }
  public set recipientsEmails(value: string[]) {
    this._recipientsEmails = value;
  }
  public resetRecipientsEmails() {
    this._recipientsEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsEmailsInput() {
    return this._recipientsEmails;
  }

  // recipients_http_server_ids - computed: false, optional: true, required: false
  private _recipientsHttpServerIds?: string[]; 
  public get recipientsHttpServerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_http_server_ids'));
  }
  public set recipientsHttpServerIds(value: string[]) {
    this._recipientsHttpServerIds = value;
  }
  public resetRecipientsHttpServerIds() {
    this._recipientsHttpServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsHttpServerIdsInput() {
    return this._recipientsHttpServerIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_condition_bit_rate_bps: cdktf.numberToTerraform(this._alertConditionBitRateBps),
      alert_condition_duration: cdktf.numberToTerraform(this._alertConditionDuration),
      alert_condition_interface: cdktf.stringToTerraform(this._alertConditionInterface),
      alert_condition_jitter_ms: cdktf.numberToTerraform(this._alertConditionJitterMs),
      alert_condition_latency_ms: cdktf.numberToTerraform(this._alertConditionLatencyMs),
      alert_condition_loss_ratio: cdktf.numberToTerraform(this._alertConditionLossRatio),
      alert_condition_mos: cdktf.numberToTerraform(this._alertConditionMos),
      alert_condition_window: cdktf.numberToTerraform(this._alertConditionWindow),
      description: cdktf.stringToTerraform(this._description),
      network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkTags),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      recipients_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientsEmails),
      recipients_http_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientsHttpServerIds),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_condition_bit_rate_bps: {
        value: cdktf.numberToHclTerraform(this._alertConditionBitRateBps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_duration: {
        value: cdktf.numberToHclTerraform(this._alertConditionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_interface: {
        value: cdktf.stringToHclTerraform(this._alertConditionInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_condition_jitter_ms: {
        value: cdktf.numberToHclTerraform(this._alertConditionJitterMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_latency_ms: {
        value: cdktf.numberToHclTerraform(this._alertConditionLatencyMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_loss_ratio: {
        value: cdktf.numberToHclTerraform(this._alertConditionLossRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_mos: {
        value: cdktf.numberToHclTerraform(this._alertConditionMos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_condition_window: {
        value: cdktf.numberToHclTerraform(this._alertConditionWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientsEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recipients_http_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientsHttpServerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
