// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#action QosPolicyRule#action}
  */
  readonly action: QosPolicyRuleAction;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#description QosPolicyRule#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#device QosPolicyRule#device}
  */
  readonly device?: string;
  /**
  * Dscp tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#dscp_tos QosPolicyRule#dscp_tos}
  */
  readonly dscpTos?: QosPolicyRuleDscpTos;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#folder QosPolicyRule#folder}
  */
  readonly folder?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#name QosPolicyRule#name}
  */
  readonly name: string;
  /**
  * The relative position of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#position QosPolicyRule#position}
  */
  readonly position?: string;
  /**
  * Relative positioning rule. String must be one of these: `"before"`, `"after"`, `"top"`, `"bottom"`. If not specified, rule is created at the bottom of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#relative_position QosPolicyRule#relative_position}
  */
  readonly relativePosition?: string;
  /**
  * Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#schedule QosPolicyRule#schedule}
  */
  readonly schedule?: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#snippet QosPolicyRule#snippet}
  */
  readonly snippet?: string;
  /**
  * The name or UUID of the rule to position this rule relative to. Required when `relative_position` is `"before"` or `"after"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#target_rule QosPolicyRule#target_rule}
  */
  readonly targetRule?: string;
}
export interface QosPolicyRuleAction {
  /**
  * Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#class QosPolicyRule#class}
  */
  readonly class?: string;
}

export function qosPolicyRuleActionToTerraform(struct?: QosPolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
  }
}


