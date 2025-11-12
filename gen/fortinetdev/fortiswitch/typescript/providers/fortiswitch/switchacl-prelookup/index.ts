// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchaclPrelookupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#description SwitchaclPrelookup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#dynamic_sort_subtable SwitchaclPrelookup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#fswid SwitchaclPrelookup#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#group SwitchaclPrelookup#group}
  */
  readonly group?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#id SwitchaclPrelookup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#interface SwitchaclPrelookup#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#interface_all SwitchaclPrelookup#interface_all}
  */
  readonly interfaceAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#status SwitchaclPrelookup#status}
  */
  readonly status?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#action SwitchaclPrelookup#action}
  */
  readonly action?: SwitchaclPrelookupAction;
  /**
  * classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#classifier SwitchaclPrelookup#classifier}
  */
  readonly classifier?: SwitchaclPrelookupClassifier;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#schedule SwitchaclPrelookup#schedule}
  */
  readonly schedule?: SwitchaclPrelookupSchedule[] | cdktf.IResolvable;
}
export interface SwitchaclPrelookupAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#cos_queue SwitchaclPrelookup#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#count SwitchaclPrelookup#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#drop SwitchaclPrelookup#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#outer_vlan_tag SwitchaclPrelookup#outer_vlan_tag}
  */
  readonly outerVlanTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#remark_cos SwitchaclPrelookup#remark_cos}
  */
  readonly remarkCos?: number;
}

export function switchaclPrelookupActionToTerraform(struct?: SwitchaclPrelookupActionOutputReference | SwitchaclPrelookupAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_queue: cdktf.numberToTerraform(struct!.cosQueue),
    count: cdktf.stringToTerraform(struct!.count),
    drop: cdktf.stringToTerraform(struct!.drop),
    outer_vlan_tag: cdktf.numberToTerraform(struct!.outerVlanTag),
    remark_cos: cdktf.numberToTerraform(struct!.remarkCos),
  }
}


