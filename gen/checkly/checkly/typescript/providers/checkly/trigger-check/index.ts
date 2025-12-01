// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TriggerCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the check that you want to attach the trigger to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check#check_id TriggerCheck#check_id}
  */
  readonly checkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check#id TriggerCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The token value created to trigger the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check#token TriggerCheck#token}
  */
  readonly token?: string;
  /**
  * The request URL to trigger the check run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check#url TriggerCheck#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check checkly_trigger_check}
*/
export class TriggerCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_trigger_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TriggerCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TriggerCheck to import
  * @param importFromId The id of the existing TriggerCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TriggerCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_trigger_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/trigger_check checkly_trigger_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TriggerCheckConfig
  */
  public constructor(scope: Construct, id: string, config: TriggerCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_trigger_check',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkId = config.checkId;
    this._id = config.id;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
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

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_id: cdktf.stringToTerraform(this._checkId),
      id: cdktf.stringToTerraform(this._id),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_id: {
        value: cdktf.stringToHclTerraform(this._checkId),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
