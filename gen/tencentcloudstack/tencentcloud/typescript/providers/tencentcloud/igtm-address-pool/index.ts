// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgtmAddressPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#id IgtmAddressPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#monitor_id IgtmAddressPool#monitor_id}
  */
  readonly monitorId?: number;
  /**
  * Address pool name, duplicates are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#pool_name IgtmAddressPool#pool_name}
  */
  readonly poolName: string;
  /**
  * Traffic strategy: WEIGHT for load balancing, ALL for resolving all healthy addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#traffic_strategy IgtmAddressPool#traffic_strategy}
  */
  readonly trafficStrategy: string;
  /**
  * address_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#address_set IgtmAddressPool#address_set}
  */
  readonly addressSet: IgtmAddressPoolAddressSet[] | cdktf.IResolvable;
}
export interface IgtmAddressPoolAddressSet {
  /**
  * Address value: only supports IPv4, IPv6, and domain name formats.
  * Loopback addresses, reserved addresses, internal addresses, and Tencent reserved network segments are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#addr IgtmAddressPool#addr}
  */
  readonly addr: string;
  /**
  * Whether to enable: DISABLED for disabled, ENABLED for enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#is_enable IgtmAddressPool#is_enable}
  */
  readonly isEnable: string;
  /**
  * Address name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#location IgtmAddressPool#location}
  */
  readonly location?: string;
  /**
  * Weight, required when traffic strategy is WEIGHT; range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#weight IgtmAddressPool#weight}
  */
  readonly weight?: number;
}

export function igtmAddressPoolAddressSetToTerraform(struct?: IgtmAddressPoolAddressSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    is_enable: cdktf.stringToTerraform(struct!.isEnable),
    location: cdktf.stringToTerraform(struct!.location),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function igtmAddressPoolAddressSetToHclTerraform(struct?: IgtmAddressPoolAddressSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enable: {
      value: cdktf.stringToHclTerraform(struct!.isEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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

export class IgtmAddressPoolAddressSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmAddressPoolAddressSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._isEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnable = this._isEnable;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmAddressPoolAddressSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._isEnable = undefined;
      this._location = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._isEnable = value.isEnable;
      this._location = value.location;
      this._weight = value.weight;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // address_id - computed: true, optional: false, required: false
  public get addressId() {
    return this.getNumberAttribute('address_id');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // is_enable - computed: false, optional: false, required: true
  private _isEnable?: string; 
  public get isEnable() {
    return this.getStringAttribute('is_enable');
  }
  public set isEnable(value: string) {
    this._isEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnableInput() {
    return this._isEnable;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
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

export class IgtmAddressPoolAddressSetList extends cdktf.ComplexList {
  public internalValue? : IgtmAddressPoolAddressSet[] | cdktf.IResolvable

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
  public get(index: number): IgtmAddressPoolAddressSetOutputReference {
    return new IgtmAddressPoolAddressSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool tencentcloud_igtm_address_pool}
*/
export class IgtmAddressPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_igtm_address_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgtmAddressPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgtmAddressPool to import
  * @param importFromId The id of the existing IgtmAddressPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgtmAddressPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_igtm_address_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_address_pool tencentcloud_igtm_address_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgtmAddressPoolConfig
  */
  public constructor(scope: Construct, id: string, config: IgtmAddressPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_igtm_address_pool',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._monitorId = config.monitorId;
    this._poolName = config.poolName;
    this._trafficStrategy = config.trafficStrategy;
    this._addressSet.internalValue = config.addressSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_id - computed: false, optional: true, required: false
  private _monitorId?: number; 
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }
  public set monitorId(value: number) {
    this._monitorId = value;
  }
  public resetMonitorId() {
    this._monitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getNumberAttribute('pool_id');
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // traffic_strategy - computed: false, optional: false, required: true
  private _trafficStrategy?: string; 
  public get trafficStrategy() {
    return this.getStringAttribute('traffic_strategy');
  }
  public set trafficStrategy(value: string) {
    this._trafficStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStrategyInput() {
    return this._trafficStrategy;
  }

  // address_set - computed: false, optional: false, required: true
  private _addressSet = new IgtmAddressPoolAddressSetList(this, "address_set", true);
  public get addressSet() {
    return this._addressSet;
  }
  public putAddressSet(value: IgtmAddressPoolAddressSet[] | cdktf.IResolvable) {
    this._addressSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetInput() {
    return this._addressSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.numberToTerraform(this._monitorId),
      pool_name: cdktf.stringToTerraform(this._poolName),
      traffic_strategy: cdktf.stringToTerraform(this._trafficStrategy),
      address_set: cdktf.listMapper(igtmAddressPoolAddressSetToTerraform, true)(this._addressSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_id: {
        value: cdktf.numberToHclTerraform(this._monitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_strategy: {
        value: cdktf.stringToHclTerraform(this._trafficStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_set: {
        value: cdktf.listMapperHcl(igtmAddressPoolAddressSetToHclTerraform, true)(this._addressSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgtmAddressPoolAddressSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
