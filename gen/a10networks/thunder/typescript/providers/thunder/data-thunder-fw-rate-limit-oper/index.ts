// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwRateLimitOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#id DataThunderFwRateLimitOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#oper DataThunderFwRateLimitOper#oper}
  */
  readonly oper?: DataThunderFwRateLimitOperOper;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#summary DataThunderFwRateLimitOper#summary}
  */
  readonly summary?: DataThunderFwRateLimitOperSummary;
}
export interface DataThunderFwRateLimitOperOperRateLimitListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#address DataThunderFwRateLimitOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#cps_allowed DataThunderFwRateLimitOper#cps_allowed}
  */
  readonly cpsAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#cps_received DataThunderFwRateLimitOper#cps_received}
  */
  readonly cpsReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#downlink_traffic_allowed DataThunderFwRateLimitOper#downlink_traffic_allowed}
  */
  readonly downlinkTrafficAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#downlink_traffic_received DataThunderFwRateLimitOper#downlink_traffic_received}
  */
  readonly downlinkTrafficReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#drop_count DataThunderFwRateLimitOper#drop_count}
  */
  readonly dropCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#prefix_len DataThunderFwRateLimitOper#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#rule_name DataThunderFwRateLimitOper#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#template_id DataThunderFwRateLimitOper#template_id}
  */
  readonly templateId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_traffic_allowed DataThunderFwRateLimitOper#total_traffic_allowed}
  */
  readonly totalTrafficAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_traffic_received DataThunderFwRateLimitOper#total_traffic_received}
  */
  readonly totalTrafficReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#type DataThunderFwRateLimitOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#uplink_traffic_allowed DataThunderFwRateLimitOper#uplink_traffic_allowed}
  */
  readonly uplinkTrafficAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#uplink_traffic_received DataThunderFwRateLimitOper#uplink_traffic_received}
  */
  readonly uplinkTrafficReceived?: number;
}

export function dataThunderFwRateLimitOperOperRateLimitListStructToTerraform(struct?: DataThunderFwRateLimitOperOperRateLimitListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cps_allowed: cdktf.numberToTerraform(struct!.cpsAllowed),
    cps_received: cdktf.numberToTerraform(struct!.cpsReceived),
    downlink_traffic_allowed: cdktf.numberToTerraform(struct!.downlinkTrafficAllowed),
    downlink_traffic_received: cdktf.numberToTerraform(struct!.downlinkTrafficReceived),
    drop_count: cdktf.numberToTerraform(struct!.dropCount),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    template_id: cdktf.numberToTerraform(struct!.templateId),
    total_traffic_allowed: cdktf.numberToTerraform(struct!.totalTrafficAllowed),
    total_traffic_received: cdktf.numberToTerraform(struct!.totalTrafficReceived),
    type: cdktf.stringToTerraform(struct!.type),
    uplink_traffic_allowed: cdktf.numberToTerraform(struct!.uplinkTrafficAllowed),
    uplink_traffic_received: cdktf.numberToTerraform(struct!.uplinkTrafficReceived),
  }
}


