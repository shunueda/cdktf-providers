// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileAntiphishAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#adom ObjectWebfilterProfileAntiphishA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#authentication ObjectWebfilterProfileAntiphishA#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#check_basic_auth ObjectWebfilterProfileAntiphishA#check_basic_auth}
  */
  readonly checkBasicAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#check_uri ObjectWebfilterProfileAntiphishA#check_uri}
  */
  readonly checkUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#check_username_only ObjectWebfilterProfileAntiphishA#check_username_only}
  */
  readonly checkUsernameOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#default_action ObjectWebfilterProfileAntiphishA#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#domain_controller ObjectWebfilterProfileAntiphishA#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#dynamic_sort_subtable ObjectWebfilterProfileAntiphishA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#id ObjectWebfilterProfileAntiphishA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#ldap ObjectWebfilterProfileAntiphishA#ldap}
  */
  readonly ldap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#max_body_len ObjectWebfilterProfileAntiphishA#max_body_len}
  */
  readonly maxBodyLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#profile ObjectWebfilterProfileAntiphishA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#scopetype ObjectWebfilterProfileAntiphishA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#status ObjectWebfilterProfileAntiphishA#status}
  */
  readonly status?: string;
  /**
  * custom_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#custom_patterns ObjectWebfilterProfileAntiphishA#custom_patterns}
  */
  readonly customPatterns?: ObjectWebfilterProfileAntiphishCustomPatternsA[] | cdktf.IResolvable;
  /**
  * inspection_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#inspection_entries ObjectWebfilterProfileAntiphishA#inspection_entries}
  */
  readonly inspectionEntries?: ObjectWebfilterProfileAntiphishInspectionEntriesA[] | cdktf.IResolvable;
}
export interface ObjectWebfilterProfileAntiphishCustomPatternsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#category ObjectWebfilterProfileAntiphishA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#pattern ObjectWebfilterProfileAntiphishA#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#type ObjectWebfilterProfileAntiphishA#type}
  */
  readonly type?: string;
}

