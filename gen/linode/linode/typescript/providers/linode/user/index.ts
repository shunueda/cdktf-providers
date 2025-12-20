// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, the user must be explicitly granted access to platform actions and entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#restricted User#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * The username of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * domain_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#domain_grant User#domain_grant}
  */
  readonly domainGrant?: UserDomainGrant[] | cdktf.IResolvable;
  /**
  * firewall_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#firewall_grant User#firewall_grant}
  */
  readonly firewallGrant?: UserFirewallGrant[] | cdktf.IResolvable;
  /**
  * global_grants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#global_grants User#global_grants}
  */
  readonly globalGrants?: UserGlobalGrants;
  /**
  * image_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#image_grant User#image_grant}
  */
  readonly imageGrant?: UserImageGrant[] | cdktf.IResolvable;
  /**
  * linode_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#linode_grant User#linode_grant}
  */
  readonly linodeGrant?: UserLinodeGrant[] | cdktf.IResolvable;
  /**
  * longview_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#longview_grant User#longview_grant}
  */
  readonly longviewGrant?: UserLongviewGrant[] | cdktf.IResolvable;
  /**
  * nodebalancer_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#nodebalancer_grant User#nodebalancer_grant}
  */
  readonly nodebalancerGrant?: UserNodebalancerGrant[] | cdktf.IResolvable;
  /**
  * stackscript_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#stackscript_grant User#stackscript_grant}
  */
  readonly stackscriptGrant?: UserStackscriptGrant[] | cdktf.IResolvable;
  /**
  * volume_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#volume_grant User#volume_grant}
  */
  readonly volumeGrant?: UserVolumeGrant[] | cdktf.IResolvable;
  /**
  * vpc_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#vpc_grant User#vpc_grant}
  */
  readonly vpcGrant?: UserVpcGrant[] | cdktf.IResolvable;
}
export interface UserDomainGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userDomainGrantToTerraform(struct?: UserDomainGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userDomainGrantToHclTerraform(struct?: UserDomainGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserDomainGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserDomainGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserDomainGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserDomainGrantList extends cdktf.ComplexList {
  public internalValue? : UserDomainGrant[] | cdktf.IResolvable

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
  public get(index: number): UserDomainGrantOutputReference {
    return new UserDomainGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserFirewallGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userFirewallGrantToTerraform(struct?: UserFirewallGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userFirewallGrantToHclTerraform(struct?: UserFirewallGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFirewallGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserFirewallGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFirewallGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserFirewallGrantList extends cdktf.ComplexList {
  public internalValue? : UserFirewallGrant[] | cdktf.IResolvable

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
  public get(index: number): UserFirewallGrantOutputReference {
    return new UserFirewallGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGlobalGrants {
  /**
  * The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#account_access User#account_access}
  */
  readonly accountAccess?: string;
  /**
  * If true, this User may add Databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_databases User#add_databases}
  */
  readonly addDatabases?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add Domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_domains User#add_domains}
  */
  readonly addDomains?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add Firewalls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_firewalls User#add_firewalls}
  */
  readonly addFirewalls?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add Images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_images User#add_images}
  */
  readonly addImages?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may create Linodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_linodes User#add_linodes}
  */
  readonly addLinodes?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may create Longview clients and view the current plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_longview User#add_longview}
  */
  readonly addLongview?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add NodeBalancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_nodebalancers User#add_nodebalancers}
  */
  readonly addNodebalancers?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add StackScripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_stackscripts User#add_stackscripts}
  */
  readonly addStackscripts?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add Volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_volumes User#add_volumes}
  */
  readonly addVolumes?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may add Virtual Private Clouds (VPCs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#add_vpcs User#add_vpcs}
  */
  readonly addVpcs?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may cancel the entire Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#cancel_account User#cancel_account}
  */
  readonly cancelAccount?: boolean | cdktf.IResolvable;
  /**
  * If true, this User may manage the Account’s Longview subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#longview_subscription User#longview_subscription}
  */
  readonly longviewSubscription?: boolean | cdktf.IResolvable;
}

export function userGlobalGrantsToTerraform(struct?: UserGlobalGrantsOutputReference | UserGlobalGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_access: cdktf.stringToTerraform(struct!.accountAccess),
    add_databases: cdktf.booleanToTerraform(struct!.addDatabases),
    add_domains: cdktf.booleanToTerraform(struct!.addDomains),
    add_firewalls: cdktf.booleanToTerraform(struct!.addFirewalls),
    add_images: cdktf.booleanToTerraform(struct!.addImages),
    add_linodes: cdktf.booleanToTerraform(struct!.addLinodes),
    add_longview: cdktf.booleanToTerraform(struct!.addLongview),
    add_nodebalancers: cdktf.booleanToTerraform(struct!.addNodebalancers),
    add_stackscripts: cdktf.booleanToTerraform(struct!.addStackscripts),
    add_volumes: cdktf.booleanToTerraform(struct!.addVolumes),
    add_vpcs: cdktf.booleanToTerraform(struct!.addVpcs),
    cancel_account: cdktf.booleanToTerraform(struct!.cancelAccount),
    longview_subscription: cdktf.booleanToTerraform(struct!.longviewSubscription),
  }
}


export function userGlobalGrantsToHclTerraform(struct?: UserGlobalGrantsOutputReference | UserGlobalGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_access: {
      value: cdktf.stringToHclTerraform(struct!.accountAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_databases: {
      value: cdktf.booleanToHclTerraform(struct!.addDatabases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_domains: {
      value: cdktf.booleanToHclTerraform(struct!.addDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_firewalls: {
      value: cdktf.booleanToHclTerraform(struct!.addFirewalls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_images: {
      value: cdktf.booleanToHclTerraform(struct!.addImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_linodes: {
      value: cdktf.booleanToHclTerraform(struct!.addLinodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_longview: {
      value: cdktf.booleanToHclTerraform(struct!.addLongview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_nodebalancers: {
      value: cdktf.booleanToHclTerraform(struct!.addNodebalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_stackscripts: {
      value: cdktf.booleanToHclTerraform(struct!.addStackscripts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.addVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_vpcs: {
      value: cdktf.booleanToHclTerraform(struct!.addVpcs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cancel_account: {
      value: cdktf.booleanToHclTerraform(struct!.cancelAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    longview_subscription: {
      value: cdktf.booleanToHclTerraform(struct!.longviewSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGlobalGrantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGlobalGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountAccess = this._accountAccess;
    }
    if (this._addDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDatabases = this._addDatabases;
    }
    if (this._addDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDomains = this._addDomains;
    }
    if (this._addFirewalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.addFirewalls = this._addFirewalls;
    }
    if (this._addImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.addImages = this._addImages;
    }
    if (this._addLinodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLinodes = this._addLinodes;
    }
    if (this._addLongview !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLongview = this._addLongview;
    }
    if (this._addNodebalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.addNodebalancers = this._addNodebalancers;
    }
    if (this._addStackscripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addStackscripts = this._addStackscripts;
    }
    if (this._addVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addVolumes = this._addVolumes;
    }
    if (this._addVpcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addVpcs = this._addVpcs;
    }
    if (this._cancelAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelAccount = this._cancelAccount;
    }
    if (this._longviewSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.longviewSubscription = this._longviewSubscription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGlobalGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountAccess = undefined;
      this._addDatabases = undefined;
      this._addDomains = undefined;
      this._addFirewalls = undefined;
      this._addImages = undefined;
      this._addLinodes = undefined;
      this._addLongview = undefined;
      this._addNodebalancers = undefined;
      this._addStackscripts = undefined;
      this._addVolumes = undefined;
      this._addVpcs = undefined;
      this._cancelAccount = undefined;
      this._longviewSubscription = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountAccess = value.accountAccess;
      this._addDatabases = value.addDatabases;
      this._addDomains = value.addDomains;
      this._addFirewalls = value.addFirewalls;
      this._addImages = value.addImages;
      this._addLinodes = value.addLinodes;
      this._addLongview = value.addLongview;
      this._addNodebalancers = value.addNodebalancers;
      this._addStackscripts = value.addStackscripts;
      this._addVolumes = value.addVolumes;
      this._addVpcs = value.addVpcs;
      this._cancelAccount = value.cancelAccount;
      this._longviewSubscription = value.longviewSubscription;
    }
  }

  // account_access - computed: false, optional: true, required: false
  private _accountAccess?: string; 
  public get accountAccess() {
    return this.getStringAttribute('account_access');
  }
  public set accountAccess(value: string) {
    this._accountAccess = value;
  }
  public resetAccountAccess() {
    this._accountAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessInput() {
    return this._accountAccess;
  }

  // add_databases - computed: false, optional: true, required: false
  private _addDatabases?: boolean | cdktf.IResolvable; 
  public get addDatabases() {
    return this.getBooleanAttribute('add_databases');
  }
  public set addDatabases(value: boolean | cdktf.IResolvable) {
    this._addDatabases = value;
  }
  public resetAddDatabases() {
    this._addDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDatabasesInput() {
    return this._addDatabases;
  }

  // add_domains - computed: false, optional: true, required: false
  private _addDomains?: boolean | cdktf.IResolvable; 
  public get addDomains() {
    return this.getBooleanAttribute('add_domains');
  }
  public set addDomains(value: boolean | cdktf.IResolvable) {
    this._addDomains = value;
  }
  public resetAddDomains() {
    this._addDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDomainsInput() {
    return this._addDomains;
  }

  // add_firewalls - computed: false, optional: true, required: false
  private _addFirewalls?: boolean | cdktf.IResolvable; 
  public get addFirewalls() {
    return this.getBooleanAttribute('add_firewalls');
  }
  public set addFirewalls(value: boolean | cdktf.IResolvable) {
    this._addFirewalls = value;
  }
  public resetAddFirewalls() {
    this._addFirewalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addFirewallsInput() {
    return this._addFirewalls;
  }

  // add_images - computed: false, optional: true, required: false
  private _addImages?: boolean | cdktf.IResolvable; 
  public get addImages() {
    return this.getBooleanAttribute('add_images');
  }
  public set addImages(value: boolean | cdktf.IResolvable) {
    this._addImages = value;
  }
  public resetAddImages() {
    this._addImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addImagesInput() {
    return this._addImages;
  }

  // add_linodes - computed: false, optional: true, required: false
  private _addLinodes?: boolean | cdktf.IResolvable; 
  public get addLinodes() {
    return this.getBooleanAttribute('add_linodes');
  }
  public set addLinodes(value: boolean | cdktf.IResolvable) {
    this._addLinodes = value;
  }
  public resetAddLinodes() {
    this._addLinodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLinodesInput() {
    return this._addLinodes;
  }

  // add_longview - computed: false, optional: true, required: false
  private _addLongview?: boolean | cdktf.IResolvable; 
  public get addLongview() {
    return this.getBooleanAttribute('add_longview');
  }
  public set addLongview(value: boolean | cdktf.IResolvable) {
    this._addLongview = value;
  }
  public resetAddLongview() {
    this._addLongview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLongviewInput() {
    return this._addLongview;
  }

  // add_nodebalancers - computed: false, optional: true, required: false
  private _addNodebalancers?: boolean | cdktf.IResolvable; 
  public get addNodebalancers() {
    return this.getBooleanAttribute('add_nodebalancers');
  }
  public set addNodebalancers(value: boolean | cdktf.IResolvable) {
    this._addNodebalancers = value;
  }
  public resetAddNodebalancers() {
    this._addNodebalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNodebalancersInput() {
    return this._addNodebalancers;
  }

  // add_stackscripts - computed: false, optional: true, required: false
  private _addStackscripts?: boolean | cdktf.IResolvable; 
  public get addStackscripts() {
    return this.getBooleanAttribute('add_stackscripts');
  }
  public set addStackscripts(value: boolean | cdktf.IResolvable) {
    this._addStackscripts = value;
  }
  public resetAddStackscripts() {
    this._addStackscripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStackscriptsInput() {
    return this._addStackscripts;
  }

  // add_volumes - computed: false, optional: true, required: false
  private _addVolumes?: boolean | cdktf.IResolvable; 
  public get addVolumes() {
    return this.getBooleanAttribute('add_volumes');
  }
  public set addVolumes(value: boolean | cdktf.IResolvable) {
    this._addVolumes = value;
  }
  public resetAddVolumes() {
    this._addVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVolumesInput() {
    return this._addVolumes;
  }

  // add_vpcs - computed: false, optional: true, required: false
  private _addVpcs?: boolean | cdktf.IResolvable; 
  public get addVpcs() {
    return this.getBooleanAttribute('add_vpcs');
  }
  public set addVpcs(value: boolean | cdktf.IResolvable) {
    this._addVpcs = value;
  }
  public resetAddVpcs() {
    this._addVpcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVpcsInput() {
    return this._addVpcs;
  }

  // cancel_account - computed: false, optional: true, required: false
  private _cancelAccount?: boolean | cdktf.IResolvable; 
  public get cancelAccount() {
    return this.getBooleanAttribute('cancel_account');
  }
  public set cancelAccount(value: boolean | cdktf.IResolvable) {
    this._cancelAccount = value;
  }
  public resetCancelAccount() {
    this._cancelAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelAccountInput() {
    return this._cancelAccount;
  }

  // longview_subscription - computed: false, optional: true, required: false
  private _longviewSubscription?: boolean | cdktf.IResolvable; 
  public get longviewSubscription() {
    return this.getBooleanAttribute('longview_subscription');
  }
  public set longviewSubscription(value: boolean | cdktf.IResolvable) {
    this._longviewSubscription = value;
  }
  public resetLongviewSubscription() {
    this._longviewSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longviewSubscriptionInput() {
    return this._longviewSubscription;
  }
}
export interface UserImageGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userImageGrantToTerraform(struct?: UserImageGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userImageGrantToHclTerraform(struct?: UserImageGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserImageGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserImageGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserImageGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserImageGrantList extends cdktf.ComplexList {
  public internalValue? : UserImageGrant[] | cdktf.IResolvable

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
  public get(index: number): UserImageGrantOutputReference {
    return new UserImageGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserLinodeGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userLinodeGrantToTerraform(struct?: UserLinodeGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userLinodeGrantToHclTerraform(struct?: UserLinodeGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserLinodeGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserLinodeGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserLinodeGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserLinodeGrantList extends cdktf.ComplexList {
  public internalValue? : UserLinodeGrant[] | cdktf.IResolvable

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
  public get(index: number): UserLinodeGrantOutputReference {
    return new UserLinodeGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserLongviewGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userLongviewGrantToTerraform(struct?: UserLongviewGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userLongviewGrantToHclTerraform(struct?: UserLongviewGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserLongviewGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserLongviewGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserLongviewGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserLongviewGrantList extends cdktf.ComplexList {
  public internalValue? : UserLongviewGrant[] | cdktf.IResolvable

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
  public get(index: number): UserLongviewGrantOutputReference {
    return new UserLongviewGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserNodebalancerGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userNodebalancerGrantToTerraform(struct?: UserNodebalancerGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userNodebalancerGrantToHclTerraform(struct?: UserNodebalancerGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserNodebalancerGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserNodebalancerGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserNodebalancerGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserNodebalancerGrantList extends cdktf.ComplexList {
  public internalValue? : UserNodebalancerGrant[] | cdktf.IResolvable

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
  public get(index: number): UserNodebalancerGrantOutputReference {
    return new UserNodebalancerGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserStackscriptGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userStackscriptGrantToTerraform(struct?: UserStackscriptGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userStackscriptGrantToHclTerraform(struct?: UserStackscriptGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserStackscriptGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserStackscriptGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserStackscriptGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserStackscriptGrantList extends cdktf.ComplexList {
  public internalValue? : UserStackscriptGrant[] | cdktf.IResolvable

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
  public get(index: number): UserStackscriptGrantOutputReference {
    return new UserStackscriptGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserVolumeGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userVolumeGrantToTerraform(struct?: UserVolumeGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userVolumeGrantToHclTerraform(struct?: UserVolumeGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserVolumeGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserVolumeGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVolumeGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserVolumeGrantList extends cdktf.ComplexList {
  public internalValue? : UserVolumeGrant[] | cdktf.IResolvable

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
  public get(index: number): UserVolumeGrantOutputReference {
    return new UserVolumeGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserVpcGrant {
  /**
  * The ID of the entity this grant applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The level of access this User has to this entity. If null, this User has no access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: string;
}

export function userVpcGrantToTerraform(struct?: UserVpcGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function userVpcGrantToHclTerraform(struct?: UserVpcGrant | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserVpcGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserVpcGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVpcGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class UserVpcGrantList extends cdktf.ComplexList {
  public internalValue? : UserVpcGrant[] | cdktf.IResolvable

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
  public get(index: number): UserVpcGrantOutputReference {
    return new UserVpcGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user linode_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/user linode_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_user',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._restricted = config.restricted;
    this._username = config.username;
    this._domainGrant.internalValue = config.domainGrant;
    this._firewallGrant.internalValue = config.firewallGrant;
    this._globalGrants.internalValue = config.globalGrants;
    this._imageGrant.internalValue = config.imageGrant;
    this._linodeGrant.internalValue = config.linodeGrant;
    this._longviewGrant.internalValue = config.longviewGrant;
    this._nodebalancerGrant.internalValue = config.nodebalancerGrant;
    this._stackscriptGrant.internalValue = config.stackscriptGrant;
    this._volumeGrant.internalValue = config.volumeGrant;
    this._vpcGrant.internalValue = config.vpcGrant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // restricted - computed: false, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // ssh_keys - computed: true, optional: false, required: false
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }

  // tfa_enabled - computed: true, optional: false, required: false
  public get tfaEnabled() {
    return this.getBooleanAttribute('tfa_enabled');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // domain_grant - computed: false, optional: true, required: false
  private _domainGrant = new UserDomainGrantList(this, "domain_grant", true);
  public get domainGrant() {
    return this._domainGrant;
  }
  public putDomainGrant(value: UserDomainGrant[] | cdktf.IResolvable) {
    this._domainGrant.internalValue = value;
  }
  public resetDomainGrant() {
    this._domainGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGrantInput() {
    return this._domainGrant.internalValue;
  }

  // firewall_grant - computed: false, optional: true, required: false
  private _firewallGrant = new UserFirewallGrantList(this, "firewall_grant", true);
  public get firewallGrant() {
    return this._firewallGrant;
  }
  public putFirewallGrant(value: UserFirewallGrant[] | cdktf.IResolvable) {
    this._firewallGrant.internalValue = value;
  }
  public resetFirewallGrant() {
    this._firewallGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallGrantInput() {
    return this._firewallGrant.internalValue;
  }

  // global_grants - computed: false, optional: true, required: false
  private _globalGrants = new UserGlobalGrantsOutputReference(this, "global_grants");
  public get globalGrants() {
    return this._globalGrants;
  }
  public putGlobalGrants(value: UserGlobalGrants) {
    this._globalGrants.internalValue = value;
  }
  public resetGlobalGrants() {
    this._globalGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalGrantsInput() {
    return this._globalGrants.internalValue;
  }

  // image_grant - computed: false, optional: true, required: false
  private _imageGrant = new UserImageGrantList(this, "image_grant", true);
  public get imageGrant() {
    return this._imageGrant;
  }
  public putImageGrant(value: UserImageGrant[] | cdktf.IResolvable) {
    this._imageGrant.internalValue = value;
  }
  public resetImageGrant() {
    this._imageGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGrantInput() {
    return this._imageGrant.internalValue;
  }

  // linode_grant - computed: false, optional: true, required: false
  private _linodeGrant = new UserLinodeGrantList(this, "linode_grant", true);
  public get linodeGrant() {
    return this._linodeGrant;
  }
  public putLinodeGrant(value: UserLinodeGrant[] | cdktf.IResolvable) {
    this._linodeGrant.internalValue = value;
  }
  public resetLinodeGrant() {
    this._linodeGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeGrantInput() {
    return this._linodeGrant.internalValue;
  }

  // longview_grant - computed: false, optional: true, required: false
  private _longviewGrant = new UserLongviewGrantList(this, "longview_grant", true);
  public get longviewGrant() {
    return this._longviewGrant;
  }
  public putLongviewGrant(value: UserLongviewGrant[] | cdktf.IResolvable) {
    this._longviewGrant.internalValue = value;
  }
  public resetLongviewGrant() {
    this._longviewGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longviewGrantInput() {
    return this._longviewGrant.internalValue;
  }

  // nodebalancer_grant - computed: false, optional: true, required: false
  private _nodebalancerGrant = new UserNodebalancerGrantList(this, "nodebalancer_grant", true);
  public get nodebalancerGrant() {
    return this._nodebalancerGrant;
  }
  public putNodebalancerGrant(value: UserNodebalancerGrant[] | cdktf.IResolvable) {
    this._nodebalancerGrant.internalValue = value;
  }
  public resetNodebalancerGrant() {
    this._nodebalancerGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerGrantInput() {
    return this._nodebalancerGrant.internalValue;
  }

  // stackscript_grant - computed: false, optional: true, required: false
  private _stackscriptGrant = new UserStackscriptGrantList(this, "stackscript_grant", true);
  public get stackscriptGrant() {
    return this._stackscriptGrant;
  }
  public putStackscriptGrant(value: UserStackscriptGrant[] | cdktf.IResolvable) {
    this._stackscriptGrant.internalValue = value;
  }
  public resetStackscriptGrant() {
    this._stackscriptGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptGrantInput() {
    return this._stackscriptGrant.internalValue;
  }

  // volume_grant - computed: false, optional: true, required: false
  private _volumeGrant = new UserVolumeGrantList(this, "volume_grant", true);
  public get volumeGrant() {
    return this._volumeGrant;
  }
  public putVolumeGrant(value: UserVolumeGrant[] | cdktf.IResolvable) {
    this._volumeGrant.internalValue = value;
  }
  public resetVolumeGrant() {
    this._volumeGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGrantInput() {
    return this._volumeGrant.internalValue;
  }

  // vpc_grant - computed: false, optional: true, required: false
  private _vpcGrant = new UserVpcGrantList(this, "vpc_grant", true);
  public get vpcGrant() {
    return this._vpcGrant;
  }
  public putVpcGrant(value: UserVpcGrant[] | cdktf.IResolvable) {
    this._vpcGrant.internalValue = value;
  }
  public resetVpcGrant() {
    this._vpcGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcGrantInput() {
    return this._vpcGrant.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      restricted: cdktf.booleanToTerraform(this._restricted),
      username: cdktf.stringToTerraform(this._username),
      domain_grant: cdktf.listMapper(userDomainGrantToTerraform, true)(this._domainGrant.internalValue),
      firewall_grant: cdktf.listMapper(userFirewallGrantToTerraform, true)(this._firewallGrant.internalValue),
      global_grants: userGlobalGrantsToTerraform(this._globalGrants.internalValue),
      image_grant: cdktf.listMapper(userImageGrantToTerraform, true)(this._imageGrant.internalValue),
      linode_grant: cdktf.listMapper(userLinodeGrantToTerraform, true)(this._linodeGrant.internalValue),
      longview_grant: cdktf.listMapper(userLongviewGrantToTerraform, true)(this._longviewGrant.internalValue),
      nodebalancer_grant: cdktf.listMapper(userNodebalancerGrantToTerraform, true)(this._nodebalancerGrant.internalValue),
      stackscript_grant: cdktf.listMapper(userStackscriptGrantToTerraform, true)(this._stackscriptGrant.internalValue),
      volume_grant: cdktf.listMapper(userVolumeGrantToTerraform, true)(this._volumeGrant.internalValue),
      vpc_grant: cdktf.listMapper(userVpcGrantToTerraform, true)(this._vpcGrant.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      restricted: {
        value: cdktf.booleanToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_grant: {
        value: cdktf.listMapperHcl(userDomainGrantToHclTerraform, true)(this._domainGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserDomainGrantList",
      },
      firewall_grant: {
        value: cdktf.listMapperHcl(userFirewallGrantToHclTerraform, true)(this._firewallGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserFirewallGrantList",
      },
      global_grants: {
        value: userGlobalGrantsToHclTerraform(this._globalGrants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGlobalGrantsList",
      },
      image_grant: {
        value: cdktf.listMapperHcl(userImageGrantToHclTerraform, true)(this._imageGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserImageGrantList",
      },
      linode_grant: {
        value: cdktf.listMapperHcl(userLinodeGrantToHclTerraform, true)(this._linodeGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserLinodeGrantList",
      },
      longview_grant: {
        value: cdktf.listMapperHcl(userLongviewGrantToHclTerraform, true)(this._longviewGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserLongviewGrantList",
      },
      nodebalancer_grant: {
        value: cdktf.listMapperHcl(userNodebalancerGrantToHclTerraform, true)(this._nodebalancerGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserNodebalancerGrantList",
      },
      stackscript_grant: {
        value: cdktf.listMapperHcl(userStackscriptGrantToHclTerraform, true)(this._stackscriptGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserStackscriptGrantList",
      },
      volume_grant: {
        value: cdktf.listMapperHcl(userVolumeGrantToHclTerraform, true)(this._volumeGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserVolumeGrantList",
      },
      vpc_grant: {
        value: cdktf.listMapperHcl(userVpcGrantToHclTerraform, true)(this._vpcGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserVpcGrantList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
