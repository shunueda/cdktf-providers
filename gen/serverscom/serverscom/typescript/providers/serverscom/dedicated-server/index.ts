// https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#bandwidth DedicatedServer#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#hostname DedicatedServer#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#id DedicatedServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#ipv6 DedicatedServer#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#labels DedicatedServer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#location DedicatedServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#operating_system DedicatedServer#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#private_ipv4_address DedicatedServer#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#private_ipv4_network_id DedicatedServer#private_ipv4_network_id}
  */
  readonly privateIpv4NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#private_uplink DedicatedServer#private_uplink}
  */
  readonly privateUplink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#public_ipv4_address DedicatedServer#public_ipv4_address}
  */
  readonly publicIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#public_ipv4_network_id DedicatedServer#public_ipv4_network_id}
  */
  readonly publicIpv4NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#public_uplink DedicatedServer#public_uplink}
  */
  readonly publicUplink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#ram_size DedicatedServer#ram_size}
  */
  readonly ramSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#server_model DedicatedServer#server_model}
  */
  readonly serverModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#ssh_key_fingerprints DedicatedServer#ssh_key_fingerprints}
  */
  readonly sshKeyFingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#user_data DedicatedServer#user_data}
  */
  readonly userData?: string;
  /**
  * layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#layout DedicatedServer#layout}
  */
  readonly layout?: DedicatedServerLayout[] | cdktf.IResolvable;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#slot DedicatedServer#slot}
  */
  readonly slot?: DedicatedServerSlot[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#timeouts DedicatedServer#timeouts}
  */
  readonly timeouts?: DedicatedServerTimeouts;
}
export interface DedicatedServerLayoutPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#fill DedicatedServer#fill}
  */
  readonly fill?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#fs DedicatedServer#fs}
  */
  readonly fs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#size DedicatedServer#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#target DedicatedServer#target}
  */
  readonly target: string;
}

