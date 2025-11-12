// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCustomAuthActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#id IntegrationCustomAuthAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the integration this action is associated with. The integration is required to be of type `custom-rest-actions` and its credentials type set as `userDefinedOAuth`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#integration_id IntegrationCustomAuthAction#integration_id}
  */
  readonly integrationId: string;
  /**
  * Name of the action to override the default name. Can be up to 256 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#name IntegrationCustomAuthAction#name}
  */
  readonly name?: string;
  /**
  * config_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#config_request IntegrationCustomAuthAction#config_request}
  */
  readonly configRequest?: IntegrationCustomAuthActionConfigRequest;
  /**
  * config_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#config_response IntegrationCustomAuthAction#config_response}
  */
  readonly configResponse?: IntegrationCustomAuthActionConfigResponse;
}
export interface IntegrationCustomAuthActionConfigRequest {
  /**
  * Map of headers in name, value pairs to include in request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#headers IntegrationCustomAuthAction#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Velocity template to define request body sent to 3rd party service. Any instances of '${' must be properly escaped as '$${'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#request_template IntegrationCustomAuthAction#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * HTTP method to use for request (GET | PUT | POST | PATCH | DELETE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#request_type IntegrationCustomAuthAction#request_type}
  */
  readonly requestType: string;
  /**
  * URL that may include placeholders for requests to 3rd party service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#request_url_template IntegrationCustomAuthAction#request_url_template}
  */
  readonly requestUrlTemplate: string;
}

export function integrationCustomAuthActionConfigRequestToTerraform(struct?: IntegrationCustomAuthActionConfigRequestOutputReference | IntegrationCustomAuthActionConfigRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    request_template: cdktf.stringToTerraform(struct!.requestTemplate),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    request_url_template: cdktf.stringToTerraform(struct!.requestUrlTemplate),
  }
}


export function integrationCustomAuthActionConfigRequestToHclTerraform(struct?: IntegrationCustomAuthActionConfigRequestOutputReference | IntegrationCustomAuthActionConfigRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_template: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_url_template: {
      value: cdktf.stringToHclTerraform(struct!.requestUrlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationCustomAuthActionConfigRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationCustomAuthActionConfigRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._requestTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplate = this._requestTemplate;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._requestUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUrlTemplate = this._requestUrlTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationCustomAuthActionConfigRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._requestTemplate = undefined;
      this._requestType = undefined;
      this._requestUrlTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._requestTemplate = value.requestTemplate;
      this._requestType = value.requestType;
      this._requestUrlTemplate = value.requestUrlTemplate;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // request_template - computed: true, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // request_url_template - computed: false, optional: false, required: true
  private _requestUrlTemplate?: string; 
  public get requestUrlTemplate() {
    return this.getStringAttribute('request_url_template');
  }
  public set requestUrlTemplate(value: string) {
    this._requestUrlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlTemplateInput() {
    return this._requestUrlTemplate;
  }
}
export interface IntegrationCustomAuthActionConfigResponse {
  /**
  * Velocity template to build response to return from Action. Any instances of '${' must be properly escaped as '$${'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#success_template IntegrationCustomAuthAction#success_template}
  */
  readonly successTemplate?: string;
  /**
  * Map 'attribute name' and 'JSON path' pairs used to extract data from REST response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#translation_map IntegrationCustomAuthAction#translation_map}
  */
  readonly translationMap?: { [key: string]: string };
  /**
  * Map 'attribute name' and 'default value' pairs used as fallback values if JSON path extraction fails for specified key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#translation_map_defaults IntegrationCustomAuthAction#translation_map_defaults}
  */
  readonly translationMapDefaults?: { [key: string]: string };
}

export function integrationCustomAuthActionConfigResponseToTerraform(struct?: IntegrationCustomAuthActionConfigResponseOutputReference | IntegrationCustomAuthActionConfigResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    success_template: cdktf.stringToTerraform(struct!.successTemplate),
    translation_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.translationMap),
    translation_map_defaults: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.translationMapDefaults),
  }
}


