// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrunkingTrunksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#cnam_lookup_enabled TrunkingTrunksV1#cnam_lookup_enabled}
  */
  readonly cnamLookupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#disaster_recovery_method TrunkingTrunksV1#disaster_recovery_method}
  */
  readonly disasterRecoveryMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#disaster_recovery_url TrunkingTrunksV1#disaster_recovery_url}
  */
  readonly disasterRecoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#domain_name TrunkingTrunksV1#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#friendly_name TrunkingTrunksV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#id TrunkingTrunksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#secure TrunkingTrunksV1#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#transfer_caller_id TrunkingTrunksV1#transfer_caller_id}
  */
  readonly transferCallerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#transfer_mode TrunkingTrunksV1#transfer_mode}
  */
  readonly transferMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1 twilio_trunking_trunks_v1}
*/
export class TrunkingTrunksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trunking_trunks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrunkingTrunksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrunkingTrunksV1 to import
  * @param importFromId The id of the existing TrunkingTrunksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrunkingTrunksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trunking_trunks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_v1 twilio_trunking_trunks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrunkingTrunksV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: TrunkingTrunksV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_trunking_trunks_v1',
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
    this._cnamLookupEnabled = config.cnamLookupEnabled;
    this._disasterRecoveryMethod = config.disasterRecoveryMethod;
    this._disasterRecoveryUrl = config.disasterRecoveryUrl;
    this._domainName = config.domainName;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._secure = config.secure;
    this._transferCallerId = config.transferCallerId;
    this._transferMode = config.transferMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cnam_lookup_enabled - computed: true, optional: true, required: false
  private _cnamLookupEnabled?: boolean | cdktf.IResolvable; 
  public get cnamLookupEnabled() {
    return this.getBooleanAttribute('cnam_lookup_enabled');
  }
  public set cnamLookupEnabled(value: boolean | cdktf.IResolvable) {
    this._cnamLookupEnabled = value;
  }
  public resetCnamLookupEnabled() {
    this._cnamLookupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnamLookupEnabledInput() {
    return this._cnamLookupEnabled;
  }

  // disaster_recovery_method - computed: true, optional: true, required: false
  private _disasterRecoveryMethod?: string; 
  public get disasterRecoveryMethod() {
    return this.getStringAttribute('disaster_recovery_method');
  }
  public set disasterRecoveryMethod(value: string) {
    this._disasterRecoveryMethod = value;
  }
  public resetDisasterRecoveryMethod() {
    this._disasterRecoveryMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryMethodInput() {
    return this._disasterRecoveryMethod;
  }

  // disaster_recovery_url - computed: true, optional: true, required: false
  private _disasterRecoveryUrl?: string; 
  public get disasterRecoveryUrl() {
    return this.getStringAttribute('disaster_recovery_url');
  }
  public set disasterRecoveryUrl(value: string) {
    this._disasterRecoveryUrl = value;
  }
  public resetDisasterRecoveryUrl() {
    this._disasterRecoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryUrlInput() {
    return this._disasterRecoveryUrl;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // secure - computed: true, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // transfer_caller_id - computed: true, optional: true, required: false
  private _transferCallerId?: string; 
  public get transferCallerId() {
    return this.getStringAttribute('transfer_caller_id');
  }
  public set transferCallerId(value: string) {
    this._transferCallerId = value;
  }
  public resetTransferCallerId() {
    this._transferCallerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferCallerIdInput() {
    return this._transferCallerId;
  }

  // transfer_mode - computed: true, optional: true, required: false
  private _transferMode?: string; 
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }
  public set transferMode(value: string) {
    this._transferMode = value;
  }
  public resetTransferMode() {
    this._transferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferModeInput() {
    return this._transferMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cnam_lookup_enabled: cdktf.booleanToTerraform(this._cnamLookupEnabled),
      disaster_recovery_method: cdktf.stringToTerraform(this._disasterRecoveryMethod),
      disaster_recovery_url: cdktf.stringToTerraform(this._disasterRecoveryUrl),
      domain_name: cdktf.stringToTerraform(this._domainName),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      secure: cdktf.booleanToTerraform(this._secure),
      transfer_caller_id: cdktf.stringToTerraform(this._transferCallerId),
      transfer_mode: cdktf.stringToTerraform(this._transferMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cnam_lookup_enabled: {
        value: cdktf.booleanToHclTerraform(this._cnamLookupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disaster_recovery_method: {
        value: cdktf.stringToHclTerraform(this._disasterRecoveryMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disaster_recovery_url: {
        value: cdktf.stringToHclTerraform(this._disasterRecoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transfer_caller_id: {
        value: cdktf.stringToHclTerraform(this._transferCallerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_mode: {
        value: cdktf.stringToHclTerraform(this._transferMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
