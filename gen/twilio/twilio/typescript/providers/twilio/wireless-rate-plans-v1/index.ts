// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessRatePlansV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#data_enabled WirelessRatePlansV1#data_enabled}
  */
  readonly dataEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#data_limit WirelessRatePlansV1#data_limit}
  */
  readonly dataLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#data_metering WirelessRatePlansV1#data_metering}
  */
  readonly dataMetering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#friendly_name WirelessRatePlansV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#id WirelessRatePlansV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#international_roaming WirelessRatePlansV1#international_roaming}
  */
  readonly internationalRoaming?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#international_roaming_data_limit WirelessRatePlansV1#international_roaming_data_limit}
  */
  readonly internationalRoamingDataLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#messaging_enabled WirelessRatePlansV1#messaging_enabled}
  */
  readonly messagingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#national_roaming_data_limit WirelessRatePlansV1#national_roaming_data_limit}
  */
  readonly nationalRoamingDataLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#national_roaming_enabled WirelessRatePlansV1#national_roaming_enabled}
  */
  readonly nationalRoamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#unique_name WirelessRatePlansV1#unique_name}
  */
  readonly uniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#voice_enabled WirelessRatePlansV1#voice_enabled}
  */
  readonly voiceEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1 twilio_wireless_rate_plans_v1}
