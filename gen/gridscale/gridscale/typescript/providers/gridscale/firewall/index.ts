// https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#id Firewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#labels Firewall#labels}
  */
  readonly labels?: string[];
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#name Firewall#name}
  */
  readonly name: string;
  /**
  * rules_v4_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#rules_v4_in Firewall#rules_v4_in}
  */
  readonly rulesV4In?: FirewallRulesV4In[] | cdktf.IResolvable;
  /**
  * rules_v4_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#rules_v4_out Firewall#rules_v4_out}
  */
  readonly rulesV4Out?: FirewallRulesV4Out[] | cdktf.IResolvable;
  /**
  * rules_v6_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#rules_v6_in Firewall#rules_v6_in}
  */
  readonly rulesV6In?: FirewallRulesV6In[] | cdktf.IResolvable;
  /**
  * rules_v6_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#rules_v6_out Firewall#rules_v6_out}
  */
  readonly rulesV6Out?: FirewallRulesV6Out[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#timeouts Firewall#timeouts}
  */
  readonly timeouts?: FirewallTimeouts;
}
export interface FirewallNetwork {
}

export function firewallNetworkToTerraform(struct?: FirewallNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firewallNetworkToHclTerraform(struct?: FirewallNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirewallNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_uuid - computed: true, optional: false, required: false
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_uuid - computed: true, optional: false, required: false
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
}

export class FirewallNetworkList extends cdktf.ComplexList {

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
  public get(index: number): FirewallNetworkOutputReference {
    return new FirewallNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallRulesV4In {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#comment Firewall#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_cidr Firewall#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_port Firewall#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#order Firewall#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_cidr Firewall#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_port Firewall#src_port}
  */
  readonly srcPort?: string;
}

export function firewallRulesV4InToTerraform(struct?: FirewallRulesV4In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function firewallRulesV4InToHclTerraform(struct?: FirewallRulesV4In | cdktf.IResolvable): any {
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
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRulesV4InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRulesV4In | cdktf.IResolvable | undefined {
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
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRulesV4In | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
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
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
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

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class FirewallRulesV4InList extends cdktf.ComplexList {
  public internalValue? : FirewallRulesV4In[] | cdktf.IResolvable

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
  public get(index: number): FirewallRulesV4InOutputReference {
    return new FirewallRulesV4InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallRulesV4Out {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#comment Firewall#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_cidr Firewall#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_port Firewall#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#order Firewall#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_cidr Firewall#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_port Firewall#src_port}
  */
  readonly srcPort?: string;
}

export function firewallRulesV4OutToTerraform(struct?: FirewallRulesV4Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function firewallRulesV4OutToHclTerraform(struct?: FirewallRulesV4Out | cdktf.IResolvable): any {
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
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRulesV4OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRulesV4Out | cdktf.IResolvable | undefined {
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
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRulesV4Out | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
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
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
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

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class FirewallRulesV4OutList extends cdktf.ComplexList {
  public internalValue? : FirewallRulesV4Out[] | cdktf.IResolvable

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
  public get(index: number): FirewallRulesV4OutOutputReference {
    return new FirewallRulesV4OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallRulesV6In {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#comment Firewall#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_cidr Firewall#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_port Firewall#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#order Firewall#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_cidr Firewall#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_port Firewall#src_port}
  */
  readonly srcPort?: string;
}

export function firewallRulesV6InToTerraform(struct?: FirewallRulesV6In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function firewallRulesV6InToHclTerraform(struct?: FirewallRulesV6In | cdktf.IResolvable): any {
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
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRulesV6InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRulesV6In | cdktf.IResolvable | undefined {
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
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRulesV6In | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
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
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
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

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class FirewallRulesV6InList extends cdktf.ComplexList {
  public internalValue? : FirewallRulesV6In[] | cdktf.IResolvable

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
  public get(index: number): FirewallRulesV6InOutputReference {
    return new FirewallRulesV6InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallRulesV6Out {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#comment Firewall#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_cidr Firewall#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#dst_port Firewall#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#order Firewall#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_cidr Firewall#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#src_port Firewall#src_port}
  */
  readonly srcPort?: string;
}

export function firewallRulesV6OutToTerraform(struct?: FirewallRulesV6Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function firewallRulesV6OutToHclTerraform(struct?: FirewallRulesV6Out | cdktf.IResolvable): any {
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
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRulesV6OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRulesV6Out | cdktf.IResolvable | undefined {
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
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRulesV6Out | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
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
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
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

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class FirewallRulesV6OutList extends cdktf.ComplexList {
  public internalValue? : FirewallRulesV6Out[] | cdktf.IResolvable

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
  public get(index: number): FirewallRulesV6OutOutputReference {
    return new FirewallRulesV6OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#create Firewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#delete Firewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#update Firewall#update}
  */
  readonly update?: string;
}

export function firewallTimeoutsToTerraform(struct?: FirewallTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function firewallTimeoutsToHclTerraform(struct?: FirewallTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall gridscale_firewall}
*/
export class Firewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Firewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Firewall to import
  * @param importFromId The id of the existing Firewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Firewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/firewall gridscale_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_firewall',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
    this._labels = config.labels;
    this._name = config.name;
    this._rulesV4In.internalValue = config.rulesV4In;
    this._rulesV4Out.internalValue = config.rulesV4Out;
    this._rulesV6In.internalValue = config.rulesV6In;
    this._rulesV6Out.internalValue = config.rulesV6Out;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
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

  // network - computed: true, optional: false, required: false
  private _network = new FirewallNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // rules_v4_in - computed: false, optional: true, required: false
  private _rulesV4In = new FirewallRulesV4InList(this, "rules_v4_in", false);
  public get rulesV4In() {
    return this._rulesV4In;
  }
  public putRulesV4In(value: FirewallRulesV4In[] | cdktf.IResolvable) {
    this._rulesV4In.internalValue = value;
  }
  public resetRulesV4In() {
    this._rulesV4In.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV4InInput() {
    return this._rulesV4In.internalValue;
  }

  // rules_v4_out - computed: false, optional: true, required: false
  private _rulesV4Out = new FirewallRulesV4OutList(this, "rules_v4_out", false);
  public get rulesV4Out() {
    return this._rulesV4Out;
  }
  public putRulesV4Out(value: FirewallRulesV4Out[] | cdktf.IResolvable) {
    this._rulesV4Out.internalValue = value;
  }
  public resetRulesV4Out() {
    this._rulesV4Out.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV4OutInput() {
    return this._rulesV4Out.internalValue;
  }

  // rules_v6_in - computed: false, optional: true, required: false
  private _rulesV6In = new FirewallRulesV6InList(this, "rules_v6_in", false);
  public get rulesV6In() {
    return this._rulesV6In;
  }
  public putRulesV6In(value: FirewallRulesV6In[] | cdktf.IResolvable) {
    this._rulesV6In.internalValue = value;
  }
  public resetRulesV6In() {
    this._rulesV6In.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV6InInput() {
    return this._rulesV6In.internalValue;
  }

  // rules_v6_out - computed: false, optional: true, required: false
  private _rulesV6Out = new FirewallRulesV6OutList(this, "rules_v6_out", false);
  public get rulesV6Out() {
    return this._rulesV6Out;
  }
  public putRulesV6Out(value: FirewallRulesV6Out[] | cdktf.IResolvable) {
    this._rulesV6Out.internalValue = value;
  }
  public resetRulesV6Out() {
    this._rulesV6Out.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV6OutInput() {
    return this._rulesV6Out.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      rules_v4_in: cdktf.listMapper(firewallRulesV4InToTerraform, true)(this._rulesV4In.internalValue),
      rules_v4_out: cdktf.listMapper(firewallRulesV4OutToTerraform, true)(this._rulesV4Out.internalValue),
      rules_v6_in: cdktf.listMapper(firewallRulesV6InToTerraform, true)(this._rulesV6In.internalValue),
      rules_v6_out: cdktf.listMapper(firewallRulesV6OutToTerraform, true)(this._rulesV6Out.internalValue),
      timeouts: firewallTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_v4_in: {
        value: cdktf.listMapperHcl(firewallRulesV4InToHclTerraform, true)(this._rulesV4In.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRulesV4InList",
      },
      rules_v4_out: {
        value: cdktf.listMapperHcl(firewallRulesV4OutToHclTerraform, true)(this._rulesV4Out.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRulesV4OutList",
      },
      rules_v6_in: {
        value: cdktf.listMapperHcl(firewallRulesV6InToHclTerraform, true)(this._rulesV6In.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRulesV6InList",
      },
      rules_v6_out: {
        value: cdktf.listMapperHcl(firewallRulesV6OutToHclTerraform, true)(this._rulesV6Out.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRulesV6OutList",
      },
      timeouts: {
        value: firewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
