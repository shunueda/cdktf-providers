// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#admin_state_up NetworkingNetworkV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#availability_zone_hints NetworkingNetworkV2#availability_zone_hints}
  */
  readonly availabilityZoneHints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#description NetworkingNetworkV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#dns_domain NetworkingNetworkV2#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#external NetworkingNetworkV2#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#id NetworkingNetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#mtu NetworkingNetworkV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#name NetworkingNetworkV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#port_security_enabled NetworkingNetworkV2#port_security_enabled}
  */
  readonly portSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#qos_policy_id NetworkingNetworkV2#qos_policy_id}
  */
  readonly qosPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#region NetworkingNetworkV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#shared NetworkingNetworkV2#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#tags NetworkingNetworkV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#tenant_id NetworkingNetworkV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#transparent_vlan NetworkingNetworkV2#transparent_vlan}
  */
  readonly transparentVlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#value_specs NetworkingNetworkV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string };
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#segments NetworkingNetworkV2#segments}
  */
  readonly segments?: NetworkingNetworkV2Segments[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#timeouts NetworkingNetworkV2#timeouts}
  */
  readonly timeouts?: NetworkingNetworkV2Timeouts;
}
export interface NetworkingNetworkV2Segments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#network_type NetworkingNetworkV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#physical_network NetworkingNetworkV2#physical_network}
  */
  readonly physicalNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#segmentation_id NetworkingNetworkV2#segmentation_id}
  */
  readonly segmentationId?: number;
}

export function networkingNetworkV2SegmentsToTerraform(struct?: NetworkingNetworkV2Segments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_type: cdktf.stringToTerraform(struct!.networkType),
    physical_network: cdktf.stringToTerraform(struct!.physicalNetwork),
    segmentation_id: cdktf.numberToTerraform(struct!.segmentationId),
  }
}


