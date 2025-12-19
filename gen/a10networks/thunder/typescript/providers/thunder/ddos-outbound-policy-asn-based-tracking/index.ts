// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosOutboundPolicyAsnBasedTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'configuration': Configure asn based tracking;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#configuration DdosOutboundPolicyAsnBasedTrackingA#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#id DdosOutboundPolicyAsnBasedTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Outbound_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#outbound_policy_name DdosOutboundPolicyAsnBasedTrackingA#outbound_policy_name}
  */
  readonly outboundPolicyName: string;
  /**
  * Triggered by 1/2 packet rate limitation in per-asn-glid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#packet_rate_triggered DdosOutboundPolicyAsnBasedTrackingA#packet_rate_triggered}
  */
  readonly packetRateTriggered?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#per_asn_glid DdosOutboundPolicyAsnBasedTrackingA#per_asn_glid}
  */
  readonly perAsnGlid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#uuid DdosOutboundPolicyAsnBasedTrackingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking thunder_ddos_outbound_policy_asn_based_tracking}
*/
export class DdosOutboundPolicyAsnBasedTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_outbound_policy_asn_based_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosOutboundPolicyAsnBasedTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosOutboundPolicyAsnBasedTrackingA to import
  * @param importFromId The id of the existing DdosOutboundPolicyAsnBasedTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosOutboundPolicyAsnBasedTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_outbound_policy_asn_based_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_asn_based_tracking thunder_ddos_outbound_policy_asn_based_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosOutboundPolicyAsnBasedTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosOutboundPolicyAsnBasedTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_outbound_policy_asn_based_tracking',
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
    this._perAsnGlid = config.perAsnGlid;
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

  // per_asn_glid - computed: false, optional: true, required: false
  private _perAsnGlid?: string; 
  public get perAsnGlid() {
    return this.getStringAttribute('per_asn_glid');
  }
  public set perAsnGlid(value: string) {
    this._perAsnGlid = value;
  }
  public resetPerAsnGlid() {
    this._perAsnGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAsnGlidInput() {
    return this._perAsnGlid;
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
      per_asn_glid: cdktf.stringToTerraform(this._perAsnGlid),
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
      per_asn_glid: {
        value: cdktf.stringToHclTerraform(this._perAsnGlid),
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