*/
export class WirelessRatePlansV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_wireless_rate_plans_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessRatePlansV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessRatePlansV1 to import
  * @param importFromId The id of the existing WirelessRatePlansV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessRatePlansV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_wireless_rate_plans_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_rate_plans_v1 twilio_wireless_rate_plans_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessRatePlansV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: WirelessRatePlansV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_wireless_rate_plans_v1',
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
    this._dataEnabled = config.dataEnabled;
    this._dataLimit = config.dataLimit;
    this._dataMetering = config.dataMetering;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._internationalRoaming = config.internationalRoaming;
    this._internationalRoamingDataLimit = config.internationalRoamingDataLimit;
    this._messagingEnabled = config.messagingEnabled;
    this._nationalRoamingDataLimit = config.nationalRoamingDataLimit;
    this._nationalRoamingEnabled = config.nationalRoamingEnabled;
    this._uniqueName = config.uniqueName;
    this._voiceEnabled = config.voiceEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_enabled - computed: true, optional: true, required: false
  private _dataEnabled?: boolean | cdktf.IResolvable; 
  public get dataEnabled() {
    return this.getBooleanAttribute('data_enabled');
  }
  public set dataEnabled(value: boolean | cdktf.IResolvable) {
    this._dataEnabled = value;
  }
  public resetDataEnabled() {
    this._dataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnabledInput() {
    return this._dataEnabled;
  }

  // data_limit - computed: true, optional: true, required: false
  private _dataLimit?: number; 
  public get dataLimit() {
    return this.getNumberAttribute('data_limit');
  }
  public set dataLimit(value: number) {
    this._dataLimit = value;
  }
  public resetDataLimit() {
    this._dataLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLimitInput() {
    return this._dataLimit;
  }

  // data_metering - computed: true, optional: true, required: false
  private _dataMetering?: string; 
  public get dataMetering() {
    return this.getStringAttribute('data_metering');
  }
  public set dataMetering(value: string) {
    this._dataMetering = value;
  }
  public resetDataMetering() {
    this._dataMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMeteringInput() {
    return this._dataMetering;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
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

  // international_roaming - computed: true, optional: true, required: false
  private _internationalRoaming?: string[]; 
  public get internationalRoaming() {
    return this.getListAttribute('international_roaming');
  }
  public set internationalRoaming(value: string[]) {
    this._internationalRoaming = value;
  }
  public resetInternationalRoaming() {
    this._internationalRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalRoamingInput() {
    return this._internationalRoaming;
  }

  // international_roaming_data_limit - computed: true, optional: true, required: false
  private _internationalRoamingDataLimit?: number; 
  public get internationalRoamingDataLimit() {
    return this.getNumberAttribute('international_roaming_data_limit');
  }
  public set internationalRoamingDataLimit(value: number) {
    this._internationalRoamingDataLimit = value;
  }
  public resetInternationalRoamingDataLimit() {
    this._internationalRoamingDataLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalRoamingDataLimitInput() {
    return this._internationalRoamingDataLimit;
  }

  // messaging_enabled - computed: true, optional: true, required: false
  private _messagingEnabled?: boolean | cdktf.IResolvable; 
  public get messagingEnabled() {
    return this.getBooleanAttribute('messaging_enabled');
  }
  public set messagingEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingEnabled = value;
  }
  public resetMessagingEnabled() {
    this._messagingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingEnabledInput() {
    return this._messagingEnabled;
  }

  // national_roaming_data_limit - computed: true, optional: true, required: false
  private _nationalRoamingDataLimit?: number; 
  public get nationalRoamingDataLimit() {
    return this.getNumberAttribute('national_roaming_data_limit');
  }
  public set nationalRoamingDataLimit(value: number) {
    this._nationalRoamingDataLimit = value;
  }
  public resetNationalRoamingDataLimit() {
    this._nationalRoamingDataLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nationalRoamingDataLimitInput() {
    return this._nationalRoamingDataLimit;
  }

  // national_roaming_enabled - computed: true, optional: true, required: false
  private _nationalRoamingEnabled?: boolean | cdktf.IResolvable; 
  public get nationalRoamingEnabled() {
    return this.getBooleanAttribute('national_roaming_enabled');
  }
  public set nationalRoamingEnabled(value: boolean | cdktf.IResolvable) {
    this._nationalRoamingEnabled = value;
  }
  public resetNationalRoamingEnabled() {
    this._nationalRoamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nationalRoamingEnabledInput() {
    return this._nationalRoamingEnabled;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // unique_name - computed: true, optional: true, required: false
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  public resetUniqueName() {
    this._uniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // voice_enabled - computed: true, optional: true, required: false
  private _voiceEnabled?: boolean | cdktf.IResolvable; 
  public get voiceEnabled() {
    return this.getBooleanAttribute('voice_enabled');
  }
  public set voiceEnabled(value: boolean | cdktf.IResolvable) {
    this._voiceEnabled = value;
  }
  public resetVoiceEnabled() {
    this._voiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceEnabledInput() {
    return this._voiceEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_enabled: cdktf.booleanToTerraform(this._dataEnabled),
      data_limit: cdktf.numberToTerraform(this._dataLimit),
      data_metering: cdktf.stringToTerraform(this._dataMetering),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      international_roaming: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internationalRoaming),
      international_roaming_data_limit: cdktf.numberToTerraform(this._internationalRoamingDataLimit),
      messaging_enabled: cdktf.booleanToTerraform(this._messagingEnabled),
      national_roaming_data_limit: cdktf.numberToTerraform(this._nationalRoamingDataLimit),
      national_roaming_enabled: cdktf.booleanToTerraform(this._nationalRoamingEnabled),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
      voice_enabled: cdktf.booleanToTerraform(this._voiceEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_enabled: {
        value: cdktf.booleanToHclTerraform(this._dataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_limit: {
        value: cdktf.numberToHclTerraform(this._dataLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_metering: {
        value: cdktf.stringToHclTerraform(this._dataMetering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      international_roaming: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internationalRoaming),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      international_roaming_data_limit: {
        value: cdktf.numberToHclTerraform(this._internationalRoamingDataLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      messaging_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      national_roaming_data_limit: {
        value: cdktf.numberToHclTerraform(this._nationalRoamingDataLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      national_roaming_enabled: {
        value: cdktf.booleanToHclTerraform(this._nationalRoamingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_enabled: {
        value: cdktf.booleanToHclTerraform(this._voiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
