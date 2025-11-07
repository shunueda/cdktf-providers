// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVpcStaticRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#description NsxtVpcStaticRoutes#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#display_name NsxtVpcStaticRoutes#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#id NsxtVpcStaticRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#network NsxtVpcStaticRoutes#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#nsx_id NsxtVpcStaticRoutes#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#resource_type NsxtVpcStaticRoutes#resource_type}
  */
  readonly resourceType?: string;
  /**
  * next_hops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#next_hops NsxtVpcStaticRoutes#next_hops}
  */
  readonly nextHops: NsxtVpcStaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#tags NsxtVpcStaticRoutes#tags}
  */
  readonly tags?: NsxtVpcStaticRoutesTags[] | cdktf.IResolvable;
}
export interface NsxtVpcStaticRoutesNextHops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#admin_distance NsxtVpcStaticRoutes#admin_distance}
  */
  readonly adminDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#ip_address NsxtVpcStaticRoutes#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#scope NsxtVpcStaticRoutes#scope}
  */
  readonly scope?: string[];
}

export function nsxtVpcStaticRoutesNextHopsToTerraform(struct?: NsxtVpcStaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_distance: cdktf.numberToTerraform(struct!.adminDistance),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function nsxtVpcStaticRoutesNextHopsToHclTerraform(struct?: NsxtVpcStaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_distance: {
      value: cdktf.numberToHclTerraform(struct!.adminDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcStaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcStaticRoutesNextHops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDistance = this._adminDistance;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcStaticRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDistance = undefined;
      this._ipAddress = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDistance = value.adminDistance;
      this._ipAddress = value.ipAddress;
      this._scope = value.scope;
    }
  }

  // admin_distance - computed: false, optional: true, required: false
  private _adminDistance?: number; 
  public get adminDistance() {
    return this.getNumberAttribute('admin_distance');
  }
  public set adminDistance(value: number) {
    this._adminDistance = value;
  }
  public resetAdminDistance() {
    this._adminDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistanceInput() {
    return this._adminDistance;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class NsxtVpcStaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcStaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcStaticRoutesNextHopsOutputReference {
    return new NsxtVpcStaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcStaticRoutesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#scope NsxtVpcStaticRoutes#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#tag NsxtVpcStaticRoutes#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcStaticRoutesTagsToTerraform(struct?: NsxtVpcStaticRoutesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcStaticRoutesTagsToHclTerraform(struct?: NsxtVpcStaticRoutesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcStaticRoutesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcStaticRoutesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcStaticRoutesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NsxtVpcStaticRoutesTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcStaticRoutesTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcStaticRoutesTagsOutputReference {
    return new NsxtVpcStaticRoutesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes nsxt_vpc_static_routes}
*/
export class NsxtVpcStaticRoutes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_static_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVpcStaticRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVpcStaticRoutes to import
  * @param importFromId The id of the existing NsxtVpcStaticRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVpcStaticRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_static_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_static_routes nsxt_vpc_static_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVpcStaticRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVpcStaticRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_static_routes',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._network = config.network;
    this._nsxId = config.nsxId;
    this._resourceType = config.resourceType;
    this._nextHops.internalValue = config.nextHops;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('_revision');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // next_hops - computed: false, optional: false, required: true
  private _nextHops = new NsxtVpcStaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: NsxtVpcStaticRoutesNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcStaticRoutesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcStaticRoutesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      next_hops: cdktf.listMapper(nsxtVpcStaticRoutesNextHopsToTerraform, true)(this._nextHops.internalValue),
      tags: cdktf.listMapper(nsxtVpcStaticRoutesTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hops: {
        value: cdktf.listMapperHcl(nsxtVpcStaticRoutesNextHopsToHclTerraform, true)(this._nextHops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcStaticRoutesNextHopsList",
      },
      tags: {
        value: cdktf.listMapperHcl(nsxtVpcStaticRoutesTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcStaticRoutesTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
