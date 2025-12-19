// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'adc': Application type ADC; 'cgnv6': Application type CGNv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#application_type Partition#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#id Partition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify unique Partition id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#id1 Partition#id1}
  */
  readonly id1?: number;
  /**
  * Object partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#partition_name Partition#partition_name}
  */
  readonly partitionName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#user_tag Partition#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#uuid Partition#uuid}
  */
  readonly uuid?: string;
  /**
  * shared_vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#shared_vlan Partition#shared_vlan}
  */
  readonly sharedVlan?: PartitionSharedVlan;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#template Partition#template}
  */
  readonly template?: PartitionTemplate;
}
export interface PartitionSharedVlanAllowableIpRange {
}

export function partitionSharedVlanAllowableIpRangeToTerraform(struct?: PartitionSharedVlanAllowableIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function partitionSharedVlanAllowableIpRangeToHclTerraform(struct?: PartitionSharedVlanAllowableIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PartitionSharedVlanAllowableIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PartitionSharedVlanAllowableIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionSharedVlanAllowableIpRange | cdktf.IResolvable | undefined) {
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

export class PartitionSharedVlanAllowableIpRangeList extends cdktf.ComplexList {
  public internalValue? : PartitionSharedVlanAllowableIpRange[] | cdktf.IResolvable

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
  public get(index: number): PartitionSharedVlanAllowableIpRangeOutputReference {
    return new PartitionSharedVlanAllowableIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PartitionSharedVlanAllowableIpv6Range {
}

export function partitionSharedVlanAllowableIpv6RangeToTerraform(struct?: PartitionSharedVlanAllowableIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function partitionSharedVlanAllowableIpv6RangeToHclTerraform(struct?: PartitionSharedVlanAllowableIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PartitionSharedVlanAllowableIpv6RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PartitionSharedVlanAllowableIpv6Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionSharedVlanAllowableIpv6Range | cdktf.IResolvable | undefined) {
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

export class PartitionSharedVlanAllowableIpv6RangeList extends cdktf.ComplexList {
  public internalValue? : PartitionSharedVlanAllowableIpv6Range[] | cdktf.IResolvable

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
  public get(index: number): PartitionSharedVlanAllowableIpv6RangeOutputReference {
    return new PartitionSharedVlanAllowableIpv6RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PartitionSharedVlan {
  /**
  * IPv4 Address for Shared VLAN Mgmt IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#mgmt_floating_ip_address Partition#mgmt_floating_ip_address}
  */
  readonly mgmtFloatingIpAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#uuid Partition#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#vlan Partition#vlan}
  */
  readonly vlan?: number;
  /**
  * Specify VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#vrid Partition#vrid}
  */
  readonly vrid?: number;
  /**
  * allowable_ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#allowable_ip_range Partition#allowable_ip_range}
  */
  readonly allowableIpRange?: PartitionSharedVlanAllowableIpRange[] | cdktf.IResolvable;
  /**
  * allowable_ipv6_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#allowable_ipv6_range Partition#allowable_ipv6_range}
  */
  readonly allowableIpv6Range?: PartitionSharedVlanAllowableIpv6Range[] | cdktf.IResolvable;
}

export function partitionSharedVlanToTerraform(struct?: PartitionSharedVlanOutputReference | PartitionSharedVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mgmt_floating_ip_address: cdktf.stringToTerraform(struct!.mgmtFloatingIpAddress),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    allowable_ip_range: cdktf.listMapper(partitionSharedVlanAllowableIpRangeToTerraform, true)(struct!.allowableIpRange),
    allowable_ipv6_range: cdktf.listMapper(partitionSharedVlanAllowableIpv6RangeToTerraform, true)(struct!.allowableIpv6Range),
  }
}


export function partitionSharedVlanToHclTerraform(struct?: PartitionSharedVlanOutputReference | PartitionSharedVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mgmt_floating_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.mgmtFloatingIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowable_ip_range: {
      value: cdktf.listMapperHcl(partitionSharedVlanAllowableIpRangeToHclTerraform, true)(struct!.allowableIpRange),
      isBlock: true,
      type: "list",
      storageClassType: "PartitionSharedVlanAllowableIpRangeList",
    },
    allowable_ipv6_range: {
      value: cdktf.listMapperHcl(partitionSharedVlanAllowableIpv6RangeToHclTerraform, true)(struct!.allowableIpv6Range),
      isBlock: true,
      type: "list",
      storageClassType: "PartitionSharedVlanAllowableIpv6RangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PartitionSharedVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PartitionSharedVlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mgmtFloatingIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtFloatingIpAddress = this._mgmtFloatingIpAddress;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._allowableIpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowableIpRange = this._allowableIpRange?.internalValue;
    }
    if (this._allowableIpv6Range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowableIpv6Range = this._allowableIpv6Range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionSharedVlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mgmtFloatingIpAddress = undefined;
      this._uuid = undefined;
      this._vlan = undefined;
      this._vrid = undefined;
      this._allowableIpRange.internalValue = undefined;
      this._allowableIpv6Range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mgmtFloatingIpAddress = value.mgmtFloatingIpAddress;
      this._uuid = value.uuid;
      this._vlan = value.vlan;
      this._vrid = value.vrid;
      this._allowableIpRange.internalValue = value.allowableIpRange;
      this._allowableIpv6Range.internalValue = value.allowableIpv6Range;
    }
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
  private _allowableIpRange = new PartitionSharedVlanAllowableIpRangeList(this, "allowable_ip_range", false);
  public get allowableIpRange() {
    return this._allowableIpRange;
  }
  public putAllowableIpRange(value: PartitionSharedVlanAllowableIpRange[] | cdktf.IResolvable) {
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
  private _allowableIpv6Range = new PartitionSharedVlanAllowableIpv6RangeList(this, "allowable_ipv6_range", false);
  public get allowableIpv6Range() {
    return this._allowableIpv6Range;
  }
  public putAllowableIpv6Range(value: PartitionSharedVlanAllowableIpv6Range[] | cdktf.IResolvable) {
    this._allowableIpv6Range.internalValue = value;
  }
  public resetAllowableIpv6Range() {
    this._allowableIpv6Range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowableIpv6RangeInput() {
    return this._allowableIpv6Range.internalValue;
  }
}
export interface PartitionTemplate {
  /**
  * Attach a resource accounting template (Name of the template)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#resource_accounting Partition#resource_accounting}
  */
  readonly resourceAccounting?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#uuid Partition#uuid}
  */
  readonly uuid?: string;
}

export function partitionTemplateToTerraform(struct?: PartitionTemplateOutputReference | PartitionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_accounting: cdktf.stringToTerraform(struct!.resourceAccounting),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function partitionTemplateToHclTerraform(struct?: PartitionTemplateOutputReference | PartitionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_accounting: {
      value: cdktf.stringToHclTerraform(struct!.resourceAccounting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PartitionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PartitionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceAccounting !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAccounting = this._resourceAccounting;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartitionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceAccounting = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceAccounting = value.resourceAccounting;
      this._uuid = value.uuid;
    }
  }

  // resource_accounting - computed: false, optional: true, required: false
  private _resourceAccounting?: string; 
  public get resourceAccounting() {
    return this.getStringAttribute('resource_accounting');
  }
  public set resourceAccounting(value: string) {
    this._resourceAccounting = value;
  }
  public resetResourceAccounting() {
    this._resourceAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccountingInput() {
    return this._resourceAccounting;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition thunder_partition}
*/
export class Partition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Partition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Partition to import
  * @param importFromId The id of the existing Partition that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Partition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition thunder_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_partition',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationType = config.applicationType;
    this._id = config.id;
    this._id1 = config.id1;
    this._partitionName = config.partitionName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._sharedVlan.internalValue = config.sharedVlan;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
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

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // shared_vlan - computed: false, optional: true, required: false
  private _sharedVlan = new PartitionSharedVlanOutputReference(this, "shared_vlan");
  public get sharedVlan() {
    return this._sharedVlan;
  }
  public putSharedVlan(value: PartitionSharedVlan) {
    this._sharedVlan.internalValue = value;
  }
  public resetSharedVlan() {
    this._sharedVlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVlanInput() {
    return this._sharedVlan.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new PartitionTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: PartitionTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktf.stringToTerraform(this._applicationType),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      partition_name: cdktf.stringToTerraform(this._partitionName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      shared_vlan: partitionSharedVlanToTerraform(this._sharedVlan.internalValue),
      template: partitionTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      shared_vlan: {
        value: partitionSharedVlanToHclTerraform(this._sharedVlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PartitionSharedVlanList",
      },
      template: {
        value: partitionTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PartitionTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
