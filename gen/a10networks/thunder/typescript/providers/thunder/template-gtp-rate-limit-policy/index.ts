// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpRateLimitPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum allowed of rate of GTP-U bytes in downlink direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_downlink_byte_rate TemplateGtpRateLimitPolicy#gtp_u_downlink_byte_rate}
  */
  readonly gtpUDownlinkByteRate?: number;
  /**
  * Maximum allowed of rate of GTP-U packets in downlink direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_downlink_packet_rate TemplateGtpRateLimitPolicy#gtp_u_downlink_packet_rate}
  */
  readonly gtpUDownlinkPacketRate?: number;
  /**
  * Maximum allowed GTP-U tunnels per Peer/APN Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_max_concurrent_tunnels TemplateGtpRateLimitPolicy#gtp_u_max_concurrent_tunnels}
  */
  readonly gtpUMaxConcurrentTunnels?: number;
  /**
  * Maximum allowed of rate of GTP-U bytes total in both directions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_total_byte_rate TemplateGtpRateLimitPolicy#gtp_u_total_byte_rate}
  */
  readonly gtpUTotalByteRate?: number;
  /**
  * Maximum allowed of rate of GTP-U packets total in both directions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_total_packet_rate TemplateGtpRateLimitPolicy#gtp_u_total_packet_rate}
  */
  readonly gtpUTotalPacketRate?: number;
  /**
  * Maximum allowed of rate of GTP-U tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_tunnel_create_rate TemplateGtpRateLimitPolicy#gtp_u_tunnel_create_rate}
  */
  readonly gtpUTunnelCreateRate?: number;
  /**
  * Maximum allowed of rate of GTP-U bytes in uplink direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_uplink_byte_rate TemplateGtpRateLimitPolicy#gtp_u_uplink_byte_rate}
  */
  readonly gtpUUplinkByteRate?: number;
  /**
  * Maximum allowed of rate of GTP-U packets in uplink direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#gtp_u_uplink_packet_rate TemplateGtpRateLimitPolicy#gtp_u_uplink_packet_rate}
  */
  readonly gtpUUplinkPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#id TemplateGtpRateLimitPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lockout traffic from the source for a certain time period after rate exceeded (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#lockout TemplateGtpRateLimitPolicy#lockout}
  */
  readonly lockout?: number;
  /**
  * Specify name of the GTP Rate Limit Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#name TemplateGtpRateLimitPolicy#name}
  */
  readonly name: string;
  /**
  * 'monitor': Forward packet exceeding limit; 'drop': drop packet exceeding limit(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#rate_limit_action TemplateGtpRateLimitPolicy#rate_limit_action}
  */
  readonly rateLimitAction?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#user_tag TemplateGtpRateLimitPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#uuid TemplateGtpRateLimitPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Maximum allowed GTPv0-C message rate of all types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v0_agg_message_type_rate TemplateGtpRateLimitPolicy#v0_agg_message_type_rate}
  */
  readonly v0AggMessageTypeRate?: number;
  /**
  * Maximum allowed GTPv1-C message rate of all types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v1_agg_message_type_rate TemplateGtpRateLimitPolicy#v1_agg_message_type_rate}
  */
  readonly v1AggMessageTypeRate?: number;
  /**
  * Maximum allowed rate of GTPv1-C Create PDP Request message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v1_create_pdp_request_rate TemplateGtpRateLimitPolicy#v1_create_pdp_request_rate}
  */
  readonly v1CreatePdpRequestRate?: number;
  /**
  * Maximum allowed rate of GTPv1-C Update PDP Request message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v1_update_pdp_request_rate TemplateGtpRateLimitPolicy#v1_update_pdp_request_rate}
  */
  readonly v1UpdatePdpRequestRate?: number;
  /**
  * Maximum allowed GTPv2-C message rate of all types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v2_agg_message_type_rate TemplateGtpRateLimitPolicy#v2_agg_message_type_rate}
  */
  readonly v2AggMessageTypeRate?: number;
  /**
  * Maximum allowed rate of GTPv2-C Create Session Request message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v2_create_session_request_rate TemplateGtpRateLimitPolicy#v2_create_session_request_rate}
  */
  readonly v2CreateSessionRequestRate?: number;
  /**
  * Maximum allowed rate of GTPv2-C Modify Bearer Request message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#v2_modify_bearer_request_rate TemplateGtpRateLimitPolicy#v2_modify_bearer_request_rate}
  */
  readonly v2ModifyBearerRequestRate?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy thunder_template_gtp_rate_limit_policy}
