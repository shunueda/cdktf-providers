// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreSecurityListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#id CoreSecurityList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}
  */
  readonly vcnId: string;
  /**
  * egress_security_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#egress_security_rules CoreSecurityList#egress_security_rules}
  */
  readonly egressSecurityRules?: CoreSecurityListEgressSecurityRules[] | cdktf.IResolvable;
  /**
  * ingress_security_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#ingress_security_rules CoreSecurityList#ingress_security_rules}
  */
  readonly ingressSecurityRules?: CoreSecurityListIngressSecurityRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#timeouts CoreSecurityList#timeouts}
  */
  readonly timeouts?: CoreSecurityListTimeouts;
}
export interface CoreSecurityListEgressSecurityRulesIcmpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#code CoreSecurityList#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#type CoreSecurityList#type}
  */
  readonly type: number;
}

export function coreSecurityListEgressSecurityRulesIcmpOptionsToTerraform(struct?: CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference | CoreSecurityListEgressSecurityRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function coreSecurityListEgressSecurityRulesIcmpOptionsToHclTerraform(struct?: CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference | CoreSecurityListEgressSecurityRulesIcmpOptions): any {
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

export class CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListEgressSecurityRulesIcmpOptions | undefined {
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

  public set internalValue(value: CoreSecurityListEgressSecurityRulesIcmpOptions | undefined) {
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
export interface CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min: number;
}

export function coreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeToTerraform(struct?: CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference | CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference | CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange): any {
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

export class CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange | undefined) {
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
export interface CoreSecurityListEgressSecurityRulesTcpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min?: number;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}
  */
  readonly sourcePortRange?: CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;
}

export function coreSecurityListEgressSecurityRulesTcpOptionsToTerraform(struct?: CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference | CoreSecurityListEgressSecurityRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    source_port_range: coreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreSecurityListEgressSecurityRulesTcpOptionsToHclTerraform(struct?: CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference | CoreSecurityListEgressSecurityRulesTcpOptions): any {
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
    source_port_range: {
      value: coreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListEgressSecurityRulesTcpOptions | undefined {
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
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListEgressSecurityRulesTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange) {
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
export interface CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min: number;
}

export function coreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeToTerraform(struct?: CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference | CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference | CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange): any {
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

export class CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange | undefined) {
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
export interface CoreSecurityListEgressSecurityRulesUdpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min?: number;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}
  */
  readonly sourcePortRange?: CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;
}

export function coreSecurityListEgressSecurityRulesUdpOptionsToTerraform(struct?: CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference | CoreSecurityListEgressSecurityRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    source_port_range: coreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreSecurityListEgressSecurityRulesUdpOptionsToHclTerraform(struct?: CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference | CoreSecurityListEgressSecurityRulesUdpOptions): any {
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
    source_port_range: {
      value: coreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListEgressSecurityRulesUdpOptions | undefined {
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
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListEgressSecurityRulesUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange) {
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
export interface CoreSecurityListEgressSecurityRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#description CoreSecurityList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#destination CoreSecurityList#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#destination_type CoreSecurityList#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * icmp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}
  */
  readonly icmpOptions?: CoreSecurityListEgressSecurityRulesIcmpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}
  */
  readonly tcpOptions?: CoreSecurityListEgressSecurityRulesTcpOptions;
  /**
  * udp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}
  */
  readonly udpOptions?: CoreSecurityListEgressSecurityRulesUdpOptions;
}

export function coreSecurityListEgressSecurityRulesToTerraform(struct?: CoreSecurityListEgressSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    stateless: cdktf.booleanToTerraform(struct!.stateless),
    icmp_options: coreSecurityListEgressSecurityRulesIcmpOptionsToTerraform(struct!.icmpOptions),
    tcp_options: coreSecurityListEgressSecurityRulesTcpOptionsToTerraform(struct!.tcpOptions),
    udp_options: coreSecurityListEgressSecurityRulesUdpOptionsToTerraform(struct!.udpOptions),
  }
}


export function coreSecurityListEgressSecurityRulesToHclTerraform(struct?: CoreSecurityListEgressSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
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
    stateless: {
      value: cdktf.booleanToHclTerraform(struct!.stateless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmp_options: {
      value: coreSecurityListEgressSecurityRulesIcmpOptionsToHclTerraform(struct!.icmpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListEgressSecurityRulesIcmpOptionsList",
    },
    tcp_options: {
      value: coreSecurityListEgressSecurityRulesTcpOptionsToHclTerraform(struct!.tcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListEgressSecurityRulesTcpOptionsList",
    },
    udp_options: {
      value: coreSecurityListEgressSecurityRulesUdpOptionsToHclTerraform(struct!.udpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListEgressSecurityRulesUdpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListEgressSecurityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreSecurityListEgressSecurityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._stateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateless = this._stateless;
    }
    if (this._icmpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOptions = this._icmpOptions?.internalValue;
    }
    if (this._tcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptions = this._tcpOptions?.internalValue;
    }
    if (this._udpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpOptions = this._udpOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListEgressSecurityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destination = undefined;
      this._destinationType = undefined;
      this._protocol = undefined;
      this._stateless = undefined;
      this._icmpOptions.internalValue = undefined;
      this._tcpOptions.internalValue = undefined;
      this._udpOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destination = value.destination;
      this._destinationType = value.destinationType;
      this._protocol = value.protocol;
      this._stateless = value.stateless;
      this._icmpOptions.internalValue = value.icmpOptions;
      this._tcpOptions.internalValue = value.tcpOptions;
      this._udpOptions.internalValue = value.udpOptions;
    }
  }

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

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
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

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions = new CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference(this, "icmp_options");
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public putIcmpOptions(value: CoreSecurityListEgressSecurityRulesIcmpOptions) {
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
  private _tcpOptions = new CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: CoreSecurityListEgressSecurityRulesTcpOptions) {
    this._tcpOptions.internalValue = value;
  }
  public resetTcpOptions() {
    this._tcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionsInput() {
    return this._tcpOptions.internalValue;
  }

  // udp_options - computed: false, optional: true, required: false
  private _udpOptions = new CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference(this, "udp_options");
  public get udpOptions() {
    return this._udpOptions;
  }
  public putUdpOptions(value: CoreSecurityListEgressSecurityRulesUdpOptions) {
    this._udpOptions.internalValue = value;
  }
  public resetUdpOptions() {
    this._udpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpOptionsInput() {
    return this._udpOptions.internalValue;
  }
}

export class CoreSecurityListEgressSecurityRulesList extends cdktf.ComplexList {
  public internalValue? : CoreSecurityListEgressSecurityRules[] | cdktf.IResolvable

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
  public get(index: number): CoreSecurityListEgressSecurityRulesOutputReference {
    return new CoreSecurityListEgressSecurityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreSecurityListIngressSecurityRulesIcmpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#code CoreSecurityList#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#type CoreSecurityList#type}
  */
  readonly type: number;
}

export function coreSecurityListIngressSecurityRulesIcmpOptionsToTerraform(struct?: CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference | CoreSecurityListIngressSecurityRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function coreSecurityListIngressSecurityRulesIcmpOptionsToHclTerraform(struct?: CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference | CoreSecurityListIngressSecurityRulesIcmpOptions): any {
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

export class CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListIngressSecurityRulesIcmpOptions | undefined {
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

  public set internalValue(value: CoreSecurityListIngressSecurityRulesIcmpOptions | undefined) {
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
export interface CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min: number;
}

export function coreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeToTerraform(struct?: CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference | CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference | CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange): any {
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

export class CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange | undefined) {
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
export interface CoreSecurityListIngressSecurityRulesTcpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min?: number;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}
  */
  readonly sourcePortRange?: CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;
}

export function coreSecurityListIngressSecurityRulesTcpOptionsToTerraform(struct?: CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference | CoreSecurityListIngressSecurityRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    source_port_range: coreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreSecurityListIngressSecurityRulesTcpOptionsToHclTerraform(struct?: CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference | CoreSecurityListIngressSecurityRulesTcpOptions): any {
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
    source_port_range: {
      value: coreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListIngressSecurityRulesTcpOptions | undefined {
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
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListIngressSecurityRulesTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange) {
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
export interface CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min: number;
}

export function coreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeToTerraform(struct?: CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference | CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference | CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange): any {
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

export class CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange | undefined) {
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
export interface CoreSecurityListIngressSecurityRulesUdpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#max CoreSecurityList#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#min CoreSecurityList#min}
  */
  readonly min?: number;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}
  */
  readonly sourcePortRange?: CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;
}

export function coreSecurityListIngressSecurityRulesUdpOptionsToTerraform(struct?: CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference | CoreSecurityListIngressSecurityRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    source_port_range: coreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreSecurityListIngressSecurityRulesUdpOptionsToHclTerraform(struct?: CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference | CoreSecurityListIngressSecurityRulesUdpOptions): any {
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
    source_port_range: {
      value: coreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreSecurityListIngressSecurityRulesUdpOptions | undefined {
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
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListIngressSecurityRulesUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange) {
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
export interface CoreSecurityListIngressSecurityRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#description CoreSecurityList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source CoreSecurityList#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#source_type CoreSecurityList#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}
  */
  readonly stateless?: boolean | cdktf.IResolvable;
  /**
  * icmp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}
  */
  readonly icmpOptions?: CoreSecurityListIngressSecurityRulesIcmpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}
  */
  readonly tcpOptions?: CoreSecurityListIngressSecurityRulesTcpOptions;
  /**
  * udp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}
  */
  readonly udpOptions?: CoreSecurityListIngressSecurityRulesUdpOptions;
}

export function coreSecurityListIngressSecurityRulesToTerraform(struct?: CoreSecurityListIngressSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: cdktf.stringToTerraform(struct!.source),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    stateless: cdktf.booleanToTerraform(struct!.stateless),
    icmp_options: coreSecurityListIngressSecurityRulesIcmpOptionsToTerraform(struct!.icmpOptions),
    tcp_options: coreSecurityListIngressSecurityRulesTcpOptionsToTerraform(struct!.tcpOptions),
    udp_options: coreSecurityListIngressSecurityRulesUdpOptionsToTerraform(struct!.udpOptions),
  }
}


export function coreSecurityListIngressSecurityRulesToHclTerraform(struct?: CoreSecurityListIngressSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless: {
      value: cdktf.booleanToHclTerraform(struct!.stateless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmp_options: {
      value: coreSecurityListIngressSecurityRulesIcmpOptionsToHclTerraform(struct!.icmpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListIngressSecurityRulesIcmpOptionsList",
    },
    tcp_options: {
      value: coreSecurityListIngressSecurityRulesTcpOptionsToHclTerraform(struct!.tcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListIngressSecurityRulesTcpOptionsList",
    },
    udp_options: {
      value: coreSecurityListIngressSecurityRulesUdpOptionsToHclTerraform(struct!.udpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreSecurityListIngressSecurityRulesUdpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreSecurityListIngressSecurityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreSecurityListIngressSecurityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._stateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateless = this._stateless;
    }
    if (this._icmpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOptions = this._icmpOptions?.internalValue;
    }
    if (this._tcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptions = this._tcpOptions?.internalValue;
    }
    if (this._udpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpOptions = this._udpOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreSecurityListIngressSecurityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourceType = undefined;
      this._stateless = undefined;
      this._icmpOptions.internalValue = undefined;
      this._tcpOptions.internalValue = undefined;
      this._udpOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourceType = value.sourceType;
      this._stateless = value.stateless;
      this._icmpOptions.internalValue = value.icmpOptions;
      this._tcpOptions.internalValue = value.tcpOptions;
      this._udpOptions.internalValue = value.udpOptions;
    }
  }

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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
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

  // stateless - computed: false, optional: true, required: false
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

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions = new CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference(this, "icmp_options");
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public putIcmpOptions(value: CoreSecurityListIngressSecurityRulesIcmpOptions) {
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
  private _tcpOptions = new CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: CoreSecurityListIngressSecurityRulesTcpOptions) {
    this._tcpOptions.internalValue = value;
  }
  public resetTcpOptions() {
    this._tcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionsInput() {
    return this._tcpOptions.internalValue;
  }

  // udp_options - computed: false, optional: true, required: false
  private _udpOptions = new CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference(this, "udp_options");
  public get udpOptions() {
    return this._udpOptions;
  }
  public putUdpOptions(value: CoreSecurityListIngressSecurityRulesUdpOptions) {
    this._udpOptions.internalValue = value;
  }
  public resetUdpOptions() {
    this._udpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpOptionsInput() {
    return this._udpOptions.internalValue;
  }
}

export class CoreSecurityListIngressSecurityRulesList extends cdktf.ComplexList {
  public internalValue? : CoreSecurityListIngressSecurityRules[] | cdktf.IResolvable

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
  public get(index: number): CoreSecurityListIngressSecurityRulesOutputReference {
    return new CoreSecurityListIngressSecurityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreSecurityListTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#create CoreSecurityList#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#delete CoreSecurityList#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#update CoreSecurityList#update}
  */
  readonly update?: string;
}

export function coreSecurityListTimeoutsToTerraform(struct?: CoreSecurityListTimeouts | cdktf.IResolvable): any {
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


export function coreSecurityListTimeoutsToHclTerraform(struct?: CoreSecurityListTimeouts | cdktf.IResolvable): any {
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

export class CoreSecurityListTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreSecurityListTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreSecurityListTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list oci_core_security_list}
*/
export class CoreSecurityList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_security_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreSecurityList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreSecurityList to import
  * @param importFromId The id of the existing CoreSecurityList that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreSecurityList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_security_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_security_list oci_core_security_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreSecurityListConfig
  */
  public constructor(scope: Construct, id: string, config: CoreSecurityListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_security_list',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._vcnId = config.vcnId;
    this._egressSecurityRules.internalValue = config.egressSecurityRules;
    this._ingressSecurityRules.internalValue = config.ingressSecurityRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // egress_security_rules - computed: false, optional: true, required: false
  private _egressSecurityRules = new CoreSecurityListEgressSecurityRulesList(this, "egress_security_rules", true);
  public get egressSecurityRules() {
    return this._egressSecurityRules;
  }
  public putEgressSecurityRules(value: CoreSecurityListEgressSecurityRules[] | cdktf.IResolvable) {
    this._egressSecurityRules.internalValue = value;
  }
  public resetEgressSecurityRules() {
    this._egressSecurityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressSecurityRulesInput() {
    return this._egressSecurityRules.internalValue;
  }

  // ingress_security_rules - computed: false, optional: true, required: false
  private _ingressSecurityRules = new CoreSecurityListIngressSecurityRulesList(this, "ingress_security_rules", true);
  public get ingressSecurityRules() {
    return this._ingressSecurityRules;
  }
  public putIngressSecurityRules(value: CoreSecurityListIngressSecurityRules[] | cdktf.IResolvable) {
    this._ingressSecurityRules.internalValue = value;
  }
  public resetIngressSecurityRules() {
    this._ingressSecurityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSecurityRulesInput() {
    return this._ingressSecurityRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreSecurityListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreSecurityListTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      egress_security_rules: cdktf.listMapper(coreSecurityListEgressSecurityRulesToTerraform, true)(this._egressSecurityRules.internalValue),
      ingress_security_rules: cdktf.listMapper(coreSecurityListIngressSecurityRulesToTerraform, true)(this._ingressSecurityRules.internalValue),
      timeouts: coreSecurityListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_security_rules: {
        value: cdktf.listMapperHcl(coreSecurityListEgressSecurityRulesToHclTerraform, true)(this._egressSecurityRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreSecurityListEgressSecurityRulesList",
      },
      ingress_security_rules: {
        value: cdktf.listMapperHcl(coreSecurityListIngressSecurityRulesToHclTerraform, true)(this._ingressSecurityRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreSecurityListIngressSecurityRulesList",
      },
      timeouts: {
        value: coreSecurityListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreSecurityListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
