// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceSwitchDropReasonOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#id DataThunderInterfaceSwitchDropReasonOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#oper DataThunderInterfaceSwitchDropReasonOper#oper}
  */
  readonly oper?: DataThunderInterfaceSwitchDropReasonOperOper;
}
export interface DataThunderInterfaceSwitchDropReasonOperOperInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#if_type DataThunderInterfaceSwitchDropReasonOper#if_type}
  */
  readonly ifType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinbitmapzerodrop DataThunderInterfaceSwitchDropReasonOper#ifinbitmapzerodrop}
  */
  readonly ifinbitmapzerodrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinconddrop DataThunderInterfaceSwitchDropReasonOper#ifinconddrop}
  */
  readonly ifinconddrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinerrordrop DataThunderInterfaceSwitchDropReasonOper#ifinerrordrop}
  */
  readonly ifinerrordrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifineventdrop DataThunderInterfaceSwitchDropReasonOper#ifineventdrop}
  */
  readonly ifineventdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinfcsdrop DataThunderInterfaceSwitchDropReasonOper#ifinfcsdrop}
  */
  readonly ifinfcsdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinfilterdrop DataThunderInterfaceSwitchDropReasonOper#ifinfilterdrop}
  */
  readonly ifinfilterdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinfragdrop DataThunderInterfaceSwitchDropReasonOper#ifinfragdrop}
  */
  readonly ifinfragdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinipv4drop DataThunderInterfaceSwitchDropReasonOper#ifinipv4drop}
  */
  readonly ifinipv4Drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinipv6drop DataThunderInterfaceSwitchDropReasonOper#ifinipv6drop}
  */
  readonly ifinipv6Drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinjabberdrop DataThunderInterfaceSwitchDropReasonOper#ifinjabberdrop}
  */
  readonly ifinjabberdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinmcdrop DataThunderInterfaceSwitchDropReasonOper#ifinmcdrop}
  */
  readonly ifinmcdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinmtuexceeddrop DataThunderInterfaceSwitchDropReasonOper#ifinmtuexceeddrop}
  */
  readonly ifinmtuexceeddrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinportdrop DataThunderInterfaceSwitchDropReasonOper#ifinportdrop}
  */
  readonly ifinportdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinqueuedrop DataThunderInterfaceSwitchDropReasonOper#ifinqueuedrop}
  */
  readonly ifinqueuedrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinundersizedrop DataThunderInterfaceSwitchDropReasonOper#ifinundersizedrop}
  */
  readonly ifinundersizedrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifinvlandrop DataThunderInterfaceSwitchDropReasonOper#ifinvlandrop}
  */
  readonly ifinvlandrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutconddrop DataThunderInterfaceSwitchDropReasonOper#ifoutconddrop}
  */
  readonly ifoutconddrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutipv4drop DataThunderInterfaceSwitchDropReasonOper#ifoutipv4drop}
  */
  readonly ifoutipv4Drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutipv6drop DataThunderInterfaceSwitchDropReasonOper#ifoutipv6drop}
  */
  readonly ifoutipv6Drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutmcdrop DataThunderInterfaceSwitchDropReasonOper#ifoutmcdrop}
  */
  readonly ifoutmcdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutparitydrop DataThunderInterfaceSwitchDropReasonOper#ifoutparitydrop}
  */
  readonly ifoutparitydrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutstgdrop DataThunderInterfaceSwitchDropReasonOper#ifoutstgdrop}
  */
  readonly ifoutstgdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifouttnldrop DataThunderInterfaceSwitchDropReasonOper#ifouttnldrop}
  */
  readonly ifouttnldrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#ifoutvlandrop DataThunderInterfaceSwitchDropReasonOper#ifoutvlandrop}
  */
  readonly ifoutvlandrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#port_num DataThunderInterfaceSwitchDropReasonOper#port_num}
  */
  readonly portNum?: number;
}

