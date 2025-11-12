// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access level to grant, valid values are: READ_ONLY, READ_WRITE, OWNER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#access_level RequestAccessRule#access_level}
  */
  readonly accessLevel: string;
  /**
  * Enable the rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#enabled RequestAccessRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#id RequestAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent data policy ID, the data_policy_id field of a dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#parent_data_policy RequestAccessRule#parent_data_policy}
  */
  readonly parentDataPolicy: string;
  /**
  * Require from the approver an `approver note` when approving the request created from the defined rule. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#require_approver_note RequestAccessRule#require_approver_note}
  */
  readonly requireApproverNote?: boolean | cdktf.IResolvable;
  /**
  * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#revoke_if_not_used_in_days RequestAccessRule#revoke_if_not_used_in_days}
  */
  readonly revokeIfNotUsedInDays?: number;
  /**
  * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#security_policies RequestAccessRule#security_policies}
  */
  readonly securityPolicies?: string[];
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#approvers RequestAccessRule#approvers}
  */
  readonly approvers?: RequestAccessRuleApprovers[] | cdktf.IResolvable;
  /**
  * expire_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#expire_in RequestAccessRule#expire_in}
  */
  readonly expireIn?: RequestAccessRuleExpireIn;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#identity RequestAccessRule#identity}
  */
  readonly identity: RequestAccessRuleIdentity;
}
export interface RequestAccessRuleApprovers {
  /**
  * The ID of the approver entity, when type is `MANAGER` this field must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#id RequestAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Approver type, can be either `GROUP` (IdP Group alone) or `USER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#type RequestAccessRule#type}
  */
  readonly type: string;
}

