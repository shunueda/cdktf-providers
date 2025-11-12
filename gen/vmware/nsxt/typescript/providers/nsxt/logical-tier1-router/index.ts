// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalTier1RouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable connected NSX routes advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#advertise_connected_routes LogicalTier1Router#advertise_connected_routes}
  */
  readonly advertiseConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable LB SNAT IP routes advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#advertise_lb_snat_ip_routes LogicalTier1Router#advertise_lb_snat_ip_routes}
  */
  readonly advertiseLbSnatIpRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable LB VIP routes advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#advertise_lb_vip_routes LogicalTier1Router#advertise_lb_vip_routes}
  */
  readonly advertiseLbVipRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable NAT routes advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#advertise_nat_routes LogicalTier1Router#advertise_nat_routes}
  */
  readonly advertiseNatRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable static routes advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#advertise_static_routes LogicalTier1Router#advertise_static_routes}
  */
  readonly advertiseStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#description LogicalTier1Router#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#display_name LogicalTier1Router#display_name}
  */
  readonly displayName?: string;
  /**
  * Edge Cluster Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#edge_cluster_id LogicalTier1Router#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * Enable router advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#enable_router_advertisement LogicalTier1Router#enable_router_advertisement}
  */
  readonly enableRouterAdvertisement?: boolean | cdktf.IResolvable;
  /**
  * Failover mode which determines whether the preferred service router instance for given logical router will preempt the peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#failover_mode LogicalTier1Router#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#id LogicalTier1Router#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * firewall_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#firewall_sections LogicalTier1Router#firewall_sections}
  */
  readonly firewallSections?: LogicalTier1RouterFirewallSections[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#tag LogicalTier1Router#tag}
  */
  readonly tag?: LogicalTier1RouterTag[] | cdktf.IResolvable;
}
export interface LogicalTier1RouterFirewallSections {
  /**
  * Identifier of the NSX resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#target_id LogicalTier1Router#target_id}
  */
  readonly targetId?: string;
  /**
  * Type of the NSX resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#target_type LogicalTier1Router#target_type}
  */
  readonly targetType?: string;
}

