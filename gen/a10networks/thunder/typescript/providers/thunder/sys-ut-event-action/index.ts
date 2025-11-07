// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delay in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#delay SysUtEventAction#delay}
  */
  readonly delay?: number;
  /**
  * 'send': Test event; 'expect': Expected result; 'wait': Introduce a delay;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#direction SysUtEventAction#direction}
  */
  readonly direction: string;
  /**
  * Packet drop. Only allowed for output spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#drop SysUtEventAction#drop}
  */
  readonly drop?: number;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#event_number SysUtEventAction#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#id SysUtEventAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#template SysUtEventAction#template}
  */
  readonly template?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * ignore_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ignore_validation SysUtEventAction#ignore_validation}
  */
  readonly ignoreValidation?: SysUtEventActionIgnoreValidation;
  /**
  * l1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l1 SysUtEventAction#l1}
  */
  readonly l1?: SysUtEventActionL1;
  /**
  * l2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l2 SysUtEventAction#l2}
  */
  readonly l2?: SysUtEventActionL2;
  /**
  * l3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l3 SysUtEventAction#l3}
  */
  readonly l3?: SysUtEventActionL3;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#tcp SysUtEventAction#tcp}
  */
  readonly tcp?: SysUtEventActionTcp;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#udp SysUtEventAction#udp}
  */
  readonly udp?: SysUtEventActionUdp;
}
export interface SysUtEventActionIgnoreValidation {
  /**
  * Skip validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#all SysUtEventAction#all}
  */
  readonly all?: number;
  /**
  * Dont validate TX descriptor. This includes Tx port, Len & vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l1 SysUtEventAction#l1}
  */
  readonly l1?: number;
  /**
  * Dont validate L2 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l2 SysUtEventAction#l2}
  */
  readonly l2?: number;
  /**
  * Dont validate L3 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l3 SysUtEventAction#l3}
  */
  readonly l3?: number;
  /**
  * Dont validate L4 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#l4 SysUtEventAction#l4}
  */
  readonly l4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
}

