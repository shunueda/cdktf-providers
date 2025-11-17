// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#description ApiGateway#description}
  */
  readonly description?: string;
  /**
  * Execution timeout in seconds for the Yandex Cloud API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#execution_timeout ApiGateway#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#folder_id ApiGateway#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#id ApiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#labels ApiGateway#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#name ApiGateway#name}
  */
  readonly name: string;
  /**
  * The OpenAPI specification for Yandex Cloud API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#spec ApiGateway#spec}
  */
  readonly spec: string;
  /**
  * A set of values for variables in gateway specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#variables ApiGateway#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#canary ApiGateway#canary}
  */
  readonly canary?: ApiGatewayCanary;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#connectivity ApiGateway#connectivity}
  */
  readonly connectivity?: ApiGatewayConnectivity;
  /**
  * custom_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#custom_domains ApiGateway#custom_domains}
  */
  readonly customDomains?: ApiGatewayCustomDomains[] | cdktf.IResolvable;
  /**
  * log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#log_options ApiGateway#log_options}
  */
  readonly logOptions?: ApiGatewayLogOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#timeouts ApiGateway#timeouts}
  */
  readonly timeouts?: ApiGatewayTimeouts;
}
export interface ApiGatewayCanary {
  /**
  * A list of values for variables in gateway specification of canary release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#variables ApiGateway#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * Percentage of requests, which will be processed by canary release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#weight ApiGateway#weight}
  */
  readonly weight?: number;
}

export function apiGatewayCanaryToTerraform(struct?: ApiGatewayCanaryOutputReference | ApiGatewayCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apiGatewayCanaryToHclTerraform(struct?: ApiGatewayCanaryOutputReference | ApiGatewayCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variables = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variables = value.variables;
      this._weight = value.weight;
    }
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface ApiGatewayConnectivity {
  /**
  * Network the gateway will have access to. It's essential to specify network with subnets in all availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#network_id ApiGateway#network_id}
  */
  readonly networkId: string;
}

export function apiGatewayConnectivityToTerraform(struct?: ApiGatewayConnectivityOutputReference | ApiGatewayConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function apiGatewayConnectivityToHclTerraform(struct?: ApiGatewayConnectivityOutputReference | ApiGatewayConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }
}
export interface ApiGatewayCustomDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#certificate_id ApiGateway#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#domain_id ApiGateway#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#fqdn ApiGateway#fqdn}
  */
  readonly fqdn: string;
}

export function apiGatewayCustomDomainsToTerraform(struct?: ApiGatewayCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function apiGatewayCustomDomainsToHclTerraform(struct?: ApiGatewayCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayCustomDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayCustomDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._domainId = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._domainId = value.domainId;
      this._fqdn = value.fqdn;
    }
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }
}

export class ApiGatewayCustomDomainsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayCustomDomains[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayCustomDomainsOutputReference {
    return new ApiGatewayCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayLogOptions {
  /**
  * Is logging from Yandex Cloud API Gateway disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#disabled ApiGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Log entries are written to default log group for specified folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#folder_id ApiGateway#folder_id}
  */
  readonly folderId?: string;
  /**
  * Log entries are written to specified log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#log_group_id ApiGateway#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Minimum log entry level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#min_level ApiGateway#min_level}
  */
  readonly minLevel?: string;
}

export function apiGatewayLogOptionsToTerraform(struct?: ApiGatewayLogOptionsOutputReference | ApiGatewayLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    min_level: cdktf.stringToTerraform(struct!.minLevel),
  }
}


export function apiGatewayLogOptionsToHclTerraform(struct?: ApiGatewayLogOptionsOutputReference | ApiGatewayLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_level: {
      value: cdktf.stringToHclTerraform(struct!.minLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._minLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLevel = this._minLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
      this._minLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._folderId = value.folderId;
      this._logGroupId = value.logGroupId;
      this._minLevel = value.minLevel;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // min_level - computed: false, optional: true, required: false
  private _minLevel?: string; 
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
  public set minLevel(value: string) {
    this._minLevel = value;
  }
  public resetMinLevel() {
    this._minLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLevelInput() {
    return this._minLevel;
  }
}
export interface ApiGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#create ApiGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#delete ApiGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#update ApiGateway#update}
  */
  readonly update?: string;
}

export function apiGatewayTimeoutsToTerraform(struct?: ApiGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apiGatewayTimeoutsToHclTerraform(struct?: ApiGatewayTimeouts | cdktf.IResolvable): any {
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

export class ApiGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiGatewayTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway yandex_api_gateway}
*/
export class ApiGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_api_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGateway to import
  * @param importFromId The id of the existing ApiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_api_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/api_gateway yandex_api_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_api_gateway',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._executionTimeout = config.executionTimeout;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._spec = config.spec;
    this._variables = config.variables;
    this._canary.internalValue = config.canary;
    this._connectivity.internalValue = config.connectivity;
    this._customDomains.internalValue = config.customDomains;
    this._logOptions.internalValue = config.logOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
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

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_domains - computed: true, optional: false, required: false
  public get userDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('user_domains'));
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new ApiGatewayCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: ApiGatewayCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new ApiGatewayConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: ApiGatewayConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains = new ApiGatewayCustomDomainsList(this, "custom_domains", true);
  public get customDomains() {
    return this._customDomains;
  }
  public putCustomDomains(value: ApiGatewayCustomDomains[] | cdktf.IResolvable) {
    this._customDomains.internalValue = value;
  }
  public resetCustomDomains() {
    this._customDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains.internalValue;
  }

  // log_options - computed: false, optional: true, required: false
  private _logOptions = new ApiGatewayLogOptionsOutputReference(this, "log_options");
  public get logOptions() {
    return this._logOptions;
  }
  public putLogOptions(value: ApiGatewayLogOptions) {
    this._logOptions.internalValue = value;
  }
  public resetLogOptions() {
    this._logOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptionsInput() {
    return this._logOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiGatewayTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: cdktf.stringToTerraform(this._spec),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
      canary: apiGatewayCanaryToTerraform(this._canary.internalValue),
      connectivity: apiGatewayConnectivityToTerraform(this._connectivity.internalValue),
      custom_domains: cdktf.listMapper(apiGatewayCustomDomainsToTerraform, true)(this._customDomains.internalValue),
      log_options: apiGatewayLogOptionsToTerraform(this._logOptions.internalValue),
      timeouts: apiGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timeout: {
        value: cdktf.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      canary: {
        value: apiGatewayCanaryToHclTerraform(this._canary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayCanaryList",
      },
      connectivity: {
        value: apiGatewayConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayConnectivityList",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(apiGatewayCustomDomainsToHclTerraform, true)(this._customDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayCustomDomainsList",
      },
      log_options: {
        value: apiGatewayLogOptionsToHclTerraform(this._logOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayLogOptionsList",
      },
      timeouts: {
        value: apiGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
