// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuNpqueuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#adom ObjectSystemNpuNpqueues#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dynamic_sort_subtable ObjectSystemNpuNpqueues#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#id ObjectSystemNpuNpqueues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#scopetype ObjectSystemNpuNpqueues#scopetype}
  */
  readonly scopetype?: string;
  /**
  * ethernet_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#ethernet_type ObjectSystemNpuNpqueues#ethernet_type}
  */
  readonly ethernetType?: ObjectSystemNpuNpqueuesEthernetType[] | cdktf.IResolvable;
  /**
  * ip_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#ip_protocol ObjectSystemNpuNpqueues#ip_protocol}
  */
  readonly ipProtocol?: ObjectSystemNpuNpqueuesIpProtocol[] | cdktf.IResolvable;
  /**
  * ip_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#ip_service ObjectSystemNpuNpqueues#ip_service}
  */
  readonly ipService?: ObjectSystemNpuNpqueuesIpService[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#profile ObjectSystemNpuNpqueues#profile}
  */
  readonly profile?: ObjectSystemNpuNpqueuesProfile[] | cdktf.IResolvable;
  /**
  * scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#scheduler ObjectSystemNpuNpqueues#scheduler}
  */
  readonly scheduler?: ObjectSystemNpuNpqueuesScheduler[] | cdktf.IResolvable;
}
export interface ObjectSystemNpuNpqueuesEthernetType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#name ObjectSystemNpuNpqueues#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#queue ObjectSystemNpuNpqueues#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#type ObjectSystemNpuNpqueues#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#weight ObjectSystemNpuNpqueues#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpqueuesEthernetTypeToTerraform(struct?: ObjectSystemNpuNpqueuesEthernetType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    queue: cdktf.numberToTerraform(struct!.queue),
    type: cdktf.numberToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpqueuesEthernetTypeToHclTerraform(struct?: ObjectSystemNpuNpqueuesEthernetType | cdktf.IResolvable): any {
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
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
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

export class ObjectSystemNpuNpqueuesEthernetTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpqueuesEthernetType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpqueuesEthernetType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._queue = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._queue = value.queue;
      this._type = value.type;
      this._weight = value.weight;
    }
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

  // queue - computed: true, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: true, optional: true, required: false
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

