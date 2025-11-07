// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreNetworkSecurityGroupSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}
  */
  readonly networkSecurityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * icmp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#icmp_options CoreNetworkSecurityGroupSecurityRule#icmp_options}
  */
  readonly icmpOptions?: CoreNetworkSecurityGroupSecurityRuleIcmpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#tcp_options CoreNetworkSecurityGroupSecurityRule#tcp_options}
  */
  readonly tcpOptions?: CoreNetworkSecurityGroupSecurityRuleTcpOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#timeouts CoreNetworkSecurityGroupSecurityRule#timeouts}
  */
  readonly timeouts?: CoreNetworkSecurityGroupSecurityRuleTimeouts;
  /**
  * udp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#udp_options CoreNetworkSecurityGroupSecurityRule#udp_options}
  */
  readonly udpOptions?: CoreNetworkSecurityGroupSecurityRuleUdpOptions;
}
export interface CoreNetworkSecurityGroupSecurityRuleIcmpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}
  */
  readonly type: number;
}

export function coreNetworkSecurityGroupSecurityRuleIcmpOptionsToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function coreNetworkSecurityGroupSecurityRuleIcmpOptionsToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleIcmpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleIcmpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}
  */
  readonly min: number;
}

export function coreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}
  */
  readonly min: number;
}

export function coreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}
  */
  readonly destinationPortRange?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}
  */
  readonly sourcePortRange?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange;
}

export function coreNetworkSecurityGroupSecurityRuleTcpOptionsToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreNetworkSecurityGroupSecurityRuleTcpOptionsToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
    }
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortRange.internalValue = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortRange.internalValue = value.destinationPortRange;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange = new CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange) {
    this._destinationPortRange.internalValue = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange.internalValue;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange) {
    this._sourcePortRange.internalValue = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange.internalValue;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}
  */
  readonly update?: string;
}

export function coreNetworkSecurityGroupSecurityRuleTimeoutsToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTimeouts | cdktf.IResolvable): any {
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


export function coreNetworkSecurityGroupSecurityRuleTimeoutsToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleTimeouts | cdktf.IResolvable): any {
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

export class CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleTimeouts | cdktf.IResolvable | undefined) {
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
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}
  */
  readonly min: number;
}

export function coreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}
  */
  readonly min: number;
}

export function coreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}
  */
  readonly destinationPortRange?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}
  */
  readonly sourcePortRange?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange;
}

export function coreNetworkSecurityGroupSecurityRuleUdpOptionsToTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreNetworkSecurityGroupSecurityRuleUdpOptionsToHclTerraform(struct?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference | CoreNetworkSecurityGroupSecurityRuleUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreNetworkSecurityGroupSecurityRuleUdpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
    }
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkSecurityGroupSecurityRuleUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortRange.internalValue = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortRange.internalValue = value.destinationPortRange;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange = new CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange) {
    this._destinationPortRange.internalValue = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange.internalValue;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange) {
    this._sourcePortRange.internalValue = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule oci_core_network_security_group_security_rule}
*/
export class CoreNetworkSecurityGroupSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_network_security_group_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreNetworkSecurityGroupSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreNetworkSecurityGroupSecurityRule to import
  * @param importFromId The id of the existing CoreNetworkSecurityGroupSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreNetworkSecurityGroupSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_network_security_group_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_network_security_group_security_rule oci_core_network_security_group_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreNetworkSecurityGroupSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CoreNetworkSecurityGroupSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_network_security_group_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._destination = config.destination;
    this._destinationType = config.destinationType;
    this._direction = config.direction;
    this._id = config.id;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._protocol = config.protocol;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._stateless = config.stateless;
    this._icmpOptions.internalValue = config.icmpOptions;
    this._tcpOptions.internalValue = config.tcpOptions;
    this._timeouts.internalValue = config.timeouts;
    this._udpOptions.internalValue = config.udpOptions;
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

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId?: string; 
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // stateless - computed: true, optional: true, required: false
  private _stateless?: boolean | cdktf.IResolvable; 
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }
  public set stateless(value: boolean | cdktf.IResolvable) {
    this._stateless = value;
  }
  public resetStateless() {
    this._stateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessInput() {
    return this._stateless;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions = new CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference(this, "icmp_options");
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public putIcmpOptions(value: CoreNetworkSecurityGroupSecurityRuleIcmpOptions) {
    this._icmpOptions.internalValue = value;
  }
  public resetIcmpOptions() {
    this._icmpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOptionsInput() {
    return this._icmpOptions.internalValue;
  }

  // tcp_options - computed: false, optional: true, required: false
  private _tcpOptions = new CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: CoreNetworkSecurityGroupSecurityRuleTcpOptions) {
    this._tcpOptions.internalValue = value;
  }
  public resetTcpOptions() {
    this._tcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionsInput() {
    return this._tcpOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreNetworkSecurityGroupSecurityRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // udp_options - computed: false, optional: true, required: false
  private _udpOptions = new CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference(this, "udp_options");
  public get udpOptions() {
    return this._udpOptions;
  }
  public putUdpOptions(value: CoreNetworkSecurityGroupSecurityRuleUdpOptions) {
    this._udpOptions.internalValue = value;
  }
  public resetUdpOptions() {
    this._udpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpOptionsInput() {
    return this._udpOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      protocol: cdktf.stringToTerraform(this._protocol),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      stateless: cdktf.booleanToTerraform(this._stateless),
      icmp_options: coreNetworkSecurityGroupSecurityRuleIcmpOptionsToTerraform(this._icmpOptions.internalValue),
      tcp_options: coreNetworkSecurityGroupSecurityRuleTcpOptionsToTerraform(this._tcpOptions.internalValue),
      timeouts: coreNetworkSecurityGroupSecurityRuleTimeoutsToTerraform(this._timeouts.internalValue),
      udp_options: coreNetworkSecurityGroupSecurityRuleUdpOptionsToTerraform(this._udpOptions.internalValue),
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
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      network_security_group_id: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateless: {
        value: cdktf.booleanToHclTerraform(this._stateless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_options: {
        value: coreNetworkSecurityGroupSecurityRuleIcmpOptionsToHclTerraform(this._icmpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreNetworkSecurityGroupSecurityRuleIcmpOptionsList",
      },
      tcp_options: {
        value: coreNetworkSecurityGroupSecurityRuleTcpOptionsToHclTerraform(this._tcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreNetworkSecurityGroupSecurityRuleTcpOptionsList",
      },
      timeouts: {
        value: coreNetworkSecurityGroupSecurityRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreNetworkSecurityGroupSecurityRuleTimeouts",
      },
      udp_options: {
        value: coreNetworkSecurityGroupSecurityRuleUdpOptionsToHclTerraform(this._udpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreNetworkSecurityGroupSecurityRuleUdpOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