export function requestAccessRuleApproversToTerraform(struct?: RequestAccessRuleApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function requestAccessRuleApproversToHclTerraform(struct?: RequestAccessRuleApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAccessRuleApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestAccessRuleApprovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAccessRuleApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class RequestAccessRuleApproversList extends cdktf.ComplexList {
  public internalValue? : RequestAccessRuleApprovers[] | cdktf.IResolvable

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
  public get(index: number): RequestAccessRuleApproversOutputReference {
    return new RequestAccessRuleApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestAccessRuleExpireIn {
  /**
  * Unit type for units field, possible values are: MINUTES, HOURS, DAYS, WEEKS, MONTHS, YEARS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#unit_type RequestAccessRule#unit_type}
  */
  readonly unitType: string;
  /**
  * Number of units of unit_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#units RequestAccessRule#units}
  */
  readonly units: number;
}

export function requestAccessRuleExpireInToTerraform(struct?: RequestAccessRuleExpireInOutputReference | RequestAccessRuleExpireIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit_type: cdktf.stringToTerraform(struct!.unitType),
    units: cdktf.numberToTerraform(struct!.units),
  }
}


export function requestAccessRuleExpireInToHclTerraform(struct?: RequestAccessRuleExpireInOutputReference | RequestAccessRuleExpireIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit_type: {
      value: cdktf.stringToHclTerraform(struct!.unitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    units: {
      value: cdktf.numberToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAccessRuleExpireInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAccessRuleExpireIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitType = this._unitType;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAccessRuleExpireIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unitType = undefined;
      this._units = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unitType = value.unitType;
      this._units = value.units;
    }
  }

  // unit_type - computed: false, optional: false, required: true
  private _unitType?: string; 
  public get unitType() {
    return this.getStringAttribute('unit_type');
  }
  public set unitType(value: string) {
    this._unitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTypeInput() {
    return this._unitType;
  }

  // units - computed: false, optional: false, required: true
  private _units?: number; 
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface RequestAccessRuleIdentity {
  /**
  * Directory group ID for identity of type GROUP.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#group_id RequestAccessRule#group_id}
  */
  readonly groupId?: string;
  /**
  * User/group name for identity types of USER and IDP_GROUP.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#name RequestAccessRule#name}
  */
  readonly name?: string;
  /**
  * Identity type, valid types are: USER, DB_USER, IDP_GROUP, GROUP, DATABRICKS_GROUP, DATABRICKS_SERVICE_PRINCIPAL, SNOWFLAKE_ROLE, EVERYONE.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#type RequestAccessRule#type}
  */
  readonly type: string;
}

export function requestAccessRuleIdentityToTerraform(struct?: RequestAccessRuleIdentityOutputReference | RequestAccessRuleIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function requestAccessRuleIdentityToHclTerraform(struct?: RequestAccessRuleIdentityOutputReference | RequestAccessRuleIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAccessRuleIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAccessRuleIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAccessRuleIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule satori_request_access_rule}
*/
export class RequestAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_request_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestAccessRule to import
  * @param importFromId The id of the existing RequestAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_request_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/request_access_rule satori_request_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RequestAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_request_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8',
        providerVersionConstraint: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._enabled = config.enabled;
    this._id = config.id;
    this._parentDataPolicy = config.parentDataPolicy;
    this._requireApproverNote = config.requireApproverNote;
    this._revokeIfNotUsedInDays = config.revokeIfNotUsedInDays;
    this._securityPolicies = config.securityPolicies;
    this._approvers.internalValue = config.approvers;
    this._expireIn.internalValue = config.expireIn;
    this._identity.internalValue = config.identity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // parent_data_policy - computed: false, optional: false, required: true
  private _parentDataPolicy?: string; 
  public get parentDataPolicy() {
    return this.getStringAttribute('parent_data_policy');
  }
  public set parentDataPolicy(value: string) {
    this._parentDataPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDataPolicyInput() {
    return this._parentDataPolicy;
  }

  // require_approver_note - computed: false, optional: true, required: false
  private _requireApproverNote?: boolean | cdktf.IResolvable; 
  public get requireApproverNote() {
    return this.getBooleanAttribute('require_approver_note');
  }
  public set requireApproverNote(value: boolean | cdktf.IResolvable) {
    this._requireApproverNote = value;
  }
  public resetRequireApproverNote() {
    this._requireApproverNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApproverNoteInput() {
    return this._requireApproverNote;
  }

  // revoke_if_not_used_in_days - computed: false, optional: true, required: false
  private _revokeIfNotUsedInDays?: number; 
  public get revokeIfNotUsedInDays() {
    return this.getNumberAttribute('revoke_if_not_used_in_days');
  }
  public set revokeIfNotUsedInDays(value: number) {
    this._revokeIfNotUsedInDays = value;
  }
  public resetRevokeIfNotUsedInDays() {
    this._revokeIfNotUsedInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeIfNotUsedInDaysInput() {
    return this._revokeIfNotUsedInDays;
  }

  // security_policies - computed: false, optional: true, required: false
  private _securityPolicies?: string[]; 
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
  }
  public set securityPolicies(value: string[]) {
    this._securityPolicies = value;
  }
  public resetSecurityPolicies() {
    this._securityPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPoliciesInput() {
    return this._securityPolicies;
  }

  // approvers - computed: false, optional: true, required: false
  private _approvers = new RequestAccessRuleApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: RequestAccessRuleApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  public resetApprovers() {
    this._approvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }

  // expire_in - computed: false, optional: true, required: false
  private _expireIn = new RequestAccessRuleExpireInOutputReference(this, "expire_in");
  public get expireIn() {
    return this._expireIn;
  }
  public putExpireIn(value: RequestAccessRuleExpireIn) {
    this._expireIn.internalValue = value;
  }
  public resetExpireIn() {
    this._expireIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInInput() {
    return this._expireIn.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new RequestAccessRuleIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: RequestAccessRuleIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      parent_data_policy: cdktf.stringToTerraform(this._parentDataPolicy),
      require_approver_note: cdktf.booleanToTerraform(this._requireApproverNote),
      revoke_if_not_used_in_days: cdktf.numberToTerraform(this._revokeIfNotUsedInDays),
      security_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityPolicies),
      approvers: cdktf.listMapper(requestAccessRuleApproversToTerraform, true)(this._approvers.internalValue),
      expire_in: requestAccessRuleExpireInToTerraform(this._expireIn.internalValue),
      identity: requestAccessRuleIdentityToTerraform(this._identity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      parent_data_policy: {
        value: cdktf.stringToHclTerraform(this._parentDataPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_approver_note: {
        value: cdktf.booleanToHclTerraform(this._requireApproverNote),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revoke_if_not_used_in_days: {
        value: cdktf.numberToHclTerraform(this._revokeIfNotUsedInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approvers: {
        value: cdktf.listMapperHcl(requestAccessRuleApproversToHclTerraform, true)(this._approvers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestAccessRuleApproversList",
      },
      expire_in: {
        value: requestAccessRuleExpireInToHclTerraform(this._expireIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestAccessRuleExpireInList",
      },
      identity: {
        value: requestAccessRuleIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestAccessRuleIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
