// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiImplementationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID API identifier. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#api_id ApiImplementation#api_id}
  */
  readonly apiId: string;
  /**
  * A gateway service that implements an API. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#service_reference ApiImplementation#service_reference}
  */
  readonly serviceReference?: ApiImplementationServiceReference;
}
export interface ApiImplementationService {
}

export function apiImplementationServiceToTerraform(struct?: ApiImplementationService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiImplementationServiceToHclTerraform(struct?: ApiImplementationService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiImplementationServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiImplementationService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiImplementationService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane_id - computed: true, optional: false, required: false
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface ApiImplementationServiceReferenceService {
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#control_plane_id ApiImplementation#control_plane_id}
  */
  readonly controlPlaneId?: string;
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#id ApiImplementation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function apiImplementationServiceReferenceServiceToTerraform(struct?: ApiImplementationServiceReferenceService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_id: cdktf.stringToTerraform(struct!.controlPlaneId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function apiImplementationServiceReferenceServiceToHclTerraform(struct?: ApiImplementationServiceReferenceService | cdktf.IResolvable): any {
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

export class ApiImplementationServiceReferenceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiImplementationServiceReferenceService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiImplementationServiceReferenceService | cdktf.IResolvable | undefined) {
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

  // control_plane_id - computed: true, optional: true, required: false
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  public resetControlPlaneId() {
    this._controlPlaneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
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
}
export interface ApiImplementationServiceReference {
  /**
  * A Gateway service that implements an API. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#service ApiImplementation#service}
  */
  readonly service?: ApiImplementationServiceReferenceService;
}

export function apiImplementationServiceReferenceToTerraform(struct?: ApiImplementationServiceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: apiImplementationServiceReferenceServiceToTerraform(struct!.service),
  }
}


export function apiImplementationServiceReferenceToHclTerraform(struct?: ApiImplementationServiceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: apiImplementationServiceReferenceServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiImplementationServiceReferenceService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiImplementationServiceReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiImplementationServiceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiImplementationServiceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service.internalValue = value.service;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: true, optional: true, required: false
  private _service = new ApiImplementationServiceReferenceServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: ApiImplementationServiceReferenceService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation konnect_api_implementation}
*/
export class ApiImplementation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_implementation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiImplementation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiImplementation to import
  * @param importFromId The id of the existing ApiImplementation that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiImplementation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_implementation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_implementation konnect_api_implementation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiImplementationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiImplementationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_implementation',
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
    this._apiId = config.apiId;
    this._serviceReference.internalValue = config.serviceReference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: true, optional: false, required: false
  private _service = new ApiImplementationServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }

  // service_reference - computed: false, optional: true, required: false
  private _serviceReference = new ApiImplementationServiceReferenceOutputReference(this, "service_reference");
  public get serviceReference() {
    return this._serviceReference;
  }
  public putServiceReference(value: ApiImplementationServiceReference) {
    this._serviceReference.internalValue = value;
  }
  public resetServiceReference() {
    this._serviceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceReferenceInput() {
    return this._serviceReference.internalValue;
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
      api_id: cdktf.stringToTerraform(this._apiId),
      service_reference: apiImplementationServiceReferenceToTerraform(this._serviceReference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_reference: {
        value: apiImplementationServiceReferenceToHclTerraform(this._serviceReference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiImplementationServiceReference",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
