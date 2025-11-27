// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeApiOauth2ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Callback URLs of the applications using this oauth2 client. Required if using the AUTHORIZATION_CODE flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#callback_urls MeApiOauth2Client#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * A description of your oauth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#description MeApiOauth2Client#description}
  */
  readonly description: string;
  /**
  * OAuth2 flow type implemented for this oauth2 client. Can be either AUTHORIZATION_CODE or CLIENT_CREDENTIALS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#flow MeApiOauth2Client#flow}
  */
  readonly flow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#id MeApiOauth2Client#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#name MeApiOauth2Client#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client ovh_me_api_oauth2_client}
*/
export class MeApiOauth2Client extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_me_api_oauth2_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeApiOauth2Client resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeApiOauth2Client to import
  * @param importFromId The id of the existing MeApiOauth2Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeApiOauth2Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_me_api_oauth2_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/me_api_oauth2_client ovh_me_api_oauth2_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeApiOauth2ClientConfig
  */
  public constructor(scope: Construct, id: string, config: MeApiOauth2ClientConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_me_api_oauth2_client',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackUrls = config.callbackUrls;
    this._description = config.description;
    this._flow = config.flow;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_urls - computed: false, optional: true, required: false
  private _callbackUrls?: string[]; 
  public get callbackUrls() {
    return this.getListAttribute('callback_urls');
  }
  public set callbackUrls(value: string[]) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // flow - computed: false, optional: false, required: true
  private _flow?: string; 
  public get flow() {
    return this.getStringAttribute('flow');
  }
  public set flow(value: string) {
    this._flow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow;
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

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
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
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackUrls),
      description: cdktf.stringToTerraform(this._description),
      flow: cdktf.stringToTerraform(this._flow),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow: {
        value: cdktf.stringToHclTerraform(this._flow),
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
