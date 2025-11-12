// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * This property can be used to allow addition of users/groups from child companies. Only applicable for commcell and reseller company group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#allowmultiplecompanymembers Usergroup#allowmultiplecompanymembers}
  */
  readonly allowmultiplecompanymembers?: string;
  /**
  * Azure Object ID used to link this user group to Azure AD group and manage group membership of the user during SAML login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#azureguid Usergroup#azureguid}
  */
  readonly azureguid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#description Usergroup#description}
  */
  readonly description?: string;
  /**
  * Option to not inherit the RestrictConsoleTypes from the parent. By default the value is false, parent RestrictConsoleTypes will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#donotinheritrestrictconsoletypes Usergroup#donotinheritrestrictconsoletypes}
  */
  readonly donotinheritrestrictconsoletypes?: string;
  /**
  * allows the enabling/disabling of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#enabled Usergroup#enabled}
  */
  readonly enabled?: string;
  /**
  * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#enablelocalauthentication Usergroup#enablelocalauthentication}
  */
  readonly enablelocalauthentication?: string;
  /**
  * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#enabletwofactorauthentication Usergroup#enabletwofactorauthentication}
  */
  readonly enabletwofactorauthentication?: string;
  /**
  * Used to determine if a backup data limit will be set for the user group being created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#enforcefsquota Usergroup#enforcefsquota}
  */
  readonly enforcefsquota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#id Usergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When set to true, users in this group cannot activate or be set as server owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#laptopadmins Usergroup#laptopadmins}
  */
  readonly laptopadmins?: string;
  /**
  * To create an active directory usergroup, the domain name should be mentioned along with the usergroup name (domainName\\usergroupName) and localUserGroup value must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#name Usergroup#name}
  */
  readonly name: string;
  /**
  * determines if an existing user has to be added to the user group or removed from the user group [ADD, DELETE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#planoperationtype Usergroup#planoperationtype}
  */
  readonly planoperationtype?: string;
  /**
  * if enforceFSQuota is set to true, the quota limit can be set in GBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#quotalimitingb Usergroup#quotalimitingb}
  */
  readonly quotalimitingb?: number;
  /**
  * associatedexternalgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#associatedexternalgroups Usergroup#associatedexternalgroups}
  */
  readonly associatedexternalgroups?: UsergroupAssociatedexternalgroups[] | cdktf.IResolvable;
  /**
  * restrictconsoletypes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#restrictconsoletypes Usergroup#restrictconsoletypes}
  */
  readonly restrictconsoletypes?: UsergroupRestrictconsoletypes[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#users Usergroup#users}
  */
  readonly users?: UsergroupUsers[] | cdktf.IResolvable;
}
export interface UsergroupAssociatedexternalgroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#id Usergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function usergroupAssociatedexternalgroupsToTerraform(struct?: UsergroupAssociatedexternalgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function usergroupAssociatedexternalgroupsToHclTerraform(struct?: UsergroupAssociatedexternalgroups | cdktf.IResolvable): any {
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

export class UsergroupAssociatedexternalgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UsergroupAssociatedexternalgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UsergroupAssociatedexternalgroups | cdktf.IResolvable | undefined) {
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

export class UsergroupAssociatedexternalgroupsList extends cdktf.ComplexList {
  public internalValue? : UsergroupAssociatedexternalgroups[] | cdktf.IResolvable

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
  public get(index: number): UsergroupAssociatedexternalgroupsOutputReference {
    return new UsergroupAssociatedexternalgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UsergroupRestrictconsoletypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#consoletype Usergroup#consoletype}
  */
  readonly consoletype?: string[];
}

export function usergroupRestrictconsoletypesToTerraform(struct?: UsergroupRestrictconsoletypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consoletype: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consoletype),
  }
}


export function usergroupRestrictconsoletypesToHclTerraform(struct?: UsergroupRestrictconsoletypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consoletype: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consoletype),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsergroupRestrictconsoletypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UsergroupRestrictconsoletypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoletype !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoletype = this._consoletype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsergroupRestrictconsoletypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consoletype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consoletype = value.consoletype;
    }
  }

  // consoletype - computed: false, optional: true, required: false
  private _consoletype?: string[]; 
  public get consoletype() {
    return cdktf.Fn.tolist(this.getListAttribute('consoletype'));
  }
  public set consoletype(value: string[]) {
    this._consoletype = value;
  }
  public resetConsoletype() {
    this._consoletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoletypeInput() {
    return this._consoletype;
  }
}

