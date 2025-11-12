// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchaclIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#description SwitchaclIngress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#dynamic_sort_subtable SwitchaclIngress#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#fswid SwitchaclIngress#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#group SwitchaclIngress#group}
  */
  readonly group?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#id SwitchaclIngress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#ingress_interface_all SwitchaclIngress#ingress_interface_all}
  */
  readonly ingressInterfaceAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#status SwitchaclIngress#status}
  */
  readonly status?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#action SwitchaclIngress#action}
  */
  readonly action?: SwitchaclIngressAction;
  /**
  * classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#classifier SwitchaclIngress#classifier}
  */
  readonly classifier?: SwitchaclIngressClassifier;
  /**
  * ingress_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#ingress_interface SwitchaclIngress#ingress_interface}
  */
  readonly ingressInterface?: SwitchaclIngressIngressInterface[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#schedule SwitchaclIngress#schedule}
  */
  readonly schedule?: SwitchaclIngressSchedule[] | cdktf.IResolvable;
}
export interface SwitchaclIngressActionEgressMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#member_name SwitchaclIngress#member_name}
  */
  readonly memberName?: string;
}

export function switchaclIngressActionEgressMaskToTerraform(struct?: SwitchaclIngressActionEgressMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchaclIngressActionEgressMaskToHclTerraform(struct?: SwitchaclIngressActionEgressMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclIngressActionEgressMaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchaclIngressActionEgressMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclIngressActionEgressMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchaclIngressActionEgressMaskList extends cdktf.ComplexList {
  public internalValue? : SwitchaclIngressActionEgressMask[] | cdktf.IResolvable

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
  public get(index: number): SwitchaclIngressActionEgressMaskOutputReference {
    return new SwitchaclIngressActionEgressMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchaclIngressActionRedirectPhysicalPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#member_name SwitchaclIngress#member_name}
  */
  readonly memberName?: string;
}

export function switchaclIngressActionRedirectPhysicalPortToTerraform(struct?: SwitchaclIngressActionRedirectPhysicalPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchaclIngressActionRedirectPhysicalPortToHclTerraform(struct?: SwitchaclIngressActionRedirectPhysicalPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclIngressActionRedirectPhysicalPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchaclIngressActionRedirectPhysicalPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclIngressActionRedirectPhysicalPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchaclIngressActionRedirectPhysicalPortList extends cdktf.ComplexList {
  public internalValue? : SwitchaclIngressActionRedirectPhysicalPort[] | cdktf.IResolvable

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
  public get(index: number): SwitchaclIngressActionRedirectPhysicalPortOutputReference {
    return new SwitchaclIngressActionRedirectPhysicalPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchaclIngressAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#cos_queue SwitchaclIngress#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#count SwitchaclIngress#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#count_type SwitchaclIngress#count_type}
  */
  readonly countType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#cpu_cos_queue SwitchaclIngress#cpu_cos_queue}
  */
  readonly cpuCosQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#drop SwitchaclIngress#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#mirror SwitchaclIngress#mirror}
  */
  readonly mirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#outer_vlan_tag SwitchaclIngress#outer_vlan_tag}
  */
  readonly outerVlanTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#policer SwitchaclIngress#policer}
  */
  readonly policer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#redirect SwitchaclIngress#redirect}
  */
  readonly redirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#redirect_bcast_cpu SwitchaclIngress#redirect_bcast_cpu}
  */
  readonly redirectBcastCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#redirect_bcast_no_cpu SwitchaclIngress#redirect_bcast_no_cpu}
  */
  readonly redirectBcastNoCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#remark_cos SwitchaclIngress#remark_cos}
  */
  readonly remarkCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#remark_dscp SwitchaclIngress#remark_dscp}
  */
  readonly remarkDscp?: number;
  /**
  * egress_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#egress_mask SwitchaclIngress#egress_mask}
  */
  readonly egressMask?: SwitchaclIngressActionEgressMask[] | cdktf.IResolvable;
  /**
  * redirect_physical_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#redirect_physical_port SwitchaclIngress#redirect_physical_port}
  */
  readonly redirectPhysicalPort?: SwitchaclIngressActionRedirectPhysicalPort[] | cdktf.IResolvable;
}

export function switchaclIngressActionToTerraform(struct?: SwitchaclIngressActionOutputReference | SwitchaclIngressAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_queue: cdktf.numberToTerraform(struct!.cosQueue),
    count: cdktf.stringToTerraform(struct!.count),
    count_type: cdktf.stringToTerraform(struct!.countType),
    cpu_cos_queue: cdktf.stringToTerraform(struct!.cpuCosQueue),
    drop: cdktf.stringToTerraform(struct!.drop),
    mirror: cdktf.stringToTerraform(struct!.mirror),
    outer_vlan_tag: cdktf.numberToTerraform(struct!.outerVlanTag),
    policer: cdktf.numberToTerraform(struct!.policer),
    redirect: cdktf.stringToTerraform(struct!.redirect),
    redirect_bcast_cpu: cdktf.stringToTerraform(struct!.redirectBcastCpu),
    redirect_bcast_no_cpu: cdktf.stringToTerraform(struct!.redirectBcastNoCpu),
    remark_cos: cdktf.numberToTerraform(struct!.remarkCos),
    remark_dscp: cdktf.numberToTerraform(struct!.remarkDscp),
    egress_mask: cdktf.listMapper(switchaclIngressActionEgressMaskToTerraform, true)(struct!.egressMask),
    redirect_physical_port: cdktf.listMapper(switchaclIngressActionRedirectPhysicalPortToTerraform, true)(struct!.redirectPhysicalPort),
  }
}


export function switchaclIngressActionToHclTerraform(struct?: SwitchaclIngressActionOutputReference | SwitchaclIngressAction): any {
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
    count_type: {
      value: cdktf.stringToHclTerraform(struct!.countType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cos_queue: {
      value: cdktf.stringToHclTerraform(struct!.cpuCosQueue),
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
    mirror: {
      value: cdktf.stringToHclTerraform(struct!.mirror),
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
    policer: {
      value: cdktf.numberToHclTerraform(struct!.policer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect: {
      value: cdktf.stringToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_bcast_cpu: {
      value: cdktf.stringToHclTerraform(struct!.redirectBcastCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_bcast_no_cpu: {
      value: cdktf.stringToHclTerraform(struct!.redirectBcastNoCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark_cos: {
      value: cdktf.numberToHclTerraform(struct!.remarkCos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remark_dscp: {
      value: cdktf.numberToHclTerraform(struct!.remarkDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_mask: {
      value: cdktf.listMapperHcl(switchaclIngressActionEgressMaskToHclTerraform, true)(struct!.egressMask),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchaclIngressActionEgressMaskList",
    },
    redirect_physical_port: {
      value: cdktf.listMapperHcl(switchaclIngressActionRedirectPhysicalPortToHclTerraform, true)(struct!.redirectPhysicalPort),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchaclIngressActionRedirectPhysicalPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclIngressActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchaclIngressAction | undefined {
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
    if (this._countType !== undefined) {
      hasAnyValues = true;
      internalValueResult.countType = this._countType;
    }
    if (this._cpuCosQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCosQueue = this._cpuCosQueue;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._mirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror;
    }
    if (this._outerVlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.outerVlanTag = this._outerVlanTag;
    }
    if (this._policer !== undefined) {
      hasAnyValues = true;
      internalValueResult.policer = this._policer;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._redirectBcastCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectBcastCpu = this._redirectBcastCpu;
    }
    if (this._redirectBcastNoCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectBcastNoCpu = this._redirectBcastNoCpu;
    }
    if (this._remarkCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.remarkCos = this._remarkCos;
    }
    if (this._remarkDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remarkDscp = this._remarkDscp;
    }
    if (this._egressMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMask = this._egressMask?.internalValue;
    }
    if (this._redirectPhysicalPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectPhysicalPort = this._redirectPhysicalPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclIngressAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cosQueue = undefined;
      this._count = undefined;
      this._countType = undefined;
      this._cpuCosQueue = undefined;
      this._drop = undefined;
      this._mirror = undefined;
      this._outerVlanTag = undefined;
      this._policer = undefined;
      this._redirect = undefined;
      this._redirectBcastCpu = undefined;
      this._redirectBcastNoCpu = undefined;
      this._remarkCos = undefined;
      this._remarkDscp = undefined;
      this._egressMask.internalValue = undefined;
      this._redirectPhysicalPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cosQueue = value.cosQueue;
      this._count = value.count;
      this._countType = value.countType;
      this._cpuCosQueue = value.cpuCosQueue;
      this._drop = value.drop;
      this._mirror = value.mirror;
      this._outerVlanTag = value.outerVlanTag;
      this._policer = value.policer;
      this._redirect = value.redirect;
      this._redirectBcastCpu = value.redirectBcastCpu;
      this._redirectBcastNoCpu = value.redirectBcastNoCpu;
      this._remarkCos = value.remarkCos;
      this._remarkDscp = value.remarkDscp;
      this._egressMask.internalValue = value.egressMask;
      this._redirectPhysicalPort.internalValue = value.redirectPhysicalPort;
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

  // count_type - computed: true, optional: true, required: false
  private _countType?: string; 
  public get countType() {
    return this.getStringAttribute('count_type');
  }
  public set countType(value: string) {
    this._countType = value;
  }
  public resetCountType() {
    this._countType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countTypeInput() {
    return this._countType;
  }

  // cpu_cos_queue - computed: true, optional: true, required: false
  private _cpuCosQueue?: string; 
  public get cpuCosQueue() {
    return this.getStringAttribute('cpu_cos_queue');
  }
  public set cpuCosQueue(value: string) {
    this._cpuCosQueue = value;
  }
  public resetCpuCosQueue() {
    this._cpuCosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCosQueueInput() {
    return this._cpuCosQueue;
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

  // mirror - computed: true, optional: true, required: false
  private _mirror?: string; 
  public get mirror() {
    return this.getStringAttribute('mirror');
  }
  public set mirror(value: string) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
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

  // policer - computed: true, optional: true, required: false
  private _policer?: number; 
  public get policer() {
    return this.getNumberAttribute('policer');
  }
  public set policer(value: number) {
    this._policer = value;
  }
  public resetPolicer() {
    this._policer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerInput() {
    return this._policer;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // redirect_bcast_cpu - computed: true, optional: true, required: false
  private _redirectBcastCpu?: string; 
  public get redirectBcastCpu() {
    return this.getStringAttribute('redirect_bcast_cpu');
  }
  public set redirectBcastCpu(value: string) {
    this._redirectBcastCpu = value;
  }
  public resetRedirectBcastCpu() {
    this._redirectBcastCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectBcastCpuInput() {
    return this._redirectBcastCpu;
  }

  // redirect_bcast_no_cpu - computed: true, optional: true, required: false
  private _redirectBcastNoCpu?: string; 
  public get redirectBcastNoCpu() {
    return this.getStringAttribute('redirect_bcast_no_cpu');
  }
  public set redirectBcastNoCpu(value: string) {
    this._redirectBcastNoCpu = value;
  }
  public resetRedirectBcastNoCpu() {
    this._redirectBcastNoCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectBcastNoCpuInput() {
    return this._redirectBcastNoCpu;
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

  // remark_dscp - computed: true, optional: true, required: false
  private _remarkDscp?: number; 
  public get remarkDscp() {
    return this.getNumberAttribute('remark_dscp');
  }
  public set remarkDscp(value: number) {
    this._remarkDscp = value;
  }
  public resetRemarkDscp() {
    this._remarkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkDscpInput() {
    return this._remarkDscp;
  }

  // egress_mask - computed: false, optional: true, required: false
  private _egressMask = new SwitchaclIngressActionEgressMaskList(this, "egress_mask", false);
  public get egressMask() {
    return this._egressMask;
  }
  public putEgressMask(value: SwitchaclIngressActionEgressMask[] | cdktf.IResolvable) {
    this._egressMask.internalValue = value;
  }
  public resetEgressMask() {
    this._egressMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMaskInput() {
    return this._egressMask.internalValue;
  }

  // redirect_physical_port - computed: false, optional: true, required: false
  private _redirectPhysicalPort = new SwitchaclIngressActionRedirectPhysicalPortList(this, "redirect_physical_port", false);
  public get redirectPhysicalPort() {
    return this._redirectPhysicalPort;
  }
  public putRedirectPhysicalPort(value: SwitchaclIngressActionRedirectPhysicalPort[] | cdktf.IResolvable) {
    this._redirectPhysicalPort.internalValue = value;
  }
  public resetRedirectPhysicalPort() {
    this._redirectPhysicalPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPhysicalPortInput() {
    return this._redirectPhysicalPort.internalValue;
  }
}
export interface SwitchaclIngressClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#cos SwitchaclIngress#cos}
  */
  readonly cos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#dscp SwitchaclIngress#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#dst_ip6_prefix SwitchaclIngress#dst_ip6_prefix}
  */
  readonly dstIp6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#dst_ip_prefix SwitchaclIngress#dst_ip_prefix}
  */
  readonly dstIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#dst_mac SwitchaclIngress#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#ether_type SwitchaclIngress#ether_type}
  */
  readonly etherType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#l3_interface SwitchaclIngress#l3_interface}
  */
  readonly l3Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#service SwitchaclIngress#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#src_ip6_prefix SwitchaclIngress#src_ip6_prefix}
  */
  readonly srcIp6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#src_ip_prefix SwitchaclIngress#src_ip_prefix}
  */
  readonly srcIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#src_mac SwitchaclIngress#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#vlan_id SwitchaclIngress#vlan_id}
  */
  readonly vlanId?: number;
}

export function switchaclIngressClassifierToTerraform(struct?: SwitchaclIngressClassifierOutputReference | SwitchaclIngressClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos: cdktf.numberToTerraform(struct!.cos),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    dst_ip6_prefix: cdktf.stringToTerraform(struct!.dstIp6Prefix),
    dst_ip_prefix: cdktf.stringToTerraform(struct!.dstIpPrefix),
    dst_mac: cdktf.stringToTerraform(struct!.dstMac),
    ether_type: cdktf.numberToTerraform(struct!.etherType),
    l3_interface: cdktf.stringToTerraform(struct!.l3Interface),
    service: cdktf.stringToTerraform(struct!.service),
    src_ip6_prefix: cdktf.stringToTerraform(struct!.srcIp6Prefix),
    src_ip_prefix: cdktf.stringToTerraform(struct!.srcIpPrefix),
    src_mac: cdktf.stringToTerraform(struct!.srcMac),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function switchaclIngressClassifierToHclTerraform(struct?: SwitchaclIngressClassifierOutputReference | SwitchaclIngressClassifier): any {
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
    dst_ip6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dstIp6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    l3_interface: {
      value: cdktf.stringToHclTerraform(struct!.l3Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcIp6Prefix),
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

export class SwitchaclIngressClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchaclIngressClassifier | undefined {
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
    if (this._dstIp6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp6Prefix = this._dstIp6Prefix;
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
    if (this._l3Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Interface = this._l3Interface;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._srcIp6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp6Prefix = this._srcIp6Prefix;
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

  public set internalValue(value: SwitchaclIngressClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cos = undefined;
      this._dscp = undefined;
      this._dstIp6Prefix = undefined;
      this._dstIpPrefix = undefined;
      this._dstMac = undefined;
      this._etherType = undefined;
      this._l3Interface = undefined;
      this._service = undefined;
      this._srcIp6Prefix = undefined;
      this._srcIpPrefix = undefined;
      this._srcMac = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cos = value.cos;
      this._dscp = value.dscp;
      this._dstIp6Prefix = value.dstIp6Prefix;
      this._dstIpPrefix = value.dstIpPrefix;
      this._dstMac = value.dstMac;
      this._etherType = value.etherType;
      this._l3Interface = value.l3Interface;
      this._service = value.service;
      this._srcIp6Prefix = value.srcIp6Prefix;
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

  // dst_ip6_prefix - computed: true, optional: true, required: false
  private _dstIp6Prefix?: string; 
  public get dstIp6Prefix() {
    return this.getStringAttribute('dst_ip6_prefix');
  }
  public set dstIp6Prefix(value: string) {
    this._dstIp6Prefix = value;
  }
  public resetDstIp6Prefix() {
    this._dstIp6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIp6PrefixInput() {
    return this._dstIp6Prefix;
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

  // l3_interface - computed: true, optional: true, required: false
  private _l3Interface?: string; 
  public get l3Interface() {
    return this.getStringAttribute('l3_interface');
  }
  public set l3Interface(value: string) {
    this._l3Interface = value;
  }
  public resetL3Interface() {
    this._l3Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3InterfaceInput() {
    return this._l3Interface;
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

  // src_ip6_prefix - computed: true, optional: true, required: false
  private _srcIp6Prefix?: string; 
  public get srcIp6Prefix() {
    return this.getStringAttribute('src_ip6_prefix');
  }
  public set srcIp6Prefix(value: string) {
    this._srcIp6Prefix = value;
  }
  public resetSrcIp6Prefix() {
    this._srcIp6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIp6PrefixInput() {
    return this._srcIp6Prefix;
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
export interface SwitchaclIngressIngressInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#member_name SwitchaclIngress#member_name}
  */
  readonly memberName?: string;
}

export function switchaclIngressIngressInterfaceToTerraform(struct?: SwitchaclIngressIngressInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchaclIngressIngressInterfaceToHclTerraform(struct?: SwitchaclIngressIngressInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchaclIngressIngressInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchaclIngressIngressInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchaclIngressIngressInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchaclIngressIngressInterfaceList extends cdktf.ComplexList {
  public internalValue? : SwitchaclIngressIngressInterface[] | cdktf.IResolvable

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
  public get(index: number): SwitchaclIngressIngressInterfaceOutputReference {
    return new SwitchaclIngressIngressInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchaclIngressSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#schedule_name SwitchaclIngress#schedule_name}
  */
  readonly scheduleName?: string;
}

export function switchaclIngressScheduleToTerraform(struct?: SwitchaclIngressSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_name: cdktf.stringToTerraform(struct!.scheduleName),
  }
}


export function switchaclIngressScheduleToHclTerraform(struct?: SwitchaclIngressSchedule | cdktf.IResolvable): any {
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

export class SwitchaclIngressScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchaclIngressSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchaclIngressSchedule | cdktf.IResolvable | undefined) {
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

export class SwitchaclIngressScheduleList extends cdktf.ComplexList {
  public internalValue? : SwitchaclIngressSchedule[] | cdktf.IResolvable

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
  public get(index: number): SwitchaclIngressScheduleOutputReference {
    return new SwitchaclIngressScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress fortiswitch_switchacl_ingress}
*/
export class SwitchaclIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchacl_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchaclIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchaclIngress to import
  * @param importFromId The id of the existing SwitchaclIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchaclIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchacl_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_ingress fortiswitch_switchacl_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchaclIngressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchaclIngressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchacl_ingress',
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
    this._ingressInterfaceAll = config.ingressInterfaceAll;
    this._status = config.status;
    this._action.internalValue = config.action;
    this._classifier.internalValue = config.classifier;
    this._ingressInterface.internalValue = config.ingressInterface;
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

  // ingress_interface_all - computed: true, optional: true, required: false
  private _ingressInterfaceAll?: string; 
  public get ingressInterfaceAll() {
    return this.getStringAttribute('ingress_interface_all');
  }
  public set ingressInterfaceAll(value: string) {
    this._ingressInterfaceAll = value;
  }
  public resetIngressInterfaceAll() {
    this._ingressInterfaceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInterfaceAllInput() {
    return this._ingressInterfaceAll;
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
  private _action = new SwitchaclIngressActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SwitchaclIngressAction) {
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
  private _classifier = new SwitchaclIngressClassifierOutputReference(this, "classifier");
  public get classifier() {
    return this._classifier;
  }
  public putClassifier(value: SwitchaclIngressClassifier) {
    this._classifier.internalValue = value;
  }
  public resetClassifier() {
    this._classifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier.internalValue;
  }

  // ingress_interface - computed: false, optional: true, required: false
  private _ingressInterface = new SwitchaclIngressIngressInterfaceList(this, "ingress_interface", false);
  public get ingressInterface() {
    return this._ingressInterface;
  }
  public putIngressInterface(value: SwitchaclIngressIngressInterface[] | cdktf.IResolvable) {
    this._ingressInterface.internalValue = value;
  }
  public resetIngressInterface() {
    this._ingressInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInterfaceInput() {
    return this._ingressInterface.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new SwitchaclIngressScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SwitchaclIngressSchedule[] | cdktf.IResolvable) {
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
      ingress_interface_all: cdktf.stringToTerraform(this._ingressInterfaceAll),
      status: cdktf.stringToTerraform(this._status),
      action: switchaclIngressActionToTerraform(this._action.internalValue),
      classifier: switchaclIngressClassifierToTerraform(this._classifier.internalValue),
      ingress_interface: cdktf.listMapper(switchaclIngressIngressInterfaceToTerraform, true)(this._ingressInterface.internalValue),
      schedule: cdktf.listMapper(switchaclIngressScheduleToTerraform, true)(this._schedule.internalValue),
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
      ingress_interface_all: {
        value: cdktf.stringToHclTerraform(this._ingressInterfaceAll),
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
        value: switchaclIngressActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclIngressActionList",
      },
      classifier: {
        value: switchaclIngressClassifierToHclTerraform(this._classifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclIngressClassifierList",
      },
      ingress_interface: {
        value: cdktf.listMapperHcl(switchaclIngressIngressInterfaceToHclTerraform, true)(this._ingressInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclIngressIngressInterfaceList",
      },
      schedule: {
        value: cdktf.listMapperHcl(switchaclIngressScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchaclIngressScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
