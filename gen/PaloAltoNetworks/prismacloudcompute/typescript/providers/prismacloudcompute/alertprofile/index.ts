// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable immediate vulnerabilities alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enable_immediate_vulnerabilities_alerts Alertprofile#enable_immediate_vulnerabilities_alerts}
  */
  readonly enableImmediateVulnerabilitiesAlerts?: boolean | cdktf.IResolvable;
  /**
  * Alert Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#name Alertprofile#name}
  */
  readonly name: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#policy Alertprofile#policy}
  */
  readonly policy?: AlertprofilePolicy;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#webhook Alertprofile#webhook}
  */
  readonly webhook?: AlertprofileWebhook;
}
export interface AlertprofilePolicyAdmission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyAdmissionToTerraform(struct?: AlertprofilePolicyAdmissionOutputReference | AlertprofilePolicyAdmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyAdmissionToHclTerraform(struct?: AlertprofilePolicyAdmissionOutputReference | AlertprofilePolicyAdmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyAdmissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyAdmission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyAdmission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyAgentlessAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyAgentlessAppFirewallToTerraform(struct?: AlertprofilePolicyAgentlessAppFirewallOutputReference | AlertprofilePolicyAgentlessAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyAgentlessAppFirewallToHclTerraform(struct?: AlertprofilePolicyAgentlessAppFirewallOutputReference | AlertprofilePolicyAgentlessAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyAgentlessAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyAgentlessAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyAgentlessAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyAppEmbeddedAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyAppEmbeddedAppFirewallToTerraform(struct?: AlertprofilePolicyAppEmbeddedAppFirewallOutputReference | AlertprofilePolicyAppEmbeddedAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyAppEmbeddedAppFirewallToHclTerraform(struct?: AlertprofilePolicyAppEmbeddedAppFirewallOutputReference | AlertprofilePolicyAppEmbeddedAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyAppEmbeddedAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyAppEmbeddedAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyAppEmbeddedAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyAppEmbeddedRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyAppEmbeddedRuntimeToTerraform(struct?: AlertprofilePolicyAppEmbeddedRuntimeOutputReference | AlertprofilePolicyAppEmbeddedRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyAppEmbeddedRuntimeToHclTerraform(struct?: AlertprofilePolicyAppEmbeddedRuntimeOutputReference | AlertprofilePolicyAppEmbeddedRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyAppEmbeddedRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyAppEmbeddedRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyAppEmbeddedRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyCloudDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyCloudDiscoveryToTerraform(struct?: AlertprofilePolicyCloudDiscoveryOutputReference | AlertprofilePolicyCloudDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyCloudDiscoveryToHclTerraform(struct?: AlertprofilePolicyCloudDiscoveryOutputReference | AlertprofilePolicyCloudDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyCloudDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyCloudDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyCloudDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyCodeRepoVulnerability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyCodeRepoVulnerabilityToTerraform(struct?: AlertprofilePolicyCodeRepoVulnerabilityOutputReference | AlertprofilePolicyCodeRepoVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyCodeRepoVulnerabilityToHclTerraform(struct?: AlertprofilePolicyCodeRepoVulnerabilityOutputReference | AlertprofilePolicyCodeRepoVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyCodeRepoVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyCodeRepoVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyCodeRepoVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyContainerAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyContainerAppFirewallToTerraform(struct?: AlertprofilePolicyContainerAppFirewallOutputReference | AlertprofilePolicyContainerAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyContainerAppFirewallToHclTerraform(struct?: AlertprofilePolicyContainerAppFirewallOutputReference | AlertprofilePolicyContainerAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyContainerAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyContainerAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyContainerAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyContainerCompliance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyContainerComplianceToTerraform(struct?: AlertprofilePolicyContainerComplianceOutputReference | AlertprofilePolicyContainerCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyContainerComplianceToHclTerraform(struct?: AlertprofilePolicyContainerComplianceOutputReference | AlertprofilePolicyContainerCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyContainerComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyContainerCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyContainerCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyContainerComplianceScan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyContainerComplianceScanToTerraform(struct?: AlertprofilePolicyContainerComplianceScanOutputReference | AlertprofilePolicyContainerComplianceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyContainerComplianceScanToHclTerraform(struct?: AlertprofilePolicyContainerComplianceScanOutputReference | AlertprofilePolicyContainerComplianceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyContainerComplianceScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyContainerComplianceScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyContainerComplianceScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyContainerRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyContainerRuntimeToTerraform(struct?: AlertprofilePolicyContainerRuntimeOutputReference | AlertprofilePolicyContainerRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyContainerRuntimeToHclTerraform(struct?: AlertprofilePolicyContainerRuntimeOutputReference | AlertprofilePolicyContainerRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyContainerRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyContainerRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyContainerRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyContainerVulnerability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyContainerVulnerabilityToTerraform(struct?: AlertprofilePolicyContainerVulnerabilityOutputReference | AlertprofilePolicyContainerVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyContainerVulnerabilityToHclTerraform(struct?: AlertprofilePolicyContainerVulnerabilityOutputReference | AlertprofilePolicyContainerVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyContainerVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyContainerVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyContainerVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyDefender {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyDefenderToTerraform(struct?: AlertprofilePolicyDefenderOutputReference | AlertprofilePolicyDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyDefenderToHclTerraform(struct?: AlertprofilePolicyDefenderOutputReference | AlertprofilePolicyDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyDefenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyDefender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyDefender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyDocker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyDockerToTerraform(struct?: AlertprofilePolicyDockerOutputReference | AlertprofilePolicyDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyDockerToHclTerraform(struct?: AlertprofilePolicyDockerOutputReference | AlertprofilePolicyDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyDocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyHostAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyHostAppFirewallToTerraform(struct?: AlertprofilePolicyHostAppFirewallOutputReference | AlertprofilePolicyHostAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyHostAppFirewallToHclTerraform(struct?: AlertprofilePolicyHostAppFirewallOutputReference | AlertprofilePolicyHostAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyHostAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyHostAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyHostAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyHostCompliance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyHostComplianceToTerraform(struct?: AlertprofilePolicyHostComplianceOutputReference | AlertprofilePolicyHostCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyHostComplianceToHclTerraform(struct?: AlertprofilePolicyHostComplianceOutputReference | AlertprofilePolicyHostCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyHostComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyHostCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyHostCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyHostComplianceScan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyHostComplianceScanToTerraform(struct?: AlertprofilePolicyHostComplianceScanOutputReference | AlertprofilePolicyHostComplianceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyHostComplianceScanToHclTerraform(struct?: AlertprofilePolicyHostComplianceScanOutputReference | AlertprofilePolicyHostComplianceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyHostComplianceScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyHostComplianceScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyHostComplianceScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyHostRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyHostRuntimeToTerraform(struct?: AlertprofilePolicyHostRuntimeOutputReference | AlertprofilePolicyHostRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyHostRuntimeToHclTerraform(struct?: AlertprofilePolicyHostRuntimeOutputReference | AlertprofilePolicyHostRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyHostRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyHostRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyHostRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyHostVulnerability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyHostVulnerabilityToTerraform(struct?: AlertprofilePolicyHostVulnerabilityOutputReference | AlertprofilePolicyHostVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyHostVulnerabilityToHclTerraform(struct?: AlertprofilePolicyHostVulnerabilityOutputReference | AlertprofilePolicyHostVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyHostVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyHostVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyHostVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyIncident {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyIncidentToTerraform(struct?: AlertprofilePolicyIncidentOutputReference | AlertprofilePolicyIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyIncidentToHclTerraform(struct?: AlertprofilePolicyIncidentOutputReference | AlertprofilePolicyIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyIncident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyIncident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyKubernetesAudit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyKubernetesAuditToTerraform(struct?: AlertprofilePolicyKubernetesAuditOutputReference | AlertprofilePolicyKubernetesAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyKubernetesAuditToHclTerraform(struct?: AlertprofilePolicyKubernetesAuditOutputReference | AlertprofilePolicyKubernetesAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyKubernetesAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyKubernetesAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyKubernetesAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyNetworkFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyNetworkFirewallToTerraform(struct?: AlertprofilePolicyNetworkFirewallOutputReference | AlertprofilePolicyNetworkFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyNetworkFirewallToHclTerraform(struct?: AlertprofilePolicyNetworkFirewallOutputReference | AlertprofilePolicyNetworkFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyNetworkFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyNetworkFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyNetworkFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyRegistryVulnerability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyRegistryVulnerabilityToTerraform(struct?: AlertprofilePolicyRegistryVulnerabilityOutputReference | AlertprofilePolicyRegistryVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyRegistryVulnerabilityToHclTerraform(struct?: AlertprofilePolicyRegistryVulnerabilityOutputReference | AlertprofilePolicyRegistryVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyRegistryVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyRegistryVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyRegistryVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyServerlessAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyServerlessAppFirewallToTerraform(struct?: AlertprofilePolicyServerlessAppFirewallOutputReference | AlertprofilePolicyServerlessAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyServerlessAppFirewallToHclTerraform(struct?: AlertprofilePolicyServerlessAppFirewallOutputReference | AlertprofilePolicyServerlessAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyServerlessAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyServerlessAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyServerlessAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyServerlessRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyServerlessRuntimeToTerraform(struct?: AlertprofilePolicyServerlessRuntimeOutputReference | AlertprofilePolicyServerlessRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyServerlessRuntimeToHclTerraform(struct?: AlertprofilePolicyServerlessRuntimeOutputReference | AlertprofilePolicyServerlessRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyServerlessRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyServerlessRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyServerlessRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyVmCompliance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyVmComplianceToTerraform(struct?: AlertprofilePolicyVmComplianceOutputReference | AlertprofilePolicyVmCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyVmComplianceToHclTerraform(struct?: AlertprofilePolicyVmComplianceOutputReference | AlertprofilePolicyVmCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyVmComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyVmCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyVmCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyVmVulnerability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyVmVulnerabilityToTerraform(struct?: AlertprofilePolicyVmVulnerabilityOutputReference | AlertprofilePolicyVmVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyVmVulnerabilityToHclTerraform(struct?: AlertprofilePolicyVmVulnerabilityOutputReference | AlertprofilePolicyVmVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyVmVulnerabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyVmVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyVmVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicyWaasHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#all_rules Alertprofile#all_rules}
  */
  readonly allRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#enabled Alertprofile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#rules Alertprofile#rules}
  */
  readonly rules?: string[];
}

export function alertprofilePolicyWaasHealthToTerraform(struct?: AlertprofilePolicyWaasHealthOutputReference | AlertprofilePolicyWaasHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_rules: cdktf.booleanToTerraform(struct!.allRules),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function alertprofilePolicyWaasHealthToHclTerraform(struct?: AlertprofilePolicyWaasHealthOutputReference | AlertprofilePolicyWaasHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_rules: {
      value: cdktf.booleanToHclTerraform(struct!.allRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyWaasHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicyWaasHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRules = this._allRules;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicyWaasHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRules = undefined;
      this._enabled = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRules = value.allRules;
      this._enabled = value.enabled;
      this._rules = value.rules;
    }
  }

  // all_rules - computed: false, optional: false, required: true
  private _allRules?: boolean | cdktf.IResolvable; 
  public get allRules() {
    return this.getBooleanAttribute('all_rules');
  }
  public set allRules(value: boolean | cdktf.IResolvable) {
    this._allRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRulesInput() {
    return this._allRules;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface AlertprofilePolicy {
  /**
  * admission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#admission Alertprofile#admission}
  */
  readonly admission?: AlertprofilePolicyAdmission;
  /**
  * agentless_app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#agentless_app_firewall Alertprofile#agentless_app_firewall}
  */
  readonly agentlessAppFirewall?: AlertprofilePolicyAgentlessAppFirewall;
  /**
  * app_embedded_app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#app_embedded_app_firewall Alertprofile#app_embedded_app_firewall}
  */
  readonly appEmbeddedAppFirewall?: AlertprofilePolicyAppEmbeddedAppFirewall;
  /**
  * app_embedded_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#app_embedded_runtime Alertprofile#app_embedded_runtime}
  */
  readonly appEmbeddedRuntime?: AlertprofilePolicyAppEmbeddedRuntime;
  /**
  * cloud_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#cloud_discovery Alertprofile#cloud_discovery}
  */
  readonly cloudDiscovery?: AlertprofilePolicyCloudDiscovery;
  /**
  * code_repo_vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#code_repo_vulnerability Alertprofile#code_repo_vulnerability}
  */
  readonly codeRepoVulnerability?: AlertprofilePolicyCodeRepoVulnerability;
  /**
  * container_app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#container_app_firewall Alertprofile#container_app_firewall}
  */
  readonly containerAppFirewall?: AlertprofilePolicyContainerAppFirewall;
  /**
  * container_compliance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#container_compliance Alertprofile#container_compliance}
  */
  readonly containerCompliance?: AlertprofilePolicyContainerCompliance;
  /**
  * container_compliance_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#container_compliance_scan Alertprofile#container_compliance_scan}
  */
  readonly containerComplianceScan?: AlertprofilePolicyContainerComplianceScan;
  /**
  * container_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#container_runtime Alertprofile#container_runtime}
  */
  readonly containerRuntime?: AlertprofilePolicyContainerRuntime;
  /**
  * container_vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#container_vulnerability Alertprofile#container_vulnerability}
  */
  readonly containerVulnerability?: AlertprofilePolicyContainerVulnerability;
  /**
  * defender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#defender Alertprofile#defender}
  */
  readonly defender?: AlertprofilePolicyDefender;
  /**
  * docker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#docker Alertprofile#docker}
  */
  readonly docker?: AlertprofilePolicyDocker;
  /**
  * host_app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#host_app_firewall Alertprofile#host_app_firewall}
  */
  readonly hostAppFirewall?: AlertprofilePolicyHostAppFirewall;
  /**
  * host_compliance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#host_compliance Alertprofile#host_compliance}
  */
  readonly hostCompliance?: AlertprofilePolicyHostCompliance;
  /**
  * host_compliance_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#host_compliance_scan Alertprofile#host_compliance_scan}
  */
  readonly hostComplianceScan?: AlertprofilePolicyHostComplianceScan;
  /**
  * host_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#host_runtime Alertprofile#host_runtime}
  */
  readonly hostRuntime?: AlertprofilePolicyHostRuntime;
  /**
  * host_vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#host_vulnerability Alertprofile#host_vulnerability}
  */
  readonly hostVulnerability?: AlertprofilePolicyHostVulnerability;
  /**
  * incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#incident Alertprofile#incident}
  */
  readonly incident?: AlertprofilePolicyIncident;
  /**
  * kubernetes_audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#kubernetes_audit Alertprofile#kubernetes_audit}
  */
  readonly kubernetesAudit?: AlertprofilePolicyKubernetesAudit;
  /**
  * network_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#network_firewall Alertprofile#network_firewall}
  */
  readonly networkFirewall?: AlertprofilePolicyNetworkFirewall;
  /**
  * registry_vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#registry_vulnerability Alertprofile#registry_vulnerability}
  */
  readonly registryVulnerability?: AlertprofilePolicyRegistryVulnerability;
  /**
  * serverless_app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#serverless_app_firewall Alertprofile#serverless_app_firewall}
  */
  readonly serverlessAppFirewall?: AlertprofilePolicyServerlessAppFirewall;
  /**
  * serverless_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#serverless_runtime Alertprofile#serverless_runtime}
  */
  readonly serverlessRuntime?: AlertprofilePolicyServerlessRuntime;
  /**
  * vm_compliance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#vm_compliance Alertprofile#vm_compliance}
  */
  readonly vmCompliance?: AlertprofilePolicyVmCompliance;
  /**
  * vm_vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#vm_vulnerability Alertprofile#vm_vulnerability}
  */
  readonly vmVulnerability?: AlertprofilePolicyVmVulnerability;
  /**
  * waas_health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#waas_health Alertprofile#waas_health}
  */
  readonly waasHealth?: AlertprofilePolicyWaasHealth;
}

export function alertprofilePolicyToTerraform(struct?: AlertprofilePolicyOutputReference | AlertprofilePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission: alertprofilePolicyAdmissionToTerraform(struct!.admission),
    agentless_app_firewall: alertprofilePolicyAgentlessAppFirewallToTerraform(struct!.agentlessAppFirewall),
    app_embedded_app_firewall: alertprofilePolicyAppEmbeddedAppFirewallToTerraform(struct!.appEmbeddedAppFirewall),
    app_embedded_runtime: alertprofilePolicyAppEmbeddedRuntimeToTerraform(struct!.appEmbeddedRuntime),
    cloud_discovery: alertprofilePolicyCloudDiscoveryToTerraform(struct!.cloudDiscovery),
    code_repo_vulnerability: alertprofilePolicyCodeRepoVulnerabilityToTerraform(struct!.codeRepoVulnerability),
    container_app_firewall: alertprofilePolicyContainerAppFirewallToTerraform(struct!.containerAppFirewall),
    container_compliance: alertprofilePolicyContainerComplianceToTerraform(struct!.containerCompliance),
    container_compliance_scan: alertprofilePolicyContainerComplianceScanToTerraform(struct!.containerComplianceScan),
    container_runtime: alertprofilePolicyContainerRuntimeToTerraform(struct!.containerRuntime),
    container_vulnerability: alertprofilePolicyContainerVulnerabilityToTerraform(struct!.containerVulnerability),
    defender: alertprofilePolicyDefenderToTerraform(struct!.defender),
    docker: alertprofilePolicyDockerToTerraform(struct!.docker),
    host_app_firewall: alertprofilePolicyHostAppFirewallToTerraform(struct!.hostAppFirewall),
    host_compliance: alertprofilePolicyHostComplianceToTerraform(struct!.hostCompliance),
    host_compliance_scan: alertprofilePolicyHostComplianceScanToTerraform(struct!.hostComplianceScan),
    host_runtime: alertprofilePolicyHostRuntimeToTerraform(struct!.hostRuntime),
    host_vulnerability: alertprofilePolicyHostVulnerabilityToTerraform(struct!.hostVulnerability),
    incident: alertprofilePolicyIncidentToTerraform(struct!.incident),
    kubernetes_audit: alertprofilePolicyKubernetesAuditToTerraform(struct!.kubernetesAudit),
    network_firewall: alertprofilePolicyNetworkFirewallToTerraform(struct!.networkFirewall),
    registry_vulnerability: alertprofilePolicyRegistryVulnerabilityToTerraform(struct!.registryVulnerability),
    serverless_app_firewall: alertprofilePolicyServerlessAppFirewallToTerraform(struct!.serverlessAppFirewall),
    serverless_runtime: alertprofilePolicyServerlessRuntimeToTerraform(struct!.serverlessRuntime),
    vm_compliance: alertprofilePolicyVmComplianceToTerraform(struct!.vmCompliance),
    vm_vulnerability: alertprofilePolicyVmVulnerabilityToTerraform(struct!.vmVulnerability),
    waas_health: alertprofilePolicyWaasHealthToTerraform(struct!.waasHealth),
  }
}


export function alertprofilePolicyToHclTerraform(struct?: AlertprofilePolicyOutputReference | AlertprofilePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission: {
      value: alertprofilePolicyAdmissionToHclTerraform(struct!.admission),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyAdmissionList",
    },
    agentless_app_firewall: {
      value: alertprofilePolicyAgentlessAppFirewallToHclTerraform(struct!.agentlessAppFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyAgentlessAppFirewallList",
    },
    app_embedded_app_firewall: {
      value: alertprofilePolicyAppEmbeddedAppFirewallToHclTerraform(struct!.appEmbeddedAppFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyAppEmbeddedAppFirewallList",
    },
    app_embedded_runtime: {
      value: alertprofilePolicyAppEmbeddedRuntimeToHclTerraform(struct!.appEmbeddedRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyAppEmbeddedRuntimeList",
    },
    cloud_discovery: {
      value: alertprofilePolicyCloudDiscoveryToHclTerraform(struct!.cloudDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyCloudDiscoveryList",
    },
    code_repo_vulnerability: {
      value: alertprofilePolicyCodeRepoVulnerabilityToHclTerraform(struct!.codeRepoVulnerability),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyCodeRepoVulnerabilityList",
    },
    container_app_firewall: {
      value: alertprofilePolicyContainerAppFirewallToHclTerraform(struct!.containerAppFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyContainerAppFirewallList",
    },
    container_compliance: {
      value: alertprofilePolicyContainerComplianceToHclTerraform(struct!.containerCompliance),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyContainerComplianceList",
    },
    container_compliance_scan: {
      value: alertprofilePolicyContainerComplianceScanToHclTerraform(struct!.containerComplianceScan),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyContainerComplianceScanList",
    },
    container_runtime: {
      value: alertprofilePolicyContainerRuntimeToHclTerraform(struct!.containerRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyContainerRuntimeList",
    },
    container_vulnerability: {
      value: alertprofilePolicyContainerVulnerabilityToHclTerraform(struct!.containerVulnerability),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyContainerVulnerabilityList",
    },
    defender: {
      value: alertprofilePolicyDefenderToHclTerraform(struct!.defender),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyDefenderList",
    },
    docker: {
      value: alertprofilePolicyDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyDockerList",
    },
    host_app_firewall: {
      value: alertprofilePolicyHostAppFirewallToHclTerraform(struct!.hostAppFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyHostAppFirewallList",
    },
    host_compliance: {
      value: alertprofilePolicyHostComplianceToHclTerraform(struct!.hostCompliance),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyHostComplianceList",
    },
    host_compliance_scan: {
      value: alertprofilePolicyHostComplianceScanToHclTerraform(struct!.hostComplianceScan),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyHostComplianceScanList",
    },
    host_runtime: {
      value: alertprofilePolicyHostRuntimeToHclTerraform(struct!.hostRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyHostRuntimeList",
    },
    host_vulnerability: {
      value: alertprofilePolicyHostVulnerabilityToHclTerraform(struct!.hostVulnerability),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyHostVulnerabilityList",
    },
    incident: {
      value: alertprofilePolicyIncidentToHclTerraform(struct!.incident),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyIncidentList",
    },
    kubernetes_audit: {
      value: alertprofilePolicyKubernetesAuditToHclTerraform(struct!.kubernetesAudit),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyKubernetesAuditList",
    },
    network_firewall: {
      value: alertprofilePolicyNetworkFirewallToHclTerraform(struct!.networkFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyNetworkFirewallList",
    },
    registry_vulnerability: {
      value: alertprofilePolicyRegistryVulnerabilityToHclTerraform(struct!.registryVulnerability),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyRegistryVulnerabilityList",
    },
    serverless_app_firewall: {
      value: alertprofilePolicyServerlessAppFirewallToHclTerraform(struct!.serverlessAppFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyServerlessAppFirewallList",
    },
    serverless_runtime: {
      value: alertprofilePolicyServerlessRuntimeToHclTerraform(struct!.serverlessRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyServerlessRuntimeList",
    },
    vm_compliance: {
      value: alertprofilePolicyVmComplianceToHclTerraform(struct!.vmCompliance),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyVmComplianceList",
    },
    vm_vulnerability: {
      value: alertprofilePolicyVmVulnerabilityToHclTerraform(struct!.vmVulnerability),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyVmVulnerabilityList",
    },
    waas_health: {
      value: alertprofilePolicyWaasHealthToHclTerraform(struct!.waasHealth),
      isBlock: true,
      type: "list",
      storageClassType: "AlertprofilePolicyWaasHealthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofilePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofilePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admission = this._admission?.internalValue;
    }
    if (this._agentlessAppFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessAppFirewall = this._agentlessAppFirewall?.internalValue;
    }
    if (this._appEmbeddedAppFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appEmbeddedAppFirewall = this._appEmbeddedAppFirewall?.internalValue;
    }
    if (this._appEmbeddedRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appEmbeddedRuntime = this._appEmbeddedRuntime?.internalValue;
    }
    if (this._cloudDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudDiscovery = this._cloudDiscovery?.internalValue;
    }
    if (this._codeRepoVulnerability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepoVulnerability = this._codeRepoVulnerability?.internalValue;
    }
    if (this._containerAppFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerAppFirewall = this._containerAppFirewall?.internalValue;
    }
    if (this._containerCompliance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCompliance = this._containerCompliance?.internalValue;
    }
    if (this._containerComplianceScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerComplianceScan = this._containerComplianceScan?.internalValue;
    }
    if (this._containerRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRuntime = this._containerRuntime?.internalValue;
    }
    if (this._containerVulnerability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerVulnerability = this._containerVulnerability?.internalValue;
    }
    if (this._defender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defender = this._defender?.internalValue;
    }
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._hostAppFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAppFirewall = this._hostAppFirewall?.internalValue;
    }
    if (this._hostCompliance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostCompliance = this._hostCompliance?.internalValue;
    }
    if (this._hostComplianceScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostComplianceScan = this._hostComplianceScan?.internalValue;
    }
    if (this._hostRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRuntime = this._hostRuntime?.internalValue;
    }
    if (this._hostVulnerability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostVulnerability = this._hostVulnerability?.internalValue;
    }
    if (this._incident?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incident = this._incident?.internalValue;
    }
    if (this._kubernetesAudit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAudit = this._kubernetesAudit?.internalValue;
    }
    if (this._networkFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFirewall = this._networkFirewall?.internalValue;
    }
    if (this._registryVulnerability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVulnerability = this._registryVulnerability?.internalValue;
    }
    if (this._serverlessAppFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessAppFirewall = this._serverlessAppFirewall?.internalValue;
    }
    if (this._serverlessRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessRuntime = this._serverlessRuntime?.internalValue;
    }
    if (this._vmCompliance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCompliance = this._vmCompliance?.internalValue;
    }
    if (this._vmVulnerability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmVulnerability = this._vmVulnerability?.internalValue;
    }
    if (this._waasHealth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waasHealth = this._waasHealth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofilePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._admission.internalValue = undefined;
      this._agentlessAppFirewall.internalValue = undefined;
      this._appEmbeddedAppFirewall.internalValue = undefined;
      this._appEmbeddedRuntime.internalValue = undefined;
      this._cloudDiscovery.internalValue = undefined;
      this._codeRepoVulnerability.internalValue = undefined;
      this._containerAppFirewall.internalValue = undefined;
      this._containerCompliance.internalValue = undefined;
      this._containerComplianceScan.internalValue = undefined;
      this._containerRuntime.internalValue = undefined;
      this._containerVulnerability.internalValue = undefined;
      this._defender.internalValue = undefined;
      this._docker.internalValue = undefined;
      this._hostAppFirewall.internalValue = undefined;
      this._hostCompliance.internalValue = undefined;
      this._hostComplianceScan.internalValue = undefined;
      this._hostRuntime.internalValue = undefined;
      this._hostVulnerability.internalValue = undefined;
      this._incident.internalValue = undefined;
      this._kubernetesAudit.internalValue = undefined;
      this._networkFirewall.internalValue = undefined;
      this._registryVulnerability.internalValue = undefined;
      this._serverlessAppFirewall.internalValue = undefined;
      this._serverlessRuntime.internalValue = undefined;
      this._vmCompliance.internalValue = undefined;
      this._vmVulnerability.internalValue = undefined;
      this._waasHealth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._admission.internalValue = value.admission;
      this._agentlessAppFirewall.internalValue = value.agentlessAppFirewall;
      this._appEmbeddedAppFirewall.internalValue = value.appEmbeddedAppFirewall;
      this._appEmbeddedRuntime.internalValue = value.appEmbeddedRuntime;
      this._cloudDiscovery.internalValue = value.cloudDiscovery;
      this._codeRepoVulnerability.internalValue = value.codeRepoVulnerability;
      this._containerAppFirewall.internalValue = value.containerAppFirewall;
      this._containerCompliance.internalValue = value.containerCompliance;
      this._containerComplianceScan.internalValue = value.containerComplianceScan;
      this._containerRuntime.internalValue = value.containerRuntime;
      this._containerVulnerability.internalValue = value.containerVulnerability;
      this._defender.internalValue = value.defender;
      this._docker.internalValue = value.docker;
      this._hostAppFirewall.internalValue = value.hostAppFirewall;
      this._hostCompliance.internalValue = value.hostCompliance;
      this._hostComplianceScan.internalValue = value.hostComplianceScan;
      this._hostRuntime.internalValue = value.hostRuntime;
      this._hostVulnerability.internalValue = value.hostVulnerability;
      this._incident.internalValue = value.incident;
      this._kubernetesAudit.internalValue = value.kubernetesAudit;
      this._networkFirewall.internalValue = value.networkFirewall;
      this._registryVulnerability.internalValue = value.registryVulnerability;
      this._serverlessAppFirewall.internalValue = value.serverlessAppFirewall;
      this._serverlessRuntime.internalValue = value.serverlessRuntime;
      this._vmCompliance.internalValue = value.vmCompliance;
      this._vmVulnerability.internalValue = value.vmVulnerability;
      this._waasHealth.internalValue = value.waasHealth;
    }
  }

  // admission - computed: false, optional: true, required: false
  private _admission = new AlertprofilePolicyAdmissionOutputReference(this, "admission");
  public get admission() {
    return this._admission;
  }
  public putAdmission(value: AlertprofilePolicyAdmission) {
    this._admission.internalValue = value;
  }
  public resetAdmission() {
    this._admission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionInput() {
    return this._admission.internalValue;
  }

  // agentless_app_firewall - computed: false, optional: true, required: false
  private _agentlessAppFirewall = new AlertprofilePolicyAgentlessAppFirewallOutputReference(this, "agentless_app_firewall");
  public get agentlessAppFirewall() {
    return this._agentlessAppFirewall;
  }
  public putAgentlessAppFirewall(value: AlertprofilePolicyAgentlessAppFirewall) {
    this._agentlessAppFirewall.internalValue = value;
  }
  public resetAgentlessAppFirewall() {
    this._agentlessAppFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessAppFirewallInput() {
    return this._agentlessAppFirewall.internalValue;
  }

  // app_embedded_app_firewall - computed: false, optional: true, required: false
  private _appEmbeddedAppFirewall = new AlertprofilePolicyAppEmbeddedAppFirewallOutputReference(this, "app_embedded_app_firewall");
  public get appEmbeddedAppFirewall() {
    return this._appEmbeddedAppFirewall;
  }
  public putAppEmbeddedAppFirewall(value: AlertprofilePolicyAppEmbeddedAppFirewall) {
    this._appEmbeddedAppFirewall.internalValue = value;
  }
  public resetAppEmbeddedAppFirewall() {
    this._appEmbeddedAppFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEmbeddedAppFirewallInput() {
    return this._appEmbeddedAppFirewall.internalValue;
  }

  // app_embedded_runtime - computed: false, optional: true, required: false
  private _appEmbeddedRuntime = new AlertprofilePolicyAppEmbeddedRuntimeOutputReference(this, "app_embedded_runtime");
  public get appEmbeddedRuntime() {
    return this._appEmbeddedRuntime;
  }
  public putAppEmbeddedRuntime(value: AlertprofilePolicyAppEmbeddedRuntime) {
    this._appEmbeddedRuntime.internalValue = value;
  }
  public resetAppEmbeddedRuntime() {
    this._appEmbeddedRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEmbeddedRuntimeInput() {
    return this._appEmbeddedRuntime.internalValue;
  }

  // cloud_discovery - computed: false, optional: true, required: false
  private _cloudDiscovery = new AlertprofilePolicyCloudDiscoveryOutputReference(this, "cloud_discovery");
  public get cloudDiscovery() {
    return this._cloudDiscovery;
  }
  public putCloudDiscovery(value: AlertprofilePolicyCloudDiscovery) {
    this._cloudDiscovery.internalValue = value;
  }
  public resetCloudDiscovery() {
    this._cloudDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDiscoveryInput() {
    return this._cloudDiscovery.internalValue;
  }

  // code_repo_vulnerability - computed: false, optional: true, required: false
  private _codeRepoVulnerability = new AlertprofilePolicyCodeRepoVulnerabilityOutputReference(this, "code_repo_vulnerability");
  public get codeRepoVulnerability() {
    return this._codeRepoVulnerability;
  }
  public putCodeRepoVulnerability(value: AlertprofilePolicyCodeRepoVulnerability) {
    this._codeRepoVulnerability.internalValue = value;
  }
  public resetCodeRepoVulnerability() {
    this._codeRepoVulnerability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepoVulnerabilityInput() {
    return this._codeRepoVulnerability.internalValue;
  }

  // container_app_firewall - computed: false, optional: true, required: false
  private _containerAppFirewall = new AlertprofilePolicyContainerAppFirewallOutputReference(this, "container_app_firewall");
  public get containerAppFirewall() {
    return this._containerAppFirewall;
  }
  public putContainerAppFirewall(value: AlertprofilePolicyContainerAppFirewall) {
    this._containerAppFirewall.internalValue = value;
  }
  public resetContainerAppFirewall() {
    this._containerAppFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppFirewallInput() {
    return this._containerAppFirewall.internalValue;
  }

  // container_compliance - computed: false, optional: true, required: false
  private _containerCompliance = new AlertprofilePolicyContainerComplianceOutputReference(this, "container_compliance");
  public get containerCompliance() {
    return this._containerCompliance;
  }
  public putContainerCompliance(value: AlertprofilePolicyContainerCompliance) {
    this._containerCompliance.internalValue = value;
  }
  public resetContainerCompliance() {
    this._containerCompliance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerComplianceInput() {
    return this._containerCompliance.internalValue;
  }

  // container_compliance_scan - computed: false, optional: true, required: false
  private _containerComplianceScan = new AlertprofilePolicyContainerComplianceScanOutputReference(this, "container_compliance_scan");
  public get containerComplianceScan() {
    return this._containerComplianceScan;
  }
  public putContainerComplianceScan(value: AlertprofilePolicyContainerComplianceScan) {
    this._containerComplianceScan.internalValue = value;
  }
  public resetContainerComplianceScan() {
    this._containerComplianceScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerComplianceScanInput() {
    return this._containerComplianceScan.internalValue;
  }

  // container_runtime - computed: false, optional: true, required: false
  private _containerRuntime = new AlertprofilePolicyContainerRuntimeOutputReference(this, "container_runtime");
  public get containerRuntime() {
    return this._containerRuntime;
  }
  public putContainerRuntime(value: AlertprofilePolicyContainerRuntime) {
    this._containerRuntime.internalValue = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime.internalValue;
  }

  // container_vulnerability - computed: false, optional: true, required: false
  private _containerVulnerability = new AlertprofilePolicyContainerVulnerabilityOutputReference(this, "container_vulnerability");
  public get containerVulnerability() {
    return this._containerVulnerability;
  }
  public putContainerVulnerability(value: AlertprofilePolicyContainerVulnerability) {
    this._containerVulnerability.internalValue = value;
  }
  public resetContainerVulnerability() {
    this._containerVulnerability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerVulnerabilityInput() {
    return this._containerVulnerability.internalValue;
  }

  // defender - computed: false, optional: true, required: false
  private _defender = new AlertprofilePolicyDefenderOutputReference(this, "defender");
  public get defender() {
    return this._defender;
  }
  public putDefender(value: AlertprofilePolicyDefender) {
    this._defender.internalValue = value;
  }
  public resetDefender() {
    this._defender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defenderInput() {
    return this._defender.internalValue;
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new AlertprofilePolicyDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: AlertprofilePolicyDocker) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // host_app_firewall - computed: false, optional: true, required: false
  private _hostAppFirewall = new AlertprofilePolicyHostAppFirewallOutputReference(this, "host_app_firewall");
  public get hostAppFirewall() {
    return this._hostAppFirewall;
  }
  public putHostAppFirewall(value: AlertprofilePolicyHostAppFirewall) {
    this._hostAppFirewall.internalValue = value;
  }
  public resetHostAppFirewall() {
    this._hostAppFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAppFirewallInput() {
    return this._hostAppFirewall.internalValue;
  }

  // host_compliance - computed: false, optional: true, required: false
  private _hostCompliance = new AlertprofilePolicyHostComplianceOutputReference(this, "host_compliance");
  public get hostCompliance() {
    return this._hostCompliance;
  }
  public putHostCompliance(value: AlertprofilePolicyHostCompliance) {
    this._hostCompliance.internalValue = value;
  }
  public resetHostCompliance() {
    this._hostCompliance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostComplianceInput() {
    return this._hostCompliance.internalValue;
  }

  // host_compliance_scan - computed: false, optional: true, required: false
  private _hostComplianceScan = new AlertprofilePolicyHostComplianceScanOutputReference(this, "host_compliance_scan");
  public get hostComplianceScan() {
    return this._hostComplianceScan;
  }
  public putHostComplianceScan(value: AlertprofilePolicyHostComplianceScan) {
    this._hostComplianceScan.internalValue = value;
  }
  public resetHostComplianceScan() {
    this._hostComplianceScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostComplianceScanInput() {
    return this._hostComplianceScan.internalValue;
  }

  // host_runtime - computed: false, optional: true, required: false
  private _hostRuntime = new AlertprofilePolicyHostRuntimeOutputReference(this, "host_runtime");
  public get hostRuntime() {
    return this._hostRuntime;
  }
  public putHostRuntime(value: AlertprofilePolicyHostRuntime) {
    this._hostRuntime.internalValue = value;
  }
  public resetHostRuntime() {
    this._hostRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuntimeInput() {
    return this._hostRuntime.internalValue;
  }

  // host_vulnerability - computed: false, optional: true, required: false
  private _hostVulnerability = new AlertprofilePolicyHostVulnerabilityOutputReference(this, "host_vulnerability");
  public get hostVulnerability() {
    return this._hostVulnerability;
  }
  public putHostVulnerability(value: AlertprofilePolicyHostVulnerability) {
    this._hostVulnerability.internalValue = value;
  }
  public resetHostVulnerability() {
    this._hostVulnerability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostVulnerabilityInput() {
    return this._hostVulnerability.internalValue;
  }

  // incident - computed: false, optional: true, required: false
  private _incident = new AlertprofilePolicyIncidentOutputReference(this, "incident");
  public get incident() {
    return this._incident;
  }
  public putIncident(value: AlertprofilePolicyIncident) {
    this._incident.internalValue = value;
  }
  public resetIncident() {
    this._incident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInput() {
    return this._incident.internalValue;
  }

  // kubernetes_audit - computed: false, optional: true, required: false
  private _kubernetesAudit = new AlertprofilePolicyKubernetesAuditOutputReference(this, "kubernetes_audit");
  public get kubernetesAudit() {
    return this._kubernetesAudit;
  }
  public putKubernetesAudit(value: AlertprofilePolicyKubernetesAudit) {
    this._kubernetesAudit.internalValue = value;
  }
  public resetKubernetesAudit() {
    this._kubernetesAudit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuditInput() {
    return this._kubernetesAudit.internalValue;
  }

  // network_firewall - computed: false, optional: true, required: false
  private _networkFirewall = new AlertprofilePolicyNetworkFirewallOutputReference(this, "network_firewall");
  public get networkFirewall() {
    return this._networkFirewall;
  }
  public putNetworkFirewall(value: AlertprofilePolicyNetworkFirewall) {
    this._networkFirewall.internalValue = value;
  }
  public resetNetworkFirewall() {
    this._networkFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallInput() {
    return this._networkFirewall.internalValue;
  }

  // registry_vulnerability - computed: false, optional: true, required: false
  private _registryVulnerability = new AlertprofilePolicyRegistryVulnerabilityOutputReference(this, "registry_vulnerability");
  public get registryVulnerability() {
    return this._registryVulnerability;
  }
  public putRegistryVulnerability(value: AlertprofilePolicyRegistryVulnerability) {
    this._registryVulnerability.internalValue = value;
  }
  public resetRegistryVulnerability() {
    this._registryVulnerability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVulnerabilityInput() {
    return this._registryVulnerability.internalValue;
  }

  // serverless_app_firewall - computed: false, optional: true, required: false
  private _serverlessAppFirewall = new AlertprofilePolicyServerlessAppFirewallOutputReference(this, "serverless_app_firewall");
  public get serverlessAppFirewall() {
    return this._serverlessAppFirewall;
  }
  public putServerlessAppFirewall(value: AlertprofilePolicyServerlessAppFirewall) {
    this._serverlessAppFirewall.internalValue = value;
  }
  public resetServerlessAppFirewall() {
    this._serverlessAppFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessAppFirewallInput() {
    return this._serverlessAppFirewall.internalValue;
  }

  // serverless_runtime - computed: false, optional: true, required: false
  private _serverlessRuntime = new AlertprofilePolicyServerlessRuntimeOutputReference(this, "serverless_runtime");
  public get serverlessRuntime() {
    return this._serverlessRuntime;
  }
  public putServerlessRuntime(value: AlertprofilePolicyServerlessRuntime) {
    this._serverlessRuntime.internalValue = value;
  }
  public resetServerlessRuntime() {
    this._serverlessRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRuntimeInput() {
    return this._serverlessRuntime.internalValue;
  }

  // vm_compliance - computed: false, optional: true, required: false
  private _vmCompliance = new AlertprofilePolicyVmComplianceOutputReference(this, "vm_compliance");
  public get vmCompliance() {
    return this._vmCompliance;
  }
  public putVmCompliance(value: AlertprofilePolicyVmCompliance) {
    this._vmCompliance.internalValue = value;
  }
  public resetVmCompliance() {
    this._vmCompliance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmComplianceInput() {
    return this._vmCompliance.internalValue;
  }

  // vm_vulnerability - computed: false, optional: true, required: false
  private _vmVulnerability = new AlertprofilePolicyVmVulnerabilityOutputReference(this, "vm_vulnerability");
  public get vmVulnerability() {
    return this._vmVulnerability;
  }
  public putVmVulnerability(value: AlertprofilePolicyVmVulnerability) {
    this._vmVulnerability.internalValue = value;
  }
  public resetVmVulnerability() {
    this._vmVulnerability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVulnerabilityInput() {
    return this._vmVulnerability.internalValue;
  }

  // waas_health - computed: false, optional: true, required: false
  private _waasHealth = new AlertprofilePolicyWaasHealthOutputReference(this, "waas_health");
  public get waasHealth() {
    return this._waasHealth;
  }
  public putWaasHealth(value: AlertprofilePolicyWaasHealth) {
    this._waasHealth.internalValue = value;
  }
  public resetWaasHealth() {
    this._waasHealth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waasHealthInput() {
    return this._waasHealth.internalValue;
  }
}
export interface AlertprofileWebhook {
  /**
  * Credential ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#credential_id Alertprofile#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Custom CA Cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#custom_ca Alertprofile#custom_ca}
  */
  readonly customCa?: string;
  /**
  * Custom JSON payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#custom_json Alertprofile#custom_json}
  */
  readonly customJson?: string;
  /**
  * Webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#url Alertprofile#url}
  */
  readonly url?: string;
}

export function alertprofileWebhookToTerraform(struct?: AlertprofileWebhookOutputReference | AlertprofileWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    custom_ca: cdktf.stringToTerraform(struct!.customCa),
    custom_json: cdktf.stringToTerraform(struct!.customJson),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertprofileWebhookToHclTerraform(struct?: AlertprofileWebhookOutputReference | AlertprofileWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ca: {
      value: cdktf.stringToHclTerraform(struct!.customCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_json: {
      value: cdktf.stringToHclTerraform(struct!.customJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertprofileWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertprofileWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._customCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCa = this._customCa;
    }
    if (this._customJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJson = this._customJson;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertprofileWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialId = undefined;
      this._customCa = undefined;
      this._customJson = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialId = value.credentialId;
      this._customCa = value.customCa;
      this._customJson = value.customJson;
      this._url = value.url;
    }
  }

  // credential_id - computed: false, optional: true, required: false
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // custom_ca - computed: false, optional: true, required: false
  private _customCa?: string; 
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }
  public set customCa(value: string) {
    this._customCa = value;
  }
  public resetCustomCa() {
    this._customCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaInput() {
    return this._customCa;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string; 
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile prismacloudcompute_alertprofile}
*/
export class Alertprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_alertprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alertprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alertprofile to import
  * @param importFromId The id of the existing Alertprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alertprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_alertprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/alertprofile prismacloudcompute_alertprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AlertprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_alertprofile',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0',
        providerVersionConstraint: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableImmediateVulnerabilitiesAlerts = config.enableImmediateVulnerabilitiesAlerts;
    this._name = config.name;
    this._policy.internalValue = config.policy;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_immediate_vulnerabilities_alerts - computed: false, optional: true, required: false
  private _enableImmediateVulnerabilitiesAlerts?: boolean | cdktf.IResolvable; 
  public get enableImmediateVulnerabilitiesAlerts() {
    return this.getBooleanAttribute('enable_immediate_vulnerabilities_alerts');
  }
  public set enableImmediateVulnerabilitiesAlerts(value: boolean | cdktf.IResolvable) {
    this._enableImmediateVulnerabilitiesAlerts = value;
  }
  public resetEnableImmediateVulnerabilitiesAlerts() {
    this._enableImmediateVulnerabilitiesAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmediateVulnerabilitiesAlertsInput() {
    return this._enableImmediateVulnerabilitiesAlerts;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new AlertprofilePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AlertprofilePolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertprofileWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertprofileWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_immediate_vulnerabilities_alerts: cdktf.booleanToTerraform(this._enableImmediateVulnerabilitiesAlerts),
      name: cdktf.stringToTerraform(this._name),
      policy: alertprofilePolicyToTerraform(this._policy.internalValue),
      webhook: alertprofileWebhookToTerraform(this._webhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_immediate_vulnerabilities_alerts: {
        value: cdktf.booleanToHclTerraform(this._enableImmediateVulnerabilitiesAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: alertprofilePolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertprofilePolicyList",
      },
      webhook: {
        value: alertprofileWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertprofileWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
