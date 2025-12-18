// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexApiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Yandex Cloud API Gateway id used to define api gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#api_gateway_id DataYandexApiGateway#api_gateway_id}
  */
  readonly apiGatewayId?: string;
  /**
  * Execution timeout in seconds for the Yandex Cloud API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#execution_timeout DataYandexApiGateway#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#folder_id DataYandexApiGateway#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#id DataYandexApiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#name DataYandexApiGateway#name}
  */
  readonly name?: string;
  /**
  * A set of values for variables in gateway specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#variables DataYandexApiGateway#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#canary DataYandexApiGateway#canary}
  */
  readonly canary?: DataYandexApiGatewayCanary;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#connectivity DataYandexApiGateway#connectivity}
  */
  readonly connectivity?: DataYandexApiGatewayConnectivity;
  /**
  * custom_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#custom_domains DataYandexApiGateway#custom_domains}
  */
  readonly customDomains?: DataYandexApiGatewayCustomDomains[] | cdktf.IResolvable;
}
export interface DataYandexApiGatewayLogOptions {
}

export function dataYandexApiGatewayLogOptionsToTerraform(struct?: DataYandexApiGatewayLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexApiGatewayLogOptionsToHclTerraform(struct?: DataYandexApiGatewayLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexApiGatewayLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexApiGatewayLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexApiGatewayLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // min_level - computed: true, optional: false, required: false
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
}

export class DataYandexApiGatewayLogOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexApiGatewayLogOptionsOutputReference {
    return new DataYandexApiGatewayLogOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexApiGatewayCanary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#variables DataYandexApiGateway#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#weight DataYandexApiGateway#weight}
  */
  readonly weight?: number;
}

export function dataYandexApiGatewayCanaryToTerraform(struct?: DataYandexApiGatewayCanaryOutputReference | DataYandexApiGatewayCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataYandexApiGatewayCanaryToHclTerraform(struct?: DataYandexApiGatewayCanaryOutputReference | DataYandexApiGatewayCanary): any {
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

export class DataYandexApiGatewayCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexApiGatewayCanary | undefined {
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

  public set internalValue(value: DataYandexApiGatewayCanary | undefined) {
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
export interface DataYandexApiGatewayConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#network_id DataYandexApiGateway#network_id}
  */
  readonly networkId: string;
}

export function dataYandexApiGatewayConnectivityToTerraform(struct?: DataYandexApiGatewayConnectivityOutputReference | DataYandexApiGatewayConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function dataYandexApiGatewayConnectivityToHclTerraform(struct?: DataYandexApiGatewayConnectivityOutputReference | DataYandexApiGatewayConnectivity): any {
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

export class DataYandexApiGatewayConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexApiGatewayConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexApiGatewayConnectivity | undefined) {
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
export interface DataYandexApiGatewayCustomDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#certificate_id DataYandexApiGateway#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#domain_id DataYandexApiGateway#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#fqdn DataYandexApiGateway#fqdn}
  */
  readonly fqdn: string;
}

export function dataYandexApiGatewayCustomDomainsToTerraform(struct?: DataYandexApiGatewayCustomDomains | cdktf.IResolvable): any {
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


export function dataYandexApiGatewayCustomDomainsToHclTerraform(struct?: DataYandexApiGatewayCustomDomains | cdktf.IResolvable): any {
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

export class DataYandexApiGatewayCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexApiGatewayCustomDomains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexApiGatewayCustomDomains | cdktf.IResolvable | undefined) {
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

export class DataYandexApiGatewayCustomDomainsList extends cdktf.ComplexList {
  public internalValue? : DataYandexApiGatewayCustomDomains[] | cdktf.IResolvable

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
  public get(index: number): DataYandexApiGatewayCustomDomainsOutputReference {
    return new DataYandexApiGatewayCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway yandex_api_gateway}
*/
export class DataYandexApiGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_api_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexApiGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexApiGateway to import
  * @param importFromId The id of the existing DataYandexApiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexApiGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_api_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/api_gateway yandex_api_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexApiGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexApiGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_api_gateway',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiGatewayId = config.apiGatewayId;
    this._executionTimeout = config.executionTimeout;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._variables = config.variables;
    this._canary.internalValue = config.canary;
    this._connectivity.internalValue = config.connectivity;
    this._customDomains.internalValue = config.customDomains;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_gateway_id - computed: false, optional: true, required: false
  private _apiGatewayId?: string; 
  public get apiGatewayId() {
    return this.getStringAttribute('api_gateway_id');
  }
  public set apiGatewayId(value: string) {
    this._apiGatewayId = value;
  }
  public resetApiGatewayId() {
    this._apiGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayIdInput() {
    return this._apiGatewayId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_options - computed: true, optional: false, required: false
  private _logOptions = new DataYandexApiGatewayLogOptionsList(this, "log_options", false);
  public get logOptions() {
    return this._logOptions;
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
  private _canary = new DataYandexApiGatewayCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: DataYandexApiGatewayCanary) {
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
  private _connectivity = new DataYandexApiGatewayConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: DataYandexApiGatewayConnectivity) {
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
  private _customDomains = new DataYandexApiGatewayCustomDomainsList(this, "custom_domains", true);
  public get customDomains() {
    return this._customDomains;
  }
  public putCustomDomains(value: DataYandexApiGatewayCustomDomains[] | cdktf.IResolvable) {
    this._customDomains.internalValue = value;
  }
  public resetCustomDomains() {
    this._customDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_gateway_id: cdktf.stringToTerraform(this._apiGatewayId),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
      canary: dataYandexApiGatewayCanaryToTerraform(this._canary.internalValue),
      connectivity: dataYandexApiGatewayConnectivityToTerraform(this._connectivity.internalValue),
      custom_domains: cdktf.listMapper(dataYandexApiGatewayCustomDomainsToTerraform, true)(this._customDomains.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_gateway_id: {
        value: cdktf.stringToHclTerraform(this._apiGatewayId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
        value: dataYandexApiGatewayCanaryToHclTerraform(this._canary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexApiGatewayCanaryList",
      },
      connectivity: {
        value: dataYandexApiGatewayConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexApiGatewayConnectivityList",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(dataYandexApiGatewayCustomDomainsToHclTerraform, true)(this._customDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexApiGatewayCustomDomainsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