export function qosPolicyRuleActionToHclTerraform(struct?: QosPolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeAf {
  /**
  * Codepoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoint QosPolicyRule#codepoint}
  */
  readonly codepoint?: string;
}

export function qosPolicyRuleDscpTosCodepointsTypeAfToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeAf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codepoint: cdktf.stringToTerraform(struct!.codepoint),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeAfToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeAf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codepoint: {
      value: cdktf.stringToHclTerraform(struct!.codepoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeAfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeAf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codepoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepoint = this._codepoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeAf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codepoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codepoint = value.codepoint;
    }
  }

  // codepoint - computed: false, optional: true, required: false
  private _codepoint?: string; 
  public get codepoint() {
    return this.getStringAttribute('codepoint');
  }
  public set codepoint(value: string) {
    this._codepoint = value;
  }
  public resetCodepoint() {
    this._codepoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointInput() {
    return this._codepoint;
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeCs {
  /**
  * Codepoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoint QosPolicyRule#codepoint}
  */
  readonly codepoint?: string;
}

export function qosPolicyRuleDscpTosCodepointsTypeCsToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codepoint: cdktf.stringToTerraform(struct!.codepoint),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeCsToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codepoint: {
      value: cdktf.stringToHclTerraform(struct!.codepoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeCsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeCs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codepoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepoint = this._codepoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeCs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codepoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codepoint = value.codepoint;
    }
  }

  // codepoint - computed: false, optional: true, required: false
  private _codepoint?: string; 
  public get codepoint() {
    return this.getStringAttribute('codepoint');
  }
  public set codepoint(value: string) {
    this._codepoint = value;
  }
  public resetCodepoint() {
    this._codepoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointInput() {
    return this._codepoint;
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint {
  /**
  * Binary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#binary_value QosPolicyRule#binary_value}
  */
  readonly binaryValue?: string;
  /**
  * Codepoint name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoint_name QosPolicyRule#codepoint_name}
  */
  readonly codepointName?: string;
}

export function qosPolicyRuleDscpTosCodepointsTypeCustomCodepointToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_value: cdktf.stringToTerraform(struct!.binaryValue),
    codepoint_name: cdktf.stringToTerraform(struct!.codepointName),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeCustomCodepointToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_value: {
      value: cdktf.stringToHclTerraform(struct!.binaryValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codepoint_name: {
      value: cdktf.stringToHclTerraform(struct!.codepointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeCustomCodepointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryValue = this._binaryValue;
    }
    if (this._codepointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepointName = this._codepointName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryValue = undefined;
      this._codepointName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryValue = value.binaryValue;
      this._codepointName = value.codepointName;
    }
  }

  // binary_value - computed: false, optional: true, required: false
  private _binaryValue?: string; 
  public get binaryValue() {
    return this.getStringAttribute('binary_value');
  }
  public set binaryValue(value: string) {
    this._binaryValue = value;
  }
  public resetBinaryValue() {
    this._binaryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryValueInput() {
    return this._binaryValue;
  }

  // codepoint_name - computed: false, optional: true, required: false
  private _codepointName?: string; 
  public get codepointName() {
    return this.getStringAttribute('codepoint_name');
  }
  public set codepointName(value: string) {
    this._codepointName = value;
  }
  public resetCodepointName() {
    this._codepointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointNameInput() {
    return this._codepointName;
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeCustom {
  /**
  * Codepoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoint QosPolicyRule#codepoint}
  */
  readonly codepoint?: QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint;
}

export function qosPolicyRuleDscpTosCodepointsTypeCustomToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codepoint: qosPolicyRuleDscpTosCodepointsTypeCustomCodepointToTerraform(struct!.codepoint),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeCustomToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codepoint: {
      value: qosPolicyRuleDscpTosCodepointsTypeCustomCodepointToHclTerraform(struct!.codepoint),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codepoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepoint = this._codepoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codepoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codepoint.internalValue = value.codepoint;
    }
  }

  // codepoint - computed: false, optional: true, required: false
  private _codepoint = new QosPolicyRuleDscpTosCodepointsTypeCustomCodepointOutputReference(this, "codepoint");
  public get codepoint() {
    return this._codepoint;
  }
  public putCodepoint(value: QosPolicyRuleDscpTosCodepointsTypeCustomCodepoint) {
    this._codepoint.internalValue = value;
  }
  public resetCodepoint() {
    this._codepoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointInput() {
    return this._codepoint.internalValue;
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeEf {
}

export function qosPolicyRuleDscpTosCodepointsTypeEfToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeEf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeEfToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeEf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QosPolicyRuleDscpTosCodepointsTypeEfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeEf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeEf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface QosPolicyRuleDscpTosCodepointsTypeTos {
  /**
  * Codepoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoint QosPolicyRule#codepoint}
  */
  readonly codepoint?: string;
}

export function qosPolicyRuleDscpTosCodepointsTypeTosToTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeTos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codepoint: cdktf.stringToTerraform(struct!.codepoint),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeTosToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsTypeTos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codepoint: {
      value: cdktf.stringToHclTerraform(struct!.codepoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeTosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsTypeTos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codepoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepoint = this._codepoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsTypeTos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codepoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codepoint = value.codepoint;
    }
  }

  // codepoint - computed: false, optional: true, required: false
  private _codepoint?: string; 
  public get codepoint() {
    return this.getStringAttribute('codepoint');
  }
  public set codepoint(value: string) {
    this._codepoint = value;
  }
  public resetCodepoint() {
    this._codepoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointInput() {
    return this._codepoint;
  }
}
export interface QosPolicyRuleDscpTosCodepointsType {
  /**
  * Af
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#af QosPolicyRule#af}
  */
  readonly af?: QosPolicyRuleDscpTosCodepointsTypeAf;
  /**
  * Cs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#cs QosPolicyRule#cs}
  */
  readonly cs?: QosPolicyRuleDscpTosCodepointsTypeCs;
  /**
  * Custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#custom QosPolicyRule#custom}
  */
  readonly custom?: QosPolicyRuleDscpTosCodepointsTypeCustom;
  /**
  * Ef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#ef QosPolicyRule#ef}
  */
  readonly ef?: QosPolicyRuleDscpTosCodepointsTypeEf;
  /**
  * Tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#tos QosPolicyRule#tos}
  */
  readonly tos?: QosPolicyRuleDscpTosCodepointsTypeTos;
}

export function qosPolicyRuleDscpTosCodepointsTypeToTerraform(struct?: QosPolicyRuleDscpTosCodepointsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af: qosPolicyRuleDscpTosCodepointsTypeAfToTerraform(struct!.af),
    cs: qosPolicyRuleDscpTosCodepointsTypeCsToTerraform(struct!.cs),
    custom: qosPolicyRuleDscpTosCodepointsTypeCustomToTerraform(struct!.custom),
    ef: qosPolicyRuleDscpTosCodepointsTypeEfToTerraform(struct!.ef),
    tos: qosPolicyRuleDscpTosCodepointsTypeTosToTerraform(struct!.tos),
  }
}


export function qosPolicyRuleDscpTosCodepointsTypeToHclTerraform(struct?: QosPolicyRuleDscpTosCodepointsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    af: {
      value: qosPolicyRuleDscpTosCodepointsTypeAfToHclTerraform(struct!.af),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeAf",
    },
    cs: {
      value: qosPolicyRuleDscpTosCodepointsTypeCsToHclTerraform(struct!.cs),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeCs",
    },
    custom: {
      value: qosPolicyRuleDscpTosCodepointsTypeCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeCustom",
    },
    ef: {
      value: qosPolicyRuleDscpTosCodepointsTypeEfToHclTerraform(struct!.ef),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeEf",
    },
    tos: {
      value: qosPolicyRuleDscpTosCodepointsTypeTosToHclTerraform(struct!.tos),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsTypeTos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTosCodepointsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._af?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.af = this._af?.internalValue;
    }
    if (this._cs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cs = this._cs?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._ef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ef = this._ef?.internalValue;
    }
    if (this._tos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepointsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._af.internalValue = undefined;
      this._cs.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._ef.internalValue = undefined;
      this._tos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._af.internalValue = value.af;
      this._cs.internalValue = value.cs;
      this._custom.internalValue = value.custom;
      this._ef.internalValue = value.ef;
      this._tos.internalValue = value.tos;
    }
  }

  // af - computed: false, optional: true, required: false
  private _af = new QosPolicyRuleDscpTosCodepointsTypeAfOutputReference(this, "af");
  public get af() {
    return this._af;
  }
  public putAf(value: QosPolicyRuleDscpTosCodepointsTypeAf) {
    this._af.internalValue = value;
  }
  public resetAf() {
    this._af.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afInput() {
    return this._af.internalValue;
  }

  // cs - computed: false, optional: true, required: false
  private _cs = new QosPolicyRuleDscpTosCodepointsTypeCsOutputReference(this, "cs");
  public get cs() {
    return this._cs;
  }
  public putCs(value: QosPolicyRuleDscpTosCodepointsTypeCs) {
    this._cs.internalValue = value;
  }
  public resetCs() {
    this._cs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csInput() {
    return this._cs.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new QosPolicyRuleDscpTosCodepointsTypeCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: QosPolicyRuleDscpTosCodepointsTypeCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // ef - computed: false, optional: true, required: false
  private _ef = new QosPolicyRuleDscpTosCodepointsTypeEfOutputReference(this, "ef");
  public get ef() {
    return this._ef;
  }
  public putEf(value: QosPolicyRuleDscpTosCodepointsTypeEf) {
    this._ef.internalValue = value;
  }
  public resetEf() {
    this._ef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efInput() {
    return this._ef.internalValue;
  }

  // tos - computed: false, optional: true, required: false
  private _tos = new QosPolicyRuleDscpTosCodepointsTypeTosOutputReference(this, "tos");
  public get tos() {
    return this._tos;
  }
  public putTos(value: QosPolicyRuleDscpTosCodepointsTypeTos) {
    this._tos.internalValue = value;
  }
  public resetTos() {
    this._tos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos.internalValue;
  }
}
export interface QosPolicyRuleDscpTosCodepoints {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#name QosPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#type QosPolicyRule#type}
  */
  readonly type?: QosPolicyRuleDscpTosCodepointsType;
}

export function qosPolicyRuleDscpTosCodepointsToTerraform(struct?: QosPolicyRuleDscpTosCodepoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: qosPolicyRuleDscpTosCodepointsTypeToTerraform(struct!.type),
  }
}


export function qosPolicyRuleDscpTosCodepointsToHclTerraform(struct?: QosPolicyRuleDscpTosCodepoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: qosPolicyRuleDscpTosCodepointsTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "QosPolicyRuleDscpTosCodepointsType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosCodepointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosPolicyRuleDscpTosCodepoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTosCodepoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type.internalValue = value.type;
    }
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

  // type - computed: false, optional: true, required: false
  private _type = new QosPolicyRuleDscpTosCodepointsTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: QosPolicyRuleDscpTosCodepointsType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class QosPolicyRuleDscpTosCodepointsList extends cdktf.ComplexList {
  public internalValue? : QosPolicyRuleDscpTosCodepoints[] | cdktf.IResolvable

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
  public get(index: number): QosPolicyRuleDscpTosCodepointsOutputReference {
    return new QosPolicyRuleDscpTosCodepointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosPolicyRuleDscpTos {
  /**
  * Codepoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#codepoints QosPolicyRule#codepoints}
  */
  readonly codepoints?: QosPolicyRuleDscpTosCodepoints[] | cdktf.IResolvable;
}

export function qosPolicyRuleDscpTosToTerraform(struct?: QosPolicyRuleDscpTos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codepoints: cdktf.listMapper(qosPolicyRuleDscpTosCodepointsToTerraform, false)(struct!.codepoints),
  }
}


export function qosPolicyRuleDscpTosToHclTerraform(struct?: QosPolicyRuleDscpTos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codepoints: {
      value: cdktf.listMapperHcl(qosPolicyRuleDscpTosCodepointsToHclTerraform, false)(struct!.codepoints),
      isBlock: true,
      type: "list",
      storageClassType: "QosPolicyRuleDscpTosCodepointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyRuleDscpTosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyRuleDscpTos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codepoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codepoints = this._codepoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyRuleDscpTos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codepoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codepoints.internalValue = value.codepoints;
    }
  }

  // codepoints - computed: false, optional: true, required: false
  private _codepoints = new QosPolicyRuleDscpTosCodepointsList(this, "codepoints", false);
  public get codepoints() {
    return this._codepoints;
  }
  public putCodepoints(value: QosPolicyRuleDscpTosCodepoints[] | cdktf.IResolvable) {
    this._codepoints.internalValue = value;
  }
  public resetCodepoints() {
    this._codepoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codepointsInput() {
    return this._codepoints.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule scm_qos_policy_rule}
*/
export class QosPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_qos_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosPolicyRule to import
  * @param importFromId The id of the existing QosPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_qos_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/qos_policy_rule scm_qos_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: QosPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_qos_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action.internalValue = config.action;
    this._description = config.description;
    this._device = config.device;
    this._dscpTos.internalValue = config.dscpTos;
    this._folder = config.folder;
    this._name = config.name;
    this._position = config.position;
    this._relativePosition = config.relativePosition;
    this._schedule = config.schedule;
    this._snippet = config.snippet;
    this._targetRule = config.targetRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action = new QosPolicyRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: QosPolicyRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dscp_tos - computed: false, optional: true, required: false
  private _dscpTos = new QosPolicyRuleDscpTosOutputReference(this, "dscp_tos");
  public get dscpTos() {
    return this._dscpTos;
  }
  public putDscpTos(value: QosPolicyRuleDscpTos) {
    this._dscpTos.internalValue = value;
  }
  public resetDscpTos() {
    this._dscpTos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpTosInput() {
    return this._dscpTos.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // relative_position - computed: false, optional: true, required: false
  private _relativePosition?: string; 
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
  public set relativePosition(value: string) {
    this._relativePosition = value;
  }
  public resetRelativePosition() {
    this._relativePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: qosPolicyRuleActionToTerraform(this._action.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      dscp_tos: qosPolicyRuleDscpTosToTerraform(this._dscpTos.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.stringToTerraform(this._position),
      relative_position: cdktf.stringToTerraform(this._relativePosition),
      schedule: cdktf.stringToTerraform(this._schedule),
      snippet: cdktf.stringToTerraform(this._snippet),
      target_rule: cdktf.stringToTerraform(this._targetRule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: qosPolicyRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosPolicyRuleAction",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_tos: {
        value: qosPolicyRuleDscpTosToHclTerraform(this._dscpTos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosPolicyRuleDscpTos",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_position: {
        value: cdktf.stringToHclTerraform(this._relativePosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_rule: {
        value: cdktf.stringToHclTerraform(this._targetRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
