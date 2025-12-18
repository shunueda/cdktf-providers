// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPathRouteSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#id LoadBalancerPathRouteSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#load_balancer_id LoadBalancerPathRouteSet#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#name LoadBalancerPathRouteSet#name}
  */
  readonly name: string;
  /**
  * path_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#path_routes LoadBalancerPathRouteSet#path_routes}
  */
  readonly pathRoutes: LoadBalancerPathRouteSetPathRoutes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#timeouts LoadBalancerPathRouteSet#timeouts}
  */
  readonly timeouts?: LoadBalancerPathRouteSetTimeouts;
}
export interface LoadBalancerPathRouteSetPathRoutesPathMatchType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#match_type LoadBalancerPathRouteSet#match_type}
  */
  readonly matchType: string;
}

export function loadBalancerPathRouteSetPathRoutesPathMatchTypeToTerraform(struct?: LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference | LoadBalancerPathRouteSetPathRoutesPathMatchType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function loadBalancerPathRouteSetPathRoutesPathMatchTypeToHclTerraform(struct?: LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference | LoadBalancerPathRouteSetPathRoutesPathMatchType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerPathRouteSetPathRoutesPathMatchType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPathRouteSetPathRoutesPathMatchType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchType = value.matchType;
    }
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}
export interface LoadBalancerPathRouteSetPathRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#backend_set_name LoadBalancerPathRouteSet#backend_set_name}
  */
  readonly backendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#path LoadBalancerPathRouteSet#path}
  */
  readonly path: string;
  /**
  * path_match_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#path_match_type LoadBalancerPathRouteSet#path_match_type}
  */
  readonly pathMatchType: LoadBalancerPathRouteSetPathRoutesPathMatchType;
}

export function loadBalancerPathRouteSetPathRoutesToTerraform(struct?: LoadBalancerPathRouteSetPathRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_set_name: cdktf.stringToTerraform(struct!.backendSetName),
    path: cdktf.stringToTerraform(struct!.path),
    path_match_type: loadBalancerPathRouteSetPathRoutesPathMatchTypeToTerraform(struct!.pathMatchType),
  }
}


export function loadBalancerPathRouteSetPathRoutesToHclTerraform(struct?: LoadBalancerPathRouteSetPathRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.backendSetName),
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
    path_match_type: {
      value: loadBalancerPathRouteSetPathRoutesPathMatchTypeToHclTerraform(struct!.pathMatchType),
      isBlock: true,
      type: "list",
      storageClassType: "LoadBalancerPathRouteSetPathRoutesPathMatchTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerPathRouteSetPathRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerPathRouteSetPathRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendSetName = this._backendSetName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathMatchType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatchType = this._pathMatchType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerPathRouteSetPathRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendSetName = undefined;
      this._path = undefined;
      this._pathMatchType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendSetName = value.backendSetName;
      this._path = value.path;
      this._pathMatchType.internalValue = value.pathMatchType;
    }
  }

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName?: string; 
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetNameInput() {
    return this._backendSetName;
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

  // path_match_type - computed: false, optional: false, required: true
  private _pathMatchType = new LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference(this, "path_match_type");
  public get pathMatchType() {
    return this._pathMatchType;
  }
  public putPathMatchType(value: LoadBalancerPathRouteSetPathRoutesPathMatchType) {
    this._pathMatchType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchTypeInput() {
    return this._pathMatchType.internalValue;
  }
}

export class LoadBalancerPathRouteSetPathRoutesList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerPathRouteSetPathRoutes[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerPathRouteSetPathRoutesOutputReference {
    return new LoadBalancerPathRouteSetPathRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerPathRouteSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#create LoadBalancerPathRouteSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#delete LoadBalancerPathRouteSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#update LoadBalancerPathRouteSet#update}
  */
  readonly update?: string;
}

export function loadBalancerPathRouteSetTimeoutsToTerraform(struct?: LoadBalancerPathRouteSetTimeouts | cdktf.IResolvable): any {
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


export function loadBalancerPathRouteSetTimeoutsToHclTerraform(struct?: LoadBalancerPathRouteSetTimeouts | cdktf.IResolvable): any {
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

export class LoadBalancerPathRouteSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerPathRouteSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadBalancerPathRouteSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set oci_load_balancer_path_route_set}
*/
export class LoadBalancerPathRouteSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_path_route_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerPathRouteSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerPathRouteSet to import
  * @param importFromId The id of the existing LoadBalancerPathRouteSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerPathRouteSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_load_balancer_path_route_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_path_route_set oci_load_balancer_path_route_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerPathRouteSetConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerPathRouteSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_path_route_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._pathRoutes.internalValue = config.pathRoutes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // path_routes - computed: false, optional: false, required: true
  private _pathRoutes = new LoadBalancerPathRouteSetPathRoutesList(this, "path_routes", false);
  public get pathRoutes() {
    return this._pathRoutes;
  }
  public putPathRoutes(value: LoadBalancerPathRouteSetPathRoutes[] | cdktf.IResolvable) {
    this._pathRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRoutesInput() {
    return this._pathRoutes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadBalancerPathRouteSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadBalancerPathRouteSetTimeouts) {
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
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      path_routes: cdktf.listMapper(loadBalancerPathRouteSetPathRoutesToTerraform, true)(this._pathRoutes.internalValue),
      timeouts: loadBalancerPathRouteSetTimeoutsToTerraform(this._timeouts.internalValue),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      path_routes: {
        value: cdktf.listMapperHcl(loadBalancerPathRouteSetPathRoutesToHclTerraform, true)(this._pathRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerPathRouteSetPathRoutesList",
      },
      timeouts: {
        value: loadBalancerPathRouteSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerPathRouteSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