export function switchaclPrelookupActionToHclTerraform(struct?: SwitchaclPrelookupActionOutputReference | SwitchaclPrelookupAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_queue: {
      value: cdktf.numberToHclTerraform(struct!.cosQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop: {
      value: cdktf.stringToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outer_vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.outerVlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remark_cos: {
      value: cdktf.numberToHclTerraform(struct!.remarkCos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclPrelookupActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchaclPrelookupAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosQueue = this._cosQueue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._outerVlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.outerVlanTag = this._outerVlanTag;
    }
    if (this._remarkCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.remarkCos = this._remarkCos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclPrelookupAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cosQueue = undefined;
      this._count = undefined;
      this._drop = undefined;
      this._outerVlanTag = undefined;
      this._remarkCos = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cosQueue = value.cosQueue;
      this._count = value.count;
      this._drop = value.drop;
      this._outerVlanTag = value.outerVlanTag;
      this._remarkCos = value.remarkCos;
    }
  }

  // cos_queue - computed: true, optional: true, required: false
  private _cosQueue?: number; 
  public get cosQueue() {
    return this.getNumberAttribute('cos_queue');
  }
  public set cosQueue(value: number) {
    this._cosQueue = value;
  }
  public resetCosQueue() {
    this._cosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue;
  }

  // count - computed: true, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // outer_vlan_tag - computed: true, optional: true, required: false
  private _outerVlanTag?: number; 
  public get outerVlanTag() {
    return this.getNumberAttribute('outer_vlan_tag');
  }
  public set outerVlanTag(value: number) {
    this._outerVlanTag = value;
  }
  public resetOuterVlanTag() {
    this._outerVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerVlanTagInput() {
    return this._outerVlanTag;
  }

  // remark_cos - computed: true, optional: true, required: false
  private _remarkCos?: number; 
  public get remarkCos() {
    return this.getNumberAttribute('remark_cos');
  }
  public set remarkCos(value: number) {
    this._remarkCos = value;
  }
  public resetRemarkCos() {
    this._remarkCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkCosInput() {
    return this._remarkCos;
  }
}
export interface SwitchaclPrelookupClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#cos SwitchaclPrelookup#cos}
  */
  readonly cos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#dscp SwitchaclPrelookup#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#dst_ip_prefix SwitchaclPrelookup#dst_ip_prefix}
  */
  readonly dstIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#dst_mac SwitchaclPrelookup#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#ether_type SwitchaclPrelookup#ether_type}
  */
  readonly etherType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#service SwitchaclPrelookup#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#src_ip_prefix SwitchaclPrelookup#src_ip_prefix}
  */
  readonly srcIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#src_mac SwitchaclPrelookup#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#vlan_id SwitchaclPrelookup#vlan_id}
  */
  readonly vlanId?: number;
}

export function switchaclPrelookupClassifierToTerraform(struct?: SwitchaclPrelookupClassifierOutputReference | SwitchaclPrelookupClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos: cdktf.numberToTerraform(struct!.cos),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    dst_ip_prefix: cdktf.stringToTerraform(struct!.dstIpPrefix),
    dst_mac: cdktf.stringToTerraform(struct!.dstMac),
    ether_type: cdktf.numberToTerraform(struct!.etherType),
    service: cdktf.stringToTerraform(struct!.service),
    src_ip_prefix: cdktf.stringToTerraform(struct!.srcIpPrefix),
    src_mac: cdktf.stringToTerraform(struct!.srcMac),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function switchaclPrelookupClassifierToHclTerraform(struct?: SwitchaclPrelookupClassifierOutputReference | SwitchaclPrelookupClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos: {
      value: cdktf.numberToHclTerraform(struct!.cos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dstIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_mac: {
      value: cdktf.stringToHclTerraform(struct!.dstMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ether_type: {
      value: cdktf.numberToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_mac: {
      value: cdktf.stringToHclTerraform(struct!.srcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclPrelookupClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchaclPrelookupClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cos !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos = this._cos;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dstIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpPrefix = this._dstIpPrefix;
    }
    if (this._dstMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMac = this._dstMac;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._srcIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpPrefix = this._srcIpPrefix;
    }
    if (this._srcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMac = this._srcMac;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclPrelookupClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cos = undefined;
      this._dscp = undefined;
      this._dstIpPrefix = undefined;
      this._dstMac = undefined;
      this._etherType = undefined;
      this._service = undefined;
      this._srcIpPrefix = undefined;
      this._srcMac = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cos = value.cos;
      this._dscp = value.dscp;
      this._dstIpPrefix = value.dstIpPrefix;
      this._dstMac = value.dstMac;
      this._etherType = value.etherType;
      this._service = value.service;
      this._srcIpPrefix = value.srcIpPrefix;
      this._srcMac = value.srcMac;
      this._vlanId = value.vlanId;
    }
  }

  // cos - computed: true, optional: true, required: false
  private _cos?: number; 
  public get cos() {
    return this.getNumberAttribute('cos');
  }
  public set cos(value: number) {
    this._cos = value;
  }
  public resetCos() {
    this._cos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInput() {
    return this._cos;
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_ip_prefix - computed: true, optional: true, required: false
  private _dstIpPrefix?: string; 
  public get dstIpPrefix() {
    return this.getStringAttribute('dst_ip_prefix');
  }
  public set dstIpPrefix(value: string) {
    this._dstIpPrefix = value;
  }
  public resetDstIpPrefix() {
    this._dstIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixInput() {
    return this._dstIpPrefix;
  }

  // dst_mac - computed: true, optional: true, required: false
  private _dstMac?: string; 
  public get dstMac() {
    return this.getStringAttribute('dst_mac');
  }
  public set dstMac(value: string) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
  }

  // ether_type - computed: true, optional: true, required: false
  private _etherType?: number; 
  public get etherType() {
    return this.getNumberAttribute('ether_type');
  }
  public set etherType(value: number) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // src_ip_prefix - computed: true, optional: true, required: false
  private _srcIpPrefix?: string; 
  public get srcIpPrefix() {
    return this.getStringAttribute('src_ip_prefix');
  }
  public set srcIpPrefix(value: string) {
    this._srcIpPrefix = value;
  }
  public resetSrcIpPrefix() {
    this._srcIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpPrefixInput() {
    return this._srcIpPrefix;
  }

  // src_mac - computed: true, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SwitchaclPrelookupSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#schedule_name SwitchaclPrelookup#schedule_name}
  */
  readonly scheduleName?: string;
}

export function switchaclPrelookupScheduleToTerraform(struct?: SwitchaclPrelookupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_name: cdktf.stringToTerraform(struct!.scheduleName),
  }
}


export function switchaclPrelookupScheduleToHclTerraform(struct?: SwitchaclPrelookupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_name: {
      value: cdktf.stringToHclTerraform(struct!.scheduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclPrelookupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchaclPrelookupSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleName = this._scheduleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclPrelookupSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleName = value.scheduleName;
    }
  }

  // schedule_name - computed: true, optional: true, required: false
  private _scheduleName?: string; 
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }
  public resetScheduleName() {
    this._scheduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleNameInput() {
    return this._scheduleName;
  }
}

export class SwitchaclPrelookupScheduleList extends cdktf.ComplexList {
  public internalValue? : SwitchaclPrelookupSchedule[] | cdktf.IResolvable

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
  public get(index: number): SwitchaclPrelookupScheduleOutputReference {
    return new SwitchaclPrelookupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup fortiswitch_switchacl_prelookup}
*/
export class SwitchaclPrelookup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchacl_prelookup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchaclPrelookup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchaclPrelookup to import
  * @param importFromId The id of the existing SwitchaclPrelookup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchaclPrelookup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchacl_prelookup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_prelookup fortiswitch_switchacl_prelookup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchaclPrelookupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchaclPrelookupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchacl_prelookup',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fswid = config.fswid;
    this._group = config.group;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceAll = config.interfaceAll;
    this._status = config.status;
    this._action.internalValue = config.action;
    this._classifier.internalValue = config.classifier;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // fswid - computed: true, optional: true, required: false
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
  }

  // group - computed: true, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_all - computed: true, optional: true, required: false
  private _interfaceAll?: string; 
  public get interfaceAll() {
    return this.getStringAttribute('interface_all');
  }
  public set interfaceAll(value: string) {
    this._interfaceAll = value;
  }
  public resetInterfaceAll() {
    this._interfaceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAllInput() {
    return this._interfaceAll;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // action - computed: false, optional: true, required: false
  private _action = new SwitchaclPrelookupActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SwitchaclPrelookupAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier = new SwitchaclPrelookupClassifierOutputReference(this, "classifier");
  public get classifier() {
    return this._classifier;
  }
  public putClassifier(value: SwitchaclPrelookupClassifier) {
    this._classifier.internalValue = value;
  }
  public resetClassifier() {
    this._classifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new SwitchaclPrelookupScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SwitchaclPrelookupSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fswid: cdktf.numberToTerraform(this._fswid),
      group: cdktf.numberToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_all: cdktf.stringToTerraform(this._interfaceAll),
      status: cdktf.stringToTerraform(this._status),
      action: switchaclPrelookupActionToTerraform(this._action.internalValue),
      classifier: switchaclPrelookupClassifierToTerraform(this._classifier.internalValue),
      schedule: cdktf.listMapper(switchaclPrelookupScheduleToTerraform, true)(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.numberToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_all: {
        value: cdktf.stringToHclTerraform(this._interfaceAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: switchaclPrelookupActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclPrelookupActionList",
      },
      classifier: {
        value: switchaclPrelookupClassifierToHclTerraform(this._classifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclPrelookupClassifierList",
      },
      schedule: {
        value: cdktf.listMapperHcl(switchaclPrelookupScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclPrelookupScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
