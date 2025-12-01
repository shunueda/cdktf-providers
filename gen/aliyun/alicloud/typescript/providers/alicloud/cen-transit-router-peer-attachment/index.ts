// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterPeerAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#auto_publish_route_enabled CenTransitRouterPeerAttachment#auto_publish_route_enabled}
  */
  readonly autoPublishRouteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#bandwidth CenTransitRouterPeerAttachment#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#bandwidth_type CenTransitRouterPeerAttachment#bandwidth_type}
  */
  readonly bandwidthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#cen_bandwidth_package_id CenTransitRouterPeerAttachment#cen_bandwidth_package_id}
  */
  readonly cenBandwidthPackageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#cen_id CenTransitRouterPeerAttachment#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#default_link_type CenTransitRouterPeerAttachment#default_link_type}
  */
  readonly defaultLinkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#dry_run CenTransitRouterPeerAttachment#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#id CenTransitRouterPeerAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#peer_transit_router_id CenTransitRouterPeerAttachment#peer_transit_router_id}
  */
  readonly peerTransitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#peer_transit_router_region_id CenTransitRouterPeerAttachment#peer_transit_router_region_id}
  */
  readonly peerTransitRouterRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#resource_type CenTransitRouterPeerAttachment#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#route_table_association_enabled CenTransitRouterPeerAttachment#route_table_association_enabled}
  */
  readonly routeTableAssociationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#route_table_propagation_enabled CenTransitRouterPeerAttachment#route_table_propagation_enabled}
  */
  readonly routeTablePropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#tags CenTransitRouterPeerAttachment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#transit_router_attachment_description CenTransitRouterPeerAttachment#transit_router_attachment_description}
  */
  readonly transitRouterAttachmentDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#transit_router_attachment_name CenTransitRouterPeerAttachment#transit_router_attachment_name}
  */
  readonly transitRouterAttachmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#transit_router_id CenTransitRouterPeerAttachment#transit_router_id}
  */
  readonly transitRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#transit_router_peer_attachment_name CenTransitRouterPeerAttachment#transit_router_peer_attachment_name}
  */
  readonly transitRouterPeerAttachmentName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#timeouts CenTransitRouterPeerAttachment#timeouts}
  */
  readonly timeouts?: CenTransitRouterPeerAttachmentTimeouts;
}
export interface CenTransitRouterPeerAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#create CenTransitRouterPeerAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#delete CenTransitRouterPeerAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#update CenTransitRouterPeerAttachment#update}
  */
  readonly update?: string;
}

