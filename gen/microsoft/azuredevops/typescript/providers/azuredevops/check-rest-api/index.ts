// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#body CheckRestApi#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#completion_event CheckRestApi#completion_event}
  */
  readonly completionEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#connected_service_name CheckRestApi#connected_service_name}
  */
  readonly connectedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#connected_service_name_selector CheckRestApi#connected_service_name_selector}
  */
  readonly connectedServiceNameSelector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#display_name CheckRestApi#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#headers CheckRestApi#headers}
  */
  readonly headers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#id CheckRestApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#method CheckRestApi#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#project_id CheckRestApi#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#retry_interval CheckRestApi#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#success_criteria CheckRestApi#success_criteria}
  */
  readonly successCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#target_resource_id CheckRestApi#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#target_resource_type CheckRestApi#target_resource_type}
  */
  readonly targetResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#timeout CheckRestApi#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#url_suffix CheckRestApi#url_suffix}
  */
  readonly urlSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#variable_group_name CheckRestApi#variable_group_name}
  */
  readonly variableGroupName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#timeouts CheckRestApi#timeouts}
  */
  readonly timeouts?: CheckRestApiTimeouts;
}
export interface CheckRestApiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#create CheckRestApi#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#delete CheckRestApi#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#read CheckRestApi#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#update CheckRestApi#update}
  */
  readonly update?: string;
}

export function checkRestApiTimeoutsToTerraform(struct?: CheckRestApiTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function checkRestApiTimeoutsToHclTerraform(struct?: CheckRestApiTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRestApiTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckRestApiTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRestApiTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api azuredevops_check_rest_api}
*/
export class CheckRestApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_check_rest_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckRestApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckRestApi to import
  * @param importFromId The id of the existing CheckRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckRestApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_check_rest_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/check_rest_api azuredevops_check_rest_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckRestApiConfig
  */
  public constructor(scope: Construct, id: string, config: CheckRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_check_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._completionEvent = config.completionEvent;
    this._connectedServiceName = config.connectedServiceName;
    this._connectedServiceNameSelector = config.connectedServiceNameSelector;
    this._displayName = config.displayName;
    this._headers = config.headers;
    this._id = config.id;
    this._method = config.method;
    this._projectId = config.projectId;
    this._retryInterval = config.retryInterval;
    this._successCriteria = config.successCriteria;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
    this._timeout = config.timeout;
    this._urlSuffix = config.urlSuffix;
    this._variableGroupName = config.variableGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // completion_event - computed: false, optional: true, required: false
  private _completionEvent?: string; 
  public get completionEvent() {
    return this.getStringAttribute('completion_event');
  }
  public set completionEvent(value: string) {
    this._completionEvent = value;
  }
  public resetCompletionEvent() {
    this._completionEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionEventInput() {
    return this._completionEvent;
  }

  // connected_service_name - computed: false, optional: false, required: true
  private _connectedServiceName?: string; 
  public get connectedServiceName() {
    return this.getStringAttribute('connected_service_name');
  }
  public set connectedServiceName(value: string) {
    this._connectedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedServiceNameInput() {
    return this._connectedServiceName;
  }

  // connected_service_name_selector - computed: false, optional: false, required: true
  private _connectedServiceNameSelector?: string; 
  public get connectedServiceNameSelector() {
    return this.getStringAttribute('connected_service_name_selector');
  }
  public set connectedServiceNameSelector(value: string) {
    this._connectedServiceNameSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedServiceNameSelectorInput() {
    return this._connectedServiceNameSelector;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // success_criteria - computed: false, optional: true, required: false
  private _successCriteria?: string; 
  public get successCriteria() {
    return this.getStringAttribute('success_criteria');
  }
  public set successCriteria(value: string) {
    this._successCriteria = value;
  }
  public resetSuccessCriteria() {
    this._successCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCriteriaInput() {
    return this._successCriteria;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: false, required: true
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url_suffix - computed: false, optional: true, required: false
  private _urlSuffix?: string; 
  public get urlSuffix() {
    return this.getStringAttribute('url_suffix');
  }
  public set urlSuffix(value: string) {
    this._urlSuffix = value;
  }
  public resetUrlSuffix() {
    this._urlSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSuffixInput() {
    return this._urlSuffix;
  }

  // variable_group_name - computed: false, optional: true, required: false
  private _variableGroupName?: string; 
  public get variableGroupName() {
    return this.getStringAttribute('variable_group_name');
  }
  public set variableGroupName(value: string) {
    this._variableGroupName = value;
  }
  public resetVariableGroupName() {
    this._variableGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupNameInput() {
    return this._variableGroupName;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CheckRestApiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CheckRestApiTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      completion_event: cdktf.stringToTerraform(this._completionEvent),
      connected_service_name: cdktf.stringToTerraform(this._connectedServiceName),
      connected_service_name_selector: cdktf.stringToTerraform(this._connectedServiceNameSelector),
      display_name: cdktf.stringToTerraform(this._displayName),
      headers: cdktf.stringToTerraform(this._headers),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      project_id: cdktf.stringToTerraform(this._projectId),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      success_criteria: cdktf.stringToTerraform(this._successCriteria),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      timeout: cdktf.numberToTerraform(this._timeout),
      url_suffix: cdktf.stringToTerraform(this._urlSuffix),
      variable_group_name: cdktf.stringToTerraform(this._variableGroupName),
      timeouts: checkRestApiTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      completion_event: {
        value: cdktf.stringToHclTerraform(this._completionEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connected_service_name: {
        value: cdktf.stringToHclTerraform(this._connectedServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connected_service_name_selector: {
        value: cdktf.stringToHclTerraform(this._connectedServiceNameSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      success_criteria: {
        value: cdktf.stringToHclTerraform(this._successCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_type: {
        value: cdktf.stringToHclTerraform(this._targetResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_suffix: {
        value: cdktf.stringToHclTerraform(this._urlSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_group_name: {
        value: cdktf.stringToHclTerraform(this._variableGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: checkRestApiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckRestApiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
