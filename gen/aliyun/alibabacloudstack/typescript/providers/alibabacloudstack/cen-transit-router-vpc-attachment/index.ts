// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#auto_create_vpc_route CenTransitRouterVpcAttachment#auto_create_vpc_route}
  */
  readonly autoCreateVpcRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#cen_id CenTransitRouterVpcAttachment#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#id CenTransitRouterVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#route_table_association_enabled CenTransitRouterVpcAttachment#route_table_association_enabled}
  */
  readonly routeTableAssociationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#route_table_propagation_enabled CenTransitRouterVpcAttachment#route_table_propagation_enabled}
  */
  readonly routeTablePropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#transit_router_attachment_description CenTransitRouterVpcAttachment#transit_router_attachment_description}
  */
  readonly transitRouterAttachmentDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#transit_router_attachment_name CenTransitRouterVpcAttachment#transit_router_attachment_name}
  */
  readonly transitRouterAttachmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#transit_router_id CenTransitRouterVpcAttachment#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#vpc_id CenTransitRouterVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#tags CenTransitRouterVpcAttachment#tags}
  */
  readonly tags?: CenTransitRouterVpcAttachmentTags[] | cdktf.IResolvable;
  /**
  * zone_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#zone_mappings CenTransitRouterVpcAttachment#zone_mappings}
  */
  readonly zoneMappings: CenTransitRouterVpcAttachmentZoneMappings[] | cdktf.IResolvable;
}
export interface CenTransitRouterVpcAttachmentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#tag_key CenTransitRouterVpcAttachment#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#tag_value CenTransitRouterVpcAttachment#tag_value}
  */
  readonly tagValue?: string;
}

