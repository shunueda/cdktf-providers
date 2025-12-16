// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiProductVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API Product ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#api_product_id ApiProductVersion#api_product_id}
  */
  readonly apiProductId: string;
  /**
  * Indicates if the version of the API product is deprecated. Applies deprecation or removes deprecation from all related portal product versions. This field is deprecated: Use [PortalProductVersion.deprecated](https://docs.konghq.com/konnect/api/portal-management/v2/#/operations/create-portal-product-version) instead. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#deprecated ApiProductVersion#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#gateway_service ApiProductVersion#gateway_service}
  */
  readonly gatewayService?: ApiProductVersionGatewayService;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#labels ApiProductVersion#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The version name of the API product version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#name ApiProductVersion#name}
  */
  readonly name: string;
}
export interface ApiProductVersionGatewayService {
  /**
  * The identifier of the control plane that the gateway service resides in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#control_plane_id ApiProductVersion#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * The identifier of a gateway service associated with the version of the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#id ApiProductVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function apiProductVersionGatewayServiceToTerraform(struct?: ApiProductVersionGatewayService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_id: cdktf.stringToTerraform(struct!.controlPlaneId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function apiProductVersionGatewayServiceToHclTerraform(struct?: ApiProductVersionGatewayService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_id: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiProductVersionGatewayServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiProductVersionGatewayService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneId = this._controlPlaneId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiProductVersionGatewayService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneId = value.controlPlaneId;
      this._id = value.id;
    }
  }

  // control_plane_id - computed: true, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // runtime_group_id - computed: true, optional: false, required: false
  public get runtimeGroupId() {
    return this.getStringAttribute('runtime_group_id');
  }
}
export interface ApiProductVersionPortalsAuthStrategies {
}

export function apiProductVersionPortalsAuthStrategiesToTerraform(struct?: ApiProductVersionPortalsAuthStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiProductVersionPortalsAuthStrategiesToHclTerraform(struct?: ApiProductVersionPortalsAuthStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiProductVersionPortalsAuthStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiProductVersionPortalsAuthStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiProductVersionPortalsAuthStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ApiProductVersionPortalsAuthStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): ApiProductVersionPortalsAuthStrategiesOutputReference {
    return new ApiProductVersionPortalsAuthStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiProductVersionPortals {
}

export function apiProductVersionPortalsToTerraform(struct?: ApiProductVersionPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiProductVersionPortalsToHclTerraform(struct?: ApiProductVersionPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiProductVersionPortalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiProductVersionPortals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiProductVersionPortals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_registration_enabled - computed: true, optional: false, required: false
  public get applicationRegistrationEnabled() {
    return this.getBooleanAttribute('application_registration_enabled');
  }

  // auth_strategies - computed: true, optional: false, required: false
  private _authStrategies = new ApiProductVersionPortalsAuthStrategiesList(this, "auth_strategies", false);
  public get authStrategies() {
    return this._authStrategies;
  }

  // auto_approve_registration - computed: true, optional: false, required: false
  public get autoApproveRegistration() {
    return this.getBooleanAttribute('auto_approve_registration');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // portal_name - computed: true, optional: false, required: false
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }

  // portal_product_version_id - computed: true, optional: false, required: false
  public get portalProductVersionId() {
    return this.getStringAttribute('portal_product_version_id');
  }

  // publish_status - computed: true, optional: false, required: false
  public get publishStatus() {
    return this.getStringAttribute('publish_status');
  }
}

export class ApiProductVersionPortalsList extends cdktf.ComplexList {

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
  public get(index: number): ApiProductVersionPortalsOutputReference {
    return new ApiProductVersionPortalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version konnect_api_product_version}
*/
export class ApiProductVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_product_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiProductVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiProductVersion to import
  * @param importFromId The id of the existing ApiProductVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiProductVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_product_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_version konnect_api_product_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiProductVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ApiProductVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_product_version',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiProductId = config.apiProductId;
    this._deprecated = config.deprecated;
    this._gatewayService.internalValue = config.gatewayService;
    this._labels = config.labels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_product_id - computed: false, optional: false, required: true
  private _apiProductId?: string; 
  public get apiProductId() {
    return this.getStringAttribute('api_product_id');
  }
  public set apiProductId(value: string) {
    this._apiProductId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductIdInput() {
    return this._apiProductId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deprecated - computed: true, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // gateway_service - computed: true, optional: true, required: false
  private _gatewayService = new ApiProductVersionGatewayServiceOutputReference(this, "gateway_service");
  public get gatewayService() {
    return this._gatewayService;
  }
  public putGatewayService(value: ApiProductVersionGatewayService) {
    this._gatewayService.internalValue = value;
  }
  public resetGatewayService() {
    this._gatewayService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayServiceInput() {
    return this._gatewayService.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // portals - computed: true, optional: false, required: false
  private _portals = new ApiProductVersionPortalsList(this, "portals", false);
  public get portals() {
    return this._portals;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_product_id: cdktf.stringToTerraform(this._apiProductId),
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      gateway_service: apiProductVersionGatewayServiceToTerraform(this._gatewayService.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_product_id: {
        value: cdktf.stringToHclTerraform(this._apiProductId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated: {
        value: cdktf.booleanToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_service: {
        value: apiProductVersionGatewayServiceToHclTerraform(this._gatewayService.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiProductVersionGatewayService",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
