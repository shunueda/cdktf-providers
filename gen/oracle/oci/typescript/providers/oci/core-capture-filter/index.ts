// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreCaptureFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * flow_log_capture_filter_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#flow_log_capture_filter_rules CoreCaptureFilter#flow_log_capture_filter_rules}
  */
  readonly flowLogCaptureFilterRules?: CoreCaptureFilterFlowLogCaptureFilterRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#timeouts CoreCaptureFilter#timeouts}
  */
  readonly timeouts?: CoreCaptureFilterTimeouts;
  /**
  * vtap_capture_filter_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#vtap_capture_filter_rules CoreCaptureFilter#vtap_capture_filter_rules}
  */
  readonly vtapCaptureFilterRules?: CoreCaptureFilterVtapCaptureFilterRules[] | cdktf.IResolvable;
}
export interface CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}
  */
  readonly type: number;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions): any {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions | undefined) {
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

  // code - computed: true, optional: true, required: false
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange): any {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange | undefined) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange): any {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange | undefined) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}
  */
  readonly destinationPortRange?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}
  */
  readonly sourcePortRange?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions | undefined) {
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
  private _destinationPortRange = new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange) {
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
  private _sourcePortRange = new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange): any {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange | undefined) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange): any {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange | undefined) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}
  */
  readonly destinationPortRange?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}
  */
  readonly sourcePortRange?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference | CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions | undefined) {
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
  private _destinationPortRange = new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange) {
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
  private _sourcePortRange = new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange) {
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
export interface CoreCaptureFilterFlowLogCaptureFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}
  */
  readonly flowLogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}
  */
  readonly samplingRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * icmp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}
  */
  readonly icmpOptions?: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}
  */
  readonly tcpOptions?: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions;
  /**
  * udp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}
  */
  readonly udpOptions?: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions;
}

export function coreCaptureFilterFlowLogCaptureFilterRulesToTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    flow_log_type: cdktf.stringToTerraform(struct!.flowLogType),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    icmp_options: coreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToTerraform(struct!.icmpOptions),
    tcp_options: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToTerraform(struct!.tcpOptions),
    udp_options: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToTerraform(struct!.udpOptions),
  }
}


export function coreCaptureFilterFlowLogCaptureFilterRulesToHclTerraform(struct?: CoreCaptureFilterFlowLogCaptureFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_log_type: {
      value: cdktf.stringToHclTerraform(struct!.flowLogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    rule_action: {
      value: cdktf.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_options: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToHclTerraform(struct!.icmpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList",
    },
    tcp_options: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToHclTerraform(struct!.tcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList",
    },
    udp_options: {
      value: coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToHclTerraform(struct!.udpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreCaptureFilterFlowLogCaptureFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._flowLogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogType = this._flowLogType;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
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

  public set internalValue(value: CoreCaptureFilterFlowLogCaptureFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidr = undefined;
      this._flowLogType = undefined;
      this._isEnabled = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._samplingRate = undefined;
      this._sourceCidr = undefined;
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
      this._destinationCidr = value.destinationCidr;
      this._flowLogType = value.flowLogType;
      this._isEnabled = value.isEnabled;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._samplingRate = value.samplingRate;
      this._sourceCidr = value.sourceCidr;
      this._icmpOptions.internalValue = value.icmpOptions;
      this._tcpOptions.internalValue = value.tcpOptions;
      this._udpOptions.internalValue = value.udpOptions;
    }
  }

  // destination_cidr - computed: true, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // flow_log_type - computed: true, optional: true, required: false
  private _flowLogType?: string; 
  public get flowLogType() {
    return this.getStringAttribute('flow_log_type');
  }
  public set flowLogType(value: string) {
    this._flowLogType = value;
  }
  public resetFlowLogType() {
    this._flowLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogTypeInput() {
    return this._flowLogType;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: true, optional: true, required: false
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

  // rule_action - computed: true, optional: true, required: false
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  public resetRuleAction() {
    this._ruleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // sampling_rate - computed: true, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // source_cidr - computed: true, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions = new CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(this, "icmp_options");
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public putIcmpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions) {
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
  private _tcpOptions = new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions) {
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
  private _udpOptions = new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(this, "udp_options");
  public get udpOptions() {
    return this._udpOptions;
  }
  public putUdpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions) {
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

export class CoreCaptureFilterFlowLogCaptureFilterRulesList extends cdktf.ComplexList {
  public internalValue? : CoreCaptureFilterFlowLogCaptureFilterRules[] | cdktf.IResolvable

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
  public get(index: number): CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference {
    return new CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreCaptureFilterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}
  */
  readonly update?: string;
}

export function coreCaptureFilterTimeoutsToTerraform(struct?: CoreCaptureFilterTimeouts | cdktf.IResolvable): any {
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


export function coreCaptureFilterTimeoutsToHclTerraform(struct?: CoreCaptureFilterTimeouts | cdktf.IResolvable): any {
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

export class CoreCaptureFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreCaptureFilterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreCaptureFilterTimeouts | cdktf.IResolvable | undefined) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}
  */
  readonly type: number;
}

export function coreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions): any {
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

export class CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions | undefined) {
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

  // code - computed: true, optional: true, required: false
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
export interface CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange): any {
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

export class CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange | undefined) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange): any {
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

export class CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange | undefined) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesTcpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}
  */
  readonly destinationPortRange?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}
  */
  readonly sourcePortRange?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange;
}

export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesTcpOptionsToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesTcpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions | undefined) {
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
  private _destinationPortRange = new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange) {
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
  private _sourcePortRange = new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange): any {
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

export class CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange | undefined) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}
  */
  readonly min: number;
}

