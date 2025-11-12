// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#description VpcRouteEntry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#destination_cidr_block VpcRouteEntry#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#id VpcRouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#nexthop_id VpcRouteEntry#nexthop_id}
  */
  readonly nexthopId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#nexthop_type VpcRouteEntry#nexthop_type}
  */
  readonly nexthopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#route_entry_name VpcRouteEntry#route_entry_name}
  */
  readonly routeEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#route_table_id VpcRouteEntry#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * next_hops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#next_hops VpcRouteEntry#next_hops}
  */
  readonly nextHops?: VpcRouteEntryNextHops[] | cdktf.IResolvable;
  /**
  * route_publish_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#route_publish_targets VpcRouteEntry#route_publish_targets}
  */
  readonly routePublishTargets?: VpcRouteEntryRoutePublishTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#timeouts VpcRouteEntry#timeouts}
  */
  readonly timeouts?: VpcRouteEntryTimeouts;
}
export interface VpcRouteEntryNextHopsNextHopRelatedInfo {
}

export function vpcRouteEntryNextHopsNextHopRelatedInfoToTerraform(struct?: VpcRouteEntryNextHopsNextHopRelatedInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcRouteEntryNextHopsNextHopRelatedInfoToHclTerraform(struct?: VpcRouteEntryNextHopsNextHopRelatedInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcRouteEntryNextHopsNextHopRelatedInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcRouteEntryNextHopsNextHopRelatedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcRouteEntryNextHopsNextHopRelatedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
}

export class VpcRouteEntryNextHopsNextHopRelatedInfoList extends cdktf.ComplexList {

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
  public get(index: number): VpcRouteEntryNextHopsNextHopRelatedInfoOutputReference {
    return new VpcRouteEntryNextHopsNextHopRelatedInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcRouteEntryNextHops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#nexthop_id VpcRouteEntry#nexthop_id}
  */
  readonly nexthopId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#nexthop_type VpcRouteEntry#nexthop_type}
  */
  readonly nexthopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#weight VpcRouteEntry#weight}
  */
  readonly weight?: number;
}

export function vpcRouteEntryNextHopsToTerraform(struct?: VpcRouteEntryNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nexthop_id: cdktf.stringToTerraform(struct!.nexthopId),
    nexthop_type: cdktf.stringToTerraform(struct!.nexthopType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vpcRouteEntryNextHopsToHclTerraform(struct?: VpcRouteEntryNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nexthop_id: {
      value: cdktf.stringToHclTerraform(struct!.nexthopId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_type: {
      value: cdktf.stringToHclTerraform(struct!.nexthopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcRouteEntryNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcRouteEntryNextHops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nexthopId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopId = this._nexthopId;
    }
    if (this._nexthopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopType = this._nexthopType;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcRouteEntryNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nexthopId = undefined;
      this._nexthopType = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nexthopId = value.nexthopId;
      this._nexthopType = value.nexthopType;
      this._weight = value.weight;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getNumberAttribute('enabled');
  }

  // next_hop_region_id - computed: true, optional: false, required: false
  public get nextHopRegionId() {
    return this.getStringAttribute('next_hop_region_id');
  }

  // next_hop_related_info - computed: true, optional: false, required: false
  private _nextHopRelatedInfo = new VpcRouteEntryNextHopsNextHopRelatedInfoList(this, "next_hop_related_info", false);
  public get nextHopRelatedInfo() {
    return this._nextHopRelatedInfo;
  }

  // nexthop_id - computed: true, optional: true, required: false
  private _nexthopId?: string; 
  public get nexthopId() {
    return this.getStringAttribute('nexthop_id');
  }
  public set nexthopId(value: string) {
    this._nexthopId = value;
  }
  public resetNexthopId() {
    this._nexthopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIdInput() {
    return this._nexthopId;
  }

  // nexthop_type - computed: true, optional: true, required: false
  private _nexthopType?: string; 
  public get nexthopType() {
    return this.getStringAttribute('nexthop_type');
  }
  public set nexthopType(value: string) {
    this._nexthopType = value;
  }
  public resetNexthopType() {
    this._nexthopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTypeInput() {
    return this._nexthopType;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class VpcRouteEntryNextHopsList extends cdktf.ComplexList {
  public internalValue? : VpcRouteEntryNextHops[] | cdktf.IResolvable

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
  public get(index: number): VpcRouteEntryNextHopsOutputReference {
    return new VpcRouteEntryNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcRouteEntryRoutePublishTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#target_instance_id VpcRouteEntry#target_instance_id}
  */
  readonly targetInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#target_type VpcRouteEntry#target_type}
  */
  readonly targetType: string;
}

export function vpcRouteEntryRoutePublishTargetsToTerraform(struct?: VpcRouteEntryRoutePublishTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_instance_id: cdktf.stringToTerraform(struct!.targetInstanceId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function vpcRouteEntryRoutePublishTargetsToHclTerraform(struct?: VpcRouteEntryRoutePublishTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.targetInstanceId),
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

export class VpcRouteEntryRoutePublishTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcRouteEntryRoutePublishTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstanceId = this._targetInstanceId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcRouteEntryRoutePublishTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetInstanceId = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetInstanceId = value.targetInstanceId;
      this._targetType = value.targetType;
    }
  }

  // publish_status - computed: true, optional: false, required: false
  public get publishStatus() {
    return this.getStringAttribute('publish_status');
  }

  // target_instance_id - computed: true, optional: true, required: false
  private _targetInstanceId?: string; 
  public get targetInstanceId() {
    return this.getStringAttribute('target_instance_id');
  }
  public set targetInstanceId(value: string) {
    this._targetInstanceId = value;
  }
  public resetTargetInstanceId() {
    this._targetInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceIdInput() {
    return this._targetInstanceId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class VpcRouteEntryRoutePublishTargetsList extends cdktf.ComplexList {
  public internalValue? : VpcRouteEntryRoutePublishTargets[] | cdktf.IResolvable

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
  public get(index: number): VpcRouteEntryRoutePublishTargetsOutputReference {
    return new VpcRouteEntryRoutePublishTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcRouteEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#create VpcRouteEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#delete VpcRouteEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#update VpcRouteEntry#update}
  */
  readonly update?: string;
}

export function vpcRouteEntryTimeoutsToTerraform(struct?: VpcRouteEntryTimeouts | cdktf.IResolvable): any {
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


export function vpcRouteEntryTimeoutsToHclTerraform(struct?: VpcRouteEntryTimeouts | cdktf.IResolvable): any {
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

export class VpcRouteEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcRouteEntryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcRouteEntryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry alicloud_vpc_route_entry}
*/
export class VpcRouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRouteEntry to import
  * @param importFromId The id of the existing VpcRouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_route_entry alicloud_vpc_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_route_entry',
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
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._id = config.id;
    this._nexthopId = config.nexthopId;
    this._nexthopType = config.nexthopType;
    this._routeEntryName = config.routeEntryName;
    this._routeTableId = config.routeTableId;
    this._nextHops.internalValue = config.nextHops;
    this._routePublishTargets.internalValue = config.routePublishTargets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
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

  // nexthop_id - computed: true, optional: true, required: false
  private _nexthopId?: string; 
  public get nexthopId() {
    return this.getStringAttribute('nexthop_id');
  }
  public set nexthopId(value: string) {
    this._nexthopId = value;
  }
  public resetNexthopId() {
    this._nexthopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIdInput() {
    return this._nexthopId;
  }

  // nexthop_type - computed: true, optional: true, required: false
  private _nexthopType?: string; 
  public get nexthopType() {
    return this.getStringAttribute('nexthop_type');
  }
  public set nexthopType(value: string) {
    this._nexthopType = value;
  }
  public resetNexthopType() {
    this._nexthopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTypeInput() {
    return this._nexthopType;
  }

  // route_entry_name - computed: true, optional: true, required: false
  private _routeEntryName?: string; 
  public get routeEntryName() {
    return this.getStringAttribute('route_entry_name');
  }
  public set routeEntryName(value: string) {
    this._routeEntryName = value;
  }
  public resetRouteEntryName() {
    this._routeEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeEntryNameInput() {
    return this._routeEntryName;
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new VpcRouteEntryNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: VpcRouteEntryNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  public resetNextHops() {
    this._nextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
  }

  // route_publish_targets - computed: false, optional: true, required: false
  private _routePublishTargets = new VpcRouteEntryRoutePublishTargetsList(this, "route_publish_targets", false);
  public get routePublishTargets() {
    return this._routePublishTargets;
  }
  public putRoutePublishTargets(value: VpcRouteEntryRoutePublishTargets[] | cdktf.IResolvable) {
    this._routePublishTargets.internalValue = value;
  }
  public resetRoutePublishTargets() {
    this._routePublishTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePublishTargetsInput() {
    return this._routePublishTargets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcRouteEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcRouteEntryTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      nexthop_id: cdktf.stringToTerraform(this._nexthopId),
      nexthop_type: cdktf.stringToTerraform(this._nexthopType),
      route_entry_name: cdktf.stringToTerraform(this._routeEntryName),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      next_hops: cdktf.listMapper(vpcRouteEntryNextHopsToTerraform, true)(this._nextHops.internalValue),
      route_publish_targets: cdktf.listMapper(vpcRouteEntryRoutePublishTargetsToTerraform, true)(this._routePublishTargets.internalValue),
      timeouts: vpcRouteEntryTimeoutsToTerraform(this._timeouts.internalValue),
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
      destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._destinationCidrBlock),
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
      nexthop_id: {
        value: cdktf.stringToHclTerraform(this._nexthopId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_type: {
        value: cdktf.stringToHclTerraform(this._nexthopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_entry_name: {
        value: cdktf.stringToHclTerraform(this._routeEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hops: {
        value: cdktf.listMapperHcl(vpcRouteEntryNextHopsToHclTerraform, true)(this._nextHops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcRouteEntryNextHopsList",
      },
      route_publish_targets: {
        value: cdktf.listMapperHcl(vpcRouteEntryRoutePublishTargetsToHclTerraform, true)(this._routePublishTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcRouteEntryRoutePublishTargetsList",
      },
      timeouts: {
        value: vpcRouteEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcRouteEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