export class ObjectSystemNpuNpqueuesEthernetTypeList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpqueuesEthernetType[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpqueuesEthernetTypeOutputReference {
    return new ObjectSystemNpuNpqueuesEthernetTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpqueuesIpProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#name ObjectSystemNpuNpqueues#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#protocol ObjectSystemNpuNpqueues#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#queue ObjectSystemNpuNpqueues#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#weight ObjectSystemNpuNpqueues#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpqueuesIpProtocolToTerraform(struct?: ObjectSystemNpuNpqueuesIpProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    queue: cdktf.numberToTerraform(struct!.queue),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpqueuesIpProtocolToHclTerraform(struct?: ObjectSystemNpuNpqueuesIpProtocol | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
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

export class ObjectSystemNpuNpqueuesIpProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpqueuesIpProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpqueuesIpProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._queue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocol = value.protocol;
      this._queue = value.queue;
      this._weight = value.weight;
    }
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // weight - computed: true, optional: true, required: false
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

export class ObjectSystemNpuNpqueuesIpProtocolList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpqueuesIpProtocol[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpqueuesIpProtocolOutputReference {
    return new ObjectSystemNpuNpqueuesIpProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpqueuesIpService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dport ObjectSystemNpuNpqueues#dport}
  */
  readonly dport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#name ObjectSystemNpuNpqueues#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#protocol ObjectSystemNpuNpqueues#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#queue ObjectSystemNpuNpqueues#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#sport ObjectSystemNpuNpqueues#sport}
  */
  readonly sport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#weight ObjectSystemNpuNpqueues#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpqueuesIpServiceToTerraform(struct?: ObjectSystemNpuNpqueuesIpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dport: cdktf.numberToTerraform(struct!.dport),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    queue: cdktf.numberToTerraform(struct!.queue),
    sport: cdktf.numberToTerraform(struct!.sport),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpqueuesIpServiceToHclTerraform(struct?: ObjectSystemNpuNpqueuesIpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dport: {
      value: cdktf.numberToHclTerraform(struct!.dport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport: {
      value: cdktf.numberToHclTerraform(struct!.sport),
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

export class ObjectSystemNpuNpqueuesIpServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpqueuesIpService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dport = this._dport;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._sport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sport = this._sport;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpqueuesIpService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dport = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._queue = undefined;
      this._sport = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dport = value.dport;
      this._name = value.name;
      this._protocol = value.protocol;
      this._queue = value.queue;
      this._sport = value.sport;
      this._weight = value.weight;
    }
  }

  // dport - computed: false, optional: true, required: false
  private _dport?: number; 
  public get dport() {
    return this.getNumberAttribute('dport');
  }
  public set dport(value: number) {
    this._dport = value;
  }
  public resetDport() {
    this._dport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportInput() {
    return this._dport;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // sport - computed: false, optional: true, required: false
  private _sport?: number; 
  public get sport() {
    return this.getNumberAttribute('sport');
  }
  public set sport(value: number) {
    this._sport = value;
  }
  public resetSport() {
    this._sport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportInput() {
    return this._sport;
  }

  // weight - computed: true, optional: true, required: false
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

export class ObjectSystemNpuNpqueuesIpServiceList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpqueuesIpService[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpqueuesIpServiceOutputReference {
    return new ObjectSystemNpuNpqueuesIpServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpqueuesProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos0 ObjectSystemNpuNpqueues#cos0}
  */
  readonly cos0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos1 ObjectSystemNpuNpqueues#cos1}
  */
  readonly cos1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos2 ObjectSystemNpuNpqueues#cos2}
  */
  readonly cos2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos3 ObjectSystemNpuNpqueues#cos3}
  */
  readonly cos3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos4 ObjectSystemNpuNpqueues#cos4}
  */
  readonly cos4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos5 ObjectSystemNpuNpqueues#cos5}
  */
  readonly cos5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos6 ObjectSystemNpuNpqueues#cos6}
  */
  readonly cos6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#cos7 ObjectSystemNpuNpqueues#cos7}
  */
  readonly cos7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp0 ObjectSystemNpuNpqueues#dscp0}
  */
  readonly dscp0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp1 ObjectSystemNpuNpqueues#dscp1}
  */
  readonly dscp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp10 ObjectSystemNpuNpqueues#dscp10}
  */
  readonly dscp10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp11 ObjectSystemNpuNpqueues#dscp11}
  */
  readonly dscp11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp12 ObjectSystemNpuNpqueues#dscp12}
  */
  readonly dscp12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp13 ObjectSystemNpuNpqueues#dscp13}
  */
  readonly dscp13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp14 ObjectSystemNpuNpqueues#dscp14}
  */
  readonly dscp14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp15 ObjectSystemNpuNpqueues#dscp15}
  */
  readonly dscp15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp16 ObjectSystemNpuNpqueues#dscp16}
  */
  readonly dscp16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp17 ObjectSystemNpuNpqueues#dscp17}
  */
  readonly dscp17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp18 ObjectSystemNpuNpqueues#dscp18}
  */
  readonly dscp18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp19 ObjectSystemNpuNpqueues#dscp19}
  */
  readonly dscp19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp2 ObjectSystemNpuNpqueues#dscp2}
  */
  readonly dscp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp20 ObjectSystemNpuNpqueues#dscp20}
  */
  readonly dscp20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp21 ObjectSystemNpuNpqueues#dscp21}
  */
  readonly dscp21?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp22 ObjectSystemNpuNpqueues#dscp22}
  */
  readonly dscp22?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp23 ObjectSystemNpuNpqueues#dscp23}
  */
  readonly dscp23?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp24 ObjectSystemNpuNpqueues#dscp24}
  */
  readonly dscp24?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp25 ObjectSystemNpuNpqueues#dscp25}
  */
  readonly dscp25?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp26 ObjectSystemNpuNpqueues#dscp26}
  */
  readonly dscp26?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp27 ObjectSystemNpuNpqueues#dscp27}
  */
  readonly dscp27?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp28 ObjectSystemNpuNpqueues#dscp28}
  */
  readonly dscp28?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp29 ObjectSystemNpuNpqueues#dscp29}
  */
  readonly dscp29?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp3 ObjectSystemNpuNpqueues#dscp3}
  */
  readonly dscp3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp30 ObjectSystemNpuNpqueues#dscp30}
  */
  readonly dscp30?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp31 ObjectSystemNpuNpqueues#dscp31}
  */
  readonly dscp31?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp32 ObjectSystemNpuNpqueues#dscp32}
  */
  readonly dscp32?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp33 ObjectSystemNpuNpqueues#dscp33}
  */
  readonly dscp33?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp34 ObjectSystemNpuNpqueues#dscp34}
  */
  readonly dscp34?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp35 ObjectSystemNpuNpqueues#dscp35}
  */
  readonly dscp35?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp36 ObjectSystemNpuNpqueues#dscp36}
  */
  readonly dscp36?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp37 ObjectSystemNpuNpqueues#dscp37}
  */
  readonly dscp37?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp38 ObjectSystemNpuNpqueues#dscp38}
  */
  readonly dscp38?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp39 ObjectSystemNpuNpqueues#dscp39}
  */
  readonly dscp39?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp4 ObjectSystemNpuNpqueues#dscp4}
  */
  readonly dscp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp40 ObjectSystemNpuNpqueues#dscp40}
  */
  readonly dscp40?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp41 ObjectSystemNpuNpqueues#dscp41}
  */
  readonly dscp41?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp42 ObjectSystemNpuNpqueues#dscp42}
  */
  readonly dscp42?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp43 ObjectSystemNpuNpqueues#dscp43}
  */
  readonly dscp43?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp44 ObjectSystemNpuNpqueues#dscp44}
  */
  readonly dscp44?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp45 ObjectSystemNpuNpqueues#dscp45}
  */
  readonly dscp45?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp46 ObjectSystemNpuNpqueues#dscp46}
  */
  readonly dscp46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp47 ObjectSystemNpuNpqueues#dscp47}
  */
  readonly dscp47?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp48 ObjectSystemNpuNpqueues#dscp48}
  */
  readonly dscp48?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp49 ObjectSystemNpuNpqueues#dscp49}
  */
  readonly dscp49?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp5 ObjectSystemNpuNpqueues#dscp5}
  */
  readonly dscp5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp50 ObjectSystemNpuNpqueues#dscp50}
  */
  readonly dscp50?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp51 ObjectSystemNpuNpqueues#dscp51}
  */
  readonly dscp51?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp52 ObjectSystemNpuNpqueues#dscp52}
  */
  readonly dscp52?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp53 ObjectSystemNpuNpqueues#dscp53}
  */
  readonly dscp53?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp54 ObjectSystemNpuNpqueues#dscp54}
  */
  readonly dscp54?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp55 ObjectSystemNpuNpqueues#dscp55}
  */
  readonly dscp55?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp56 ObjectSystemNpuNpqueues#dscp56}
  */
  readonly dscp56?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp57 ObjectSystemNpuNpqueues#dscp57}
  */
  readonly dscp57?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp58 ObjectSystemNpuNpqueues#dscp58}
  */
  readonly dscp58?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp59 ObjectSystemNpuNpqueues#dscp59}
  */
  readonly dscp59?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp6 ObjectSystemNpuNpqueues#dscp6}
  */
  readonly dscp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp60 ObjectSystemNpuNpqueues#dscp60}
  */
  readonly dscp60?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp61 ObjectSystemNpuNpqueues#dscp61}
  */
  readonly dscp61?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp62 ObjectSystemNpuNpqueues#dscp62}
  */
  readonly dscp62?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp63 ObjectSystemNpuNpqueues#dscp63}
  */
  readonly dscp63?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp7 ObjectSystemNpuNpqueues#dscp7}
  */
  readonly dscp7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp8 ObjectSystemNpuNpqueues#dscp8}
  */
  readonly dscp8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#dscp9 ObjectSystemNpuNpqueues#dscp9}
  */
  readonly dscp9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#id ObjectSystemNpuNpqueues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#type ObjectSystemNpuNpqueues#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#weight ObjectSystemNpuNpqueues#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpqueuesProfileToTerraform(struct?: ObjectSystemNpuNpqueuesProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos0: cdktf.stringToTerraform(struct!.cos0),
    cos1: cdktf.stringToTerraform(struct!.cos1),
    cos2: cdktf.stringToTerraform(struct!.cos2),
    cos3: cdktf.stringToTerraform(struct!.cos3),
    cos4: cdktf.stringToTerraform(struct!.cos4),
    cos5: cdktf.stringToTerraform(struct!.cos5),
    cos6: cdktf.stringToTerraform(struct!.cos6),
    cos7: cdktf.stringToTerraform(struct!.cos7),
    dscp0: cdktf.stringToTerraform(struct!.dscp0),
    dscp1: cdktf.stringToTerraform(struct!.dscp1),
    dscp10: cdktf.stringToTerraform(struct!.dscp10),
    dscp11: cdktf.stringToTerraform(struct!.dscp11),
    dscp12: cdktf.stringToTerraform(struct!.dscp12),
    dscp13: cdktf.stringToTerraform(struct!.dscp13),
    dscp14: cdktf.stringToTerraform(struct!.dscp14),
    dscp15: cdktf.stringToTerraform(struct!.dscp15),
    dscp16: cdktf.stringToTerraform(struct!.dscp16),
    dscp17: cdktf.stringToTerraform(struct!.dscp17),
    dscp18: cdktf.stringToTerraform(struct!.dscp18),
    dscp19: cdktf.stringToTerraform(struct!.dscp19),
    dscp2: cdktf.stringToTerraform(struct!.dscp2),
    dscp20: cdktf.stringToTerraform(struct!.dscp20),
    dscp21: cdktf.stringToTerraform(struct!.dscp21),
    dscp22: cdktf.stringToTerraform(struct!.dscp22),
    dscp23: cdktf.stringToTerraform(struct!.dscp23),
    dscp24: cdktf.stringToTerraform(struct!.dscp24),
    dscp25: cdktf.stringToTerraform(struct!.dscp25),
    dscp26: cdktf.stringToTerraform(struct!.dscp26),
    dscp27: cdktf.stringToTerraform(struct!.dscp27),
    dscp28: cdktf.stringToTerraform(struct!.dscp28),
    dscp29: cdktf.stringToTerraform(struct!.dscp29),
    dscp3: cdktf.stringToTerraform(struct!.dscp3),
    dscp30: cdktf.stringToTerraform(struct!.dscp30),
    dscp31: cdktf.stringToTerraform(struct!.dscp31),
    dscp32: cdktf.stringToTerraform(struct!.dscp32),
    dscp33: cdktf.stringToTerraform(struct!.dscp33),
    dscp34: cdktf.stringToTerraform(struct!.dscp34),
    dscp35: cdktf.stringToTerraform(struct!.dscp35),
    dscp36: cdktf.stringToTerraform(struct!.dscp36),
    dscp37: cdktf.stringToTerraform(struct!.dscp37),
    dscp38: cdktf.stringToTerraform(struct!.dscp38),
    dscp39: cdktf.stringToTerraform(struct!.dscp39),
    dscp4: cdktf.stringToTerraform(struct!.dscp4),
    dscp40: cdktf.stringToTerraform(struct!.dscp40),
    dscp41: cdktf.stringToTerraform(struct!.dscp41),
    dscp42: cdktf.stringToTerraform(struct!.dscp42),
    dscp43: cdktf.stringToTerraform(struct!.dscp43),
    dscp44: cdktf.stringToTerraform(struct!.dscp44),
    dscp45: cdktf.stringToTerraform(struct!.dscp45),
    dscp46: cdktf.stringToTerraform(struct!.dscp46),
    dscp47: cdktf.stringToTerraform(struct!.dscp47),
    dscp48: cdktf.stringToTerraform(struct!.dscp48),
    dscp49: cdktf.stringToTerraform(struct!.dscp49),
    dscp5: cdktf.stringToTerraform(struct!.dscp5),
    dscp50: cdktf.stringToTerraform(struct!.dscp50),
    dscp51: cdktf.stringToTerraform(struct!.dscp51),
    dscp52: cdktf.stringToTerraform(struct!.dscp52),
    dscp53: cdktf.stringToTerraform(struct!.dscp53),
    dscp54: cdktf.stringToTerraform(struct!.dscp54),
    dscp55: cdktf.stringToTerraform(struct!.dscp55),
    dscp56: cdktf.stringToTerraform(struct!.dscp56),
    dscp57: cdktf.stringToTerraform(struct!.dscp57),
    dscp58: cdktf.stringToTerraform(struct!.dscp58),
    dscp59: cdktf.stringToTerraform(struct!.dscp59),
    dscp6: cdktf.stringToTerraform(struct!.dscp6),
    dscp60: cdktf.stringToTerraform(struct!.dscp60),
    dscp61: cdktf.stringToTerraform(struct!.dscp61),
    dscp62: cdktf.stringToTerraform(struct!.dscp62),
    dscp63: cdktf.stringToTerraform(struct!.dscp63),
    dscp7: cdktf.stringToTerraform(struct!.dscp7),
    dscp8: cdktf.stringToTerraform(struct!.dscp8),
    dscp9: cdktf.stringToTerraform(struct!.dscp9),
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpqueuesProfileToHclTerraform(struct?: ObjectSystemNpuNpqueuesProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos0: {
      value: cdktf.stringToHclTerraform(struct!.cos0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos1: {
      value: cdktf.stringToHclTerraform(struct!.cos1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos2: {
      value: cdktf.stringToHclTerraform(struct!.cos2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos3: {
      value: cdktf.stringToHclTerraform(struct!.cos3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos4: {
      value: cdktf.stringToHclTerraform(struct!.cos4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos5: {
      value: cdktf.stringToHclTerraform(struct!.cos5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos6: {
      value: cdktf.stringToHclTerraform(struct!.cos6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos7: {
      value: cdktf.stringToHclTerraform(struct!.cos7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp0: {
      value: cdktf.stringToHclTerraform(struct!.dscp0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp1: {
      value: cdktf.stringToHclTerraform(struct!.dscp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp10: {
      value: cdktf.stringToHclTerraform(struct!.dscp10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp11: {
      value: cdktf.stringToHclTerraform(struct!.dscp11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp12: {
      value: cdktf.stringToHclTerraform(struct!.dscp12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp13: {
      value: cdktf.stringToHclTerraform(struct!.dscp13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp14: {
      value: cdktf.stringToHclTerraform(struct!.dscp14),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp15: {
      value: cdktf.stringToHclTerraform(struct!.dscp15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp16: {
      value: cdktf.stringToHclTerraform(struct!.dscp16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp17: {
      value: cdktf.stringToHclTerraform(struct!.dscp17),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp18: {
      value: cdktf.stringToHclTerraform(struct!.dscp18),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp19: {
      value: cdktf.stringToHclTerraform(struct!.dscp19),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp2: {
      value: cdktf.stringToHclTerraform(struct!.dscp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp20: {
      value: cdktf.stringToHclTerraform(struct!.dscp20),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp21: {
      value: cdktf.stringToHclTerraform(struct!.dscp21),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp22: {
      value: cdktf.stringToHclTerraform(struct!.dscp22),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp23: {
      value: cdktf.stringToHclTerraform(struct!.dscp23),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp24: {
      value: cdktf.stringToHclTerraform(struct!.dscp24),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp25: {
      value: cdktf.stringToHclTerraform(struct!.dscp25),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp26: {
      value: cdktf.stringToHclTerraform(struct!.dscp26),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp27: {
      value: cdktf.stringToHclTerraform(struct!.dscp27),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp28: {
      value: cdktf.stringToHclTerraform(struct!.dscp28),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp29: {
      value: cdktf.stringToHclTerraform(struct!.dscp29),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp3: {
      value: cdktf.stringToHclTerraform(struct!.dscp3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp30: {
      value: cdktf.stringToHclTerraform(struct!.dscp30),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp31: {
      value: cdktf.stringToHclTerraform(struct!.dscp31),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp32: {
      value: cdktf.stringToHclTerraform(struct!.dscp32),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp33: {
      value: cdktf.stringToHclTerraform(struct!.dscp33),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp34: {
      value: cdktf.stringToHclTerraform(struct!.dscp34),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp35: {
      value: cdktf.stringToHclTerraform(struct!.dscp35),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp36: {
      value: cdktf.stringToHclTerraform(struct!.dscp36),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp37: {
      value: cdktf.stringToHclTerraform(struct!.dscp37),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp38: {
      value: cdktf.stringToHclTerraform(struct!.dscp38),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp39: {
      value: cdktf.stringToHclTerraform(struct!.dscp39),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp4: {
      value: cdktf.stringToHclTerraform(struct!.dscp4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp40: {
      value: cdktf.stringToHclTerraform(struct!.dscp40),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp41: {
      value: cdktf.stringToHclTerraform(struct!.dscp41),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp42: {
      value: cdktf.stringToHclTerraform(struct!.dscp42),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp43: {
      value: cdktf.stringToHclTerraform(struct!.dscp43),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp44: {
      value: cdktf.stringToHclTerraform(struct!.dscp44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp45: {
      value: cdktf.stringToHclTerraform(struct!.dscp45),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp46: {
      value: cdktf.stringToHclTerraform(struct!.dscp46),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp47: {
      value: cdktf.stringToHclTerraform(struct!.dscp47),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp48: {
      value: cdktf.stringToHclTerraform(struct!.dscp48),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp49: {
      value: cdktf.stringToHclTerraform(struct!.dscp49),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp5: {
      value: cdktf.stringToHclTerraform(struct!.dscp5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp50: {
      value: cdktf.stringToHclTerraform(struct!.dscp50),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp51: {
      value: cdktf.stringToHclTerraform(struct!.dscp51),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp52: {
      value: cdktf.stringToHclTerraform(struct!.dscp52),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp53: {
      value: cdktf.stringToHclTerraform(struct!.dscp53),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp54: {
      value: cdktf.stringToHclTerraform(struct!.dscp54),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp55: {
      value: cdktf.stringToHclTerraform(struct!.dscp55),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp56: {
      value: cdktf.stringToHclTerraform(struct!.dscp56),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp57: {
      value: cdktf.stringToHclTerraform(struct!.dscp57),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp58: {
      value: cdktf.stringToHclTerraform(struct!.dscp58),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp59: {
      value: cdktf.stringToHclTerraform(struct!.dscp59),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp6: {
      value: cdktf.stringToHclTerraform(struct!.dscp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp60: {
      value: cdktf.stringToHclTerraform(struct!.dscp60),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp61: {
      value: cdktf.stringToHclTerraform(struct!.dscp61),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp62: {
      value: cdktf.stringToHclTerraform(struct!.dscp62),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp63: {
      value: cdktf.stringToHclTerraform(struct!.dscp63),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp7: {
      value: cdktf.stringToHclTerraform(struct!.dscp7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp8: {
      value: cdktf.stringToHclTerraform(struct!.dscp8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp9: {
      value: cdktf.stringToHclTerraform(struct!.dscp9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ObjectSystemNpuNpqueuesProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpqueuesProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cos0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos0 = this._cos0;
    }
    if (this._cos1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos1 = this._cos1;
    }
    if (this._cos2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos2 = this._cos2;
    }
    if (this._cos3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos3 = this._cos3;
    }
    if (this._cos4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos4 = this._cos4;
    }
    if (this._cos5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos5 = this._cos5;
    }
    if (this._cos6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos6 = this._cos6;
    }
    if (this._cos7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos7 = this._cos7;
    }
    if (this._dscp0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp0 = this._dscp0;
    }
    if (this._dscp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp1 = this._dscp1;
    }
    if (this._dscp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp10 = this._dscp10;
    }
    if (this._dscp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp11 = this._dscp11;
    }
    if (this._dscp12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp12 = this._dscp12;
    }
    if (this._dscp13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp13 = this._dscp13;
    }
    if (this._dscp14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp14 = this._dscp14;
    }
    if (this._dscp15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp15 = this._dscp15;
    }
    if (this._dscp16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp16 = this._dscp16;
    }
    if (this._dscp17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp17 = this._dscp17;
    }
    if (this._dscp18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp18 = this._dscp18;
    }
    if (this._dscp19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp19 = this._dscp19;
    }
    if (this._dscp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp2 = this._dscp2;
    }
    if (this._dscp20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp20 = this._dscp20;
    }
    if (this._dscp21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp21 = this._dscp21;
    }
    if (this._dscp22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp22 = this._dscp22;
    }
    if (this._dscp23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp23 = this._dscp23;
    }
    if (this._dscp24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp24 = this._dscp24;
    }
    if (this._dscp25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp25 = this._dscp25;
    }
    if (this._dscp26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp26 = this._dscp26;
    }
    if (this._dscp27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp27 = this._dscp27;
    }
    if (this._dscp28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp28 = this._dscp28;
    }
    if (this._dscp29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp29 = this._dscp29;
    }
    if (this._dscp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp3 = this._dscp3;
    }
    if (this._dscp30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp30 = this._dscp30;
    }
    if (this._dscp31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp31 = this._dscp31;
    }
    if (this._dscp32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp32 = this._dscp32;
    }
    if (this._dscp33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp33 = this._dscp33;
    }
    if (this._dscp34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp34 = this._dscp34;
    }
    if (this._dscp35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp35 = this._dscp35;
    }
    if (this._dscp36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp36 = this._dscp36;
    }
    if (this._dscp37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp37 = this._dscp37;
    }
    if (this._dscp38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp38 = this._dscp38;
    }
    if (this._dscp39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp39 = this._dscp39;
    }
    if (this._dscp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp4 = this._dscp4;
    }
    if (this._dscp40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp40 = this._dscp40;
    }
    if (this._dscp41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp41 = this._dscp41;
    }
    if (this._dscp42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp42 = this._dscp42;
    }
    if (this._dscp43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp43 = this._dscp43;
    }
    if (this._dscp44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp44 = this._dscp44;
    }
    if (this._dscp45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp45 = this._dscp45;
    }
    if (this._dscp46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp46 = this._dscp46;
    }
    if (this._dscp47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp47 = this._dscp47;
    }
    if (this._dscp48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp48 = this._dscp48;
    }
    if (this._dscp49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp49 = this._dscp49;
    }
    if (this._dscp5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp5 = this._dscp5;
    }
    if (this._dscp50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp50 = this._dscp50;
    }
    if (this._dscp51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp51 = this._dscp51;
    }
    if (this._dscp52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp52 = this._dscp52;
    }
    if (this._dscp53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp53 = this._dscp53;
    }
    if (this._dscp54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp54 = this._dscp54;
    }
    if (this._dscp55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp55 = this._dscp55;
    }
    if (this._dscp56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp56 = this._dscp56;
    }
    if (this._dscp57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp57 = this._dscp57;
    }
    if (this._dscp58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp58 = this._dscp58;
    }
    if (this._dscp59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp59 = this._dscp59;
    }
    if (this._dscp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp6 = this._dscp6;
    }
    if (this._dscp60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp60 = this._dscp60;
    }
    if (this._dscp61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp61 = this._dscp61;
    }
    if (this._dscp62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp62 = this._dscp62;
    }
    if (this._dscp63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp63 = this._dscp63;
    }
    if (this._dscp7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp7 = this._dscp7;
    }
    if (this._dscp8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp8 = this._dscp8;
    }
    if (this._dscp9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp9 = this._dscp9;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpqueuesProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cos0 = undefined;
      this._cos1 = undefined;
      this._cos2 = undefined;
      this._cos3 = undefined;
      this._cos4 = undefined;
      this._cos5 = undefined;
      this._cos6 = undefined;
      this._cos7 = undefined;
      this._dscp0 = undefined;
      this._dscp1 = undefined;
      this._dscp10 = undefined;
      this._dscp11 = undefined;
      this._dscp12 = undefined;
      this._dscp13 = undefined;
      this._dscp14 = undefined;
      this._dscp15 = undefined;
      this._dscp16 = undefined;
      this._dscp17 = undefined;
      this._dscp18 = undefined;
      this._dscp19 = undefined;
      this._dscp2 = undefined;
      this._dscp20 = undefined;
      this._dscp21 = undefined;
      this._dscp22 = undefined;
      this._dscp23 = undefined;
      this._dscp24 = undefined;
      this._dscp25 = undefined;
      this._dscp26 = undefined;
      this._dscp27 = undefined;
      this._dscp28 = undefined;
      this._dscp29 = undefined;
      this._dscp3 = undefined;
      this._dscp30 = undefined;
      this._dscp31 = undefined;
      this._dscp32 = undefined;
      this._dscp33 = undefined;
      this._dscp34 = undefined;
      this._dscp35 = undefined;
      this._dscp36 = undefined;
      this._dscp37 = undefined;
      this._dscp38 = undefined;
      this._dscp39 = undefined;
      this._dscp4 = undefined;
      this._dscp40 = undefined;
      this._dscp41 = undefined;
      this._dscp42 = undefined;
      this._dscp43 = undefined;
      this._dscp44 = undefined;
      this._dscp45 = undefined;
      this._dscp46 = undefined;
      this._dscp47 = undefined;
      this._dscp48 = undefined;
      this._dscp49 = undefined;
      this._dscp5 = undefined;
      this._dscp50 = undefined;
      this._dscp51 = undefined;
      this._dscp52 = undefined;
      this._dscp53 = undefined;
      this._dscp54 = undefined;
      this._dscp55 = undefined;
      this._dscp56 = undefined;
      this._dscp57 = undefined;
      this._dscp58 = undefined;
      this._dscp59 = undefined;
      this._dscp6 = undefined;
      this._dscp60 = undefined;
      this._dscp61 = undefined;
      this._dscp62 = undefined;
      this._dscp63 = undefined;
      this._dscp7 = undefined;
      this._dscp8 = undefined;
      this._dscp9 = undefined;
      this._id = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cos0 = value.cos0;
      this._cos1 = value.cos1;
      this._cos2 = value.cos2;
      this._cos3 = value.cos3;
      this._cos4 = value.cos4;
      this._cos5 = value.cos5;
      this._cos6 = value.cos6;
      this._cos7 = value.cos7;
      this._dscp0 = value.dscp0;
      this._dscp1 = value.dscp1;
      this._dscp10 = value.dscp10;
      this._dscp11 = value.dscp11;
      this._dscp12 = value.dscp12;
      this._dscp13 = value.dscp13;
      this._dscp14 = value.dscp14;
      this._dscp15 = value.dscp15;
      this._dscp16 = value.dscp16;
      this._dscp17 = value.dscp17;
      this._dscp18 = value.dscp18;
      this._dscp19 = value.dscp19;
      this._dscp2 = value.dscp2;
      this._dscp20 = value.dscp20;
      this._dscp21 = value.dscp21;
      this._dscp22 = value.dscp22;
      this._dscp23 = value.dscp23;
      this._dscp24 = value.dscp24;
      this._dscp25 = value.dscp25;
      this._dscp26 = value.dscp26;
      this._dscp27 = value.dscp27;
      this._dscp28 = value.dscp28;
      this._dscp29 = value.dscp29;
      this._dscp3 = value.dscp3;
      this._dscp30 = value.dscp30;
      this._dscp31 = value.dscp31;
      this._dscp32 = value.dscp32;
      this._dscp33 = value.dscp33;
      this._dscp34 = value.dscp34;
      this._dscp35 = value.dscp35;
      this._dscp36 = value.dscp36;
      this._dscp37 = value.dscp37;
      this._dscp38 = value.dscp38;
      this._dscp39 = value.dscp39;
      this._dscp4 = value.dscp4;
      this._dscp40 = value.dscp40;
      this._dscp41 = value.dscp41;
      this._dscp42 = value.dscp42;
      this._dscp43 = value.dscp43;
      this._dscp44 = value.dscp44;
      this._dscp45 = value.dscp45;
      this._dscp46 = value.dscp46;
      this._dscp47 = value.dscp47;
      this._dscp48 = value.dscp48;
      this._dscp49 = value.dscp49;
      this._dscp5 = value.dscp5;
      this._dscp50 = value.dscp50;
      this._dscp51 = value.dscp51;
      this._dscp52 = value.dscp52;
      this._dscp53 = value.dscp53;
      this._dscp54 = value.dscp54;
      this._dscp55 = value.dscp55;
      this._dscp56 = value.dscp56;
      this._dscp57 = value.dscp57;
      this._dscp58 = value.dscp58;
      this._dscp59 = value.dscp59;
      this._dscp6 = value.dscp6;
      this._dscp60 = value.dscp60;
      this._dscp61 = value.dscp61;
      this._dscp62 = value.dscp62;
      this._dscp63 = value.dscp63;
      this._dscp7 = value.dscp7;
      this._dscp8 = value.dscp8;
      this._dscp9 = value.dscp9;
      this._id = value.id;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // cos0 - computed: true, optional: true, required: false
  private _cos0?: string; 
  public get cos0() {
    return this.getStringAttribute('cos0');
  }
  public set cos0(value: string) {
    this._cos0 = value;
  }
  public resetCos0() {
    this._cos0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos0Input() {
    return this._cos0;
  }

  // cos1 - computed: true, optional: true, required: false
  private _cos1?: string; 
  public get cos1() {
    return this.getStringAttribute('cos1');
  }
  public set cos1(value: string) {
    this._cos1 = value;
  }
  public resetCos1() {
    this._cos1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos1Input() {
    return this._cos1;
  }

  // cos2 - computed: true, optional: true, required: false
  private _cos2?: string; 
  public get cos2() {
    return this.getStringAttribute('cos2');
  }
  public set cos2(value: string) {
    this._cos2 = value;
  }
  public resetCos2() {
    this._cos2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos2Input() {
    return this._cos2;
  }

  // cos3 - computed: true, optional: true, required: false
  private _cos3?: string; 
  public get cos3() {
    return this.getStringAttribute('cos3');
  }
  public set cos3(value: string) {
    this._cos3 = value;
  }
  public resetCos3() {
    this._cos3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos3Input() {
    return this._cos3;
  }

  // cos4 - computed: true, optional: true, required: false
  private _cos4?: string; 
  public get cos4() {
    return this.getStringAttribute('cos4');
  }
  public set cos4(value: string) {
    this._cos4 = value;
  }
  public resetCos4() {
    this._cos4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos4Input() {
    return this._cos4;
  }

  // cos5 - computed: true, optional: true, required: false
  private _cos5?: string; 
  public get cos5() {
    return this.getStringAttribute('cos5');
  }
  public set cos5(value: string) {
    this._cos5 = value;
  }
  public resetCos5() {
    this._cos5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos5Input() {
    return this._cos5;
  }

  // cos6 - computed: true, optional: true, required: false
  private _cos6?: string; 
  public get cos6() {
    return this.getStringAttribute('cos6');
  }
  public set cos6(value: string) {
    this._cos6 = value;
  }
  public resetCos6() {
    this._cos6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos6Input() {
    return this._cos6;
  }

  // cos7 - computed: true, optional: true, required: false
  private _cos7?: string; 
  public get cos7() {
    return this.getStringAttribute('cos7');
  }
  public set cos7(value: string) {
    this._cos7 = value;
  }
  public resetCos7() {
    this._cos7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos7Input() {
    return this._cos7;
  }

  // dscp0 - computed: true, optional: true, required: false
  private _dscp0?: string; 
  public get dscp0() {
    return this.getStringAttribute('dscp0');
  }
  public set dscp0(value: string) {
    this._dscp0 = value;
  }
  public resetDscp0() {
    this._dscp0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp0Input() {
    return this._dscp0;
  }

  // dscp1 - computed: true, optional: true, required: false
  private _dscp1?: string; 
  public get dscp1() {
    return this.getStringAttribute('dscp1');
  }
  public set dscp1(value: string) {
    this._dscp1 = value;
  }
  public resetDscp1() {
    this._dscp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp1Input() {
    return this._dscp1;
  }

  // dscp10 - computed: true, optional: true, required: false
  private _dscp10?: string; 
  public get dscp10() {
    return this.getStringAttribute('dscp10');
  }
  public set dscp10(value: string) {
    this._dscp10 = value;
  }
  public resetDscp10() {
    this._dscp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp10Input() {
    return this._dscp10;
  }

  // dscp11 - computed: true, optional: true, required: false
  private _dscp11?: string; 
  public get dscp11() {
    return this.getStringAttribute('dscp11');
  }
  public set dscp11(value: string) {
    this._dscp11 = value;
  }
  public resetDscp11() {
    this._dscp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp11Input() {
    return this._dscp11;
  }

  // dscp12 - computed: true, optional: true, required: false
  private _dscp12?: string; 
  public get dscp12() {
    return this.getStringAttribute('dscp12');
  }
  public set dscp12(value: string) {
    this._dscp12 = value;
  }
  public resetDscp12() {
    this._dscp12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp12Input() {
    return this._dscp12;
  }

  // dscp13 - computed: true, optional: true, required: false
  private _dscp13?: string; 
  public get dscp13() {
    return this.getStringAttribute('dscp13');
  }
  public set dscp13(value: string) {
    this._dscp13 = value;
  }
  public resetDscp13() {
    this._dscp13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp13Input() {
    return this._dscp13;
  }

  // dscp14 - computed: true, optional: true, required: false
  private _dscp14?: string; 
  public get dscp14() {
    return this.getStringAttribute('dscp14');
  }
  public set dscp14(value: string) {
    this._dscp14 = value;
  }
  public resetDscp14() {
    this._dscp14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp14Input() {
    return this._dscp14;
  }

  // dscp15 - computed: true, optional: true, required: false
  private _dscp15?: string; 
  public get dscp15() {
    return this.getStringAttribute('dscp15');
  }
  public set dscp15(value: string) {
    this._dscp15 = value;
  }
  public resetDscp15() {
    this._dscp15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp15Input() {
    return this._dscp15;
  }

  // dscp16 - computed: true, optional: true, required: false
  private _dscp16?: string; 
  public get dscp16() {
    return this.getStringAttribute('dscp16');
  }
  public set dscp16(value: string) {
    this._dscp16 = value;
  }
  public resetDscp16() {
    this._dscp16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp16Input() {
    return this._dscp16;
  }

  // dscp17 - computed: true, optional: true, required: false
  private _dscp17?: string; 
  public get dscp17() {
    return this.getStringAttribute('dscp17');
  }
  public set dscp17(value: string) {
    this._dscp17 = value;
  }
  public resetDscp17() {
    this._dscp17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp17Input() {
    return this._dscp17;
  }

  // dscp18 - computed: true, optional: true, required: false
  private _dscp18?: string; 
  public get dscp18() {
    return this.getStringAttribute('dscp18');
  }
  public set dscp18(value: string) {
    this._dscp18 = value;
  }
  public resetDscp18() {
    this._dscp18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp18Input() {
    return this._dscp18;
  }

  // dscp19 - computed: true, optional: true, required: false
  private _dscp19?: string; 
  public get dscp19() {
    return this.getStringAttribute('dscp19');
  }
  public set dscp19(value: string) {
    this._dscp19 = value;
  }
  public resetDscp19() {
    this._dscp19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp19Input() {
    return this._dscp19;
  }

  // dscp2 - computed: true, optional: true, required: false
  private _dscp2?: string; 
  public get dscp2() {
    return this.getStringAttribute('dscp2');
  }
  public set dscp2(value: string) {
    this._dscp2 = value;
  }
  public resetDscp2() {
    this._dscp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp2Input() {
    return this._dscp2;
  }

  // dscp20 - computed: true, optional: true, required: false
  private _dscp20?: string; 
  public get dscp20() {
    return this.getStringAttribute('dscp20');
  }
  public set dscp20(value: string) {
    this._dscp20 = value;
  }
  public resetDscp20() {
    this._dscp20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp20Input() {
    return this._dscp20;
  }

  // dscp21 - computed: true, optional: true, required: false
  private _dscp21?: string; 
  public get dscp21() {
    return this.getStringAttribute('dscp21');
  }
  public set dscp21(value: string) {
    this._dscp21 = value;
  }
  public resetDscp21() {
    this._dscp21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp21Input() {
    return this._dscp21;
  }

  // dscp22 - computed: true, optional: true, required: false
  private _dscp22?: string; 
  public get dscp22() {
    return this.getStringAttribute('dscp22');
  }
  public set dscp22(value: string) {
    this._dscp22 = value;
  }
  public resetDscp22() {
    this._dscp22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp22Input() {
    return this._dscp22;
  }

  // dscp23 - computed: true, optional: true, required: false
  private _dscp23?: string; 
  public get dscp23() {
    return this.getStringAttribute('dscp23');
  }
  public set dscp23(value: string) {
    this._dscp23 = value;
  }
  public resetDscp23() {
    this._dscp23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp23Input() {
    return this._dscp23;
  }

  // dscp24 - computed: true, optional: true, required: false
  private _dscp24?: string; 
  public get dscp24() {
    return this.getStringAttribute('dscp24');
  }
  public set dscp24(value: string) {
    this._dscp24 = value;
  }
  public resetDscp24() {
    this._dscp24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp24Input() {
    return this._dscp24;
  }

  // dscp25 - computed: true, optional: true, required: false
  private _dscp25?: string; 
  public get dscp25() {
    return this.getStringAttribute('dscp25');
  }
  public set dscp25(value: string) {
    this._dscp25 = value;
  }
  public resetDscp25() {
    this._dscp25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp25Input() {
    return this._dscp25;
  }

  // dscp26 - computed: true, optional: true, required: false
  private _dscp26?: string; 
  public get dscp26() {
    return this.getStringAttribute('dscp26');
  }
  public set dscp26(value: string) {
    this._dscp26 = value;
  }
  public resetDscp26() {
    this._dscp26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp26Input() {
    return this._dscp26;
  }

  // dscp27 - computed: true, optional: true, required: false
  private _dscp27?: string; 
  public get dscp27() {
    return this.getStringAttribute('dscp27');
  }
  public set dscp27(value: string) {
    this._dscp27 = value;
  }
  public resetDscp27() {
    this._dscp27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp27Input() {
    return this._dscp27;
  }

  // dscp28 - computed: true, optional: true, required: false
  private _dscp28?: string; 
  public get dscp28() {
    return this.getStringAttribute('dscp28');
  }
  public set dscp28(value: string) {
    this._dscp28 = value;
  }
  public resetDscp28() {
    this._dscp28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp28Input() {
    return this._dscp28;
  }

  // dscp29 - computed: true, optional: true, required: false
  private _dscp29?: string; 
  public get dscp29() {
    return this.getStringAttribute('dscp29');
  }
  public set dscp29(value: string) {
    this._dscp29 = value;
  }
  public resetDscp29() {
    this._dscp29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp29Input() {
    return this._dscp29;
  }

  // dscp3 - computed: true, optional: true, required: false
  private _dscp3?: string; 
  public get dscp3() {
    return this.getStringAttribute('dscp3');
  }
  public set dscp3(value: string) {
    this._dscp3 = value;
  }
  public resetDscp3() {
    this._dscp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp3Input() {
    return this._dscp3;
  }

  // dscp30 - computed: true, optional: true, required: false
  private _dscp30?: string; 
  public get dscp30() {
    return this.getStringAttribute('dscp30');
  }
  public set dscp30(value: string) {
    this._dscp30 = value;
  }
  public resetDscp30() {
    this._dscp30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp30Input() {
    return this._dscp30;
  }

  // dscp31 - computed: true, optional: true, required: false
  private _dscp31?: string; 
  public get dscp31() {
    return this.getStringAttribute('dscp31');
  }
  public set dscp31(value: string) {
    this._dscp31 = value;
  }
  public resetDscp31() {
    this._dscp31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp31Input() {
    return this._dscp31;
  }

  // dscp32 - computed: true, optional: true, required: false
  private _dscp32?: string; 
  public get dscp32() {
    return this.getStringAttribute('dscp32');
  }
  public set dscp32(value: string) {
    this._dscp32 = value;
  }
  public resetDscp32() {
    this._dscp32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp32Input() {
    return this._dscp32;
  }

  // dscp33 - computed: true, optional: true, required: false
  private _dscp33?: string; 
  public get dscp33() {
    return this.getStringAttribute('dscp33');
  }
  public set dscp33(value: string) {
    this._dscp33 = value;
  }
  public resetDscp33() {
    this._dscp33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp33Input() {
    return this._dscp33;
  }

  // dscp34 - computed: true, optional: true, required: false
  private _dscp34?: string; 
  public get dscp34() {
    return this.getStringAttribute('dscp34');
  }
  public set dscp34(value: string) {
    this._dscp34 = value;
  }
  public resetDscp34() {
    this._dscp34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp34Input() {
    return this._dscp34;
  }

  // dscp35 - computed: true, optional: true, required: false
  private _dscp35?: string; 
  public get dscp35() {
    return this.getStringAttribute('dscp35');
  }
  public set dscp35(value: string) {
    this._dscp35 = value;
  }
  public resetDscp35() {
    this._dscp35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp35Input() {
    return this._dscp35;
  }

  // dscp36 - computed: true, optional: true, required: false
  private _dscp36?: string; 
  public get dscp36() {
    return this.getStringAttribute('dscp36');
  }
  public set dscp36(value: string) {
    this._dscp36 = value;
  }
  public resetDscp36() {
    this._dscp36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp36Input() {
    return this._dscp36;
  }

  // dscp37 - computed: true, optional: true, required: false
  private _dscp37?: string; 
  public get dscp37() {
    return this.getStringAttribute('dscp37');
  }
  public set dscp37(value: string) {
    this._dscp37 = value;
  }
  public resetDscp37() {
    this._dscp37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp37Input() {
    return this._dscp37;
  }

  // dscp38 - computed: true, optional: true, required: false
  private _dscp38?: string; 
  public get dscp38() {
    return this.getStringAttribute('dscp38');
  }
  public set dscp38(value: string) {
    this._dscp38 = value;
  }
  public resetDscp38() {
    this._dscp38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp38Input() {
    return this._dscp38;
  }

  // dscp39 - computed: true, optional: true, required: false
  private _dscp39?: string; 
  public get dscp39() {
    return this.getStringAttribute('dscp39');
  }
  public set dscp39(value: string) {
    this._dscp39 = value;
  }
  public resetDscp39() {
    this._dscp39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp39Input() {
    return this._dscp39;
  }

  // dscp4 - computed: true, optional: true, required: false
  private _dscp4?: string; 
  public get dscp4() {
    return this.getStringAttribute('dscp4');
  }
  public set dscp4(value: string) {
    this._dscp4 = value;
  }
  public resetDscp4() {
    this._dscp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp4Input() {
    return this._dscp4;
  }

  // dscp40 - computed: true, optional: true, required: false
  private _dscp40?: string; 
  public get dscp40() {
    return this.getStringAttribute('dscp40');
  }
  public set dscp40(value: string) {
    this._dscp40 = value;
  }
  public resetDscp40() {
    this._dscp40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp40Input() {
    return this._dscp40;
  }

  // dscp41 - computed: true, optional: true, required: false
  private _dscp41?: string; 
  public get dscp41() {
    return this.getStringAttribute('dscp41');
  }
  public set dscp41(value: string) {
    this._dscp41 = value;
  }
  public resetDscp41() {
    this._dscp41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp41Input() {
    return this._dscp41;
  }

  // dscp42 - computed: true, optional: true, required: false
  private _dscp42?: string; 
  public get dscp42() {
    return this.getStringAttribute('dscp42');
  }
  public set dscp42(value: string) {
    this._dscp42 = value;
  }
  public resetDscp42() {
    this._dscp42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp42Input() {
    return this._dscp42;
  }

  // dscp43 - computed: true, optional: true, required: false
  private _dscp43?: string; 
  public get dscp43() {
    return this.getStringAttribute('dscp43');
  }
  public set dscp43(value: string) {
    this._dscp43 = value;
  }
  public resetDscp43() {
    this._dscp43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp43Input() {
    return this._dscp43;
  }

  // dscp44 - computed: true, optional: true, required: false
  private _dscp44?: string; 
  public get dscp44() {
    return this.getStringAttribute('dscp44');
  }
  public set dscp44(value: string) {
    this._dscp44 = value;
  }
  public resetDscp44() {
    this._dscp44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp44Input() {
    return this._dscp44;
  }

  // dscp45 - computed: true, optional: true, required: false
  private _dscp45?: string; 
  public get dscp45() {
    return this.getStringAttribute('dscp45');
  }
  public set dscp45(value: string) {
    this._dscp45 = value;
  }
  public resetDscp45() {
    this._dscp45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp45Input() {
    return this._dscp45;
  }

  // dscp46 - computed: true, optional: true, required: false
  private _dscp46?: string; 
  public get dscp46() {
    return this.getStringAttribute('dscp46');
  }
  public set dscp46(value: string) {
    this._dscp46 = value;
  }
  public resetDscp46() {
    this._dscp46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp46Input() {
    return this._dscp46;
  }

  // dscp47 - computed: true, optional: true, required: false
  private _dscp47?: string; 
  public get dscp47() {
    return this.getStringAttribute('dscp47');
  }
  public set dscp47(value: string) {
    this._dscp47 = value;
  }
  public resetDscp47() {
    this._dscp47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp47Input() {
    return this._dscp47;
  }

  // dscp48 - computed: true, optional: true, required: false
  private _dscp48?: string; 
  public get dscp48() {
    return this.getStringAttribute('dscp48');
  }
  public set dscp48(value: string) {
    this._dscp48 = value;
  }
  public resetDscp48() {
    this._dscp48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp48Input() {
    return this._dscp48;
  }

  // dscp49 - computed: true, optional: true, required: false
  private _dscp49?: string; 
  public get dscp49() {
    return this.getStringAttribute('dscp49');
  }
  public set dscp49(value: string) {
    this._dscp49 = value;
  }
  public resetDscp49() {
    this._dscp49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp49Input() {
    return this._dscp49;
  }

  // dscp5 - computed: true, optional: true, required: false
  private _dscp5?: string; 
  public get dscp5() {
    return this.getStringAttribute('dscp5');
  }
  public set dscp5(value: string) {
    this._dscp5 = value;
  }
  public resetDscp5() {
    this._dscp5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp5Input() {
    return this._dscp5;
  }

  // dscp50 - computed: true, optional: true, required: false
  private _dscp50?: string; 
  public get dscp50() {
    return this.getStringAttribute('dscp50');
  }
  public set dscp50(value: string) {
    this._dscp50 = value;
  }
  public resetDscp50() {
    this._dscp50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp50Input() {
    return this._dscp50;
  }

  // dscp51 - computed: true, optional: true, required: false
  private _dscp51?: string; 
  public get dscp51() {
    return this.getStringAttribute('dscp51');
  }
  public set dscp51(value: string) {
    this._dscp51 = value;
  }
  public resetDscp51() {
    this._dscp51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp51Input() {
    return this._dscp51;
  }

  // dscp52 - computed: true, optional: true, required: false
  private _dscp52?: string; 
  public get dscp52() {
    return this.getStringAttribute('dscp52');
  }
  public set dscp52(value: string) {
    this._dscp52 = value;
  }
  public resetDscp52() {
    this._dscp52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp52Input() {
    return this._dscp52;
  }

  // dscp53 - computed: true, optional: true, required: false
  private _dscp53?: string; 
  public get dscp53() {
    return this.getStringAttribute('dscp53');
  }
  public set dscp53(value: string) {
    this._dscp53 = value;
  }
  public resetDscp53() {
    this._dscp53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp53Input() {
    return this._dscp53;
  }

  // dscp54 - computed: true, optional: true, required: false
  private _dscp54?: string; 
  public get dscp54() {
    return this.getStringAttribute('dscp54');
  }
  public set dscp54(value: string) {
    this._dscp54 = value;
  }
  public resetDscp54() {
    this._dscp54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp54Input() {
    return this._dscp54;
  }

  // dscp55 - computed: true, optional: true, required: false
  private _dscp55?: string; 
  public get dscp55() {
    return this.getStringAttribute('dscp55');
  }
  public set dscp55(value: string) {
    this._dscp55 = value;
  }
  public resetDscp55() {
    this._dscp55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp55Input() {
    return this._dscp55;
  }

  // dscp56 - computed: true, optional: true, required: false
  private _dscp56?: string; 
  public get dscp56() {
    return this.getStringAttribute('dscp56');
  }
  public set dscp56(value: string) {
    this._dscp56 = value;
  }
  public resetDscp56() {
    this._dscp56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp56Input() {
    return this._dscp56;
  }

  // dscp57 - computed: true, optional: true, required: false
  private _dscp57?: string; 
  public get dscp57() {
    return this.getStringAttribute('dscp57');
  }
  public set dscp57(value: string) {
    this._dscp57 = value;
  }
  public resetDscp57() {
    this._dscp57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp57Input() {
    return this._dscp57;
  }

  // dscp58 - computed: true, optional: true, required: false
  private _dscp58?: string; 
  public get dscp58() {
    return this.getStringAttribute('dscp58');
  }
  public set dscp58(value: string) {
    this._dscp58 = value;
  }
  public resetDscp58() {
    this._dscp58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp58Input() {
    return this._dscp58;
  }

  // dscp59 - computed: true, optional: true, required: false
  private _dscp59?: string; 
  public get dscp59() {
    return this.getStringAttribute('dscp59');
  }
  public set dscp59(value: string) {
    this._dscp59 = value;
  }
  public resetDscp59() {
    this._dscp59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp59Input() {
    return this._dscp59;
  }

  // dscp6 - computed: true, optional: true, required: false
  private _dscp6?: string; 
  public get dscp6() {
    return this.getStringAttribute('dscp6');
  }
  public set dscp6(value: string) {
    this._dscp6 = value;
  }
  public resetDscp6() {
    this._dscp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp6Input() {
    return this._dscp6;
  }

  // dscp60 - computed: true, optional: true, required: false
  private _dscp60?: string; 
  public get dscp60() {
    return this.getStringAttribute('dscp60');
  }
  public set dscp60(value: string) {
    this._dscp60 = value;
  }
  public resetDscp60() {
    this._dscp60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp60Input() {
    return this._dscp60;
  }

  // dscp61 - computed: true, optional: true, required: false
  private _dscp61?: string; 
  public get dscp61() {
    return this.getStringAttribute('dscp61');
  }
  public set dscp61(value: string) {
    this._dscp61 = value;
  }
  public resetDscp61() {
    this._dscp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp61Input() {
    return this._dscp61;
  }

  // dscp62 - computed: true, optional: true, required: false
  private _dscp62?: string; 
  public get dscp62() {
    return this.getStringAttribute('dscp62');
  }
  public set dscp62(value: string) {
    this._dscp62 = value;
  }
  public resetDscp62() {
    this._dscp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp62Input() {
    return this._dscp62;
  }

  // dscp63 - computed: true, optional: true, required: false
  private _dscp63?: string; 
  public get dscp63() {
    return this.getStringAttribute('dscp63');
  }
  public set dscp63(value: string) {
    this._dscp63 = value;
  }
  public resetDscp63() {
    this._dscp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp63Input() {
    return this._dscp63;
  }

  // dscp7 - computed: true, optional: true, required: false
  private _dscp7?: string; 
  public get dscp7() {
    return this.getStringAttribute('dscp7');
  }
  public set dscp7(value: string) {
    this._dscp7 = value;
  }
  public resetDscp7() {
    this._dscp7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp7Input() {
    return this._dscp7;
  }

  // dscp8 - computed: true, optional: true, required: false
  private _dscp8?: string; 
  public get dscp8() {
    return this.getStringAttribute('dscp8');
  }
  public set dscp8(value: string) {
    this._dscp8 = value;
  }
  public resetDscp8() {
    this._dscp8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp8Input() {
    return this._dscp8;
  }

  // dscp9 - computed: true, optional: true, required: false
  private _dscp9?: string; 
  public get dscp9() {
    return this.getStringAttribute('dscp9');
  }
  public set dscp9(value: string) {
    this._dscp9 = value;
  }
  public resetDscp9() {
    this._dscp9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp9Input() {
    return this._dscp9;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: true, optional: true, required: false
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

export class ObjectSystemNpuNpqueuesProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpqueuesProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpqueuesProfileOutputReference {
    return new ObjectSystemNpuNpqueuesProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpqueuesScheduler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#mode ObjectSystemNpuNpqueues#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#name ObjectSystemNpuNpqueues#name}
  */
  readonly name?: string;
}

export function objectSystemNpuNpqueuesSchedulerToTerraform(struct?: ObjectSystemNpuNpqueuesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectSystemNpuNpqueuesSchedulerToHclTerraform(struct?: ObjectSystemNpuNpqueuesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ObjectSystemNpuNpqueuesSchedulerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpqueuesScheduler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpqueuesScheduler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class ObjectSystemNpuNpqueuesSchedulerList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpqueuesScheduler[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpqueuesSchedulerOutputReference {
    return new ObjectSystemNpuNpqueuesSchedulerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues fortimanager_object_system_npu_npqueues}
*/
export class ObjectSystemNpuNpqueues extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_npqueues";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuNpqueues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuNpqueues to import
  * @param importFromId The id of the existing ObjectSystemNpuNpqueues that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuNpqueues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_npqueues", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_npqueues fortimanager_object_system_npu_npqueues} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuNpqueuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuNpqueuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_npqueues',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._ethernetType.internalValue = config.ethernetType;
    this._ipProtocol.internalValue = config.ipProtocol;
    this._ipService.internalValue = config.ipService;
    this._profile.internalValue = config.profile;
    this._scheduler.internalValue = config.scheduler;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // ethernet_type - computed: false, optional: true, required: false
  private _ethernetType = new ObjectSystemNpuNpqueuesEthernetTypeList(this, "ethernet_type", false);
  public get ethernetType() {
    return this._ethernetType;
  }
  public putEthernetType(value: ObjectSystemNpuNpqueuesEthernetType[] | cdktf.IResolvable) {
    this._ethernetType.internalValue = value;
  }
  public resetEthernetType() {
    this._ethernetType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetTypeInput() {
    return this._ethernetType.internalValue;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol = new ObjectSystemNpuNpqueuesIpProtocolList(this, "ip_protocol", false);
  public get ipProtocol() {
    return this._ipProtocol;
  }
  public putIpProtocol(value: ObjectSystemNpuNpqueuesIpProtocol[] | cdktf.IResolvable) {
    this._ipProtocol.internalValue = value;
  }
  public resetIpProtocol() {
    this._ipProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol.internalValue;
  }

  // ip_service - computed: false, optional: true, required: false
  private _ipService = new ObjectSystemNpuNpqueuesIpServiceList(this, "ip_service", false);
  public get ipService() {
    return this._ipService;
  }
  public putIpService(value: ObjectSystemNpuNpqueuesIpService[] | cdktf.IResolvable) {
    this._ipService.internalValue = value;
  }
  public resetIpService() {
    this._ipService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServiceInput() {
    return this._ipService.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new ObjectSystemNpuNpqueuesProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: ObjectSystemNpuNpqueuesProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new ObjectSystemNpuNpqueuesSchedulerList(this, "scheduler", false);
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: ObjectSystemNpuNpqueuesScheduler[] | cdktf.IResolvable) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ethernet_type: cdktf.listMapper(objectSystemNpuNpqueuesEthernetTypeToTerraform, true)(this._ethernetType.internalValue),
      ip_protocol: cdktf.listMapper(objectSystemNpuNpqueuesIpProtocolToTerraform, true)(this._ipProtocol.internalValue),
      ip_service: cdktf.listMapper(objectSystemNpuNpqueuesIpServiceToTerraform, true)(this._ipService.internalValue),
      profile: cdktf.listMapper(objectSystemNpuNpqueuesProfileToTerraform, true)(this._profile.internalValue),
      scheduler: cdktf.listMapper(objectSystemNpuNpqueuesSchedulerToTerraform, true)(this._scheduler.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_type: {
        value: cdktf.listMapperHcl(objectSystemNpuNpqueuesEthernetTypeToHclTerraform, true)(this._ethernetType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpqueuesEthernetTypeList",
      },
      ip_protocol: {
        value: cdktf.listMapperHcl(objectSystemNpuNpqueuesIpProtocolToHclTerraform, true)(this._ipProtocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpqueuesIpProtocolList",
      },
      ip_service: {
        value: cdktf.listMapperHcl(objectSystemNpuNpqueuesIpServiceToHclTerraform, true)(this._ipService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpqueuesIpServiceList",
      },
      profile: {
        value: cdktf.listMapperHcl(objectSystemNpuNpqueuesProfileToHclTerraform, true)(this._profile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpqueuesProfileList",
      },
      scheduler: {
        value: cdktf.listMapperHcl(objectSystemNpuNpqueuesSchedulerToHclTerraform, true)(this._scheduler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpqueuesSchedulerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
