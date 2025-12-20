// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitNetworkAreaRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network area ID to which the network area route is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route#network_area_id DataStackitNetworkAreaRoute#network_area_id}
  */
  readonly networkAreaId: string;
  /**
  * The network area route ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route#network_area_route_id DataStackitNetworkAreaRoute#network_area_route_id}
  */
  readonly networkAreaRouteId: string;
  /**
  * STACKIT organization ID to which the network area is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route#organization_id DataStackitNetworkAreaRoute#organization_id}
  */
  readonly organizationId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route#region DataStackitNetworkAreaRoute#region}
  */
  readonly region?: string;
}
export interface DataStackitNetworkAreaRouteDestination {
}

export function dataStackitNetworkAreaRouteDestinationToTerraform(struct?: DataStackitNetworkAreaRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitNetworkAreaRouteDestinationToHclTerraform(struct?: DataStackitNetworkAreaRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitNetworkAreaRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitNetworkAreaRouteDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitNetworkAreaRouteDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataStackitNetworkAreaRouteNextHop {
}

export function dataStackitNetworkAreaRouteNextHopToTerraform(struct?: DataStackitNetworkAreaRouteNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitNetworkAreaRouteNextHopToHclTerraform(struct?: DataStackitNetworkAreaRouteNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitNetworkAreaRouteNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitNetworkAreaRouteNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitNetworkAreaRouteNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route stackit_network_area_route}
*/
export class DataStackitNetworkAreaRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network_area_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitNetworkAreaRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitNetworkAreaRoute to import
  * @param importFromId The id of the existing DataStackitNetworkAreaRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitNetworkAreaRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network_area_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/network_area_route stackit_network_area_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitNetworkAreaRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitNetworkAreaRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network_area_route',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkAreaId = config.networkAreaId;
    this._networkAreaRouteId = config.networkAreaRouteId;
    this._organizationId = config.organizationId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: true, optional: false, required: false
  private _destination = new DataStackitNetworkAreaRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // network_area_id - computed: false, optional: false, required: true
  private _networkAreaId?: string; 
  public get networkAreaId() {
    return this.getStringAttribute('network_area_id');
  }
  public set networkAreaId(value: string) {
    this._networkAreaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaIdInput() {
    return this._networkAreaId;
  }

  // network_area_route_id - computed: false, optional: false, required: true
  private _networkAreaRouteId?: string; 
  public get networkAreaRouteId() {
    return this.getStringAttribute('network_area_route_id');
  }
  public set networkAreaRouteId(value: string) {
    this._networkAreaRouteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaRouteIdInput() {
    return this._networkAreaRouteId;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataStackitNetworkAreaRouteNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // region - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_area_id: cdktf.stringToTerraform(this._networkAreaId),
      network_area_route_id: cdktf.stringToTerraform(this._networkAreaRouteId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_area_id: {
        value: cdktf.stringToHclTerraform(this._networkAreaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_area_route_id: {
        value: cdktf.stringToHclTerraform(this._networkAreaRouteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
