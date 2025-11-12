// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UseractionsSubscriptionLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log#auth_header_name UseractionsSubscriptionLog#auth_header_name}
  */
  readonly authHeaderName: string;
  /**
  * The value of the authorization header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log#auth_header_value UseractionsSubscriptionLog#auth_header_value}
  */
  readonly authHeaderValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log#id UseractionsSubscriptionLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL to send user action logs for the specified client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log#url UseractionsSubscriptionLog#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log edgecenter_useractions_subscription_log}
*/
export class UseractionsSubscriptionLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_useractions_subscription_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UseractionsSubscriptionLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UseractionsSubscriptionLog to import
  * @param importFromId The id of the existing UseractionsSubscriptionLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UseractionsSubscriptionLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_useractions_subscription_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_log edgecenter_useractions_subscription_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UseractionsSubscriptionLogConfig
  */
  public constructor(scope: Construct, id: string, config: UseractionsSubscriptionLogConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_useractions_subscription_log',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4',
        providerVersionConstraint: '0.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authHeaderName = config.authHeaderName;
    this._authHeaderValue = config.authHeaderValue;
    this._id = config.id;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_header_name - computed: false, optional: false, required: true
  private _authHeaderName?: string; 
  public get authHeaderName() {
    return this.getStringAttribute('auth_header_name');
  }
  public set authHeaderName(value: string) {
    this._authHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderNameInput() {
    return this._authHeaderName;
  }

  // auth_header_value - computed: false, optional: false, required: true
  private _authHeaderValue?: string; 
  public get authHeaderValue() {
    return this.getStringAttribute('auth_header_value');
  }
  public set authHeaderValue(value: string) {
    this._authHeaderValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderValueInput() {
    return this._authHeaderValue;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
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
      auth_header_name: cdktf.stringToTerraform(this._authHeaderName),
      auth_header_value: cdktf.stringToTerraform(this._authHeaderValue),
      id: cdktf.stringToTerraform(this._id),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_header_name: {
        value: cdktf.stringToHclTerraform(this._authHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_header_value: {
        value: cdktf.stringToHclTerraform(this._authHeaderValue),
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
