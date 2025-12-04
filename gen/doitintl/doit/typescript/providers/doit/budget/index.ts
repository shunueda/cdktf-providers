// https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of up to three thresholds defined as percentage of amount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#alerts Budget#alerts}
  */
  readonly alerts?: BudgetAlerts[] | cdktf.IResolvable;
  /**
  * Budget period amount. Required if usePrevSpend is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#amount Budget#amount}
  */
  readonly amount?: number;
  /**
  * List of permitted users to view/edit the report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#collaborators Budget#collaborators}
  */
  readonly collaborators?: BudgetCollaborators[] | cdktf.IResolvable;
  /**
  * Budget currency. Possible values are:
  * 'USD'
  * 'ILS'
  * 'EUR'
  * 'AUD'
  * 'CAD'
  * 'GBP'
  * 'DKK'
  * 'NOK'
  * 'SEK'
  * 'BRL'
  * 'SGD'
  * 'MXN'
  * 'CHF'
  * 'MYR'
  * 'TWD'
  * 'EGP'
  * 'ZAR'
  * 'JPY'
  * 'IDR'
  * 'AED'
  * 'COP'
  * 'THB'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#currency Budget#currency}
  */
  readonly currency: string;
  /**
  * Budget description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#description Budget#description}
  */
  readonly description?: string;
  /**
  * Fixed budget end date. Required if budget type is fixed. In milliseconds since the epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#end_period Budget#end_period}
  */
  readonly endPeriod?: number;
  /**
  * Periodical growth percentage in recurring budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#growth_per_period Budget#growth_per_period}
  */
  readonly growthPerPeriod?: number;
  /**
  * Budget metric  - currently fixed to "cost"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#metric Budget#metric}
  */
  readonly metric?: string;
  /**
  * Budget Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#name Budget#name}
  */
  readonly name: string;
  /**
  * Public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#public Budget#public}
  */
  readonly public?: string;
  /**
  * List of emails to notify when reaching alert threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#recipients Budget#recipients}
  */
  readonly recipients?: string[];
  /**
  * List of slack channels to notify when reaching alert threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#recipients_slack_channels Budget#recipients_slack_channels}
  */
  readonly recipientsSlackChannels?: BudgetRecipientsSlackChannels[] | cdktf.IResolvable;
  /**
  * List of attributions that defines that budget scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#scope Budget#scope}
  */
  readonly scope: string[];
  /**
  * Budget start Date, in milliseconds since the epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#start_period Budget#start_period}
  */
  readonly startPeriod: number;
  /**
  * Recurring budget interval can be on of:["day", "week", "month", "quarter","year]"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#time_interval Budget#time_interval}
  */
  readonly timeInterval?: string;
  /**
  * Budget type can be one of: ["fixed", "recurring"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#type Budget#type}
  */
  readonly type: string;
  /**
  * Use the last period's spend as the target amount for recurring budgets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#use_prev_spend Budget#use_prev_spend}
  */
  readonly usePrevSpend?: boolean | cdktf.IResolvable;
}
export interface BudgetAlerts {
  /**
  * Percentage of the budget amount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#percentage Budget#percentage}
  */
  readonly percentage: number;
}

