// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionSharedVlanAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#id PartitionSharedVlanA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 Address for Shared VLAN Mgmt IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#mgmt_floating_ip_address PartitionSharedVlanA#mgmt_floating_ip_address}
  */
  readonly mgmtFloatingIpAddress?: string;
  /**
  * PartitionName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#partition_name PartitionSharedVlanA#partition_name}
  */
  readonly partitionName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#uuid PartitionSharedVlanA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#vlan PartitionSharedVlanA#vlan}
  */
  readonly vlan?: number;
  /**
  * Specify VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#vrid PartitionSharedVlanA#vrid}
  */
  readonly vrid?: number;
  /**
  * allowable_ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#allowable_ip_range PartitionSharedVlanA#allowable_ip_range}
  */
  readonly allowableIpRange?: PartitionSharedVlanAllowableIpRangeA[] | cdktf.IResolvable;
  /**
  * allowable_ipv6_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#allowable_ipv6_range PartitionSharedVlanA#allowable_ipv6_range}
  */
  readonly allowableIpv6Range?: PartitionSharedVlanAllowableIpv6RangeA[] | cdktf.IResolvable;
}
export interface PartitionSharedVlanAllowableIpRangeA {
}

export function partitionSharedVlanAllowableIpRangeAToTerraform(struct?: PartitionSharedVlanAllowableIpRangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function partitionSharedVlanAllowableIpRangeAToHclTerraform(struct?: PartitionSharedVlanAllowableIpRangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PartitionSharedVlanAllowableIpRangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PartitionSharedVlanAllowableIpRangeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionSharedVlanAllowableIpRangeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PartitionSharedVlanAllowableIpRangeAList extends cdktf.ComplexList {
  public internalValue? : PartitionSharedVlanAllowableIpRangeA[] | cdktf.IResolvable

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
  public get(index: number): PartitionSharedVlanAllowableIpRangeAOutputReference {
    return new PartitionSharedVlanAllowableIpRangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PartitionSharedVlanAllowableIpv6RangeA {
}

export function partitionSharedVlanAllowableIpv6RangeAToTerraform(struct?: PartitionSharedVlanAllowableIpv6RangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function partitionSharedVlanAllowableIpv6RangeAToHclTerraform(struct?: PartitionSharedVlanAllowableIpv6RangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PartitionSharedVlanAllowableIpv6RangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PartitionSharedVlanAllowableIpv6RangeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionSharedVlanAllowableIpv6RangeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PartitionSharedVlanAllowableIpv6RangeAList extends cdktf.ComplexList {
  public internalValue? : PartitionSharedVlanAllowableIpv6RangeA[] | cdktf.IResolvable

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
  public get(index: number): PartitionSharedVlanAllowableIpv6RangeAOutputReference {
    return new PartitionSharedVlanAllowableIpv6RangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan thunder_partition_shared_vlan}
*/
export class PartitionSharedVlanA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_partition_shared_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PartitionSharedVlanA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PartitionSharedVlanA to import
  * @param importFromId The id of the existing PartitionSharedVlanA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PartitionSharedVlanA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_partition_shared_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/partition_shared_vlan thunder_partition_shared_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionSharedVlanAConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionSharedVlanAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_partition_shared_vlan',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._mgmtFloatingIpAddress = config.mgmtFloatingIpAddress;
    this._partitionName = config.partitionName;
    this._uuid = config.uuid;
    this._vlan = config.vlan;
    this._vrid = config.vrid;
    this._allowableIpRange.internalValue = config.allowableIpRange;
    this._allowableIpv6Range.internalValue = config.allowableIpv6Range;
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

  // mgmt_floating_ip_address - computed: false, optional: true, required: false
  private _mgmtFloatingIpAddress?: string; 
  public get mgmtFloatingIpAddress() {
    return this.getStringAttribute('mgmt_floating_ip_address');
  }
  public set mgmtFloatingIpAddress(value: string) {
    this._mgmtFloatingIpAddress = value;
  }
  public resetMgmtFloatingIpAddress() {
    this._mgmtFloatingIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtFloatingIpAddressInput() {
    return this._mgmtFloatingIpAddress;
  }

  // partition_name - computed: false, optional: false, required: true
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // allowable_ip_range - computed: false, optional: true, required: false
  private _allowableIpRange = new PartitionSharedVlanAllowableIpRangeAList(this, "allowable_ip_range", false);
  public get allowableIpRange() {
    return this._allowableIpRange;
  }
  public putAllowableIpRange(value: PartitionSharedVlanAllowableIpRangeA[] | cdktf.IResolvable) {
    this._allowableIpRange.internalValue = value;
  }
  public resetAllowableIpRange() {
    this._allowableIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowableIpRangeInput() {
    return this._allowableIpRange.internalValue;
  }

  // allowable_ipv6_range - computed: false, optional: true, required: false
  private _allowableIpv6Range = new PartitionSharedVlanAllowableIpv6RangeAList(this, "allowable_ipv6_range", false);
  public get allowableIpv6Range() {
    return this._allowableIpv6Range;
  }
  public putAllowableIpv6Range(value: PartitionSharedVlanAllowableIpv6RangeA[] | cdktf.IResolvable) {
    this._allowableIpv6Range.internalValue = value;
  }
  public resetAllowableIpv6Range() {
    this._allowableIpv6Range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowableIpv6RangeInput() {
    return this._allowableIpv6Range.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mgmt_floating_ip_address: cdktf.stringToTerraform(this._mgmtFloatingIpAddress),
      partition_name: cdktf.stringToTerraform(this._partitionName),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan: cdktf.numberToTerraform(this._vlan),
      vrid: cdktf.numberToTerraform(this._vrid),
      allowable_ip_range: cdktf.listMapper(partitionSharedVlanAllowableIpRangeAToTerraform, true)(this._allowableIpRange.internalValue),
      allowable_ipv6_range: cdktf.listMapper(partitionSharedVlanAllowableIpv6RangeAToTerraform, true)(this._allowableIpv6Range.internalValue),
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
      mgmt_floating_ip_address: {
        value: cdktf.stringToHclTerraform(this._mgmtFloatingIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowable_ip_range: {
        value: cdktf.listMapperHcl(partitionSharedVlanAllowableIpRangeAToHclTerraform, true)(this._allowableIpRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PartitionSharedVlanAllowableIpRangeAList",
      },
      allowable_ipv6_range: {
        value: cdktf.listMapperHcl(partitionSharedVlanAllowableIpv6RangeAToHclTerraform, true)(this._allowableIpv6Range.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PartitionSharedVlanAllowableIpv6RangeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