export class UsergroupRestrictconsoletypesList extends cdktf.ComplexList {
  public internalValue? : UsergroupRestrictconsoletypes[] | cdktf.IResolvable

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
  public get(index: number): UsergroupRestrictconsoletypesOutputReference {
    return new UsergroupRestrictconsoletypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UsergroupUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#id Usergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function usergroupUsersToTerraform(struct?: UsergroupUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function usergroupUsersToHclTerraform(struct?: UsergroupUsers | cdktf.IResolvable): any {
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

export class UsergroupUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UsergroupUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UsergroupUsers | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: true, required: false
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

export class UsergroupUsersList extends cdktf.ComplexList {
  public internalValue? : UsergroupUsers[] | cdktf.IResolvable

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
  public get(index: number): UsergroupUsersOutputReference {
    return new UsergroupUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup commvault_usergroup}
*/
export class Usergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_usergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Usergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Usergroup to import
  * @param importFromId The id of the existing Usergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Usergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_usergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/usergroup commvault_usergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsergroupConfig
  */
  public constructor(scope: Construct, id: string, config: UsergroupConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_usergroup',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowmultiplecompanymembers = config.allowmultiplecompanymembers;
    this._azureguid = config.azureguid;
    this._description = config.description;
    this._donotinheritrestrictconsoletypes = config.donotinheritrestrictconsoletypes;
    this._enabled = config.enabled;
    this._enablelocalauthentication = config.enablelocalauthentication;
    this._enabletwofactorauthentication = config.enabletwofactorauthentication;
    this._enforcefsquota = config.enforcefsquota;
    this._id = config.id;
    this._laptopadmins = config.laptopadmins;
    this._name = config.name;
    this._planoperationtype = config.planoperationtype;
    this._quotalimitingb = config.quotalimitingb;
    this._associatedexternalgroups.internalValue = config.associatedexternalgroups;
    this._restrictconsoletypes.internalValue = config.restrictconsoletypes;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowmultiplecompanymembers - computed: true, optional: true, required: false
  private _allowmultiplecompanymembers?: string; 
  public get allowmultiplecompanymembers() {
    return this.getStringAttribute('allowmultiplecompanymembers');
  }
  public set allowmultiplecompanymembers(value: string) {
    this._allowmultiplecompanymembers = value;
  }
  public resetAllowmultiplecompanymembers() {
    this._allowmultiplecompanymembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowmultiplecompanymembersInput() {
    return this._allowmultiplecompanymembers;
  }

  // azureguid - computed: true, optional: true, required: false
  private _azureguid?: string; 
  public get azureguid() {
    return this.getStringAttribute('azureguid');
  }
  public set azureguid(value: string) {
    this._azureguid = value;
  }
  public resetAzureguid() {
    this._azureguid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureguidInput() {
    return this._azureguid;
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

  // donotinheritrestrictconsoletypes - computed: true, optional: true, required: false
  private _donotinheritrestrictconsoletypes?: string; 
  public get donotinheritrestrictconsoletypes() {
    return this.getStringAttribute('donotinheritrestrictconsoletypes');
  }
  public set donotinheritrestrictconsoletypes(value: string) {
    this._donotinheritrestrictconsoletypes = value;
  }
  public resetDonotinheritrestrictconsoletypes() {
    this._donotinheritrestrictconsoletypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donotinheritrestrictconsoletypesInput() {
    return this._donotinheritrestrictconsoletypes;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enablelocalauthentication - computed: true, optional: true, required: false
  private _enablelocalauthentication?: string; 
  public get enablelocalauthentication() {
    return this.getStringAttribute('enablelocalauthentication');
  }
  public set enablelocalauthentication(value: string) {
    this._enablelocalauthentication = value;
  }
  public resetEnablelocalauthentication() {
    this._enablelocalauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablelocalauthenticationInput() {
    return this._enablelocalauthentication;
  }

  // enabletwofactorauthentication - computed: true, optional: true, required: false
  private _enabletwofactorauthentication?: string; 
  public get enabletwofactorauthentication() {
    return this.getStringAttribute('enabletwofactorauthentication');
  }
  public set enabletwofactorauthentication(value: string) {
    this._enabletwofactorauthentication = value;
  }
  public resetEnabletwofactorauthentication() {
    this._enabletwofactorauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabletwofactorauthenticationInput() {
    return this._enabletwofactorauthentication;
  }

  // enforcefsquota - computed: true, optional: true, required: false
  private _enforcefsquota?: string; 
  public get enforcefsquota() {
    return this.getStringAttribute('enforcefsquota');
  }
  public set enforcefsquota(value: string) {
    this._enforcefsquota = value;
  }
  public resetEnforcefsquota() {
    this._enforcefsquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcefsquotaInput() {
    return this._enforcefsquota;
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

  // laptopadmins - computed: true, optional: true, required: false
  private _laptopadmins?: string; 
  public get laptopadmins() {
    return this.getStringAttribute('laptopadmins');
  }
  public set laptopadmins(value: string) {
    this._laptopadmins = value;
  }
  public resetLaptopadmins() {
    this._laptopadmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laptopadminsInput() {
    return this._laptopadmins;
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

  // planoperationtype - computed: true, optional: true, required: false
  private _planoperationtype?: string; 
  public get planoperationtype() {
    return this.getStringAttribute('planoperationtype');
  }
  public set planoperationtype(value: string) {
    this._planoperationtype = value;
  }
  public resetPlanoperationtype() {
    this._planoperationtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planoperationtypeInput() {
    return this._planoperationtype;
  }

  // quotalimitingb - computed: true, optional: true, required: false
  private _quotalimitingb?: number; 
  public get quotalimitingb() {
    return this.getNumberAttribute('quotalimitingb');
  }
  public set quotalimitingb(value: number) {
    this._quotalimitingb = value;
  }
  public resetQuotalimitingb() {
    this._quotalimitingb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotalimitingbInput() {
    return this._quotalimitingb;
  }

  // associatedexternalgroups - computed: false, optional: true, required: false
  private _associatedexternalgroups = new UsergroupAssociatedexternalgroupsList(this, "associatedexternalgroups", true);
  public get associatedexternalgroups() {
    return this._associatedexternalgroups;
  }
  public putAssociatedexternalgroups(value: UsergroupAssociatedexternalgroups[] | cdktf.IResolvable) {
    this._associatedexternalgroups.internalValue = value;
  }
  public resetAssociatedexternalgroups() {
    this._associatedexternalgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedexternalgroupsInput() {
    return this._associatedexternalgroups.internalValue;
  }

  // restrictconsoletypes - computed: false, optional: true, required: false
  private _restrictconsoletypes = new UsergroupRestrictconsoletypesList(this, "restrictconsoletypes", false);
  public get restrictconsoletypes() {
    return this._restrictconsoletypes;
  }
  public putRestrictconsoletypes(value: UsergroupRestrictconsoletypes[] | cdktf.IResolvable) {
    this._restrictconsoletypes.internalValue = value;
  }
  public resetRestrictconsoletypes() {
    this._restrictconsoletypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictconsoletypesInput() {
    return this._restrictconsoletypes.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new UsergroupUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: UsergroupUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowmultiplecompanymembers: cdktf.stringToTerraform(this._allowmultiplecompanymembers),
      azureguid: cdktf.stringToTerraform(this._azureguid),
      description: cdktf.stringToTerraform(this._description),
      donotinheritrestrictconsoletypes: cdktf.stringToTerraform(this._donotinheritrestrictconsoletypes),
      enabled: cdktf.stringToTerraform(this._enabled),
      enablelocalauthentication: cdktf.stringToTerraform(this._enablelocalauthentication),
      enabletwofactorauthentication: cdktf.stringToTerraform(this._enabletwofactorauthentication),
      enforcefsquota: cdktf.stringToTerraform(this._enforcefsquota),
      id: cdktf.stringToTerraform(this._id),
      laptopadmins: cdktf.stringToTerraform(this._laptopadmins),
      name: cdktf.stringToTerraform(this._name),
      planoperationtype: cdktf.stringToTerraform(this._planoperationtype),
      quotalimitingb: cdktf.numberToTerraform(this._quotalimitingb),
      associatedexternalgroups: cdktf.listMapper(usergroupAssociatedexternalgroupsToTerraform, true)(this._associatedexternalgroups.internalValue),
      restrictconsoletypes: cdktf.listMapper(usergroupRestrictconsoletypesToTerraform, true)(this._restrictconsoletypes.internalValue),
      users: cdktf.listMapper(usergroupUsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowmultiplecompanymembers: {
        value: cdktf.stringToHclTerraform(this._allowmultiplecompanymembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azureguid: {
        value: cdktf.stringToHclTerraform(this._azureguid),
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
      donotinheritrestrictconsoletypes: {
        value: cdktf.stringToHclTerraform(this._donotinheritrestrictconsoletypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablelocalauthentication: {
        value: cdktf.stringToHclTerraform(this._enablelocalauthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabletwofactorauthentication: {
        value: cdktf.stringToHclTerraform(this._enabletwofactorauthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcefsquota: {
        value: cdktf.stringToHclTerraform(this._enforcefsquota),
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
      laptopadmins: {
        value: cdktf.stringToHclTerraform(this._laptopadmins),
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
      planoperationtype: {
        value: cdktf.stringToHclTerraform(this._planoperationtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quotalimitingb: {
        value: cdktf.numberToHclTerraform(this._quotalimitingb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      associatedexternalgroups: {
        value: cdktf.listMapperHcl(usergroupAssociatedexternalgroupsToHclTerraform, true)(this._associatedexternalgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsergroupAssociatedexternalgroupsList",
      },
      restrictconsoletypes: {
        value: cdktf.listMapperHcl(usergroupRestrictconsoletypesToHclTerraform, true)(this._restrictconsoletypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UsergroupRestrictconsoletypesList",
      },
      users: {
        value: cdktf.listMapperHcl(usergroupUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsergroupUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
