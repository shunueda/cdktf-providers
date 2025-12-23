// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayDnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#gw_name GatewayDnat#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#id GatewayDnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dnat_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#dnat_policy GatewayDnat#dnat_policy}
  */
  readonly dnatPolicy: GatewayDnatDnatPolicy[] | cdktf.IResolvable;
}
export interface GatewayDnatConnectionPolicy {
}

export function gatewayDnatConnectionPolicyToTerraform(struct?: GatewayDnatConnectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayDnatConnectionPolicyToHclTerraform(struct?: GatewayDnatConnectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayDnatConnectionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayDnatConnectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayDnatConnectionPolicy | undefined) {
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

  // dnat_ips - computed: true, optional: false, required: false
  public get dnatIps() {
    return this.getStringAttribute('dnat_ips');
  }

  // dnat_port - computed: true, optional: false, required: false
  public get dnatPort() {
    return this.getStringAttribute('dnat_port');
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

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class GatewayDnatConnectionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): GatewayDnatConnectionPolicyOutputReference {
    return new GatewayDnatConnectionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayDnatInterfacePolicy {
}

export function gatewayDnatInterfacePolicyToTerraform(struct?: GatewayDnatInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayDnatInterfacePolicyToHclTerraform(struct?: GatewayDnatInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayDnatInterfacePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayDnatInterfacePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayDnatInterfacePolicy | undefined) {
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

  // dnat_ips - computed: true, optional: false, required: false
  public get dnatIps() {
    return this.getStringAttribute('dnat_ips');
  }

  // dnat_port - computed: true, optional: false, required: false
  public get dnatPort() {
    return this.getStringAttribute('dnat_port');
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

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class GatewayDnatInterfacePolicyList extends cdktf.ComplexList {

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
  public get(index: number): GatewayDnatInterfacePolicyOutputReference {
    return new GatewayDnatInterfacePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayDnatDnatPolicy {
  /**
  * This is an option to program the route entry 'DST CIDR pointing to Aviatrix Gateway' into Cloud platform routing table. Type: Boolean. Default: True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#apply_route_entry GatewayDnat#apply_route_entry}
  */
  readonly applyRouteEntry?: boolean | cdktf.IResolvable;
  /**
  * This is a qualifier condition that specifies output connection where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#connection GatewayDnat#connection}
  */
  readonly connection?: string;
  /**
  * This is a rule field that specifies the translated destination IP address when all specified qualifier conditions meet. When left blank, this field is not used. One of the rule field must be specified for this rule to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#dnat_ips GatewayDnat#dnat_ips}
  */
  readonly dnatIps?: string;
  /**
  * This is a rule field that specifies the translated destination port when all specified qualifier conditions meet. When left blank, this field is not used. One of the rule field must be specified for this rule to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#dnat_port GatewayDnat#dnat_port}
  */
  readonly dnatPort?: string;
  /**
  * This is a qualifier condition that specifies a destination IP address range where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#dst_cidr GatewayDnat#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * This is a qualifier condition that specifies a destination port where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#dst_port GatewayDnat#dst_port}
  */
  readonly dstPort?: string;
  /**
  * This field specifies which VPC private route table will not be programmed with the default route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#exclude_rtb GatewayDnat#exclude_rtb}
  */
  readonly excludeRtb?: string;
  /**
  * This is a qualifier condition that specifies output interface where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#interface GatewayDnat#interface}
  */
  readonly interface?: string;
  /**
  * This is a rule field that specifies a tag or mark of a TCP session when all qualifier conditions meet. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#mark GatewayDnat#mark}
  */
  readonly mark?: string;
  /**
  * This is a qualifier condition that specifies a destination port protocol where the rule applies. Default: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#protocol GatewayDnat#protocol}
  */
  readonly protocol?: string;
  /**
  * This is a qualifier condition that specifies a source IP address range where the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#src_cidr GatewayDnat#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * This is a qualifier condition that specifies a source port that the rule applies. When left blank, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#src_port GatewayDnat#src_port}
  */
  readonly srcPort?: string;
}

export function gatewayDnatDnatPolicyToTerraform(struct?: GatewayDnatDnatPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_route_entry: cdktf.booleanToTerraform(struct!.applyRouteEntry),
    connection: cdktf.stringToTerraform(struct!.connection),
    dnat_ips: cdktf.stringToTerraform(struct!.dnatIps),
    dnat_port: cdktf.stringToTerraform(struct!.dnatPort),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    exclude_rtb: cdktf.stringToTerraform(struct!.excludeRtb),
    interface: cdktf.stringToTerraform(struct!.interface),
    mark: cdktf.stringToTerraform(struct!.mark),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function gatewayDnatDnatPolicyToHclTerraform(struct?: GatewayDnatDnatPolicy | cdktf.IResolvable): any {
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
    dnat_ips: {
      value: cdktf.stringToHclTerraform(struct!.dnatIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnat_port: {
      value: cdktf.stringToHclTerraform(struct!.dnatPort),
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

export class GatewayDnatDnatPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayDnatDnatPolicy | cdktf.IResolvable | undefined {
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
    if (this._dnatIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatIps = this._dnatIps;
    }
    if (this._dnatPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatPort = this._dnatPort;
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

  public set internalValue(value: GatewayDnatDnatPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyRouteEntry = undefined;
      this._connection = undefined;
      this._dnatIps = undefined;
      this._dnatPort = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._excludeRtb = undefined;
      this._interface = undefined;
      this._mark = undefined;
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
      this._applyRouteEntry = value.applyRouteEntry;
      this._connection = value.connection;
      this._dnatIps = value.dnatIps;
      this._dnatPort = value.dnatPort;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._excludeRtb = value.excludeRtb;
      this._interface = value.interface;
      this._mark = value.mark;
      this._protocol = value.protocol;
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

  // dnat_ips - computed: false, optional: true, required: false
  private _dnatIps?: string; 
  public get dnatIps() {
    return this.getStringAttribute('dnat_ips');
  }
  public set dnatIps(value: string) {
    this._dnatIps = value;
  }
  public resetDnatIps() {
    this._dnatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatIpsInput() {
    return this._dnatIps;
  }

  // dnat_port - computed: false, optional: true, required: false
  private _dnatPort?: string; 
  public get dnatPort() {
    return this.getStringAttribute('dnat_port');
  }
  public set dnatPort(value: string) {
    this._dnatPort = value;
  }
  public resetDnatPort() {
    this._dnatPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatPortInput() {
    return this._dnatPort;
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

export class GatewayDnatDnatPolicyList extends cdktf.ComplexList {
  public internalValue? : GatewayDnatDnatPolicy[] | cdktf.IResolvable

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
  public get(index: number): GatewayDnatDnatPolicyOutputReference {
    return new GatewayDnatDnatPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat aviatrix_gateway_dnat}
*/
export class GatewayDnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_gateway_dnat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayDnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayDnat to import
  * @param importFromId The id of the existing GatewayDnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayDnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_gateway_dnat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/gateway_dnat aviatrix_gateway_dnat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayDnatConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayDnatConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_gateway_dnat',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._dnatPolicy.internalValue = config.dnatPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_policy - computed: true, optional: false, required: false
  private _connectionPolicy = new GatewayDnatConnectionPolicyList(this, "connection_policy", false);
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
  private _interfacePolicy = new GatewayDnatInterfacePolicyList(this, "interface_policy", false);
  public get interfacePolicy() {
    return this._interfacePolicy;
  }

  // dnat_policy - computed: false, optional: false, required: true
  private _dnatPolicy = new GatewayDnatDnatPolicyList(this, "dnat_policy", false);
  public get dnatPolicy() {
    return this._dnatPolicy;
  }
  public putDnatPolicy(value: GatewayDnatDnatPolicy[] | cdktf.IResolvable) {
    this._dnatPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatPolicyInput() {
    return this._dnatPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      dnat_policy: cdktf.listMapper(gatewayDnatDnatPolicyToTerraform, true)(this._dnatPolicy.internalValue),
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
      dnat_policy: {
        value: cdktf.listMapperHcl(gatewayDnatDnatPolicyToHclTerraform, true)(this._dnatPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayDnatDnatPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
