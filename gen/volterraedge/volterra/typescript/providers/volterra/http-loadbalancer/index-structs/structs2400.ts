import * as cdktf from 'cdktf';
import { HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint,
httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToTerraform,
httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToHclTerraform,
HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointOutputReference } from './structs2000'
export interface HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fields HttpLoadbalancer#fields}
  */
  readonly fields: string[];
}

export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyToTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyOutputReference | HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyToHclTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyOutputReference | HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#mask HttpLoadbalancer#mask}
  */
  readonly mask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#report HttpLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#body HttpLoadbalancer#body}
  */
  readonly body?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody;
}

export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseToTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    mask: cdktf.booleanToTerraform(struct!.mask),
    report: cdktf.booleanToTerraform(struct!.report),
    api_endpoint: httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToTerraform(struct!.apiEndpoint),
    body: httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyToTerraform(struct!.body),
  }
}


export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseToHclTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.booleanToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint: {
      value: httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointList",
    },
    body: {
      value: httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._mask = undefined;
      this._report = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._body.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._mask = value.mask;
      this._report = value.report;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._body.internalValue = value.body;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: boolean | cdktf.IResolvable; 
  public get mask() {
    return this.getBooleanAttribute('mask');
  }
  public set mask(value: boolean | cdktf.IResolvable) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }
}

export class HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseOutputReference {
    return new HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSensitiveDataDisclosureRules {
  /**
  * sensitive_data_types_in_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sensitive_data_types_in_response HttpLoadbalancer#sensitive_data_types_in_response}
  */
  readonly sensitiveDataTypesInResponse?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse[] | cdktf.IResolvable;
}

export function httpLoadbalancerSensitiveDataDisclosureRulesToTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesOutputReference | HttpLoadbalancerSensitiveDataDisclosureRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_data_types_in_response: cdktf.listMapper(httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseToTerraform, true)(struct!.sensitiveDataTypesInResponse),
  }
}


