// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnRouteTableInputPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * CCN Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#ccn_id CcnRouteTableInputPolicies#ccn_id}
  */
  readonly ccnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#id CcnRouteTableInputPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CCN Route table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#route_table_id CcnRouteTableInputPolicies#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#policies CcnRouteTableInputPolicies#policies}
  */
  readonly policies?: CcnRouteTableInputPoliciesPolicies[] | cdktf.IResolvable;
}
export interface CcnRouteTableInputPoliciesPoliciesRouteConditions {
  /**
  * Matching mode, `1` precise matching, `0` fuzzy matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#match_pattern CcnRouteTableInputPolicies#match_pattern}
  */
  readonly matchPattern: number;
  /**
  * Condition type. Example value: `instance-type`, `instance-region`, `instance-id`, `cidr-block`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#name CcnRouteTableInputPolicies#name}
  */
  readonly name: string;
  /**
  * List of conditional values. Example value:
  *  `instance-type`: `VPC`, `VPNGW`, `DIRECTCONNECT`
  *  `instance-region`: `ap-guangzhou`
  *  `instance-id`: `vpc-axrsmmrv`, `dcg-oxad32f7`, `vpngw-33p5vnwd`
  *  `cidr-block`: `172.0.0.0/8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#values CcnRouteTableInputPolicies#values}
  */
  readonly values: string[];
}

export function ccnRouteTableInputPoliciesPoliciesRouteConditionsToTerraform(struct?: CcnRouteTableInputPoliciesPoliciesRouteConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_pattern: cdktf.numberToTerraform(struct!.matchPattern),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ccnRouteTableInputPoliciesPoliciesRouteConditionsToHclTerraform(struct?: CcnRouteTableInputPoliciesPoliciesRouteConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_pattern: {
      value: cdktf.numberToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcnRouteTableInputPoliciesPoliciesRouteConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcnRouteTableInputPoliciesPoliciesRouteConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcnRouteTableInputPoliciesPoliciesRouteConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchPattern = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchPattern = value.matchPattern;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern?: number; 
  public get matchPattern() {
    return this.getNumberAttribute('match_pattern');
  }
  public set matchPattern(value: number) {
    this._matchPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CcnRouteTableInputPoliciesPoliciesRouteConditionsList extends cdktf.ComplexList {
  public internalValue? : CcnRouteTableInputPoliciesPoliciesRouteConditions[] | cdktf.IResolvable

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
  public get(index: number): CcnRouteTableInputPoliciesPoliciesRouteConditionsOutputReference {
    return new CcnRouteTableInputPoliciesPoliciesRouteConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CcnRouteTableInputPoliciesPolicies {
  /**
  * Routing behavior, `accept` allows, `drop` rejects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#action CcnRouteTableInputPolicies#action}
  */
  readonly action: string;
  /**
  * Policy description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#description CcnRouteTableInputPolicies#description}
  */
  readonly description: string;
  /**
  * route_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#route_conditions CcnRouteTableInputPolicies#route_conditions}
  */
  readonly routeConditions: CcnRouteTableInputPoliciesPoliciesRouteConditions[] | cdktf.IResolvable;
}

export function ccnRouteTableInputPoliciesPoliciesToTerraform(struct?: CcnRouteTableInputPoliciesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    route_conditions: cdktf.listMapper(ccnRouteTableInputPoliciesPoliciesRouteConditionsToTerraform, true)(struct!.routeConditions),
  }
}


export function ccnRouteTableInputPoliciesPoliciesToHclTerraform(struct?: CcnRouteTableInputPoliciesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_conditions: {
      value: cdktf.listMapperHcl(ccnRouteTableInputPoliciesPoliciesRouteConditionsToHclTerraform, true)(struct!.routeConditions),
      isBlock: true,
      type: "list",
      storageClassType: "CcnRouteTableInputPoliciesPoliciesRouteConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcnRouteTableInputPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcnRouteTableInputPoliciesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routeConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeConditions = this._routeConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcnRouteTableInputPoliciesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._routeConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._routeConditions.internalValue = value.routeConditions;
    }
  }

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

  // route_conditions - computed: false, optional: false, required: true
  private _routeConditions = new CcnRouteTableInputPoliciesPoliciesRouteConditionsList(this, "route_conditions", false);
  public get routeConditions() {
    return this._routeConditions;
  }
  public putRouteConditions(value: CcnRouteTableInputPoliciesPoliciesRouteConditions[] | cdktf.IResolvable) {
    this._routeConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConditionsInput() {
    return this._routeConditions.internalValue;
  }
}

export class CcnRouteTableInputPoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : CcnRouteTableInputPoliciesPolicies[] | cdktf.IResolvable

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
  public get(index: number): CcnRouteTableInputPoliciesPoliciesOutputReference {
    return new CcnRouteTableInputPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies tencentcloud_ccn_route_table_input_policies}
*/
export class CcnRouteTableInputPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_route_table_input_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcnRouteTableInputPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcnRouteTableInputPolicies to import
  * @param importFromId The id of the existing CcnRouteTableInputPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcnRouteTableInputPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_route_table_input_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ccn_route_table_input_policies tencentcloud_ccn_route_table_input_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnRouteTableInputPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: CcnRouteTableInputPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_route_table_input_policies',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._id = config.id;
    this._routeTableId = config.routeTableId;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: false, optional: false, required: true
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
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

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new CcnRouteTableInputPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CcnRouteTableInputPoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      id: cdktf.stringToTerraform(this._id),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      policies: cdktf.listMapper(ccnRouteTableInputPoliciesPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
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
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(ccnRouteTableInputPoliciesPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcnRouteTableInputPoliciesPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