export function dataThunderFwRateLimitOperOperRateLimitListStructToHclTerraform(struct?: DataThunderFwRateLimitOperOperRateLimitListStruct | cdktf.IResolvable): any {
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
    cps_allowed: {
      value: cdktf.numberToHclTerraform(struct!.cpsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cps_received: {
      value: cdktf.numberToHclTerraform(struct!.cpsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_traffic_allowed: {
      value: cdktf.numberToHclTerraform(struct!.downlinkTrafficAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_traffic_received: {
      value: cdktf.numberToHclTerraform(struct!.downlinkTrafficReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_count: {
      value: cdktf.numberToHclTerraform(struct!.dropCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.numberToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_traffic_allowed: {
      value: cdktf.numberToHclTerraform(struct!.totalTrafficAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_traffic_received: {
      value: cdktf.numberToHclTerraform(struct!.totalTrafficReceived),
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
    uplink_traffic_allowed: {
      value: cdktf.numberToHclTerraform(struct!.uplinkTrafficAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_traffic_received: {
      value: cdktf.numberToHclTerraform(struct!.uplinkTrafficReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitOperOperRateLimitListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwRateLimitOperOperRateLimitListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cpsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsAllowed = this._cpsAllowed;
    }
    if (this._cpsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsReceived = this._cpsReceived;
    }
    if (this._downlinkTrafficAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkTrafficAllowed = this._downlinkTrafficAllowed;
    }
    if (this._downlinkTrafficReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkTrafficReceived = this._downlinkTrafficReceived;
    }
    if (this._dropCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCount = this._dropCount;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._totalTrafficAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTrafficAllowed = this._totalTrafficAllowed;
    }
    if (this._totalTrafficReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTrafficReceived = this._totalTrafficReceived;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uplinkTrafficAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkTrafficAllowed = this._uplinkTrafficAllowed;
    }
    if (this._uplinkTrafficReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkTrafficReceived = this._uplinkTrafficReceived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitOperOperRateLimitListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cpsAllowed = undefined;
      this._cpsReceived = undefined;
      this._downlinkTrafficAllowed = undefined;
      this._downlinkTrafficReceived = undefined;
      this._dropCount = undefined;
      this._prefixLen = undefined;
      this._ruleName = undefined;
      this._templateId = undefined;
      this._totalTrafficAllowed = undefined;
      this._totalTrafficReceived = undefined;
      this._type = undefined;
      this._uplinkTrafficAllowed = undefined;
      this._uplinkTrafficReceived = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cpsAllowed = value.cpsAllowed;
      this._cpsReceived = value.cpsReceived;
      this._downlinkTrafficAllowed = value.downlinkTrafficAllowed;
      this._downlinkTrafficReceived = value.downlinkTrafficReceived;
      this._dropCount = value.dropCount;
      this._prefixLen = value.prefixLen;
      this._ruleName = value.ruleName;
      this._templateId = value.templateId;
      this._totalTrafficAllowed = value.totalTrafficAllowed;
      this._totalTrafficReceived = value.totalTrafficReceived;
      this._type = value.type;
      this._uplinkTrafficAllowed = value.uplinkTrafficAllowed;
      this._uplinkTrafficReceived = value.uplinkTrafficReceived;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cps_allowed - computed: false, optional: true, required: false
  private _cpsAllowed?: number; 
  public get cpsAllowed() {
    return this.getNumberAttribute('cps_allowed');
  }
  public set cpsAllowed(value: number) {
    this._cpsAllowed = value;
  }
  public resetCpsAllowed() {
    this._cpsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsAllowedInput() {
    return this._cpsAllowed;
  }

  // cps_received - computed: false, optional: true, required: false
  private _cpsReceived?: number; 
  public get cpsReceived() {
    return this.getNumberAttribute('cps_received');
  }
  public set cpsReceived(value: number) {
    this._cpsReceived = value;
  }
  public resetCpsReceived() {
    this._cpsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsReceivedInput() {
    return this._cpsReceived;
  }

  // downlink_traffic_allowed - computed: false, optional: true, required: false
  private _downlinkTrafficAllowed?: number; 
  public get downlinkTrafficAllowed() {
    return this.getNumberAttribute('downlink_traffic_allowed');
  }
  public set downlinkTrafficAllowed(value: number) {
    this._downlinkTrafficAllowed = value;
  }
  public resetDownlinkTrafficAllowed() {
    this._downlinkTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkTrafficAllowedInput() {
    return this._downlinkTrafficAllowed;
  }

  // downlink_traffic_received - computed: false, optional: true, required: false
  private _downlinkTrafficReceived?: number; 
  public get downlinkTrafficReceived() {
    return this.getNumberAttribute('downlink_traffic_received');
  }
  public set downlinkTrafficReceived(value: number) {
    this._downlinkTrafficReceived = value;
  }
  public resetDownlinkTrafficReceived() {
    this._downlinkTrafficReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkTrafficReceivedInput() {
    return this._downlinkTrafficReceived;
  }

  // drop_count - computed: false, optional: true, required: false
  private _dropCount?: number; 
  public get dropCount() {
    return this.getNumberAttribute('drop_count');
  }
  public set dropCount(value: number) {
    this._dropCount = value;
  }
  public resetDropCount() {
    this._dropCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCountInput() {
    return this._dropCount;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // total_traffic_allowed - computed: false, optional: true, required: false
  private _totalTrafficAllowed?: number; 
  public get totalTrafficAllowed() {
    return this.getNumberAttribute('total_traffic_allowed');
  }
  public set totalTrafficAllowed(value: number) {
    this._totalTrafficAllowed = value;
  }
  public resetTotalTrafficAllowed() {
    this._totalTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTrafficAllowedInput() {
    return this._totalTrafficAllowed;
  }

  // total_traffic_received - computed: false, optional: true, required: false
  private _totalTrafficReceived?: number; 
  public get totalTrafficReceived() {
    return this.getNumberAttribute('total_traffic_received');
  }
  public set totalTrafficReceived(value: number) {
    this._totalTrafficReceived = value;
  }
  public resetTotalTrafficReceived() {
    this._totalTrafficReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTrafficReceivedInput() {
    return this._totalTrafficReceived;
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

  // uplink_traffic_allowed - computed: false, optional: true, required: false
  private _uplinkTrafficAllowed?: number; 
  public get uplinkTrafficAllowed() {
    return this.getNumberAttribute('uplink_traffic_allowed');
  }
  public set uplinkTrafficAllowed(value: number) {
    this._uplinkTrafficAllowed = value;
  }
  public resetUplinkTrafficAllowed() {
    this._uplinkTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTrafficAllowedInput() {
    return this._uplinkTrafficAllowed;
  }

  // uplink_traffic_received - computed: false, optional: true, required: false
  private _uplinkTrafficReceived?: number; 
  public get uplinkTrafficReceived() {
    return this.getNumberAttribute('uplink_traffic_received');
  }
  public set uplinkTrafficReceived(value: number) {
    this._uplinkTrafficReceived = value;
  }
  public resetUplinkTrafficReceived() {
    this._uplinkTrafficReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTrafficReceivedInput() {
    return this._uplinkTrafficReceived;
  }
}

export class DataThunderFwRateLimitOperOperRateLimitListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwRateLimitOperOperRateLimitListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwRateLimitOperOperRateLimitListStructOutputReference {
    return new DataThunderFwRateLimitOperOperRateLimitListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwRateLimitOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#template_id DataThunderFwRateLimitOper#template_id}
  */
  readonly templateId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#v4_address DataThunderFwRateLimitOper#v4_address}
  */
  readonly v4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#v4_netmask DataThunderFwRateLimitOper#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#v6_prefix DataThunderFwRateLimitOper#v6_prefix}
  */
  readonly v6Prefix?: string;
  /**
  * rate_limit_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#rate_limit_list DataThunderFwRateLimitOper#rate_limit_list}
  */
  readonly rateLimitList?: DataThunderFwRateLimitOperOperRateLimitListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwRateLimitOperOperToTerraform(struct?: DataThunderFwRateLimitOperOperOutputReference | DataThunderFwRateLimitOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_id: cdktf.numberToTerraform(struct!.templateId),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
    v4_netmask: cdktf.stringToTerraform(struct!.v4Netmask),
    v6_prefix: cdktf.stringToTerraform(struct!.v6Prefix),
    rate_limit_list: cdktf.listMapper(dataThunderFwRateLimitOperOperRateLimitListStructToTerraform, true)(struct!.rateLimitList),
  }
}


export function dataThunderFwRateLimitOperOperToHclTerraform(struct?: DataThunderFwRateLimitOperOperOutputReference | DataThunderFwRateLimitOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_id: {
      value: cdktf.numberToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_address: {
      value: cdktf.stringToHclTerraform(struct!.v4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.v4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.v6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_list: {
      value: cdktf.listMapperHcl(dataThunderFwRateLimitOperOperRateLimitListStructToHclTerraform, true)(struct!.rateLimitList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwRateLimitOperOperRateLimitListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwRateLimitOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    if (this._v4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Netmask = this._v4Netmask;
    }
    if (this._v6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Prefix = this._v6Prefix;
    }
    if (this._rateLimitList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitList = this._rateLimitList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateId = undefined;
      this._v4Address = undefined;
      this._v4Netmask = undefined;
      this._v6Prefix = undefined;
      this._rateLimitList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateId = value.templateId;
      this._v4Address = value.v4Address;
      this._v4Netmask = value.v4Netmask;
      this._v6Prefix = value.v6Prefix;
      this._rateLimitList.internalValue = value.rateLimitList;
    }
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // v4_address - computed: false, optional: true, required: false
  private _v4Address?: string; 
  public get v4Address() {
    return this.getStringAttribute('v4_address');
  }
  public set v4Address(value: string) {
    this._v4Address = value;
  }
  public resetV4Address() {
    this._v4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AddressInput() {
    return this._v4Address;
  }

  // v4_netmask - computed: false, optional: true, required: false
  private _v4Netmask?: string; 
  public get v4Netmask() {
    return this.getStringAttribute('v4_netmask');
  }
  public set v4Netmask(value: string) {
    this._v4Netmask = value;
  }
  public resetV4Netmask() {
    this._v4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4NetmaskInput() {
    return this._v4Netmask;
  }

  // v6_prefix - computed: false, optional: true, required: false
  private _v6Prefix?: string; 
  public get v6Prefix() {
    return this.getStringAttribute('v6_prefix');
  }
  public set v6Prefix(value: string) {
    this._v6Prefix = value;
  }
  public resetV6Prefix() {
    this._v6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PrefixInput() {
    return this._v6Prefix;
  }

  // rate_limit_list - computed: false, optional: true, required: false
  private _rateLimitList = new DataThunderFwRateLimitOperOperRateLimitListStructList(this, "rate_limit_list", false);
  public get rateLimitList() {
    return this._rateLimitList;
  }
  public putRateLimitList(value: DataThunderFwRateLimitOperOperRateLimitListStruct[] | cdktf.IResolvable) {
    this._rateLimitList.internalValue = value;
  }
  public resetRateLimitList() {
    this._rateLimitList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitListInput() {
    return this._rateLimitList.internalValue;
  }
}
export interface DataThunderFwRateLimitOperSummaryOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#alloc_failures DataThunderFwRateLimitOper#alloc_failures}
  */
  readonly allocFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#mem_reserved DataThunderFwRateLimitOper#mem_reserved}
  */
  readonly memReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#mem_used DataThunderFwRateLimitOper#mem_used}
  */
  readonly memUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_aggregate DataThunderFwRateLimitOper#total_entries_scope_aggregate}
  */
  readonly totalEntriesScopeAggregate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_parent DataThunderFwRateLimitOper#total_entries_scope_parent}
  */
  readonly totalEntriesScopeParent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_parent_subscriber_ip DataThunderFwRateLimitOper#total_entries_scope_parent_subscriber_ip}
  */
  readonly totalEntriesScopeParentSubscriberIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_parent_subscriber_prefix DataThunderFwRateLimitOper#total_entries_scope_parent_subscriber_prefix}
  */
  readonly totalEntriesScopeParentSubscriberPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_subscriber_ip DataThunderFwRateLimitOper#total_entries_scope_subscriber_ip}
  */
  readonly totalEntriesScopeSubscriberIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_entries_scope_subscriber_prefix DataThunderFwRateLimitOper#total_entries_scope_subscriber_prefix}
  */
  readonly totalEntriesScopeSubscriberPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#total_num_entries DataThunderFwRateLimitOper#total_num_entries}
  */
  readonly totalNumEntries?: number;
}

export function dataThunderFwRateLimitOperSummaryOperToTerraform(struct?: DataThunderFwRateLimitOperSummaryOperOutputReference | DataThunderFwRateLimitOperSummaryOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failures: cdktf.numberToTerraform(struct!.allocFailures),
    mem_reserved: cdktf.numberToTerraform(struct!.memReserved),
    mem_used: cdktf.numberToTerraform(struct!.memUsed),
    total_entries_scope_aggregate: cdktf.numberToTerraform(struct!.totalEntriesScopeAggregate),
    total_entries_scope_parent: cdktf.numberToTerraform(struct!.totalEntriesScopeParent),
    total_entries_scope_parent_subscriber_ip: cdktf.numberToTerraform(struct!.totalEntriesScopeParentSubscriberIp),
    total_entries_scope_parent_subscriber_prefix: cdktf.numberToTerraform(struct!.totalEntriesScopeParentSubscriberPrefix),
    total_entries_scope_subscriber_ip: cdktf.numberToTerraform(struct!.totalEntriesScopeSubscriberIp),
    total_entries_scope_subscriber_prefix: cdktf.numberToTerraform(struct!.totalEntriesScopeSubscriberPrefix),
    total_num_entries: cdktf.numberToTerraform(struct!.totalNumEntries),
  }
}


export function dataThunderFwRateLimitOperSummaryOperToHclTerraform(struct?: DataThunderFwRateLimitOperSummaryOperOutputReference | DataThunderFwRateLimitOperSummaryOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failures: {
      value: cdktf.numberToHclTerraform(struct!.allocFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_reserved: {
      value: cdktf.numberToHclTerraform(struct!.memReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_used: {
      value: cdktf.numberToHclTerraform(struct!.memUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_aggregate: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent_subscriber_ip: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParentSubscriberIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent_subscriber_prefix: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParentSubscriberPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_subscriber_ip: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeSubscriberIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_subscriber_prefix: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeSubscriberPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_num_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalNumEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitOperSummaryOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwRateLimitOperSummaryOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailures = this._allocFailures;
    }
    if (this._memReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.memReserved = this._memReserved;
    }
    if (this._memUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memUsed = this._memUsed;
    }
    if (this._totalEntriesScopeAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeAggregate = this._totalEntriesScopeAggregate;
    }
    if (this._totalEntriesScopeParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParent = this._totalEntriesScopeParent;
    }
    if (this._totalEntriesScopeParentSubscriberIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParentSubscriberIp = this._totalEntriesScopeParentSubscriberIp;
    }
    if (this._totalEntriesScopeParentSubscriberPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParentSubscriberPrefix = this._totalEntriesScopeParentSubscriberPrefix;
    }
    if (this._totalEntriesScopeSubscriberIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeSubscriberIp = this._totalEntriesScopeSubscriberIp;
    }
    if (this._totalEntriesScopeSubscriberPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeSubscriberPrefix = this._totalEntriesScopeSubscriberPrefix;
    }
    if (this._totalNumEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumEntries = this._totalNumEntries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitOperSummaryOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocFailures = undefined;
      this._memReserved = undefined;
      this._memUsed = undefined;
      this._totalEntriesScopeAggregate = undefined;
      this._totalEntriesScopeParent = undefined;
      this._totalEntriesScopeParentSubscriberIp = undefined;
      this._totalEntriesScopeParentSubscriberPrefix = undefined;
      this._totalEntriesScopeSubscriberIp = undefined;
      this._totalEntriesScopeSubscriberPrefix = undefined;
      this._totalNumEntries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocFailures = value.allocFailures;
      this._memReserved = value.memReserved;
      this._memUsed = value.memUsed;
      this._totalEntriesScopeAggregate = value.totalEntriesScopeAggregate;
      this._totalEntriesScopeParent = value.totalEntriesScopeParent;
      this._totalEntriesScopeParentSubscriberIp = value.totalEntriesScopeParentSubscriberIp;
      this._totalEntriesScopeParentSubscriberPrefix = value.totalEntriesScopeParentSubscriberPrefix;
      this._totalEntriesScopeSubscriberIp = value.totalEntriesScopeSubscriberIp;
      this._totalEntriesScopeSubscriberPrefix = value.totalEntriesScopeSubscriberPrefix;
      this._totalNumEntries = value.totalNumEntries;
    }
  }

  // alloc_failures - computed: false, optional: true, required: false
  private _allocFailures?: number; 
  public get allocFailures() {
    return this.getNumberAttribute('alloc_failures');
  }
  public set allocFailures(value: number) {
    this._allocFailures = value;
  }
  public resetAllocFailures() {
    this._allocFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailuresInput() {
    return this._allocFailures;
  }

  // mem_reserved - computed: false, optional: true, required: false
  private _memReserved?: number; 
  public get memReserved() {
    return this.getNumberAttribute('mem_reserved');
  }
  public set memReserved(value: number) {
    this._memReserved = value;
  }
  public resetMemReserved() {
    this._memReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memReservedInput() {
    return this._memReserved;
  }

  // mem_used - computed: false, optional: true, required: false
  private _memUsed?: number; 
  public get memUsed() {
    return this.getNumberAttribute('mem_used');
  }
  public set memUsed(value: number) {
    this._memUsed = value;
  }
  public resetMemUsed() {
    this._memUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memUsedInput() {
    return this._memUsed;
  }

  // total_entries_scope_aggregate - computed: false, optional: true, required: false
  private _totalEntriesScopeAggregate?: number; 
  public get totalEntriesScopeAggregate() {
    return this.getNumberAttribute('total_entries_scope_aggregate');
  }
  public set totalEntriesScopeAggregate(value: number) {
    this._totalEntriesScopeAggregate = value;
  }
  public resetTotalEntriesScopeAggregate() {
    this._totalEntriesScopeAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeAggregateInput() {
    return this._totalEntriesScopeAggregate;
  }

  // total_entries_scope_parent - computed: false, optional: true, required: false
  private _totalEntriesScopeParent?: number; 
  public get totalEntriesScopeParent() {
    return this.getNumberAttribute('total_entries_scope_parent');
  }
  public set totalEntriesScopeParent(value: number) {
    this._totalEntriesScopeParent = value;
  }
  public resetTotalEntriesScopeParent() {
    this._totalEntriesScopeParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentInput() {
    return this._totalEntriesScopeParent;
  }

  // total_entries_scope_parent_subscriber_ip - computed: false, optional: true, required: false
  private _totalEntriesScopeParentSubscriberIp?: number; 
  public get totalEntriesScopeParentSubscriberIp() {
    return this.getNumberAttribute('total_entries_scope_parent_subscriber_ip');
  }
  public set totalEntriesScopeParentSubscriberIp(value: number) {
    this._totalEntriesScopeParentSubscriberIp = value;
  }
  public resetTotalEntriesScopeParentSubscriberIp() {
    this._totalEntriesScopeParentSubscriberIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentSubscriberIpInput() {
    return this._totalEntriesScopeParentSubscriberIp;
  }

  // total_entries_scope_parent_subscriber_prefix - computed: false, optional: true, required: false
  private _totalEntriesScopeParentSubscriberPrefix?: number; 
  public get totalEntriesScopeParentSubscriberPrefix() {
    return this.getNumberAttribute('total_entries_scope_parent_subscriber_prefix');
  }
  public set totalEntriesScopeParentSubscriberPrefix(value: number) {
    this._totalEntriesScopeParentSubscriberPrefix = value;
  }
  public resetTotalEntriesScopeParentSubscriberPrefix() {
    this._totalEntriesScopeParentSubscriberPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentSubscriberPrefixInput() {
    return this._totalEntriesScopeParentSubscriberPrefix;
  }

  // total_entries_scope_subscriber_ip - computed: false, optional: true, required: false
  private _totalEntriesScopeSubscriberIp?: number; 
  public get totalEntriesScopeSubscriberIp() {
    return this.getNumberAttribute('total_entries_scope_subscriber_ip');
  }
  public set totalEntriesScopeSubscriberIp(value: number) {
    this._totalEntriesScopeSubscriberIp = value;
  }
  public resetTotalEntriesScopeSubscriberIp() {
    this._totalEntriesScopeSubscriberIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeSubscriberIpInput() {
    return this._totalEntriesScopeSubscriberIp;
  }

  // total_entries_scope_subscriber_prefix - computed: false, optional: true, required: false
  private _totalEntriesScopeSubscriberPrefix?: number; 
  public get totalEntriesScopeSubscriberPrefix() {
    return this.getNumberAttribute('total_entries_scope_subscriber_prefix');
  }
  public set totalEntriesScopeSubscriberPrefix(value: number) {
    this._totalEntriesScopeSubscriberPrefix = value;
  }
  public resetTotalEntriesScopeSubscriberPrefix() {
    this._totalEntriesScopeSubscriberPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeSubscriberPrefixInput() {
    return this._totalEntriesScopeSubscriberPrefix;
  }

  // total_num_entries - computed: false, optional: true, required: false
  private _totalNumEntries?: number; 
  public get totalNumEntries() {
    return this.getNumberAttribute('total_num_entries');
  }
  public set totalNumEntries(value: number) {
    this._totalNumEntries = value;
  }
  public resetTotalNumEntries() {
    this._totalNumEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumEntriesInput() {
    return this._totalNumEntries;
  }
}
export interface DataThunderFwRateLimitOperSummary {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#oper DataThunderFwRateLimitOper#oper}
  */
  readonly oper?: DataThunderFwRateLimitOperSummaryOper;
}

export function dataThunderFwRateLimitOperSummaryToTerraform(struct?: DataThunderFwRateLimitOperSummaryOutputReference | DataThunderFwRateLimitOperSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderFwRateLimitOperSummaryOperToTerraform(struct!.oper),
  }
}


export function dataThunderFwRateLimitOperSummaryToHclTerraform(struct?: DataThunderFwRateLimitOperSummaryOutputReference | DataThunderFwRateLimitOperSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderFwRateLimitOperSummaryOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwRateLimitOperSummaryOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitOperSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwRateLimitOperSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitOperSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwRateLimitOperSummaryOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwRateLimitOperSummaryOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper thunder_fw_rate_limit_oper}
*/
export class DataThunderFwRateLimitOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_rate_limit_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwRateLimitOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwRateLimitOper to import
  * @param importFromId The id of the existing DataThunderFwRateLimitOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwRateLimitOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_rate_limit_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_oper thunder_fw_rate_limit_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwRateLimitOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwRateLimitOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_rate_limit_oper',
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
    this._oper.internalValue = config.oper;
    this._summary.internalValue = config.summary;
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
  private _oper = new DataThunderFwRateLimitOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwRateLimitOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new DataThunderFwRateLimitOperSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataThunderFwRateLimitOperSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderFwRateLimitOperOperToTerraform(this._oper.internalValue),
      summary: dataThunderFwRateLimitOperSummaryToTerraform(this._summary.internalValue),
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
        value: dataThunderFwRateLimitOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwRateLimitOperOperList",
      },
      summary: {
        value: dataThunderFwRateLimitOperSummaryToHclTerraform(this._summary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwRateLimitOperSummaryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
