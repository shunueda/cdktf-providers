// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetComputeContainerAppContainerEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint#app DataBunnynetComputeContainerAppContainerEndpoint#app}
  */
  readonly app: string;
  /**
  * The container unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint#container DataBunnynetComputeContainerAppContainerEndpoint#container}
  */
  readonly container: string;
  /**
  * The endpoint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint#name DataBunnynetComputeContainerAppContainerEndpoint#name}
  */
  readonly name: string;
}
export interface DataBunnynetComputeContainerAppContainerEndpointCdnStickySessions {
}

export function dataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsToTerraform(struct?: DataBunnynetComputeContainerAppContainerEndpointCdnStickySessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsToHclTerraform(struct?: DataBunnynetComputeContainerAppContainerEndpointCdnStickySessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBunnynetComputeContainerAppContainerEndpointCdnStickySessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBunnynetComputeContainerAppContainerEndpointCdnStickySessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
}

export class DataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsList extends cdktf.ComplexList {

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
  public get(index: number): DataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsOutputReference {
    return new DataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBunnynetComputeContainerAppContainerEndpointCdn {
}

export function dataBunnynetComputeContainerAppContainerEndpointCdnToTerraform(struct?: DataBunnynetComputeContainerAppContainerEndpointCdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBunnynetComputeContainerAppContainerEndpointCdnToHclTerraform(struct?: DataBunnynetComputeContainerAppContainerEndpointCdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBunnynetComputeContainerAppContainerEndpointCdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBunnynetComputeContainerAppContainerEndpointCdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBunnynetComputeContainerAppContainerEndpointCdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin_ssl - computed: true, optional: false, required: false
  public get originSsl() {
    return this.getBooleanAttribute('origin_ssl');
  }

  // pullzone_id - computed: true, optional: false, required: false
  public get pullzoneId() {
    return this.getNumberAttribute('pullzone_id');
  }

  // sticky_sessions - computed: true, optional: false, required: false
  private _stickySessions = new DataBunnynetComputeContainerAppContainerEndpointCdnStickySessionsList(this, "sticky_sessions", false);
  public get stickySessions() {
    return this._stickySessions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint bunnynet_compute_container_app_container_endpoint}
*/
export class DataBunnynetComputeContainerAppContainerEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_compute_container_app_container_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetComputeContainerAppContainerEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetComputeContainerAppContainerEndpoint to import
  * @param importFromId The id of the existing DataBunnynetComputeContainerAppContainerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetComputeContainerAppContainerEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_compute_container_app_container_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/compute_container_app_container_endpoint bunnynet_compute_container_app_container_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetComputeContainerAppContainerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetComputeContainerAppContainerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_compute_container_app_container_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._container = config.container;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // cdn - computed: true, optional: false, required: false
  private _cdn = new DataBunnynetComputeContainerAppContainerEndpointCdnOutputReference(this, "cdn");
  public get cdn() {
    return this._cdn;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      container: cdktf.stringToTerraform(this._container),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: cdktf.stringToHclTerraform(this._container),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
