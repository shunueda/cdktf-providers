// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#annotations ReportConfig#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#description ReportConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#disable ReportConfig#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#id ReportConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#labels ReportConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#name ReportConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#namespace ReportConfig#namespace}
  */
  readonly namespace: string;
  /**
  * bot_defense block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#bot_defense ReportConfig#bot_defense}
  */
  readonly botDefense?: ReportConfigBotDefense;
  /**
  * report_recipients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#report_recipients ReportConfig#report_recipients}
  */
  readonly reportRecipients?: ReportConfigReportRecipients;
  /**
  * waap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#waap ReportConfig#waap}
  */
  readonly waap?: ReportConfigWaap;
}
export interface ReportConfigBotDefense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#all_namespaces ReportConfig#all_namespaces}
  */
  readonly allNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#current_namespace ReportConfig#current_namespace}
  */
  readonly currentNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#system_default ReportConfig#system_default}
  */
  readonly systemDefault?: boolean | cdktf.IResolvable;
}

export function reportConfigBotDefenseToTerraform(struct?: ReportConfigBotDefenseOutputReference | ReportConfigBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_namespaces: cdktf.booleanToTerraform(struct!.allNamespaces),
    current_namespace: cdktf.booleanToTerraform(struct!.currentNamespace),
    system_default: cdktf.booleanToTerraform(struct!.systemDefault),
  }
}


export function reportConfigBotDefenseToHclTerraform(struct?: ReportConfigBotDefenseOutputReference | ReportConfigBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.allNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    current_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.currentNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_default: {
      value: cdktf.booleanToHclTerraform(struct!.systemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigBotDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigBotDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNamespaces = this._allNamespaces;
    }
    if (this._currentNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentNamespace = this._currentNamespace;
    }
    if (this._systemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDefault = this._systemDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigBotDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allNamespaces = undefined;
      this._currentNamespace = undefined;
      this._systemDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allNamespaces = value.allNamespaces;
      this._currentNamespace = value.currentNamespace;
      this._systemDefault = value.systemDefault;
    }
  }

  // all_namespaces - computed: false, optional: true, required: false
  private _allNamespaces?: boolean | cdktf.IResolvable; 
  public get allNamespaces() {
    return this.getBooleanAttribute('all_namespaces');
  }
  public set allNamespaces(value: boolean | cdktf.IResolvable) {
    this._allNamespaces = value;
  }
  public resetAllNamespaces() {
    this._allNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNamespacesInput() {
    return this._allNamespaces;
  }

  // current_namespace - computed: false, optional: true, required: false
  private _currentNamespace?: boolean | cdktf.IResolvable; 
  public get currentNamespace() {
    return this.getBooleanAttribute('current_namespace');
  }
  public set currentNamespace(value: boolean | cdktf.IResolvable) {
    this._currentNamespace = value;
  }
  public resetCurrentNamespace() {
    this._currentNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentNamespaceInput() {
    return this._currentNamespace;
  }

  // system_default - computed: false, optional: true, required: false
  private _systemDefault?: boolean | cdktf.IResolvable; 
  public get systemDefault() {
    return this.getBooleanAttribute('system_default');
  }
  public set systemDefault(value: boolean | cdktf.IResolvable) {
    this._systemDefault = value;
  }
  public resetSystemDefault() {
    this._systemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDefaultInput() {
    return this._systemDefault;
  }
}
export interface ReportConfigReportRecipientsUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#name ReportConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#namespace ReportConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#tenant ReportConfig#tenant}
  */
  readonly tenant?: string;
}

export function reportConfigReportRecipientsUserGroupsToTerraform(struct?: ReportConfigReportRecipientsUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function reportConfigReportRecipientsUserGroupsToHclTerraform(struct?: ReportConfigReportRecipientsUserGroups | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigReportRecipientsUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigReportRecipientsUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigReportRecipientsUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ReportConfigReportRecipientsUserGroupsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigReportRecipientsUserGroups[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigReportRecipientsUserGroupsOutputReference {
    return new ReportConfigReportRecipientsUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigReportRecipients {
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#user_groups ReportConfig#user_groups}
  */
  readonly userGroups?: ReportConfigReportRecipientsUserGroups[] | cdktf.IResolvable;
}

export function reportConfigReportRecipientsToTerraform(struct?: ReportConfigReportRecipientsOutputReference | ReportConfigReportRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_groups: cdktf.listMapper(reportConfigReportRecipientsUserGroupsToTerraform, true)(struct!.userGroups),
  }
}


export function reportConfigReportRecipientsToHclTerraform(struct?: ReportConfigReportRecipientsOutputReference | ReportConfigReportRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_groups: {
      value: cdktf.listMapperHcl(reportConfigReportRecipientsUserGroupsToHclTerraform, true)(struct!.userGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigReportRecipientsUserGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigReportRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigReportRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigReportRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userGroups.internalValue = value.userGroups;
    }
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new ReportConfigReportRecipientsUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: ReportConfigReportRecipientsUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }
}
export interface ReportConfigWaapDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#report_generation_time ReportConfig#report_generation_time}
  */
  readonly reportGenerationTime: string;
}

export function reportConfigWaapDailyToTerraform(struct?: ReportConfigWaapDailyOutputReference | ReportConfigWaapDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    report_generation_time: cdktf.stringToTerraform(struct!.reportGenerationTime),
  }
}


export function reportConfigWaapDailyToHclTerraform(struct?: ReportConfigWaapDailyOutputReference | ReportConfigWaapDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    report_generation_time: {
      value: cdktf.stringToHclTerraform(struct!.reportGenerationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigWaapDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigWaapDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportGenerationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportGenerationTime = this._reportGenerationTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigWaapDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reportGenerationTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reportGenerationTime = value.reportGenerationTime;
    }
  }

  // report_generation_time - computed: false, optional: false, required: true
  private _reportGenerationTime?: string; 
  public get reportGenerationTime() {
    return this.getStringAttribute('report_generation_time');
  }
  public set reportGenerationTime(value: string) {
    this._reportGenerationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGenerationTimeInput() {
    return this._reportGenerationTime;
  }
}
export interface ReportConfigWaapMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#date ReportConfig#date}
  */
  readonly date: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#report_generation_time ReportConfig#report_generation_time}
  */
  readonly reportGenerationTime: string;
}

export function reportConfigWaapMonthlyToTerraform(struct?: ReportConfigWaapMonthlyOutputReference | ReportConfigWaapMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    report_generation_time: cdktf.stringToTerraform(struct!.reportGenerationTime),
  }
}


export function reportConfigWaapMonthlyToHclTerraform(struct?: ReportConfigWaapMonthlyOutputReference | ReportConfigWaapMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_generation_time: {
      value: cdktf.stringToHclTerraform(struct!.reportGenerationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigWaapMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigWaapMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._reportGenerationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportGenerationTime = this._reportGenerationTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigWaapMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._reportGenerationTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._date = value.date;
      this._reportGenerationTime = value.reportGenerationTime;
    }
  }

  // date - computed: false, optional: false, required: true
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // report_generation_time - computed: false, optional: false, required: true
  private _reportGenerationTime?: string; 
  public get reportGenerationTime() {
    return this.getStringAttribute('report_generation_time');
  }
  public set reportGenerationTime(value: string) {
    this._reportGenerationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGenerationTimeInput() {
    return this._reportGenerationTime;
  }
}
export interface ReportConfigWaapNamespaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#namespaces ReportConfig#namespaces}
  */
  readonly namespaces: string[];
}

export function reportConfigWaapNamespacesToTerraform(struct?: ReportConfigWaapNamespacesOutputReference | ReportConfigWaapNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function reportConfigWaapNamespacesToHclTerraform(struct?: ReportConfigWaapNamespacesOutputReference | ReportConfigWaapNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigWaapNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigWaapNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigWaapNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
    }
  }

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface ReportConfigWaapWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#day ReportConfig#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#report_generation_time ReportConfig#report_generation_time}
  */
  readonly reportGenerationTime: string;
}

export function reportConfigWaapWeeklyToTerraform(struct?: ReportConfigWaapWeeklyOutputReference | ReportConfigWaapWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    report_generation_time: cdktf.stringToTerraform(struct!.reportGenerationTime),
  }
}


