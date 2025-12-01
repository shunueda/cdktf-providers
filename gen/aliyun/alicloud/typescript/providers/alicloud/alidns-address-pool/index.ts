// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlidnsAddressPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#address_pool_name AlidnsAddressPool#address_pool_name}
  */
  readonly addressPoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#id AlidnsAddressPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#instance_id AlidnsAddressPool#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#lba_strategy AlidnsAddressPool#lba_strategy}
  */
  readonly lbaStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#type AlidnsAddressPool#type}
  */
  readonly type: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#address AlidnsAddressPool#address}
  */
  readonly address: AlidnsAddressPoolAddress[] | cdktf.IResolvable;
}
export interface AlidnsAddressPoolAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#address AlidnsAddressPool#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#attribute_info AlidnsAddressPool#attribute_info}
  */
  readonly attributeInfo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#lba_weight AlidnsAddressPool#lba_weight}
  */
  readonly lbaWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#mode AlidnsAddressPool#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#remark AlidnsAddressPool#remark}
  */
  readonly remark?: string;
}

export function alidnsAddressPoolAddressToTerraform(struct?: AlidnsAddressPoolAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    attribute_info: cdktf.stringToTerraform(struct!.attributeInfo),
    lba_weight: cdktf.numberToTerraform(struct!.lbaWeight),
    mode: cdktf.stringToTerraform(struct!.mode),
    remark: cdktf.stringToTerraform(struct!.remark),
  }
}


export function alidnsAddressPoolAddressToHclTerraform(struct?: AlidnsAddressPoolAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_info: {
      value: cdktf.stringToHclTerraform(struct!.attributeInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lba_weight: {
      value: cdktf.numberToHclTerraform(struct!.lbaWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsAddressPoolAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsAddressPoolAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._attributeInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeInfo = this._attributeInfo;
    }
    if (this._lbaWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbaWeight = this._lbaWeight;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsAddressPoolAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._attributeInfo = undefined;
      this._lbaWeight = undefined;
      this._mode = undefined;
      this._remark = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._attributeInfo = value.attributeInfo;
      this._lbaWeight = value.lbaWeight;
      this._mode = value.mode;
      this._remark = value.remark;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // attribute_info - computed: false, optional: false, required: true
  private _attributeInfo?: string; 
  public get attributeInfo() {
    return this.getStringAttribute('attribute_info');
  }
  public set attributeInfo(value: string) {
    this._attributeInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInfoInput() {
    return this._attributeInfo;
  }

  // lba_weight - computed: false, optional: true, required: false
  private _lbaWeight?: number; 
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }
  public set lbaWeight(value: number) {
    this._lbaWeight = value;
  }
  public resetLbaWeight() {
    this._lbaWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaWeightInput() {
    return this._lbaWeight;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }
}

export class AlidnsAddressPoolAddressList extends cdktf.ComplexList {
  public internalValue? : AlidnsAddressPoolAddress[] | cdktf.IResolvable

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
  public get(index: number): AlidnsAddressPoolAddressOutputReference {
    return new AlidnsAddressPoolAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool alicloud_alidns_address_pool}
*/
export class AlidnsAddressPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_address_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlidnsAddressPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlidnsAddressPool to import
  * @param importFromId The id of the existing AlidnsAddressPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlidnsAddressPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_address_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_address_pool alicloud_alidns_address_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlidnsAddressPoolConfig
  */
  public constructor(scope: Construct, id: string, config: AlidnsAddressPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_address_pool',
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
    this._addressPoolName = config.addressPoolName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._lbaStrategy = config.lbaStrategy;
    this._type = config.type;
    this._address.internalValue = config.address;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_pool_name - computed: false, optional: false, required: true
  private _addressPoolName?: string; 
  public get addressPoolName() {
    return this.getStringAttribute('address_pool_name');
  }
  public set addressPoolName(value: string) {
    this._addressPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolNameInput() {
    return this._addressPoolName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // lba_strategy - computed: false, optional: false, required: true
  private _lbaStrategy?: string; 
  public get lbaStrategy() {
    return this.getStringAttribute('lba_strategy');
  }
  public set lbaStrategy(value: string) {
    this._lbaStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaStrategyInput() {
    return this._lbaStrategy;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // address - computed: false, optional: false, required: true
  private _address = new AlidnsAddressPoolAddressList(this, "address", true);
  public get address() {
    return this._address;
  }
  public putAddress(value: AlidnsAddressPoolAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_pool_name: cdktf.stringToTerraform(this._addressPoolName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lba_strategy: cdktf.stringToTerraform(this._lbaStrategy),
      type: cdktf.stringToTerraform(this._type),
      address: cdktf.listMapper(alidnsAddressPoolAddressToTerraform, true)(this._address.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_pool_name: {
        value: cdktf.stringToHclTerraform(this._addressPoolName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lba_strategy: {
        value: cdktf.stringToHclTerraform(this._lbaStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.listMapperHcl(alidnsAddressPoolAddressToHclTerraform, true)(this._address.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsAddressPoolAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