export function cenTransitRouterVpcAttachmentTagsToTerraform(struct?: CenTransitRouterVpcAttachmentTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cenTransitRouterVpcAttachmentTagsToHclTerraform(struct?: CenTransitRouterVpcAttachmentTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTransitRouterVpcAttachmentTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CenTransitRouterVpcAttachmentTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTransitRouterVpcAttachmentTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CenTransitRouterVpcAttachmentTagsList extends cdktf.ComplexList {
  public internalValue? : CenTransitRouterVpcAttachmentTags[] | cdktf.IResolvable

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
  public get(index: number): CenTransitRouterVpcAttachmentTagsOutputReference {
    return new CenTransitRouterVpcAttachmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CenTransitRouterVpcAttachmentZoneMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#vswitch_id CenTransitRouterVpcAttachment#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#zone_id CenTransitRouterVpcAttachment#zone_id}
  */
  readonly zoneId: string;
}

export function cenTransitRouterVpcAttachmentZoneMappingsToTerraform(struct?: CenTransitRouterVpcAttachmentZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function cenTransitRouterVpcAttachmentZoneMappingsToHclTerraform(struct?: CenTransitRouterVpcAttachmentZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTransitRouterVpcAttachmentZoneMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CenTransitRouterVpcAttachmentZoneMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTransitRouterVpcAttachmentZoneMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class CenTransitRouterVpcAttachmentZoneMappingsList extends cdktf.ComplexList {
  public internalValue? : CenTransitRouterVpcAttachmentZoneMappings[] | cdktf.IResolvable

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
  public get(index: number): CenTransitRouterVpcAttachmentZoneMappingsOutputReference {
    return new CenTransitRouterVpcAttachmentZoneMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment alibabacloudstack_cen_transit_router_vpc_attachment}
*/
export class CenTransitRouterVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterVpcAttachment to import
  * @param importFromId The id of the existing CenTransitRouterVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_vpc_attachment alibabacloudstack_cen_transit_router_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateVpcRoute = config.autoCreateVpcRoute;
    this._cenId = config.cenId;
    this._id = config.id;
    this._routeTableAssociationEnabled = config.routeTableAssociationEnabled;
    this._routeTablePropagationEnabled = config.routeTablePropagationEnabled;
    this._transitRouterAttachmentDescription = config.transitRouterAttachmentDescription;
    this._transitRouterAttachmentName = config.transitRouterAttachmentName;
    this._transitRouterId = config.transitRouterId;
    this._vpcId = config.vpcId;
    this._tags.internalValue = config.tags;
    this._zoneMappings.internalValue = config.zoneMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_vpc_route - computed: false, optional: true, required: false
  private _autoCreateVpcRoute?: boolean | cdktf.IResolvable; 
  public get autoCreateVpcRoute() {
    return this.getBooleanAttribute('auto_create_vpc_route');
  }
  public set autoCreateVpcRoute(value: boolean | cdktf.IResolvable) {
    this._autoCreateVpcRoute = value;
  }
  public resetAutoCreateVpcRoute() {
    this._autoCreateVpcRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateVpcRouteInput() {
    return this._autoCreateVpcRoute;
  }

  // auto_publish_route_enabled - computed: true, optional: false, required: false
  public get autoPublishRouteEnabled() {
    return this.getBooleanAttribute('auto_publish_route_enabled');
  }

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // route_table_association_enabled - computed: false, optional: true, required: false
  private _routeTableAssociationEnabled?: boolean | cdktf.IResolvable; 
  public get routeTableAssociationEnabled() {
    return this.getBooleanAttribute('route_table_association_enabled');
  }
  public set routeTableAssociationEnabled(value: boolean | cdktf.IResolvable) {
    this._routeTableAssociationEnabled = value;
  }
  public resetRouteTableAssociationEnabled() {
    this._routeTableAssociationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableAssociationEnabledInput() {
    return this._routeTableAssociationEnabled;
  }

  // route_table_propagation_enabled - computed: false, optional: true, required: false
  private _routeTablePropagationEnabled?: boolean | cdktf.IResolvable; 
  public get routeTablePropagationEnabled() {
    return this.getBooleanAttribute('route_table_propagation_enabled');
  }
  public set routeTablePropagationEnabled(value: boolean | cdktf.IResolvable) {
    this._routeTablePropagationEnabled = value;
  }
  public resetRouteTablePropagationEnabled() {
    this._routeTablePropagationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablePropagationEnabledInput() {
    return this._routeTablePropagationEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_description - computed: false, optional: true, required: false
  private _transitRouterAttachmentDescription?: string; 
  public get transitRouterAttachmentDescription() {
    return this.getStringAttribute('transit_router_attachment_description');
  }
  public set transitRouterAttachmentDescription(value: string) {
    this._transitRouterAttachmentDescription = value;
  }
  public resetTransitRouterAttachmentDescription() {
    this._transitRouterAttachmentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentDescriptionInput() {
    return this._transitRouterAttachmentDescription;
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_attachment_name - computed: false, optional: true, required: false
  private _transitRouterAttachmentName?: string; 
  public get transitRouterAttachmentName() {
    return this.getStringAttribute('transit_router_attachment_name');
  }
  public set transitRouterAttachmentName(value: string) {
    this._transitRouterAttachmentName = value;
  }
  public resetTransitRouterAttachmentName() {
    this._transitRouterAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentNameInput() {
    return this._transitRouterAttachmentName;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_owner_id - computed: true, optional: false, required: false
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CenTransitRouterVpcAttachmentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CenTransitRouterVpcAttachmentTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // zone_mappings - computed: false, optional: false, required: true
  private _zoneMappings = new CenTransitRouterVpcAttachmentZoneMappingsList(this, "zone_mappings", true);
  public get zoneMappings() {
    return this._zoneMappings;
  }
  public putZoneMappings(value: CenTransitRouterVpcAttachmentZoneMappings[] | cdktf.IResolvable) {
    this._zoneMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMappingsInput() {
    return this._zoneMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_vpc_route: cdktf.booleanToTerraform(this._autoCreateVpcRoute),
      cen_id: cdktf.stringToTerraform(this._cenId),
      id: cdktf.stringToTerraform(this._id),
      route_table_association_enabled: cdktf.booleanToTerraform(this._routeTableAssociationEnabled),
      route_table_propagation_enabled: cdktf.booleanToTerraform(this._routeTablePropagationEnabled),
      transit_router_attachment_description: cdktf.stringToTerraform(this._transitRouterAttachmentDescription),
      transit_router_attachment_name: cdktf.stringToTerraform(this._transitRouterAttachmentName),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      tags: cdktf.listMapper(cenTransitRouterVpcAttachmentTagsToTerraform, true)(this._tags.internalValue),
      zone_mappings: cdktf.listMapper(cenTransitRouterVpcAttachmentZoneMappingsToTerraform, true)(this._zoneMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_vpc_route: {
        value: cdktf.booleanToHclTerraform(this._autoCreateVpcRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
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
      route_table_association_enabled: {
        value: cdktf.booleanToHclTerraform(this._routeTableAssociationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_table_propagation_enabled: {
        value: cdktf.booleanToHclTerraform(this._routeTablePropagationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transit_router_attachment_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cenTransitRouterVpcAttachmentTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CenTransitRouterVpcAttachmentTagsList",
      },
      zone_mappings: {
        value: cdktf.listMapperHcl(cenTransitRouterVpcAttachmentZoneMappingsToHclTerraform, true)(this._zoneMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CenTransitRouterVpcAttachmentZoneMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