export function reportConfigWaapWeeklyToHclTerraform(struct?: ReportConfigWaapWeeklyOutputReference | ReportConfigWaapWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_generation_time: {
      value: cdktf.stringToHclTerraform(struct!.reportGenerationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigWaapWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigWaapWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._reportGenerationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportGenerationTime = this._reportGenerationTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigWaapWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._reportGenerationTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._reportGenerationTime = value.reportGenerationTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // report_generation_time - computed: false, optional: false, required: true
  private _reportGenerationTime?: string; 
  public get reportGenerationTime() {
    return this.getStringAttribute('report_generation_time');
  }
  public set reportGenerationTime(value: string) {
    this._reportGenerationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGenerationTimeInput() {
    return this._reportGenerationTime;
  }
}
export interface ReportConfigWaap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#all_namespaces ReportConfig#all_namespaces}
  */
  readonly allNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#current_namespace ReportConfig#current_namespace}
  */
  readonly currentNamespace?: boolean | cdktf.IResolvable;
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#daily ReportConfig#daily}
  */
  readonly daily?: ReportConfigWaapDaily;
  /**
  * monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#monthly ReportConfig#monthly}
  */
  readonly monthly?: ReportConfigWaapMonthly;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#namespaces ReportConfig#namespaces}
  */
  readonly namespaces?: ReportConfigWaapNamespaces;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#weekly ReportConfig#weekly}
  */
  readonly weekly?: ReportConfigWaapWeekly;
}

export function reportConfigWaapToTerraform(struct?: ReportConfigWaapOutputReference | ReportConfigWaap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_namespaces: cdktf.booleanToTerraform(struct!.allNamespaces),
    current_namespace: cdktf.booleanToTerraform(struct!.currentNamespace),
    daily: reportConfigWaapDailyToTerraform(struct!.daily),
    monthly: reportConfigWaapMonthlyToTerraform(struct!.monthly),
    namespaces: reportConfigWaapNamespacesToTerraform(struct!.namespaces),
    weekly: reportConfigWaapWeeklyToTerraform(struct!.weekly),
  }
}


export function reportConfigWaapToHclTerraform(struct?: ReportConfigWaapOutputReference | ReportConfigWaap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.allNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    current_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.currentNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    daily: {
      value: reportConfigWaapDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigWaapDailyList",
    },
    monthly: {
      value: reportConfigWaapMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigWaapMonthlyList",
    },
    namespaces: {
      value: reportConfigWaapNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigWaapNamespacesList",
    },
    weekly: {
      value: reportConfigWaapWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigWaapWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigWaapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportConfigWaap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNamespaces = this._allNamespaces;
    }
    if (this._currentNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentNamespace = this._currentNamespace;
    }
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigWaap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allNamespaces = undefined;
      this._currentNamespace = undefined;
      this._daily.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._namespaces.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allNamespaces = value.allNamespaces;
      this._currentNamespace = value.currentNamespace;
      this._daily.internalValue = value.daily;
      this._monthly.internalValue = value.monthly;
      this._namespaces.internalValue = value.namespaces;
      this._weekly.internalValue = value.weekly;
    }
  }

  // all_namespaces - computed: false, optional: true, required: false
  private _allNamespaces?: boolean | cdktf.IResolvable; 
  public get allNamespaces() {
    return this.getBooleanAttribute('all_namespaces');
  }
  public set allNamespaces(value: boolean | cdktf.IResolvable) {
    this._allNamespaces = value;
  }
  public resetAllNamespaces() {
    this._allNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNamespacesInput() {
    return this._allNamespaces;
  }

  // current_namespace - computed: false, optional: true, required: false
  private _currentNamespace?: boolean | cdktf.IResolvable; 
  public get currentNamespace() {
    return this.getBooleanAttribute('current_namespace');
  }
  public set currentNamespace(value: boolean | cdktf.IResolvable) {
    this._currentNamespace = value;
  }
  public resetCurrentNamespace() {
    this._currentNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentNamespaceInput() {
    return this._currentNamespace;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ReportConfigWaapDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ReportConfigWaapDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ReportConfigWaapMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ReportConfigWaapMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new ReportConfigWaapNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: ReportConfigWaapNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ReportConfigWaapWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ReportConfigWaapWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config volterra_report_config}
*/
export class ReportConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_report_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportConfig to import
  * @param importFromId The id of the existing ReportConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_report_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/report_config volterra_report_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_report_config',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._botDefense.internalValue = config.botDefense;
    this._reportRecipients.internalValue = config.reportRecipients;
    this._waap.internalValue = config.waap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // bot_defense - computed: false, optional: true, required: false
  private _botDefense = new ReportConfigBotDefenseOutputReference(this, "bot_defense");
  public get botDefense() {
    return this._botDefense;
  }
  public putBotDefense(value: ReportConfigBotDefense) {
    this._botDefense.internalValue = value;
  }
  public resetBotDefense() {
    this._botDefense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDefenseInput() {
    return this._botDefense.internalValue;
  }

  // report_recipients - computed: false, optional: true, required: false
  private _reportRecipients = new ReportConfigReportRecipientsOutputReference(this, "report_recipients");
  public get reportRecipients() {
    return this._reportRecipients;
  }
  public putReportRecipients(value: ReportConfigReportRecipients) {
    this._reportRecipients.internalValue = value;
  }
  public resetReportRecipients() {
    this._reportRecipients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportRecipientsInput() {
    return this._reportRecipients.internalValue;
  }

  // waap - computed: false, optional: true, required: false
  private _waap = new ReportConfigWaapOutputReference(this, "waap");
  public get waap() {
    return this._waap;
  }
  public putWaap(value: ReportConfigWaap) {
    this._waap.internalValue = value;
  }
  public resetWaap() {
    this._waap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waapInput() {
    return this._waap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      bot_defense: reportConfigBotDefenseToTerraform(this._botDefense.internalValue),
      report_recipients: reportConfigReportRecipientsToTerraform(this._reportRecipients.internalValue),
      waap: reportConfigWaapToTerraform(this._waap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_defense: {
        value: reportConfigBotDefenseToHclTerraform(this._botDefense.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportConfigBotDefenseList",
      },
      report_recipients: {
        value: reportConfigReportRecipientsToHclTerraform(this._reportRecipients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportConfigReportRecipientsList",
      },
      waap: {
        value: reportConfigWaapToHclTerraform(this._waap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportConfigWaapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