export function dataThunderInterfaceSwitchDropReasonOperOperInterfacesToTerraform(struct?: DataThunderInterfaceSwitchDropReasonOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_type: cdktf.stringToTerraform(struct!.ifType),
    ifinbitmapzerodrop: cdktf.numberToTerraform(struct!.ifinbitmapzerodrop),
    ifinconddrop: cdktf.numberToTerraform(struct!.ifinconddrop),
    ifinerrordrop: cdktf.numberToTerraform(struct!.ifinerrordrop),
    ifineventdrop: cdktf.numberToTerraform(struct!.ifineventdrop),
    ifinfcsdrop: cdktf.numberToTerraform(struct!.ifinfcsdrop),
    ifinfilterdrop: cdktf.numberToTerraform(struct!.ifinfilterdrop),
    ifinfragdrop: cdktf.numberToTerraform(struct!.ifinfragdrop),
    ifinipv4drop: cdktf.numberToTerraform(struct!.ifinipv4Drop),
    ifinipv6drop: cdktf.numberToTerraform(struct!.ifinipv6Drop),
    ifinjabberdrop: cdktf.numberToTerraform(struct!.ifinjabberdrop),
    ifinmcdrop: cdktf.numberToTerraform(struct!.ifinmcdrop),
    ifinmtuexceeddrop: cdktf.numberToTerraform(struct!.ifinmtuexceeddrop),
    ifinportdrop: cdktf.numberToTerraform(struct!.ifinportdrop),
    ifinqueuedrop: cdktf.numberToTerraform(struct!.ifinqueuedrop),
    ifinundersizedrop: cdktf.numberToTerraform(struct!.ifinundersizedrop),
    ifinvlandrop: cdktf.numberToTerraform(struct!.ifinvlandrop),
    ifoutconddrop: cdktf.numberToTerraform(struct!.ifoutconddrop),
    ifoutipv4drop: cdktf.numberToTerraform(struct!.ifoutipv4Drop),
    ifoutipv6drop: cdktf.numberToTerraform(struct!.ifoutipv6Drop),
    ifoutmcdrop: cdktf.numberToTerraform(struct!.ifoutmcdrop),
    ifoutparitydrop: cdktf.numberToTerraform(struct!.ifoutparitydrop),
    ifoutstgdrop: cdktf.numberToTerraform(struct!.ifoutstgdrop),
    ifouttnldrop: cdktf.numberToTerraform(struct!.ifouttnldrop),
    ifoutvlandrop: cdktf.numberToTerraform(struct!.ifoutvlandrop),
    port_num: cdktf.numberToTerraform(struct!.portNum),
  }
}


