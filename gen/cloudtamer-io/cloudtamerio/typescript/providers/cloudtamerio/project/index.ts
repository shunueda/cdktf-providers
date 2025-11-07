// https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#auto_pay Project#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#default_aws_region Project#default_aws_region}
  */
  readonly defaultAwsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#last_updated Project#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#ou_id Project#ou_id}
  */
  readonly ouId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#permission_scheme_id Project#permission_scheme_id}
  */
  readonly permissionSchemeId: number;
  /**
  * owner_user_group_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#owner_user_group_ids Project#owner_user_group_ids}
  */
  readonly ownerUserGroupIds?: ProjectOwnerUserGroupIds[] | cdktf.IResolvable;
  /**
  * owner_user_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#owner_user_ids Project#owner_user_ids}
  */
  readonly ownerUserIds?: ProjectOwnerUserIds[] | cdktf.IResolvable;
  /**
  * project_funding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#project_funding Project#project_funding}
  */
  readonly projectFunding: ProjectProjectFunding[] | cdktf.IResolvable;
}
export interface ProjectOwnerUserGroupIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectOwnerUserGroupIdsToTerraform(struct?: ProjectOwnerUserGroupIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectOwnerUserGroupIdsToHclTerraform(struct?: ProjectOwnerUserGroupIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectOwnerUserGroupIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectOwnerUserGroupIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectOwnerUserGroupIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectOwnerUserGroupIdsList extends cdktf.ComplexList {
  public internalValue? : ProjectOwnerUserGroupIds[] | cdktf.IResolvable

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
  public get(index: number): ProjectOwnerUserGroupIdsOutputReference {
    return new ProjectOwnerUserGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectOwnerUserIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectOwnerUserIdsToTerraform(struct?: ProjectOwnerUserIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectOwnerUserIdsToHclTerraform(struct?: ProjectOwnerUserIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectOwnerUserIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectOwnerUserIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectOwnerUserIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectOwnerUserIdsList extends cdktf.ComplexList {
  public internalValue? : ProjectOwnerUserIds[] | cdktf.IResolvable

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
  public get(index: number): ProjectOwnerUserIdsOutputReference {
    return new ProjectOwnerUserIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectProjectFunding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#amount Project#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#end_datecode Project#end_datecode}
  */
  readonly endDatecode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#funding_order Project#funding_order}
  */
  readonly fundingOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#funding_source_id Project#funding_source_id}
  */
  readonly fundingSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#start_datecode Project#start_datecode}
  */
  readonly startDatecode?: string;
}

export function projectProjectFundingToTerraform(struct?: ProjectProjectFunding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    end_datecode: cdktf.stringToTerraform(struct!.endDatecode),
    funding_order: cdktf.numberToTerraform(struct!.fundingOrder),
    funding_source_id: cdktf.numberToTerraform(struct!.fundingSourceId),
    start_datecode: cdktf.stringToTerraform(struct!.startDatecode),
  }
}


export function projectProjectFundingToHclTerraform(struct?: ProjectProjectFunding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_datecode: {
      value: cdktf.stringToHclTerraform(struct!.endDatecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    funding_order: {
      value: cdktf.numberToHclTerraform(struct!.fundingOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    funding_source_id: {
      value: cdktf.numberToHclTerraform(struct!.fundingSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_datecode: {
      value: cdktf.stringToHclTerraform(struct!.startDatecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectProjectFundingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectProjectFunding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._endDatecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDatecode = this._endDatecode;
    }
    if (this._fundingOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.fundingOrder = this._fundingOrder;
    }
    if (this._fundingSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fundingSourceId = this._fundingSourceId;
    }
    if (this._startDatecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDatecode = this._startDatecode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectProjectFunding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._endDatecode = undefined;
      this._fundingOrder = undefined;
      this._fundingSourceId = undefined;
      this._startDatecode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._endDatecode = value.endDatecode;
      this._fundingOrder = value.fundingOrder;
      this._fundingSourceId = value.fundingSourceId;
      this._startDatecode = value.startDatecode;
    }
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

  // end_datecode - computed: false, optional: true, required: false
  private _endDatecode?: string; 
  public get endDatecode() {
    return this.getStringAttribute('end_datecode');
  }
  public set endDatecode(value: string) {
    this._endDatecode = value;
  }
  public resetEndDatecode() {
    this._endDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDatecodeInput() {
    return this._endDatecode;
  }

  // funding_order - computed: false, optional: true, required: false
  private _fundingOrder?: number; 
  public get fundingOrder() {
    return this.getNumberAttribute('funding_order');
  }
  public set fundingOrder(value: number) {
    this._fundingOrder = value;
  }
  public resetFundingOrder() {
    this._fundingOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fundingOrderInput() {
    return this._fundingOrder;
  }

  // funding_source_id - computed: false, optional: true, required: false
  private _fundingSourceId?: number; 
  public get fundingSourceId() {
    return this.getNumberAttribute('funding_source_id');
  }
  public set fundingSourceId(value: number) {
    this._fundingSourceId = value;
  }
  public resetFundingSourceId() {
    this._fundingSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fundingSourceIdInput() {
    return this._fundingSourceId;
  }

  // start_datecode - computed: false, optional: true, required: false
  private _startDatecode?: string; 
  public get startDatecode() {
    return this.getStringAttribute('start_datecode');
  }
  public set startDatecode(value: string) {
    this._startDatecode = value;
  }
  public resetStartDatecode() {
    this._startDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDatecodeInput() {
    return this._startDatecode;
  }
}

export class ProjectProjectFundingList extends cdktf.ComplexList {
  public internalValue? : ProjectProjectFunding[] | cdktf.IResolvable

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
  public get(index: number): ProjectProjectFundingOutputReference {
    return new ProjectProjectFundingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project cloudtamerio_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudtamerio_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudtamerio_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project cloudtamerio_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudtamerio_project',
      terraformGeneratorMetadata: {
        providerName: 'cloudtamerio',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPay = config.autoPay;
    this._defaultAwsRegion = config.defaultAwsRegion;
    this._description = config.description;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._ouId = config.ouId;
    this._permissionSchemeId = config.permissionSchemeId;
    this._ownerUserGroupIds.internalValue = config.ownerUserGroupIds;
    this._ownerUserIds.internalValue = config.ownerUserIds;
    this._projectFunding.internalValue = config.projectFunding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
  }

  // default_aws_region - computed: false, optional: true, required: false
  private _defaultAwsRegion?: string; 
  public get defaultAwsRegion() {
    return this.getStringAttribute('default_aws_region');
  }
  public set defaultAwsRegion(value: string) {
    this._defaultAwsRegion = value;
  }
  public resetDefaultAwsRegion() {
    this._defaultAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAwsRegionInput() {
    return this._defaultAwsRegion;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // ou_id - computed: false, optional: false, required: true
  private _ouId?: number; 
  public get ouId() {
    return this.getNumberAttribute('ou_id');
  }
  public set ouId(value: number) {
    this._ouId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouIdInput() {
    return this._ouId;
  }

  // permission_scheme_id - computed: false, optional: false, required: true
  private _permissionSchemeId?: number; 
  public get permissionSchemeId() {
    return this.getNumberAttribute('permission_scheme_id');
  }
  public set permissionSchemeId(value: number) {
    this._permissionSchemeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSchemeIdInput() {
    return this._permissionSchemeId;
  }

  // owner_user_group_ids - computed: false, optional: true, required: false
  private _ownerUserGroupIds = new ProjectOwnerUserGroupIdsList(this, "owner_user_group_ids", false);
  public get ownerUserGroupIds() {
    return this._ownerUserGroupIds;
  }
  public putOwnerUserGroupIds(value: ProjectOwnerUserGroupIds[] | cdktf.IResolvable) {
    this._ownerUserGroupIds.internalValue = value;
  }
  public resetOwnerUserGroupIds() {
    this._ownerUserGroupIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupIdsInput() {
    return this._ownerUserGroupIds.internalValue;
  }

  // owner_user_ids - computed: false, optional: true, required: false
  private _ownerUserIds = new ProjectOwnerUserIdsList(this, "owner_user_ids", false);
  public get ownerUserIds() {
    return this._ownerUserIds;
  }
  public putOwnerUserIds(value: ProjectOwnerUserIds[] | cdktf.IResolvable) {
    this._ownerUserIds.internalValue = value;
  }
  public resetOwnerUserIds() {
    this._ownerUserIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdsInput() {
    return this._ownerUserIds.internalValue;
  }

  // project_funding - computed: false, optional: false, required: true
  private _projectFunding = new ProjectProjectFundingList(this, "project_funding", false);
  public get projectFunding() {
    return this._projectFunding;
  }
  public putProjectFunding(value: ProjectProjectFunding[] | cdktf.IResolvable) {
    this._projectFunding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectFundingInput() {
    return this._projectFunding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      default_aws_region: cdktf.stringToTerraform(this._defaultAwsRegion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      ou_id: cdktf.numberToTerraform(this._ouId),
      permission_scheme_id: cdktf.numberToTerraform(this._permissionSchemeId),
      owner_user_group_ids: cdktf.listMapper(projectOwnerUserGroupIdsToTerraform, true)(this._ownerUserGroupIds.internalValue),
      owner_user_ids: cdktf.listMapper(projectOwnerUserIdsToTerraform, true)(this._ownerUserIds.internalValue),
      project_funding: cdktf.listMapper(projectProjectFundingToTerraform, true)(this._projectFunding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_aws_region: {
        value: cdktf.stringToHclTerraform(this._defaultAwsRegion),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      ou_id: {
        value: cdktf.numberToHclTerraform(this._ouId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission_scheme_id: {
        value: cdktf.numberToHclTerraform(this._permissionSchemeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owner_user_group_ids: {
        value: cdktf.listMapperHcl(projectOwnerUserGroupIdsToHclTerraform, true)(this._ownerUserGroupIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectOwnerUserGroupIdsList",
      },
      owner_user_ids: {
        value: cdktf.listMapperHcl(projectOwnerUserIdsToHclTerraform, true)(this._ownerUserIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectOwnerUserIdsList",
      },
      project_funding: {
        value: cdktf.listMapperHcl(projectProjectFundingToHclTerraform, true)(this._projectFunding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectProjectFundingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
