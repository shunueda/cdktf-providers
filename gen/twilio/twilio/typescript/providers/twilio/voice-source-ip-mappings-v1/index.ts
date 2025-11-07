// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VoiceSourceIpMappingsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1#id VoiceSourceIpMappingsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1#ip_record_sid VoiceSourceIpMappingsV1#ip_record_sid}
  */
  readonly ipRecordSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1#sip_domain_sid VoiceSourceIpMappingsV1#sip_domain_sid}
  */
  readonly sipDomainSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1 twilio_voice_source_ip_mappings_v1}
*/
export class VoiceSourceIpMappingsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_voice_source_ip_mappings_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VoiceSourceIpMappingsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VoiceSourceIpMappingsV1 to import
  * @param importFromId The id of the existing VoiceSourceIpMappingsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VoiceSourceIpMappingsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_voice_source_ip_mappings_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_source_ip_mappings_v1 twilio_voice_source_ip_mappings_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VoiceSourceIpMappingsV1Config
  */
  public constructor(scope: Construct, id: string, config: VoiceSourceIpMappingsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_voice_source_ip_mappings_v1',
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
    this._ipRecordSid = config.ipRecordSid;
    this._sipDomainSid = config.sipDomainSid;
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

  // ip_record_sid - computed: false, optional: false, required: true
  private _ipRecordSid?: string; 
  public get ipRecordSid() {
    return this.getStringAttribute('ip_record_sid');
  }
  public set ipRecordSid(value: string) {
    this._ipRecordSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRecordSidInput() {
    return this._ipRecordSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sip_domain_sid - computed: false, optional: false, required: true
  private _sipDomainSid?: string; 
  public get sipDomainSid() {
    return this.getStringAttribute('sip_domain_sid');
  }
  public set sipDomainSid(value: string) {
    this._sipDomainSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDomainSidInput() {
    return this._sipDomainSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_record_sid: cdktf.stringToTerraform(this._ipRecordSid),
      sip_domain_sid: cdktf.stringToTerraform(this._sipDomainSid),
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
      ip_record_sid: {
        value: cdktf.stringToHclTerraform(this._ipRecordSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_domain_sid: {
        value: cdktf.stringToHclTerraform(this._sipDomainSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
