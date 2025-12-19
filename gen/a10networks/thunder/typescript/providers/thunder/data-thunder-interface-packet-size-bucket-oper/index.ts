// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfacePacketSizeBucketOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#id DataThunderInterfacePacketSizeBucketOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#oper DataThunderInterfacePacketSizeBucketOper#oper}
  */
  readonly oper?: DataThunderInterfacePacketSizeBucketOperOper;
}
export interface DataThunderInterfacePacketSizeBucketOperOperInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#if_type DataThunderInterfacePacketSizeBucketOper#if_type}
  */
  readonly ifType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#port_num DataThunderInterfacePacketSizeBucketOper#port_num}
  */
  readonly portNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts1024to1518_counts DataThunderInterfacePacketSizeBucketOper#rxpkts1024to1518_counts}
  */
  readonly rxpkts1024To1518Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts128to255_counts DataThunderInterfacePacketSizeBucketOper#rxpkts128to255_counts}
  */
  readonly rxpkts128To255Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts1519to2047_counts DataThunderInterfacePacketSizeBucketOper#rxpkts1519to2047_counts}
  */
  readonly rxpkts1519To2047Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts2048to4095_counts DataThunderInterfacePacketSizeBucketOper#rxpkts2048to4095_counts}
  */
  readonly rxpkts2048To4095Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts256to511_counts DataThunderInterfacePacketSizeBucketOper#rxpkts256to511_counts}
  */
  readonly rxpkts256To511Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts4096to9216_counts DataThunderInterfacePacketSizeBucketOper#rxpkts4096to9216_counts}
  */
  readonly rxpkts4096To9216Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts512to1023_counts DataThunderInterfacePacketSizeBucketOper#rxpkts512to1023_counts}
  */
  readonly rxpkts512To1023Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts64_counts DataThunderInterfacePacketSizeBucketOper#rxpkts64_counts}
  */
  readonly rxpkts64Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#rxpkts65to127_counts DataThunderInterfacePacketSizeBucketOper#rxpkts65to127_counts}
  */
  readonly rxpkts65To127Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts1024to1518_counts DataThunderInterfacePacketSizeBucketOper#txpkts1024to1518_counts}
  */
  readonly txpkts1024To1518Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts128to255_counts DataThunderInterfacePacketSizeBucketOper#txpkts128to255_counts}
  */
  readonly txpkts128To255Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts1519to2047_counts DataThunderInterfacePacketSizeBucketOper#txpkts1519to2047_counts}
  */
  readonly txpkts1519To2047Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts2048to4095_counts DataThunderInterfacePacketSizeBucketOper#txpkts2048to4095_counts}
  */
  readonly txpkts2048To4095Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts256to511_counts DataThunderInterfacePacketSizeBucketOper#txpkts256to511_counts}
  */
  readonly txpkts256To511Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts4096to9216_counts DataThunderInterfacePacketSizeBucketOper#txpkts4096to9216_counts}
  */
  readonly txpkts4096To9216Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts512to1023_counts DataThunderInterfacePacketSizeBucketOper#txpkts512to1023_counts}
  */
  readonly txpkts512To1023Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts64_counts DataThunderInterfacePacketSizeBucketOper#txpkts64_counts}
  */
  readonly txpkts64Counts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#txpkts65to127_counts DataThunderInterfacePacketSizeBucketOper#txpkts65to127_counts}
  */
  readonly txpkts65To127Counts?: number;
}

