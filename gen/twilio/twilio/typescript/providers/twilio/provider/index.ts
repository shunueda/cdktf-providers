// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwilioProviderConfig {
  /**
  * Your SubAccount SID can be found on the Twilio dashboard at www.twilio.com/console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#account_sid TwilioProvider#account_sid}
  */
  readonly accountSid?: string;
  /**
  * https://www.twilio.com/docs/global-infrastructure/edge-locations#public-edge-locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#edge TwilioProvider#edge}
  */
  readonly edge?: string;
  /**
  * Your Auth Token/ API Secret can be found on the Twilio dashboard at www.twilio.com/console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#password TwilioProvider#password}
  */
  readonly password: string;
  /**
  * https://www.twilio.com/docs/global-infrastructure/edge-locations/legacy-regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#region TwilioProvider#region}
  */
  readonly region?: string;
  /**
  * Your Account SID/ API Key can be found on the Twilio dashboard at www.twilio.com/console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#username TwilioProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#alias TwilioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs twilio}
*/
export class TwilioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwilioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwilioProvider to import
  * @param importFromId The id of the existing TwilioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwilioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs twilio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwilioProviderConfig
  */
  public constructor(scope: Construct, id: string, config: TwilioProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      terraformProviderSource: 'twilio/twilio'
    });
    this._accountSid = config.accountSid;
    this._edge = config.edge;
    this._password = config.password;
    this._region = config.region;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_sid - computed: false, optional: true, required: false
  private _accountSid?: string; 
  public get accountSid() {
    return this._accountSid;
  }
  public set accountSid(value: string | undefined) {
    this._accountSid = value;
  }
  public resetAccountSid() {
    this._accountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // edge - computed: false, optional: true, required: false
  private _edge?: string; 
  public get edge() {
    return this._edge;
  }
  public set edge(value: string | undefined) {
    this._edge = value;
  }
  public resetEdge() {
    this._edge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeInput() {
    return this._edge;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_sid: cdktf.stringToTerraform(this._accountSid),
      edge: cdktf.stringToTerraform(this._edge),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
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
      edge: {
        value: cdktf.stringToHclTerraform(this._edge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
