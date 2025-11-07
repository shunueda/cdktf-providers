// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#id ServiceCatalogProvisionedProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#portfolio_id ServiceCatalogProvisionedProduct#portfolio_id}
  */
  readonly portfolioId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#product_id ServiceCatalogProvisionedProduct#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#product_version_id ServiceCatalogProvisionedProduct#product_version_id}
  */
  readonly productVersionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#provisioned_product_id ServiceCatalogProvisionedProduct#provisioned_product_id}
  */
  readonly provisionedProductId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#provisioned_product_name ServiceCatalogProvisionedProduct#provisioned_product_name}
  */
  readonly provisionedProductName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#stack_region_id ServiceCatalogProvisionedProduct#stack_region_id}
  */
  readonly stackRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#tags ServiceCatalogProvisionedProduct#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#parameters ServiceCatalogProvisionedProduct#parameters}
  */
  readonly parameters?: ServiceCatalogProvisionedProductParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#timeouts ServiceCatalogProvisionedProduct#timeouts}
  */
  readonly timeouts?: ServiceCatalogProvisionedProductTimeouts;
}
export interface ServiceCatalogProvisionedProductOutputs {
}

export function serviceCatalogProvisionedProductOutputsToTerraform(struct?: ServiceCatalogProvisionedProductOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceCatalogProvisionedProductOutputsToHclTerraform(struct?: ServiceCatalogProvisionedProductOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceCatalogProvisionedProductOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCatalogProvisionedProductOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCatalogProvisionedProductOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // output_key - computed: true, optional: false, required: false
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }

  // output_value - computed: true, optional: false, required: false
  public get outputValue() {
    return this.getStringAttribute('output_value');
  }
}