export function dataThunderInterfacePacketSizeBucketOperOperInterfacesToTerraform(struct?: DataThunderInterfacePacketSizeBucketOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_type: cdktf.stringToTerraform(struct!.ifType),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    rxpkts1024to1518_counts: cdktf.numberToTerraform(struct!.rxpkts1024To1518Counts),
    rxpkts128to255_counts: cdktf.numberToTerraform(struct!.rxpkts128To255Counts),
    rxpkts1519to2047_counts: cdktf.numberToTerraform(struct!.rxpkts1519To2047Counts),
    rxpkts2048to4095_counts: cdktf.numberToTerraform(struct!.rxpkts2048To4095Counts),
    rxpkts256to511_counts: cdktf.numberToTerraform(struct!.rxpkts256To511Counts),
    rxpkts4096to9216_counts: cdktf.numberToTerraform(struct!.rxpkts4096To9216Counts),
    rxpkts512to1023_counts: cdktf.numberToTerraform(struct!.rxpkts512To1023Counts),
    rxpkts64_counts: cdktf.numberToTerraform(struct!.rxpkts64Counts),
    rxpkts65to127_counts: cdktf.numberToTerraform(struct!.rxpkts65To127Counts),
    txpkts1024to1518_counts: cdktf.numberToTerraform(struct!.txpkts1024To1518Counts),
    txpkts128to255_counts: cdktf.numberToTerraform(struct!.txpkts128To255Counts),
    txpkts1519to2047_counts: cdktf.numberToTerraform(struct!.txpkts1519To2047Counts),
    txpkts2048to4095_counts: cdktf.numberToTerraform(struct!.txpkts2048To4095Counts),
    txpkts256to511_counts: cdktf.numberToTerraform(struct!.txpkts256To511Counts),
    txpkts4096to9216_counts: cdktf.numberToTerraform(struct!.txpkts4096To9216Counts),
    txpkts512to1023_counts: cdktf.numberToTerraform(struct!.txpkts512To1023Counts),
    txpkts64_counts: cdktf.numberToTerraform(struct!.txpkts64Counts),
    txpkts65to127_counts: cdktf.numberToTerraform(struct!.txpkts65To127Counts),
  }
}


