// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplateSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#blueprint_id DatacenterConnectivityTemplateSystem#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Map of *Custom Static Route* Primitives in this Connectivity Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#custom_static_routes DatacenterConnectivityTemplateSystem#custom_static_routes}
  */
  readonly customStaticRoutes?: { [key: string]: DatacenterConnectivityTemplateSystemCustomStaticRoutes } | cdktf.IResolvable;
  /**
  * Connectivity Template Description displayed in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#description DatacenterConnectivityTemplateSystem#description}
  */
  readonly description?: string;
  /**
  * Connectivity Template Name displayed in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#name DatacenterConnectivityTemplateSystem#name}
  */
  readonly name: string;
  /**
  * Set of Tags associated with this Connectivity Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#tags DatacenterConnectivityTemplateSystem#tags}
  */
  readonly tags?: string[];
}
export interface DatacenterConnectivityTemplateSystemCustomStaticRoutes {
  /**
  * Destination network in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#network DatacenterConnectivityTemplateSystem#network}
  */
  readonly network: string;
  /**
  * Next-hop router address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#next_hop DatacenterConnectivityTemplateSystem#next_hop}
  */
  readonly nextHop: string;
  /**
  * Routing Zone ID where this route should be installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#routing_zone_id DatacenterConnectivityTemplateSystem#routing_zone_id}
  */
  readonly routingZoneId: string;
}

export function datacenterConnectivityTemplateSystemCustomStaticRoutesToTerraform(struct?: DatacenterConnectivityTemplateSystemCustomStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    routing_zone_id: cdktf.stringToTerraform(struct!.routingZoneId),
  }
}


export function datacenterConnectivityTemplateSystemCustomStaticRoutesToHclTerraform(struct?: DatacenterConnectivityTemplateSystemCustomStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.routingZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateSystemCustomStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateSystemCustomStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._routingZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZoneId = this._routingZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateSystemCustomStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
      this._routingZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
      this._routingZoneId = value.routingZoneId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_zone_id - computed: false, optional: false, required: true
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }
}

export class DatacenterConnectivityTemplateSystemCustomStaticRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateSystemCustomStaticRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateSystemCustomStaticRoutesOutputReference {
    return new DatacenterConnectivityTemplateSystemCustomStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system apstra_datacenter_connectivity_template_system}
*/
export class DatacenterConnectivityTemplateSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_template_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplateSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplateSystem to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplateSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplateSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_template_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_system apstra_datacenter_connectivity_template_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplateSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplateSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_template_system',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._customStaticRoutes.internalValue = config.customStaticRoutes;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // custom_static_routes - computed: false, optional: true, required: false
  private _customStaticRoutes = new DatacenterConnectivityTemplateSystemCustomStaticRoutesMap(this, "custom_static_routes");
  public get customStaticRoutes() {
    return this._customStaticRoutes;
  }
  public putCustomStaticRoutes(value: { [key: string]: DatacenterConnectivityTemplateSystemCustomStaticRoutes } | cdktf.IResolvable) {
    this._customStaticRoutes.internalValue = value;
  }
  public resetCustomStaticRoutes() {
    this._customStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRoutesInput() {
    return this._customStaticRoutes.internalValue;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      custom_static_routes: cdktf.hashMapper(datacenterConnectivityTemplateSystemCustomStaticRoutesToTerraform)(this._customStaticRoutes.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_static_routes: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateSystemCustomStaticRoutesToHclTerraform)(this._customStaticRoutes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateSystemCustomStaticRoutesMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
