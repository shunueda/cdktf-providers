// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosOutboundPolicyCountryBasedTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'configuration': Configure country based tracking;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#configuration DdosOutboundPolicyCountryBasedTrackingA#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#id DdosOutboundPolicyCountryBasedTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Outbound_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#outbound_policy_name DdosOutboundPolicyCountryBasedTrackingA#outbound_policy_name}
  */
  readonly outboundPolicyName: string;
  /**
  * Triggered by 1/2 packet rate limitation in per-country-glid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#packet_rate_triggered DdosOutboundPolicyCountryBasedTrackingA#packet_rate_triggered}
  */
  readonly packetRateTriggered?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#per_country_glid DdosOutboundPolicyCountryBasedTrackingA#per_country_glid}
  */
  readonly perCountryGlid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#uuid DdosOutboundPolicyCountryBasedTrackingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking thunder_ddos_outbound_policy_country_based_tracking}
*/
export class DdosOutboundPolicyCountryBasedTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_outbound_policy_country_based_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosOutboundPolicyCountryBasedTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosOutboundPolicyCountryBasedTrackingA to import
  * @param importFromId The id of the existing DdosOutboundPolicyCountryBasedTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosOutboundPolicyCountryBasedTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_outbound_policy_country_based_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_country_based_tracking thunder_ddos_outbound_policy_country_based_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosOutboundPolicyCountryBasedTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosOutboundPolicyCountryBasedTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_outbound_policy_country_based_tracking',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration = config.configuration;
    this._id = config.id;
    this._outboundPolicyName = config.outboundPolicyName;
    this._packetRateTriggered = config.packetRateTriggered;
    this._perCountryGlid = config.perCountryGlid;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // outbound_policy_name - computed: false, optional: false, required: true
  private _outboundPolicyName?: string; 
  public get outboundPolicyName() {
    return this.getStringAttribute('outbound_policy_name');
  }
  public set outboundPolicyName(value: string) {
    this._outboundPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPolicyNameInput() {
    return this._outboundPolicyName;
  }

  // packet_rate_triggered - computed: false, optional: true, required: false
  private _packetRateTriggered?: number; 
  public get packetRateTriggered() {
    return this.getNumberAttribute('packet_rate_triggered');
  }
  public set packetRateTriggered(value: number) {
    this._packetRateTriggered = value;
  }
  public resetPacketRateTriggered() {
    this._packetRateTriggered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateTriggeredInput() {
    return this._packetRateTriggered;
  }

  // per_country_glid - computed: false, optional: true, required: false
  private _perCountryGlid?: string; 
  public get perCountryGlid() {
    return this.getStringAttribute('per_country_glid');
  }
  public set perCountryGlid(value: string) {
    this._perCountryGlid = value;
  }
  public resetPerCountryGlid() {
    this._perCountryGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perCountryGlidInput() {
    return this._perCountryGlid;
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
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      outbound_policy_name: cdktf.stringToTerraform(this._outboundPolicyName),
      packet_rate_triggered: cdktf.numberToTerraform(this._packetRateTriggered),
      per_country_glid: cdktf.stringToTerraform(this._perCountryGlid),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
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
      outbound_policy_name: {
        value: cdktf.stringToHclTerraform(this._outboundPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_rate_triggered: {
        value: cdktf.numberToHclTerraform(this._packetRateTriggered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_country_glid: {
        value: cdktf.stringToHclTerraform(this._perCountryGlid),
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