export function integrationCustomAuthActionConfigResponseToHclTerraform(struct?: IntegrationCustomAuthActionConfigResponseOutputReference | IntegrationCustomAuthActionConfigResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    success_template: {
      value: cdktf.stringToHclTerraform(struct!.successTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translation_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.translationMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    translation_map_defaults: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.translationMapDefaults),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationCustomAuthActionConfigResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationCustomAuthActionConfigResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._successTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.successTemplate = this._successTemplate;
    }
    if (this._translationMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationMap = this._translationMap;
    }
    if (this._translationMapDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationMapDefaults = this._translationMapDefaults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationCustomAuthActionConfigResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._successTemplate = undefined;
      this._translationMap = undefined;
      this._translationMapDefaults = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._successTemplate = value.successTemplate;
      this._translationMap = value.translationMap;
      this._translationMapDefaults = value.translationMapDefaults;
    }
  }

  // success_template - computed: true, optional: true, required: false
  private _successTemplate?: string; 
  public get successTemplate() {
    return this.getStringAttribute('success_template');
  }
  public set successTemplate(value: string) {
    this._successTemplate = value;
  }
  public resetSuccessTemplate() {
    this._successTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successTemplateInput() {
    return this._successTemplate;
  }

  // translation_map - computed: false, optional: true, required: false
  private _translationMap?: { [key: string]: string }; 
  public get translationMap() {
    return this.getStringMapAttribute('translation_map');
  }
  public set translationMap(value: { [key: string]: string }) {
    this._translationMap = value;
  }
  public resetTranslationMap() {
    this._translationMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationMapInput() {
    return this._translationMap;
  }

  // translation_map_defaults - computed: false, optional: true, required: false
  private _translationMapDefaults?: { [key: string]: string }; 
  public get translationMapDefaults() {
    return this.getStringMapAttribute('translation_map_defaults');
  }
  public set translationMapDefaults(value: { [key: string]: string }) {
    this._translationMapDefaults = value;
  }
  public resetTranslationMapDefaults() {
    this._translationMapDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationMapDefaultsInput() {
    return this._translationMapDefaults;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action genesyscloud_integration_custom_auth_action}
*/
export class IntegrationCustomAuthAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_integration_custom_auth_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationCustomAuthAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationCustomAuthAction to import
  * @param importFromId The id of the existing IntegrationCustomAuthAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationCustomAuthAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_integration_custom_auth_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_custom_auth_action genesyscloud_integration_custom_auth_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCustomAuthActionConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCustomAuthActionConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_integration_custom_auth_action',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._name = config.name;
    this._configRequest.internalValue = config.configRequest;
    this._configResponse.internalValue = config.configResponse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // config_request - computed: false, optional: true, required: false
  private _configRequest = new IntegrationCustomAuthActionConfigRequestOutputReference(this, "config_request");
  public get configRequest() {
    return this._configRequest;
  }
  public putConfigRequest(value: IntegrationCustomAuthActionConfigRequest) {
    this._configRequest.internalValue = value;
  }
  public resetConfigRequest() {
    this._configRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRequestInput() {
    return this._configRequest.internalValue;
  }

  // config_response - computed: false, optional: true, required: false
  private _configResponse = new IntegrationCustomAuthActionConfigResponseOutputReference(this, "config_response");
  public get configResponse() {
    return this._configResponse;
  }
  public putConfigResponse(value: IntegrationCustomAuthActionConfigResponse) {
    this._configResponse.internalValue = value;
  }
  public resetConfigResponse() {
    this._configResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configResponseInput() {
    return this._configResponse.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
      config_request: integrationCustomAuthActionConfigRequestToTerraform(this._configRequest.internalValue),
      config_response: integrationCustomAuthActionConfigResponseToTerraform(this._configResponse.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
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
      config_request: {
        value: integrationCustomAuthActionConfigRequestToHclTerraform(this._configRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationCustomAuthActionConfigRequestList",
      },
      config_response: {
        value: integrationCustomAuthActionConfigResponseToHclTerraform(this._configResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationCustomAuthActionConfigResponseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