export function logicalTier1RouterFirewallSectionsToTerraform(struct?: LogicalTier1RouterFirewallSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function logicalTier1RouterFirewallSectionsToHclTerraform(struct?: LogicalTier1RouterFirewallSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalTier1RouterFirewallSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalTier1RouterFirewallSections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalTier1RouterFirewallSections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // target_display_name - computed: true, optional: false, required: false
  public get targetDisplayName() {
    return this.getStringAttribute('target_display_name');
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class LogicalTier1RouterFirewallSectionsList extends cdktf.ComplexList {
  public internalValue? : LogicalTier1RouterFirewallSections[] | cdktf.IResolvable

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
  public get(index: number): LogicalTier1RouterFirewallSectionsOutputReference {
    return new LogicalTier1RouterFirewallSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalTier1RouterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#scope LogicalTier1Router#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#tag LogicalTier1Router#tag}
  */
  readonly tag?: string;
}

export function logicalTier1RouterTagToTerraform(struct?: LogicalTier1RouterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function logicalTier1RouterTagToHclTerraform(struct?: LogicalTier1RouterTag | cdktf.IResolvable): any {
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

export class LogicalTier1RouterTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalTier1RouterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalTier1RouterTag | cdktf.IResolvable | undefined) {
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

export class LogicalTier1RouterTagList extends cdktf.ComplexList {
  public internalValue? : LogicalTier1RouterTag[] | cdktf.IResolvable

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
  public get(index: number): LogicalTier1RouterTagOutputReference {
    return new LogicalTier1RouterTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router nsxt_logical_tier1_router}
*/
export class LogicalTier1Router extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_logical_tier1_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalTier1Router resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalTier1Router to import
  * @param importFromId The id of the existing LogicalTier1Router that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalTier1Router to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_logical_tier1_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_tier1_router nsxt_logical_tier1_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalTier1RouterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogicalTier1RouterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_logical_tier1_router',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseConnectedRoutes = config.advertiseConnectedRoutes;
    this._advertiseLbSnatIpRoutes = config.advertiseLbSnatIpRoutes;
    this._advertiseLbVipRoutes = config.advertiseLbVipRoutes;
    this._advertiseNatRoutes = config.advertiseNatRoutes;
    this._advertiseStaticRoutes = config.advertiseStaticRoutes;
    this._description = config.description;
    this._displayName = config.displayName;
    this._edgeClusterId = config.edgeClusterId;
    this._enableRouterAdvertisement = config.enableRouterAdvertisement;
    this._failoverMode = config.failoverMode;
    this._id = config.id;
    this._firewallSections.internalValue = config.firewallSections;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_config_revision - computed: true, optional: false, required: false
  public get advertiseConfigRevision() {
    return this.getNumberAttribute('advertise_config_revision');
  }

  // advertise_connected_routes - computed: false, optional: true, required: false
  private _advertiseConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseConnectedRoutes() {
    return this.getBooleanAttribute('advertise_connected_routes');
  }
  public set advertiseConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseConnectedRoutes = value;
  }
  public resetAdvertiseConnectedRoutes() {
    this._advertiseConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseConnectedRoutesInput() {
    return this._advertiseConnectedRoutes;
  }

  // advertise_lb_snat_ip_routes - computed: false, optional: true, required: false
  private _advertiseLbSnatIpRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseLbSnatIpRoutes() {
    return this.getBooleanAttribute('advertise_lb_snat_ip_routes');
  }
  public set advertiseLbSnatIpRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseLbSnatIpRoutes = value;
  }
  public resetAdvertiseLbSnatIpRoutes() {
    this._advertiseLbSnatIpRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseLbSnatIpRoutesInput() {
    return this._advertiseLbSnatIpRoutes;
  }

  // advertise_lb_vip_routes - computed: false, optional: true, required: false
  private _advertiseLbVipRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseLbVipRoutes() {
    return this.getBooleanAttribute('advertise_lb_vip_routes');
  }
  public set advertiseLbVipRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseLbVipRoutes = value;
  }
  public resetAdvertiseLbVipRoutes() {
    this._advertiseLbVipRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseLbVipRoutesInput() {
    return this._advertiseLbVipRoutes;
  }

  // advertise_nat_routes - computed: false, optional: true, required: false
  private _advertiseNatRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseNatRoutes() {
    return this.getBooleanAttribute('advertise_nat_routes');
  }
  public set advertiseNatRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseNatRoutes = value;
  }
  public resetAdvertiseNatRoutes() {
    this._advertiseNatRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseNatRoutesInput() {
    return this._advertiseNatRoutes;
  }

  // advertise_static_routes - computed: false, optional: true, required: false
  private _advertiseStaticRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseStaticRoutes() {
    return this.getBooleanAttribute('advertise_static_routes');
  }
  public set advertiseStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseStaticRoutes = value;
  }
  public resetAdvertiseStaticRoutes() {
    this._advertiseStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseStaticRoutesInput() {
    return this._advertiseStaticRoutes;
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

  // edge_cluster_id - computed: false, optional: true, required: false
  private _edgeClusterId?: string; 
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }
  public set edgeClusterId(value: string) {
    this._edgeClusterId = value;
  }
  public resetEdgeClusterId() {
    this._edgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterIdInput() {
    return this._edgeClusterId;
  }

  // enable_router_advertisement - computed: false, optional: true, required: false
  private _enableRouterAdvertisement?: boolean | cdktf.IResolvable; 
  public get enableRouterAdvertisement() {
    return this.getBooleanAttribute('enable_router_advertisement');
  }
  public set enableRouterAdvertisement(value: boolean | cdktf.IResolvable) {
    this._enableRouterAdvertisement = value;
  }
  public resetEnableRouterAdvertisement() {
    this._enableRouterAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRouterAdvertisementInput() {
    return this._enableRouterAdvertisement;
  }

  // failover_mode - computed: false, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // firewall_sections - computed: false, optional: true, required: false
  private _firewallSections = new LogicalTier1RouterFirewallSectionsList(this, "firewall_sections", false);
  public get firewallSections() {
    return this._firewallSections;
  }
  public putFirewallSections(value: LogicalTier1RouterFirewallSections[] | cdktf.IResolvable) {
    this._firewallSections.internalValue = value;
  }
  public resetFirewallSections() {
    this._firewallSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSectionsInput() {
    return this._firewallSections.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LogicalTier1RouterTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LogicalTier1RouterTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_connected_routes: cdktf.booleanToTerraform(this._advertiseConnectedRoutes),
      advertise_lb_snat_ip_routes: cdktf.booleanToTerraform(this._advertiseLbSnatIpRoutes),
      advertise_lb_vip_routes: cdktf.booleanToTerraform(this._advertiseLbVipRoutes),
      advertise_nat_routes: cdktf.booleanToTerraform(this._advertiseNatRoutes),
      advertise_static_routes: cdktf.booleanToTerraform(this._advertiseStaticRoutes),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      enable_router_advertisement: cdktf.booleanToTerraform(this._enableRouterAdvertisement),
      failover_mode: cdktf.stringToTerraform(this._failoverMode),
      id: cdktf.stringToTerraform(this._id),
      firewall_sections: cdktf.listMapper(logicalTier1RouterFirewallSectionsToTerraform, true)(this._firewallSections.internalValue),
      tag: cdktf.listMapper(logicalTier1RouterTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_connected_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseConnectedRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_lb_snat_ip_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseLbSnatIpRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_lb_vip_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseLbVipRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_nat_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseNatRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_static_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseStaticRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_router_advertisement: {
        value: cdktf.booleanToHclTerraform(this._enableRouterAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_mode: {
        value: cdktf.stringToHclTerraform(this._failoverMode),
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
      firewall_sections: {
        value: cdktf.listMapperHcl(logicalTier1RouterFirewallSectionsToHclTerraform, true)(this._firewallSections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalTier1RouterFirewallSectionsList",
      },
      tag: {
        value: cdktf.listMapperHcl(logicalTier1RouterTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogicalTier1RouterTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
