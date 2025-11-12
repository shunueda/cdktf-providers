// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntelligenceTranscriptsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#channel IntelligenceTranscriptsV2#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#customer_key IntelligenceTranscriptsV2#customer_key}
  */
  readonly customerKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#id IntelligenceTranscriptsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#media_start_time IntelligenceTranscriptsV2#media_start_time}
  */
  readonly mediaStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#service_sid IntelligenceTranscriptsV2#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2 twilio_intelligence_transcripts_v2}
*/
export class IntelligenceTranscriptsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_intelligence_transcripts_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntelligenceTranscriptsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntelligenceTranscriptsV2 to import
  * @param importFromId The id of the existing IntelligenceTranscriptsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntelligenceTranscriptsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_intelligence_transcripts_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_transcripts_v2 twilio_intelligence_transcripts_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntelligenceTranscriptsV2Config
  */
  public constructor(scope: Construct, id: string, config: IntelligenceTranscriptsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_intelligence_transcripts_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._customerKey = config.customerKey;
    this._id = config.id;
    this._mediaStartTime = config.mediaStartTime;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // customer_key - computed: true, optional: true, required: false
  private _customerKey?: string; 
  public get customerKey() {
    return this.getStringAttribute('customer_key');
  }
  public set customerKey(value: string) {
    this._customerKey = value;
  }
  public resetCustomerKey() {
    this._customerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerKeyInput() {
    return this._customerKey;
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

  // media_start_time - computed: true, optional: true, required: false
  private _mediaStartTime?: string; 
  public get mediaStartTime() {
    return this.getStringAttribute('media_start_time');
  }
  public set mediaStartTime(value: string) {
    this._mediaStartTime = value;
  }
  public resetMediaStartTime() {
    this._mediaStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStartTimeInput() {
    return this._mediaStartTime;
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
      channel: cdktf.stringToTerraform(this._channel),
      customer_key: cdktf.stringToTerraform(this._customerKey),
      id: cdktf.stringToTerraform(this._id),
      media_start_time: cdktf.stringToTerraform(this._mediaStartTime),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_key: {
        value: cdktf.stringToHclTerraform(this._customerKey),
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
      media_start_time: {
        value: cdktf.stringToHclTerraform(this._mediaStartTime),
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
