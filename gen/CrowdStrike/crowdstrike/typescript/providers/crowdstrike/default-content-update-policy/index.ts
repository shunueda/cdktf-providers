// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultContentUpdatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the default content update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#description DefaultContentUpdatePolicy#description}
  */
  readonly description: string;
  /**
  * Ring assignment settings for rapid response allow/block listing content category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#rapid_response DefaultContentUpdatePolicy#rapid_response}
  */
  readonly rapidResponse: DefaultContentUpdatePolicyRapidResponse;
  /**
  * Ring assignment settings for sensor operations content category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#sensor_operations DefaultContentUpdatePolicy#sensor_operations}
  */
  readonly sensorOperations: DefaultContentUpdatePolicySensorOperations;
  /**
  * Ring assignment settings for system critical content category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#system_critical DefaultContentUpdatePolicy#system_critical}
  */
  readonly systemCritical: DefaultContentUpdatePolicySystemCritical;
  /**
  * Ring assignment settings for vulnerability management content category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#vulnerability_management DefaultContentUpdatePolicy#vulnerability_management}
  */
  readonly vulnerabilityManagement: DefaultContentUpdatePolicyVulnerabilityManagement;
}
export interface DefaultContentUpdatePolicyRapidResponse {
  /**
  * Delay in hours when using 'ga' ring assignment. Valid values: 0, 1, 2, 4, 8, 12, 24, 48, 72. Only applicable when ring_assignment is 'ga'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#delay_hours DefaultContentUpdatePolicy#delay_hours}
  */
  readonly delayHours?: number;
  /**
  * Pin content category to a specific version. When set, the content category will not automatically update to newer versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#pinned_content_version DefaultContentUpdatePolicy#pinned_content_version}
  */
  readonly pinnedContentVersion?: string;
  /**
  * Ring assignment for the content category (ga, ea, pause).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#ring_assignment DefaultContentUpdatePolicy#ring_assignment}
  */
  readonly ringAssignment: string;
}

export function defaultContentUpdatePolicyRapidResponseToTerraform(struct?: DefaultContentUpdatePolicyRapidResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_hours: cdktf.numberToTerraform(struct!.delayHours),
    pinned_content_version: cdktf.stringToTerraform(struct!.pinnedContentVersion),
    ring_assignment: cdktf.stringToTerraform(struct!.ringAssignment),
  }
}


