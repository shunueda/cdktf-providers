// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#annotations ApiDefinition#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#description ApiDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#disable ApiDefinition#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#id ApiDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#labels ApiDefinition#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#mixed_schema_origin ApiDefinition#mixed_schema_origin}
  */
  readonly mixedSchemaOrigin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#name ApiDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#namespace ApiDefinition#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#strict_schema_origin ApiDefinition#strict_schema_origin}
  */
  readonly strictSchemaOrigin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#swagger_specs ApiDefinition#swagger_specs}
  */
  readonly swaggerSpecs?: string[];
  /**
  * api_inventory_exclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#api_inventory_exclusion_list ApiDefinition#api_inventory_exclusion_list}
  */
  readonly apiInventoryExclusionList?: ApiDefinitionApiInventoryExclusionListStruct[] | cdktf.IResolvable;
  /**
  * api_inventory_inclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#api_inventory_inclusion_list ApiDefinition#api_inventory_inclusion_list}
  */
  readonly apiInventoryInclusionList?: ApiDefinitionApiInventoryInclusionListStruct[] | cdktf.IResolvable;
  /**
  * non_api_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#non_api_endpoints ApiDefinition#non_api_endpoints}
  */
  readonly nonApiEndpoints?: ApiDefinitionNonApiEndpoints[] | cdktf.IResolvable;
}
export interface ApiDefinitionApiInventoryExclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#method ApiDefinition#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#path ApiDefinition#path}
  */
  readonly path: string;
}

