// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationTwilioConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account SID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#account_sid IntegrationTwilio#account_sid}
  */
  readonly accountSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#id IntegrationTwilio#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Key Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#key_secret IntegrationTwilio#key_secret}
  */
  readonly keySecret: string;
  /**
  * The Key SID (cannot equal accountSID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#key_sid IntegrationTwilio#key_sid}
  */
  readonly keySid: string;
  /**
  * The name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#name IntegrationTwilio#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio doppler_integration_twilio}
*/
export class IntegrationTwilio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_integration_twilio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationTwilio resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationTwilio to import
  * @param importFromId The id of the existing IntegrationTwilio that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationTwilio to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_integration_twilio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_twilio doppler_integration_twilio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationTwilioConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationTwilioConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_integration_twilio',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountSid = config.accountSid;
    this._id = config.id;
    this._keySecret = config.keySecret;
    this._keySid = config.keySid;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_sid - computed: false, optional: false, required: true
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
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

  // key_secret - computed: false, optional: false, required: true
  private _keySecret?: string; 
  public get keySecret() {
    return this.getStringAttribute('key_secret');
  }
  public set keySecret(value: string) {
    this._keySecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret;
  }

  // key_sid - computed: false, optional: false, required: true
  private _keySid?: string; 
  public get keySid() {
    return this.getStringAttribute('key_sid');
  }
  public set keySid(value: string) {
    this._keySid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySidInput() {
    return this._keySid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_sid: cdktf.stringToTerraform(this._accountSid),
      id: cdktf.stringToTerraform(this._id),
      key_secret: cdktf.stringToTerraform(this._keySecret),
      key_sid: cdktf.stringToTerraform(this._keySid),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_sid: {
        value: cdktf.stringToHclTerraform(this._accountSid),
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
      key_secret: {
        value: cdktf.stringToHclTerraform(this._keySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_sid: {
        value: cdktf.stringToHclTerraform(this._keySid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