export function httpLoadbalancerSensitiveDataDisclosureRulesToHclTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesOutputReference | HttpLoadbalancerSensitiveDataDisclosureRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_data_types_in_response: {
      value: cdktf.listMapperHcl(httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseToHclTerraform, true)(struct!.sensitiveDataTypesInResponse),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSensitiveDataDisclosureRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataDisclosureRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveDataTypesInResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataTypesInResponse = this._sensitiveDataTypesInResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSensitiveDataDisclosureRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitiveDataTypesInResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitiveDataTypesInResponse.internalValue = value.sensitiveDataTypesInResponse;
    }
  }

  // sensitive_data_types_in_response - computed: false, optional: true, required: false
  private _sensitiveDataTypesInResponse = new HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseList(this, "sensitive_data_types_in_response", false);
  public get sensitiveDataTypesInResponse() {
    return this._sensitiveDataTypesInResponse;
  }
  public putSensitiveDataTypesInResponse(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponse[] | cdktf.IResolvable) {
    this._sensitiveDataTypesInResponse.internalValue = value;
  }
  public resetSensitiveDataTypesInResponse() {
    this._sensitiveDataTypesInResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypesInResponseInput() {
    return this._sensitiveDataTypesInResponse.internalValue;
  }
}
export interface HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefToTerraform(struct?: HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefOutputReference | HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefToHclTerraform(struct?: HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefOutputReference | HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerSensitiveDataPolicy {
  /**
  * sensitive_data_policy_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sensitive_data_policy_ref HttpLoadbalancer#sensitive_data_policy_ref}
  */
  readonly sensitiveDataPolicyRef: HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef;
}

export function httpLoadbalancerSensitiveDataPolicyToTerraform(struct?: HttpLoadbalancerSensitiveDataPolicyOutputReference | HttpLoadbalancerSensitiveDataPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_data_policy_ref: httpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefToTerraform(struct!.sensitiveDataPolicyRef),
  }
}


export function httpLoadbalancerSensitiveDataPolicyToHclTerraform(struct?: HttpLoadbalancerSensitiveDataPolicyOutputReference | HttpLoadbalancerSensitiveDataPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_data_policy_ref: {
      value: httpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefToHclTerraform(struct!.sensitiveDataPolicyRef),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSensitiveDataPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveDataPolicyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataPolicyRef = this._sensitiveDataPolicyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSensitiveDataPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitiveDataPolicyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitiveDataPolicyRef.internalValue = value.sensitiveDataPolicyRef;
    }
  }

  // sensitive_data_policy_ref - computed: false, optional: false, required: true
  private _sensitiveDataPolicyRef = new HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRefOutputReference(this, "sensitive_data_policy_ref");
  public get sensitiveDataPolicyRef() {
    return this._sensitiveDataPolicyRef;
  }
  public putSensitiveDataPolicyRef(value: HttpLoadbalancerSensitiveDataPolicySensitiveDataPolicyRef) {
    this._sensitiveDataPolicyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataPolicyRefInput() {
    return this._sensitiveDataPolicyRef.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#user HttpLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#password HttpLoadbalancer#password}
  */
  readonly password?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#simple_login HttpLoadbalancer#simple_login}
  */
  readonly simpleLogin?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_api_crawler HttpLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_crawler_config HttpLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_code_repo HttpLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_repos HttpLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#code_base_integration HttpLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#selected_repos HttpLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#code_base_integrations HttpLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_discovery_ref HttpLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#purge_duration_for_inactive_discovered_apis HttpLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_path HttpLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods: string[];
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_sections HttpLoadbalancer#custom_sections}
  */
  readonly customSections: string[];
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key_pattern HttpLoadbalancer#key_pattern}
  */
  readonly keyPattern: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#value_pattern HttpLoadbalancer#value_pattern}
  */
  readonly valuePattern: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPattern.internalValue = value.keyPattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: false, required: true
  private _keyPattern = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_request_sections HttpLoadbalancer#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_response_sections HttpLoadbalancer#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_sections HttpLoadbalancer#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_target HttpLoadbalancer#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_target HttpLoadbalancer#api_endpoint_target}
  */
  readonly apiEndpointTarget?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_sections HttpLoadbalancer#custom_sections}
  */
  readonly customSections?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key_pattern HttpLoadbalancer#key_pattern}
  */
  readonly keyPattern?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key_value_pattern HttpLoadbalancer#key_value_pattern}
  */
  readonly keyValuePattern?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#value_pattern HttpLoadbalancer#value_pattern}
  */
  readonly valuePattern?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_request_sections: cdktf.booleanToTerraform(struct!.allRequestSections),
    all_response_sections: cdktf.booleanToTerraform(struct!.allResponseSections),
    all_sections: cdktf.booleanToTerraform(struct!.allSections),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_target: cdktf.booleanToTerraform(struct!.anyTarget),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_target: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_request_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allRequestSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_response_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allResponseSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_target: {
      value: cdktf.booleanToHclTerraform(struct!.anyTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_target: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequestSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequestSections = this._allRequestSections;
    }
    if (this._allResponseSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allResponseSections = this._allResponseSections;
    }
    if (this._allSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSections = this._allSections;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyTarget = this._anyTarget;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointTarget = this._apiEndpointTarget?.internalValue;
    }
    if (this._customSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections?.internalValue;
    }
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._keyValuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePattern = this._keyValuePattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequestSections = undefined;
      this._allResponseSections = undefined;
      this._allSections = undefined;
      this._anyDomain = undefined;
      this._anyTarget = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointTarget.internalValue = undefined;
      this._customSections.internalValue = undefined;
      this._keyPattern.internalValue = undefined;
      this._keyValuePattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequestSections = value.allRequestSections;
      this._allResponseSections = value.allResponseSections;
      this._allSections = value.allSections;
      this._anyDomain = value.anyDomain;
      this._anyTarget = value.anyTarget;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointTarget.internalValue = value.apiEndpointTarget;
      this._customSections.internalValue = value.customSections;
      this._keyPattern.internalValue = value.keyPattern;
      this._keyValuePattern.internalValue = value.keyValuePattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // all_request_sections - computed: false, optional: true, required: false
  private _allRequestSections?: boolean | cdktf.IResolvable; 
  public get allRequestSections() {
    return this.getBooleanAttribute('all_request_sections');
  }
  public set allRequestSections(value: boolean | cdktf.IResolvable) {
    this._allRequestSections = value;
  }
  public resetAllRequestSections() {
    this._allRequestSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestSectionsInput() {
    return this._allRequestSections;
  }

  // all_response_sections - computed: false, optional: true, required: false
  private _allResponseSections?: boolean | cdktf.IResolvable; 
  public get allResponseSections() {
    return this.getBooleanAttribute('all_response_sections');
  }
  public set allResponseSections(value: boolean | cdktf.IResolvable) {
    this._allResponseSections = value;
  }
  public resetAllResponseSections() {
    this._allResponseSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allResponseSectionsInput() {
    return this._allResponseSections;
  }

  // all_sections - computed: false, optional: true, required: false
  private _allSections?: boolean | cdktf.IResolvable; 
  public get allSections() {
    return this.getBooleanAttribute('all_sections');
  }
  public set allSections(value: boolean | cdktf.IResolvable) {
    this._allSections = value;
  }
  public resetAllSections() {
    this._allSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSectionsInput() {
    return this._allSections;
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_target - computed: false, optional: true, required: false
  private _anyTarget?: boolean | cdktf.IResolvable; 
  public get anyTarget() {
    return this.getBooleanAttribute('any_target');
  }
  public set anyTarget(value: boolean | cdktf.IResolvable) {
    this._anyTarget = value;
  }
  public resetAnyTarget() {
    this._anyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTargetInput() {
    return this._anyTarget;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_target - computed: false, optional: true, required: false
  private _apiEndpointTarget = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
    this._apiEndpointTarget.internalValue = value;
  }
  public resetApiEndpointTarget() {
    this._apiEndpointTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointTargetInput() {
    return this._apiEndpointTarget.internalValue;
  }

  // custom_sections - computed: false, optional: true, required: false
  private _customSections = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
    this._customSections.internalValue = value;
  }
  public resetCustomSections() {
    this._customSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections.internalValue;
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  public resetKeyPattern() {
    this._keyPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // key_value_pattern - computed: false, optional: true, required: false
  private _keyValuePattern = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
    this._keyValuePattern.internalValue = value;
  }
  public resetKeyValuePattern() {
    this._keyValuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePatternInput() {
    return this._keyValuePattern.internalValue;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
    this._valuePattern.internalValue = value;
  }
  public resetValuePattern() {
    this._valuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#type HttpLoadbalancer#type}
  */
  readonly type: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sensitive_data_detection_config HttpLoadbalancer#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sensitive_data_type HttpLoadbalancer#sensitive_data_type}
  */
  readonly sensitiveDataType: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sensitiveDataDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionConfig = this._sensitiveDataDetectionConfig?.internalValue;
    }
    if (this._sensitiveDataType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataType = this._sensitiveDataType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._sensitiveDataDetectionConfig.internalValue = undefined;
      this._sensitiveDataType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._sensitiveDataDetectionConfig.internalValue = value.sensitiveDataDetectionConfig;
      this._sensitiveDataType.internalValue = value.sensitiveDataType;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_sensitive_data_detection_rules HttpLoadbalancer#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disabled_built_in_rules HttpLoadbalancer#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesOutputReference | HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSensitiveDataDetectionRules = this._customSensitiveDataDetectionRules?.internalValue;
    }
    if (this._disabledBuiltInRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledBuiltInRules = this._disabledBuiltInRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSensitiveDataDetectionRules.internalValue = undefined;
      this._disabledBuiltInRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSensitiveDataDetectionRules.internalValue = value.customSensitiveDataDetectionRules;
      this._disabledBuiltInRules.internalValue = value.disabledBuiltInRules;
    }
  }

  // custom_sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _customSensitiveDataDetectionRules = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
    this._customSensitiveDataDetectionRules.internalValue = value;
  }
  public resetCustomSensitiveDataDetectionRules() {
    this._customSensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSensitiveDataDetectionRulesInput() {
    return this._customSensitiveDataDetectionRules.internalValue;
  }

  // disabled_built_in_rules - computed: false, optional: true, required: false
  private _disabledBuiltInRules = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
    this._disabledBuiltInRules.internalValue = value;
  }
  public resetDisabledBuiltInRules() {
    this._disabledBuiltInRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledBuiltInRulesInput() {
    return this._disabledBuiltInRules.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbAppEnableDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_api_auth_discovery HttpLoadbalancer#default_api_auth_discovery}
  */
  readonly defaultApiAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_learn_from_redirect_traffic HttpLoadbalancer#disable_learn_from_redirect_traffic}
  */
  readonly disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_learn_from_redirect_traffic HttpLoadbalancer#enable_learn_from_redirect_traffic}
  */
  readonly enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * api_crawler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_crawler HttpLoadbalancer#api_crawler}
  */
  readonly apiCrawler?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler;
  /**
  * api_discovery_from_code_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_discovery_from_code_scan HttpLoadbalancer#api_discovery_from_code_scan}
  */
  readonly apiDiscoveryFromCodeScan?: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan;
  /**
  * custom_api_auth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_api_auth_discovery HttpLoadbalancer#custom_api_auth_discovery}
  */
  readonly customApiAuthDiscovery?: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#discovered_api_settings HttpLoadbalancer#discovered_api_settings}
  */
  readonly discoveredApiSettings?: HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sensitive_data_detection_rules HttpLoadbalancer#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules;
}

export function httpLoadbalancerSingleLbAppEnableDiscoveryToTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryOutputReference | HttpLoadbalancerSingleLbAppEnableDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_api_auth_discovery: cdktf.booleanToTerraform(struct!.defaultApiAuthDiscovery),
    disable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.disableLearnFromRedirectTraffic),
    enable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.enableLearnFromRedirectTraffic),
    api_crawler: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerToTerraform(struct!.apiCrawler),
    api_discovery_from_code_scan: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanToTerraform(struct!.apiDiscoveryFromCodeScan),
    custom_api_auth_discovery: httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryToTerraform(struct!.customApiAuthDiscovery),
    discovered_api_settings: httpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function httpLoadbalancerSingleLbAppEnableDiscoveryToHclTerraform(struct?: HttpLoadbalancerSingleLbAppEnableDiscoveryOutputReference | HttpLoadbalancerSingleLbAppEnableDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_api_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.defaultApiAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerToHclTerraform(struct!.apiCrawler),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerList",
    },
    api_discovery_from_code_scan: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct!.apiDiscoveryFromCodeScan),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanList",
    },
    custom_api_auth_discovery: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct!.customApiAuthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryList",
    },
    discovered_api_settings: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: httpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppEnableDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbAppEnableDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultApiAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApiAuthDiscovery = this._defaultApiAuthDiscovery;
    }
    if (this._disableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLearnFromRedirectTraffic = this._disableLearnFromRedirectTraffic;
    }
    if (this._enableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromRedirectTraffic = this._enableLearnFromRedirectTraffic;
    }
    if (this._apiCrawler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawler = this._apiCrawler?.internalValue;
    }
    if (this._apiDiscoveryFromCodeScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryFromCodeScan = this._apiDiscoveryFromCodeScan?.internalValue;
    }
    if (this._customApiAuthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApiAuthDiscovery = this._customApiAuthDiscovery?.internalValue;
    }
    if (this._discoveredApiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredApiSettings = this._discoveredApiSettings?.internalValue;
    }
    if (this._sensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionRules = this._sensitiveDataDetectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbAppEnableDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultApiAuthDiscovery = undefined;
      this._disableLearnFromRedirectTraffic = undefined;
      this._enableLearnFromRedirectTraffic = undefined;
      this._apiCrawler.internalValue = undefined;
      this._apiDiscoveryFromCodeScan.internalValue = undefined;
      this._customApiAuthDiscovery.internalValue = undefined;
      this._discoveredApiSettings.internalValue = undefined;
      this._sensitiveDataDetectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultApiAuthDiscovery = value.defaultApiAuthDiscovery;
      this._disableLearnFromRedirectTraffic = value.disableLearnFromRedirectTraffic;
      this._enableLearnFromRedirectTraffic = value.enableLearnFromRedirectTraffic;
      this._apiCrawler.internalValue = value.apiCrawler;
      this._apiDiscoveryFromCodeScan.internalValue = value.apiDiscoveryFromCodeScan;
      this._customApiAuthDiscovery.internalValue = value.customApiAuthDiscovery;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
      this._sensitiveDataDetectionRules.internalValue = value.sensitiveDataDetectionRules;
    }
  }

  // default_api_auth_discovery - computed: false, optional: true, required: false
  private _defaultApiAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get defaultApiAuthDiscovery() {
    return this.getBooleanAttribute('default_api_auth_discovery');
  }
  public set defaultApiAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._defaultApiAuthDiscovery = value;
  }
  public resetDefaultApiAuthDiscovery() {
    this._defaultApiAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiAuthDiscoveryInput() {
    return this._defaultApiAuthDiscovery;
  }

  // disable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get disableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('disable_learn_from_redirect_traffic');
  }
  public set disableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._disableLearnFromRedirectTraffic = value;
  }
  public resetDisableLearnFromRedirectTraffic() {
    this._disableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLearnFromRedirectTrafficInput() {
    return this._disableLearnFromRedirectTraffic;
  }

  // enable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get enableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('enable_learn_from_redirect_traffic');
  }
  public set enableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._enableLearnFromRedirectTraffic = value;
  }
  public resetEnableLearnFromRedirectTraffic() {
    this._enableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromRedirectTrafficInput() {
    return this._enableLearnFromRedirectTraffic;
  }

  // api_crawler - computed: false, optional: true, required: false
  private _apiCrawler = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawlerOutputReference(this, "api_crawler");
  public get apiCrawler() {
    return this._apiCrawler;
  }
  public putApiCrawler(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiCrawler) {
    this._apiCrawler.internalValue = value;
  }
  public resetApiCrawler() {
    this._apiCrawler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerInput() {
    return this._apiCrawler.internalValue;
  }

  // api_discovery_from_code_scan - computed: false, optional: true, required: false
  private _apiDiscoveryFromCodeScan = new HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScanOutputReference(this, "api_discovery_from_code_scan");
  public get apiDiscoveryFromCodeScan() {
    return this._apiDiscoveryFromCodeScan;
  }
  public putApiDiscoveryFromCodeScan(value: HttpLoadbalancerSingleLbAppEnableDiscoveryApiDiscoveryFromCodeScan) {
    this._apiDiscoveryFromCodeScan.internalValue = value;
  }
  public resetApiDiscoveryFromCodeScan() {
    this._apiDiscoveryFromCodeScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryFromCodeScanInput() {
    return this._apiDiscoveryFromCodeScan.internalValue;
  }

  // custom_api_auth_discovery - computed: false, optional: true, required: false
  private _customApiAuthDiscovery = new HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscoveryOutputReference(this, "custom_api_auth_discovery");
  public get customApiAuthDiscovery() {
    return this._customApiAuthDiscovery;
  }
  public putCustomApiAuthDiscovery(value: HttpLoadbalancerSingleLbAppEnableDiscoveryCustomApiAuthDiscovery) {
    this._customApiAuthDiscovery.internalValue = value;
  }
  public resetCustomApiAuthDiscovery() {
    this._customApiAuthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApiAuthDiscoveryInput() {
    return this._customApiAuthDiscovery.internalValue;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: HttpLoadbalancerSingleLbAppEnableDiscoveryDiscoveredApiSettings) {
    this._discoveredApiSettings.internalValue = value;
  }
  public resetDiscoveredApiSettings() {
    this._discoveredApiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredApiSettingsInput() {
    return this._discoveredApiSettings.internalValue;
  }

  // sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _sensitiveDataDetectionRules = new HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: HttpLoadbalancerSingleLbAppEnableDiscoverySensitiveDataDetectionRules) {
    this._sensitiveDataDetectionRules.internalValue = value;
  }
  public resetSensitiveDataDetectionRules() {
    this._sensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionRulesInput() {
    return this._sensitiveDataDetectionRules.internalValue;
  }
}
export interface HttpLoadbalancerSingleLbApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_discovery HttpLoadbalancer#disable_discovery}
  */
  readonly disableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_malicious_user_detection HttpLoadbalancer#disable_malicious_user_detection}
  */
  readonly disableMaliciousUserDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_malicious_user_detection HttpLoadbalancer#enable_malicious_user_detection}
  */
  readonly enableMaliciousUserDetection?: boolean | cdktf.IResolvable;
  /**
  * enable_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_discovery HttpLoadbalancer#enable_discovery}
  */
  readonly enableDiscovery?: HttpLoadbalancerSingleLbAppEnableDiscovery;
}

export function httpLoadbalancerSingleLbAppToTerraform(struct?: HttpLoadbalancerSingleLbAppOutputReference | HttpLoadbalancerSingleLbApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_discovery: cdktf.booleanToTerraform(struct!.disableDiscovery),
    disable_malicious_user_detection: cdktf.booleanToTerraform(struct!.disableMaliciousUserDetection),
    enable_malicious_user_detection: cdktf.booleanToTerraform(struct!.enableMaliciousUserDetection),
    enable_discovery: httpLoadbalancerSingleLbAppEnableDiscoveryToTerraform(struct!.enableDiscovery),
  }
}


export function httpLoadbalancerSingleLbAppToHclTerraform(struct?: HttpLoadbalancerSingleLbAppOutputReference | HttpLoadbalancerSingleLbApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.disableDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_malicious_user_detection: {
      value: cdktf.booleanToHclTerraform(struct!.disableMaliciousUserDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_malicious_user_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enableMaliciousUserDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_discovery: {
      value: httpLoadbalancerSingleLbAppEnableDiscoveryToHclTerraform(struct!.enableDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerSingleLbAppEnableDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSingleLbAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSingleLbApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDiscovery = this._disableDiscovery;
    }
    if (this._disableMaliciousUserDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMaliciousUserDetection = this._disableMaliciousUserDetection;
    }
    if (this._enableMaliciousUserDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMaliciousUserDetection = this._enableMaliciousUserDetection;
    }
    if (this._enableDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDiscovery = this._enableDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSingleLbApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableDiscovery = undefined;
      this._disableMaliciousUserDetection = undefined;
      this._enableMaliciousUserDetection = undefined;
      this._enableDiscovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableDiscovery = value.disableDiscovery;
      this._disableMaliciousUserDetection = value.disableMaliciousUserDetection;
      this._enableMaliciousUserDetection = value.enableMaliciousUserDetection;
      this._enableDiscovery.internalValue = value.enableDiscovery;
    }
  }

  // disable_discovery - computed: false, optional: true, required: false
  private _disableDiscovery?: boolean | cdktf.IResolvable; 
  public get disableDiscovery() {
    return this.getBooleanAttribute('disable_discovery');
  }
  public set disableDiscovery(value: boolean | cdktf.IResolvable) {
    this._disableDiscovery = value;
  }
  public resetDisableDiscovery() {
    this._disableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDiscoveryInput() {
    return this._disableDiscovery;
  }

  // disable_malicious_user_detection - computed: false, optional: true, required: false
  private _disableMaliciousUserDetection?: boolean | cdktf.IResolvable; 
  public get disableMaliciousUserDetection() {
    return this.getBooleanAttribute('disable_malicious_user_detection');
  }
  public set disableMaliciousUserDetection(value: boolean | cdktf.IResolvable) {
    this._disableMaliciousUserDetection = value;
  }
  public resetDisableMaliciousUserDetection() {
    this._disableMaliciousUserDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMaliciousUserDetectionInput() {
    return this._disableMaliciousUserDetection;
  }

  // enable_malicious_user_detection - computed: false, optional: true, required: false
  private _enableMaliciousUserDetection?: boolean | cdktf.IResolvable; 
  public get enableMaliciousUserDetection() {
    return this.getBooleanAttribute('enable_malicious_user_detection');
  }
  public set enableMaliciousUserDetection(value: boolean | cdktf.IResolvable) {
    this._enableMaliciousUserDetection = value;
  }
  public resetEnableMaliciousUserDetection() {
    this._enableMaliciousUserDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaliciousUserDetectionInput() {
    return this._enableMaliciousUserDetection;
  }

  // enable_discovery - computed: false, optional: true, required: false
  private _enableDiscovery = new HttpLoadbalancerSingleLbAppEnableDiscoveryOutputReference(this, "enable_discovery");
  public get enableDiscovery() {
    return this._enableDiscovery;
  }
  public putEnableDiscovery(value: HttpLoadbalancerSingleLbAppEnableDiscovery) {
    this._enableDiscovery.internalValue = value;
  }
  public resetEnableDiscovery() {
    this._enableDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiscoveryInput() {
    return this._enableDiscovery.internalValue;
  }
}
export interface HttpLoadbalancerSlowDdosMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_request_timeout HttpLoadbalancer#disable_request_timeout}
  */
  readonly disableRequestTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_headers_timeout HttpLoadbalancer#request_headers_timeout}
  */
  readonly requestHeadersTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_timeout HttpLoadbalancer#request_timeout}
  */
  readonly requestTimeout?: number;
}

export function httpLoadbalancerSlowDdosMitigationToTerraform(struct?: HttpLoadbalancerSlowDdosMitigationOutputReference | HttpLoadbalancerSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_request_timeout: cdktf.booleanToTerraform(struct!.disableRequestTimeout),
    request_headers_timeout: cdktf.numberToTerraform(struct!.requestHeadersTimeout),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
  }
}


export function httpLoadbalancerSlowDdosMitigationToHclTerraform(struct?: HttpLoadbalancerSlowDdosMitigationOutputReference | HttpLoadbalancerSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_request_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.disableRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestHeadersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerSlowDdosMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSlowDdosMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRequestTimeout = this._disableRequestTimeout;
    }
    if (this._requestHeadersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersTimeout = this._requestHeadersTimeout;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerSlowDdosMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRequestTimeout = undefined;
      this._requestHeadersTimeout = undefined;
      this._requestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRequestTimeout = value.disableRequestTimeout;
      this._requestHeadersTimeout = value.requestHeadersTimeout;
      this._requestTimeout = value.requestTimeout;
    }
  }

  // disable_request_timeout - computed: false, optional: true, required: false
  private _disableRequestTimeout?: boolean | cdktf.IResolvable; 
  public get disableRequestTimeout() {
    return this.getBooleanAttribute('disable_request_timeout');
  }
  public set disableRequestTimeout(value: boolean | cdktf.IResolvable) {
    this._disableRequestTimeout = value;
  }
  public resetDisableRequestTimeout() {
    this._disableRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequestTimeoutInput() {
    return this._disableRequestTimeout;
  }

  // request_headers_timeout - computed: false, optional: true, required: false
  private _requestHeadersTimeout?: number; 
  public get requestHeadersTimeout() {
    return this.getNumberAttribute('request_headers_timeout');
  }
  public set requestHeadersTimeout(value: number) {
    this._requestHeadersTimeout = value;
  }
  public resetRequestHeadersTimeout() {
    this._requestHeadersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersTimeoutInput() {
    return this._requestHeadersTimeout;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }
}
export interface HttpLoadbalancerTrustedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact HttpLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerTrustedClientsHttpHeaderHeadersToTerraform(struct?: HttpLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerTrustedClientsHttpHeaderHeadersToHclTerraform(struct?: HttpLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._presence = value.presence;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class HttpLoadbalancerTrustedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference {
    return new HttpLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerTrustedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers: HttpLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function httpLoadbalancerTrustedClientsHttpHeaderToTerraform(struct?: HttpLoadbalancerTrustedClientsHttpHeaderOutputReference | HttpLoadbalancerTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(httpLoadbalancerTrustedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function httpLoadbalancerTrustedClientsHttpHeaderToHclTerraform(struct?: HttpLoadbalancerTrustedClientsHttpHeaderOutputReference | HttpLoadbalancerTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerTrustedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerTrustedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerTrustedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerTrustedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerTrustedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new HttpLoadbalancerTrustedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface HttpLoadbalancerTrustedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerTrustedClientsMetadataToTerraform(struct?: HttpLoadbalancerTrustedClientsMetadataOutputReference | HttpLoadbalancerTrustedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerTrustedClientsMetadataToHclTerraform(struct?: HttpLoadbalancerTrustedClientsMetadataOutputReference | HttpLoadbalancerTrustedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerTrustedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerTrustedClientsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerTrustedClientsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerTrustedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#actions HttpLoadbalancer#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_number HttpLoadbalancer#as_number}
  */
  readonly asNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bot_skip_processing HttpLoadbalancer#bot_skip_processing}
  */
  readonly botSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix HttpLoadbalancer#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefix HttpLoadbalancer#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#skip_processing HttpLoadbalancer#skip_processing}
  */
  readonly skipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#user_identifier HttpLoadbalancer#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#waf_skip_processing HttpLoadbalancer#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#http_header HttpLoadbalancer#http_header}
  */
  readonly httpHeader?: HttpLoadbalancerTrustedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerTrustedClientsMetadata;
}

export function httpLoadbalancerTrustedClientsToTerraform(struct?: HttpLoadbalancerTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    bot_skip_processing: cdktf.booleanToTerraform(struct!.botSkipProcessing),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    skip_processing: cdktf.booleanToTerraform(struct!.skipProcessing),
    user_identifier: cdktf.stringToTerraform(struct!.userIdentifier),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    http_header: httpLoadbalancerTrustedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: httpLoadbalancerTrustedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerTrustedClientsToHclTerraform(struct?: HttpLoadbalancerTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bot_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.botSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.skipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_header: {
      value: httpLoadbalancerTrustedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerTrustedClientsHttpHeaderList",
    },
    metadata: {
      value: httpLoadbalancerTrustedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerTrustedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerTrustedClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerTrustedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._botSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.botSkipProcessing = this._botSkipProcessing;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._skipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipProcessing = this._skipProcessing;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerTrustedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._asNumber = undefined;
      this._botSkipProcessing = undefined;
      this._expirationTimestamp = undefined;
      this._ipPrefix = undefined;
      this._ipv6Prefix = undefined;
      this._skipProcessing = undefined;
      this._userIdentifier = undefined;
      this._wafSkipProcessing = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._asNumber = value.asNumber;
      this._botSkipProcessing = value.botSkipProcessing;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ipPrefix = value.ipPrefix;
      this._ipv6Prefix = value.ipv6Prefix;
      this._skipProcessing = value.skipProcessing;
      this._userIdentifier = value.userIdentifier;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bot_skip_processing - computed: false, optional: true, required: false
  private _botSkipProcessing?: boolean | cdktf.IResolvable; 
  public get botSkipProcessing() {
    return this.getBooleanAttribute('bot_skip_processing');
  }
  public set botSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._botSkipProcessing = value;
  }
  public resetBotSkipProcessing() {
    this._botSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botSkipProcessingInput() {
    return this._botSkipProcessing;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // skip_processing - computed: false, optional: true, required: false
  private _skipProcessing?: boolean | cdktf.IResolvable; 
  public get skipProcessing() {
    return this.getBooleanAttribute('skip_processing');
  }
  public set skipProcessing(value: boolean | cdktf.IResolvable) {
    this._skipProcessing = value;
  }
  public resetSkipProcessing() {
    this._skipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProcessingInput() {
    return this._skipProcessing;
  }

  // user_identifier - computed: false, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new HttpLoadbalancerTrustedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: HttpLoadbalancerTrustedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerTrustedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerTrustedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerTrustedClientsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerTrustedClients[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerTrustedClientsOutputReference {
    return new HttpLoadbalancerTrustedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerUserIdentification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerUserIdentificationToTerraform(struct?: HttpLoadbalancerUserIdentificationOutputReference | HttpLoadbalancerUserIdentification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerUserIdentificationToHclTerraform(struct?: HttpLoadbalancerUserIdentificationOutputReference | HttpLoadbalancerUserIdentification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerUserIdentificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerUserIdentification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerUserIdentification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_attack_type HttpLoadbalancer#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bot_name HttpLoadbalancer#bot_name}
  */
  readonly botName: string;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference {
    return new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#signature_id HttpLoadbalancer#signature_id}
  */
  readonly signatureId: number;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_violation HttpLoadbalancer#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_attack_type_contexts HttpLoadbalancer#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_name_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_bot_name_contexts HttpLoadbalancer#exclude_bot_name_contexts}
  */
  readonly excludeBotNameContexts?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_signature_contexts HttpLoadbalancer#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_violation_contexts HttpLoadbalancer#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_name_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform, true)(struct!.excludeBotNameContexts),
    exclude_signature_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_name_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform, true)(struct!.excludeBotNameContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNameContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNameContexts = this._excludeBotNameContexts?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNameContexts.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNameContexts.internalValue = value.excludeBotNameContexts;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_name_contexts - computed: false, optional: true, required: false
  private _excludeBotNameContexts = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContextsList(this, "exclude_bot_name_contexts", false);
  public get excludeBotNameContexts() {
    return this._excludeBotNameContexts;
  }
  public putExcludeBotNameContexts(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable) {
    this._excludeBotNameContexts.internalValue = value;
  }
  public resetExcludeBotNameContexts() {
    this._excludeBotNameContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNameContextsInput() {
    return this._excludeBotNameContexts.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_path HttpLoadbalancer#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path_prefix HttpLoadbalancer#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path_regex HttpLoadbalancer#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#waf_skip_processing HttpLoadbalancer#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#app_firewall_detection_control HttpLoadbalancer#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlToTerraform(struct!.appFirewallDetectionControl),
    metadata: httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlToHclTerraform(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlList",
    },
    metadata: {
      value: httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._expirationTimestamp = undefined;
      this._methods = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._suffixValue = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._expirationTimestamp = value.expirationTimestamp;
      this._methods = value.methods;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._suffixValue = value.suffixValue;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
      this._metadata.internalValue = value.metadata;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControlOutputReference(this, "app_firewall_detection_control");
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesAppFirewallDetectionControl) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesOutputReference {
    return new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionInlineRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#rules HttpLoadbalancer#rules}
  */
  readonly rules?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerWafExclusionWafExclusionInlineRulesToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionInlineRulesToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionInlineRulesOutputReference | HttpLoadbalancerWafExclusionWafExclusionInlineRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionWafExclusionInlineRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionInlineRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionInlineRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionInlineRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttpLoadbalancerWafExclusionWafExclusionInlineRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface HttpLoadbalancerWafExclusionWafExclusionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerWafExclusionWafExclusionPolicyToTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionPolicyOutputReference | HttpLoadbalancerWafExclusionWafExclusionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerWafExclusionWafExclusionPolicyToHclTerraform(struct?: HttpLoadbalancerWafExclusionWafExclusionPolicyOutputReference | HttpLoadbalancerWafExclusionWafExclusionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionWafExclusionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionWafExclusionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionWafExclusionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerWafExclusion {
  /**
  * waf_exclusion_inline_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#waf_exclusion_inline_rules HttpLoadbalancer#waf_exclusion_inline_rules}
  */
  readonly wafExclusionInlineRules?: HttpLoadbalancerWafExclusionWafExclusionInlineRules;
  /**
  * waf_exclusion_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#waf_exclusion_policy HttpLoadbalancer#waf_exclusion_policy}
  */
  readonly wafExclusionPolicy?: HttpLoadbalancerWafExclusionWafExclusionPolicy;
}

export function httpLoadbalancerWafExclusionToTerraform(struct?: HttpLoadbalancerWafExclusionOutputReference | HttpLoadbalancerWafExclusion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    waf_exclusion_inline_rules: httpLoadbalancerWafExclusionWafExclusionInlineRulesToTerraform(struct!.wafExclusionInlineRules),
    waf_exclusion_policy: httpLoadbalancerWafExclusionWafExclusionPolicyToTerraform(struct!.wafExclusionPolicy),
  }
}


export function httpLoadbalancerWafExclusionToHclTerraform(struct?: HttpLoadbalancerWafExclusionOutputReference | HttpLoadbalancerWafExclusion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    waf_exclusion_inline_rules: {
      value: httpLoadbalancerWafExclusionWafExclusionInlineRulesToHclTerraform(struct!.wafExclusionInlineRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionInlineRulesList",
    },
    waf_exclusion_policy: {
      value: httpLoadbalancerWafExclusionWafExclusionPolicyToHclTerraform(struct!.wafExclusionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionWafExclusionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wafExclusionInlineRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafExclusionInlineRules = this._wafExclusionInlineRules?.internalValue;
    }
    if (this._wafExclusionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafExclusionPolicy = this._wafExclusionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wafExclusionInlineRules.internalValue = undefined;
      this._wafExclusionPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wafExclusionInlineRules.internalValue = value.wafExclusionInlineRules;
      this._wafExclusionPolicy.internalValue = value.wafExclusionPolicy;
    }
  }

  // waf_exclusion_inline_rules - computed: false, optional: true, required: false
  private _wafExclusionInlineRules = new HttpLoadbalancerWafExclusionWafExclusionInlineRulesOutputReference(this, "waf_exclusion_inline_rules");
  public get wafExclusionInlineRules() {
    return this._wafExclusionInlineRules;
  }
  public putWafExclusionInlineRules(value: HttpLoadbalancerWafExclusionWafExclusionInlineRules) {
    this._wafExclusionInlineRules.internalValue = value;
  }
  public resetWafExclusionInlineRules() {
    this._wafExclusionInlineRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionInlineRulesInput() {
    return this._wafExclusionInlineRules.internalValue;
  }

  // waf_exclusion_policy - computed: false, optional: true, required: false
  private _wafExclusionPolicy = new HttpLoadbalancerWafExclusionWafExclusionPolicyOutputReference(this, "waf_exclusion_policy");
  public get wafExclusionPolicy() {
    return this._wafExclusionPolicy;
  }
  public putWafExclusionPolicy(value: HttpLoadbalancerWafExclusionWafExclusionPolicy) {
    this._wafExclusionPolicy.internalValue = value;
  }
  public resetWafExclusionPolicy() {
    this._wafExclusionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionPolicyInput() {
    return this._wafExclusionPolicy.internalValue;
  }
}
export interface HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_attack_type HttpLoadbalancer#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bot_name HttpLoadbalancer#bot_name}
  */
  readonly botName: string;
}

export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference {
    return new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#signature_id HttpLoadbalancer#signature_id}
  */
  readonly signatureId: number;
}

export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context HttpLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#context_name HttpLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_violation HttpLoadbalancer#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_attack_type_contexts HttpLoadbalancer#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_name_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_bot_name_contexts HttpLoadbalancer#exclude_bot_name_contexts}
  */
  readonly excludeBotNameContexts?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_signature_contexts HttpLoadbalancer#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_violation_contexts HttpLoadbalancer#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlToTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference | HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_name_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform, true)(struct!.excludeBotNameContexts),
    exclude_signature_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference | HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_name_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform, true)(struct!.excludeBotNameContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNameContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNameContexts = this._excludeBotNameContexts?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNameContexts.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNameContexts.internalValue = value.excludeBotNameContexts;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_name_contexts - computed: false, optional: true, required: false
  private _excludeBotNameContexts = new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList(this, "exclude_bot_name_contexts", false);
  public get excludeBotNameContexts() {
    return this._excludeBotNameContexts;
  }
  public putExcludeBotNameContexts(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable) {
    this._excludeBotNameContexts.internalValue = value;
  }
  public resetExcludeBotNameContexts() {
    this._excludeBotNameContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNameContextsInput() {
    return this._excludeBotNameContexts.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}
export interface HttpLoadbalancerWafExclusionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerWafExclusionRulesMetadataToTerraform(struct?: HttpLoadbalancerWafExclusionRulesMetadataOutputReference | HttpLoadbalancerWafExclusionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerWafExclusionRulesMetadataToHclTerraform(struct?: HttpLoadbalancerWafExclusionRulesMetadataOutputReference | HttpLoadbalancerWafExclusionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerWafExclusionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_path HttpLoadbalancer#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path_prefix HttpLoadbalancer#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path_regex HttpLoadbalancer#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#waf_skip_processing HttpLoadbalancer#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#app_firewall_detection_control HttpLoadbalancer#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerWafExclusionRulesMetadata;
}

export function httpLoadbalancerWafExclusionRulesToTerraform(struct?: HttpLoadbalancerWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlToTerraform(struct!.appFirewallDetectionControl),
    metadata: httpLoadbalancerWafExclusionRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerWafExclusionRulesToHclTerraform(struct?: HttpLoadbalancerWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: httpLoadbalancerWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlList",
    },
    metadata: {
      value: httpLoadbalancerWafExclusionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerWafExclusionRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerWafExclusionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerWafExclusionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerWafExclusionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._expirationTimestamp = undefined;
      this._methods = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._suffixValue = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._expirationTimestamp = value.expirationTimestamp;
      this._methods = value.methods;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._suffixValue = value.suffixValue;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
      this._metadata.internalValue = value.metadata;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference(this, "app_firewall_detection_control");
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: HttpLoadbalancerWafExclusionRulesAppFirewallDetectionControl) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerWafExclusionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerWafExclusionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerWafExclusionRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerWafExclusionRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerWafExclusionRulesOutputReference {
    return new HttpLoadbalancerWafExclusionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