export class ServiceCatalogProvisionedProductOutputsList extends cdktf.ComplexList {

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
  public get(index: number): ServiceCatalogProvisionedProductOutputsOutputReference {
    return new ServiceCatalogProvisionedProductOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCatalogProvisionedProductParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#parameter_key ServiceCatalogProvisionedProduct#parameter_key}
  */
  readonly parameterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#parameter_value ServiceCatalogProvisionedProduct#parameter_value}
  */
  readonly parameterValue?: string;
}

export function serviceCatalogProvisionedProductParametersToTerraform(struct?: ServiceCatalogProvisionedProductParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function serviceCatalogProvisionedProductParametersToHclTerraform(struct?: ServiceCatalogProvisionedProductParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_key: {
      value: cdktf.stringToHclTerraform(struct!.parameterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCatalogProvisionedProductParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCatalogProvisionedProductParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterKey = this._parameterKey;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCatalogProvisionedProductParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterKey = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterKey = value.parameterKey;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_key - computed: false, optional: true, required: false
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  public resetParameterKey() {
    this._parameterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ServiceCatalogProvisionedProductParametersList extends cdktf.ComplexList {
  public internalValue? : ServiceCatalogProvisionedProductParameters[] | cdktf.IResolvable

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
  public get(index: number): ServiceCatalogProvisionedProductParametersOutputReference {
    return new ServiceCatalogProvisionedProductParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCatalogProvisionedProductTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#create ServiceCatalogProvisionedProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#delete ServiceCatalogProvisionedProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#update ServiceCatalogProvisionedProduct#update}
  */
  readonly update?: string;
}

export function serviceCatalogProvisionedProductTimeoutsToTerraform(struct?: ServiceCatalogProvisionedProductTimeouts | cdktf.IResolvable): any {
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


export function serviceCatalogProvisionedProductTimeoutsToHclTerraform(struct?: ServiceCatalogProvisionedProductTimeouts | cdktf.IResolvable): any {
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

export class ServiceCatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceCatalogProvisionedProductTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceCatalogProvisionedProductTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product alicloud_service_catalog_provisioned_product}
*/
export class ServiceCatalogProvisionedProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_service_catalog_provisioned_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCatalogProvisionedProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCatalogProvisionedProduct to import
  * @param importFromId The id of the existing ServiceCatalogProvisionedProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCatalogProvisionedProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_service_catalog_provisioned_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_catalog_provisioned_product alicloud_service_catalog_provisioned_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCatalogProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCatalogProvisionedProductConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_service_catalog_provisioned_product',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._portfolioId = config.portfolioId;
    this._productId = config.productId;
    this._productVersionId = config.productVersionId;
    this._provisionedProductId = config.provisionedProductId;
    this._provisionedProductName = config.provisionedProductName;
    this._stackRegionId = config.stackRegionId;
    this._tags = config.tags;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // last_provisioning_task_id - computed: true, optional: false, required: false
  public get lastProvisioningTaskId() {
    return this.getStringAttribute('last_provisioning_task_id');
  }

  // last_successful_provisioning_task_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningTaskId() {
    return this.getStringAttribute('last_successful_provisioning_task_id');
  }

  // last_task_id - computed: true, optional: false, required: false
  public get lastTaskId() {
    return this.getStringAttribute('last_task_id');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new ServiceCatalogProvisionedProductOutputsList(this, "outputs", true);
  public get outputs() {
    return this._outputs;
  }

  // owner_principal_id - computed: true, optional: false, required: false
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_principal_type - computed: true, optional: false, required: false
  public get ownerPrincipalType() {
    return this.getStringAttribute('owner_principal_type');
  }

  // portfolio_id - computed: false, optional: true, required: false
  private _portfolioId?: string; 
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }
  public set portfolioId(value: string) {
    this._portfolioId = value;
  }
  public resetPortfolioId() {
    this._portfolioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portfolioIdInput() {
    return this._portfolioId;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_version_id - computed: false, optional: false, required: true
  private _productVersionId?: string; 
  public get productVersionId() {
    return this.getStringAttribute('product_version_id');
  }
  public set productVersionId(value: string) {
    this._productVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionIdInput() {
    return this._productVersionId;
  }

  // product_version_name - computed: true, optional: false, required: false
  public get productVersionName() {
    return this.getStringAttribute('product_version_name');
  }

  // provisioned_product_arn - computed: true, optional: false, required: false
  public get provisionedProductArn() {
    return this.getStringAttribute('provisioned_product_arn');
  }

  // provisioned_product_id - computed: true, optional: true, required: false
  private _provisionedProductId?: string; 
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }
  public set provisionedProductId(value: string) {
    this._provisionedProductId = value;
  }
  public resetProvisionedProductId() {
    this._provisionedProductId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductIdInput() {
    return this._provisionedProductId;
  }

  // provisioned_product_name - computed: false, optional: false, required: true
  private _provisionedProductName?: string; 
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }
  public set provisionedProductName(value: string) {
    this._provisionedProductName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductNameInput() {
    return this._provisionedProductName;
  }

  // provisioned_product_type - computed: true, optional: false, required: false
  public get provisionedProductType() {
    return this.getStringAttribute('provisioned_product_type');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_region_id - computed: false, optional: false, required: true
  private _stackRegionId?: string; 
  public get stackRegionId() {
    return this.getStringAttribute('stack_region_id');
  }
  public set stackRegionId(value: string) {
    this._stackRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackRegionIdInput() {
    return this._stackRegionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ServiceCatalogProvisionedProductParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ServiceCatalogProvisionedProductParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceCatalogProvisionedProductTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceCatalogProvisionedProductTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      product_id: cdktf.stringToTerraform(this._productId),
      product_version_id: cdktf.stringToTerraform(this._productVersionId),
      provisioned_product_id: cdktf.stringToTerraform(this._provisionedProductId),
      provisioned_product_name: cdktf.stringToTerraform(this._provisionedProductName),
      stack_region_id: cdktf.stringToTerraform(this._stackRegionId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      parameters: cdktf.listMapper(serviceCatalogProvisionedProductParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: serviceCatalogProvisionedProductTimeoutsToTerraform(this._timeouts.internalValue),
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
      portfolio_id: {
        value: cdktf.stringToHclTerraform(this._portfolioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version_id: {
        value: cdktf.stringToHclTerraform(this._productVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_product_id: {
        value: cdktf.stringToHclTerraform(this._provisionedProductId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_product_name: {
        value: cdktf.stringToHclTerraform(this._provisionedProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_region_id: {
        value: cdktf.stringToHclTerraform(this._stackRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      parameters: {
        value: cdktf.listMapperHcl(serviceCatalogProvisionedProductParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCatalogProvisionedProductParametersList",
      },
      timeouts: {
        value: serviceCatalogProvisionedProductTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceCatalogProvisionedProductTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