export function sysUtEventActionIgnoreValidationToTerraform(struct?: SysUtEventActionIgnoreValidationOutputReference | SysUtEventActionIgnoreValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    l1: cdktf.numberToTerraform(struct!.l1),
    l2: cdktf.numberToTerraform(struct!.l2),
    l3: cdktf.numberToTerraform(struct!.l3),
    l4: cdktf.numberToTerraform(struct!.l4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sysUtEventActionIgnoreValidationToHclTerraform(struct?: SysUtEventActionIgnoreValidationOutputReference | SysUtEventActionIgnoreValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l1: {
      value: cdktf.numberToHclTerraform(struct!.l1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2: {
      value: cdktf.numberToHclTerraform(struct!.l2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3: {
      value: cdktf.numberToHclTerraform(struct!.l3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4: {
      value: cdktf.numberToHclTerraform(struct!.l4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SysUtEventActionIgnoreValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionIgnoreValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._l1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l1 = this._l1;
    }
    if (this._l2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2 = this._l2;
    }
    if (this._l3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3 = this._l3;
    }
    if (this._l4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4 = this._l4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionIgnoreValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._l1 = undefined;
      this._l2 = undefined;
      this._l3 = undefined;
      this._l4 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._l1 = value.l1;
      this._l2 = value.l2;
      this._l3 = value.l3;
      this._l4 = value.l4;
      this._uuid = value.uuid;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // l1 - computed: false, optional: true, required: false
  private _l1?: number; 
  public get l1() {
    return this.getNumberAttribute('l1');
  }
  public set l1(value: number) {
    this._l1 = value;
  }
  public resetL1() {
    this._l1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1Input() {
    return this._l1;
  }

  // l2 - computed: false, optional: true, required: false
  private _l2?: number; 
  public get l2() {
    return this.getNumberAttribute('l2');
  }
  public set l2(value: number) {
    this._l2 = value;
  }
  public resetL2() {
    this._l2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Input() {
    return this._l2;
  }

  // l3 - computed: false, optional: true, required: false
  private _l3?: number; 
  public get l3() {
    return this.getNumberAttribute('l3');
  }
  public set l3(value: number) {
    this._l3 = value;
  }
  public resetL3() {
    this._l3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3Input() {
    return this._l3;
  }

  // l4 - computed: false, optional: true, required: false
  private _l4?: number; 
  public get l4() {
    return this.getNumberAttribute('l4');
  }
  public set l4(value: number) {
    this._l4 = value;
  }
  public resetL4() {
    this._l4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4;
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
export interface SysUtEventActionL1EthListStruct {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ethernet_end SysUtEventAction#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ethernet_start SysUtEventAction#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function sysUtEventActionL1EthListStructToTerraform(struct?: SysUtEventActionL1EthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function sysUtEventActionL1EthListStructToHclTerraform(struct?: SysUtEventActionL1EthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL1EthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysUtEventActionL1EthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL1EthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class SysUtEventActionL1EthListStructList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL1EthListStruct[] | cdktf.IResolvable

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
  public get(index: number): SysUtEventActionL1EthListStructOutputReference {
    return new SysUtEventActionL1EthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysUtEventActionL1TrunkListStruct {
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#trunk_end SysUtEventAction#trunk_end}
  */
  readonly trunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#trunk_start SysUtEventAction#trunk_start}
  */
  readonly trunkStart?: number;
}

export function sysUtEventActionL1TrunkListStructToTerraform(struct?: SysUtEventActionL1TrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk_end: cdktf.numberToTerraform(struct!.trunkEnd),
    trunk_start: cdktf.numberToTerraform(struct!.trunkStart),
  }
}


export function sysUtEventActionL1TrunkListStructToHclTerraform(struct?: SysUtEventActionL1TrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.trunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.trunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL1TrunkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysUtEventActionL1TrunkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkEnd = this._trunkEnd;
    }
    if (this._trunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkStart = this._trunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL1TrunkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunkEnd = undefined;
      this._trunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunkEnd = value.trunkEnd;
      this._trunkStart = value.trunkStart;
    }
  }

  // trunk_end - computed: false, optional: true, required: false
  private _trunkEnd?: number; 
  public get trunkEnd() {
    return this.getNumberAttribute('trunk_end');
  }
  public set trunkEnd(value: number) {
    this._trunkEnd = value;
  }
  public resetTrunkEnd() {
    this._trunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkEndInput() {
    return this._trunkEnd;
  }

  // trunk_start - computed: false, optional: true, required: false
  private _trunkStart?: number; 
  public get trunkStart() {
    return this.getNumberAttribute('trunk_start');
  }
  public set trunkStart(value: number) {
    this._trunkStart = value;
  }
  public resetTrunkStart() {
    this._trunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkStartInput() {
    return this._trunkStart;
  }
}

export class SysUtEventActionL1TrunkListStructList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL1TrunkListStruct[] | cdktf.IResolvable

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
  public get(index: number): SysUtEventActionL1TrunkListStructOutputReference {
    return new SysUtEventActionL1TrunkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysUtEventActionL1 {
  /**
  * Auto calculate pkt len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#auto SysUtEventAction#auto}
  */
  readonly auto?: number;
  /**
  * packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#length SysUtEventAction#length}
  */
  readonly length?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * Total packet length starting at L2 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#value SysUtEventAction#value}
  */
  readonly value?: number;
  /**
  * eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#eth_list SysUtEventAction#eth_list}
  */
  readonly ethList?: SysUtEventActionL1EthListStruct[] | cdktf.IResolvable;
  /**
  * trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#trunk_list SysUtEventAction#trunk_list}
  */
  readonly trunkList?: SysUtEventActionL1TrunkListStruct[] | cdktf.IResolvable;
}

export function sysUtEventActionL1ToTerraform(struct?: SysUtEventActionL1OutputReference | SysUtEventActionL1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.numberToTerraform(struct!.auto),
    length: cdktf.numberToTerraform(struct!.length),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
    eth_list: cdktf.listMapper(sysUtEventActionL1EthListStructToTerraform, true)(struct!.ethList),
    trunk_list: cdktf.listMapper(sysUtEventActionL1TrunkListStructToTerraform, true)(struct!.trunkList),
  }
}


export function sysUtEventActionL1ToHclTerraform(struct?: SysUtEventActionL1OutputReference | SysUtEventActionL1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.numberToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_list: {
      value: cdktf.listMapperHcl(sysUtEventActionL1EthListStructToHclTerraform, true)(struct!.ethList),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionL1EthListStructList",
    },
    trunk_list: {
      value: cdktf.listMapperHcl(sysUtEventActionL1TrunkListStructToHclTerraform, true)(struct!.trunkList),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionL1TrunkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionL1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ethList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethList = this._ethList?.internalValue;
    }
    if (this._trunkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkList = this._trunkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto = undefined;
      this._length = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._ethList.internalValue = undefined;
      this._trunkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto = value.auto;
      this._length = value.length;
      this._uuid = value.uuid;
      this._value = value.value;
      this._ethList.internalValue = value.ethList;
      this._trunkList.internalValue = value.trunkList;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: number; 
  public get auto() {
    return this.getNumberAttribute('auto');
  }
  public set auto(value: number) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // eth_list - computed: false, optional: true, required: false
  private _ethList = new SysUtEventActionL1EthListStructList(this, "eth_list", false);
  public get ethList() {
    return this._ethList;
  }
  public putEthList(value: SysUtEventActionL1EthListStruct[] | cdktf.IResolvable) {
    this._ethList.internalValue = value;
  }
  public resetEthList() {
    this._ethList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethListInput() {
    return this._ethList.internalValue;
  }

  // trunk_list - computed: false, optional: true, required: false
  private _trunkList = new SysUtEventActionL1TrunkListStructList(this, "trunk_list", false);
  public get trunkList() {
    return this._trunkList;
  }
  public putTrunkList(value: SysUtEventActionL1TrunkListStruct[] | cdktf.IResolvable) {
    this._trunkList.internalValue = value;
  }
  public resetTrunkList() {
    this._trunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkListInput() {
    return this._trunkList.internalValue;
  }
}
export interface SysUtEventActionL2MacListStruct {
  /**
  * 'broadcast': broadcast; 'multicast': multicast;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#address_type SysUtEventAction#address_type}
  */
  readonly addressType?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ethernet SysUtEventAction#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#nat_pool SysUtEventAction#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#src_dst SysUtEventAction#src_dst}
  */
  readonly srcDst: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#trunk SysUtEventAction#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * Mac Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#value SysUtEventAction#value}
  */
  readonly value?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ve SysUtEventAction#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#virtual_server SysUtEventAction#virtual_server}
  */
  readonly virtualServer?: string;
}

export function sysUtEventActionL2MacListStructToTerraform(struct?: SysUtEventActionL2MacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    src_dst: cdktf.stringToTerraform(struct!.srcDst),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    ve: cdktf.numberToTerraform(struct!.ve),
    virtual_server: cdktf.stringToTerraform(struct!.virtualServer),
  }
}


export function sysUtEventActionL2MacListStructToHclTerraform(struct?: SysUtEventActionL2MacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dst: {
      value: cdktf.stringToHclTerraform(struct!.srcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.stringToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL2MacListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysUtEventActionL2MacListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._srcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDst = this._srcDst;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL2MacListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ethernet = undefined;
      this._natPool = undefined;
      this._srcDst = undefined;
      this._trunk = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._ve = undefined;
      this._virtualServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ethernet = value.ethernet;
      this._natPool = value.natPool;
      this._srcDst = value.srcDst;
      this._trunk = value.trunk;
      this._uuid = value.uuid;
      this._value = value.value;
      this._ve = value.ve;
      this._virtualServer = value.virtualServer;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // src_dst - computed: false, optional: false, required: true
  private _srcDst?: string; 
  public get srcDst() {
    return this.getStringAttribute('src_dst');
  }
  public set srcDst(value: string) {
    this._srcDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstInput() {
    return this._srcDst;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }
}

export class SysUtEventActionL2MacListStructList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL2MacListStruct[] | cdktf.IResolvable

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
  public get(index: number): SysUtEventActionL2MacListStructOutputReference {
    return new SysUtEventActionL2MacListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysUtEventActionL2 {
  /**
  * L2 frame type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ethertype SysUtEventAction#ethertype}
  */
  readonly ethertype?: number;
  /**
  * 'arp': arp; 'ipv4': ipv4; 'ipv6': ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#protocol SysUtEventAction#protocol}
  */
  readonly protocol?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * ethertype number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#value SysUtEventAction#value}
  */
  readonly value?: number;
  /**
  * Vlan ID on the packet. 0 is untagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#vlan SysUtEventAction#vlan}
  */
  readonly vlan?: number;
  /**
  * mac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#mac_list SysUtEventAction#mac_list}
  */
  readonly macList?: SysUtEventActionL2MacListStruct[] | cdktf.IResolvable;
}

export function sysUtEventActionL2ToTerraform(struct?: SysUtEventActionL2OutputReference | SysUtEventActionL2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethertype: cdktf.numberToTerraform(struct!.ethertype),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    mac_list: cdktf.listMapper(sysUtEventActionL2MacListStructToTerraform, true)(struct!.macList),
  }
}


export function sysUtEventActionL2ToHclTerraform(struct?: SysUtEventActionL2OutputReference | SysUtEventActionL2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethertype: {
      value: cdktf.numberToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_list: {
      value: cdktf.listMapperHcl(sysUtEventActionL2MacListStructToHclTerraform, true)(struct!.macList),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionL2MacListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionL2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._macList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macList = this._macList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethertype = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._vlan = undefined;
      this._macList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethertype = value.ethertype;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
      this._value = value.value;
      this._vlan = value.vlan;
      this._macList.internalValue = value.macList;
    }
  }

  // ethertype - computed: false, optional: true, required: false
  private _ethertype?: number; 
  public get ethertype() {
    return this.getNumberAttribute('ethertype');
  }
  public set ethertype(value: number) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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

  // mac_list - computed: false, optional: true, required: false
  private _macList = new SysUtEventActionL2MacListStructList(this, "mac_list", false);
  public get macList() {
    return this._macList;
  }
  public putMacList(value: SysUtEventActionL2MacListStruct[] | cdktf.IResolvable) {
    this._macList.internalValue = value;
  }
  public resetMacList() {
    this._macList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macListInput() {
    return this._macList.internalValue;
  }
}
export interface SysUtEventActionL3IpListStruct {
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ethernet SysUtEventAction#ethernet}
  */
  readonly ethernet?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ipv4_address SysUtEventAction#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ipv6_address SysUtEventAction#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#nat_pool SysUtEventAction#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#src_dst SysUtEventAction#src_dst}
  */
  readonly srcDst: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#trunk SysUtEventAction#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ve SysUtEventAction#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#virtual_server SysUtEventAction#virtual_server}
  */
  readonly virtualServer?: string;
}

export function sysUtEventActionL3IpListStructToTerraform(struct?: SysUtEventActionL3IpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    src_dst: cdktf.stringToTerraform(struct!.srcDst),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
    virtual_server: cdktf.stringToTerraform(struct!.virtualServer),
  }
}


export function sysUtEventActionL3IpListStructToHclTerraform(struct?: SysUtEventActionL3IpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dst: {
      value: cdktf.stringToHclTerraform(struct!.srcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.stringToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL3IpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysUtEventActionL3IpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._srcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDst = this._srcDst;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL3IpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._natPool = undefined;
      this._srcDst = undefined;
      this._trunk = undefined;
      this._uuid = undefined;
      this._ve = undefined;
      this._virtualServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._natPool = value.natPool;
      this._srcDst = value.srcDst;
      this._trunk = value.trunk;
      this._uuid = value.uuid;
      this._ve = value.ve;
      this._virtualServer = value.virtualServer;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // src_dst - computed: false, optional: false, required: true
  private _srcDst?: string; 
  public get srcDst() {
    return this.getStringAttribute('src_dst');
  }
  public set srcDst(value: string) {
    this._srcDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstInput() {
    return this._srcDst;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }
}

export class SysUtEventActionL3IpListStructList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL3IpListStruct[] | cdktf.IResolvable

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
  public get(index: number): SysUtEventActionL3IpListStructOutputReference {
    return new SysUtEventActionL3IpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysUtEventActionL3 {
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#checksum SysUtEventAction#checksum}
  */
  readonly checksum?: string;
  /**
  * L4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#protocol SysUtEventAction#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ttl SysUtEventAction#ttl}
  */
  readonly ttl?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#type SysUtEventAction#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#value SysUtEventAction#value}
  */
  readonly value?: number;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ip_list SysUtEventAction#ip_list}
  */
  readonly ipList?: SysUtEventActionL3IpListStruct[] | cdktf.IResolvable;
}

export function sysUtEventActionL3ToTerraform(struct?: SysUtEventActionL3OutputReference | SysUtEventActionL3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
    ip_list: cdktf.listMapper(sysUtEventActionL3IpListStructToTerraform, true)(struct!.ipList),
  }
}


export function sysUtEventActionL3ToHclTerraform(struct?: SysUtEventActionL3OutputReference | SysUtEventActionL3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_list: {
      value: cdktf.listMapperHcl(sysUtEventActionL3IpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionL3IpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionL3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._protocol = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._ipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._protocol = value.protocol;
      this._ttl = value.ttl;
      this._type = value.type;
      this._uuid = value.uuid;
      this._value = value.value;
      this._ipList.internalValue = value.ipList;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new SysUtEventActionL3IpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SysUtEventActionL3IpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}
export interface SysUtEventActionTcpFlags {
  /**
  * Ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ack SysUtEventAction#ack}
  */
  readonly ack?: number;
  /**
  * Cwr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#cwr SysUtEventAction#cwr}
  */
  readonly cwr?: number;
  /**
  * Ece
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ece SysUtEventAction#ece}
  */
  readonly ece?: number;
  /**
  * Fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#fin SysUtEventAction#fin}
  */
  readonly fin?: number;
  /**
  * Psh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#psh SysUtEventAction#psh}
  */
  readonly psh?: number;
  /**
  * Rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#rst SysUtEventAction#rst}
  */
  readonly rst?: number;
  /**
  * Syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#syn SysUtEventAction#syn}
  */
  readonly syn?: number;
  /**
  * Urg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#urg SysUtEventAction#urg}
  */
  readonly urg?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
}

export function sysUtEventActionTcpFlagsToTerraform(struct?: SysUtEventActionTcpFlagsOutputReference | SysUtEventActionTcpFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack: cdktf.numberToTerraform(struct!.ack),
    cwr: cdktf.numberToTerraform(struct!.cwr),
    ece: cdktf.numberToTerraform(struct!.ece),
    fin: cdktf.numberToTerraform(struct!.fin),
    psh: cdktf.numberToTerraform(struct!.psh),
    rst: cdktf.numberToTerraform(struct!.rst),
    syn: cdktf.numberToTerraform(struct!.syn),
    urg: cdktf.numberToTerraform(struct!.urg),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sysUtEventActionTcpFlagsToHclTerraform(struct?: SysUtEventActionTcpFlagsOutputReference | SysUtEventActionTcpFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack: {
      value: cdktf.numberToHclTerraform(struct!.ack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cwr: {
      value: cdktf.numberToHclTerraform(struct!.cwr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ece: {
      value: cdktf.numberToHclTerraform(struct!.ece),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fin: {
      value: cdktf.numberToHclTerraform(struct!.fin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    psh: {
      value: cdktf.numberToHclTerraform(struct!.psh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst: {
      value: cdktf.numberToHclTerraform(struct!.rst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn: {
      value: cdktf.numberToHclTerraform(struct!.syn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urg: {
      value: cdktf.numberToHclTerraform(struct!.urg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SysUtEventActionTcpFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionTcpFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ack = this._ack;
    }
    if (this._cwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cwr = this._cwr;
    }
    if (this._ece !== undefined) {
      hasAnyValues = true;
      internalValueResult.ece = this._ece;
    }
    if (this._fin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fin = this._fin;
    }
    if (this._psh !== undefined) {
      hasAnyValues = true;
      internalValueResult.psh = this._psh;
    }
    if (this._rst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rst = this._rst;
    }
    if (this._syn !== undefined) {
      hasAnyValues = true;
      internalValueResult.syn = this._syn;
    }
    if (this._urg !== undefined) {
      hasAnyValues = true;
      internalValueResult.urg = this._urg;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionTcpFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ack = undefined;
      this._cwr = undefined;
      this._ece = undefined;
      this._fin = undefined;
      this._psh = undefined;
      this._rst = undefined;
      this._syn = undefined;
      this._urg = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ack = value.ack;
      this._cwr = value.cwr;
      this._ece = value.ece;
      this._fin = value.fin;
      this._psh = value.psh;
      this._rst = value.rst;
      this._syn = value.syn;
      this._urg = value.urg;
      this._uuid = value.uuid;
    }
  }

  // ack - computed: false, optional: true, required: false
  private _ack?: number; 
  public get ack() {
    return this.getNumberAttribute('ack');
  }
  public set ack(value: number) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // cwr - computed: false, optional: true, required: false
  private _cwr?: number; 
  public get cwr() {
    return this.getNumberAttribute('cwr');
  }
  public set cwr(value: number) {
    this._cwr = value;
  }
  public resetCwr() {
    this._cwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cwrInput() {
    return this._cwr;
  }

  // ece - computed: false, optional: true, required: false
  private _ece?: number; 
  public get ece() {
    return this.getNumberAttribute('ece');
  }
  public set ece(value: number) {
    this._ece = value;
  }
  public resetEce() {
    this._ece = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eceInput() {
    return this._ece;
  }

  // fin - computed: false, optional: true, required: false
  private _fin?: number; 
  public get fin() {
    return this.getNumberAttribute('fin');
  }
  public set fin(value: number) {
    this._fin = value;
  }
  public resetFin() {
    this._fin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finInput() {
    return this._fin;
  }

  // psh - computed: false, optional: true, required: false
  private _psh?: number; 
  public get psh() {
    return this.getNumberAttribute('psh');
  }
  public set psh(value: number) {
    this._psh = value;
  }
  public resetPsh() {
    this._psh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshInput() {
    return this._psh;
  }

  // rst - computed: false, optional: true, required: false
  private _rst?: number; 
  public get rst() {
    return this.getNumberAttribute('rst');
  }
  public set rst(value: number) {
    this._rst = value;
  }
  public resetRst() {
    this._rst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstInput() {
    return this._rst;
  }

  // syn - computed: false, optional: true, required: false
  private _syn?: number; 
  public get syn() {
    return this.getNumberAttribute('syn');
  }
  public set syn(value: number) {
    this._syn = value;
  }
  public resetSyn() {
    this._syn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synInput() {
    return this._syn;
  }

  // urg - computed: false, optional: true, required: false
  private _urg?: number; 
  public get urg() {
    return this.getNumberAttribute('urg');
  }
  public set urg(value: number) {
    this._urg = value;
  }
  public resetUrg() {
    this._urg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgInput() {
    return this._urg;
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
export interface SysUtEventActionTcpOptions {
  /**
  * TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#mss SysUtEventAction#mss}
  */
  readonly mss?: number;
  /**
  * No Op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#nop SysUtEventAction#nop}
  */
  readonly nop?: number;
  /**
  * 'permitted': permitted; 'block': block;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#sack_type SysUtEventAction#sack_type}
  */
  readonly sackType?: string;
  /**
  * adds Time Stamp to options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#time_stamp_enable SysUtEventAction#time_stamp_enable}
  */
  readonly timeStampEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#wscale SysUtEventAction#wscale}
  */
  readonly wscale?: number;
}

export function sysUtEventActionTcpOptionsToTerraform(struct?: SysUtEventActionTcpOptionsOutputReference | SysUtEventActionTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss: cdktf.numberToTerraform(struct!.mss),
    nop: cdktf.numberToTerraform(struct!.nop),
    sack_type: cdktf.stringToTerraform(struct!.sackType),
    time_stamp_enable: cdktf.numberToTerraform(struct!.timeStampEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wscale: cdktf.numberToTerraform(struct!.wscale),
  }
}


export function sysUtEventActionTcpOptionsToHclTerraform(struct?: SysUtEventActionTcpOptionsOutputReference | SysUtEventActionTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nop: {
      value: cdktf.numberToHclTerraform(struct!.nop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_type: {
      value: cdktf.stringToHclTerraform(struct!.sackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_stamp_enable: {
      value: cdktf.numberToHclTerraform(struct!.timeStampEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wscale: {
      value: cdktf.numberToHclTerraform(struct!.wscale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    if (this._nop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nop = this._nop;
    }
    if (this._sackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackType = this._sackType;
    }
    if (this._timeStampEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStampEnable = this._timeStampEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._wscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.wscale = this._wscale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mss = undefined;
      this._nop = undefined;
      this._sackType = undefined;
      this._timeStampEnable = undefined;
      this._uuid = undefined;
      this._wscale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mss = value.mss;
      this._nop = value.nop;
      this._sackType = value.sackType;
      this._timeStampEnable = value.timeStampEnable;
      this._uuid = value.uuid;
      this._wscale = value.wscale;
    }
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // nop - computed: false, optional: true, required: false
  private _nop?: number; 
  public get nop() {
    return this.getNumberAttribute('nop');
  }
  public set nop(value: number) {
    this._nop = value;
  }
  public resetNop() {
    this._nop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nopInput() {
    return this._nop;
  }

  // sack_type - computed: false, optional: true, required: false
  private _sackType?: string; 
  public get sackType() {
    return this.getStringAttribute('sack_type');
  }
  public set sackType(value: string) {
    this._sackType = value;
  }
  public resetSackType() {
    this._sackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackTypeInput() {
    return this._sackType;
  }

  // time_stamp_enable - computed: false, optional: true, required: false
  private _timeStampEnable?: number; 
  public get timeStampEnable() {
    return this.getNumberAttribute('time_stamp_enable');
  }
  public set timeStampEnable(value: number) {
    this._timeStampEnable = value;
  }
  public resetTimeStampEnable() {
    this._timeStampEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampEnableInput() {
    return this._timeStampEnable;
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

  // wscale - computed: false, optional: true, required: false
  private _wscale?: number; 
  public get wscale() {
    return this.getNumberAttribute('wscale');
  }
  public set wscale(value: number) {
    this._wscale = value;
  }
  public resetWscale() {
    this._wscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wscaleInput() {
    return this._wscale;
  }
}
export interface SysUtEventActionTcp {
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#ack_seq_number SysUtEventAction#ack_seq_number}
  */
  readonly ackSeqNumber?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#checksum SysUtEventAction#checksum}
  */
  readonly checksum?: string;
  /**
  * Dest port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#dest_port SysUtEventAction#dest_port}
  */
  readonly destPort?: number;
  /**
  * Dest port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#dest_port_value SysUtEventAction#dest_port_value}
  */
  readonly destPortValue?: number;
  /**
  * Nat pool port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#nat_pool SysUtEventAction#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#seq_number SysUtEventAction#seq_number}
  */
  readonly seqNumber?: string;
  /**
  * Source port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#src_port SysUtEventAction#src_port}
  */
  readonly srcPort?: number;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#urgent SysUtEventAction#urgent}
  */
  readonly urgent?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#window SysUtEventAction#window}
  */
  readonly window?: string;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#flags SysUtEventAction#flags}
  */
  readonly flags?: SysUtEventActionTcpFlags;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#options SysUtEventAction#options}
  */
  readonly options?: SysUtEventActionTcpOptions;
}

export function sysUtEventActionTcpToTerraform(struct?: SysUtEventActionTcpOutputReference | SysUtEventActionTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_seq_number: cdktf.stringToTerraform(struct!.ackSeqNumber),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    dest_port: cdktf.numberToTerraform(struct!.destPort),
    dest_port_value: cdktf.numberToTerraform(struct!.destPortValue),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    seq_number: cdktf.stringToTerraform(struct!.seqNumber),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    urgent: cdktf.stringToTerraform(struct!.urgent),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    window: cdktf.stringToTerraform(struct!.window),
    flags: sysUtEventActionTcpFlagsToTerraform(struct!.flags),
    options: sysUtEventActionTcpOptionsToTerraform(struct!.options),
  }
}


export function sysUtEventActionTcpToHclTerraform(struct?: SysUtEventActionTcpOutputReference | SysUtEventActionTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_seq_number: {
      value: cdktf.stringToHclTerraform(struct!.ackSeqNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_number: {
      value: cdktf.stringToHclTerraform(struct!.seqNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urgent: {
      value: cdktf.stringToHclTerraform(struct!.urgent),
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
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: sysUtEventActionTcpFlagsToHclTerraform(struct!.flags),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionTcpFlagsList",
    },
    options: {
      value: sysUtEventActionTcpOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "SysUtEventActionTcpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackSeqNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackSeqNumber = this._ackSeqNumber;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._destPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPortValue = this._destPortValue;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._seqNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNumber = this._seqNumber;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._urgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgent = this._urgent;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._flags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackSeqNumber = undefined;
      this._checksum = undefined;
      this._destPort = undefined;
      this._destPortValue = undefined;
      this._natPool = undefined;
      this._seqNumber = undefined;
      this._srcPort = undefined;
      this._urgent = undefined;
      this._uuid = undefined;
      this._window = undefined;
      this._flags.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackSeqNumber = value.ackSeqNumber;
      this._checksum = value.checksum;
      this._destPort = value.destPort;
      this._destPortValue = value.destPortValue;
      this._natPool = value.natPool;
      this._seqNumber = value.seqNumber;
      this._srcPort = value.srcPort;
      this._urgent = value.urgent;
      this._uuid = value.uuid;
      this._window = value.window;
      this._flags.internalValue = value.flags;
      this._options.internalValue = value.options;
    }
  }

  // ack_seq_number - computed: false, optional: true, required: false
  private _ackSeqNumber?: string; 
  public get ackSeqNumber() {
    return this.getStringAttribute('ack_seq_number');
  }
  public set ackSeqNumber(value: string) {
    this._ackSeqNumber = value;
  }
  public resetAckSeqNumber() {
    this._ackSeqNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackSeqNumberInput() {
    return this._ackSeqNumber;
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_port_value - computed: false, optional: true, required: false
  private _destPortValue?: number; 
  public get destPortValue() {
    return this.getNumberAttribute('dest_port_value');
  }
  public set destPortValue(value: number) {
    this._destPortValue = value;
  }
  public resetDestPortValue() {
    this._destPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortValueInput() {
    return this._destPortValue;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // seq_number - computed: false, optional: true, required: false
  private _seqNumber?: string; 
  public get seqNumber() {
    return this.getStringAttribute('seq_number');
  }
  public set seqNumber(value: string) {
    this._seqNumber = value;
  }
  public resetSeqNumber() {
    this._seqNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumberInput() {
    return this._seqNumber;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // urgent - computed: false, optional: true, required: false
  private _urgent?: string; 
  public get urgent() {
    return this.getStringAttribute('urgent');
  }
  public set urgent(value: string) {
    this._urgent = value;
  }
  public resetUrgent() {
    this._urgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentInput() {
    return this._urgent;
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

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // flags - computed: false, optional: true, required: false
  private _flags = new SysUtEventActionTcpFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }
  public putFlags(value: SysUtEventActionTcpFlags) {
    this._flags.internalValue = value;
  }
  public resetFlags() {
    this._flags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SysUtEventActionTcpOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SysUtEventActionTcpOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface SysUtEventActionUdp {
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#checksum SysUtEventAction#checksum}
  */
  readonly checksum?: string;
  /**
  * Dest port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#dest_port SysUtEventAction#dest_port}
  */
  readonly destPort?: number;
  /**
  * Dest port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#dest_port_value SysUtEventAction#dest_port_value}
  */
  readonly destPortValue?: number;
  /**
  * Total packet length starting at UDP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#length SysUtEventAction#length}
  */
  readonly length?: number;
  /**
  * Nat pool port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#nat_pool SysUtEventAction#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Source port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#src_port SysUtEventAction#src_port}
  */
  readonly srcPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#uuid SysUtEventAction#uuid}
  */
  readonly uuid?: string;
}

export function sysUtEventActionUdpToTerraform(struct?: SysUtEventActionUdpOutputReference | SysUtEventActionUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    dest_port: cdktf.numberToTerraform(struct!.destPort),
    dest_port_value: cdktf.numberToTerraform(struct!.destPortValue),
    length: cdktf.numberToTerraform(struct!.length),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sysUtEventActionUdpToHclTerraform(struct?: SysUtEventActionUdpOutputReference | SysUtEventActionUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SysUtEventActionUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._destPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPortValue = this._destPortValue;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._destPort = undefined;
      this._destPortValue = undefined;
      this._length = undefined;
      this._natPool = undefined;
      this._srcPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._destPort = value.destPort;
      this._destPortValue = value.destPortValue;
      this._length = value.length;
      this._natPool = value.natPool;
      this._srcPort = value.srcPort;
      this._uuid = value.uuid;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_port_value - computed: false, optional: true, required: false
  private _destPortValue?: number; 
  public get destPortValue() {
    return this.getNumberAttribute('dest_port_value');
  }
  public set destPortValue(value: number) {
    this._destPortValue = value;
  }
  public resetDestPortValue() {
    this._destPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortValueInput() {
    return this._destPortValue;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action thunder_sys_ut_event_action}
*/
export class SysUtEventAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventAction to import
  * @param importFromId The id of the existing SysUtEventAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action thunder_sys_ut_event_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action',
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
    this._delay = config.delay;
    this._direction = config.direction;
    this._drop = config.drop;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._template = config.template;
    this._uuid = config.uuid;
    this._ignoreValidation.internalValue = config.ignoreValidation;
    this._l1.internalValue = config.l1;
    this._l2.internalValue = config.l2;
    this._l3.internalValue = config.l3;
    this._tcp.internalValue = config.tcp;
    this._udp.internalValue = config.udp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // event_number - computed: false, optional: false, required: true
  private _eventNumber?: string; 
  public get eventNumber() {
    return this.getStringAttribute('event_number');
  }
  public set eventNumber(value: string) {
    this._eventNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNumberInput() {
    return this._eventNumber;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // ignore_validation - computed: false, optional: true, required: false
  private _ignoreValidation = new SysUtEventActionIgnoreValidationOutputReference(this, "ignore_validation");
  public get ignoreValidation() {
    return this._ignoreValidation;
  }
  public putIgnoreValidation(value: SysUtEventActionIgnoreValidation) {
    this._ignoreValidation.internalValue = value;
  }
  public resetIgnoreValidation() {
    this._ignoreValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValidationInput() {
    return this._ignoreValidation.internalValue;
  }

  // l1 - computed: false, optional: true, required: false
  private _l1 = new SysUtEventActionL1OutputReference(this, "l1");
  public get l1() {
    return this._l1;
  }
  public putL1(value: SysUtEventActionL1) {
    this._l1.internalValue = value;
  }
  public resetL1() {
    this._l1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1Input() {
    return this._l1.internalValue;
  }

  // l2 - computed: false, optional: true, required: false
  private _l2 = new SysUtEventActionL2OutputReference(this, "l2");
  public get l2() {
    return this._l2;
  }
  public putL2(value: SysUtEventActionL2) {
    this._l2.internalValue = value;
  }
  public resetL2() {
    this._l2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Input() {
    return this._l2.internalValue;
  }

  // l3 - computed: false, optional: true, required: false
  private _l3 = new SysUtEventActionL3OutputReference(this, "l3");
  public get l3() {
    return this._l3;
  }
  public putL3(value: SysUtEventActionL3) {
    this._l3.internalValue = value;
  }
  public resetL3() {
    this._l3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3Input() {
    return this._l3.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new SysUtEventActionTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: SysUtEventActionTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new SysUtEventActionUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: SysUtEventActionUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.numberToTerraform(this._delay),
      direction: cdktf.stringToTerraform(this._direction),
      drop: cdktf.numberToTerraform(this._drop),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      template: cdktf.stringToTerraform(this._template),
      uuid: cdktf.stringToTerraform(this._uuid),
      ignore_validation: sysUtEventActionIgnoreValidationToTerraform(this._ignoreValidation.internalValue),
      l1: sysUtEventActionL1ToTerraform(this._l1.internalValue),
      l2: sysUtEventActionL2ToTerraform(this._l2.internalValue),
      l3: sysUtEventActionL3ToTerraform(this._l3.internalValue),
      tcp: sysUtEventActionTcpToTerraform(this._tcp.internalValue),
      udp: sysUtEventActionUdpToTerraform(this._udp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.numberToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
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
      ignore_validation: {
        value: sysUtEventActionIgnoreValidationToHclTerraform(this._ignoreValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionIgnoreValidationList",
      },
      l1: {
        value: sysUtEventActionL1ToHclTerraform(this._l1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL1List",
      },
      l2: {
        value: sysUtEventActionL2ToHclTerraform(this._l2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL2List",
      },
      l3: {
        value: sysUtEventActionL3ToHclTerraform(this._l3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL3List",
      },
      tcp: {
        value: sysUtEventActionTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionTcpList",
      },
      udp: {
        value: sysUtEventActionUdpToHclTerraform(this._udp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionUdpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
