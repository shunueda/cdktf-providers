// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#auto_publish_route_enabled CenTransitRouterVpcAttachment#auto_publish_route_enabled}
  */
  readonly autoPublishRouteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#cen_id CenTransitRouterVpcAttachment#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#dry_run CenTransitRouterVpcAttachment#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#force_delete CenTransitRouterVpcAttachment#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#id CenTransitRouterVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#payment_type CenTransitRouterVpcAttachment#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#resource_type CenTransitRouterVpcAttachment#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#route_table_association_enabled CenTransitRouterVpcAttachment#route_table_association_enabled}
  */
  readonly routeTableAssociationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#route_table_propagation_enabled CenTransitRouterVpcAttachment#route_table_propagation_enabled}
  */
  readonly routeTablePropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#tags CenTransitRouterVpcAttachment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#transit_router_attachment_description CenTransitRouterVpcAttachment#transit_router_attachment_description}
  */
  readonly transitRouterAttachmentDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#transit_router_attachment_name CenTransitRouterVpcAttachment#transit_router_attachment_name}
  */
  readonly transitRouterAttachmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#transit_router_id CenTransitRouterVpcAttachment#transit_router_id}
  */
  readonly transitRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#transit_router_vpc_attachment_name CenTransitRouterVpcAttachment#transit_router_vpc_attachment_name}
  */
  readonly transitRouterVpcAttachmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#transit_router_vpc_attachment_options CenTransitRouterVpcAttachment#transit_router_vpc_attachment_options}
  */
  readonly transitRouterVpcAttachmentOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#vpc_id CenTransitRouterVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#vpc_owner_id CenTransitRouterVpcAttachment#vpc_owner_id}
  */
  readonly vpcOwnerId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#timeouts CenTransitRouterVpcAttachment#timeouts}
  */
  readonly timeouts?: CenTransitRouterVpcAttachmentTimeouts;
  /**
  * zone_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#zone_mappings CenTransitRouterVpcAttachment#zone_mappings}
  */
  readonly zoneMappings: CenTransitRouterVpcAttachmentZoneMappings[] | cdktf.IResolvable;
}
export interface CenTransitRouterVpcAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#create CenTransitRouterVpcAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#delete CenTransitRouterVpcAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#update CenTransitRouterVpcAttachment#update}
  */
  readonly update?: string;
}

