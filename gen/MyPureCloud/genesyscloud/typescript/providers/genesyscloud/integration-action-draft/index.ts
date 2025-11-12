// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationActionDraftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category of action. Can be up to 256 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#category IntegrationActionDraft#category}
  */
  readonly category: string;
  /**
  * Optional 1-60 second timeout enforced on the execution or test of this action. This setting is invalid for Custom Authentication Actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#config_timeout_seconds IntegrationActionDraft#config_timeout_seconds}
  */
  readonly configTimeoutSeconds?: number;
  /**
  * JSON Schema that defines the body of the request that the client (edge/architect/postman) is sending to the service, on the /execute path. Changing the contract_input attribute will cause the existing integration_action to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#contract_input IntegrationActionDraft#contract_input}
  */
  readonly contractInput: string;
  /**
  * JSON schema that defines the transformed, successful result that will be sent back to the caller. Changing the contract_output attribute will cause the existing integration_action to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#contract_output IntegrationActionDraft#contract_output}
  */
  readonly contractOutput: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#id IntegrationActionDraft#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the integration this action is associated with. Changing the integration_id attribute will cause the existing integration_action to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#integration_id IntegrationActionDraft#integration_id}
  */
  readonly integrationId: string;
  /**
  * Name of the action. Can be up to 256 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#name IntegrationActionDraft#name}
  */
  readonly name: string;
  /**
  * Indication of whether or not the action is designed to accept sensitive data. Changing the secure attribute will cause the existing integration_action to be dropped and recreated with a new ID. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#secure IntegrationActionDraft#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * config_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#config_request IntegrationActionDraft#config_request}
  */
  readonly configRequest?: IntegrationActionDraftConfigRequest;
  /**
  * config_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#config_response IntegrationActionDraft#config_response}
  */
  readonly configResponse?: IntegrationActionDraftConfigResponse;
}
export interface IntegrationActionDraftConfigRequest {
  /**
  * Map of headers in name, value pairs to include in request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#headers IntegrationActionDraft#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Velocity template to define request body sent to 3rd party service. Any instances of '${' must be properly escaped as '$${'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#request_template IntegrationActionDraft#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * HTTP method to use for request (GET | PUT | POST | PATCH | DELETE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#request_type IntegrationActionDraft#request_type}
  */
  readonly requestType: string;
  /**
  * URL that may include placeholders for requests to 3rd party service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#request_url_template IntegrationActionDraft#request_url_template}
  */
  readonly requestUrlTemplate: string;
}

export function integrationActionDraftConfigRequestToTerraform(struct?: IntegrationActionDraftConfigRequestOutputReference | IntegrationActionDraftConfigRequest): any {
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


export function integrationActionDraftConfigRequestToHclTerraform(struct?: IntegrationActionDraftConfigRequestOutputReference | IntegrationActionDraftConfigRequest): any {
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

export class IntegrationActionDraftConfigRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationActionDraftConfigRequest | undefined {
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

  public set internalValue(value: IntegrationActionDraftConfigRequest | undefined) {
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
export interface IntegrationActionDraftConfigResponse {
  /**
  * Velocity template to build response to return from Action. Any instances of '${' must be properly escaped as '$${'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#success_template IntegrationActionDraft#success_template}
  */
  readonly successTemplate?: string;
  /**
  * Map 'attribute name' and 'JSON path' pairs used to extract data from REST response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#translation_map IntegrationActionDraft#translation_map}
  */
  readonly translationMap?: { [key: string]: string };
  /**
  * Map 'attribute name' and 'default value' pairs used as fallback values if JSON path extraction fails for specified key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#translation_map_defaults IntegrationActionDraft#translation_map_defaults}
  */
  readonly translationMapDefaults?: { [key: string]: string };
}

export function integrationActionDraftConfigResponseToTerraform(struct?: IntegrationActionDraftConfigResponseOutputReference | IntegrationActionDraftConfigResponse): any {
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


export function integrationActionDraftConfigResponseToHclTerraform(struct?: IntegrationActionDraftConfigResponseOutputReference | IntegrationActionDraftConfigResponse): any {
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

export class IntegrationActionDraftConfigResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationActionDraftConfigResponse | undefined {
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

  public set internalValue(value: IntegrationActionDraftConfigResponse | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft genesyscloud_integration_action_draft}
*/
export class IntegrationActionDraft extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_integration_action_draft";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationActionDraft resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationActionDraft to import
  * @param importFromId The id of the existing IntegrationActionDraft that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationActionDraft to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_integration_action_draft", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/integration_action_draft genesyscloud_integration_action_draft} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationActionDraftConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationActionDraftConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_integration_action_draft',
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
    this._category = config.category;
    this._configTimeoutSeconds = config.configTimeoutSeconds;
    this._contractInput = config.contractInput;
    this._contractOutput = config.contractOutput;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._name = config.name;
    this._secure = config.secure;
    this._configRequest.internalValue = config.configRequest;
    this._configResponse.internalValue = config.configResponse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // config_timeout_seconds - computed: false, optional: true, required: false
  private _configTimeoutSeconds?: number; 
  public get configTimeoutSeconds() {
    return this.getNumberAttribute('config_timeout_seconds');
  }
  public set configTimeoutSeconds(value: number) {
    this._configTimeoutSeconds = value;
  }
  public resetConfigTimeoutSeconds() {
    this._configTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTimeoutSecondsInput() {
    return this._configTimeoutSeconds;
  }

  // contract_input - computed: false, optional: false, required: true
  private _contractInput?: string; 
  public get contractInput() {
    return this.getStringAttribute('contract_input');
  }
  public set contractInput(value: string) {
    this._contractInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInputInput() {
    return this._contractInput;
  }

  // contract_output - computed: false, optional: false, required: true
  private _contractOutput?: string; 
  public get contractOutput() {
    return this.getStringAttribute('contract_output');
  }
  public set contractOutput(value: string) {
    this._contractOutput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractOutputInput() {
    return this._contractOutput;
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

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // config_request - computed: false, optional: true, required: false
  private _configRequest = new IntegrationActionDraftConfigRequestOutputReference(this, "config_request");
  public get configRequest() {
    return this._configRequest;
  }
  public putConfigRequest(value: IntegrationActionDraftConfigRequest) {
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
  private _configResponse = new IntegrationActionDraftConfigResponseOutputReference(this, "config_response");
  public get configResponse() {
    return this._configResponse;
  }
  public putConfigResponse(value: IntegrationActionDraftConfigResponse) {
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
      category: cdktf.stringToTerraform(this._category),
      config_timeout_seconds: cdktf.numberToTerraform(this._configTimeoutSeconds),
      contract_input: cdktf.stringToTerraform(this._contractInput),
      contract_output: cdktf.stringToTerraform(this._contractOutput),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
      secure: cdktf.booleanToTerraform(this._secure),
      config_request: integrationActionDraftConfigRequestToTerraform(this._configRequest.internalValue),
      config_response: integrationActionDraftConfigResponseToTerraform(this._configResponse.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._configTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contract_input: {
        value: cdktf.stringToHclTerraform(this._contractInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_output: {
        value: cdktf.stringToHclTerraform(this._contractOutput),
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
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_request: {
        value: integrationActionDraftConfigRequestToHclTerraform(this._configRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationActionDraftConfigRequestList",
      },
      config_response: {
        value: integrationActionDraftConfigResponseToHclTerraform(this._configResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationActionDraftConfigResponseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
