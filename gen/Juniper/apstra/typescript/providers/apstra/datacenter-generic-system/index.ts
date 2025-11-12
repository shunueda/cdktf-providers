// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterGenericSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * AS number of the Generic System. Note that in some circumstances Apstra may assign an ASN to the generic system even when none is supplied via this attribute. The automaticallyassigned value will be overwritten by Terraform during a subsequent apply operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#asn DatacenterGenericSystem#asn}
  */
  readonly asn?: number;
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#blueprint_id DatacenterGenericSystem#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * When `true`, Connectivity Templates associated with this Generic System will be automatically cleared in a variety of circumstances where they would ordinarily block Generic System changes, including:
  *   - Deletion of the Generic System
  *   - Deletion of a Generic System Link or LAG interface
  *   - Orphaning a LAG interface by reassigning all of its member links to new roles by changing their `group_label` attribute
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#clear_cts_on_destroy DatacenterGenericSystem#clear_cts_on_destroy}
  */
  readonly clearCtsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Set the Apstra Deploy Mode for this Generic System. Default: `deploy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#deploy_mode DatacenterGenericSystem#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Set `true` to create an External Generic System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#external DatacenterGenericSystem#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * System hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#hostname DatacenterGenericSystem#hostname}
  */
  readonly hostname?: string;
  /**
  * Generic System link details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#links DatacenterGenericSystem#links}
  */
  readonly links: DatacenterGenericSystemLinks[] | cdktf.IResolvable;
  /**
  * IPv4 address of loopback interface in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#loopback_ipv4 DatacenterGenericSystem#loopback_ipv4}
  */
  readonly loopbackIpv4?: string;
  /**
  * IPv6 address of loopback interface in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#loopback_ipv6 DatacenterGenericSystem#loopback_ipv6}
  */
  readonly loopbackIpv6?: string;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#name DatacenterGenericSystem#name}
  */
  readonly name?: string;
  /**
  * Omit this attribute to allow any available port-channel to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#port_channel_id_max DatacenterGenericSystem#port_channel_id_max}
  */
  readonly portChannelIdMax?: number;
  /**
  * Omit this attribute to allow any available port-channel to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#port_channel_id_min DatacenterGenericSystem#port_channel_id_min}
  */
  readonly portChannelIdMin?: number;
  /**
  * Tag labels to be applied to this Generic System. If a Tag doesn't exist in the Blueprint it will be created automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#tags DatacenterGenericSystem#tags}
  */
  readonly tags?: string[];
}
export interface DatacenterGenericSystemLinks {
  /**
  * This field is used to collect multiple links into aggregation groups. For example, to create two LAG pairs from four physical links, you might use `group_label` value "bond0" on two links and "bond1" on the other two links. Apstra assigns a unique group ID to each link by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#group_label DatacenterGenericSystem#group_label}
  */
  readonly groupLabel?: string;
  /**
  * LAG negotiation mode of the Link. All links with the same `group_label` must use the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#lag_mode DatacenterGenericSystem#lag_mode}
  */
  readonly lagMode?: string;
  /**
  * Names of Tag to be applied to this Link. If a Tag doesn't exist in the Blueprint it will be created automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#tags DatacenterGenericSystem#tags}
  */
  readonly tags?: string[];
  /**
  * Graph Node ID of the Leaf Switch or Access Switch where the link connects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#target_switch_id DatacenterGenericSystem#target_switch_id}
  */
  readonly targetSwitchId: string;
  /**
  * Name of the physical interface where the link connects on the Leaf Switch or Access Switch ("ge-0/0/1" or similar).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#target_switch_if_name DatacenterGenericSystem#target_switch_if_name}
  */
  readonly targetSwitchIfName: string;
  /**
  * Transformation ID sets the operational mode of an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#target_switch_if_transform_id DatacenterGenericSystem#target_switch_if_transform_id}
  */
  readonly targetSwitchIfTransformId: number;
}

export function datacenterGenericSystemLinksToTerraform(struct?: DatacenterGenericSystemLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_label: cdktf.stringToTerraform(struct!.groupLabel),
    lag_mode: cdktf.stringToTerraform(struct!.lagMode),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    target_switch_id: cdktf.stringToTerraform(struct!.targetSwitchId),
    target_switch_if_name: cdktf.stringToTerraform(struct!.targetSwitchIfName),
    target_switch_if_transform_id: cdktf.numberToTerraform(struct!.targetSwitchIfTransformId),
  }
}


export function datacenterGenericSystemLinksToHclTerraform(struct?: DatacenterGenericSystemLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_label: {
      value: cdktf.stringToHclTerraform(struct!.groupLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lag_mode: {
      value: cdktf.stringToHclTerraform(struct!.lagMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target_switch_id: {
      value: cdktf.stringToHclTerraform(struct!.targetSwitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_switch_if_name: {
      value: cdktf.stringToHclTerraform(struct!.targetSwitchIfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_switch_if_transform_id: {
      value: cdktf.numberToHclTerraform(struct!.targetSwitchIfTransformId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterGenericSystemLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterGenericSystemLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabel = this._groupLabel;
    }
    if (this._lagMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagMode = this._lagMode;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._targetSwitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitchId = this._targetSwitchId;
    }
    if (this._targetSwitchIfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitchIfName = this._targetSwitchIfName;
    }
    if (this._targetSwitchIfTransformId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitchIfTransformId = this._targetSwitchIfTransformId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterGenericSystemLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupLabel = undefined;
      this._lagMode = undefined;
      this._tags = undefined;
      this._targetSwitchId = undefined;
      this._targetSwitchIfName = undefined;
      this._targetSwitchIfTransformId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupLabel = value.groupLabel;
      this._lagMode = value.lagMode;
      this._tags = value.tags;
      this._targetSwitchId = value.targetSwitchId;
      this._targetSwitchIfName = value.targetSwitchIfName;
      this._targetSwitchIfTransformId = value.targetSwitchIfTransformId;
    }
  }

  // group_label - computed: false, optional: true, required: false
  private _groupLabel?: string; 
  public get groupLabel() {
    return this.getStringAttribute('group_label');
  }
  public set groupLabel(value: string) {
    this._groupLabel = value;
  }
  public resetGroupLabel() {
    this._groupLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelInput() {
    return this._groupLabel;
  }

  // lag_mode - computed: false, optional: true, required: false
  private _lagMode?: string; 
  public get lagMode() {
    return this.getStringAttribute('lag_mode');
  }
  public set lagMode(value: string) {
    this._lagMode = value;
  }
  public resetLagMode() {
    this._lagMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagModeInput() {
    return this._lagMode;
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

  // target_switch_id - computed: false, optional: false, required: true
  private _targetSwitchId?: string; 
  public get targetSwitchId() {
    return this.getStringAttribute('target_switch_id');
  }
  public set targetSwitchId(value: string) {
    this._targetSwitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchIdInput() {
    return this._targetSwitchId;
  }

  // target_switch_if_name - computed: false, optional: false, required: true
  private _targetSwitchIfName?: string; 
  public get targetSwitchIfName() {
    return this.getStringAttribute('target_switch_if_name');
  }
  public set targetSwitchIfName(value: string) {
    this._targetSwitchIfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchIfNameInput() {
    return this._targetSwitchIfName;
  }

  // target_switch_if_transform_id - computed: false, optional: false, required: true
  private _targetSwitchIfTransformId?: number; 
  public get targetSwitchIfTransformId() {
    return this.getNumberAttribute('target_switch_if_transform_id');
  }
  public set targetSwitchIfTransformId(value: number) {
    this._targetSwitchIfTransformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchIfTransformIdInput() {
    return this._targetSwitchIfTransformId;
  }
}

export class DatacenterGenericSystemLinksList extends cdktf.ComplexList {
  public internalValue? : DatacenterGenericSystemLinks[] | cdktf.IResolvable

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
  public get(index: number): DatacenterGenericSystemLinksOutputReference {
    return new DatacenterGenericSystemLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system apstra_datacenter_generic_system}
*/
export class DatacenterGenericSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_generic_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterGenericSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterGenericSystem to import
  * @param importFromId The id of the existing DatacenterGenericSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterGenericSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_generic_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_generic_system apstra_datacenter_generic_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterGenericSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterGenericSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_generic_system',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._blueprintId = config.blueprintId;
    this._clearCtsOnDestroy = config.clearCtsOnDestroy;
    this._deployMode = config.deployMode;
    this._external = config.external;
    this._hostname = config.hostname;
    this._links.internalValue = config.links;
    this._loopbackIpv4 = config.loopbackIpv4;
    this._loopbackIpv6 = config.loopbackIpv6;
    this._name = config.name;
    this._portChannelIdMax = config.portChannelIdMax;
    this._portChannelIdMin = config.portChannelIdMin;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

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

  // clear_cts_on_destroy - computed: false, optional: true, required: false
  private _clearCtsOnDestroy?: boolean | cdktf.IResolvable; 
  public get clearCtsOnDestroy() {
    return this.getBooleanAttribute('clear_cts_on_destroy');
  }
  public set clearCtsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._clearCtsOnDestroy = value;
  }
  public resetClearCtsOnDestroy() {
    this._clearCtsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearCtsOnDestroyInput() {
    return this._clearCtsOnDestroy;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_application_point_ids_by_group_label - computed: true, optional: false, required: false
  private _linkApplicationPointIdsByGroupLabel = new cdktf.StringMap(this, "link_application_point_ids_by_group_label");
  public get linkApplicationPointIdsByGroupLabel() {
    return this._linkApplicationPointIdsByGroupLabel;
  }

  // link_application_point_ids_by_tag - computed: true, optional: false, required: false
  private _linkApplicationPointIdsByTag = new cdktf.StringListMap(this, "link_application_point_ids_by_tag");
  public get linkApplicationPointIdsByTag() {
    return this._linkApplicationPointIdsByTag;
  }

  // links - computed: false, optional: false, required: true
  private _links = new DatacenterGenericSystemLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DatacenterGenericSystemLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // loopback_ipv4 - computed: false, optional: true, required: false
  private _loopbackIpv4?: string; 
  public get loopbackIpv4() {
    return this.getStringAttribute('loopback_ipv4');
  }
  public set loopbackIpv4(value: string) {
    this._loopbackIpv4 = value;
  }
  public resetLoopbackIpv4() {
    this._loopbackIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv4Input() {
    return this._loopbackIpv4;
  }

  // loopback_ipv6 - computed: false, optional: true, required: false
  private _loopbackIpv6?: string; 
  public get loopbackIpv6() {
    return this.getStringAttribute('loopback_ipv6');
  }
  public set loopbackIpv6(value: string) {
    this._loopbackIpv6 = value;
  }
  public resetLoopbackIpv6() {
    this._loopbackIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv6Input() {
    return this._loopbackIpv6;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port_channel_id_max - computed: true, optional: true, required: false
  private _portChannelIdMax?: number; 
  public get portChannelIdMax() {
    return this.getNumberAttribute('port_channel_id_max');
  }
  public set portChannelIdMax(value: number) {
    this._portChannelIdMax = value;
  }
  public resetPortChannelIdMax() {
    this._portChannelIdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelIdMaxInput() {
    return this._portChannelIdMax;
  }

  // port_channel_id_min - computed: true, optional: true, required: false
  private _portChannelIdMin?: number; 
  public get portChannelIdMin() {
    return this.getNumberAttribute('port_channel_id_min');
  }
  public set portChannelIdMin(value: number) {
    this._portChannelIdMin = value;
  }
  public resetPortChannelIdMin() {
    this._portChannelIdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelIdMinInput() {
    return this._portChannelIdMin;
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
      asn: cdktf.numberToTerraform(this._asn),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      clear_cts_on_destroy: cdktf.booleanToTerraform(this._clearCtsOnDestroy),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      external: cdktf.booleanToTerraform(this._external),
      hostname: cdktf.stringToTerraform(this._hostname),
      links: cdktf.listMapper(datacenterGenericSystemLinksToTerraform, false)(this._links.internalValue),
      loopback_ipv4: cdktf.stringToTerraform(this._loopbackIpv4),
      loopback_ipv6: cdktf.stringToTerraform(this._loopbackIpv6),
      name: cdktf.stringToTerraform(this._name),
      port_channel_id_max: cdktf.numberToTerraform(this._portChannelIdMax),
      port_channel_id_min: cdktf.numberToTerraform(this._portChannelIdMin),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_cts_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._clearCtsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      links: {
        value: cdktf.listMapperHcl(datacenterGenericSystemLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatacenterGenericSystemLinksList",
      },
      loopback_ipv4: {
        value: cdktf.stringToHclTerraform(this._loopbackIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_ipv6: {
        value: cdktf.stringToHclTerraform(this._loopbackIpv6),
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
      port_channel_id_max: {
        value: cdktf.numberToHclTerraform(this._portChannelIdMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_channel_id_min: {
        value: cdktf.numberToHclTerraform(this._portChannelIdMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