export function objectWebfilterProfileAntiphishCustomPatternsAToTerraform(struct?: ObjectWebfilterProfileAntiphishCustomPatternsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectWebfilterProfileAntiphishCustomPatternsAToHclTerraform(struct?: ObjectWebfilterProfileAntiphishCustomPatternsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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

export class ObjectWebfilterProfileAntiphishCustomPatternsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWebfilterProfileAntiphishCustomPatternsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWebfilterProfileAntiphishCustomPatternsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ObjectWebfilterProfileAntiphishCustomPatternsAList extends cdktf.ComplexList {
  public internalValue? : ObjectWebfilterProfileAntiphishCustomPatternsA[] | cdktf.IResolvable

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
  public get(index: number): ObjectWebfilterProfileAntiphishCustomPatternsAOutputReference {
    return new ObjectWebfilterProfileAntiphishCustomPatternsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWebfilterProfileAntiphishInspectionEntriesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#action ObjectWebfilterProfileAntiphishA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#fortiguard_category ObjectWebfilterProfileAntiphishA#fortiguard_category}
  */
  readonly fortiguardCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#name ObjectWebfilterProfileAntiphishA#name}
  */
  readonly name?: string;
}

export function objectWebfilterProfileAntiphishInspectionEntriesAToTerraform(struct?: ObjectWebfilterProfileAntiphishInspectionEntriesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    fortiguard_category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fortiguardCategory),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectWebfilterProfileAntiphishInspectionEntriesAToHclTerraform(struct?: ObjectWebfilterProfileAntiphishInspectionEntriesA | cdktf.IResolvable): any {
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
    fortiguard_category: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fortiguardCategory),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWebfilterProfileAntiphishInspectionEntriesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWebfilterProfileAntiphishInspectionEntriesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._fortiguardCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardCategory = this._fortiguardCategory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWebfilterProfileAntiphishInspectionEntriesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._fortiguardCategory = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._fortiguardCategory = value.fortiguardCategory;
      this._name = value.name;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // fortiguard_category - computed: true, optional: true, required: false
  private _fortiguardCategory?: string[]; 
  public get fortiguardCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('fortiguard_category'));
  }
  public set fortiguardCategory(value: string[]) {
    this._fortiguardCategory = value;
  }
  public resetFortiguardCategory() {
    this._fortiguardCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCategoryInput() {
    return this._fortiguardCategory;
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
}

export class ObjectWebfilterProfileAntiphishInspectionEntriesAList extends cdktf.ComplexList {
  public internalValue? : ObjectWebfilterProfileAntiphishInspectionEntriesA[] | cdktf.IResolvable

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
  public get(index: number): ObjectWebfilterProfileAntiphishInspectionEntriesAOutputReference {
    return new ObjectWebfilterProfileAntiphishInspectionEntriesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish fortimanager_object_webfilter_profile_antiphish}
*/
export class ObjectWebfilterProfileAntiphishA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_antiphish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileAntiphishA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileAntiphishA to import
  * @param importFromId The id of the existing ObjectWebfilterProfileAntiphishA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileAntiphishA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_antiphish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_antiphish fortimanager_object_webfilter_profile_antiphish} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileAntiphishAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileAntiphishAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_antiphish',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._authentication = config.authentication;
    this._checkBasicAuth = config.checkBasicAuth;
    this._checkUri = config.checkUri;
    this._checkUsernameOnly = config.checkUsernameOnly;
    this._defaultAction = config.defaultAction;
    this._domainController = config.domainController;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._ldap = config.ldap;
    this._maxBodyLen = config.maxBodyLen;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._customPatterns.internalValue = config.customPatterns;
    this._inspectionEntries.internalValue = config.inspectionEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // check_basic_auth - computed: true, optional: true, required: false
  private _checkBasicAuth?: string; 
  public get checkBasicAuth() {
    return this.getStringAttribute('check_basic_auth');
  }
  public set checkBasicAuth(value: string) {
    this._checkBasicAuth = value;
  }
  public resetCheckBasicAuth() {
    this._checkBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBasicAuthInput() {
    return this._checkBasicAuth;
  }

  // check_uri - computed: true, optional: true, required: false
  private _checkUri?: string; 
  public get checkUri() {
    return this.getStringAttribute('check_uri');
  }
  public set checkUri(value: string) {
    this._checkUri = value;
  }
  public resetCheckUri() {
    this._checkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUriInput() {
    return this._checkUri;
  }

  // check_username_only - computed: true, optional: true, required: false
  private _checkUsernameOnly?: string; 
  public get checkUsernameOnly() {
    return this.getStringAttribute('check_username_only');
  }
  public set checkUsernameOnly(value: string) {
    this._checkUsernameOnly = value;
  }
  public resetCheckUsernameOnly() {
    this._checkUsernameOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUsernameOnlyInput() {
    return this._checkUsernameOnly;
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // ldap - computed: false, optional: true, required: false
  private _ldap?: string; 
  public get ldap() {
    return this.getStringAttribute('ldap');
  }
  public set ldap(value: string) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // max_body_len - computed: true, optional: true, required: false
  private _maxBodyLen?: number; 
  public get maxBodyLen() {
    return this.getNumberAttribute('max_body_len');
  }
  public set maxBodyLen(value: number) {
    this._maxBodyLen = value;
  }
  public resetMaxBodyLen() {
    this._maxBodyLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodyLenInput() {
    return this._maxBodyLen;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // custom_patterns - computed: false, optional: true, required: false
  private _customPatterns = new ObjectWebfilterProfileAntiphishCustomPatternsAList(this, "custom_patterns", false);
  public get customPatterns() {
    return this._customPatterns;
  }
  public putCustomPatterns(value: ObjectWebfilterProfileAntiphishCustomPatternsA[] | cdktf.IResolvable) {
    this._customPatterns.internalValue = value;
  }
  public resetCustomPatterns() {
    this._customPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternsInput() {
    return this._customPatterns.internalValue;
  }

  // inspection_entries - computed: false, optional: true, required: false
  private _inspectionEntries = new ObjectWebfilterProfileAntiphishInspectionEntriesAList(this, "inspection_entries", false);
  public get inspectionEntries() {
    return this._inspectionEntries;
  }
  public putInspectionEntries(value: ObjectWebfilterProfileAntiphishInspectionEntriesA[] | cdktf.IResolvable) {
    this._inspectionEntries.internalValue = value;
  }
  public resetInspectionEntries() {
    this._inspectionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionEntriesInput() {
    return this._inspectionEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      authentication: cdktf.stringToTerraform(this._authentication),
      check_basic_auth: cdktf.stringToTerraform(this._checkBasicAuth),
      check_uri: cdktf.stringToTerraform(this._checkUri),
      check_username_only: cdktf.stringToTerraform(this._checkUsernameOnly),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      domain_controller: cdktf.stringToTerraform(this._domainController),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      ldap: cdktf.stringToTerraform(this._ldap),
      max_body_len: cdktf.numberToTerraform(this._maxBodyLen),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      custom_patterns: cdktf.listMapper(objectWebfilterProfileAntiphishCustomPatternsAToTerraform, true)(this._customPatterns.internalValue),
      inspection_entries: cdktf.listMapper(objectWebfilterProfileAntiphishInspectionEntriesAToTerraform, true)(this._inspectionEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_basic_auth: {
        value: cdktf.stringToHclTerraform(this._checkBasicAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_uri: {
        value: cdktf.stringToHclTerraform(this._checkUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_username_only: {
        value: cdktf.stringToHclTerraform(this._checkUsernameOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_controller: {
        value: cdktf.stringToHclTerraform(this._domainController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      ldap: {
        value: cdktf.stringToHclTerraform(this._ldap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_body_len: {
        value: cdktf.numberToHclTerraform(this._maxBodyLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      custom_patterns: {
        value: cdktf.listMapperHcl(objectWebfilterProfileAntiphishCustomPatternsAToHclTerraform, true)(this._customPatterns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWebfilterProfileAntiphishCustomPatternsAList",
      },
      inspection_entries: {
        value: cdktf.listMapperHcl(objectWebfilterProfileAntiphishInspectionEntriesAToHclTerraform, true)(this._inspectionEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWebfilterProfileAntiphishInspectionEntriesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
