// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#description ApiGatewayGroup#description}
  */
  readonly description?: string;
  /**
  * Specifies whether to use the debugging domain name to access the APIs within the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#domain_access_enabled ApiGatewayGroup#domain_access_enabled}
  */
  readonly domainAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete all sub-resources (for API) from this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#force_destroy ApiGatewayGroup#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#id ApiGatewayGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the dedicated instance to which the group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#instance_id ApiGatewayGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * The group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#name ApiGatewayGroup#name}
  */
  readonly name: string;
  /**
  * The region where the dedicated instance is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#region ApiGatewayGroup#region}
  */
  readonly region?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#environment ApiGatewayGroup#environment}
  */
  readonly environment?: ApiGatewayGroupEnvironment[] | cdktf.IResolvable;
  /**
  * url_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#url_domains ApiGatewayGroup#url_domains}
  */
  readonly urlDomains?: ApiGatewayGroupUrlDomains[] | cdktf.IResolvable;
}
export interface ApiGatewayGroupEnvironmentVariable {
  /**
  * The variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#name ApiGatewayGroup#name}
  */
  readonly name: string;
  /**
  * The variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#value ApiGatewayGroup#value}
  */
  readonly value: string;
}

export function apiGatewayGroupEnvironmentVariableToTerraform(struct?: ApiGatewayGroupEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayGroupEnvironmentVariableToHclTerraform(struct?: ApiGatewayGroupEnvironmentVariable | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayGroupEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayGroupEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayGroupEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_id - computed: true, optional: false, required: false
  public get variableId() {
    return this.getStringAttribute('variable_id');
  }
}

export class ApiGatewayGroupEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayGroupEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayGroupEnvironmentVariableOutputReference {
    return new ApiGatewayGroupEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayGroupEnvironment {
  /**
  * The ID of the environment to which the variables belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#environment_id ApiGatewayGroup#environment_id}
  */
  readonly environmentId: string;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#variable ApiGatewayGroup#variable}
  */
  readonly variable: ApiGatewayGroupEnvironmentVariable[] | cdktf.IResolvable;
}

export function apiGatewayGroupEnvironmentToTerraform(struct?: ApiGatewayGroupEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    variable: cdktf.listMapper(apiGatewayGroupEnvironmentVariableToTerraform, true)(struct!.variable),
  }
}


export function apiGatewayGroupEnvironmentToHclTerraform(struct?: ApiGatewayGroupEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.listMapperHcl(apiGatewayGroupEnvironmentVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayGroupEnvironmentVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayGroupEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayGroupEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayGroupEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentId = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentId = value.environmentId;
      this._variable.internalValue = value.variable;
    }
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // variable - computed: false, optional: false, required: true
  private _variable = new ApiGatewayGroupEnvironmentVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: ApiGatewayGroupEnvironmentVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class ApiGatewayGroupEnvironmentList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayGroupEnvironment[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayGroupEnvironmentOutputReference {
    return new ApiGatewayGroupEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayGroupUrlDomains {
  /**
  * Whether to enable redirection from HTTP to HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#is_http_redirect_to_https ApiGatewayGroup#is_http_redirect_to_https}
  */
  readonly isHttpRedirectToHttps?: boolean | cdktf.IResolvable;
  /**
  * The minimum SSL protocol version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#min_ssl_version ApiGatewayGroup#min_ssl_version}
  */
  readonly minSslVersion?: string;
  /**
  * The associated domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#name ApiGatewayGroup#name}
  */
  readonly name: string;
}

export function apiGatewayGroupUrlDomainsToTerraform(struct?: ApiGatewayGroupUrlDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_http_redirect_to_https: cdktf.booleanToTerraform(struct!.isHttpRedirectToHttps),
    min_ssl_version: cdktf.stringToTerraform(struct!.minSslVersion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apiGatewayGroupUrlDomainsToHclTerraform(struct?: ApiGatewayGroupUrlDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_http_redirect_to_https: {
      value: cdktf.booleanToHclTerraform(struct!.isHttpRedirectToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.minSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApiGatewayGroupUrlDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayGroupUrlDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHttpRedirectToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpRedirectToHttps = this._isHttpRedirectToHttps;
    }
    if (this._minSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSslVersion = this._minSslVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayGroupUrlDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isHttpRedirectToHttps = undefined;
      this._minSslVersion = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isHttpRedirectToHttps = value.isHttpRedirectToHttps;
      this._minSslVersion = value.minSslVersion;
      this._name = value.name;
    }
  }

  // is_http_redirect_to_https - computed: true, optional: true, required: false
  private _isHttpRedirectToHttps?: boolean | cdktf.IResolvable; 
  public get isHttpRedirectToHttps() {
    return this.getBooleanAttribute('is_http_redirect_to_https');
  }
  public set isHttpRedirectToHttps(value: boolean | cdktf.IResolvable) {
    this._isHttpRedirectToHttps = value;
  }
  public resetIsHttpRedirectToHttps() {
    this._isHttpRedirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpRedirectToHttpsInput() {
    return this._isHttpRedirectToHttps;
  }

  // min_ssl_version - computed: true, optional: true, required: false
  private _minSslVersion?: string; 
  public get minSslVersion() {
    return this.getStringAttribute('min_ssl_version');
  }
  public set minSslVersion(value: string) {
    this._minSslVersion = value;
  }
  public resetMinSslVersion() {
    this._minSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSslVersionInput() {
    return this._minSslVersion;
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

export class ApiGatewayGroupUrlDomainsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayGroupUrlDomains[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayGroupUrlDomainsOutputReference {
    return new ApiGatewayGroupUrlDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group sbercloud_api_gateway_group}
*/
export class ApiGatewayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_api_gateway_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayGroup to import
  * @param importFromId The id of the existing ApiGatewayGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_api_gateway_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_group sbercloud_api_gateway_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_api_gateway_group',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
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
    this._domainAccessEnabled = config.domainAccessEnabled;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._region = config.region;
    this._environment.internalValue = config.environment;
    this._urlDomains.internalValue = config.urlDomains;
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

  // domain_access_enabled - computed: true, optional: true, required: false
  private _domainAccessEnabled?: boolean | cdktf.IResolvable; 
  public get domainAccessEnabled() {
    return this.getBooleanAttribute('domain_access_enabled');
  }
  public set domainAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._domainAccessEnabled = value;
  }
  public resetDomainAccessEnabled() {
    this._domainAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAccessEnabledInput() {
    return this._domainAccessEnabled;
  }

  // force_destroy - computed: true, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registration_time - computed: true, optional: false, required: false
  public get registrationTime() {
    return this.getStringAttribute('registration_time');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new ApiGatewayGroupEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: ApiGatewayGroupEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // url_domains - computed: false, optional: true, required: false
  private _urlDomains = new ApiGatewayGroupUrlDomainsList(this, "url_domains", true);
  public get urlDomains() {
    return this._urlDomains;
  }
  public putUrlDomains(value: ApiGatewayGroupUrlDomains[] | cdktf.IResolvable) {
    this._urlDomains.internalValue = value;
  }
  public resetUrlDomains() {
    this._urlDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDomainsInput() {
    return this._urlDomains.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_access_enabled: cdktf.booleanToTerraform(this._domainAccessEnabled),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      environment: cdktf.listMapper(apiGatewayGroupEnvironmentToTerraform, true)(this._environment.internalValue),
      url_domains: cdktf.listMapper(apiGatewayGroupUrlDomainsToTerraform, true)(this._urlDomains.internalValue),
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
      domain_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._domainAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.listMapperHcl(apiGatewayGroupEnvironmentToHclTerraform, true)(this._environment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayGroupEnvironmentList",
      },
      url_domains: {
        value: cdktf.listMapperHcl(apiGatewayGroupUrlDomainsToHclTerraform, true)(this._urlDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayGroupUrlDomainsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
