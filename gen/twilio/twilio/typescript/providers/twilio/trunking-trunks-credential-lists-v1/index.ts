// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrunkingTrunksCredentialListsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1#credential_list_sid TrunkingTrunksCredentialListsV1#credential_list_sid}
  */
  readonly credentialListSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1#id TrunkingTrunksCredentialListsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1#trunk_sid TrunkingTrunksCredentialListsV1#trunk_sid}
  */
  readonly trunkSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1 twilio_trunking_trunks_credential_lists_v1}
*/
export class TrunkingTrunksCredentialListsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trunking_trunks_credential_lists_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrunkingTrunksCredentialListsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrunkingTrunksCredentialListsV1 to import
  * @param importFromId The id of the existing TrunkingTrunksCredentialListsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrunkingTrunksCredentialListsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trunking_trunks_credential_lists_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_credential_lists_v1 twilio_trunking_trunks_credential_lists_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrunkingTrunksCredentialListsV1Config
  */
  public constructor(scope: Construct, id: string, config: TrunkingTrunksCredentialListsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trunking_trunks_credential_lists_v1',
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
    this._credentialListSid = config.credentialListSid;
    this._id = config.id;
    this._trunkSid = config.trunkSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_list_sid - computed: false, optional: false, required: true
  private _credentialListSid?: string; 
  public get credentialListSid() {
    return this.getStringAttribute('credential_list_sid');
  }
  public set credentialListSid(value: string) {
    this._credentialListSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialListSidInput() {
    return this._credentialListSid;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_list_sid: cdktf.stringToTerraform(this._credentialListSid),
      id: cdktf.stringToTerraform(this._id),
      trunk_sid: cdktf.stringToTerraform(this._trunkSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_list_sid: {
        value: cdktf.stringToHclTerraform(this._credentialListSid),
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
      trunk_sid: {
        value: cdktf.stringToHclTerraform(this._trunkSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