export function dedicatedServerLayoutPartitionToTerraform(struct?: DedicatedServerLayoutPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill: cdktf.booleanToTerraform(struct!.fill),
    fs: cdktf.stringToTerraform(struct!.fs),
    size: cdktf.numberToTerraform(struct!.size),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dedicatedServerLayoutPartitionToHclTerraform(struct?: DedicatedServerLayoutPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fill: {
      value: cdktf.booleanToHclTerraform(struct!.fill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs: {
      value: cdktf.stringToHclTerraform(struct!.fs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerLayoutPartitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerLayoutPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fill !== undefined) {
      hasAnyValues = true;
      internalValueResult.fill = this._fill;
    }
    if (this._fs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fs = this._fs;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerLayoutPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fill = undefined;
      this._fs = undefined;
      this._size = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fill = value.fill;
      this._fs = value.fs;
      this._size = value.size;
      this._target = value.target;
    }
  }

  // fill - computed: false, optional: true, required: false
  private _fill?: boolean | cdktf.IResolvable; 
  public get fill() {
    return this.getBooleanAttribute('fill');
  }
  public set fill(value: boolean | cdktf.IResolvable) {
    this._fill = value;
  }
  public resetFill() {
    this._fill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillInput() {
    return this._fill;
  }

  // fs - computed: false, optional: true, required: false
  private _fs?: string; 
  public get fs() {
    return this.getStringAttribute('fs');
  }
  public set fs(value: string) {
    this._fs = value;
  }
  public resetFs() {
    this._fs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInput() {
    return this._fs;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DedicatedServerLayoutPartitionList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerLayoutPartition[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerLayoutPartitionOutputReference {
    return new DedicatedServerLayoutPartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerLayout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#raid DedicatedServer#raid}
  */
  readonly raid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#slot_positions DedicatedServer#slot_positions}
  */
  readonly slotPositions: number[];
  /**
  * partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#partition DedicatedServer#partition}
  */
  readonly partition?: DedicatedServerLayoutPartition[] | cdktf.IResolvable;
}

export function dedicatedServerLayoutToTerraform(struct?: DedicatedServerLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raid: cdktf.numberToTerraform(struct!.raid),
    slot_positions: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.slotPositions),
    partition: cdktf.listMapper(dedicatedServerLayoutPartitionToTerraform, true)(struct!.partition),
  }
}


export function dedicatedServerLayoutToHclTerraform(struct?: DedicatedServerLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raid: {
      value: cdktf.numberToHclTerraform(struct!.raid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_positions: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.slotPositions),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    partition: {
      value: cdktf.listMapperHcl(dedicatedServerLayoutPartitionToHclTerraform, true)(struct!.partition),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerLayoutPartitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerLayoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raid !== undefined) {
      hasAnyValues = true;
      internalValueResult.raid = this._raid;
    }
    if (this._slotPositions !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotPositions = this._slotPositions;
    }
    if (this._partition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._raid = undefined;
      this._slotPositions = undefined;
      this._partition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._raid = value.raid;
      this._slotPositions = value.slotPositions;
      this._partition.internalValue = value.partition;
    }
  }

  // raid - computed: false, optional: true, required: false
  private _raid?: number; 
  public get raid() {
    return this.getNumberAttribute('raid');
  }
  public set raid(value: number) {
    this._raid = value;
  }
  public resetRaid() {
    this._raid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid;
  }

  // slot_positions - computed: false, optional: false, required: true
  private _slotPositions?: number[]; 
  public get slotPositions() {
    return this.getNumberListAttribute('slot_positions');
  }
  public set slotPositions(value: number[]) {
    this._slotPositions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotPositionsInput() {
    return this._slotPositions;
  }

  // partition - computed: false, optional: true, required: false
  private _partition = new DedicatedServerLayoutPartitionList(this, "partition", false);
  public get partition() {
    return this._partition;
  }
  public putPartition(value: DedicatedServerLayoutPartition[] | cdktf.IResolvable) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }
}

export class DedicatedServerLayoutList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerLayout[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerLayoutOutputReference {
    return new DedicatedServerLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#drive_model DedicatedServer#drive_model}
  */
  readonly driveModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#position DedicatedServer#position}
  */
  readonly position: number;
}

export function dedicatedServerSlotToTerraform(struct?: DedicatedServerSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drive_model: cdktf.stringToTerraform(struct!.driveModel),
    position: cdktf.numberToTerraform(struct!.position),
  }
}


export function dedicatedServerSlotToHclTerraform(struct?: DedicatedServerSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drive_model: {
      value: cdktf.stringToHclTerraform(struct!.driveModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerSlotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driveModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveModel = this._driveModel;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driveModel = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driveModel = value.driveModel;
      this._position = value.position;
    }
  }

  // drive_model - computed: false, optional: true, required: false
  private _driveModel?: string; 
  public get driveModel() {
    return this.getStringAttribute('drive_model');
  }
  public set driveModel(value: string) {
    this._driveModel = value;
  }
  public resetDriveModel() {
    this._driveModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveModelInput() {
    return this._driveModel;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class DedicatedServerSlotList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerSlot[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerSlotOutputReference {
    return new DedicatedServerSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#create DedicatedServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#delete DedicatedServer#delete}
  */
  readonly delete?: string;
}

export function dedicatedServerTimeoutsToTerraform(struct?: DedicatedServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dedicatedServerTimeoutsToHclTerraform(struct?: DedicatedServerTimeouts | cdktf.IResolvable): any {
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

export class DedicatedServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server serverscom_dedicated_server}
*/
export class DedicatedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_dedicated_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedServer to import
  * @param importFromId The id of the existing DedicatedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_dedicated_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.3/docs/resources/dedicated_server serverscom_dedicated_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedServerConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_dedicated_server',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.3',
        providerVersionConstraint: '0.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._labels = config.labels;
    this._location = config.location;
    this._operatingSystem = config.operatingSystem;
    this._privateIpv4Address = config.privateIpv4Address;
    this._privateIpv4NetworkId = config.privateIpv4NetworkId;
    this._privateUplink = config.privateUplink;
    this._publicIpv4Address = config.publicIpv4Address;
    this._publicIpv4NetworkId = config.publicIpv4NetworkId;
    this._publicUplink = config.publicUplink;
    this._ramSize = config.ramSize;
    this._serverModel = config.serverModel;
    this._sshKeyFingerprints = config.sshKeyFingerprints;
    this._userData = config.userData;
    this._layout.internalValue = config.layout;
    this._slot.internalValue = config.slot;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // private_ipv4_address - computed: true, optional: true, required: false
  private _privateIpv4Address?: string; 
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }
  public set privateIpv4Address(value: string) {
    this._privateIpv4Address = value;
  }
  public resetPrivateIpv4Address() {
    this._privateIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4AddressInput() {
    return this._privateIpv4Address;
  }

  // private_ipv4_network_id - computed: false, optional: true, required: false
  private _privateIpv4NetworkId?: string; 
  public get privateIpv4NetworkId() {
    return this.getStringAttribute('private_ipv4_network_id');
  }
  public set privateIpv4NetworkId(value: string) {
    this._privateIpv4NetworkId = value;
  }
  public resetPrivateIpv4NetworkId() {
    this._privateIpv4NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4NetworkIdInput() {
    return this._privateIpv4NetworkId;
  }

  // private_uplink - computed: false, optional: false, required: true
  private _privateUplink?: string; 
  public get privateUplink() {
    return this.getStringAttribute('private_uplink');
  }
  public set privateUplink(value: string) {
    this._privateUplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateUplinkInput() {
    return this._privateUplink;
  }

  // public_ipv4_address - computed: true, optional: true, required: false
  private _publicIpv4Address?: string; 
  public get publicIpv4Address() {
    return this.getStringAttribute('public_ipv4_address');
  }
  public set publicIpv4Address(value: string) {
    this._publicIpv4Address = value;
  }
  public resetPublicIpv4Address() {
    this._publicIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4AddressInput() {
    return this._publicIpv4Address;
  }

  // public_ipv4_network_id - computed: false, optional: true, required: false
  private _publicIpv4NetworkId?: string; 
  public get publicIpv4NetworkId() {
    return this.getStringAttribute('public_ipv4_network_id');
  }
  public set publicIpv4NetworkId(value: string) {
    this._publicIpv4NetworkId = value;
  }
  public resetPublicIpv4NetworkId() {
    this._publicIpv4NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4NetworkIdInput() {
    return this._publicIpv4NetworkId;
  }

  // public_uplink - computed: false, optional: true, required: false
  private _publicUplink?: string; 
  public get publicUplink() {
    return this.getStringAttribute('public_uplink');
  }
  public set publicUplink(value: string) {
    this._publicUplink = value;
  }
  public resetPublicUplink() {
    this._publicUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicUplinkInput() {
    return this._publicUplink;
  }

  // ram_size - computed: false, optional: true, required: false
  private _ramSize?: number; 
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }
  public set ramSize(value: number) {
    this._ramSize = value;
  }
  public resetRamSize() {
    this._ramSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramSizeInput() {
    return this._ramSize;
  }

  // server_model - computed: false, optional: false, required: true
  private _serverModel?: string; 
  public get serverModel() {
    return this.getStringAttribute('server_model');
  }
  public set serverModel(value: string) {
    this._serverModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModelInput() {
    return this._serverModel;
  }

  // ssh_key_fingerprints - computed: false, optional: true, required: false
  private _sshKeyFingerprints?: string[]; 
  public get sshKeyFingerprints() {
    return this.getListAttribute('ssh_key_fingerprints');
  }
  public set sshKeyFingerprints(value: string[]) {
    this._sshKeyFingerprints = value;
  }
  public resetSshKeyFingerprints() {
    this._sshKeyFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFingerprintsInput() {
    return this._sshKeyFingerprints;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new DedicatedServerLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DedicatedServerLayout[] | cdktf.IResolvable) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new DedicatedServerSlotList(this, "slot", false);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: DedicatedServerSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DedicatedServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DedicatedServerTimeouts) {
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
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      private_ipv4_address: cdktf.stringToTerraform(this._privateIpv4Address),
      private_ipv4_network_id: cdktf.stringToTerraform(this._privateIpv4NetworkId),
      private_uplink: cdktf.stringToTerraform(this._privateUplink),
      public_ipv4_address: cdktf.stringToTerraform(this._publicIpv4Address),
      public_ipv4_network_id: cdktf.stringToTerraform(this._publicIpv4NetworkId),
      public_uplink: cdktf.stringToTerraform(this._publicUplink),
      ram_size: cdktf.numberToTerraform(this._ramSize),
      server_model: cdktf.stringToTerraform(this._serverModel),
      ssh_key_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyFingerprints),
      user_data: cdktf.stringToTerraform(this._userData),
      layout: cdktf.listMapper(dedicatedServerLayoutToTerraform, true)(this._layout.internalValue),
      slot: cdktf.listMapper(dedicatedServerSlotToTerraform, true)(this._slot.internalValue),
      timeouts: dedicatedServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._privateIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_network_id: {
        value: cdktf.stringToHclTerraform(this._privateIpv4NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_uplink: {
        value: cdktf.stringToHclTerraform(this._privateUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._publicIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv4_network_id: {
        value: cdktf.stringToHclTerraform(this._publicIpv4NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_uplink: {
        value: cdktf.stringToHclTerraform(this._publicUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_size: {
        value: cdktf.numberToHclTerraform(this._ramSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_model: {
        value: cdktf.stringToHclTerraform(this._serverModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_fingerprints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyFingerprints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: cdktf.listMapperHcl(dedicatedServerLayoutToHclTerraform, true)(this._layout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerLayoutList",
      },
      slot: {
        value: cdktf.listMapperHcl(dedicatedServerSlotToHclTerraform, true)(this._slot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerSlotList",
      },
      timeouts: {
        value: dedicatedServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
