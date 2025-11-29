// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alerts related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#alerts Dashboard#alerts}
  */
  readonly alerts: DashboardAlerts;
  /**
  * Whether the dashboard is pinned to the top of the dashboard list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#is_pinned Dashboard#is_pinned}
  */
  readonly isPinned?: boolean | cdktf.IResolvable;
  /**
  * Metrics related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#metrics Dashboard#metrics}
  */
  readonly metrics?: DashboardMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Where to place the dashboard in the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#ordering Dashboard#ordering}
  */
  readonly ordering?: number;
  /**
  * Selected services to show on the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#selected Dashboard#selected}
  */
  readonly selected: DashboardSelected;
  /**
  * Services related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#services Dashboard#services}
  */
  readonly services: DashboardServices;
}
export interface DashboardAlertsInclude {
  /**
  * Whether to include ignored alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#ignored Dashboard#ignored}
  */
  readonly ignored?: boolean | cdktf.IResolvable;
  /**
  * Whether to include resolved alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#resolved Dashboard#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
}

export function dashboardAlertsIncludeToTerraform(struct?: DashboardAlertsInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored: cdktf.booleanToTerraform(struct!.ignored),
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}


export function dashboardAlertsIncludeToHclTerraform(struct?: DashboardAlertsInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored: {
      value: cdktf.booleanToHclTerraform(struct!.ignored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolved: {
      value: cdktf.booleanToHclTerraform(struct!.resolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardAlertsIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardAlertsInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignored !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignored = this._ignored;
    }
    if (this._resolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardAlertsInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignored = undefined;
      this._resolved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignored = value.ignored;
      this._resolved = value.resolved;
    }
  }

  // ignored - computed: true, optional: true, required: false
  private _ignored?: boolean | cdktf.IResolvable; 
  public get ignored() {
    return this.getBooleanAttribute('ignored');
  }
  public set ignored(value: boolean | cdktf.IResolvable) {
    this._ignored = value;
  }
  public resetIgnored() {
    this._ignored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInput() {
    return this._ignored;
  }

  // resolved - computed: true, optional: true, required: false
  private _resolved?: boolean | cdktf.IResolvable; 
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }
  public set resolved(value: boolean | cdktf.IResolvable) {
    this._resolved = value;
  }
  public resetResolved() {
    this._resolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved;
  }
}
export interface DashboardAlerts {
  /**
  * Whether to show block for all checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#for_all_checks Dashboard#for_all_checks}
  */
  readonly forAllChecks?: boolean | cdktf.IResolvable;
  /**
  * Alerts related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#include Dashboard#include}
  */
  readonly include?: DashboardAlertsInclude;
  /**
  * The number of entities to show
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#num_to_show Dashboard#num_to_show}
  */
  readonly numToShow?: number;
  /**
  * Whether to show the section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#show_section Dashboard#show_section}
  */
  readonly showSection?: boolean | cdktf.IResolvable;
}

export function dashboardAlertsToTerraform(struct?: DashboardAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_all_checks: cdktf.booleanToTerraform(struct!.forAllChecks),
    include: dashboardAlertsIncludeToTerraform(struct!.include),
    num_to_show: cdktf.numberToTerraform(struct!.numToShow),
    show_section: cdktf.booleanToTerraform(struct!.showSection),
  }
}


