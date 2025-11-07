// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#api_resources Product#api_resources}
  */
  readonly apiResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#attributes Product#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#auto_approval_type Product#auto_approval_type}
  */
  readonly autoApprovalType: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#description Product#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#display_name Product#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#environments Product#environments}
  */
  readonly environments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#id Product#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#name Product#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#operation_config_type Product#operation_config_type}
  */
  readonly operationConfigType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#proxies Product#proxies}
  */
  readonly proxies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota Product#quota}
  */
  readonly quota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota_interval Product#quota_interval}
  */
  readonly quotaInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota_time_unit Product#quota_time_unit}
  */
  readonly quotaTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#scopes Product#scopes}
  */
  readonly scopes?: string[];
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#operation Product#operation}
  */
  readonly operation?: ProductOperation[] | cdktf.IResolvable;
}
export interface ProductOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#api_source Product#api_source}
  */
  readonly apiSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#attributes Product#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#methods Product#methods}
  */
  readonly methods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#path Product#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota Product#quota}
  */
  readonly quota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota_interval Product#quota_interval}
  */
  readonly quotaInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#quota_time_unit Product#quota_time_unit}
  */
  readonly quotaTimeUnit?: string;
}

export function productOperationToTerraform(struct?: ProductOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_source: cdktf.stringToTerraform(struct!.apiSource),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
    quota: cdktf.numberToTerraform(struct!.quota),
    quota_interval: cdktf.numberToTerraform(struct!.quotaInterval),
    quota_time_unit: cdktf.stringToTerraform(struct!.quotaTimeUnit),
  }
}


export function productOperationToHclTerraform(struct?: ProductOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_source: {
      value: cdktf.stringToHclTerraform(struct!.apiSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.numberToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_interval: {
      value: cdktf.numberToHclTerraform(struct!.quotaInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.quotaTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSource = this._apiSource;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._quotaInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaInterval = this._quotaInterval;
    }
    if (this._quotaTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaTimeUnit = this._quotaTimeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSource = undefined;
      this._attributes = undefined;
      this._methods = undefined;
      this._path = undefined;
      this._quota = undefined;
      this._quotaInterval = undefined;
      this._quotaTimeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSource = value.apiSource;
      this._attributes = value.attributes;
      this._methods = value.methods;
      this._path = value.path;
      this._quota = value.quota;
      this._quotaInterval = value.quotaInterval;
      this._quotaTimeUnit = value.quotaTimeUnit;
    }
  }

  // api_source - computed: false, optional: false, required: true
  private _apiSource?: string; 
  public get apiSource() {
    return this.getStringAttribute('api_source');
  }
  public set apiSource(value: string) {
    this._apiSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceInput() {
    return this._apiSource;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_interval - computed: false, optional: true, required: false
  private _quotaInterval?: number; 
  public get quotaInterval() {
    return this.getNumberAttribute('quota_interval');
  }
  public set quotaInterval(value: number) {
    this._quotaInterval = value;
  }
  public resetQuotaInterval() {
    this._quotaInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIntervalInput() {
    return this._quotaInterval;
  }

  // quota_time_unit - computed: false, optional: true, required: false
  private _quotaTimeUnit?: string; 
  public get quotaTimeUnit() {
    return this.getStringAttribute('quota_time_unit');
  }
  public set quotaTimeUnit(value: string) {
    this._quotaTimeUnit = value;
  }
  public resetQuotaTimeUnit() {
    this._quotaTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTimeUnitInput() {
    return this._quotaTimeUnit;
  }
}

export class ProductOperationList extends cdktf.ComplexList {
  public internalValue? : ProductOperation[] | cdktf.IResolvable

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
  public get(index: number): ProductOperationOutputReference {
    return new ProductOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product apigee_product}
*/
export class Product extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Product resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Product to import
  * @param importFromId The id of the existing Product that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Product to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/product apigee_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductConfig
  */
  public constructor(scope: Construct, id: string, config: ProductConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_product',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiResources = config.apiResources;
    this._attributes = config.attributes;
    this._autoApprovalType = config.autoApprovalType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environments = config.environments;
    this._id = config.id;
    this._name = config.name;
    this._operationConfigType = config.operationConfigType;
    this._proxies = config.proxies;
    this._quota = config.quota;
    this._quotaInterval = config.quotaInterval;
    this._quotaTimeUnit = config.quotaTimeUnit;
    this._scopes = config.scopes;
    this._operation.internalValue = config.operation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_resources - computed: false, optional: true, required: false
  private _apiResources?: string[]; 
  public get apiResources() {
    return cdktf.Fn.tolist(this.getListAttribute('api_resources'));
  }
  public set apiResources(value: string[]) {
    this._apiResources = value;
  }
  public resetApiResources() {
    this._apiResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiResourcesInput() {
    return this._apiResources;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // auto_approval_type - computed: false, optional: false, required: true
  private _autoApprovalType?: boolean | cdktf.IResolvable; 
  public get autoApprovalType() {
    return this.getBooleanAttribute('auto_approval_type');
  }
  public set autoApprovalType(value: boolean | cdktf.IResolvable) {
    this._autoApprovalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalTypeInput() {
    return this._autoApprovalType;
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

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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

  // operation_config_type - computed: false, optional: true, required: false
  private _operationConfigType?: string; 
  public get operationConfigType() {
    return this.getStringAttribute('operation_config_type');
  }
  public set operationConfigType(value: string) {
    this._operationConfigType = value;
  }
  public resetOperationConfigType() {
    this._operationConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigTypeInput() {
    return this._operationConfigType;
  }

  // proxies - computed: false, optional: true, required: false
  private _proxies?: string[]; 
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }
  public set proxies(value: string[]) {
    this._proxies = value;
  }
  public resetProxies() {
    this._proxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_interval - computed: false, optional: true, required: false
  private _quotaInterval?: number; 
  public get quotaInterval() {
    return this.getNumberAttribute('quota_interval');
  }
  public set quotaInterval(value: number) {
    this._quotaInterval = value;
  }
  public resetQuotaInterval() {
    this._quotaInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIntervalInput() {
    return this._quotaInterval;
  }

  // quota_time_unit - computed: false, optional: true, required: false
  private _quotaTimeUnit?: string; 
  public get quotaTimeUnit() {
    return this.getStringAttribute('quota_time_unit');
  }
  public set quotaTimeUnit(value: string) {
    this._quotaTimeUnit = value;
  }
  public resetQuotaTimeUnit() {
    this._quotaTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTimeUnitInput() {
    return this._quotaTimeUnit;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new ProductOperationList(this, "operation", false);
  public get operation() {
    return this._operation;
  }
  public putOperation(value: ProductOperation[] | cdktf.IResolvable) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiResources),
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      auto_approval_type: cdktf.booleanToTerraform(this._autoApprovalType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operation_config_type: cdktf.stringToTerraform(this._operationConfigType),
      proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxies),
      quota: cdktf.numberToTerraform(this._quota),
      quota_interval: cdktf.numberToTerraform(this._quotaInterval),
      quota_time_unit: cdktf.stringToTerraform(this._quotaTimeUnit),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      operation: cdktf.listMapper(productOperationToTerraform, true)(this._operation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auto_approval_type: {
        value: cdktf.booleanToHclTerraform(this._autoApprovalType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      operation_config_type: {
        value: cdktf.stringToHclTerraform(this._operationConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_interval: {
        value: cdktf.numberToHclTerraform(this._quotaInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_time_unit: {
        value: cdktf.stringToHclTerraform(this._quotaTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operation: {
        value: cdktf.listMapperHcl(productOperationToHclTerraform, true)(this._operation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProductOperationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