export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange): any {
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

export class CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange | undefined) {
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
export interface CoreCaptureFilterVtapCaptureFilterRulesUdpOptions {
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}
  */
  readonly destinationPortRange?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}
  */
  readonly sourcePortRange?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange;
}

export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct!.destinationPortRange),
    source_port_range: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct!.sourcePortRange),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesUdpOptionsToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference | CoreCaptureFilterVtapCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range: {
      value: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList",
    },
    source_port_range: {
      value: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRulesUdpOptions | undefined {
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions | undefined) {
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
  private _destinationPortRange = new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange) {
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
  private _sourcePortRange = new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange) {
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
export interface CoreCaptureFilterVtapCaptureFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}
  */
  readonly trafficDirection: string;
  /**
  * icmp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}
  */
  readonly icmpOptions?: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}
  */
  readonly tcpOptions?: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions;
  /**
  * udp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}
  */
  readonly udpOptions?: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions;
}

export function coreCaptureFilterVtapCaptureFilterRulesToTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    traffic_direction: cdktf.stringToTerraform(struct!.trafficDirection),
    icmp_options: coreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToTerraform(struct!.icmpOptions),
    tcp_options: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsToTerraform(struct!.tcpOptions),
    udp_options: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsToTerraform(struct!.udpOptions),
  }
}


