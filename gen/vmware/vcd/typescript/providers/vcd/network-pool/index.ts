// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines how backing components are accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#backing_selection_constraint NetworkPool#backing_selection_constraint}
  */
  readonly backingSelectionConstraint?: string;
  /**
  * Description of the network pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#description NetworkPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#id NetworkPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of network pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#name NetworkPool#name}
  */
  readonly name: string;
  /**
  * Id of the network provider (either vCenter or NSX-T manager)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#network_provider_id NetworkPool#network_provider_id}
  */
  readonly networkProviderId: string;
  /**
  * Type of the network pool (one of `GENEVE`, `VLAN`, `PORTGROUP_BACKED`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#type NetworkPool#type}
  */
  readonly type: string;
  /**
  * backing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#backing NetworkPool#backing}
  */
  readonly backing?: NetworkPoolBacking;
}
export interface NetworkPoolBackingDistributedSwitch {
  /**
  * Backing name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#name NetworkPool#name}
  */
  readonly name?: string;
}

export function networkPoolBackingDistributedSwitchToTerraform(struct?: NetworkPoolBackingDistributedSwitchOutputReference | NetworkPoolBackingDistributedSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPoolBackingDistributedSwitchToHclTerraform(struct?: NetworkPoolBackingDistributedSwitchOutputReference | NetworkPoolBackingDistributedSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPoolBackingDistributedSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPoolBackingDistributedSwitch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPoolBackingDistributedSwitch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface NetworkPoolBackingPortGroup {
  /**
  * Backing name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#name NetworkPool#name}
  */
  readonly name?: string;
}

export function networkPoolBackingPortGroupToTerraform(struct?: NetworkPoolBackingPortGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPoolBackingPortGroupToHclTerraform(struct?: NetworkPoolBackingPortGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPoolBackingPortGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPoolBackingPortGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPoolBackingPortGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NetworkPoolBackingPortGroupList extends cdktf.ComplexList {
  public internalValue? : NetworkPoolBackingPortGroup[] | cdktf.IResolvable

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
  public get(index: number): NetworkPoolBackingPortGroupOutputReference {
    return new NetworkPoolBackingPortGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPoolBackingRangeId {
  /**
  * End of the IDs range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#end_id NetworkPool#end_id}
  */
  readonly endId: number;
  /**
  * Start of the IDs range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#start_id NetworkPool#start_id}
  */
  readonly startId: number;
}

export function networkPoolBackingRangeIdToTerraform(struct?: NetworkPoolBackingRangeId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_id: cdktf.numberToTerraform(struct!.endId),
    start_id: cdktf.numberToTerraform(struct!.startId),
  }
}


export function networkPoolBackingRangeIdToHclTerraform(struct?: NetworkPoolBackingRangeId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_id: {
      value: cdktf.numberToHclTerraform(struct!.endId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_id: {
      value: cdktf.numberToHclTerraform(struct!.startId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPoolBackingRangeIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPoolBackingRangeId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endId = this._endId;
    }
    if (this._startId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startId = this._startId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPoolBackingRangeId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endId = undefined;
      this._startId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endId = value.endId;
      this._startId = value.startId;
    }
  }

  // end_id - computed: false, optional: false, required: true
  private _endId?: number; 
  public get endId() {
    return this.getNumberAttribute('end_id');
  }
  public set endId(value: number) {
    this._endId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIdInput() {
    return this._endId;
  }

  // start_id - computed: false, optional: false, required: true
  private _startId?: number; 
  public get startId() {
    return this.getNumberAttribute('start_id');
  }
  public set startId(value: number) {
    this._startId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIdInput() {
    return this._startId;
  }
}

export class NetworkPoolBackingRangeIdList extends cdktf.ComplexList {
  public internalValue? : NetworkPoolBackingRangeId[] | cdktf.IResolvable

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
  public get(index: number): NetworkPoolBackingRangeIdOutputReference {
    return new NetworkPoolBackingRangeIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPoolBackingTransportZone {
  /**
  * Backing name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#name NetworkPool#name}
  */
  readonly name?: string;
}

export function networkPoolBackingTransportZoneToTerraform(struct?: NetworkPoolBackingTransportZoneOutputReference | NetworkPoolBackingTransportZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPoolBackingTransportZoneToHclTerraform(struct?: NetworkPoolBackingTransportZoneOutputReference | NetworkPoolBackingTransportZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPoolBackingTransportZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPoolBackingTransportZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPoolBackingTransportZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface NetworkPoolBacking {
  /**
  * distributed_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#distributed_switch NetworkPool#distributed_switch}
  */
  readonly distributedSwitch?: NetworkPoolBackingDistributedSwitch;
  /**
  * port_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#port_group NetworkPool#port_group}
  */
  readonly portGroup?: NetworkPoolBackingPortGroup[] | cdktf.IResolvable;
  /**
  * range_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#range_id NetworkPool#range_id}
  */
  readonly rangeId?: NetworkPoolBackingRangeId[] | cdktf.IResolvable;
  /**
  * transport_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#transport_zone NetworkPool#transport_zone}
  */
  readonly transportZone?: NetworkPoolBackingTransportZone;
}

export function networkPoolBackingToTerraform(struct?: NetworkPoolBackingOutputReference | NetworkPoolBacking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distributed_switch: networkPoolBackingDistributedSwitchToTerraform(struct!.distributedSwitch),
    port_group: cdktf.listMapper(networkPoolBackingPortGroupToTerraform, true)(struct!.portGroup),
    range_id: cdktf.listMapper(networkPoolBackingRangeIdToTerraform, true)(struct!.rangeId),
    transport_zone: networkPoolBackingTransportZoneToTerraform(struct!.transportZone),
  }
}


export function networkPoolBackingToHclTerraform(struct?: NetworkPoolBackingOutputReference | NetworkPoolBacking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distributed_switch: {
      value: networkPoolBackingDistributedSwitchToHclTerraform(struct!.distributedSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPoolBackingDistributedSwitchList",
    },
    port_group: {
      value: cdktf.listMapperHcl(networkPoolBackingPortGroupToHclTerraform, true)(struct!.portGroup),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkPoolBackingPortGroupList",
    },
    range_id: {
      value: cdktf.listMapperHcl(networkPoolBackingRangeIdToHclTerraform, true)(struct!.rangeId),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPoolBackingRangeIdList",
    },
    transport_zone: {
      value: networkPoolBackingTransportZoneToHclTerraform(struct!.transportZone),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPoolBackingTransportZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPoolBackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPoolBacking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributedSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedSwitch = this._distributedSwitch?.internalValue;
    }
    if (this._portGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portGroup = this._portGroup?.internalValue;
    }
    if (this._rangeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeId = this._rangeId?.internalValue;
    }
    if (this._transportZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZone = this._transportZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPoolBacking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributedSwitch.internalValue = undefined;
      this._portGroup.internalValue = undefined;
      this._rangeId.internalValue = undefined;
      this._transportZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributedSwitch.internalValue = value.distributedSwitch;
      this._portGroup.internalValue = value.portGroup;
      this._rangeId.internalValue = value.rangeId;
      this._transportZone.internalValue = value.transportZone;
    }
  }

  // distributed_switch - computed: false, optional: true, required: false
  private _distributedSwitch = new NetworkPoolBackingDistributedSwitchOutputReference(this, "distributed_switch");
  public get distributedSwitch() {
    return this._distributedSwitch;
  }
  public putDistributedSwitch(value: NetworkPoolBackingDistributedSwitch) {
    this._distributedSwitch.internalValue = value;
  }
  public resetDistributedSwitch() {
    this._distributedSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedSwitchInput() {
    return this._distributedSwitch.internalValue;
  }

  // port_group - computed: false, optional: true, required: false
  private _portGroup = new NetworkPoolBackingPortGroupList(this, "port_group", true);
  public get portGroup() {
    return this._portGroup;
  }
  public putPortGroup(value: NetworkPoolBackingPortGroup[] | cdktf.IResolvable) {
    this._portGroup.internalValue = value;
  }
  public resetPortGroup() {
    this._portGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portGroupInput() {
    return this._portGroup.internalValue;
  }

  // range_id - computed: false, optional: true, required: false
  private _rangeId = new NetworkPoolBackingRangeIdList(this, "range_id", false);
  public get rangeId() {
    return this._rangeId;
  }
  public putRangeId(value: NetworkPoolBackingRangeId[] | cdktf.IResolvable) {
    this._rangeId.internalValue = value;
  }
  public resetRangeId() {
    this._rangeId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeIdInput() {
    return this._rangeId.internalValue;
  }

  // transport_zone - computed: false, optional: true, required: false
  private _transportZone = new NetworkPoolBackingTransportZoneOutputReference(this, "transport_zone");
  public get transportZone() {
    return this._transportZone;
  }
  public putTransportZone(value: NetworkPoolBackingTransportZone) {
    this._transportZone.internalValue = value;
  }
  public resetTransportZone() {
    this._transportZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneInput() {
    return this._transportZone.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool vcd_network_pool}
*/
export class NetworkPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_network_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPool to import
  * @param importFromId The id of the existing NetworkPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_network_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_pool vcd_network_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPoolConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_network_pool',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backingSelectionConstraint = config.backingSelectionConstraint;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._networkProviderId = config.networkProviderId;
    this._type = config.type;
    this._backing.internalValue = config.backing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backing_selection_constraint - computed: false, optional: true, required: false
  private _backingSelectionConstraint?: string; 
  public get backingSelectionConstraint() {
    return this.getStringAttribute('backing_selection_constraint');
  }
  public set backingSelectionConstraint(value: string) {
    this._backingSelectionConstraint = value;
  }
  public resetBackingSelectionConstraint() {
    this._backingSelectionConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingSelectionConstraintInput() {
    return this._backingSelectionConstraint;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_provider_id - computed: false, optional: false, required: true
  private _networkProviderId?: string; 
  public get networkProviderId() {
    return this.getStringAttribute('network_provider_id');
  }
  public set networkProviderId(value: string) {
    this._networkProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProviderIdInput() {
    return this._networkProviderId;
  }

  // network_provider_name - computed: true, optional: false, required: false
  public get networkProviderName() {
    return this.getStringAttribute('network_provider_name');
  }

  // network_provider_type - computed: true, optional: false, required: false
  public get networkProviderType() {
    return this.getStringAttribute('network_provider_type');
  }

  // promiscuous_mode - computed: true, optional: false, required: false
  public get promiscuousMode() {
    return this.getBooleanAttribute('promiscuous_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_backings_count - computed: true, optional: false, required: false
  public get totalBackingsCount() {
    return this.getNumberAttribute('total_backings_count');
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

  // used_backings_count - computed: true, optional: false, required: false
  public get usedBackingsCount() {
    return this.getNumberAttribute('used_backings_count');
  }

  // backing - computed: false, optional: true, required: false
  private _backing = new NetworkPoolBackingOutputReference(this, "backing");
  public get backing() {
    return this._backing;
  }
  public putBacking(value: NetworkPoolBacking) {
    this._backing.internalValue = value;
  }
  public resetBacking() {
    this._backing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInput() {
    return this._backing.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backing_selection_constraint: cdktf.stringToTerraform(this._backingSelectionConstraint),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_provider_id: cdktf.stringToTerraform(this._networkProviderId),
      type: cdktf.stringToTerraform(this._type),
      backing: networkPoolBackingToTerraform(this._backing.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backing_selection_constraint: {
        value: cdktf.stringToHclTerraform(this._backingSelectionConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_provider_id: {
        value: cdktf.stringToHclTerraform(this._networkProviderId),
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
      backing: {
        value: networkPoolBackingToHclTerraform(this._backing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPoolBackingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
