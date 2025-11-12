// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewaySnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#gw_name GatewaySnat#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#id GatewaySnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nat mode. Currently only supports 'customized_snat'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#snat_mode GatewaySnat#snat_mode}
  */
  readonly snatMode?: string;
  /**
  * Whether to sync the policies to the HA gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#sync_to_ha GatewaySnat#sync_to_ha}
  */
  readonly syncToHa?: boolean | cdktf.IResolvable;
  /**
  * snat_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#snat_policy GatewaySnat#snat_policy}
  */
  readonly snatPolicy?: GatewaySnatSnatPolicy[] | cdktf.IResolvable;
}
export interface GatewaySnatConnectionPolicy {
}

export function gatewaySnatConnectionPolicyToTerraform(struct?: GatewaySnatConnectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewaySnatConnectionPolicyToHclTerraform(struct?: GatewaySnatConnectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewaySnatConnectionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewaySnatConnectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewaySnatConnectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_route_entry - computed: true, optional: false, required: false
  public get applyRouteEntry() {
    return this.getBooleanAttribute('apply_route_entry');
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // exclude_rtb - computed: true, optional: false, required: false
  public get excludeRtb() {
    return this.getStringAttribute('exclude_rtb');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // mark - computed: true, optional: false, required: false
  public get mark() {
    return this.getStringAttribute('mark');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // snat_ips - computed: true, optional: false, required: false
  public get snatIps() {
    return this.getStringAttribute('snat_ips');
  }

  // snat_port - computed: true, optional: false, required: false
  public get snatPort() {
    return this.getStringAttribute('snat_port');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class GatewaySnatConnectionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): GatewaySnatConnectionPolicyOutputReference {
    return new GatewaySnatConnectionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewaySnatInterfacePolicy {
}

export function gatewaySnatInterfacePolicyToTerraform(struct?: GatewaySnatInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewaySnatInterfacePolicyToHclTerraform(struct?: GatewaySnatInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewaySnatInterfacePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewaySnatInterfacePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewaySnatInterfacePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_route_entry - computed: true, optional: false, required: false
  public get applyRouteEntry() {
    return this.getBooleanAttribute('apply_route_entry');
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // exclude_rtb - computed: true, optional: false, required: false
  public get excludeRtb() {
    return this.getStringAttribute('exclude_rtb');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // mark - computed: true, optional: false, required: false
  public get mark() {
    return this.getStringAttribute('mark');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // snat_ips - computed: true, optional: false, required: false
  public get snatIps() {
    return this.getStringAttribute('snat_ips');
  }

  // snat_port - computed: true, optional: false, required: false
  public get snatPort() {
    return this.getStringAttribute('snat_port');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class GatewaySnatInterfacePolicyList extends cdktf.ComplexList {

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
  public get(index: number): GatewaySnatInterfacePolicyOutputReference {
    return new GatewaySnatInterfacePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewaySnatSnatPolicy {
  /**
  * This is an option to program the route entry 'DST CIDR pointing to Aviatrix Gateway' into Cloud platform routing table. Type: Boolean. Default: True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#apply_route_entry GatewaySnat#apply_route_entry}
  */
  readonly applyRouteEntry?: boolean | cdktf.IResolvable;
  /**
  * This is a qualifier condition that specifies output connection where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#connection GatewaySnat#connection}
  */
  readonly connection?: string;
  /**
  * This is a qualifier condition that specifies a destination IP address range where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#dst_cidr GatewaySnat#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * This is a qualifier condition that specifies a destination port where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#dst_port GatewaySnat#dst_port}
  */
  readonly dstPort?: string;
  /**
  * This field specifies which VPC private route table will not be programmed with the default route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#exclude_rtb GatewaySnat#exclude_rtb}
  */
  readonly excludeRtb?: string;
  /**
  * This is a qualifier condition that specifies output interface where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#interface GatewaySnat#interface}
  */
  readonly interface?: string;
  /**
  * This is a qualifier condition that specifies a tag or mark of a TCP session where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#mark GatewaySnat#mark}
  */
  readonly mark?: string;
  /**
  * This is a qualifier condition that specifies a destination port protocol where the rule applies. Default: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#protocol GatewaySnat#protocol}
  */
  readonly protocol?: string;
  /**
  * This is a rule field that specifies the changed source IP address when all specified qualifier conditions meet. When left blank, this field is not used. One of the rule fields must be specified for this rule to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#snat_ips GatewaySnat#snat_ips}
  */
  readonly snatIps?: string;
  /**
  * This is a rule field that specifies the changed source port when all specified qualifier conditions meet. When left blank, this field is not used. One of the rule fields must be specified for this rule to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#snat_port GatewaySnat#snat_port}
  */
  readonly snatPort?: string;
  /**
  * This is a qualifier condition that specifies a source IP address range where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#src_cidr GatewaySnat#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * This is a qualifier condition that specifies a source port that the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#src_port GatewaySnat#src_port}
  */
  readonly srcPort?: string;
}

export function gatewaySnatSnatPolicyToTerraform(struct?: GatewaySnatSnatPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_route_entry: cdktf.booleanToTerraform(struct!.applyRouteEntry),
    connection: cdktf.stringToTerraform(struct!.connection),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    exclude_rtb: cdktf.stringToTerraform(struct!.excludeRtb),
    interface: cdktf.stringToTerraform(struct!.interface),
    mark: cdktf.stringToTerraform(struct!.mark),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    snat_ips: cdktf.stringToTerraform(struct!.snatIps),
    snat_port: cdktf.stringToTerraform(struct!.snatPort),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function gatewaySnatSnatPolicyToHclTerraform(struct?: GatewaySnatSnatPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_route_entry: {
      value: cdktf.booleanToHclTerraform(struct!.applyRouteEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
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
    exclude_rtb: {
      value: cdktf.stringToHclTerraform(struct!.excludeRtb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mark: {
      value: cdktf.stringToHclTerraform(struct!.mark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_ips: {
      value: cdktf.stringToHclTerraform(struct!.snatIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_port: {
      value: cdktf.stringToHclTerraform(struct!.snatPort),
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

export class GatewaySnatSnatPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewaySnatSnatPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyRouteEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyRouteEntry = this._applyRouteEntry;
    }
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._excludeRtb !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRtb = this._excludeRtb;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._mark !== undefined) {
      hasAnyValues = true;
      internalValueResult.mark = this._mark;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._snatIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIps = this._snatIps;
    }
    if (this._snatPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPort = this._snatPort;
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

  public set internalValue(value: GatewaySnatSnatPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyRouteEntry = undefined;
      this._connection = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._excludeRtb = undefined;
      this._interface = undefined;
      this._mark = undefined;
      this._protocol = undefined;
      this._snatIps = undefined;
      this._snatPort = undefined;
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
      this._applyRouteEntry = value.applyRouteEntry;
      this._connection = value.connection;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._excludeRtb = value.excludeRtb;
      this._interface = value.interface;
      this._mark = value.mark;
      this._protocol = value.protocol;
      this._snatIps = value.snatIps;
      this._snatPort = value.snatPort;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // apply_route_entry - computed: false, optional: true, required: false
  private _applyRouteEntry?: boolean | cdktf.IResolvable; 
  public get applyRouteEntry() {
    return this.getBooleanAttribute('apply_route_entry');
  }
  public set applyRouteEntry(value: boolean | cdktf.IResolvable) {
    this._applyRouteEntry = value;
  }
  public resetApplyRouteEntry() {
    this._applyRouteEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyRouteEntryInput() {
    return this._applyRouteEntry;
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
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

  // exclude_rtb - computed: false, optional: true, required: false
  private _excludeRtb?: string; 
  public get excludeRtb() {
    return this.getStringAttribute('exclude_rtb');
  }
  public set excludeRtb(value: string) {
    this._excludeRtb = value;
  }
  public resetExcludeRtb() {
    this._excludeRtb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRtbInput() {
    return this._excludeRtb;
  }

  // interface - computed: false, optional: true, required: false
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

  // mark - computed: false, optional: true, required: false
  private _mark?: string; 
  public get mark() {
    return this.getStringAttribute('mark');
  }
  public set mark(value: string) {
    this._mark = value;
  }
  public resetMark() {
    this._mark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markInput() {
    return this._mark;
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

  // snat_ips - computed: false, optional: true, required: false
  private _snatIps?: string; 
  public get snatIps() {
    return this.getStringAttribute('snat_ips');
  }
  public set snatIps(value: string) {
    this._snatIps = value;
  }
  public resetSnatIps() {
    this._snatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpsInput() {
    return this._snatIps;
  }

  // snat_port - computed: false, optional: true, required: false
  private _snatPort?: string; 
  public get snatPort() {
    return this.getStringAttribute('snat_port');
  }
  public set snatPort(value: string) {
    this._snatPort = value;
  }
  public resetSnatPort() {
    this._snatPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortInput() {
    return this._snatPort;
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

export class GatewaySnatSnatPolicyList extends cdktf.ComplexList {
  public internalValue? : GatewaySnatSnatPolicy[] | cdktf.IResolvable

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
  public get(index: number): GatewaySnatSnatPolicyOutputReference {
    return new GatewaySnatSnatPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat aviatrix_gateway_snat}
*/
export class GatewaySnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_gateway_snat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewaySnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewaySnat to import
  * @param importFromId The id of the existing GatewaySnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewaySnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_gateway_snat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway_snat aviatrix_gateway_snat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewaySnatConfig
  */
  public constructor(scope: Construct, id: string, config: GatewaySnatConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_gateway_snat',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gwName = config.gwName;
    this._id = config.id;
    this._snatMode = config.snatMode;
    this._syncToHa = config.syncToHa;
    this._snatPolicy.internalValue = config.snatPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_policy - computed: true, optional: false, required: false
  private _connectionPolicy = new GatewaySnatConnectionPolicyList(this, "connection_policy", false);
  public get connectionPolicy() {
    return this._connectionPolicy;
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // interface_policy - computed: true, optional: false, required: false
  private _interfacePolicy = new GatewaySnatInterfacePolicyList(this, "interface_policy", false);
  public get interfacePolicy() {
    return this._interfacePolicy;
  }

  // snat_mode - computed: false, optional: true, required: false
  private _snatMode?: string; 
  public get snatMode() {
    return this.getStringAttribute('snat_mode');
  }
  public set snatMode(value: string) {
    this._snatMode = value;
  }
  public resetSnatMode() {
    this._snatMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatModeInput() {
    return this._snatMode;
  }

  // sync_to_ha - computed: false, optional: true, required: false
  private _syncToHa?: boolean | cdktf.IResolvable; 
  public get syncToHa() {
    return this.getBooleanAttribute('sync_to_ha');
  }
  public set syncToHa(value: boolean | cdktf.IResolvable) {
    this._syncToHa = value;
  }
  public resetSyncToHa() {
    this._syncToHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToHaInput() {
    return this._syncToHa;
  }

  // snat_policy - computed: false, optional: true, required: false
  private _snatPolicy = new GatewaySnatSnatPolicyList(this, "snat_policy", false);
  public get snatPolicy() {
    return this._snatPolicy;
  }
  public putSnatPolicy(value: GatewaySnatSnatPolicy[] | cdktf.IResolvable) {
    this._snatPolicy.internalValue = value;
  }
  public resetSnatPolicy() {
    this._snatPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPolicyInput() {
    return this._snatPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      snat_mode: cdktf.stringToTerraform(this._snatMode),
      sync_to_ha: cdktf.booleanToTerraform(this._syncToHa),
      snat_policy: cdktf.listMapper(gatewaySnatSnatPolicyToTerraform, true)(this._snatPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      snat_mode: {
        value: cdktf.stringToHclTerraform(this._snatMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_to_ha: {
        value: cdktf.booleanToHclTerraform(this._syncToHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snat_policy: {
        value: cdktf.listMapperHcl(gatewaySnatSnatPolicyToHclTerraform, true)(this._snatPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewaySnatSnatPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
