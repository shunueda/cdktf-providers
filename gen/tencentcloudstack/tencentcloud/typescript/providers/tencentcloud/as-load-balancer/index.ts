// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#auto_scaling_group_id AsLoadBalancer#auto_scaling_group_id}
  */
  readonly autoScalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#id AsLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * forward_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#forward_load_balancers AsLoadBalancer#forward_load_balancers}
  */
  readonly forwardLoadBalancers?: AsLoadBalancerForwardLoadBalancers[] | cdktf.IResolvable;
}
export interface AsLoadBalancerForwardLoadBalancersTargetAttributes {
  /**
  * Target port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#port AsLoadBalancer#port}
  */
  readonly port: number;
  /**
  * Target weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#weight AsLoadBalancer#weight}
  */
  readonly weight: number;
}

export function asLoadBalancerForwardLoadBalancersTargetAttributesToTerraform(struct?: AsLoadBalancerForwardLoadBalancersTargetAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function asLoadBalancerForwardLoadBalancersTargetAttributesToHclTerraform(struct?: AsLoadBalancerForwardLoadBalancersTargetAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AsLoadBalancerForwardLoadBalancersTargetAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsLoadBalancerForwardLoadBalancersTargetAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsLoadBalancerForwardLoadBalancersTargetAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AsLoadBalancerForwardLoadBalancersTargetAttributesList extends cdktf.ComplexList {
  public internalValue? : AsLoadBalancerForwardLoadBalancersTargetAttributes[] | cdktf.IResolvable

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
  public get(index: number): AsLoadBalancerForwardLoadBalancersTargetAttributesOutputReference {
    return new AsLoadBalancerForwardLoadBalancersTargetAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsLoadBalancerForwardLoadBalancers {
  /**
  * Application load balancer listener ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#listener_id AsLoadBalancer#listener_id}
  */
  readonly listenerId: string;
  /**
  * Application load balancer instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#load_balancer_id AsLoadBalancer#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Application load balancer location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#location_id AsLoadBalancer#location_id}
  */
  readonly locationId?: string;
  /**
  * Load balancer instance region. Default value is the region of current auto scaling group. The format is the same as the public parameter Region, for example: ap-guangzhou.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#region AsLoadBalancer#region}
  */
  readonly region?: string;
  /**
  * target_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#target_attributes AsLoadBalancer#target_attributes}
  */
  readonly targetAttributes: AsLoadBalancerForwardLoadBalancersTargetAttributes[] | cdktf.IResolvable;
}

export function asLoadBalancerForwardLoadBalancersToTerraform(struct?: AsLoadBalancerForwardLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    region: cdktf.stringToTerraform(struct!.region),
    target_attributes: cdktf.listMapper(asLoadBalancerForwardLoadBalancersTargetAttributesToTerraform, true)(struct!.targetAttributes),
  }
}


export function asLoadBalancerForwardLoadBalancersToHclTerraform(struct?: AsLoadBalancerForwardLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_attributes: {
      value: cdktf.listMapperHcl(asLoadBalancerForwardLoadBalancersTargetAttributesToHclTerraform, true)(struct!.targetAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AsLoadBalancerForwardLoadBalancersTargetAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsLoadBalancerForwardLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsLoadBalancerForwardLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._targetAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAttributes = this._targetAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsLoadBalancerForwardLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._locationId = undefined;
      this._region = undefined;
      this._targetAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._locationId = value.locationId;
      this._region = value.region;
      this._targetAttributes.internalValue = value.targetAttributes;
    }
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // location_id - computed: false, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // target_attributes - computed: false, optional: false, required: true
  private _targetAttributes = new AsLoadBalancerForwardLoadBalancersTargetAttributesList(this, "target_attributes", false);
  public get targetAttributes() {
    return this._targetAttributes;
  }
  public putTargetAttributes(value: AsLoadBalancerForwardLoadBalancersTargetAttributes[] | cdktf.IResolvable) {
    this._targetAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributesInput() {
    return this._targetAttributes.internalValue;
  }
}

export class AsLoadBalancerForwardLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : AsLoadBalancerForwardLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): AsLoadBalancerForwardLoadBalancersOutputReference {
    return new AsLoadBalancerForwardLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer tencentcloud_as_load_balancer}
*/
export class AsLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsLoadBalancer to import
  * @param importFromId The id of the existing AsLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/as_load_balancer tencentcloud_as_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: AsLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingGroupId = config.autoScalingGroupId;
    this._id = config.id;
    this._forwardLoadBalancers.internalValue = config.forwardLoadBalancers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_id - computed: false, optional: false, required: true
  private _autoScalingGroupId?: string; 
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }
  public set autoScalingGroupId(value: string) {
    this._autoScalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdInput() {
    return this._autoScalingGroupId;
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

  // forward_load_balancers - computed: false, optional: true, required: false
  private _forwardLoadBalancers = new AsLoadBalancerForwardLoadBalancersList(this, "forward_load_balancers", false);
  public get forwardLoadBalancers() {
    return this._forwardLoadBalancers;
  }
  public putForwardLoadBalancers(value: AsLoadBalancerForwardLoadBalancers[] | cdktf.IResolvable) {
    this._forwardLoadBalancers.internalValue = value;
  }
  public resetForwardLoadBalancers() {
    this._forwardLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardLoadBalancersInput() {
    return this._forwardLoadBalancers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_id: cdktf.stringToTerraform(this._autoScalingGroupId),
      id: cdktf.stringToTerraform(this._id),
      forward_load_balancers: cdktf.listMapper(asLoadBalancerForwardLoadBalancersToTerraform, true)(this._forwardLoadBalancers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._autoScalingGroupId),
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
      forward_load_balancers: {
        value: cdktf.listMapperHcl(asLoadBalancerForwardLoadBalancersToHclTerraform, true)(this._forwardLoadBalancers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsLoadBalancerForwardLoadBalancersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