export function apiDefinitionApiInventoryExclusionListStructToTerraform(struct?: ApiDefinitionApiInventoryExclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function apiDefinitionApiInventoryExclusionListStructToHclTerraform(struct?: ApiDefinitionApiInventoryExclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiDefinitionApiInventoryExclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiDefinitionApiInventoryExclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiDefinitionApiInventoryExclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
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
}

export class ApiDefinitionApiInventoryExclusionListStructList extends cdktf.ComplexList {
  public internalValue? : ApiDefinitionApiInventoryExclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApiDefinitionApiInventoryExclusionListStructOutputReference {
    return new ApiDefinitionApiInventoryExclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiDefinitionApiInventoryInclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#method ApiDefinition#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#path ApiDefinition#path}
  */
  readonly path: string;
}

export function apiDefinitionApiInventoryInclusionListStructToTerraform(struct?: ApiDefinitionApiInventoryInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function apiDefinitionApiInventoryInclusionListStructToHclTerraform(struct?: ApiDefinitionApiInventoryInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiDefinitionApiInventoryInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiDefinitionApiInventoryInclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiDefinitionApiInventoryInclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
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
}

export class ApiDefinitionApiInventoryInclusionListStructList extends cdktf.ComplexList {
  public internalValue? : ApiDefinitionApiInventoryInclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApiDefinitionApiInventoryInclusionListStructOutputReference {
    return new ApiDefinitionApiInventoryInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiDefinitionNonApiEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#method ApiDefinition#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#path ApiDefinition#path}
  */
  readonly path: string;
}

export function apiDefinitionNonApiEndpointsToTerraform(struct?: ApiDefinitionNonApiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function apiDefinitionNonApiEndpointsToHclTerraform(struct?: ApiDefinitionNonApiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiDefinitionNonApiEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiDefinitionNonApiEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiDefinitionNonApiEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
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
}

export class ApiDefinitionNonApiEndpointsList extends cdktf.ComplexList {
  public internalValue? : ApiDefinitionNonApiEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ApiDefinitionNonApiEndpointsOutputReference {
    return new ApiDefinitionNonApiEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition volterra_api_definition}
*/
export class ApiDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_api_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiDefinition to import
  * @param importFromId The id of the existing ApiDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_api_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_definition volterra_api_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: ApiDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_api_definition',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._mixedSchemaOrigin = config.mixedSchemaOrigin;
    this._name = config.name;
    this._namespace = config.namespace;
    this._strictSchemaOrigin = config.strictSchemaOrigin;
    this._swaggerSpecs = config.swaggerSpecs;
    this._apiInventoryExclusionList.internalValue = config.apiInventoryExclusionList;
    this._apiInventoryInclusionList.internalValue = config.apiInventoryInclusionList;
    this._nonApiEndpoints.internalValue = config.nonApiEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // mixed_schema_origin - computed: false, optional: true, required: false
  private _mixedSchemaOrigin?: boolean | cdktf.IResolvable; 
  public get mixedSchemaOrigin() {
    return this.getBooleanAttribute('mixed_schema_origin');
  }
  public set mixedSchemaOrigin(value: boolean | cdktf.IResolvable) {
    this._mixedSchemaOrigin = value;
  }
  public resetMixedSchemaOrigin() {
    this._mixedSchemaOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedSchemaOriginInput() {
    return this._mixedSchemaOrigin;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // strict_schema_origin - computed: false, optional: true, required: false
  private _strictSchemaOrigin?: boolean | cdktf.IResolvable; 
  public get strictSchemaOrigin() {
    return this.getBooleanAttribute('strict_schema_origin');
  }
  public set strictSchemaOrigin(value: boolean | cdktf.IResolvable) {
    this._strictSchemaOrigin = value;
  }
  public resetStrictSchemaOrigin() {
    this._strictSchemaOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSchemaOriginInput() {
    return this._strictSchemaOrigin;
  }

  // swagger_specs - computed: false, optional: true, required: false
  private _swaggerSpecs?: string[]; 
  public get swaggerSpecs() {
    return this.getListAttribute('swagger_specs');
  }
  public set swaggerSpecs(value: string[]) {
    this._swaggerSpecs = value;
  }
  public resetSwaggerSpecs() {
    this._swaggerSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swaggerSpecsInput() {
    return this._swaggerSpecs;
  }

  // api_inventory_exclusion_list - computed: false, optional: true, required: false
  private _apiInventoryExclusionList = new ApiDefinitionApiInventoryExclusionListStructList(this, "api_inventory_exclusion_list", false);
  public get apiInventoryExclusionList() {
    return this._apiInventoryExclusionList;
  }
  public putApiInventoryExclusionList(value: ApiDefinitionApiInventoryExclusionListStruct[] | cdktf.IResolvable) {
    this._apiInventoryExclusionList.internalValue = value;
  }
  public resetApiInventoryExclusionList() {
    this._apiInventoryExclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInventoryExclusionListInput() {
    return this._apiInventoryExclusionList.internalValue;
  }

  // api_inventory_inclusion_list - computed: false, optional: true, required: false
  private _apiInventoryInclusionList = new ApiDefinitionApiInventoryInclusionListStructList(this, "api_inventory_inclusion_list", false);
  public get apiInventoryInclusionList() {
    return this._apiInventoryInclusionList;
  }
  public putApiInventoryInclusionList(value: ApiDefinitionApiInventoryInclusionListStruct[] | cdktf.IResolvable) {
    this._apiInventoryInclusionList.internalValue = value;
  }
  public resetApiInventoryInclusionList() {
    this._apiInventoryInclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInventoryInclusionListInput() {
    return this._apiInventoryInclusionList.internalValue;
  }

  // non_api_endpoints - computed: false, optional: true, required: false
  private _nonApiEndpoints = new ApiDefinitionNonApiEndpointsList(this, "non_api_endpoints", false);
  public get nonApiEndpoints() {
    return this._nonApiEndpoints;
  }
  public putNonApiEndpoints(value: ApiDefinitionNonApiEndpoints[] | cdktf.IResolvable) {
    this._nonApiEndpoints.internalValue = value;
  }
  public resetNonApiEndpoints() {
    this._nonApiEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonApiEndpointsInput() {
    return this._nonApiEndpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mixed_schema_origin: cdktf.booleanToTerraform(this._mixedSchemaOrigin),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      strict_schema_origin: cdktf.booleanToTerraform(this._strictSchemaOrigin),
      swagger_specs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._swaggerSpecs),
      api_inventory_exclusion_list: cdktf.listMapper(apiDefinitionApiInventoryExclusionListStructToTerraform, true)(this._apiInventoryExclusionList.internalValue),
      api_inventory_inclusion_list: cdktf.listMapper(apiDefinitionApiInventoryInclusionListStructToTerraform, true)(this._apiInventoryInclusionList.internalValue),
      non_api_endpoints: cdktf.listMapper(apiDefinitionNonApiEndpointsToTerraform, true)(this._nonApiEndpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mixed_schema_origin: {
        value: cdktf.booleanToHclTerraform(this._mixedSchemaOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_schema_origin: {
        value: cdktf.booleanToHclTerraform(this._strictSchemaOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      swagger_specs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._swaggerSpecs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_inventory_exclusion_list: {
        value: cdktf.listMapperHcl(apiDefinitionApiInventoryExclusionListStructToHclTerraform, true)(this._apiInventoryExclusionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiDefinitionApiInventoryExclusionListStructList",
      },
      api_inventory_inclusion_list: {
        value: cdktf.listMapperHcl(apiDefinitionApiInventoryInclusionListStructToHclTerraform, true)(this._apiInventoryInclusionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiDefinitionApiInventoryInclusionListStructList",
      },
      non_api_endpoints: {
        value: cdktf.listMapperHcl(apiDefinitionNonApiEndpointsToHclTerraform, true)(this._nonApiEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiDefinitionNonApiEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