export function dashboardAlertsToHclTerraform(struct?: DashboardAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_all_checks: {
      value: cdktf.booleanToHclTerraform(struct!.forAllChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include: {
      value: dashboardAlertsIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardAlertsInclude",
    },
    num_to_show: {
      value: cdktf.numberToHclTerraform(struct!.numToShow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show_section: {
      value: cdktf.booleanToHclTerraform(struct!.showSection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardAlertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardAlerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forAllChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.forAllChecks = this._forAllChecks;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._numToShow !== undefined) {
      hasAnyValues = true;
      internalValueResult.numToShow = this._numToShow;
    }
    if (this._showSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSection = this._showSection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardAlerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forAllChecks = undefined;
      this._include.internalValue = undefined;
      this._numToShow = undefined;
      this._showSection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forAllChecks = value.forAllChecks;
      this._include.internalValue = value.include;
      this._numToShow = value.numToShow;
      this._showSection = value.showSection;
    }
  }

  // for_all_checks - computed: true, optional: true, required: false
  private _forAllChecks?: boolean | cdktf.IResolvable; 
  public get forAllChecks() {
    return this.getBooleanAttribute('for_all_checks');
  }
  public set forAllChecks(value: boolean | cdktf.IResolvable) {
    this._forAllChecks = value;
  }
  public resetForAllChecks() {
    this._forAllChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forAllChecksInput() {
    return this._forAllChecks;
  }

  // include - computed: true, optional: true, required: false
  private _include = new DashboardAlertsIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: DashboardAlertsInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // num_to_show - computed: true, optional: true, required: false
  private _numToShow?: number; 
  public get numToShow() {
    return this.getNumberAttribute('num_to_show');
  }
  public set numToShow(value: number) {
    this._numToShow = value;
  }
  public resetNumToShow() {
    this._numToShow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numToShowInput() {
    return this._numToShow;
  }

  // show_section - computed: true, optional: true, required: false
  private _showSection?: boolean | cdktf.IResolvable; 
  public get showSection() {
    return this.getBooleanAttribute('show_section');
  }
  public set showSection(value: boolean | cdktf.IResolvable) {
    this._showSection = value;
  }
  public resetShowSection() {
    this._showSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionInput() {
    return this._showSection;
  }
}
export interface DashboardMetrics {
  /**
  * Whether to show block for all checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#for_all_checks Dashboard#for_all_checks}
  */
  readonly forAllChecks?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#show_section Dashboard#show_section}
  */
  readonly showSection?: boolean | cdktf.IResolvable;
}

export function dashboardMetricsToTerraform(struct?: DashboardMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_all_checks: cdktf.booleanToTerraform(struct!.forAllChecks),
    show_section: cdktf.booleanToTerraform(struct!.showSection),
  }
}


export function dashboardMetricsToHclTerraform(struct?: DashboardMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_all_checks: {
      value: cdktf.booleanToHclTerraform(struct!.forAllChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_section: {
      value: cdktf.booleanToHclTerraform(struct!.showSection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forAllChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.forAllChecks = this._forAllChecks;
    }
    if (this._showSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSection = this._showSection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forAllChecks = undefined;
      this._showSection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forAllChecks = value.forAllChecks;
      this._showSection = value.showSection;
    }
  }

  // for_all_checks - computed: true, optional: true, required: false
  private _forAllChecks?: boolean | cdktf.IResolvable; 
  public get forAllChecks() {
    return this.getBooleanAttribute('for_all_checks');
  }
  public set forAllChecks(value: boolean | cdktf.IResolvable) {
    this._forAllChecks = value;
  }
  public resetForAllChecks() {
    this._forAllChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forAllChecksInput() {
    return this._forAllChecks;
  }

  // show_section - computed: true, optional: true, required: false
  private _showSection?: boolean | cdktf.IResolvable; 
  public get showSection() {
    return this.getBooleanAttribute('show_section');
  }
  public set showSection(value: boolean | cdktf.IResolvable) {
    this._showSection = value;
  }
  public resetShowSection() {
    this._showSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionInput() {
    return this._showSection;
  }
}
export interface DashboardSelected {
  /**
  * The services collection to show on the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#services Dashboard#services}
  */
  readonly services?: string[];
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#tags Dashboard#tags}
  */
  readonly tags?: string[];
}

export function dashboardSelectedToTerraform(struct?: DashboardSelected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dashboardSelectedToHclTerraform(struct?: DashboardSelected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSelectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardSelected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSelected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._services = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._services = value.services;
      this._tags = value.tags;
    }
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DashboardServicesInclude {
  /**
  * Whether to include down services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#down Dashboard#down}
  */
  readonly down?: boolean | cdktf.IResolvable;
  /**
  * Whether to include services in maintenance mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#maintenance Dashboard#maintenance}
  */
  readonly maintenance?: boolean | cdktf.IResolvable;
  /**
  * Whether to include paused services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#paused Dashboard#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Whether to include up services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#up Dashboard#up}
  */
  readonly up?: boolean | cdktf.IResolvable;
}

export function dashboardServicesIncludeToTerraform(struct?: DashboardServicesInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down: cdktf.booleanToTerraform(struct!.down),
    maintenance: cdktf.booleanToTerraform(struct!.maintenance),
    paused: cdktf.booleanToTerraform(struct!.paused),
    up: cdktf.booleanToTerraform(struct!.up),
  }
}


export function dashboardServicesIncludeToHclTerraform(struct?: DashboardServicesInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down: {
      value: cdktf.booleanToHclTerraform(struct!.down),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance: {
      value: cdktf.booleanToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    up: {
      value: cdktf.booleanToHclTerraform(struct!.up),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardServicesIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardServicesInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._down !== undefined) {
      hasAnyValues = true;
      internalValueResult.down = this._down;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._up !== undefined) {
      hasAnyValues = true;
      internalValueResult.up = this._up;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardServicesInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._down = undefined;
      this._maintenance = undefined;
      this._paused = undefined;
      this._up = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._down = value.down;
      this._maintenance = value.maintenance;
      this._paused = value.paused;
      this._up = value.up;
    }
  }

  // down - computed: true, optional: true, required: false
  private _down?: boolean | cdktf.IResolvable; 
  public get down() {
    return this.getBooleanAttribute('down');
  }
  public set down(value: boolean | cdktf.IResolvable) {
    this._down = value;
  }
  public resetDown() {
    this._down = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downInput() {
    return this._down;
  }

  // maintenance - computed: true, optional: true, required: false
  private _maintenance?: boolean | cdktf.IResolvable; 
  public get maintenance() {
    return this.getBooleanAttribute('maintenance');
  }
  public set maintenance(value: boolean | cdktf.IResolvable) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // up - computed: true, optional: true, required: false
  private _up?: boolean | cdktf.IResolvable; 
  public get up() {
    return this.getBooleanAttribute('up');
  }
  public set up(value: boolean | cdktf.IResolvable) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
  }
}
export interface DashboardServicesShow {
  /**
  * Whether to show response time for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#response_time Dashboard#response_time}
  */
  readonly responseTime?: boolean | cdktf.IResolvable;
  /**
  * Whether to show uptime for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#uptime Dashboard#uptime}
  */
  readonly uptime?: boolean | cdktf.IResolvable;
}

export function dashboardServicesShowToTerraform(struct?: DashboardServicesShow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_time: cdktf.booleanToTerraform(struct!.responseTime),
    uptime: cdktf.booleanToTerraform(struct!.uptime),
  }
}


export function dashboardServicesShowToHclTerraform(struct?: DashboardServicesShow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_time: {
      value: cdktf.booleanToHclTerraform(struct!.responseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uptime: {
      value: cdktf.booleanToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardServicesShowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardServicesShow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTime = this._responseTime;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardServicesShow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseTime = undefined;
      this._uptime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseTime = value.responseTime;
      this._uptime = value.uptime;
    }
  }

  // response_time - computed: true, optional: true, required: false
  private _responseTime?: boolean | cdktf.IResolvable; 
  public get responseTime() {
    return this.getBooleanAttribute('response_time');
  }
  public set responseTime(value: boolean | cdktf.IResolvable) {
    this._responseTime = value;
  }
  public resetResponseTime() {
    this._responseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeInput() {
    return this._responseTime;
  }

  // uptime - computed: true, optional: true, required: false
  private _uptime?: boolean | cdktf.IResolvable; 
  public get uptime() {
    return this.getBooleanAttribute('uptime');
  }
  public set uptime(value: boolean | cdktf.IResolvable) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }
}
export interface DashboardServicesSort {
  /**
  * The primary sort for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#primary Dashboard#primary}
  */
  readonly primary?: string;
  /**
  * The secondary sort for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#secondary Dashboard#secondary}
  */
  readonly secondary?: string;
}

export function dashboardServicesSortToTerraform(struct?: DashboardServicesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dashboardServicesSortToHclTerraform(struct?: DashboardServicesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardServicesSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardServicesSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardServicesSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DashboardServices {
  /**
  * Which services to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#include Dashboard#include}
  */
  readonly include?: DashboardServicesInclude;
  /**
  * The number of entities to show
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#num_to_show Dashboard#num_to_show}
  */
  readonly numToShow?: number;
  /**
  * Which service attributes to show
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#show Dashboard#show}
  */
  readonly show: DashboardServicesShow;
  /**
  * Whether to show the section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#show_section Dashboard#show_section}
  */
  readonly showSection?: boolean | cdktf.IResolvable;
  /**
  * How to sort services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort: DashboardServicesSort;
}

export function dashboardServicesToTerraform(struct?: DashboardServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: dashboardServicesIncludeToTerraform(struct!.include),
    num_to_show: cdktf.numberToTerraform(struct!.numToShow),
    show: dashboardServicesShowToTerraform(struct!.show),
    show_section: cdktf.booleanToTerraform(struct!.showSection),
    sort: dashboardServicesSortToTerraform(struct!.sort),
  }
}


export function dashboardServicesToHclTerraform(struct?: DashboardServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: dashboardServicesIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardServicesInclude",
    },
    num_to_show: {
      value: cdktf.numberToHclTerraform(struct!.numToShow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: dashboardServicesShowToHclTerraform(struct!.show),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardServicesShow",
    },
    show_section: {
      value: cdktf.booleanToHclTerraform(struct!.showSection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: dashboardServicesSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardServicesSort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._numToShow !== undefined) {
      hasAnyValues = true;
      internalValueResult.numToShow = this._numToShow;
    }
    if (this._show?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show?.internalValue;
    }
    if (this._showSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSection = this._showSection;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include.internalValue = undefined;
      this._numToShow = undefined;
      this._show.internalValue = undefined;
      this._showSection = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include.internalValue = value.include;
      this._numToShow = value.numToShow;
      this._show.internalValue = value.show;
      this._showSection = value.showSection;
      this._sort.internalValue = value.sort;
    }
  }

  // include - computed: true, optional: true, required: false
  private _include = new DashboardServicesIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: DashboardServicesInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // num_to_show - computed: true, optional: true, required: false
  private _numToShow?: number; 
  public get numToShow() {
    return this.getNumberAttribute('num_to_show');
  }
  public set numToShow(value: number) {
    this._numToShow = value;
  }
  public resetNumToShow() {
    this._numToShow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numToShowInput() {
    return this._numToShow;
  }

  // show - computed: false, optional: false, required: true
  private _show = new DashboardServicesShowOutputReference(this, "show");
  public get show() {
    return this._show;
  }
  public putShow(value: DashboardServicesShow) {
    this._show.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show.internalValue;
  }

  // show_section - computed: true, optional: true, required: false
  private _showSection?: boolean | cdktf.IResolvable; 
  public get showSection() {
    return this.getBooleanAttribute('show_section');
  }
  public set showSection(value: boolean | cdktf.IResolvable) {
    this._showSection = value;
  }
  public resetShowSection() {
    this._showSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionInput() {
    return this._showSection;
  }

  // sort - computed: false, optional: false, required: true
  private _sort = new DashboardServicesSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardServicesSort) {
    this._sort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard uptime_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/dashboard uptime_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alerts.internalValue = config.alerts;
    this._isPinned = config.isPinned;
    this._metrics.internalValue = config.metrics;
    this._name = config.name;
    this._ordering = config.ordering;
    this._selected.internalValue = config.selected;
    this._services.internalValue = config.services;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: false, optional: false, required: true
  private _alerts = new DashboardAlertsOutputReference(this, "alerts");
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: DashboardAlerts) {
    this._alerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_pinned - computed: true, optional: true, required: false
  private _isPinned?: boolean | cdktf.IResolvable; 
  public get isPinned() {
    return this.getBooleanAttribute('is_pinned');
  }
  public set isPinned(value: boolean | cdktf.IResolvable) {
    this._isPinned = value;
  }
  public resetIsPinned() {
    this._isPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPinnedInput() {
    return this._isPinned;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics = new DashboardMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DashboardMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // ordering - computed: true, optional: true, required: false
  private _ordering?: number; 
  public get ordering() {
    return this.getNumberAttribute('ordering');
  }
  public set ordering(value: number) {
    this._ordering = value;
  }
  public resetOrdering() {
    this._ordering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering;
  }

  // selected - computed: false, optional: false, required: true
  private _selected = new DashboardSelectedOutputReference(this, "selected");
  public get selected() {
    return this._selected;
  }
  public putSelected(value: DashboardSelected) {
    this._selected.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInput() {
    return this._selected.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DashboardServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DashboardServices) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts: dashboardAlertsToTerraform(this._alerts.internalValue),
      is_pinned: cdktf.booleanToTerraform(this._isPinned),
      metrics: dashboardMetricsToTerraform(this._metrics.internalValue),
      name: cdktf.stringToTerraform(this._name),
      ordering: cdktf.numberToTerraform(this._ordering),
      selected: dashboardSelectedToTerraform(this._selected.internalValue),
      services: dashboardServicesToTerraform(this._services.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts: {
        value: dashboardAlertsToHclTerraform(this._alerts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardAlerts",
      },
      is_pinned: {
        value: cdktf.booleanToHclTerraform(this._isPinned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metrics: {
        value: dashboardMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardMetrics",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: cdktf.numberToHclTerraform(this._ordering),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selected: {
        value: dashboardSelectedToHclTerraform(this._selected.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardSelected",
      },
      services: {
        value: dashboardServicesToHclTerraform(this._services.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardServices",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