export function networkingNetworkV2SegmentsToHclTerraform(struct?: NetworkingNetworkV2Segments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_network: {
      value: cdktf.stringToHclTerraform(struct!.physicalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segmentation_id: {
      value: cdktf.numberToHclTerraform(struct!.segmentationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingNetworkV2SegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkingNetworkV2Segments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._physicalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalNetwork = this._physicalNetwork;
    }
    if (this._segmentationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationId = this._segmentationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingNetworkV2Segments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkType = undefined;
      this._physicalNetwork = undefined;
      this._segmentationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkType = value.networkType;
      this._physicalNetwork = value.physicalNetwork;
      this._segmentationId = value.segmentationId;
    }
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // physical_network - computed: false, optional: true, required: false
  private _physicalNetwork?: string; 
  public get physicalNetwork() {
    return this.getStringAttribute('physical_network');
  }
  public set physicalNetwork(value: string) {
    this._physicalNetwork = value;
  }
  public resetPhysicalNetwork() {
    this._physicalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalNetworkInput() {
    return this._physicalNetwork;
  }

  // segmentation_id - computed: false, optional: true, required: false
  private _segmentationId?: number; 
  public get segmentationId() {
    return this.getNumberAttribute('segmentation_id');
  }
  public set segmentationId(value: number) {
    this._segmentationId = value;
  }
  public resetSegmentationId() {
    this._segmentationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationIdInput() {
    return this._segmentationId;
  }
}

export class NetworkingNetworkV2SegmentsList extends cdktf.ComplexList {
  public internalValue? : NetworkingNetworkV2Segments[] | cdktf.IResolvable

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
  public get(index: number): NetworkingNetworkV2SegmentsOutputReference {
    return new NetworkingNetworkV2SegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkingNetworkV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#create NetworkingNetworkV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#delete NetworkingNetworkV2#delete}
  */
  readonly delete?: string;
}

export function networkingNetworkV2TimeoutsToTerraform(struct?: NetworkingNetworkV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingNetworkV2TimeoutsToHclTerraform(struct?: NetworkingNetworkV2Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingNetworkV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingNetworkV2Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingNetworkV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2 nhncloud_networking_network_v2}
*/
export class NetworkingNetworkV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_network_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingNetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingNetworkV2 to import
  * @param importFromId The id of the existing NetworkingNetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingNetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_network_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_network_v2 nhncloud_networking_network_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingNetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkingNetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._availabilityZoneHints = config.availabilityZoneHints;
    this._description = config.description;
    this._dnsDomain = config.dnsDomain;
    this._external = config.external;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._portSecurityEnabled = config.portSecurityEnabled;
    this._qosPolicyId = config.qosPolicyId;
    this._region = config.region;
    this._shared = config.shared;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._transparentVlan = config.transparentVlan;
    this._valueSpecs = config.valueSpecs;
    this._segments.internalValue = config.segments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
  }

  // availability_zone_hints - computed: true, optional: true, required: false
  private _availabilityZoneHints?: string[]; 
  public get availabilityZoneHints() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zone_hints'));
  }
  public set availabilityZoneHints(value: string[]) {
    this._availabilityZoneHints = value;
  }
  public resetAvailabilityZoneHints() {
    this._availabilityZoneHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneHintsInput() {
    return this._availabilityZoneHints;
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

  // dns_domain - computed: true, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
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

  // port_security_enabled - computed: true, optional: true, required: false
  private _portSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get portSecurityEnabled() {
    return this.getBooleanAttribute('port_security_enabled');
  }
  public set portSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._portSecurityEnabled = value;
  }
  public resetPortSecurityEnabled() {
    this._portSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityEnabledInput() {
    return this._portSecurityEnabled;
  }

  // qos_policy_id - computed: true, optional: true, required: false
  private _qosPolicyId?: string; 
  public get qosPolicyId() {
    return this.getStringAttribute('qos_policy_id');
  }
  public set qosPolicyId(value: string) {
    this._qosPolicyId = value;
  }
  public resetQosPolicyId() {
    this._qosPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyIdInput() {
    return this._qosPolicyId;
  }

  // region - computed: true, optional: true, required: false
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

  // shared - computed: true, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // transparent_vlan - computed: true, optional: true, required: false
  private _transparentVlan?: boolean | cdktf.IResolvable; 
  public get transparentVlan() {
    return this.getBooleanAttribute('transparent_vlan');
  }
  public set transparentVlan(value: boolean | cdktf.IResolvable) {
    this._transparentVlan = value;
  }
  public resetTransparentVlan() {
    this._transparentVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentVlanInput() {
    return this._transparentVlan;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string }; 
  public get valueSpecs() {
    return this.getStringMapAttribute('value_specs');
  }
  public set valueSpecs(value: { [key: string]: string }) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // segments - computed: false, optional: true, required: false
  private _segments = new NetworkingNetworkV2SegmentsList(this, "segments", true);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: NetworkingNetworkV2Segments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  public resetSegments() {
    this._segments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingNetworkV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingNetworkV2Timeouts) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      availability_zone_hints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZoneHints),
      description: cdktf.stringToTerraform(this._description),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      external: cdktf.booleanToTerraform(this._external),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      port_security_enabled: cdktf.booleanToTerraform(this._portSecurityEnabled),
      qos_policy_id: cdktf.stringToTerraform(this._qosPolicyId),
      region: cdktf.stringToTerraform(this._region),
      shared: cdktf.booleanToTerraform(this._shared),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      transparent_vlan: cdktf.booleanToTerraform(this._transparentVlan),
      value_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueSpecs),
      segments: cdktf.listMapper(networkingNetworkV2SegmentsToTerraform, true)(this._segments.internalValue),
      timeouts: networkingNetworkV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone_hints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZoneHints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security_enabled: {
        value: cdktf.booleanToHclTerraform(this._portSecurityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_policy_id: {
        value: cdktf.stringToHclTerraform(this._qosPolicyId),
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
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent_vlan: {
        value: cdktf.booleanToHclTerraform(this._transparentVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value_specs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._valueSpecs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      segments: {
        value: cdktf.listMapperHcl(networkingNetworkV2SegmentsToHclTerraform, true)(this._segments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkingNetworkV2SegmentsList",
      },
      timeouts: {
        value: networkingNetworkV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingNetworkV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
