// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#id DataAlicloudRamPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#output_file DataAlicloudRamPolicyDocument#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#version DataAlicloudRamPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#statement DataAlicloudRamPolicyDocument#statement}
  */
  readonly statement?: DataAlicloudRamPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataAlicloudRamPolicyDocumentStatementCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#operator DataAlicloudRamPolicyDocument#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#values DataAlicloudRamPolicyDocument#values}
  */
  readonly values: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#variable DataAlicloudRamPolicyDocument#variable}
  */
  readonly variable: string;
}

export function dataAlicloudRamPolicyDocumentStatementConditionToTerraform(struct?: DataAlicloudRamPolicyDocumentStatementCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataAlicloudRamPolicyDocumentStatementConditionToHclTerraform(struct?: DataAlicloudRamPolicyDocumentStatementCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataAlicloudRamPolicyDocumentStatementConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
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

  public set internalValue(value: DataAlicloudRamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
      this._values = value.values;
      this._variable = value.variable;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataAlicloudRamPolicyDocumentStatementConditionList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudRamPolicyDocumentStatementCondition[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudRamPolicyDocumentStatementConditionOutputReference {
    return new DataAlicloudRamPolicyDocumentStatementConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudRamPolicyDocumentStatementPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#entity DataAlicloudRamPolicyDocument#entity}
  */
  readonly entity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#identifiers DataAlicloudRamPolicyDocument#identifiers}
  */
  readonly identifiers: string[];
}

export function dataAlicloudRamPolicyDocumentStatementPrincipalToTerraform(struct?: DataAlicloudRamPolicyDocumentStatementPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.stringToTerraform(struct!.entity),
    identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identifiers),
  }
}


export function dataAlicloudRamPolicyDocumentStatementPrincipalToHclTerraform(struct?: DataAlicloudRamPolicyDocumentStatementPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity: {
      value: cdktf.stringToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudRamPolicyDocumentStatementPrincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRamPolicyDocumentStatementPrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRamPolicyDocumentStatementPrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entity = undefined;
      this._identifiers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entity = value.entity;
      this._identifiers = value.identifiers;
    }
  }

  // entity - computed: false, optional: false, required: true
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }
}

export class DataAlicloudRamPolicyDocumentStatementPrincipalList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudRamPolicyDocumentStatementPrincipal[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudRamPolicyDocumentStatementPrincipalOutputReference {
    return new DataAlicloudRamPolicyDocumentStatementPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudRamPolicyDocumentStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#action DataAlicloudRamPolicyDocument#action}
  */
  readonly action: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#effect DataAlicloudRamPolicyDocument#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#resource DataAlicloudRamPolicyDocument#resource}
  */
  readonly resource?: string[];
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#condition DataAlicloudRamPolicyDocument#condition}
  */
  readonly condition?: DataAlicloudRamPolicyDocumentStatementCondition[] | cdktf.IResolvable;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#principal DataAlicloudRamPolicyDocument#principal}
  */
  readonly principal?: DataAlicloudRamPolicyDocumentStatementPrincipal[] | cdktf.IResolvable;
}

export function dataAlicloudRamPolicyDocumentStatementToTerraform(struct?: DataAlicloudRamPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resource),
    condition: cdktf.listMapper(dataAlicloudRamPolicyDocumentStatementConditionToTerraform, true)(struct!.condition),
    principal: cdktf.listMapper(dataAlicloudRamPolicyDocumentStatementPrincipalToTerraform, true)(struct!.principal),
  }
}


export function dataAlicloudRamPolicyDocumentStatementToHclTerraform(struct?: DataAlicloudRamPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.listMapperHcl(dataAlicloudRamPolicyDocumentStatementConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "DataAlicloudRamPolicyDocumentStatementConditionList",
    },
    principal: {
      value: cdktf.listMapperHcl(dataAlicloudRamPolicyDocumentStatementPrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "set",
      storageClassType: "DataAlicloudRamPolicyDocumentStatementPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudRamPolicyDocumentStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRamPolicyDocumentStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRamPolicyDocumentStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._resource = undefined;
      this._condition.internalValue = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._resource = value.resource;
      this._condition.internalValue = value.condition;
      this._principal.internalValue = value.principal;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string[]; 
  public get resource() {
    return this.getListAttribute('resource');
  }
  public set resource(value: string[]) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataAlicloudRamPolicyDocumentStatementConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataAlicloudRamPolicyDocumentStatementCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new DataAlicloudRamPolicyDocumentStatementPrincipalList(this, "principal", true);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: DataAlicloudRamPolicyDocumentStatementPrincipal[] | cdktf.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class DataAlicloudRamPolicyDocumentStatementList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudRamPolicyDocumentStatement[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudRamPolicyDocumentStatementOutputReference {
    return new DataAlicloudRamPolicyDocumentStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document alicloud_ram_policy_document}
*/
export class DataAlicloudRamPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ram_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRamPolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRamPolicyDocument to import
  * @param importFromId The id of the existing DataAlicloudRamPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRamPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ram_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ram_policy_document alicloud_ram_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRamPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRamPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ram_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._outputFile = config.outputFile;
    this._version = config.version;
    this._statement.internalValue = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // document - computed: true, optional: false, required: false
  public get document() {
    return this.getStringAttribute('document');
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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
  private _statement = new DataAlicloudRamPolicyDocumentStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: DataAlicloudRamPolicyDocumentStatement[] | cdktf.IResolvable) {
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
      output_file: cdktf.stringToTerraform(this._outputFile),
      version: cdktf.stringToTerraform(this._version),
      statement: cdktf.listMapper(dataAlicloudRamPolicyDocumentStatementToTerraform, true)(this._statement.internalValue),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
        value: cdktf.listMapperHcl(dataAlicloudRamPolicyDocumentStatementToHclTerraform, true)(this._statement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudRamPolicyDocumentStatementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
