// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aggregate bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#aggregate_bandwidth QosProfile#aggregate_bandwidth}
  */
  readonly aggregateBandwidth?: QosProfileAggregateBandwidth;
  /**
  * Class bandwidth type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#class_bandwidth_type QosProfile#class_bandwidth_type}
  */
  readonly classBandwidthType?: QosProfileClassBandwidthType;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#device QosProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#folder QosProfile#folder}
  */
  readonly folder?: string;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#name QosProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#snippet QosProfile#snippet}
  */
  readonly snippet?: string;
}
export interface QosProfileAggregateBandwidth {
  /**
  * guaranteed sending bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_guaranteed QosProfile#egress_guaranteed}
  */
  readonly egressGuaranteed?: number;
  /**
  * max sending bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_max QosProfile#egress_max}
  */
  readonly egressMax?: number;
}

export function qosProfileAggregateBandwidthToTerraform(struct?: QosProfileAggregateBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_guaranteed: cdktf.numberToTerraform(struct!.egressGuaranteed),
    egress_max: cdktf.numberToTerraform(struct!.egressMax),
  }
}


export function qosProfileAggregateBandwidthToHclTerraform(struct?: QosProfileAggregateBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_guaranteed: {
      value: cdktf.numberToHclTerraform(struct!.egressGuaranteed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_max: {
      value: cdktf.numberToHclTerraform(struct!.egressMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileAggregateBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileAggregateBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressGuaranteed !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGuaranteed = this._egressGuaranteed;
    }
    if (this._egressMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMax = this._egressMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileAggregateBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressGuaranteed = undefined;
      this._egressMax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressGuaranteed = value.egressGuaranteed;
      this._egressMax = value.egressMax;
    }
  }

  // egress_guaranteed - computed: false, optional: true, required: false
  private _egressGuaranteed?: number; 
  public get egressGuaranteed() {
    return this.getNumberAttribute('egress_guaranteed');
  }
  public set egressGuaranteed(value: number) {
    this._egressGuaranteed = value;
  }
  public resetEgressGuaranteed() {
    this._egressGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGuaranteedInput() {
    return this._egressGuaranteed;
  }

  // egress_max - computed: false, optional: true, required: false
  private _egressMax?: number; 
  public get egressMax() {
    return this.getNumberAttribute('egress_max');
  }
  public set egressMax(value: number) {
    this._egressMax = value;
  }
  public resetEgressMax() {
    this._egressMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMaxInput() {
    return this._egressMax;
  }
}
export interface QosProfileClassBandwidthTypeMbpsClassClassBandwidth {
  /**
  * guaranteed sending bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_guaranteed QosProfile#egress_guaranteed}
  */
  readonly egressGuaranteed?: number;
  /**
  * max sending bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_max QosProfile#egress_max}
  */
  readonly egressMax?: number;
}

export function qosProfileClassBandwidthTypeMbpsClassClassBandwidthToTerraform(struct?: QosProfileClassBandwidthTypeMbpsClassClassBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_guaranteed: cdktf.numberToTerraform(struct!.egressGuaranteed),
    egress_max: cdktf.numberToTerraform(struct!.egressMax),
  }
}


export function qosProfileClassBandwidthTypeMbpsClassClassBandwidthToHclTerraform(struct?: QosProfileClassBandwidthTypeMbpsClassClassBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_guaranteed: {
      value: cdktf.numberToHclTerraform(struct!.egressGuaranteed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_max: {
      value: cdktf.numberToHclTerraform(struct!.egressMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypeMbpsClassClassBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileClassBandwidthTypeMbpsClassClassBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressGuaranteed !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGuaranteed = this._egressGuaranteed;
    }
    if (this._egressMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMax = this._egressMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypeMbpsClassClassBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressGuaranteed = undefined;
      this._egressMax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressGuaranteed = value.egressGuaranteed;
      this._egressMax = value.egressMax;
    }
  }

  // egress_guaranteed - computed: false, optional: true, required: false
  private _egressGuaranteed?: number; 
  public get egressGuaranteed() {
    return this.getNumberAttribute('egress_guaranteed');
  }
  public set egressGuaranteed(value: number) {
    this._egressGuaranteed = value;
  }
  public resetEgressGuaranteed() {
    this._egressGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGuaranteedInput() {
    return this._egressGuaranteed;
  }

  // egress_max - computed: false, optional: true, required: false
  private _egressMax?: number; 
  public get egressMax() {
    return this.getNumberAttribute('egress_max');
  }
  public set egressMax(value: number) {
    this._egressMax = value;
  }
  public resetEgressMax() {
    this._egressMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMaxInput() {
    return this._egressMax;
  }
}
export interface QosProfileClassBandwidthTypeMbpsClass {
  /**
  * Class bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#class_bandwidth QosProfile#class_bandwidth}
  */
  readonly classBandwidth?: QosProfileClassBandwidthTypeMbpsClassClassBandwidth;
  /**
  * Traffic class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#name QosProfile#name}
  */
  readonly name?: string;
  /**
  * traffic class priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#priority QosProfile#priority}
  */
  readonly priority?: string;
}

export function qosProfileClassBandwidthTypeMbpsClassToTerraform(struct?: QosProfileClassBandwidthTypeMbpsClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_bandwidth: qosProfileClassBandwidthTypeMbpsClassClassBandwidthToTerraform(struct!.classBandwidth),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function qosProfileClassBandwidthTypeMbpsClassToHclTerraform(struct?: QosProfileClassBandwidthTypeMbpsClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_bandwidth: {
      value: qosProfileClassBandwidthTypeMbpsClassClassBandwidthToHclTerraform(struct!.classBandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "QosProfileClassBandwidthTypeMbpsClassClassBandwidth",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypeMbpsClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosProfileClassBandwidthTypeMbpsClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classBandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classBandwidth = this._classBandwidth?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypeMbpsClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classBandwidth.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classBandwidth.internalValue = value.classBandwidth;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // class_bandwidth - computed: false, optional: true, required: false
  private _classBandwidth = new QosProfileClassBandwidthTypeMbpsClassClassBandwidthOutputReference(this, "class_bandwidth");
  public get classBandwidth() {
    return this._classBandwidth;
  }
  public putClassBandwidth(value: QosProfileClassBandwidthTypeMbpsClassClassBandwidth) {
    this._classBandwidth.internalValue = value;
  }
  public resetClassBandwidth() {
    this._classBandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classBandwidthInput() {
    return this._classBandwidth.internalValue;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class QosProfileClassBandwidthTypeMbpsClassList extends cdktf.ComplexList {
  public internalValue? : QosProfileClassBandwidthTypeMbpsClass[] | cdktf.IResolvable

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
  public get(index: number): QosProfileClassBandwidthTypeMbpsClassOutputReference {
    return new QosProfileClassBandwidthTypeMbpsClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosProfileClassBandwidthTypeMbps {
  /**
  * QoS setting for traffic classes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#class QosProfile#class}
  */
  readonly class?: QosProfileClassBandwidthTypeMbpsClass[] | cdktf.IResolvable;
}

export function qosProfileClassBandwidthTypeMbpsToTerraform(struct?: QosProfileClassBandwidthTypeMbps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.listMapper(qosProfileClassBandwidthTypeMbpsClassToTerraform, false)(struct!.class),
  }
}


export function qosProfileClassBandwidthTypeMbpsToHclTerraform(struct?: QosProfileClassBandwidthTypeMbps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.listMapperHcl(qosProfileClassBandwidthTypeMbpsClassToHclTerraform, false)(struct!.class),
      isBlock: true,
      type: "list",
      storageClassType: "QosProfileClassBandwidthTypeMbpsClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypeMbpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileClassBandwidthTypeMbps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypeMbps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class.internalValue = value.class;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class = new QosProfileClassBandwidthTypeMbpsClassList(this, "class", false);
  public get class() {
    return this._class;
  }
  public putClass(value: QosProfileClassBandwidthTypeMbpsClass[] | cdktf.IResolvable) {
    this._class.internalValue = value;
  }
  public resetClass() {
    this._class.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class.internalValue;
  }
}
export interface QosProfileClassBandwidthTypePercentageClassClassBandwidth {
  /**
  * guaranteed sending bandwidth in percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_guaranteed QosProfile#egress_guaranteed}
  */
  readonly egressGuaranteed?: number;
  /**
  * max sending bandwidth in percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#egress_max QosProfile#egress_max}
  */
  readonly egressMax?: number;
}

export function qosProfileClassBandwidthTypePercentageClassClassBandwidthToTerraform(struct?: QosProfileClassBandwidthTypePercentageClassClassBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_guaranteed: cdktf.numberToTerraform(struct!.egressGuaranteed),
    egress_max: cdktf.numberToTerraform(struct!.egressMax),
  }
}


export function qosProfileClassBandwidthTypePercentageClassClassBandwidthToHclTerraform(struct?: QosProfileClassBandwidthTypePercentageClassClassBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_guaranteed: {
      value: cdktf.numberToHclTerraform(struct!.egressGuaranteed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_max: {
      value: cdktf.numberToHclTerraform(struct!.egressMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypePercentageClassClassBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileClassBandwidthTypePercentageClassClassBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressGuaranteed !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGuaranteed = this._egressGuaranteed;
    }
    if (this._egressMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMax = this._egressMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypePercentageClassClassBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressGuaranteed = undefined;
      this._egressMax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressGuaranteed = value.egressGuaranteed;
      this._egressMax = value.egressMax;
    }
  }

  // egress_guaranteed - computed: false, optional: true, required: false
  private _egressGuaranteed?: number; 
  public get egressGuaranteed() {
    return this.getNumberAttribute('egress_guaranteed');
  }
  public set egressGuaranteed(value: number) {
    this._egressGuaranteed = value;
  }
  public resetEgressGuaranteed() {
    this._egressGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGuaranteedInput() {
    return this._egressGuaranteed;
  }

  // egress_max - computed: false, optional: true, required: false
  private _egressMax?: number; 
  public get egressMax() {
    return this.getNumberAttribute('egress_max');
  }
  public set egressMax(value: number) {
    this._egressMax = value;
  }
  public resetEgressMax() {
    this._egressMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMaxInput() {
    return this._egressMax;
  }
}
export interface QosProfileClassBandwidthTypePercentageClass {
  /**
  * Class bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#class_bandwidth QosProfile#class_bandwidth}
  */
  readonly classBandwidth?: QosProfileClassBandwidthTypePercentageClassClassBandwidth;
  /**
  * Traffic class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#name QosProfile#name}
  */
  readonly name?: string;
  /**
  * traffic class priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#priority QosProfile#priority}
  */
  readonly priority?: string;
}

export function qosProfileClassBandwidthTypePercentageClassToTerraform(struct?: QosProfileClassBandwidthTypePercentageClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_bandwidth: qosProfileClassBandwidthTypePercentageClassClassBandwidthToTerraform(struct!.classBandwidth),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function qosProfileClassBandwidthTypePercentageClassToHclTerraform(struct?: QosProfileClassBandwidthTypePercentageClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_bandwidth: {
      value: qosProfileClassBandwidthTypePercentageClassClassBandwidthToHclTerraform(struct!.classBandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "QosProfileClassBandwidthTypePercentageClassClassBandwidth",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypePercentageClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosProfileClassBandwidthTypePercentageClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classBandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classBandwidth = this._classBandwidth?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypePercentageClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classBandwidth.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classBandwidth.internalValue = value.classBandwidth;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // class_bandwidth - computed: false, optional: true, required: false
  private _classBandwidth = new QosProfileClassBandwidthTypePercentageClassClassBandwidthOutputReference(this, "class_bandwidth");
  public get classBandwidth() {
    return this._classBandwidth;
  }
  public putClassBandwidth(value: QosProfileClassBandwidthTypePercentageClassClassBandwidth) {
    this._classBandwidth.internalValue = value;
  }
  public resetClassBandwidth() {
    this._classBandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classBandwidthInput() {
    return this._classBandwidth.internalValue;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class QosProfileClassBandwidthTypePercentageClassList extends cdktf.ComplexList {
  public internalValue? : QosProfileClassBandwidthTypePercentageClass[] | cdktf.IResolvable

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
  public get(index: number): QosProfileClassBandwidthTypePercentageClassOutputReference {
    return new QosProfileClassBandwidthTypePercentageClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosProfileClassBandwidthTypePercentage {
  /**
  * QoS setting for traffic classes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#class QosProfile#class}
  */
  readonly class?: QosProfileClassBandwidthTypePercentageClass[] | cdktf.IResolvable;
}

export function qosProfileClassBandwidthTypePercentageToTerraform(struct?: QosProfileClassBandwidthTypePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.listMapper(qosProfileClassBandwidthTypePercentageClassToTerraform, false)(struct!.class),
  }
}


export function qosProfileClassBandwidthTypePercentageToHclTerraform(struct?: QosProfileClassBandwidthTypePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.listMapperHcl(qosProfileClassBandwidthTypePercentageClassToHclTerraform, false)(struct!.class),
      isBlock: true,
      type: "list",
      storageClassType: "QosProfileClassBandwidthTypePercentageClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileClassBandwidthTypePercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthTypePercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class.internalValue = value.class;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class = new QosProfileClassBandwidthTypePercentageClassList(this, "class", false);
  public get class() {
    return this._class;
  }
  public putClass(value: QosProfileClassBandwidthTypePercentageClass[] | cdktf.IResolvable) {
    this._class.internalValue = value;
  }
  public resetClass() {
    this._class.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class.internalValue;
  }
}
export interface QosProfileClassBandwidthType {
  /**
  * Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#mbps QosProfile#mbps}
  */
  readonly mbps?: QosProfileClassBandwidthTypeMbps;
  /**
  * Percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#percentage QosProfile#percentage}
  */
  readonly percentage?: QosProfileClassBandwidthTypePercentage;
}

export function qosProfileClassBandwidthTypeToTerraform(struct?: QosProfileClassBandwidthType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mbps: qosProfileClassBandwidthTypeMbpsToTerraform(struct!.mbps),
    percentage: qosProfileClassBandwidthTypePercentageToTerraform(struct!.percentage),
  }
}


export function qosProfileClassBandwidthTypeToHclTerraform(struct?: QosProfileClassBandwidthType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mbps: {
      value: qosProfileClassBandwidthTypeMbpsToHclTerraform(struct!.mbps),
      isBlock: true,
      type: "struct",
      storageClassType: "QosProfileClassBandwidthTypeMbps",
    },
    percentage: {
      value: qosProfileClassBandwidthTypePercentageToHclTerraform(struct!.percentage),
      isBlock: true,
      type: "struct",
      storageClassType: "QosProfileClassBandwidthTypePercentage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosProfileClassBandwidthTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosProfileClassBandwidthType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbps = this._mbps?.internalValue;
    }
    if (this._percentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosProfileClassBandwidthType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mbps.internalValue = undefined;
      this._percentage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mbps.internalValue = value.mbps;
      this._percentage.internalValue = value.percentage;
    }
  }

  // mbps - computed: false, optional: true, required: false
  private _mbps = new QosProfileClassBandwidthTypeMbpsOutputReference(this, "mbps");
  public get mbps() {
    return this._mbps;
  }
  public putMbps(value: QosProfileClassBandwidthTypeMbps) {
    this._mbps.internalValue = value;
  }
  public resetMbps() {
    this._mbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsInput() {
    return this._mbps.internalValue;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage = new QosProfileClassBandwidthTypePercentageOutputReference(this, "percentage");
  public get percentage() {
    return this._percentage;
  }
  public putPercentage(value: QosProfileClassBandwidthTypePercentage) {
    this._percentage.internalValue = value;
  }
  public resetPercentage() {
    this._percentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile scm_qos_profile}
*/
export class QosProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_qos_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosProfile to import
  * @param importFromId The id of the existing QosProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_qos_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_profile scm_qos_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosProfileConfig
  */
  public constructor(scope: Construct, id: string, config: QosProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_qos_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateBandwidth.internalValue = config.aggregateBandwidth;
    this._classBandwidthType.internalValue = config.classBandwidthType;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_bandwidth - computed: false, optional: true, required: false
  private _aggregateBandwidth = new QosProfileAggregateBandwidthOutputReference(this, "aggregate_bandwidth");
  public get aggregateBandwidth() {
    return this._aggregateBandwidth;
  }
  public putAggregateBandwidth(value: QosProfileAggregateBandwidth) {
    this._aggregateBandwidth.internalValue = value;
  }
  public resetAggregateBandwidth() {
    this._aggregateBandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateBandwidthInput() {
    return this._aggregateBandwidth.internalValue;
  }

  // class_bandwidth_type - computed: false, optional: true, required: false
  private _classBandwidthType = new QosProfileClassBandwidthTypeOutputReference(this, "class_bandwidth_type");
  public get classBandwidthType() {
    return this._classBandwidthType;
  }
  public putClassBandwidthType(value: QosProfileClassBandwidthType) {
    this._classBandwidthType.internalValue = value;
  }
  public resetClassBandwidthType() {
    this._classBandwidthType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classBandwidthTypeInput() {
    return this._classBandwidthType.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_bandwidth: qosProfileAggregateBandwidthToTerraform(this._aggregateBandwidth.internalValue),
      class_bandwidth_type: qosProfileClassBandwidthTypeToTerraform(this._classBandwidthType.internalValue),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_bandwidth: {
        value: qosProfileAggregateBandwidthToHclTerraform(this._aggregateBandwidth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosProfileAggregateBandwidth",
      },
      class_bandwidth_type: {
        value: qosProfileClassBandwidthTypeToHclTerraform(this._classBandwidthType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosProfileClassBandwidthType",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