export function cenTransitRouterVpcAttachmentTimeoutsToTerraform(struct?: CenTransitRouterVpcAttachmentTimeouts | cdktf.IResolvable): any {
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


export function cenTransitRouterVpcAttachmentTimeoutsToHclTerraform(struct?: CenTransitRouterVpcAttachmentTimeouts | cdktf.IResolvable): any {
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

export class CenTransitRouterVpcAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouterVpcAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouterVpcAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
export interface CenTransitRouterVpcAttachmentZoneMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#vswitch_id CenTransitRouterVpcAttachment#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#zone_id CenTransitRouterVpcAttachment#zone_id}
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment alicloud_cen_transit_router_vpc_attachment}
*/
export class CenTransitRouterVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterVpcAttachment to import
  * @param importFromId The id of the existing CenTransitRouterVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_vpc_attachment alicloud_cen_transit_router_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPublishRouteEnabled = config.autoPublishRouteEnabled;
    this._cenId = config.cenId;
    this._dryRun = config.dryRun;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._resourceType = config.resourceType;
    this._routeTableAssociationEnabled = config.routeTableAssociationEnabled;
    this._routeTablePropagationEnabled = config.routeTablePropagationEnabled;
    this._tags = config.tags;
    this._transitRouterAttachmentDescription = config.transitRouterAttachmentDescription;
    this._transitRouterAttachmentName = config.transitRouterAttachmentName;
    this._transitRouterId = config.transitRouterId;
    this._transitRouterVpcAttachmentName = config.transitRouterVpcAttachmentName;
    this._transitRouterVpcAttachmentOptions = config.transitRouterVpcAttachmentOptions;
    this._vpcId = config.vpcId;
    this._vpcOwnerId = config.vpcOwnerId;
    this._timeouts.internalValue = config.timeouts;
    this._zoneMappings.internalValue = config.zoneMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_publish_route_enabled - computed: false, optional: true, required: false
  private _autoPublishRouteEnabled?: boolean | cdktf.IResolvable; 
  public get autoPublishRouteEnabled() {
    return this.getBooleanAttribute('auto_publish_route_enabled');
  }
  public set autoPublishRouteEnabled(value: boolean | cdktf.IResolvable) {
    this._autoPublishRouteEnabled = value;
  }
  public resetAutoPublishRouteEnabled() {
    this._autoPublishRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPublishRouteEnabledInput() {
    return this._autoPublishRouteEnabled;
  }

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // transit_router_attachment_name - computed: true, optional: true, required: false
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

  // transit_router_id - computed: true, optional: true, required: false
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  public resetTransitRouterId() {
    this._transitRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // transit_router_vpc_attachment_name - computed: true, optional: true, required: false
  private _transitRouterVpcAttachmentName?: string; 
  public get transitRouterVpcAttachmentName() {
    return this.getStringAttribute('transit_router_vpc_attachment_name');
  }
  public set transitRouterVpcAttachmentName(value: string) {
    this._transitRouterVpcAttachmentName = value;
  }
  public resetTransitRouterVpcAttachmentName() {
    this._transitRouterVpcAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterVpcAttachmentNameInput() {
    return this._transitRouterVpcAttachmentName;
  }

  // transit_router_vpc_attachment_options - computed: true, optional: true, required: false
  private _transitRouterVpcAttachmentOptions?: { [key: string]: string }; 
  public get transitRouterVpcAttachmentOptions() {
    return this.getStringMapAttribute('transit_router_vpc_attachment_options');
  }
  public set transitRouterVpcAttachmentOptions(value: { [key: string]: string }) {
    this._transitRouterVpcAttachmentOptions = value;
  }
  public resetTransitRouterVpcAttachmentOptions() {
    this._transitRouterVpcAttachmentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterVpcAttachmentOptionsInput() {
    return this._transitRouterVpcAttachmentOptions;
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

  // vpc_owner_id - computed: true, optional: true, required: false
  private _vpcOwnerId?: string; 
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }
  public set vpcOwnerId(value: string) {
    this._vpcOwnerId = value;
  }
  public resetVpcOwnerId() {
    this._vpcOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOwnerIdInput() {
    return this._vpcOwnerId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouterVpcAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouterVpcAttachmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      auto_publish_route_enabled: cdktf.booleanToTerraform(this._autoPublishRouteEnabled),
      cen_id: cdktf.stringToTerraform(this._cenId),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      route_table_association_enabled: cdktf.booleanToTerraform(this._routeTableAssociationEnabled),
      route_table_propagation_enabled: cdktf.booleanToTerraform(this._routeTablePropagationEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_router_attachment_description: cdktf.stringToTerraform(this._transitRouterAttachmentDescription),
      transit_router_attachment_name: cdktf.stringToTerraform(this._transitRouterAttachmentName),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_vpc_attachment_name: cdktf.stringToTerraform(this._transitRouterVpcAttachmentName),
      transit_router_vpc_attachment_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._transitRouterVpcAttachmentOptions),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_owner_id: cdktf.stringToTerraform(this._vpcOwnerId),
      timeouts: cenTransitRouterVpcAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
      zone_mappings: cdktf.listMapper(cenTransitRouterVpcAttachmentZoneMappingsToTerraform, true)(this._zoneMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_publish_route_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoPublishRouteEnabled),
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
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      transit_router_vpc_attachment_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterVpcAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_vpc_attachment_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._transitRouterVpcAttachmentOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_owner_id: {
        value: cdktf.stringToHclTerraform(this._vpcOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTransitRouterVpcAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouterVpcAttachmentTimeouts",
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
