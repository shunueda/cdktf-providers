// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScanBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#action ScanBudget#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#applicable_on ScanBudget#applicable_on}
  */
  readonly applicableOn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#budget_type ScanBudget#budget_type}
  */
  readonly budgetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#capacity ScanBudget#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#group_by ScanBudget#group_by}
  */
  readonly groupBy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#id ScanBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#name ScanBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#status ScanBudget#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#unit ScanBudget#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#window ScanBudget#window}
  */
  readonly window: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#scope ScanBudget#scope}
  */
  readonly scope: ScanBudgetScope;
}
export interface ScanBudgetScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#excluded_roles ScanBudget#excluded_roles}
  */
  readonly excludedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#excluded_users ScanBudget#excluded_users}
  */
  readonly excludedUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#included_roles ScanBudget#included_roles}
  */
  readonly includedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#included_users ScanBudget#included_users}
  */
  readonly includedUsers?: string[];
}

export function scanBudgetScopeToTerraform(struct?: ScanBudgetScopeOutputReference | ScanBudgetScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedRoles),
    excluded_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedUsers),
    included_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedRoles),
    included_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedUsers),
  }
}


export function scanBudgetScopeToHclTerraform(struct?: ScanBudgetScopeOutputReference | ScanBudgetScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScanBudgetScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScanBudgetScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRoles = this._excludedRoles;
    }
    if (this._excludedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUsers = this._excludedUsers;
    }
    if (this._includedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedRoles = this._includedRoles;
    }
    if (this._includedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedUsers = this._includedUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScanBudgetScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedRoles = undefined;
      this._excludedUsers = undefined;
      this._includedRoles = undefined;
      this._includedUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedRoles = value.excludedRoles;
      this._excludedUsers = value.excludedUsers;
      this._includedRoles = value.includedRoles;
      this._includedUsers = value.includedUsers;
    }
  }

  // excluded_roles - computed: false, optional: true, required: false
  private _excludedRoles?: string[]; 
  public get excludedRoles() {
    return this.getListAttribute('excluded_roles');
  }
  public set excludedRoles(value: string[]) {
    this._excludedRoles = value;
  }
  public resetExcludedRoles() {
    this._excludedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRolesInput() {
    return this._excludedRoles;
  }

  // excluded_users - computed: false, optional: true, required: false
  private _excludedUsers?: string[]; 
  public get excludedUsers() {
    return this.getListAttribute('excluded_users');
  }
  public set excludedUsers(value: string[]) {
    this._excludedUsers = value;
  }
  public resetExcludedUsers() {
    this._excludedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUsersInput() {
    return this._excludedUsers;
  }

  // included_roles - computed: false, optional: true, required: false
  private _includedRoles?: string[]; 
  public get includedRoles() {
    return this.getListAttribute('included_roles');
  }
  public set includedRoles(value: string[]) {
    this._includedRoles = value;
  }
  public resetIncludedRoles() {
    this._includedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedRolesInput() {
    return this._includedRoles;
  }

  // included_users - computed: false, optional: true, required: false
  private _includedUsers?: string[]; 
  public get includedUsers() {
    return this.getListAttribute('included_users');
  }
  public set includedUsers(value: string[]) {
    this._includedUsers = value;
  }
  public resetIncludedUsers() {
    this._includedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUsersInput() {
    return this._includedUsers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget sumologic_scan_budget}
*/
export class ScanBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_scan_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScanBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScanBudget to import
  * @param importFromId The id of the existing ScanBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScanBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_scan_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/scan_budget sumologic_scan_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScanBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: ScanBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_scan_budget',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.1',
        providerVersionConstraint: '3.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._applicableOn = config.applicableOn;
    this._budgetType = config.budgetType;
    this._capacity = config.capacity;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._unit = config.unit;
    this._window = config.window;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // applicable_on - computed: false, optional: false, required: true
  private _applicableOn?: string; 
  public get applicableOn() {
    return this.getStringAttribute('applicable_on');
  }
  public set applicableOn(value: string) {
    this._applicableOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableOnInput() {
    return this._applicableOn;
  }

  // budget_type - computed: false, optional: false, required: true
  private _budgetType?: string; 
  public get budgetType() {
    return this.getStringAttribute('budget_type');
  }
  public set budgetType(value: string) {
    this._budgetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetTypeInput() {
    return this._budgetType;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new ScanBudgetScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: ScanBudgetScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      applicable_on: cdktf.stringToTerraform(this._applicableOn),
      budget_type: cdktf.stringToTerraform(this._budgetType),
      capacity: cdktf.numberToTerraform(this._capacity),
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      unit: cdktf.stringToTerraform(this._unit),
      window: cdktf.stringToTerraform(this._window),
      scope: scanBudgetScopeToTerraform(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicable_on: {
        value: cdktf.stringToHclTerraform(this._applicableOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_type: {
        value: cdktf.stringToHclTerraform(this._budgetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window: {
        value: cdktf.stringToHclTerraform(this._window),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: scanBudgetScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScanBudgetScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
