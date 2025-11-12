// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the response field to be used as the resource's unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#api_id_attribute Api#api_id_attribute}
  */
  readonly apiIdAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#id Api#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * HTTP method. Configure one of the parameters below. 
  *    * POST, GET, PATCH, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#method Api#method}
  */
  readonly method: string;
  /**
  * JSON body to invoke the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#payload Api#payload}
  */
  readonly payload?: string;
  /**
  * Trigger the API for the same request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#recall Api#recall}
  */
  readonly recall?: boolean | cdktf.IResolvable;
  /**
  * Dsm resource type. Configure one of the parameters below.
  *    * key, plugin, app, group, user, user_invite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#resource_type Api#resource_type}
  */
  readonly resourceType: string;
  /**
  * DSM resource UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#resource_uuid Api#resource_uuid}
  */
  readonly resourceUuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api dsm_api}
*/
export class Api extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Api resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Api to import
  * @param importFromId The id of the existing Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Api to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/api dsm_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_api',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiIdAttribute = config.apiIdAttribute;
    this._id = config.id;
    this._method = config.method;
    this._payload = config.payload;
    this._recall = config.recall;
    this._resourceType = config.resourceType;
    this._resourceUuid = config.resourceUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id_attribute - computed: false, optional: true, required: false
  private _apiIdAttribute?: string; 
  public get apiIdAttribute() {
    return this.getStringAttribute('api_id_attribute');
  }
  public set apiIdAttribute(value: string) {
    this._apiIdAttribute = value;
  }
  public resetApiIdAttribute() {
    this._apiIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdAttributeInput() {
    return this._apiIdAttribute;
  }

  // api_response - computed: true, optional: false, required: false
  public get apiResponse() {
    return this.getStringAttribute('api_response');
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // recall - computed: false, optional: true, required: false
  private _recall?: boolean | cdktf.IResolvable; 
  public get recall() {
    return this.getBooleanAttribute('recall');
  }
  public set recall(value: boolean | cdktf.IResolvable) {
    this._recall = value;
  }
  public resetRecall() {
    this._recall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recallInput() {
    return this._recall;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_uuid - computed: false, optional: true, required: false
  private _resourceUuid?: string; 
  public get resourceUuid() {
    return this.getStringAttribute('resource_uuid');
  }
  public set resourceUuid(value: string) {
    this._resourceUuid = value;
  }
  public resetResourceUuid() {
    this._resourceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUuidInput() {
    return this._resourceUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id_attribute: cdktf.stringToTerraform(this._apiIdAttribute),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      payload: cdktf.stringToTerraform(this._payload),
      recall: cdktf.booleanToTerraform(this._recall),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resource_uuid: cdktf.stringToTerraform(this._resourceUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id_attribute: {
        value: cdktf.stringToHclTerraform(this._apiIdAttribute),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recall: {
        value: cdktf.booleanToHclTerraform(this._recall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_uuid: {
        value: cdktf.stringToHclTerraform(this._resourceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
