// https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TriggerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the group that you want to attach the trigger to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group#group_id TriggerGroup#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group#id TriggerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The token value created to trigger the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group#token TriggerGroup#token}
  */
  readonly token?: string;
  /**
  * The request URL to trigger the group run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group#url TriggerGroup#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group checkly_trigger_group}
*/
export class TriggerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_trigger_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TriggerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TriggerGroup to import
  * @param importFromId The id of the existing TriggerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TriggerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_trigger_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/trigger_group checkly_trigger_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TriggerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TriggerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_trigger_group',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.1',
        providerVersionConstraint: '1.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
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
