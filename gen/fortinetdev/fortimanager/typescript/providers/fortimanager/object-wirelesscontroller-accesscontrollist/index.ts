// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerAccesscontrollistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#adom ObjectWirelesscontrollerAccesscontrollist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#comment ObjectWirelesscontrollerAccesscontrollist#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#dynamic_sort_subtable ObjectWirelesscontrollerAccesscontrollist#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#id ObjectWirelesscontrollerAccesscontrollist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#name ObjectWirelesscontrollerAccesscontrollist#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#scopetype ObjectWirelesscontrollerAccesscontrollist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * layer3_ipv4_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#layer3_ipv4_rules ObjectWirelesscontrollerAccesscontrollist#layer3_ipv4_rules}
  */
  readonly layer3Ipv4Rules?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules[] | cdktf.IResolvable;
  /**
  * layer3_ipv6_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#layer3_ipv6_rules ObjectWirelesscontrollerAccesscontrollist#layer3_ipv6_rules}
  */
  readonly layer3Ipv6Rules?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#action ObjectWirelesscontrollerAccesscontrollist#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#comment ObjectWirelesscontrollerAccesscontrollist#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#dstaddr ObjectWirelesscontrollerAccesscontrollist#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#dstport ObjectWirelesscontrollerAccesscontrollist#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#protocol ObjectWirelesscontrollerAccesscontrollist#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#rule_id ObjectWirelesscontrollerAccesscontrollist#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#srcaddr ObjectWirelesscontrollerAccesscontrollist#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#srcport ObjectWirelesscontrollerAccesscontrollist#srcport}
  */
  readonly srcport?: number;
}

export function objectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesToTerraform(struct?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dstaddr: cdktf.stringToTerraform(struct!.dstaddr),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
    srcport: cdktf.numberToTerraform(struct!.srcport),
  }
}


export function objectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesToHclTerraform(struct?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstaddr = undefined;
      this._dstport = undefined;
      this._protocol = undefined;
      this._ruleId = undefined;
      this._srcaddr = undefined;
      this._srcport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstaddr = value.dstaddr;
      this._dstport = value.dstport;
      this._protocol = value.protocol;
      this._ruleId = value.ruleId;
      this._srcaddr = value.srcaddr;
      this._srcport = value.srcport;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // protocol - computed: true, optional: true, required: false
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

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }
}

export class ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesOutputReference {
    return new ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#action ObjectWirelesscontrollerAccesscontrollist#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#comment ObjectWirelesscontrollerAccesscontrollist#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#dstaddr ObjectWirelesscontrollerAccesscontrollist#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#dstport ObjectWirelesscontrollerAccesscontrollist#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#protocol ObjectWirelesscontrollerAccesscontrollist#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#rule_id ObjectWirelesscontrollerAccesscontrollist#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#srcaddr ObjectWirelesscontrollerAccesscontrollist#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#srcport ObjectWirelesscontrollerAccesscontrollist#srcport}
  */
  readonly srcport?: number;
}

export function objectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesToTerraform(struct?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dstaddr: cdktf.stringToTerraform(struct!.dstaddr),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
    srcport: cdktf.numberToTerraform(struct!.srcport),
  }
}


export function objectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesToHclTerraform(struct?: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstaddr = undefined;
      this._dstport = undefined;
      this._protocol = undefined;
      this._ruleId = undefined;
      this._srcaddr = undefined;
      this._srcport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstaddr = value.dstaddr;
      this._dstport = value.dstport;
      this._protocol = value.protocol;
      this._ruleId = value.ruleId;
      this._srcaddr = value.srcaddr;
      this._srcport = value.srcport;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // protocol - computed: true, optional: true, required: false
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

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }
}

export class ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesOutputReference {
    return new ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist fortimanager_object_wirelesscontroller_accesscontrollist}
*/
export class ObjectWirelesscontrollerAccesscontrollist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_accesscontrollist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerAccesscontrollist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerAccesscontrollist to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerAccesscontrollist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerAccesscontrollist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_accesscontrollist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_accesscontrollist fortimanager_object_wirelesscontroller_accesscontrollist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerAccesscontrollistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerAccesscontrollistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_accesscontrollist',
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
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._layer3Ipv4Rules.internalValue = config.layer3Ipv4Rules;
    this._layer3Ipv6Rules.internalValue = config.layer3Ipv6Rules;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // layer3_ipv4_rules - computed: false, optional: true, required: false
  private _layer3Ipv4Rules = new ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesList(this, "layer3_ipv4_rules", false);
  public get layer3Ipv4Rules() {
    return this._layer3Ipv4Rules;
  }
  public putLayer3Ipv4Rules(value: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4Rules[] | cdktf.IResolvable) {
    this._layer3Ipv4Rules.internalValue = value;
  }
  public resetLayer3Ipv4Rules() {
    this._layer3Ipv4Rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Ipv4RulesInput() {
    return this._layer3Ipv4Rules.internalValue;
  }

  // layer3_ipv6_rules - computed: false, optional: true, required: false
  private _layer3Ipv6Rules = new ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesList(this, "layer3_ipv6_rules", false);
  public get layer3Ipv6Rules() {
    return this._layer3Ipv6Rules;
  }
  public putLayer3Ipv6Rules(value: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6Rules[] | cdktf.IResolvable) {
    this._layer3Ipv6Rules.internalValue = value;
  }
  public resetLayer3Ipv6Rules() {
    this._layer3Ipv6Rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Ipv6RulesInput() {
    return this._layer3Ipv6Rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      layer3_ipv4_rules: cdktf.listMapper(objectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesToTerraform, true)(this._layer3Ipv4Rules.internalValue),
      layer3_ipv6_rules: cdktf.listMapper(objectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesToTerraform, true)(this._layer3Ipv6Rules.internalValue),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      layer3_ipv4_rules: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesToHclTerraform, true)(this._layer3Ipv4Rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesList",
      },
      layer3_ipv6_rules: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesToHclTerraform, true)(this._layer3Ipv6Rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerAccesscontrollistLayer3Ipv6RulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
