// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  * Features toggles for this account. Default:
  * 
  * * OfflineLogging: true
  * * ssoManagement: true
  * * teamsManagement: true
  * * abac: true
  * * customKubernetesCluster: true
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#features Account#features}
  */
  readonly features?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#build Account#build}
  */
  readonly buildAttribute?: AccountBuild[] | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#limits Account#limits}
  */
  readonly limits?: AccountLimits[] | cdktf.IResolvable;
}
export interface AccountBuild {
  /**
  * The number of nodes allowed for this account (default: `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#nodes Account#nodes}
  */
  readonly nodes?: number;
  /**
  * The number of parallel builds allowed for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#parallel Account#parallel}
  */
  readonly parallel: number;
}

export function accountBuildToTerraform(struct?: AccountBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes: cdktf.numberToTerraform(struct!.nodes),
    parallel: cdktf.numberToTerraform(struct!.parallel),
  }
}


export function accountBuildToHclTerraform(struct?: AccountBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes: {
      value: cdktf.numberToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallel: {
      value: cdktf.numberToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodes = undefined;
      this._parallel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodes = value.nodes;
      this._parallel = value.parallel;
    }
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // parallel - computed: false, optional: false, required: true
  private _parallel?: number; 
  public get parallel() {
    return this.getNumberAttribute('parallel');
  }
  public set parallel(value: number) {
    this._parallel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }
}

export class AccountBuildList extends cdktf.ComplexList {
  public internalValue? : AccountBuild[] | cdktf.IResolvable

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
  public get(index: number): AccountBuildOutputReference {
    return new AccountBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountLimits {
  /**
  * The number of collaborators allowed for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#collaborators Account#collaborators}
  */
  readonly collaborators: number;
  /**
  * Specifies the number of weeks for which to store the builds (default: `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#data_retention_weeks Account#data_retention_weeks}
  */
  readonly dataRetentionWeeks?: number;
}

export function accountLimitsToTerraform(struct?: AccountLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collaborators: cdktf.numberToTerraform(struct!.collaborators),
    data_retention_weeks: cdktf.numberToTerraform(struct!.dataRetentionWeeks),
  }
}


export function accountLimitsToHclTerraform(struct?: AccountLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collaborators: {
      value: cdktf.numberToHclTerraform(struct!.collaborators),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_retention_weeks: {
      value: cdktf.numberToHclTerraform(struct!.dataRetentionWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collaborators !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborators = this._collaborators;
    }
    if (this._dataRetentionWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRetentionWeeks = this._dataRetentionWeeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collaborators = undefined;
      this._dataRetentionWeeks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collaborators = value.collaborators;
      this._dataRetentionWeeks = value.dataRetentionWeeks;
    }
  }

  // collaborators - computed: false, optional: false, required: true
  private _collaborators?: number; 
  public get collaborators() {
    return this.getNumberAttribute('collaborators');
  }
  public set collaborators(value: number) {
    this._collaborators = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorsInput() {
    return this._collaborators;
  }

  // data_retention_weeks - computed: false, optional: true, required: false
  private _dataRetentionWeeks?: number; 
  public get dataRetentionWeeks() {
    return this.getNumberAttribute('data_retention_weeks');
  }
  public set dataRetentionWeeks(value: number) {
    this._dataRetentionWeeks = value;
  }
  public resetDataRetentionWeeks() {
    this._dataRetentionWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionWeeksInput() {
    return this._dataRetentionWeeks;
  }
}

export class AccountLimitsList extends cdktf.ComplexList {
  public internalValue? : AccountLimits[] | cdktf.IResolvable

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
  public get(index: number): AccountLimitsOutputReference {
    return new AccountLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account codefresh_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account codefresh_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_account',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._features = config.features;
    this._id = config.id;
    this._name = config.name;
    this._build.internalValue = config.buildAttribute;
    this._limits.internalValue = config.limits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // features - computed: false, optional: true, required: false
  private _features?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get features() {
    return this.getBooleanMapAttribute('features');
  }
  public set features(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // build - computed: false, optional: true, required: false
  private _build = new AccountBuildList(this, "build", false);
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: AccountBuild[] | cdktf.IResolvable) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new AccountLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: AccountLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      features: cdktf.hashMapper(cdktf.booleanToTerraform)(this._features),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      build: cdktf.listMapper(accountBuildToTerraform, true)(this._build.internalValue),
      limits: cdktf.listMapper(accountLimitsToTerraform, true)(this._limits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      features: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._features),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
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
      build: {
        value: cdktf.listMapperHcl(accountBuildToHclTerraform, true)(this._build.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountBuildList",
      },
      limits: {
        value: cdktf.listMapperHcl(accountLimitsToHclTerraform, true)(this._limits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountLimitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
