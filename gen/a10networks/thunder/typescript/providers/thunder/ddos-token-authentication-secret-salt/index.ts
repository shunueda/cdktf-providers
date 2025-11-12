// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTokenAuthenticationSecretSaltConfig extends cdktf.TerraformMetaArguments {
  /**
  * Current salt value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt#current_salt DdosTokenAuthenticationSecretSalt#current_salt}
  */
  readonly currentSalt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt#id DdosTokenAuthenticationSecretSalt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Previous salt value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt#previous_salt DdosTokenAuthenticationSecretSalt#previous_salt}
  */
  readonly previousSalt?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt#uuid DdosTokenAuthenticationSecretSalt#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt thunder_ddos_token_authentication_secret_salt}
*/
export class DdosTokenAuthenticationSecretSalt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_token_authentication_secret_salt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTokenAuthenticationSecretSalt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTokenAuthenticationSecretSalt to import
  * @param importFromId The id of the existing DdosTokenAuthenticationSecretSalt that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTokenAuthenticationSecretSalt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_token_authentication_secret_salt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_token_authentication_secret_salt thunder_ddos_token_authentication_secret_salt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTokenAuthenticationSecretSaltConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosTokenAuthenticationSecretSaltConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_token_authentication_secret_salt',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentSalt = config.currentSalt;
    this._id = config.id;
    this._previousSalt = config.previousSalt;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_salt - computed: false, optional: true, required: false
  private _currentSalt?: number; 
  public get currentSalt() {
    return this.getNumberAttribute('current_salt');
  }
  public set currentSalt(value: number) {
    this._currentSalt = value;
  }
  public resetCurrentSalt() {
    this._currentSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSaltInput() {
    return this._currentSalt;
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

  // previous_salt - computed: false, optional: true, required: false
  private _previousSalt?: number; 
  public get previousSalt() {
    return this.getNumberAttribute('previous_salt');
  }
  public set previousSalt(value: number) {
    this._previousSalt = value;
  }
  public resetPreviousSalt() {
    this._previousSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousSaltInput() {
    return this._previousSalt;
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
      current_salt: cdktf.numberToTerraform(this._currentSalt),
      id: cdktf.stringToTerraform(this._id),
      previous_salt: cdktf.numberToTerraform(this._previousSalt),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_salt: {
        value: cdktf.numberToHclTerraform(this._currentSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_salt: {
        value: cdktf.numberToHclTerraform(this._previousSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