export function cenTransitRouterPeerAttachmentTimeoutsToTerraform(struct?: CenTransitRouterPeerAttachmentTimeouts | cdktf.IResolvable): any {
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


export function cenTransitRouterPeerAttachmentTimeoutsToHclTerraform(struct?: CenTransitRouterPeerAttachmentTimeouts | cdktf.IResolvable): any {
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

export class CenTransitRouterPeerAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouterPeerAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouterPeerAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment alicloud_cen_transit_router_peer_attachment}
*/
export class CenTransitRouterPeerAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_peer_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterPeerAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterPeerAttachment to import
  * @param importFromId The id of the existing CenTransitRouterPeerAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterPeerAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_peer_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cen_transit_router_peer_attachment alicloud_cen_transit_router_peer_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterPeerAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterPeerAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_peer_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._bandwidth = config.bandwidth;
    this._bandwidthType = config.bandwidthType;
    this._cenBandwidthPackageId = config.cenBandwidthPackageId;
    this._cenId = config.cenId;
    this._defaultLinkType = config.defaultLinkType;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._peerTransitRouterId = config.peerTransitRouterId;
    this._peerTransitRouterRegionId = config.peerTransitRouterRegionId;
    this._resourceType = config.resourceType;
    this._routeTableAssociationEnabled = config.routeTableAssociationEnabled;
    this._routeTablePropagationEnabled = config.routeTablePropagationEnabled;
    this._tags = config.tags;
    this._transitRouterAttachmentDescription = config.transitRouterAttachmentDescription;
    this._transitRouterAttachmentName = config.transitRouterAttachmentName;
    this._transitRouterId = config.transitRouterId;
    this._transitRouterPeerAttachmentName = config.transitRouterPeerAttachmentName;
    this._timeouts.internalValue = config.timeouts;
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

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_type - computed: true, optional: true, required: false
  private _bandwidthType?: string; 
  public get bandwidthType() {
    return this.getStringAttribute('bandwidth_type');
  }
  public set bandwidthType(value: string) {
    this._bandwidthType = value;
  }
  public resetBandwidthType() {
    this._bandwidthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthTypeInput() {
    return this._bandwidthType;
  }

  // cen_bandwidth_package_id - computed: false, optional: true, required: false
  private _cenBandwidthPackageId?: string; 
  public get cenBandwidthPackageId() {
    return this.getStringAttribute('cen_bandwidth_package_id');
  }
  public set cenBandwidthPackageId(value: string) {
    this._cenBandwidthPackageId = value;
  }
  public resetCenBandwidthPackageId() {
    this._cenBandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenBandwidthPackageIdInput() {
    return this._cenBandwidthPackageId;
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

  // default_link_type - computed: true, optional: true, required: false
  private _defaultLinkType?: string; 
  public get defaultLinkType() {
    return this.getStringAttribute('default_link_type');
  }
  public set defaultLinkType(value: string) {
    this._defaultLinkType = value;
  }
  public resetDefaultLinkType() {
    this._defaultLinkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLinkTypeInput() {
    return this._defaultLinkType;
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

  // peer_transit_router_id - computed: false, optional: false, required: true
  private _peerTransitRouterId?: string; 
  public get peerTransitRouterId() {
    return this.getStringAttribute('peer_transit_router_id');
  }
  public set peerTransitRouterId(value: string) {
    this._peerTransitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitRouterIdInput() {
    return this._peerTransitRouterId;
  }

  // peer_transit_router_region_id - computed: false, optional: true, required: false
  private _peerTransitRouterRegionId?: string; 
  public get peerTransitRouterRegionId() {
    return this.getStringAttribute('peer_transit_router_region_id');
  }
  public set peerTransitRouterRegionId(value: string) {
    this._peerTransitRouterRegionId = value;
  }
  public resetPeerTransitRouterRegionId() {
    this._peerTransitRouterRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitRouterRegionIdInput() {
    return this._peerTransitRouterRegionId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_type - computed: false, optional: true, required: false
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

  // transit_router_id - computed: false, optional: true, required: false
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

  // transit_router_peer_attachment_name - computed: true, optional: true, required: false
  private _transitRouterPeerAttachmentName?: string; 
  public get transitRouterPeerAttachmentName() {
    return this.getStringAttribute('transit_router_peer_attachment_name');
  }
  public set transitRouterPeerAttachmentName(value: string) {
    this._transitRouterPeerAttachmentName = value;
  }
  public resetTransitRouterPeerAttachmentName() {
    this._transitRouterPeerAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterPeerAttachmentNameInput() {
    return this._transitRouterPeerAttachmentName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouterPeerAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouterPeerAttachmentTimeouts) {
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
      auto_publish_route_enabled: cdktf.booleanToTerraform(this._autoPublishRouteEnabled),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bandwidth_type: cdktf.stringToTerraform(this._bandwidthType),
      cen_bandwidth_package_id: cdktf.stringToTerraform(this._cenBandwidthPackageId),
      cen_id: cdktf.stringToTerraform(this._cenId),
      default_link_type: cdktf.stringToTerraform(this._defaultLinkType),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      peer_transit_router_id: cdktf.stringToTerraform(this._peerTransitRouterId),
      peer_transit_router_region_id: cdktf.stringToTerraform(this._peerTransitRouterRegionId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      route_table_association_enabled: cdktf.booleanToTerraform(this._routeTableAssociationEnabled),
      route_table_propagation_enabled: cdktf.booleanToTerraform(this._routeTablePropagationEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_router_attachment_description: cdktf.stringToTerraform(this._transitRouterAttachmentDescription),
      transit_router_attachment_name: cdktf.stringToTerraform(this._transitRouterAttachmentName),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_peer_attachment_name: cdktf.stringToTerraform(this._transitRouterPeerAttachmentName),
      timeouts: cenTransitRouterPeerAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_type: {
        value: cdktf.stringToHclTerraform(this._bandwidthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._cenBandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_link_type: {
        value: cdktf.stringToHclTerraform(this._defaultLinkType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_transit_router_id: {
        value: cdktf.stringToHclTerraform(this._peerTransitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_transit_router_region_id: {
        value: cdktf.stringToHclTerraform(this._peerTransitRouterRegionId),
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
      transit_router_peer_attachment_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterPeerAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTransitRouterPeerAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouterPeerAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