export function dataThunderInterfacePacketSizeBucketOperOperInterfacesToHclTerraform(struct?: DataThunderInterfacePacketSizeBucketOperOperInterfaces | cdktf.IResolvable): any {
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
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts1024to1518_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts1024To1518Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts128to255_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts128To255Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts1519to2047_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts1519To2047Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts2048to4095_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts2048To4095Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts256to511_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts256To511Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts4096to9216_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts4096To9216Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts512to1023_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts512To1023Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts64_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts64Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxpkts65to127_counts: {
      value: cdktf.numberToHclTerraform(struct!.rxpkts65To127Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts1024to1518_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts1024To1518Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts128to255_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts128To255Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts1519to2047_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts1519To2047Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts2048to4095_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts2048To4095Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts256to511_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts256To511Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts4096to9216_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts4096To9216Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts512to1023_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts512To1023Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts64_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts64Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txpkts65to127_counts: {
      value: cdktf.numberToHclTerraform(struct!.txpkts65To127Counts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfacePacketSizeBucketOperOperInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfacePacketSizeBucketOperOperInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifType = this._ifType;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._rxpkts1024To1518Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts1024To1518Counts = this._rxpkts1024To1518Counts;
    }
    if (this._rxpkts128To255Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts128To255Counts = this._rxpkts128To255Counts;
    }
    if (this._rxpkts1519To2047Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts1519To2047Counts = this._rxpkts1519To2047Counts;
    }
    if (this._rxpkts2048To4095Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts2048To4095Counts = this._rxpkts2048To4095Counts;
    }
    if (this._rxpkts256To511Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts256To511Counts = this._rxpkts256To511Counts;
    }
    if (this._rxpkts4096To9216Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts4096To9216Counts = this._rxpkts4096To9216Counts;
    }
    if (this._rxpkts512To1023Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts512To1023Counts = this._rxpkts512To1023Counts;
    }
    if (this._rxpkts64Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts64Counts = this._rxpkts64Counts;
    }
    if (this._rxpkts65To127Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxpkts65To127Counts = this._rxpkts65To127Counts;
    }
    if (this._txpkts1024To1518Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts1024To1518Counts = this._txpkts1024To1518Counts;
    }
    if (this._txpkts128To255Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts128To255Counts = this._txpkts128To255Counts;
    }
    if (this._txpkts1519To2047Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts1519To2047Counts = this._txpkts1519To2047Counts;
    }
    if (this._txpkts2048To4095Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts2048To4095Counts = this._txpkts2048To4095Counts;
    }
    if (this._txpkts256To511Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts256To511Counts = this._txpkts256To511Counts;
    }
    if (this._txpkts4096To9216Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts4096To9216Counts = this._txpkts4096To9216Counts;
    }
    if (this._txpkts512To1023Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts512To1023Counts = this._txpkts512To1023Counts;
    }
    if (this._txpkts64Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts64Counts = this._txpkts64Counts;
    }
    if (this._txpkts65To127Counts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txpkts65To127Counts = this._txpkts65To127Counts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfacePacketSizeBucketOperOperInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifType = undefined;
      this._portNum = undefined;
      this._rxpkts1024To1518Counts = undefined;
      this._rxpkts128To255Counts = undefined;
      this._rxpkts1519To2047Counts = undefined;
      this._rxpkts2048To4095Counts = undefined;
      this._rxpkts256To511Counts = undefined;
      this._rxpkts4096To9216Counts = undefined;
      this._rxpkts512To1023Counts = undefined;
      this._rxpkts64Counts = undefined;
      this._rxpkts65To127Counts = undefined;
      this._txpkts1024To1518Counts = undefined;
      this._txpkts128To255Counts = undefined;
      this._txpkts1519To2047Counts = undefined;
      this._txpkts2048To4095Counts = undefined;
      this._txpkts256To511Counts = undefined;
      this._txpkts4096To9216Counts = undefined;
      this._txpkts512To1023Counts = undefined;
      this._txpkts64Counts = undefined;
      this._txpkts65To127Counts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifType = value.ifType;
      this._portNum = value.portNum;
      this._rxpkts1024To1518Counts = value.rxpkts1024To1518Counts;
      this._rxpkts128To255Counts = value.rxpkts128To255Counts;
      this._rxpkts1519To2047Counts = value.rxpkts1519To2047Counts;
      this._rxpkts2048To4095Counts = value.rxpkts2048To4095Counts;
      this._rxpkts256To511Counts = value.rxpkts256To511Counts;
      this._rxpkts4096To9216Counts = value.rxpkts4096To9216Counts;
      this._rxpkts512To1023Counts = value.rxpkts512To1023Counts;
      this._rxpkts64Counts = value.rxpkts64Counts;
      this._rxpkts65To127Counts = value.rxpkts65To127Counts;
      this._txpkts1024To1518Counts = value.txpkts1024To1518Counts;
      this._txpkts128To255Counts = value.txpkts128To255Counts;
      this._txpkts1519To2047Counts = value.txpkts1519To2047Counts;
      this._txpkts2048To4095Counts = value.txpkts2048To4095Counts;
      this._txpkts256To511Counts = value.txpkts256To511Counts;
      this._txpkts4096To9216Counts = value.txpkts4096To9216Counts;
      this._txpkts512To1023Counts = value.txpkts512To1023Counts;
      this._txpkts64Counts = value.txpkts64Counts;
      this._txpkts65To127Counts = value.txpkts65To127Counts;
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

  // rxpkts1024to1518_counts - computed: false, optional: true, required: false
  private _rxpkts1024To1518Counts?: number; 
  public get rxpkts1024To1518Counts() {
    return this.getNumberAttribute('rxpkts1024to1518_counts');
  }
  public set rxpkts1024To1518Counts(value: number) {
    this._rxpkts1024To1518Counts = value;
  }
  public resetRxpkts1024To1518Counts() {
    this._rxpkts1024To1518Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts1024To1518CountsInput() {
    return this._rxpkts1024To1518Counts;
  }

  // rxpkts128to255_counts - computed: false, optional: true, required: false
  private _rxpkts128To255Counts?: number; 
  public get rxpkts128To255Counts() {
    return this.getNumberAttribute('rxpkts128to255_counts');
  }
  public set rxpkts128To255Counts(value: number) {
    this._rxpkts128To255Counts = value;
  }
  public resetRxpkts128To255Counts() {
    this._rxpkts128To255Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts128To255CountsInput() {
    return this._rxpkts128To255Counts;
  }

  // rxpkts1519to2047_counts - computed: false, optional: true, required: false
  private _rxpkts1519To2047Counts?: number; 
  public get rxpkts1519To2047Counts() {
    return this.getNumberAttribute('rxpkts1519to2047_counts');
  }
  public set rxpkts1519To2047Counts(value: number) {
    this._rxpkts1519To2047Counts = value;
  }
  public resetRxpkts1519To2047Counts() {
    this._rxpkts1519To2047Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts1519To2047CountsInput() {
    return this._rxpkts1519To2047Counts;
  }

  // rxpkts2048to4095_counts - computed: false, optional: true, required: false
  private _rxpkts2048To4095Counts?: number; 
  public get rxpkts2048To4095Counts() {
    return this.getNumberAttribute('rxpkts2048to4095_counts');
  }
  public set rxpkts2048To4095Counts(value: number) {
    this._rxpkts2048To4095Counts = value;
  }
  public resetRxpkts2048To4095Counts() {
    this._rxpkts2048To4095Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts2048To4095CountsInput() {
    return this._rxpkts2048To4095Counts;
  }

  // rxpkts256to511_counts - computed: false, optional: true, required: false
  private _rxpkts256To511Counts?: number; 
  public get rxpkts256To511Counts() {
    return this.getNumberAttribute('rxpkts256to511_counts');
  }
  public set rxpkts256To511Counts(value: number) {
    this._rxpkts256To511Counts = value;
  }
  public resetRxpkts256To511Counts() {
    this._rxpkts256To511Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts256To511CountsInput() {
    return this._rxpkts256To511Counts;
  }

  // rxpkts4096to9216_counts - computed: false, optional: true, required: false
  private _rxpkts4096To9216Counts?: number; 
  public get rxpkts4096To9216Counts() {
    return this.getNumberAttribute('rxpkts4096to9216_counts');
  }
  public set rxpkts4096To9216Counts(value: number) {
    this._rxpkts4096To9216Counts = value;
  }
  public resetRxpkts4096To9216Counts() {
    this._rxpkts4096To9216Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts4096To9216CountsInput() {
    return this._rxpkts4096To9216Counts;
  }

  // rxpkts512to1023_counts - computed: false, optional: true, required: false
  private _rxpkts512To1023Counts?: number; 
  public get rxpkts512To1023Counts() {
    return this.getNumberAttribute('rxpkts512to1023_counts');
  }
  public set rxpkts512To1023Counts(value: number) {
    this._rxpkts512To1023Counts = value;
  }
  public resetRxpkts512To1023Counts() {
    this._rxpkts512To1023Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts512To1023CountsInput() {
    return this._rxpkts512To1023Counts;
  }

  // rxpkts64_counts - computed: false, optional: true, required: false
  private _rxpkts64Counts?: number; 
  public get rxpkts64Counts() {
    return this.getNumberAttribute('rxpkts64_counts');
  }
  public set rxpkts64Counts(value: number) {
    this._rxpkts64Counts = value;
  }
  public resetRxpkts64Counts() {
    this._rxpkts64Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts64CountsInput() {
    return this._rxpkts64Counts;
  }

  // rxpkts65to127_counts - computed: false, optional: true, required: false
  private _rxpkts65To127Counts?: number; 
  public get rxpkts65To127Counts() {
    return this.getNumberAttribute('rxpkts65to127_counts');
  }
  public set rxpkts65To127Counts(value: number) {
    this._rxpkts65To127Counts = value;
  }
  public resetRxpkts65To127Counts() {
    this._rxpkts65To127Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxpkts65To127CountsInput() {
    return this._rxpkts65To127Counts;
  }

  // txpkts1024to1518_counts - computed: false, optional: true, required: false
  private _txpkts1024To1518Counts?: number; 
  public get txpkts1024To1518Counts() {
    return this.getNumberAttribute('txpkts1024to1518_counts');
  }
  public set txpkts1024To1518Counts(value: number) {
    this._txpkts1024To1518Counts = value;
  }
  public resetTxpkts1024To1518Counts() {
    this._txpkts1024To1518Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts1024To1518CountsInput() {
    return this._txpkts1024To1518Counts;
  }

  // txpkts128to255_counts - computed: false, optional: true, required: false
  private _txpkts128To255Counts?: number; 
  public get txpkts128To255Counts() {
    return this.getNumberAttribute('txpkts128to255_counts');
  }
  public set txpkts128To255Counts(value: number) {
    this._txpkts128To255Counts = value;
  }
  public resetTxpkts128To255Counts() {
    this._txpkts128To255Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts128To255CountsInput() {
    return this._txpkts128To255Counts;
  }

  // txpkts1519to2047_counts - computed: false, optional: true, required: false
  private _txpkts1519To2047Counts?: number; 
  public get txpkts1519To2047Counts() {
    return this.getNumberAttribute('txpkts1519to2047_counts');
  }
  public set txpkts1519To2047Counts(value: number) {
    this._txpkts1519To2047Counts = value;
  }
  public resetTxpkts1519To2047Counts() {
    this._txpkts1519To2047Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts1519To2047CountsInput() {
    return this._txpkts1519To2047Counts;
  }

  // txpkts2048to4095_counts - computed: false, optional: true, required: false
  private _txpkts2048To4095Counts?: number; 
  public get txpkts2048To4095Counts() {
    return this.getNumberAttribute('txpkts2048to4095_counts');
  }
  public set txpkts2048To4095Counts(value: number) {
    this._txpkts2048To4095Counts = value;
  }
  public resetTxpkts2048To4095Counts() {
    this._txpkts2048To4095Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts2048To4095CountsInput() {
    return this._txpkts2048To4095Counts;
  }

  // txpkts256to511_counts - computed: false, optional: true, required: false
  private _txpkts256To511Counts?: number; 
  public get txpkts256To511Counts() {
    return this.getNumberAttribute('txpkts256to511_counts');
  }
  public set txpkts256To511Counts(value: number) {
    this._txpkts256To511Counts = value;
  }
  public resetTxpkts256To511Counts() {
    this._txpkts256To511Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts256To511CountsInput() {
    return this._txpkts256To511Counts;
  }

  // txpkts4096to9216_counts - computed: false, optional: true, required: false
  private _txpkts4096To9216Counts?: number; 
  public get txpkts4096To9216Counts() {
    return this.getNumberAttribute('txpkts4096to9216_counts');
  }
  public set txpkts4096To9216Counts(value: number) {
    this._txpkts4096To9216Counts = value;
  }
  public resetTxpkts4096To9216Counts() {
    this._txpkts4096To9216Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts4096To9216CountsInput() {
    return this._txpkts4096To9216Counts;
  }

  // txpkts512to1023_counts - computed: false, optional: true, required: false
  private _txpkts512To1023Counts?: number; 
  public get txpkts512To1023Counts() {
    return this.getNumberAttribute('txpkts512to1023_counts');
  }
  public set txpkts512To1023Counts(value: number) {
    this._txpkts512To1023Counts = value;
  }
  public resetTxpkts512To1023Counts() {
    this._txpkts512To1023Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts512To1023CountsInput() {
    return this._txpkts512To1023Counts;
  }

  // txpkts64_counts - computed: false, optional: true, required: false
  private _txpkts64Counts?: number; 
  public get txpkts64Counts() {
    return this.getNumberAttribute('txpkts64_counts');
  }
  public set txpkts64Counts(value: number) {
    this._txpkts64Counts = value;
  }
  public resetTxpkts64Counts() {
    this._txpkts64Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts64CountsInput() {
    return this._txpkts64Counts;
  }

  // txpkts65to127_counts - computed: false, optional: true, required: false
  private _txpkts65To127Counts?: number; 
  public get txpkts65To127Counts() {
    return this.getNumberAttribute('txpkts65to127_counts');
  }
  public set txpkts65To127Counts(value: number) {
    this._txpkts65To127Counts = value;
  }
  public resetTxpkts65To127Counts() {
    this._txpkts65To127Counts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpkts65To127CountsInput() {
    return this._txpkts65To127Counts;
  }
}

export class DataThunderInterfacePacketSizeBucketOperOperInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfacePacketSizeBucketOperOperInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfacePacketSizeBucketOperOperInterfacesOutputReference {
    return new DataThunderInterfacePacketSizeBucketOperOperInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfacePacketSizeBucketOperOper {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#interfaces DataThunderInterfacePacketSizeBucketOper#interfaces}
  */
  readonly interfaces?: DataThunderInterfacePacketSizeBucketOperOperInterfaces[] | cdktf.IResolvable;
}

export function dataThunderInterfacePacketSizeBucketOperOperToTerraform(struct?: DataThunderInterfacePacketSizeBucketOperOperOutputReference | DataThunderInterfacePacketSizeBucketOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(dataThunderInterfacePacketSizeBucketOperOperInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function dataThunderInterfacePacketSizeBucketOperOperToHclTerraform(struct?: DataThunderInterfacePacketSizeBucketOperOperOutputReference | DataThunderInterfacePacketSizeBucketOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(dataThunderInterfacePacketSizeBucketOperOperInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfacePacketSizeBucketOperOperInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfacePacketSizeBucketOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfacePacketSizeBucketOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfacePacketSizeBucketOperOper | undefined) {
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
  private _interfaces = new DataThunderInterfacePacketSizeBucketOperOperInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataThunderInterfacePacketSizeBucketOperOperInterfaces[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper thunder_interface_packet_size_bucket_oper}
*/
export class DataThunderInterfacePacketSizeBucketOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_packet_size_bucket_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfacePacketSizeBucketOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfacePacketSizeBucketOper to import
  * @param importFromId The id of the existing DataThunderInterfacePacketSizeBucketOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfacePacketSizeBucketOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_packet_size_bucket_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_packet_size_bucket_oper thunder_interface_packet_size_bucket_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfacePacketSizeBucketOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfacePacketSizeBucketOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_packet_size_bucket_oper',
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
  private _oper = new DataThunderInterfacePacketSizeBucketOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfacePacketSizeBucketOperOper) {
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
      oper: dataThunderInterfacePacketSizeBucketOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderInterfacePacketSizeBucketOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfacePacketSizeBucketOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