*/
export class TemplateGtpRateLimitPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_rate_limit_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpRateLimitPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpRateLimitPolicy to import
  * @param importFromId The id of the existing TemplateGtpRateLimitPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpRateLimitPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_rate_limit_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_rate_limit_policy thunder_template_gtp_rate_limit_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpRateLimitPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpRateLimitPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_rate_limit_policy',
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
    this._gtpUDownlinkByteRate = config.gtpUDownlinkByteRate;
    this._gtpUDownlinkPacketRate = config.gtpUDownlinkPacketRate;
    this._gtpUMaxConcurrentTunnels = config.gtpUMaxConcurrentTunnels;
    this._gtpUTotalByteRate = config.gtpUTotalByteRate;
    this._gtpUTotalPacketRate = config.gtpUTotalPacketRate;
    this._gtpUTunnelCreateRate = config.gtpUTunnelCreateRate;
    this._gtpUUplinkByteRate = config.gtpUUplinkByteRate;
    this._gtpUUplinkPacketRate = config.gtpUUplinkPacketRate;
    this._id = config.id;
    this._lockout = config.lockout;
    this._name = config.name;
    this._rateLimitAction = config.rateLimitAction;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._v0AggMessageTypeRate = config.v0AggMessageTypeRate;
    this._v1AggMessageTypeRate = config.v1AggMessageTypeRate;
    this._v1CreatePdpRequestRate = config.v1CreatePdpRequestRate;
    this._v1UpdatePdpRequestRate = config.v1UpdatePdpRequestRate;
    this._v2AggMessageTypeRate = config.v2AggMessageTypeRate;
    this._v2CreateSessionRequestRate = config.v2CreateSessionRequestRate;
    this._v2ModifyBearerRequestRate = config.v2ModifyBearerRequestRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gtp_u_downlink_byte_rate - computed: false, optional: true, required: false
  private _gtpUDownlinkByteRate?: number; 
  public get gtpUDownlinkByteRate() {
    return this.getNumberAttribute('gtp_u_downlink_byte_rate');
  }
  public set gtpUDownlinkByteRate(value: number) {
    this._gtpUDownlinkByteRate = value;
  }
  public resetGtpUDownlinkByteRate() {
    this._gtpUDownlinkByteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkByteRateInput() {
    return this._gtpUDownlinkByteRate;
  }

  // gtp_u_downlink_packet_rate - computed: false, optional: true, required: false
  private _gtpUDownlinkPacketRate?: number; 
  public get gtpUDownlinkPacketRate() {
    return this.getNumberAttribute('gtp_u_downlink_packet_rate');
  }
  public set gtpUDownlinkPacketRate(value: number) {
    this._gtpUDownlinkPacketRate = value;
  }
  public resetGtpUDownlinkPacketRate() {
    this._gtpUDownlinkPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkPacketRateInput() {
    return this._gtpUDownlinkPacketRate;
  }

  // gtp_u_max_concurrent_tunnels - computed: false, optional: true, required: false
  private _gtpUMaxConcurrentTunnels?: number; 
  public get gtpUMaxConcurrentTunnels() {
    return this.getNumberAttribute('gtp_u_max_concurrent_tunnels');
  }
  public set gtpUMaxConcurrentTunnels(value: number) {
    this._gtpUMaxConcurrentTunnels = value;
  }
  public resetGtpUMaxConcurrentTunnels() {
    this._gtpUMaxConcurrentTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUMaxConcurrentTunnelsInput() {
    return this._gtpUMaxConcurrentTunnels;
  }

  // gtp_u_total_byte_rate - computed: false, optional: true, required: false
  private _gtpUTotalByteRate?: number; 
  public get gtpUTotalByteRate() {
    return this.getNumberAttribute('gtp_u_total_byte_rate');
  }
  public set gtpUTotalByteRate(value: number) {
    this._gtpUTotalByteRate = value;
  }
  public resetGtpUTotalByteRate() {
    this._gtpUTotalByteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTotalByteRateInput() {
    return this._gtpUTotalByteRate;
  }

  // gtp_u_total_packet_rate - computed: false, optional: true, required: false
  private _gtpUTotalPacketRate?: number; 
  public get gtpUTotalPacketRate() {
    return this.getNumberAttribute('gtp_u_total_packet_rate');
  }
  public set gtpUTotalPacketRate(value: number) {
    this._gtpUTotalPacketRate = value;
  }
  public resetGtpUTotalPacketRate() {
    this._gtpUTotalPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTotalPacketRateInput() {
    return this._gtpUTotalPacketRate;
  }

  // gtp_u_tunnel_create_rate - computed: false, optional: true, required: false
  private _gtpUTunnelCreateRate?: number; 
  public get gtpUTunnelCreateRate() {
    return this.getNumberAttribute('gtp_u_tunnel_create_rate');
  }
  public set gtpUTunnelCreateRate(value: number) {
    this._gtpUTunnelCreateRate = value;
  }
  public resetGtpUTunnelCreateRate() {
    this._gtpUTunnelCreateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTunnelCreateRateInput() {
    return this._gtpUTunnelCreateRate;
  }

  // gtp_u_uplink_byte_rate - computed: false, optional: true, required: false
  private _gtpUUplinkByteRate?: number; 
  public get gtpUUplinkByteRate() {
    return this.getNumberAttribute('gtp_u_uplink_byte_rate');
  }
  public set gtpUUplinkByteRate(value: number) {
    this._gtpUUplinkByteRate = value;
  }
  public resetGtpUUplinkByteRate() {
    this._gtpUUplinkByteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkByteRateInput() {
    return this._gtpUUplinkByteRate;
  }

  // gtp_u_uplink_packet_rate - computed: false, optional: true, required: false
  private _gtpUUplinkPacketRate?: number; 
  public get gtpUUplinkPacketRate() {
    return this.getNumberAttribute('gtp_u_uplink_packet_rate');
  }
  public set gtpUUplinkPacketRate(value: number) {
    this._gtpUUplinkPacketRate = value;
  }
  public resetGtpUUplinkPacketRate() {
    this._gtpUUplinkPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkPacketRateInput() {
    return this._gtpUUplinkPacketRate;
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

  // lockout - computed: false, optional: true, required: false
  private _lockout?: number; 
  public get lockout() {
    return this.getNumberAttribute('lockout');
  }
  public set lockout(value: number) {
    this._lockout = value;
  }
  public resetLockout() {
    this._lockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout;
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

  // rate_limit_action - computed: false, optional: true, required: false
  private _rateLimitAction?: string; 
  public get rateLimitAction() {
    return this.getStringAttribute('rate_limit_action');
  }
  public set rateLimitAction(value: string) {
    this._rateLimitAction = value;
  }
  public resetRateLimitAction() {
    this._rateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitActionInput() {
    return this._rateLimitAction;
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

  // v0_agg_message_type_rate - computed: false, optional: true, required: false
  private _v0AggMessageTypeRate?: number; 
  public get v0AggMessageTypeRate() {
    return this.getNumberAttribute('v0_agg_message_type_rate');
  }
  public set v0AggMessageTypeRate(value: number) {
    this._v0AggMessageTypeRate = value;
  }
  public resetV0AggMessageTypeRate() {
    this._v0AggMessageTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v0AggMessageTypeRateInput() {
    return this._v0AggMessageTypeRate;
  }

  // v1_agg_message_type_rate - computed: false, optional: true, required: false
  private _v1AggMessageTypeRate?: number; 
  public get v1AggMessageTypeRate() {
    return this.getNumberAttribute('v1_agg_message_type_rate');
  }
  public set v1AggMessageTypeRate(value: number) {
    this._v1AggMessageTypeRate = value;
  }
  public resetV1AggMessageTypeRate() {
    this._v1AggMessageTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1AggMessageTypeRateInput() {
    return this._v1AggMessageTypeRate;
  }

  // v1_create_pdp_request_rate - computed: false, optional: true, required: false
  private _v1CreatePdpRequestRate?: number; 
  public get v1CreatePdpRequestRate() {
    return this.getNumberAttribute('v1_create_pdp_request_rate');
  }
  public set v1CreatePdpRequestRate(value: number) {
    this._v1CreatePdpRequestRate = value;
  }
  public resetV1CreatePdpRequestRate() {
    this._v1CreatePdpRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1CreatePdpRequestRateInput() {
    return this._v1CreatePdpRequestRate;
  }

  // v1_update_pdp_request_rate - computed: false, optional: true, required: false
  private _v1UpdatePdpRequestRate?: number; 
  public get v1UpdatePdpRequestRate() {
    return this.getNumberAttribute('v1_update_pdp_request_rate');
  }
  public set v1UpdatePdpRequestRate(value: number) {
    this._v1UpdatePdpRequestRate = value;
  }
  public resetV1UpdatePdpRequestRate() {
    this._v1UpdatePdpRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1UpdatePdpRequestRateInput() {
    return this._v1UpdatePdpRequestRate;
  }

  // v2_agg_message_type_rate - computed: false, optional: true, required: false
  private _v2AggMessageTypeRate?: number; 
  public get v2AggMessageTypeRate() {
    return this.getNumberAttribute('v2_agg_message_type_rate');
  }
  public set v2AggMessageTypeRate(value: number) {
    this._v2AggMessageTypeRate = value;
  }
  public resetV2AggMessageTypeRate() {
    this._v2AggMessageTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2AggMessageTypeRateInput() {
    return this._v2AggMessageTypeRate;
  }

  // v2_create_session_request_rate - computed: false, optional: true, required: false
  private _v2CreateSessionRequestRate?: number; 
  public get v2CreateSessionRequestRate() {
    return this.getNumberAttribute('v2_create_session_request_rate');
  }
  public set v2CreateSessionRequestRate(value: number) {
    this._v2CreateSessionRequestRate = value;
  }
  public resetV2CreateSessionRequestRate() {
    this._v2CreateSessionRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2CreateSessionRequestRateInput() {
    return this._v2CreateSessionRequestRate;
  }

  // v2_modify_bearer_request_rate - computed: false, optional: true, required: false
  private _v2ModifyBearerRequestRate?: number; 
  public get v2ModifyBearerRequestRate() {
    return this.getNumberAttribute('v2_modify_bearer_request_rate');
  }
  public set v2ModifyBearerRequestRate(value: number) {
    this._v2ModifyBearerRequestRate = value;
  }
  public resetV2ModifyBearerRequestRate() {
    this._v2ModifyBearerRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ModifyBearerRequestRateInput() {
    return this._v2ModifyBearerRequestRate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gtp_u_downlink_byte_rate: cdktf.numberToTerraform(this._gtpUDownlinkByteRate),
      gtp_u_downlink_packet_rate: cdktf.numberToTerraform(this._gtpUDownlinkPacketRate),
      gtp_u_max_concurrent_tunnels: cdktf.numberToTerraform(this._gtpUMaxConcurrentTunnels),
      gtp_u_total_byte_rate: cdktf.numberToTerraform(this._gtpUTotalByteRate),
      gtp_u_total_packet_rate: cdktf.numberToTerraform(this._gtpUTotalPacketRate),
      gtp_u_tunnel_create_rate: cdktf.numberToTerraform(this._gtpUTunnelCreateRate),
      gtp_u_uplink_byte_rate: cdktf.numberToTerraform(this._gtpUUplinkByteRate),
      gtp_u_uplink_packet_rate: cdktf.numberToTerraform(this._gtpUUplinkPacketRate),
      id: cdktf.stringToTerraform(this._id),
      lockout: cdktf.numberToTerraform(this._lockout),
      name: cdktf.stringToTerraform(this._name),
      rate_limit_action: cdktf.stringToTerraform(this._rateLimitAction),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      v0_agg_message_type_rate: cdktf.numberToTerraform(this._v0AggMessageTypeRate),
      v1_agg_message_type_rate: cdktf.numberToTerraform(this._v1AggMessageTypeRate),
      v1_create_pdp_request_rate: cdktf.numberToTerraform(this._v1CreatePdpRequestRate),
      v1_update_pdp_request_rate: cdktf.numberToTerraform(this._v1UpdatePdpRequestRate),
      v2_agg_message_type_rate: cdktf.numberToTerraform(this._v2AggMessageTypeRate),
      v2_create_session_request_rate: cdktf.numberToTerraform(this._v2CreateSessionRequestRate),
      v2_modify_bearer_request_rate: cdktf.numberToTerraform(this._v2ModifyBearerRequestRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gtp_u_downlink_byte_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUDownlinkByteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_downlink_packet_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUDownlinkPacketRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_max_concurrent_tunnels: {
        value: cdktf.numberToHclTerraform(this._gtpUMaxConcurrentTunnels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_total_byte_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUTotalByteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_total_packet_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUTotalPacketRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_tunnel_create_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUTunnelCreateRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_uplink_byte_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUUplinkByteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_uplink_packet_rate: {
        value: cdktf.numberToHclTerraform(this._gtpUUplinkPacketRate),
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
      lockout: {
        value: cdktf.numberToHclTerraform(this._lockout),
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
      rate_limit_action: {
        value: cdktf.stringToHclTerraform(this._rateLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      v0_agg_message_type_rate: {
        value: cdktf.numberToHclTerraform(this._v0AggMessageTypeRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v1_agg_message_type_rate: {
        value: cdktf.numberToHclTerraform(this._v1AggMessageTypeRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v1_create_pdp_request_rate: {
        value: cdktf.numberToHclTerraform(this._v1CreatePdpRequestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v1_update_pdp_request_rate: {
        value: cdktf.numberToHclTerraform(this._v1UpdatePdpRequestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v2_agg_message_type_rate: {
        value: cdktf.numberToHclTerraform(this._v2AggMessageTypeRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v2_create_session_request_rate: {
        value: cdktf.numberToHclTerraform(this._v2CreateSessionRequestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v2_modify_bearer_request_rate: {
        value: cdktf.numberToHclTerraform(this._v2ModifyBearerRequestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