export function budgetAlertsToTerraform(struct?: BudgetAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function budgetAlertsToHclTerraform(struct?: BudgetAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAlerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAlerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}

export class BudgetAlertsList extends cdktf.ComplexList {
  public internalValue? : BudgetAlerts[] | cdktf.IResolvable

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
  public get(index: number): BudgetAlertsOutputReference {
    return new BudgetAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetCollaborators {
  /**
  * Email of the collaborator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#email Budget#email}
  */
  readonly email: string;
  /**
  * Role of the collaborator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#role Budget#role}
  */
  readonly role: string;
}

export function budgetCollaboratorsToTerraform(struct?: BudgetCollaborators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function budgetCollaboratorsToHclTerraform(struct?: BudgetCollaborators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetCollaboratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetCollaborators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetCollaborators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._role = value.role;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class BudgetCollaboratorsList extends cdktf.ComplexList {
  public internalValue? : BudgetCollaborators[] | cdktf.IResolvable

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
  public get(index: number): BudgetCollaboratorsOutputReference {
    return new BudgetCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetRecipientsSlackChannels {
  /**
  * Customer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#customer_id Budget#customer_id}
  */
  readonly customerId: string;
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#id Budget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#name Budget#name}
  */
  readonly name: string;
  /**
  * Whether the channel is shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#shared Budget#shared}
  */
  readonly shared: boolean | cdktf.IResolvable;
  /**
  * Type of the channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#type Budget#type}
  */
  readonly type: string;
  /**
  * Slack workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#workspace Budget#workspace}
  */
  readonly workspace: string;
}

export function budgetRecipientsSlackChannelsToTerraform(struct?: BudgetRecipientsSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_id: cdktf.stringToTerraform(struct!.customerId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    shared: cdktf.booleanToTerraform(struct!.shared),
    type: cdktf.stringToTerraform(struct!.type),
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function budgetRecipientsSlackChannelsToHclTerraform(struct?: BudgetRecipientsSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetRecipientsSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetRecipientsSlackChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetRecipientsSlackChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._shared = undefined;
      this._type = undefined;
      this._workspace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerId = value.customerId;
      this._id = value.id;
      this._name = value.name;
      this._shared = value.shared;
      this._type = value.type;
      this._workspace = value.workspace;
    }
  }

  // customer_id - computed: false, optional: false, required: true
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // shared - computed: false, optional: false, required: true
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}

export class BudgetRecipientsSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : BudgetRecipientsSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): BudgetRecipientsSlackChannelsOutputReference {
    return new BudgetRecipientsSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget doit_budget}
*/
export class Budget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Budget to import
  * @param importFromId The id of the existing Budget that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Budget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/budget doit_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_budget',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
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
    this._amount = config.amount;
    this._collaborators.internalValue = config.collaborators;
    this._currency = config.currency;
    this._description = config.description;
    this._endPeriod = config.endPeriod;
    this._growthPerPeriod = config.growthPerPeriod;
    this._metric = config.metric;
    this._name = config.name;
    this._public = config.public;
    this._recipients = config.recipients;
    this._recipientsSlackChannels.internalValue = config.recipientsSlackChannels;
    this._scope = config.scope;
    this._startPeriod = config.startPeriod;
    this._timeInterval = config.timeInterval;
    this._type = config.type;
    this._usePrevSpend = config.usePrevSpend;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: false, optional: true, required: false
  private _alerts = new BudgetAlertsList(this, "alerts", false);
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: BudgetAlerts[] | cdktf.IResolvable) {
    this._alerts.internalValue = value;
  }
  public resetAlerts() {
    this._alerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // collaborators - computed: false, optional: true, required: false
  private _collaborators = new BudgetCollaboratorsList(this, "collaborators", false);
  public get collaborators() {
    return this._collaborators;
  }
  public putCollaborators(value: BudgetCollaborators[] | cdktf.IResolvable) {
    this._collaborators.internalValue = value;
  }
  public resetCollaborators() {
    this._collaborators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorsInput() {
    return this._collaborators.internalValue;
  }

  // currency - computed: false, optional: false, required: true
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
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

  // end_period - computed: false, optional: true, required: false
  private _endPeriod?: number; 
  public get endPeriod() {
    return this.getNumberAttribute('end_period');
  }
  public set endPeriod(value: number) {
    this._endPeriod = value;
  }
  public resetEndPeriod() {
    this._endPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPeriodInput() {
    return this._endPeriod;
  }

  // growth_per_period - computed: true, optional: true, required: false
  private _growthPerPeriod?: number; 
  public get growthPerPeriod() {
    return this.getNumberAttribute('growth_per_period');
  }
  public set growthPerPeriod(value: number) {
    this._growthPerPeriod = value;
  }
  public resetGrowthPerPeriod() {
    this._growthPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthPerPeriodInput() {
    return this._growthPerPeriod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // public - computed: false, optional: true, required: false
  private _public?: string; 
  public get public() {
    return this.getStringAttribute('public');
  }
  public set public(value: string) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // recipients_slack_channels - computed: false, optional: true, required: false
  private _recipientsSlackChannels = new BudgetRecipientsSlackChannelsList(this, "recipients_slack_channels", false);
  public get recipientsSlackChannels() {
    return this._recipientsSlackChannels;
  }
  public putRecipientsSlackChannels(value: BudgetRecipientsSlackChannels[] | cdktf.IResolvable) {
    this._recipientsSlackChannels.internalValue = value;
  }
  public resetRecipientsSlackChannels() {
    this._recipientsSlackChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsSlackChannelsInput() {
    return this._recipientsSlackChannels.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // start_period - computed: false, optional: false, required: true
  private _startPeriod?: number; 
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }
  public set startPeriod(value: number) {
    this._startPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // time_interval - computed: true, optional: true, required: false
  private _timeInterval?: string; 
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }
  public set timeInterval(value: string) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_prev_spend - computed: false, optional: true, required: false
  private _usePrevSpend?: boolean | cdktf.IResolvable; 
  public get usePrevSpend() {
    return this.getBooleanAttribute('use_prev_spend');
  }
  public set usePrevSpend(value: boolean | cdktf.IResolvable) {
    this._usePrevSpend = value;
  }
  public resetUsePrevSpend() {
    this._usePrevSpend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrevSpendInput() {
    return this._usePrevSpend;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts: cdktf.listMapper(budgetAlertsToTerraform, false)(this._alerts.internalValue),
      amount: cdktf.numberToTerraform(this._amount),
      collaborators: cdktf.listMapper(budgetCollaboratorsToTerraform, false)(this._collaborators.internalValue),
      currency: cdktf.stringToTerraform(this._currency),
      description: cdktf.stringToTerraform(this._description),
      end_period: cdktf.numberToTerraform(this._endPeriod),
      growth_per_period: cdktf.numberToTerraform(this._growthPerPeriod),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      public: cdktf.stringToTerraform(this._public),
      recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipients),
      recipients_slack_channels: cdktf.listMapper(budgetRecipientsSlackChannelsToTerraform, false)(this._recipientsSlackChannels.internalValue),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      start_period: cdktf.numberToTerraform(this._startPeriod),
      time_interval: cdktf.stringToTerraform(this._timeInterval),
      type: cdktf.stringToTerraform(this._type),
      use_prev_spend: cdktf.booleanToTerraform(this._usePrevSpend),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts: {
        value: cdktf.listMapperHcl(budgetAlertsToHclTerraform, false)(this._alerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetAlertsList",
      },
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collaborators: {
        value: cdktf.listMapperHcl(budgetCollaboratorsToHclTerraform, false)(this._collaborators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetCollaboratorsList",
      },
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_period: {
        value: cdktf.numberToHclTerraform(this._endPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      growth_per_period: {
        value: cdktf.numberToHclTerraform(this._growthPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      public: {
        value: cdktf.stringToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recipients_slack_channels: {
        value: cdktf.listMapperHcl(budgetRecipientsSlackChannelsToHclTerraform, false)(this._recipientsSlackChannels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetRecipientsSlackChannelsList",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start_period: {
        value: cdktf.numberToHclTerraform(this._startPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_interval: {
        value: cdktf.stringToHclTerraform(this._timeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_prev_spend: {
        value: cdktf.booleanToHclTerraform(this._usePrevSpend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
