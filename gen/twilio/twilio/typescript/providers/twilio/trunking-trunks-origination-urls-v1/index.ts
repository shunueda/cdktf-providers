// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrunkingTrunksOriginationUrlsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#enabled TrunkingTrunksOriginationUrlsV1#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#friendly_name TrunkingTrunksOriginationUrlsV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#id TrunkingTrunksOriginationUrlsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#priority TrunkingTrunksOriginationUrlsV1#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#sip_url TrunkingTrunksOriginationUrlsV1#sip_url}
  */
  readonly sipUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#trunk_sid TrunkingTrunksOriginationUrlsV1#trunk_sid}
  */
  readonly trunkSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#weight TrunkingTrunksOriginationUrlsV1#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1 twilio_trunking_trunks_origination_urls_v1}
*/
export class TrunkingTrunksOriginationUrlsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trunking_trunks_origination_urls_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrunkingTrunksOriginationUrlsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrunkingTrunksOriginationUrlsV1 to import
  * @param importFromId The id of the existing TrunkingTrunksOriginationUrlsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrunkingTrunksOriginationUrlsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trunking_trunks_origination_urls_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_origination_urls_v1 twilio_trunking_trunks_origination_urls_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrunkingTrunksOriginationUrlsV1Config
  */
  public constructor(scope: Construct, id: string, config: TrunkingTrunksOriginationUrlsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trunking_trunks_origination_urls_v1',
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
    this._enabled = config.enabled;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._priority = config.priority;
    this._sipUrl = config.sipUrl;
    this._trunkSid = config.trunkSid;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sip_url - computed: false, optional: false, required: true
  private _sipUrl?: string; 
  public get sipUrl() {
    return this.getStringAttribute('sip_url');
  }
  public set sipUrl(value: string) {
    this._sipUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUrlInput() {
    return this._sipUrl;
  }

  // trunk_sid - computed: false, optional: false, required: true
  private _trunkSid?: string; 
  public get trunkSid() {
    return this.getStringAttribute('trunk_sid');
  }
  public set trunkSid(value: string) {
    this._trunkSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkSidInput() {
    return this._trunkSid;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      sip_url: cdktf.stringToTerraform(this._sipUrl),
      trunk_sid: cdktf.stringToTerraform(this._trunkSid),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_url: {
        value: cdktf.stringToHclTerraform(this._sipUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_sid: {
        value: cdktf.stringToHclTerraform(this._trunkSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
