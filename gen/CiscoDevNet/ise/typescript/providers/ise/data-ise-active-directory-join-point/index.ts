// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/active_directory_join_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseActiveDirectoryJoinPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/active_directory_join_point#id DataIseActiveDirectoryJoinPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataIseActiveDirectoryJoinPointAttributes {
}

export function dataIseActiveDirectoryJoinPointAttributesToTerraform(struct?: DataIseActiveDirectoryJoinPointAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseActiveDirectoryJoinPointAttributesToHclTerraform(struct?: DataIseActiveDirectoryJoinPointAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseActiveDirectoryJoinPointAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseActiveDirectoryJoinPointAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseActiveDirectoryJoinPointAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // internal_name - computed: true, optional: false, required: false
  public get internalName() {
    return this.getStringAttribute('internal_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIseActiveDirectoryJoinPointAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataIseActiveDirectoryJoinPointAttributesOutputReference {
    return new DataIseActiveDirectoryJoinPointAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIseActiveDirectoryJoinPointGroups {
}

export function dataIseActiveDirectoryJoinPointGroupsToTerraform(struct?: DataIseActiveDirectoryJoinPointGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseActiveDirectoryJoinPointGroupsToHclTerraform(struct?: DataIseActiveDirectoryJoinPointGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseActiveDirectoryJoinPointGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseActiveDirectoryJoinPointGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseActiveDirectoryJoinPointGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIseActiveDirectoryJoinPointGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIseActiveDirectoryJoinPointGroupsOutputReference {
    return new DataIseActiveDirectoryJoinPointGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIseActiveDirectoryJoinPointRewriteRules {
}

export function dataIseActiveDirectoryJoinPointRewriteRulesToTerraform(struct?: DataIseActiveDirectoryJoinPointRewriteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseActiveDirectoryJoinPointRewriteRulesToHclTerraform(struct?: DataIseActiveDirectoryJoinPointRewriteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseActiveDirectoryJoinPointRewriteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseActiveDirectoryJoinPointRewriteRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseActiveDirectoryJoinPointRewriteRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rewrite_match - computed: true, optional: false, required: false
  public get rewriteMatch() {
    return this.getStringAttribute('rewrite_match');
  }

  // rewrite_result - computed: true, optional: false, required: false
  public get rewriteResult() {
    return this.getStringAttribute('rewrite_result');
  }

  // row_id - computed: true, optional: false, required: false
  public get rowId() {
    return this.getStringAttribute('row_id');
  }
}

export class DataIseActiveDirectoryJoinPointRewriteRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataIseActiveDirectoryJoinPointRewriteRulesOutputReference {
    return new DataIseActiveDirectoryJoinPointRewriteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/active_directory_join_point ise_active_directory_join_point}
*/
export class DataIseActiveDirectoryJoinPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_active_directory_join_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseActiveDirectoryJoinPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseActiveDirectoryJoinPoint to import
  * @param importFromId The id of the existing DataIseActiveDirectoryJoinPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/active_directory_join_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseActiveDirectoryJoinPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_active_directory_join_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/active_directory_join_point ise_active_directory_join_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseActiveDirectoryJoinPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataIseActiveDirectoryJoinPointConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_active_directory_join_point',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_scopes_names - computed: true, optional: false, required: false
  public get adScopesNames() {
    return this.getStringAttribute('ad_scopes_names');
  }

  // aging_time - computed: true, optional: false, required: false
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataIseActiveDirectoryJoinPointAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // auth_protection_type - computed: true, optional: false, required: false
  public get authProtectionType() {
    return this.getStringAttribute('auth_protection_type');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enable_callback_for_dialin_client - computed: true, optional: false, required: false
  public get enableCallbackForDialinClient() {
    return this.getBooleanAttribute('enable_callback_for_dialin_client');
  }

  // enable_dialin_permission_check - computed: true, optional: false, required: false
  public get enableDialinPermissionCheck() {
    return this.getBooleanAttribute('enable_dialin_permission_check');
  }

  // enable_domain_allowed_list - computed: true, optional: false, required: false
  public get enableDomainAllowedList() {
    return this.getBooleanAttribute('enable_domain_allowed_list');
  }

  // enable_failed_auth_protection - computed: true, optional: false, required: false
  public get enableFailedAuthProtection() {
    return this.getBooleanAttribute('enable_failed_auth_protection');
  }

  // enable_machine_access - computed: true, optional: false, required: false
  public get enableMachineAccess() {
    return this.getBooleanAttribute('enable_machine_access');
  }

  // enable_machine_auth - computed: true, optional: false, required: false
  public get enableMachineAuth() {
    return this.getBooleanAttribute('enable_machine_auth');
  }

  // enable_pass_change - computed: true, optional: false, required: false
  public get enablePassChange() {
    return this.getBooleanAttribute('enable_pass_change');
  }

  // enable_rewrites - computed: true, optional: false, required: false
  public get enableRewrites() {
    return this.getBooleanAttribute('enable_rewrites');
  }

  // failed_auth_threshold - computed: true, optional: false, required: false
  public get failedAuthThreshold() {
    return this.getNumberAttribute('failed_auth_threshold');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataIseActiveDirectoryJoinPointGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // identity_not_in_ad_behaviour - computed: true, optional: false, required: false
  public get identityNotInAdBehaviour() {
    return this.getStringAttribute('identity_not_in_ad_behaviour');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // plaintext_auth - computed: true, optional: false, required: false
  public get plaintextAuth() {
    return this.getBooleanAttribute('plaintext_auth');
  }

  // rewrite_rules - computed: true, optional: false, required: false
  private _rewriteRules = new DataIseActiveDirectoryJoinPointRewriteRulesList(this, "rewrite_rules", false);
  public get rewriteRules() {
    return this._rewriteRules;
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // state_or_province - computed: true, optional: false, required: false
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // telephone - computed: true, optional: false, required: false
  public get telephone() {
    return this.getStringAttribute('telephone');
  }

  // unreachable_domains_behaviour - computed: true, optional: false, required: false
  public get unreachableDomainsBehaviour() {
    return this.getStringAttribute('unreachable_domains_behaviour');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
