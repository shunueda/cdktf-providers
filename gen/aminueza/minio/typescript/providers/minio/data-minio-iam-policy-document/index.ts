// https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMinioIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#id DataMinioIamPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#override_json DataMinioIamPolicyDocument#override_json}
  */
  readonly overrideJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#policy_id DataMinioIamPolicyDocument#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#source_json DataMinioIamPolicyDocument#source_json}
  */
  readonly sourceJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#version DataMinioIamPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#statement DataMinioIamPolicyDocument#statement}
  */
  readonly statement?: DataMinioIamPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataMinioIamPolicyDocumentStatementCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#test DataMinioIamPolicyDocument#test}
  */
  readonly test: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#values DataMinioIamPolicyDocument#values}
  */
  readonly values: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#variable DataMinioIamPolicyDocument#variable}
  */
  readonly variable: string;
}

export function dataMinioIamPolicyDocumentStatementConditionToTerraform(struct?: DataMinioIamPolicyDocumentStatementCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test: cdktf.stringToTerraform(struct!.test),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataMinioIamPolicyDocumentStatementConditionToHclTerraform(struct?: DataMinioIamPolicyDocumentStatementCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMinioIamPolicyDocumentStatementConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMinioIamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMinioIamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._test = undefined;
      this._values = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._test = value.test;
      this._values = value.values;
      this._variable = value.variable;
    }
  }

  // test - computed: false, optional: false, required: true
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class DataMinioIamPolicyDocumentStatementConditionList extends cdktf.ComplexList {
  public internalValue? : DataMinioIamPolicyDocumentStatementCondition[] | cdktf.IResolvable

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
  public get(index: number): DataMinioIamPolicyDocumentStatementConditionOutputReference {
    return new DataMinioIamPolicyDocumentStatementConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMinioIamPolicyDocumentStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#actions DataMinioIamPolicyDocument#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#effect DataMinioIamPolicyDocument#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#not_principal DataMinioIamPolicyDocument#not_principal}
  */
  readonly notPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#principal DataMinioIamPolicyDocument#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#resources DataMinioIamPolicyDocument#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#sid DataMinioIamPolicyDocument#sid}
  */
  readonly sid?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#condition DataMinioIamPolicyDocument#condition}
  */
  readonly condition?: DataMinioIamPolicyDocumentStatementCondition[] | cdktf.IResolvable;
}

export function dataMinioIamPolicyDocumentStatementToTerraform(struct?: DataMinioIamPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_principal: cdktf.stringToTerraform(struct!.notPrincipal),
    principal: cdktf.stringToTerraform(struct!.principal),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    sid: cdktf.stringToTerraform(struct!.sid),
    condition: cdktf.listMapper(dataMinioIamPolicyDocumentStatementConditionToTerraform, true)(struct!.condition),
  }
}


export function dataMinioIamPolicyDocumentStatementToHclTerraform(struct?: DataMinioIamPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_principal: {
      value: cdktf.stringToHclTerraform(struct!.notPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(dataMinioIamPolicyDocumentStatementConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "DataMinioIamPolicyDocumentStatementConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMinioIamPolicyDocumentStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMinioIamPolicyDocumentStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._notPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrincipal = this._notPrincipal;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMinioIamPolicyDocumentStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._effect = undefined;
      this._notPrincipal = undefined;
      this._principal = undefined;
      this._resources = undefined;
      this._sid = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._effect = value.effect;
      this._notPrincipal = value.notPrincipal;
      this._principal = value.principal;
      this._resources = value.resources;
      this._sid = value.sid;
      this._condition.internalValue = value.condition;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // not_principal - computed: false, optional: true, required: false
  private _notPrincipal?: string; 
  public get notPrincipal() {
    return this.getStringAttribute('not_principal');
  }
  public set notPrincipal(value: string) {
    this._notPrincipal = value;
  }
  public resetNotPrincipal() {
    this._notPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrincipalInput() {
    return this._notPrincipal;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataMinioIamPolicyDocumentStatementConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataMinioIamPolicyDocumentStatementCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class DataMinioIamPolicyDocumentStatementList extends cdktf.ComplexList {
  public internalValue? : DataMinioIamPolicyDocumentStatement[] | cdktf.IResolvable

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
  public get(index: number): DataMinioIamPolicyDocumentStatementOutputReference {
    return new DataMinioIamPolicyDocumentStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document minio_iam_policy_document}
*/
export class DataMinioIamPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_iam_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMinioIamPolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMinioIamPolicyDocument to import
  * @param importFromId The id of the existing DataMinioIamPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMinioIamPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_iam_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/data-sources/iam_policy_document minio_iam_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMinioIamPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMinioIamPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'minio_iam_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.5',
        providerVersionConstraint: '3.11.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._overrideJson = config.overrideJson;
    this._policyId = config.policyId;
    this._sourceJson = config.sourceJson;
    this._version = config.version;
    this._statement.internalValue = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // override_json - computed: false, optional: true, required: false
  private _overrideJson?: string; 
  public get overrideJson() {
    return this.getStringAttribute('override_json');
  }
  public set overrideJson(value: string) {
    this._overrideJson = value;
  }
  public resetOverrideJson() {
    this._overrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideJsonInput() {
    return this._overrideJson;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // source_json - computed: false, optional: true, required: false
  private _sourceJson?: string; 
  public get sourceJson() {
    return this.getStringAttribute('source_json');
  }
  public set sourceJson(value: string) {
    this._sourceJson = value;
  }
  public resetSourceJson() {
    this._sourceJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceJsonInput() {
    return this._sourceJson;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // statement - computed: false, optional: true, required: false
  private _statement = new DataMinioIamPolicyDocumentStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: DataMinioIamPolicyDocumentStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      override_json: cdktf.stringToTerraform(this._overrideJson),
      policy_id: cdktf.stringToTerraform(this._policyId),
      source_json: cdktf.stringToTerraform(this._sourceJson),
      version: cdktf.stringToTerraform(this._version),
      statement: cdktf.listMapper(dataMinioIamPolicyDocumentStatementToTerraform, true)(this._statement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_json: {
        value: cdktf.stringToHclTerraform(this._overrideJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_json: {
        value: cdktf.stringToHclTerraform(this._sourceJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement: {
        value: cdktf.listMapperHcl(dataMinioIamPolicyDocumentStatementToHclTerraform, true)(this._statement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataMinioIamPolicyDocumentStatementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
