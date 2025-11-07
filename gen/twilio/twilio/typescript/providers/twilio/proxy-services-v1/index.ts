// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#callback_url ProxyServicesV1#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#chat_instance_sid ProxyServicesV1#chat_instance_sid}
  */
  readonly chatInstanceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#default_ttl ProxyServicesV1#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#geo_match_level ProxyServicesV1#geo_match_level}
  */
  readonly geoMatchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#id ProxyServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#intercept_callback_url ProxyServicesV1#intercept_callback_url}
  */
  readonly interceptCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#number_selection_behavior ProxyServicesV1#number_selection_behavior}
  */
  readonly numberSelectionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#out_of_session_callback_url ProxyServicesV1#out_of_session_callback_url}
  */
  readonly outOfSessionCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#unique_name ProxyServicesV1#unique_name}
  */
  readonly uniqueName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1 twilio_proxy_services_v1}
*/
export class ProxyServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_proxy_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyServicesV1 to import
  * @param importFromId The id of the existing ProxyServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_proxy_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_v1 twilio_proxy_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyServicesV1Config
  */
  public constructor(scope: Construct, id: string, config: ProxyServicesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_proxy_services_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackUrl = config.callbackUrl;
    this._chatInstanceSid = config.chatInstanceSid;
    this._defaultTtl = config.defaultTtl;
    this._geoMatchLevel = config.geoMatchLevel;
    this._id = config.id;
    this._interceptCallbackUrl = config.interceptCallbackUrl;
    this._numberSelectionBehavior = config.numberSelectionBehavior;
    this._outOfSessionCallbackUrl = config.outOfSessionCallbackUrl;
    this._uniqueName = config.uniqueName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_url - computed: true, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // chat_instance_sid - computed: true, optional: true, required: false
  private _chatInstanceSid?: string; 
  public get chatInstanceSid() {
    return this.getStringAttribute('chat_instance_sid');
  }
  public set chatInstanceSid(value: string) {
    this._chatInstanceSid = value;
  }
  public resetChatInstanceSid() {
    this._chatInstanceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInstanceSidInput() {
    return this._chatInstanceSid;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // geo_match_level - computed: true, optional: true, required: false
  private _geoMatchLevel?: string; 
  public get geoMatchLevel() {
    return this.getStringAttribute('geo_match_level');
  }
  public set geoMatchLevel(value: string) {
    this._geoMatchLevel = value;
  }
  public resetGeoMatchLevel() {
    this._geoMatchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchLevelInput() {
    return this._geoMatchLevel;
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

  // intercept_callback_url - computed: true, optional: true, required: false
  private _interceptCallbackUrl?: string; 
  public get interceptCallbackUrl() {
    return this.getStringAttribute('intercept_callback_url');
  }
  public set interceptCallbackUrl(value: string) {
    this._interceptCallbackUrl = value;
  }
  public resetInterceptCallbackUrl() {
    this._interceptCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptCallbackUrlInput() {
    return this._interceptCallbackUrl;
  }

  // number_selection_behavior - computed: true, optional: true, required: false
  private _numberSelectionBehavior?: string; 
  public get numberSelectionBehavior() {
    return this.getStringAttribute('number_selection_behavior');
  }
  public set numberSelectionBehavior(value: string) {
    this._numberSelectionBehavior = value;
  }
  public resetNumberSelectionBehavior() {
    this._numberSelectionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberSelectionBehaviorInput() {
    return this._numberSelectionBehavior;
  }

  // out_of_session_callback_url - computed: true, optional: true, required: false
  private _outOfSessionCallbackUrl?: string; 
  public get outOfSessionCallbackUrl() {
    return this.getStringAttribute('out_of_session_callback_url');
  }
  public set outOfSessionCallbackUrl(value: string) {
    this._outOfSessionCallbackUrl = value;
  }
  public resetOutOfSessionCallbackUrl() {
    this._outOfSessionCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionCallbackUrlInput() {
    return this._outOfSessionCallbackUrl;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // unique_name - computed: false, optional: false, required: true
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      chat_instance_sid: cdktf.stringToTerraform(this._chatInstanceSid),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      geo_match_level: cdktf.stringToTerraform(this._geoMatchLevel),
      id: cdktf.stringToTerraform(this._id),
      intercept_callback_url: cdktf.stringToTerraform(this._interceptCallbackUrl),
      number_selection_behavior: cdktf.stringToTerraform(this._numberSelectionBehavior),
      out_of_session_callback_url: cdktf.stringToTerraform(this._outOfSessionCallbackUrl),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chat_instance_sid: {
        value: cdktf.stringToHclTerraform(this._chatInstanceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_match_level: {
        value: cdktf.stringToHclTerraform(this._geoMatchLevel),
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
      intercept_callback_url: {
        value: cdktf.stringToHclTerraform(this._interceptCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_selection_behavior: {
        value: cdktf.stringToHclTerraform(this._numberSelectionBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_session_callback_url: {
        value: cdktf.stringToHclTerraform(this._outOfSessionCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
