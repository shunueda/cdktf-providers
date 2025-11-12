// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleUserMappingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules#filter DataPowerscaleUserMappingRules#filter}
  */
  readonly filter?: DataPowerscaleUserMappingRulesFilter;
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUser {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUserToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUserToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesOptions {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesOptionsToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesOptionsToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // break - computed: true, optional: false, required: false
  public get break() {
    return this.getBooleanAttribute('break');
  }

  // default_user - computed: true, optional: false, required: false
  private _defaultUser = new DataPowerscaleUserMappingRulesUserMappingRulesOptionsDefaultUserOutputReference(this, "default_user");
  public get defaultUser() {
    return this._defaultUser;
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getBooleanAttribute('group');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getBooleanAttribute('groups');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getBooleanAttribute('user');
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesSourceUser {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesSourceUserToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesSourceUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesSourceUserToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesSourceUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesSourceUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesSourceUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesSourceUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesTargetUser {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesTargetUserToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesTargetUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesTargetUserToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesTargetUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesTargetUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesTargetUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesTargetUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRules {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataPowerscaleUserMappingRulesUserMappingRulesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // source_user - computed: true, optional: false, required: false
  private _sourceUser = new DataPowerscaleUserMappingRulesUserMappingRulesSourceUserOutputReference(this, "source_user");
  public get sourceUser() {
    return this._sourceUser;
  }

  // target_user - computed: true, optional: false, required: false
  private _targetUser = new DataPowerscaleUserMappingRulesUserMappingRulesTargetUserOutputReference(this, "target_user");
  public get targetUser() {
    return this._targetUser;
  }
}

export class DataPowerscaleUserMappingRulesUserMappingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleUserMappingRulesUserMappingRulesOutputReference {
    return new DataPowerscaleUserMappingRulesUserMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUser {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUserToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUserToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataPowerscaleUserMappingRulesUserMappingRulesParameters {
}

export function dataPowerscaleUserMappingRulesUserMappingRulesParametersToTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserMappingRulesUserMappingRulesParametersToHclTerraform(struct?: DataPowerscaleUserMappingRulesUserMappingRulesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserMappingRulesUserMappingRulesParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesUserMappingRulesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesUserMappingRulesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_unix_user - computed: true, optional: false, required: false
  private _defaultUnixUser = new DataPowerscaleUserMappingRulesUserMappingRulesParametersDefaultUnixUserOutputReference(this, "default_unix_user");
  public get defaultUnixUser() {
    return this._defaultUnixUser;
  }
}
export interface DataPowerscaleUserMappingRulesFilter {
  /**
  * Names filter for source user name or target user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules#names DataPowerscaleUserMappingRules#names}
  */
  readonly names?: string[];
  /**
  * Operators filter for user mapping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules#operators DataPowerscaleUserMappingRules#operators}
  */
  readonly operators?: string[];
  /**
  * The zone to which the user mapping applies. Defaults to System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules#zone DataPowerscaleUserMappingRules#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleUserMappingRulesFilterToTerraform(struct?: DataPowerscaleUserMappingRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    operators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operators),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleUserMappingRulesFilterToHclTerraform(struct?: DataPowerscaleUserMappingRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operators),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserMappingRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserMappingRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._operators !== undefined) {
      hasAnyValues = true;
      internalValueResult.operators = this._operators;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserMappingRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._operators = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._operators = value.operators;
      this._zone = value.zone;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // operators - computed: false, optional: true, required: false
  private _operators?: string[]; 
  public get operators() {
    return cdktf.Fn.tolist(this.getListAttribute('operators'));
  }
  public set operators(value: string[]) {
    this._operators = value;
  }
  public resetOperators() {
    this._operators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorsInput() {
    return this._operators;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules powerscale_user_mapping_rules}
*/
export class DataPowerscaleUserMappingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user_mapping_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleUserMappingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleUserMappingRules to import
  * @param importFromId The id of the existing DataPowerscaleUserMappingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleUserMappingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user_mapping_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_mapping_rules powerscale_user_mapping_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleUserMappingRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleUserMappingRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_user_mapping_rules',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_mapping_rules - computed: true, optional: false, required: false
  private _userMappingRules = new DataPowerscaleUserMappingRulesUserMappingRulesList(this, "user_mapping_rules", false);
  public get userMappingRules() {
    return this._userMappingRules;
  }

  // user_mapping_rules_parameters - computed: true, optional: false, required: false
  private _userMappingRulesParameters = new DataPowerscaleUserMappingRulesUserMappingRulesParametersOutputReference(this, "user_mapping_rules_parameters");
  public get userMappingRulesParameters() {
    return this._userMappingRulesParameters;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleUserMappingRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleUserMappingRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleUserMappingRulesFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleUserMappingRulesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleUserMappingRulesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