export function coreCaptureFilterVtapCaptureFilterRulesToHclTerraform(struct?: CoreCaptureFilterVtapCaptureFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
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
    rule_action: {
      value: cdktf.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_direction: {
      value: cdktf.stringToHclTerraform(struct!.trafficDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_options: {
      value: coreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToHclTerraform(struct!.icmpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList",
    },
    tcp_options: {
      value: coreCaptureFilterVtapCaptureFilterRulesTcpOptionsToHclTerraform(struct!.tcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList",
    },
    udp_options: {
      value: coreCaptureFilterVtapCaptureFilterRulesUdpOptionsToHclTerraform(struct!.udpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCaptureFilterVtapCaptureFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreCaptureFilterVtapCaptureFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._trafficDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDirection = this._trafficDirection;
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

  public set internalValue(value: CoreCaptureFilterVtapCaptureFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidr = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._sourceCidr = undefined;
      this._trafficDirection = undefined;
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
      this._destinationCidr = value.destinationCidr;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._sourceCidr = value.sourceCidr;
      this._trafficDirection = value.trafficDirection;
      this._icmpOptions.internalValue = value.icmpOptions;
      this._tcpOptions.internalValue = value.tcpOptions;
      this._udpOptions.internalValue = value.udpOptions;
    }
  }

  // destination_cidr - computed: true, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // protocol - computed: true, optional: true, required: false
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

  // rule_action - computed: true, optional: true, required: false
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  public resetRuleAction() {
    this._ruleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // source_cidr - computed: true, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // traffic_direction - computed: false, optional: false, required: true
  private _trafficDirection?: string; 
  public get trafficDirection() {
    return this.getStringAttribute('traffic_direction');
  }
  public set trafficDirection(value: string) {
    this._trafficDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDirectionInput() {
    return this._trafficDirection;
  }

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions = new CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(this, "icmp_options");
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public putIcmpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions) {
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
  private _tcpOptions = new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions) {
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
  private _udpOptions = new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(this, "udp_options");
  public get udpOptions() {
    return this._udpOptions;
  }
  public putUdpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions) {
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

export class CoreCaptureFilterVtapCaptureFilterRulesList extends cdktf.ComplexList {
  public internalValue? : CoreCaptureFilterVtapCaptureFilterRules[] | cdktf.IResolvable

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
  public get(index: number): CoreCaptureFilterVtapCaptureFilterRulesOutputReference {
    return new CoreCaptureFilterVtapCaptureFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter oci_core_capture_filter}
*/
export class CoreCaptureFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_capture_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreCaptureFilter to import
  * @param importFromId The id of the existing CoreCaptureFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreCaptureFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_capture_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_capture_filter oci_core_capture_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreCaptureFilterConfig
  */
  public constructor(scope: Construct, id: string, config: CoreCaptureFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_capture_filter',
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
    this._filterType = config.filterType;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._flowLogCaptureFilterRules.internalValue = config.flowLogCaptureFilterRules;
    this._timeouts.internalValue = config.timeouts;
    this._vtapCaptureFilterRules.internalValue = config.vtapCaptureFilterRules;
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

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // flow_log_capture_filter_rules - computed: false, optional: true, required: false
  private _flowLogCaptureFilterRules = new CoreCaptureFilterFlowLogCaptureFilterRulesList(this, "flow_log_capture_filter_rules", false);
  public get flowLogCaptureFilterRules() {
    return this._flowLogCaptureFilterRules;
  }
  public putFlowLogCaptureFilterRules(value: CoreCaptureFilterFlowLogCaptureFilterRules[] | cdktf.IResolvable) {
    this._flowLogCaptureFilterRules.internalValue = value;
  }
  public resetFlowLogCaptureFilterRules() {
    this._flowLogCaptureFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogCaptureFilterRulesInput() {
    return this._flowLogCaptureFilterRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreCaptureFilterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreCaptureFilterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vtap_capture_filter_rules - computed: false, optional: true, required: false
  private _vtapCaptureFilterRules = new CoreCaptureFilterVtapCaptureFilterRulesList(this, "vtap_capture_filter_rules", false);
  public get vtapCaptureFilterRules() {
    return this._vtapCaptureFilterRules;
  }
  public putVtapCaptureFilterRules(value: CoreCaptureFilterVtapCaptureFilterRules[] | cdktf.IResolvable) {
    this._vtapCaptureFilterRules.internalValue = value;
  }
  public resetVtapCaptureFilterRules() {
    this._vtapCaptureFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtapCaptureFilterRulesInput() {
    return this._vtapCaptureFilterRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      filter_type: cdktf.stringToTerraform(this._filterType),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      flow_log_capture_filter_rules: cdktf.listMapper(coreCaptureFilterFlowLogCaptureFilterRulesToTerraform, true)(this._flowLogCaptureFilterRules.internalValue),
      timeouts: coreCaptureFilterTimeoutsToTerraform(this._timeouts.internalValue),
      vtap_capture_filter_rules: cdktf.listMapper(coreCaptureFilterVtapCaptureFilterRulesToTerraform, true)(this._vtapCaptureFilterRules.internalValue),
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
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
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
      flow_log_capture_filter_rules: {
        value: cdktf.listMapperHcl(coreCaptureFilterFlowLogCaptureFilterRulesToHclTerraform, true)(this._flowLogCaptureFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreCaptureFilterFlowLogCaptureFilterRulesList",
      },
      timeouts: {
        value: coreCaptureFilterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreCaptureFilterTimeouts",
      },
      vtap_capture_filter_rules: {
        value: cdktf.listMapperHcl(coreCaptureFilterVtapCaptureFilterRulesToHclTerraform, true)(this._vtapCaptureFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreCaptureFilterVtapCaptureFilterRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