export function dataThunderInterfaceSwitchDropReasonOperOperInterfacesToHclTerraform(struct?: DataThunderInterfaceSwitchDropReasonOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_type: {
      value: cdktf.stringToHclTerraform(struct!.ifType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ifinbitmapzerodrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinbitmapzerodrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinconddrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinconddrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinerrordrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinerrordrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifineventdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifineventdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinfcsdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinfcsdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinfilterdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinfilterdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinfragdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinfragdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinipv4drop: {
      value: cdktf.numberToHclTerraform(struct!.ifinipv4Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinipv6drop: {
      value: cdktf.numberToHclTerraform(struct!.ifinipv6Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinjabberdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinjabberdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinmcdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinmcdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinmtuexceeddrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinmtuexceeddrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinportdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinportdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinqueuedrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinqueuedrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinundersizedrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinundersizedrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifinvlandrop: {
      value: cdktf.numberToHclTerraform(struct!.ifinvlandrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutconddrop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutconddrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutipv4drop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutipv4Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutipv6drop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutipv6Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutmcdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutmcdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutparitydrop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutparitydrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutstgdrop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutstgdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifouttnldrop: {
      value: cdktf.numberToHclTerraform(struct!.ifouttnldrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifoutvlandrop: {
      value: cdktf.numberToHclTerraform(struct!.ifoutvlandrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceSwitchDropReasonOperOperInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceSwitchDropReasonOperOperInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifType = this._ifType;
    }
    if (this._ifinbitmapzerodrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinbitmapzerodrop = this._ifinbitmapzerodrop;
    }
    if (this._ifinconddrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinconddrop = this._ifinconddrop;
    }
    if (this._ifinerrordrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinerrordrop = this._ifinerrordrop;
    }
    if (this._ifineventdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifineventdrop = this._ifineventdrop;
    }
    if (this._ifinfcsdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinfcsdrop = this._ifinfcsdrop;
    }
    if (this._ifinfilterdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinfilterdrop = this._ifinfilterdrop;
    }
    if (this._ifinfragdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinfragdrop = this._ifinfragdrop;
    }
    if (this._ifinipv4Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinipv4Drop = this._ifinipv4Drop;
    }
    if (this._ifinipv6Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinipv6Drop = this._ifinipv6Drop;
    }
    if (this._ifinjabberdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinjabberdrop = this._ifinjabberdrop;
    }
    if (this._ifinmcdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinmcdrop = this._ifinmcdrop;
    }
    if (this._ifinmtuexceeddrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinmtuexceeddrop = this._ifinmtuexceeddrop;
    }
    if (this._ifinportdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinportdrop = this._ifinportdrop;
    }
    if (this._ifinqueuedrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinqueuedrop = this._ifinqueuedrop;
    }
    if (this._ifinundersizedrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinundersizedrop = this._ifinundersizedrop;
    }
    if (this._ifinvlandrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifinvlandrop = this._ifinvlandrop;
    }
    if (this._ifoutconddrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutconddrop = this._ifoutconddrop;
    }
    if (this._ifoutipv4Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutipv4Drop = this._ifoutipv4Drop;
    }
    if (this._ifoutipv6Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutipv6Drop = this._ifoutipv6Drop;
    }
    if (this._ifoutmcdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutmcdrop = this._ifoutmcdrop;
    }
    if (this._ifoutparitydrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutparitydrop = this._ifoutparitydrop;
    }
    if (this._ifoutstgdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutstgdrop = this._ifoutstgdrop;
    }
    if (this._ifouttnldrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifouttnldrop = this._ifouttnldrop;
    }
    if (this._ifoutvlandrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifoutvlandrop = this._ifoutvlandrop;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceSwitchDropReasonOperOperInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifType = undefined;
      this._ifinbitmapzerodrop = undefined;
      this._ifinconddrop = undefined;
      this._ifinerrordrop = undefined;
      this._ifineventdrop = undefined;
      this._ifinfcsdrop = undefined;
      this._ifinfilterdrop = undefined;
      this._ifinfragdrop = undefined;
      this._ifinipv4Drop = undefined;
      this._ifinipv6Drop = undefined;
      this._ifinjabberdrop = undefined;
      this._ifinmcdrop = undefined;
      this._ifinmtuexceeddrop = undefined;
      this._ifinportdrop = undefined;
      this._ifinqueuedrop = undefined;
      this._ifinundersizedrop = undefined;
      this._ifinvlandrop = undefined;
      this._ifoutconddrop = undefined;
      this._ifoutipv4Drop = undefined;
      this._ifoutipv6Drop = undefined;
      this._ifoutmcdrop = undefined;
      this._ifoutparitydrop = undefined;
      this._ifoutstgdrop = undefined;
      this._ifouttnldrop = undefined;
      this._ifoutvlandrop = undefined;
      this._portNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifType = value.ifType;
      this._ifinbitmapzerodrop = value.ifinbitmapzerodrop;
      this._ifinconddrop = value.ifinconddrop;
      this._ifinerrordrop = value.ifinerrordrop;
      this._ifineventdrop = value.ifineventdrop;
      this._ifinfcsdrop = value.ifinfcsdrop;
      this._ifinfilterdrop = value.ifinfilterdrop;
      this._ifinfragdrop = value.ifinfragdrop;
      this._ifinipv4Drop = value.ifinipv4Drop;
      this._ifinipv6Drop = value.ifinipv6Drop;
      this._ifinjabberdrop = value.ifinjabberdrop;
      this._ifinmcdrop = value.ifinmcdrop;
      this._ifinmtuexceeddrop = value.ifinmtuexceeddrop;
      this._ifinportdrop = value.ifinportdrop;
      this._ifinqueuedrop = value.ifinqueuedrop;
      this._ifinundersizedrop = value.ifinundersizedrop;
      this._ifinvlandrop = value.ifinvlandrop;
      this._ifoutconddrop = value.ifoutconddrop;
      this._ifoutipv4Drop = value.ifoutipv4Drop;
      this._ifoutipv6Drop = value.ifoutipv6Drop;
      this._ifoutmcdrop = value.ifoutmcdrop;
      this._ifoutparitydrop = value.ifoutparitydrop;
      this._ifoutstgdrop = value.ifoutstgdrop;
      this._ifouttnldrop = value.ifouttnldrop;
      this._ifoutvlandrop = value.ifoutvlandrop;
      this._portNum = value.portNum;
    }
  }

  // if_type - computed: false, optional: true, required: false
  private _ifType?: string; 
  public get ifType() {
    return this.getStringAttribute('if_type');
  }
  public set ifType(value: string) {
    this._ifType = value;
  }
  public resetIfType() {
    this._ifType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTypeInput() {
    return this._ifType;
  }

  // ifinbitmapzerodrop - computed: false, optional: true, required: false
  private _ifinbitmapzerodrop?: number; 
  public get ifinbitmapzerodrop() {
    return this.getNumberAttribute('ifinbitmapzerodrop');
  }
  public set ifinbitmapzerodrop(value: number) {
    this._ifinbitmapzerodrop = value;
  }
  public resetIfinbitmapzerodrop() {
    this._ifinbitmapzerodrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinbitmapzerodropInput() {
    return this._ifinbitmapzerodrop;
  }

  // ifinconddrop - computed: false, optional: true, required: false
  private _ifinconddrop?: number; 
  public get ifinconddrop() {
    return this.getNumberAttribute('ifinconddrop');
  }
  public set ifinconddrop(value: number) {
    this._ifinconddrop = value;
  }
  public resetIfinconddrop() {
    this._ifinconddrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinconddropInput() {
    return this._ifinconddrop;
  }

  // ifinerrordrop - computed: false, optional: true, required: false
  private _ifinerrordrop?: number; 
  public get ifinerrordrop() {
    return this.getNumberAttribute('ifinerrordrop');
  }
  public set ifinerrordrop(value: number) {
    this._ifinerrordrop = value;
  }
  public resetIfinerrordrop() {
    this._ifinerrordrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinerrordropInput() {
    return this._ifinerrordrop;
  }

  // ifineventdrop - computed: false, optional: true, required: false
  private _ifineventdrop?: number; 
  public get ifineventdrop() {
    return this.getNumberAttribute('ifineventdrop');
  }
  public set ifineventdrop(value: number) {
    this._ifineventdrop = value;
  }
  public resetIfineventdrop() {
    this._ifineventdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifineventdropInput() {
    return this._ifineventdrop;
  }

  // ifinfcsdrop - computed: false, optional: true, required: false
  private _ifinfcsdrop?: number; 
  public get ifinfcsdrop() {
    return this.getNumberAttribute('ifinfcsdrop');
  }
  public set ifinfcsdrop(value: number) {
    this._ifinfcsdrop = value;
  }
  public resetIfinfcsdrop() {
    this._ifinfcsdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinfcsdropInput() {
    return this._ifinfcsdrop;
  }

  // ifinfilterdrop - computed: false, optional: true, required: false
  private _ifinfilterdrop?: number; 
  public get ifinfilterdrop() {
    return this.getNumberAttribute('ifinfilterdrop');
  }
  public set ifinfilterdrop(value: number) {
    this._ifinfilterdrop = value;
  }
  public resetIfinfilterdrop() {
    this._ifinfilterdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinfilterdropInput() {
    return this._ifinfilterdrop;
  }

  // ifinfragdrop - computed: false, optional: true, required: false
  private _ifinfragdrop?: number; 
  public get ifinfragdrop() {
    return this.getNumberAttribute('ifinfragdrop');
  }
  public set ifinfragdrop(value: number) {
    this._ifinfragdrop = value;
  }
  public resetIfinfragdrop() {
    this._ifinfragdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinfragdropInput() {
    return this._ifinfragdrop;
  }

  // ifinipv4drop - computed: false, optional: true, required: false
  private _ifinipv4Drop?: number; 
  public get ifinipv4Drop() {
    return this.getNumberAttribute('ifinipv4drop');
  }
  public set ifinipv4Drop(value: number) {
    this._ifinipv4Drop = value;
  }
  public resetIfinipv4Drop() {
    this._ifinipv4Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinipv4DropInput() {
    return this._ifinipv4Drop;
  }

  // ifinipv6drop - computed: false, optional: true, required: false
  private _ifinipv6Drop?: number; 
  public get ifinipv6Drop() {
    return this.getNumberAttribute('ifinipv6drop');
  }
  public set ifinipv6Drop(value: number) {
    this._ifinipv6Drop = value;
  }
  public resetIfinipv6Drop() {
    this._ifinipv6Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinipv6DropInput() {
    return this._ifinipv6Drop;
  }

  // ifinjabberdrop - computed: false, optional: true, required: false
  private _ifinjabberdrop?: number; 
  public get ifinjabberdrop() {
    return this.getNumberAttribute('ifinjabberdrop');
  }
  public set ifinjabberdrop(value: number) {
    this._ifinjabberdrop = value;
  }
  public resetIfinjabberdrop() {
    this._ifinjabberdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinjabberdropInput() {
    return this._ifinjabberdrop;
  }

  // ifinmcdrop - computed: false, optional: true, required: false
  private _ifinmcdrop?: number; 
  public get ifinmcdrop() {
    return this.getNumberAttribute('ifinmcdrop');
  }
  public set ifinmcdrop(value: number) {
    this._ifinmcdrop = value;
  }
  public resetIfinmcdrop() {
    this._ifinmcdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinmcdropInput() {
    return this._ifinmcdrop;
  }

  // ifinmtuexceeddrop - computed: false, optional: true, required: false
  private _ifinmtuexceeddrop?: number; 
  public get ifinmtuexceeddrop() {
    return this.getNumberAttribute('ifinmtuexceeddrop');
  }
  public set ifinmtuexceeddrop(value: number) {
    this._ifinmtuexceeddrop = value;
  }
  public resetIfinmtuexceeddrop() {
    this._ifinmtuexceeddrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinmtuexceeddropInput() {
    return this._ifinmtuexceeddrop;
  }

  // ifinportdrop - computed: false, optional: true, required: false
  private _ifinportdrop?: number; 
  public get ifinportdrop() {
    return this.getNumberAttribute('ifinportdrop');
  }
  public set ifinportdrop(value: number) {
    this._ifinportdrop = value;
  }
  public resetIfinportdrop() {
    this._ifinportdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinportdropInput() {
    return this._ifinportdrop;
  }

  // ifinqueuedrop - computed: false, optional: true, required: false
  private _ifinqueuedrop?: number; 
  public get ifinqueuedrop() {
    return this.getNumberAttribute('ifinqueuedrop');
  }
  public set ifinqueuedrop(value: number) {
    this._ifinqueuedrop = value;
  }
  public resetIfinqueuedrop() {
    this._ifinqueuedrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinqueuedropInput() {
    return this._ifinqueuedrop;
  }

  // ifinundersizedrop - computed: false, optional: true, required: false
  private _ifinundersizedrop?: number; 
  public get ifinundersizedrop() {
    return this.getNumberAttribute('ifinundersizedrop');
  }
  public set ifinundersizedrop(value: number) {
    this._ifinundersizedrop = value;
  }
  public resetIfinundersizedrop() {
    this._ifinundersizedrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinundersizedropInput() {
    return this._ifinundersizedrop;
  }

  // ifinvlandrop - computed: false, optional: true, required: false
  private _ifinvlandrop?: number; 
  public get ifinvlandrop() {
    return this.getNumberAttribute('ifinvlandrop');
  }
  public set ifinvlandrop(value: number) {
    this._ifinvlandrop = value;
  }
  public resetIfinvlandrop() {
    this._ifinvlandrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifinvlandropInput() {
    return this._ifinvlandrop;
  }

  // ifoutconddrop - computed: false, optional: true, required: false
  private _ifoutconddrop?: number; 
  public get ifoutconddrop() {
    return this.getNumberAttribute('ifoutconddrop');
  }
  public set ifoutconddrop(value: number) {
    this._ifoutconddrop = value;
  }
  public resetIfoutconddrop() {
    this._ifoutconddrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutconddropInput() {
    return this._ifoutconddrop;
  }

  // ifoutipv4drop - computed: false, optional: true, required: false
  private _ifoutipv4Drop?: number; 
  public get ifoutipv4Drop() {
    return this.getNumberAttribute('ifoutipv4drop');
  }
  public set ifoutipv4Drop(value: number) {
    this._ifoutipv4Drop = value;
  }
  public resetIfoutipv4Drop() {
    this._ifoutipv4Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutipv4DropInput() {
    return this._ifoutipv4Drop;
  }

  // ifoutipv6drop - computed: false, optional: true, required: false
  private _ifoutipv6Drop?: number; 
  public get ifoutipv6Drop() {
    return this.getNumberAttribute('ifoutipv6drop');
  }
  public set ifoutipv6Drop(value: number) {
    this._ifoutipv6Drop = value;
  }
  public resetIfoutipv6Drop() {
    this._ifoutipv6Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutipv6DropInput() {
    return this._ifoutipv6Drop;
  }

  // ifoutmcdrop - computed: false, optional: true, required: false
  private _ifoutmcdrop?: number; 
  public get ifoutmcdrop() {
    return this.getNumberAttribute('ifoutmcdrop');
  }
  public set ifoutmcdrop(value: number) {
    this._ifoutmcdrop = value;
  }
  public resetIfoutmcdrop() {
    this._ifoutmcdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutmcdropInput() {
    return this._ifoutmcdrop;
  }

  // ifoutparitydrop - computed: false, optional: true, required: false
  private _ifoutparitydrop?: number; 
  public get ifoutparitydrop() {
    return this.getNumberAttribute('ifoutparitydrop');
  }
  public set ifoutparitydrop(value: number) {
    this._ifoutparitydrop = value;
  }
  public resetIfoutparitydrop() {
    this._ifoutparitydrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutparitydropInput() {
    return this._ifoutparitydrop;
  }

  // ifoutstgdrop - computed: false, optional: true, required: false
  private _ifoutstgdrop?: number; 
  public get ifoutstgdrop() {
    return this.getNumberAttribute('ifoutstgdrop');
  }
  public set ifoutstgdrop(value: number) {
    this._ifoutstgdrop = value;
  }
  public resetIfoutstgdrop() {
    this._ifoutstgdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutstgdropInput() {
    return this._ifoutstgdrop;
  }

  // ifouttnldrop - computed: false, optional: true, required: false
  private _ifouttnldrop?: number; 
  public get ifouttnldrop() {
    return this.getNumberAttribute('ifouttnldrop');
  }
  public set ifouttnldrop(value: number) {
    this._ifouttnldrop = value;
  }
  public resetIfouttnldrop() {
    this._ifouttnldrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifouttnldropInput() {
    return this._ifouttnldrop;
  }

  // ifoutvlandrop - computed: false, optional: true, required: false
  private _ifoutvlandrop?: number; 
  public get ifoutvlandrop() {
    return this.getNumberAttribute('ifoutvlandrop');
  }
  public set ifoutvlandrop(value: number) {
    this._ifoutvlandrop = value;
  }
  public resetIfoutvlandrop() {
    this._ifoutvlandrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifoutvlandropInput() {
    return this._ifoutvlandrop;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }
}

export class DataThunderInterfaceSwitchDropReasonOperOperInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceSwitchDropReasonOperOperInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceSwitchDropReasonOperOperInterfacesOutputReference {
    return new DataThunderInterfaceSwitchDropReasonOperOperInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceSwitchDropReasonOperOper {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#interfaces DataThunderInterfaceSwitchDropReasonOper#interfaces}
  */
  readonly interfaces?: DataThunderInterfaceSwitchDropReasonOperOperInterfaces[] | cdktf.IResolvable;
}

export function dataThunderInterfaceSwitchDropReasonOperOperToTerraform(struct?: DataThunderInterfaceSwitchDropReasonOperOperOutputReference | DataThunderInterfaceSwitchDropReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(dataThunderInterfaceSwitchDropReasonOperOperInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function dataThunderInterfaceSwitchDropReasonOperOperToHclTerraform(struct?: DataThunderInterfaceSwitchDropReasonOperOperOutputReference | DataThunderInterfaceSwitchDropReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(dataThunderInterfaceSwitchDropReasonOperOperInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceSwitchDropReasonOperOperInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceSwitchDropReasonOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceSwitchDropReasonOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceSwitchDropReasonOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataThunderInterfaceSwitchDropReasonOperOperInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataThunderInterfaceSwitchDropReasonOperOperInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper thunder_interface_switch_drop_reason_oper}
*/
export class DataThunderInterfaceSwitchDropReasonOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_switch_drop_reason_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceSwitchDropReasonOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceSwitchDropReasonOper to import
  * @param importFromId The id of the existing DataThunderInterfaceSwitchDropReasonOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceSwitchDropReasonOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_switch_drop_reason_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_switch_drop_reason_oper thunder_interface_switch_drop_reason_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceSwitchDropReasonOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceSwitchDropReasonOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_switch_drop_reason_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceSwitchDropReasonOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceSwitchDropReasonOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderInterfaceSwitchDropReasonOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderInterfaceSwitchDropReasonOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceSwitchDropReasonOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