export function defaultContentUpdatePolicyRapidResponseToHclTerraform(struct?: DefaultContentUpdatePolicyRapidResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_hours: {
      value: cdktf.numberToHclTerraform(struct!.delayHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pinned_content_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedContentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_assignment: {
      value: cdktf.stringToHclTerraform(struct!.ringAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultContentUpdatePolicyRapidResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultContentUpdatePolicyRapidResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayHours = this._delayHours;
    }
    if (this._pinnedContentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedContentVersion = this._pinnedContentVersion;
    }
    if (this._ringAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringAssignment = this._ringAssignment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultContentUpdatePolicyRapidResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayHours = undefined;
      this._pinnedContentVersion = undefined;
      this._ringAssignment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayHours = value.delayHours;
      this._pinnedContentVersion = value.pinnedContentVersion;
      this._ringAssignment = value.ringAssignment;
    }
  }

  // delay_hours - computed: false, optional: true, required: false
  private _delayHours?: number; 
  public get delayHours() {
    return this.getNumberAttribute('delay_hours');
  }
  public set delayHours(value: number) {
    this._delayHours = value;
  }
  public resetDelayHours() {
    this._delayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayHoursInput() {
    return this._delayHours;
  }

  // pinned_content_version - computed: false, optional: true, required: false
  private _pinnedContentVersion?: string; 
  public get pinnedContentVersion() {
    return this.getStringAttribute('pinned_content_version');
  }
  public set pinnedContentVersion(value: string) {
    this._pinnedContentVersion = value;
  }
  public resetPinnedContentVersion() {
    this._pinnedContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedContentVersionInput() {
    return this._pinnedContentVersion;
  }

  // ring_assignment - computed: false, optional: false, required: true
  private _ringAssignment?: string; 
  public get ringAssignment() {
    return this.getStringAttribute('ring_assignment');
  }
  public set ringAssignment(value: string) {
    this._ringAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ringAssignmentInput() {
    return this._ringAssignment;
  }
}
export interface DefaultContentUpdatePolicySensorOperations {
  /**
  * Delay in hours when using 'ga' ring assignment. Valid values: 0, 1, 2, 4, 8, 12, 24, 48, 72. Only applicable when ring_assignment is 'ga'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#delay_hours DefaultContentUpdatePolicy#delay_hours}
  */
  readonly delayHours?: number;
  /**
  * Pin content category to a specific version. When set, the content category will not automatically update to newer versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#pinned_content_version DefaultContentUpdatePolicy#pinned_content_version}
  */
  readonly pinnedContentVersion?: string;
  /**
  * Ring assignment for the content category (ga, ea, pause).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#ring_assignment DefaultContentUpdatePolicy#ring_assignment}
  */
  readonly ringAssignment: string;
}

export function defaultContentUpdatePolicySensorOperationsToTerraform(struct?: DefaultContentUpdatePolicySensorOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_hours: cdktf.numberToTerraform(struct!.delayHours),
    pinned_content_version: cdktf.stringToTerraform(struct!.pinnedContentVersion),
    ring_assignment: cdktf.stringToTerraform(struct!.ringAssignment),
  }
}


export function defaultContentUpdatePolicySensorOperationsToHclTerraform(struct?: DefaultContentUpdatePolicySensorOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_hours: {
      value: cdktf.numberToHclTerraform(struct!.delayHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pinned_content_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedContentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_assignment: {
      value: cdktf.stringToHclTerraform(struct!.ringAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultContentUpdatePolicySensorOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultContentUpdatePolicySensorOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayHours = this._delayHours;
    }
    if (this._pinnedContentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedContentVersion = this._pinnedContentVersion;
    }
    if (this._ringAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringAssignment = this._ringAssignment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultContentUpdatePolicySensorOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayHours = undefined;
      this._pinnedContentVersion = undefined;
      this._ringAssignment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayHours = value.delayHours;
      this._pinnedContentVersion = value.pinnedContentVersion;
      this._ringAssignment = value.ringAssignment;
    }
  }

  // delay_hours - computed: false, optional: true, required: false
  private _delayHours?: number; 
  public get delayHours() {
    return this.getNumberAttribute('delay_hours');
  }
  public set delayHours(value: number) {
    this._delayHours = value;
  }
  public resetDelayHours() {
    this._delayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayHoursInput() {
    return this._delayHours;
  }

  // pinned_content_version - computed: false, optional: true, required: false
  private _pinnedContentVersion?: string; 
  public get pinnedContentVersion() {
    return this.getStringAttribute('pinned_content_version');
  }
  public set pinnedContentVersion(value: string) {
    this._pinnedContentVersion = value;
  }
  public resetPinnedContentVersion() {
    this._pinnedContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedContentVersionInput() {
    return this._pinnedContentVersion;
  }

  // ring_assignment - computed: false, optional: false, required: true
  private _ringAssignment?: string; 
  public get ringAssignment() {
    return this.getStringAttribute('ring_assignment');
  }
  public set ringAssignment(value: string) {
    this._ringAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ringAssignmentInput() {
    return this._ringAssignment;
  }
}
export interface DefaultContentUpdatePolicySystemCritical {
  /**
  * Delay in hours when using 'ga' ring assignment. Valid values: 0, 1, 2, 4, 8, 12, 24, 48, 72. Only applicable when ring_assignment is 'ga'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#delay_hours DefaultContentUpdatePolicy#delay_hours}
  */
  readonly delayHours?: number;
  /**
  * Pin content category to a specific version. When set, the content category will not automatically update to newer versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#pinned_content_version DefaultContentUpdatePolicy#pinned_content_version}
  */
  readonly pinnedContentVersion?: string;
  /**
  * Ring assignment for the content category (ga, ea). Note: 'pause' is not allowed for system_critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#ring_assignment DefaultContentUpdatePolicy#ring_assignment}
  */
  readonly ringAssignment: string;
}

export function defaultContentUpdatePolicySystemCriticalToTerraform(struct?: DefaultContentUpdatePolicySystemCritical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_hours: cdktf.numberToTerraform(struct!.delayHours),
    pinned_content_version: cdktf.stringToTerraform(struct!.pinnedContentVersion),
    ring_assignment: cdktf.stringToTerraform(struct!.ringAssignment),
  }
}


export function defaultContentUpdatePolicySystemCriticalToHclTerraform(struct?: DefaultContentUpdatePolicySystemCritical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_hours: {
      value: cdktf.numberToHclTerraform(struct!.delayHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pinned_content_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedContentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_assignment: {
      value: cdktf.stringToHclTerraform(struct!.ringAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultContentUpdatePolicySystemCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultContentUpdatePolicySystemCritical | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayHours = this._delayHours;
    }
    if (this._pinnedContentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedContentVersion = this._pinnedContentVersion;
    }
    if (this._ringAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringAssignment = this._ringAssignment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultContentUpdatePolicySystemCritical | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayHours = undefined;
      this._pinnedContentVersion = undefined;
      this._ringAssignment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayHours = value.delayHours;
      this._pinnedContentVersion = value.pinnedContentVersion;
      this._ringAssignment = value.ringAssignment;
    }
  }

  // delay_hours - computed: false, optional: true, required: false
  private _delayHours?: number; 
  public get delayHours() {
    return this.getNumberAttribute('delay_hours');
  }
  public set delayHours(value: number) {
    this._delayHours = value;
  }
  public resetDelayHours() {
    this._delayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayHoursInput() {
    return this._delayHours;
  }

  // pinned_content_version - computed: false, optional: true, required: false
  private _pinnedContentVersion?: string; 
  public get pinnedContentVersion() {
    return this.getStringAttribute('pinned_content_version');
  }
  public set pinnedContentVersion(value: string) {
    this._pinnedContentVersion = value;
  }
  public resetPinnedContentVersion() {
    this._pinnedContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedContentVersionInput() {
    return this._pinnedContentVersion;
  }

  // ring_assignment - computed: false, optional: false, required: true
  private _ringAssignment?: string; 
  public get ringAssignment() {
    return this.getStringAttribute('ring_assignment');
  }
  public set ringAssignment(value: string) {
    this._ringAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ringAssignmentInput() {
    return this._ringAssignment;
  }
}
export interface DefaultContentUpdatePolicyVulnerabilityManagement {
  /**
  * Delay in hours when using 'ga' ring assignment. Valid values: 0, 1, 2, 4, 8, 12, 24, 48, 72. Only applicable when ring_assignment is 'ga'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#delay_hours DefaultContentUpdatePolicy#delay_hours}
  */
  readonly delayHours?: number;
  /**
  * Pin content category to a specific version. When set, the content category will not automatically update to newer versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#pinned_content_version DefaultContentUpdatePolicy#pinned_content_version}
  */
  readonly pinnedContentVersion?: string;
  /**
  * Ring assignment for the content category (ga, ea, pause).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#ring_assignment DefaultContentUpdatePolicy#ring_assignment}
  */
  readonly ringAssignment: string;
}

export function defaultContentUpdatePolicyVulnerabilityManagementToTerraform(struct?: DefaultContentUpdatePolicyVulnerabilityManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_hours: cdktf.numberToTerraform(struct!.delayHours),
    pinned_content_version: cdktf.stringToTerraform(struct!.pinnedContentVersion),
    ring_assignment: cdktf.stringToTerraform(struct!.ringAssignment),
  }
}


export function defaultContentUpdatePolicyVulnerabilityManagementToHclTerraform(struct?: DefaultContentUpdatePolicyVulnerabilityManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_hours: {
      value: cdktf.numberToHclTerraform(struct!.delayHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pinned_content_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedContentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_assignment: {
      value: cdktf.stringToHclTerraform(struct!.ringAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultContentUpdatePolicyVulnerabilityManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultContentUpdatePolicyVulnerabilityManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayHours = this._delayHours;
    }
    if (this._pinnedContentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedContentVersion = this._pinnedContentVersion;
    }
    if (this._ringAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringAssignment = this._ringAssignment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultContentUpdatePolicyVulnerabilityManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayHours = undefined;
      this._pinnedContentVersion = undefined;
      this._ringAssignment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayHours = value.delayHours;
      this._pinnedContentVersion = value.pinnedContentVersion;
      this._ringAssignment = value.ringAssignment;
    }
  }

  // delay_hours - computed: false, optional: true, required: false
  private _delayHours?: number; 
  public get delayHours() {
    return this.getNumberAttribute('delay_hours');
  }
  public set delayHours(value: number) {
    this._delayHours = value;
  }
  public resetDelayHours() {
    this._delayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayHoursInput() {
    return this._delayHours;
  }

  // pinned_content_version - computed: false, optional: true, required: false
  private _pinnedContentVersion?: string; 
  public get pinnedContentVersion() {
    return this.getStringAttribute('pinned_content_version');
  }
  public set pinnedContentVersion(value: string) {
    this._pinnedContentVersion = value;
  }
  public resetPinnedContentVersion() {
    this._pinnedContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedContentVersionInput() {
    return this._pinnedContentVersion;
  }

  // ring_assignment - computed: false, optional: false, required: true
  private _ringAssignment?: string; 
  public get ringAssignment() {
    return this.getStringAttribute('ring_assignment');
  }
  public set ringAssignment(value: string) {
    this._ringAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ringAssignmentInput() {
    return this._ringAssignment;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy crowdstrike_default_content_update_policy}
*/
export class DefaultContentUpdatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_default_content_update_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultContentUpdatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultContentUpdatePolicy to import
  * @param importFromId The id of the existing DefaultContentUpdatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultContentUpdatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_default_content_update_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/default_content_update_policy crowdstrike_default_content_update_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultContentUpdatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultContentUpdatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_default_content_update_policy',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.49',
        providerVersionConstraint: '0.0.49'
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
    this._rapidResponse.internalValue = config.rapidResponse;
    this._sensorOperations.internalValue = config.sensorOperations;
    this._systemCritical.internalValue = config.systemCritical;
    this._vulnerabilityManagement.internalValue = config.vulnerabilityManagement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // rapid_response - computed: false, optional: false, required: true
  private _rapidResponse = new DefaultContentUpdatePolicyRapidResponseOutputReference(this, "rapid_response");
  public get rapidResponse() {
    return this._rapidResponse;
  }
  public putRapidResponse(value: DefaultContentUpdatePolicyRapidResponse) {
    this._rapidResponse.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidResponseInput() {
    return this._rapidResponse.internalValue;
  }

  // sensor_operations - computed: false, optional: false, required: true
  private _sensorOperations = new DefaultContentUpdatePolicySensorOperationsOutputReference(this, "sensor_operations");
  public get sensorOperations() {
    return this._sensorOperations;
  }
  public putSensorOperations(value: DefaultContentUpdatePolicySensorOperations) {
    this._sensorOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorOperationsInput() {
    return this._sensorOperations.internalValue;
  }

  // system_critical - computed: false, optional: false, required: true
  private _systemCritical = new DefaultContentUpdatePolicySystemCriticalOutputReference(this, "system_critical");
  public get systemCritical() {
    return this._systemCritical;
  }
  public putSystemCritical(value: DefaultContentUpdatePolicySystemCritical) {
    this._systemCritical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCriticalInput() {
    return this._systemCritical.internalValue;
  }

  // vulnerability_management - computed: false, optional: false, required: true
  private _vulnerabilityManagement = new DefaultContentUpdatePolicyVulnerabilityManagementOutputReference(this, "vulnerability_management");
  public get vulnerabilityManagement() {
    return this._vulnerabilityManagement;
  }
  public putVulnerabilityManagement(value: DefaultContentUpdatePolicyVulnerabilityManagement) {
    this._vulnerabilityManagement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityManagementInput() {
    return this._vulnerabilityManagement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      rapid_response: defaultContentUpdatePolicyRapidResponseToTerraform(this._rapidResponse.internalValue),
      sensor_operations: defaultContentUpdatePolicySensorOperationsToTerraform(this._sensorOperations.internalValue),
      system_critical: defaultContentUpdatePolicySystemCriticalToTerraform(this._systemCritical.internalValue),
      vulnerability_management: defaultContentUpdatePolicyVulnerabilityManagementToTerraform(this._vulnerabilityManagement.internalValue),
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
      rapid_response: {
        value: defaultContentUpdatePolicyRapidResponseToHclTerraform(this._rapidResponse.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultContentUpdatePolicyRapidResponse",
      },
      sensor_operations: {
        value: defaultContentUpdatePolicySensorOperationsToHclTerraform(this._sensorOperations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultContentUpdatePolicySensorOperations",
      },
      system_critical: {
        value: defaultContentUpdatePolicySystemCriticalToHclTerraform(this._systemCritical.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultContentUpdatePolicySystemCritical",
      },
      vulnerability_management: {
        value: defaultContentUpdatePolicyVulnerabilityManagementToHclTerraform(this._vulnerabilityManagement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultContentUpdatePolicyVulnerabilityManagement",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
