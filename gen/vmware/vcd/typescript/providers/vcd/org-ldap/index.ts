// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * If ldap_mode is SYSTEM, specifies a LDAP attribute=value pair to use for OU (organizational unit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#custom_user_ou OrgLdap#custom_user_ou}
  */
  readonly customUserOu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#id OrgLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of LDAP settings (one of NONE, SYSTEM, CUSTOM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#ldap_mode OrgLdap#ldap_mode}
  */
  readonly ldapMode: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#org_id OrgLdap#org_id}
  */
  readonly orgId: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#custom_settings OrgLdap#custom_settings}
  */
  readonly customSettings?: OrgLdapCustomSettings;
}
export interface OrgLdapCustomSettingsGroupAttributes {
  /**
  * LDAP group attribute used to identify a group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#group_back_link_identifier OrgLdap#group_back_link_identifier}
  */
  readonly groupBackLinkIdentifier?: string;
  /**
  * LDAP attribute that identifies a group as a member of another group. For example, dn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#group_membership_identifier OrgLdap#group_membership_identifier}
  */
  readonly groupMembershipIdentifier: string;
  /**
  * LDAP attribute to use when getting the members of a group. For example, member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#membership OrgLdap#membership}
  */
  readonly membership: string;
  /**
  * LDAP attribute to use for the group name. For example, cn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#name OrgLdap#name}
  */
  readonly name: string;
  /**
  * LDAP objectClass of which imported groups are members. For example, group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#object_class OrgLdap#object_class}
  */
  readonly objectClass: string;
  /**
  * LDAP attribute to use as the unique identifier for a group. For example, objectGuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#unique_identifier OrgLdap#unique_identifier}
  */
  readonly uniqueIdentifier: string;
}

export function orgLdapCustomSettingsGroupAttributesToTerraform(struct?: OrgLdapCustomSettingsGroupAttributesOutputReference | OrgLdapCustomSettingsGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_back_link_identifier: cdktf.stringToTerraform(struct!.groupBackLinkIdentifier),
    group_membership_identifier: cdktf.stringToTerraform(struct!.groupMembershipIdentifier),
    membership: cdktf.stringToTerraform(struct!.membership),
    name: cdktf.stringToTerraform(struct!.name),
    object_class: cdktf.stringToTerraform(struct!.objectClass),
    unique_identifier: cdktf.stringToTerraform(struct!.uniqueIdentifier),
  }
}


export function orgLdapCustomSettingsGroupAttributesToHclTerraform(struct?: OrgLdapCustomSettingsGroupAttributesOutputReference | OrgLdapCustomSettingsGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_back_link_identifier: {
      value: cdktf.stringToHclTerraform(struct!.groupBackLinkIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_membership_identifier: {
      value: cdktf.stringToHclTerraform(struct!.groupMembershipIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    membership: {
      value: cdktf.stringToHclTerraform(struct!.membership),
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
    object_class: {
      value: cdktf.stringToHclTerraform(struct!.objectClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniqueIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLdapCustomSettingsGroupAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgLdapCustomSettingsGroupAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBackLinkIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBackLinkIdentifier = this._groupBackLinkIdentifier;
    }
    if (this._groupMembershipIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMembershipIdentifier = this._groupMembershipIdentifier;
    }
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClass = this._objectClass;
    }
    if (this._uniqueIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueIdentifier = this._uniqueIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLdapCustomSettingsGroupAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupBackLinkIdentifier = undefined;
      this._groupMembershipIdentifier = undefined;
      this._membership = undefined;
      this._name = undefined;
      this._objectClass = undefined;
      this._uniqueIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupBackLinkIdentifier = value.groupBackLinkIdentifier;
      this._groupMembershipIdentifier = value.groupMembershipIdentifier;
      this._membership = value.membership;
      this._name = value.name;
      this._objectClass = value.objectClass;
      this._uniqueIdentifier = value.uniqueIdentifier;
    }
  }

  // group_back_link_identifier - computed: false, optional: true, required: false
  private _groupBackLinkIdentifier?: string; 
  public get groupBackLinkIdentifier() {
    return this.getStringAttribute('group_back_link_identifier');
  }
  public set groupBackLinkIdentifier(value: string) {
    this._groupBackLinkIdentifier = value;
  }
  public resetGroupBackLinkIdentifier() {
    this._groupBackLinkIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBackLinkIdentifierInput() {
    return this._groupBackLinkIdentifier;
  }

  // group_membership_identifier - computed: false, optional: false, required: true
  private _groupMembershipIdentifier?: string; 
  public get groupMembershipIdentifier() {
    return this.getStringAttribute('group_membership_identifier');
  }
  public set groupMembershipIdentifier(value: string) {
    this._groupMembershipIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipIdentifierInput() {
    return this._groupMembershipIdentifier;
  }

  // membership - computed: false, optional: false, required: true
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
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

  // object_class - computed: false, optional: false, required: true
  private _objectClass?: string; 
  public get objectClass() {
    return this.getStringAttribute('object_class');
  }
  public set objectClass(value: string) {
    this._objectClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassInput() {
    return this._objectClass;
  }

  // unique_identifier - computed: false, optional: false, required: true
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentifierInput() {
    return this._uniqueIdentifier;
  }
}
export interface OrgLdapCustomSettingsUserAttributes {
  /**
  * LDAP attribute to use for the user's full name. For example, displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#display_name OrgLdap#display_name}
  */
  readonly displayName: string;
  /**
  * LDAP attribute to use for the user's email address. For example, mail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#email OrgLdap#email}
  */
  readonly email: string;
  /**
  * LDAP attribute to use for the user's given name. For example, givenName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#given_name OrgLdap#given_name}
  */
  readonly givenName: string;
  /**
  * LDAP attribute that returns the identifiers of all the groups of which the user is a member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#group_back_link_identifier OrgLdap#group_back_link_identifier}
  */
  readonly groupBackLinkIdentifier?: string;
  /**
  * LDAP attribute that identifies a user as a member of a group. For example, dn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#group_membership_identifier OrgLdap#group_membership_identifier}
  */
  readonly groupMembershipIdentifier: string;
  /**
  * LDAP objectClass of which imported users are members. For example, user or person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#object_class OrgLdap#object_class}
  */
  readonly objectClass: string;
  /**
  * LDAP attribute to use for the user's surname. For example, sn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#surname OrgLdap#surname}
  */
  readonly surname: string;
  /**
  * LDAP attribute to use for the user's telephone number. For example, telephoneNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#telephone OrgLdap#telephone}
  */
  readonly telephone: string;
  /**
  * LDAP attribute to use as the unique identifier for a user. For example, objectGuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#unique_identifier OrgLdap#unique_identifier}
  */
  readonly uniqueIdentifier: string;
  /**
  * LDAP attribute to use when looking up a user name to import. For example, userPrincipalName or samAccountName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#username OrgLdap#username}
  */
  readonly username: string;
}

export function orgLdapCustomSettingsUserAttributesToTerraform(struct?: OrgLdapCustomSettingsUserAttributesOutputReference | OrgLdapCustomSettingsUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email: cdktf.stringToTerraform(struct!.email),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    group_back_link_identifier: cdktf.stringToTerraform(struct!.groupBackLinkIdentifier),
    group_membership_identifier: cdktf.stringToTerraform(struct!.groupMembershipIdentifier),
    object_class: cdktf.stringToTerraform(struct!.objectClass),
    surname: cdktf.stringToTerraform(struct!.surname),
    telephone: cdktf.stringToTerraform(struct!.telephone),
    unique_identifier: cdktf.stringToTerraform(struct!.uniqueIdentifier),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function orgLdapCustomSettingsUserAttributesToHclTerraform(struct?: OrgLdapCustomSettingsUserAttributesOutputReference | OrgLdapCustomSettingsUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_back_link_identifier: {
      value: cdktf.stringToHclTerraform(struct!.groupBackLinkIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_membership_identifier: {
      value: cdktf.stringToHclTerraform(struct!.groupMembershipIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_class: {
      value: cdktf.stringToHclTerraform(struct!.objectClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telephone: {
      value: cdktf.stringToHclTerraform(struct!.telephone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniqueIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLdapCustomSettingsUserAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgLdapCustomSettingsUserAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._groupBackLinkIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBackLinkIdentifier = this._groupBackLinkIdentifier;
    }
    if (this._groupMembershipIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMembershipIdentifier = this._groupMembershipIdentifier;
    }
    if (this._objectClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClass = this._objectClass;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._telephone !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephone = this._telephone;
    }
    if (this._uniqueIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueIdentifier = this._uniqueIdentifier;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLdapCustomSettingsUserAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._email = undefined;
      this._givenName = undefined;
      this._groupBackLinkIdentifier = undefined;
      this._groupMembershipIdentifier = undefined;
      this._objectClass = undefined;
      this._surname = undefined;
      this._telephone = undefined;
      this._uniqueIdentifier = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._email = value.email;
      this._givenName = value.givenName;
      this._groupBackLinkIdentifier = value.groupBackLinkIdentifier;
      this._groupMembershipIdentifier = value.groupMembershipIdentifier;
      this._objectClass = value.objectClass;
      this._surname = value.surname;
      this._telephone = value.telephone;
      this._uniqueIdentifier = value.uniqueIdentifier;
      this._username = value.username;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

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

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // group_back_link_identifier - computed: false, optional: true, required: false
  private _groupBackLinkIdentifier?: string; 
  public get groupBackLinkIdentifier() {
    return this.getStringAttribute('group_back_link_identifier');
  }
  public set groupBackLinkIdentifier(value: string) {
    this._groupBackLinkIdentifier = value;
  }
  public resetGroupBackLinkIdentifier() {
    this._groupBackLinkIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBackLinkIdentifierInput() {
    return this._groupBackLinkIdentifier;
  }

  // group_membership_identifier - computed: false, optional: false, required: true
  private _groupMembershipIdentifier?: string; 
  public get groupMembershipIdentifier() {
    return this.getStringAttribute('group_membership_identifier');
  }
  public set groupMembershipIdentifier(value: string) {
    this._groupMembershipIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipIdentifierInput() {
    return this._groupMembershipIdentifier;
  }

  // object_class - computed: false, optional: false, required: true
  private _objectClass?: string; 
  public get objectClass() {
    return this.getStringAttribute('object_class');
  }
  public set objectClass(value: string) {
    this._objectClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassInput() {
    return this._objectClass;
  }

  // surname - computed: false, optional: false, required: true
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // telephone - computed: false, optional: false, required: true
  private _telephone?: string; 
  public get telephone() {
    return this.getStringAttribute('telephone');
  }
  public set telephone(value: string) {
    this._telephone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneInput() {
    return this._telephone;
  }

  // unique_identifier - computed: false, optional: false, required: true
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentifierInput() {
    return this._uniqueIdentifier;
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
}
export interface OrgLdapCustomSettings {
  /**
  * authentication method: one of SIMPLE, MD5DIGEST, NTLM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#authentication_method OrgLdap#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * LDAP search base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#base_distinguished_name OrgLdap#base_distinguished_name}
  */
  readonly baseDistinguishedName?: string;
  /**
  * type of connector: one of OPEN_LDAP, ACTIVE_DIRECTORY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#connector_type OrgLdap#connector_type}
  */
  readonly connectorType: string;
  /**
  * True if the LDAP service requires an SSL connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#is_ssl OrgLdap#is_ssl}
  */
  readonly isSsl?: boolean | cdktf.IResolvable;
  /**
  * Password for the user identified by UserName. This value is never returned by GET. It is inspected on create and modify. On modify, the absence of this element indicates that the password should not be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#password OrgLdap#password}
  */
  readonly password?: string;
  /**
  * Port number for LDAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#port OrgLdap#port}
  */
  readonly port: number;
  /**
  * host name or IP of the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#server OrgLdap#server}
  */
  readonly server: string;
  /**
  * Username to use when logging in to LDAP, specified using LDAP attribute=value pairs (for example: cn="ldap-admin", c="example", dc="com")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#username OrgLdap#username}
  */
  readonly username?: string;
  /**
  * group_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#group_attributes OrgLdap#group_attributes}
  */
  readonly groupAttributes: OrgLdapCustomSettingsGroupAttributes;
  /**
  * user_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#user_attributes OrgLdap#user_attributes}
  */
  readonly userAttributes: OrgLdapCustomSettingsUserAttributes;
}

export function orgLdapCustomSettingsToTerraform(struct?: OrgLdapCustomSettingsOutputReference | OrgLdapCustomSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    base_distinguished_name: cdktf.stringToTerraform(struct!.baseDistinguishedName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    is_ssl: cdktf.booleanToTerraform(struct!.isSsl),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
    group_attributes: orgLdapCustomSettingsGroupAttributesToTerraform(struct!.groupAttributes),
    user_attributes: orgLdapCustomSettingsUserAttributesToTerraform(struct!.userAttributes),
  }
}


export function orgLdapCustomSettingsToHclTerraform(struct?: OrgLdapCustomSettingsOutputReference | OrgLdapCustomSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.baseDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.isSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_attributes: {
      value: orgLdapCustomSettingsGroupAttributesToHclTerraform(struct!.groupAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OrgLdapCustomSettingsGroupAttributesList",
    },
    user_attributes: {
      value: orgLdapCustomSettingsUserAttributesToHclTerraform(struct!.userAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OrgLdapCustomSettingsUserAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLdapCustomSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgLdapCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._baseDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDistinguishedName = this._baseDistinguishedName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._isSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsl = this._isSsl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._groupAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributes = this._groupAttributes?.internalValue;
    }
    if (this._userAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributes = this._userAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLdapCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._baseDistinguishedName = undefined;
      this._connectorType = undefined;
      this._isSsl = undefined;
      this._password = undefined;
      this._port = undefined;
      this._server = undefined;
      this._username = undefined;
      this._groupAttributes.internalValue = undefined;
      this._userAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._baseDistinguishedName = value.baseDistinguishedName;
      this._connectorType = value.connectorType;
      this._isSsl = value.isSsl;
      this._password = value.password;
      this._port = value.port;
      this._server = value.server;
      this._username = value.username;
      this._groupAttributes.internalValue = value.groupAttributes;
      this._userAttributes.internalValue = value.userAttributes;
    }
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // base_distinguished_name - computed: false, optional: true, required: false
  private _baseDistinguishedName?: string; 
  public get baseDistinguishedName() {
    return this.getStringAttribute('base_distinguished_name');
  }
  public set baseDistinguishedName(value: string) {
    this._baseDistinguishedName = value;
  }
  public resetBaseDistinguishedName() {
    this._baseDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDistinguishedNameInput() {
    return this._baseDistinguishedName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // is_ssl - computed: false, optional: true, required: false
  private _isSsl?: boolean | cdktf.IResolvable; 
  public get isSsl() {
    return this.getBooleanAttribute('is_ssl');
  }
  public set isSsl(value: boolean | cdktf.IResolvable) {
    this._isSsl = value;
  }
  public resetIsSsl() {
    this._isSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslInput() {
    return this._isSsl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // group_attributes - computed: false, optional: false, required: true
  private _groupAttributes = new OrgLdapCustomSettingsGroupAttributesOutputReference(this, "group_attributes");
  public get groupAttributes() {
    return this._groupAttributes;
  }
  public putGroupAttributes(value: OrgLdapCustomSettingsGroupAttributes) {
    this._groupAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributesInput() {
    return this._groupAttributes.internalValue;
  }

  // user_attributes - computed: false, optional: false, required: true
  private _userAttributes = new OrgLdapCustomSettingsUserAttributesOutputReference(this, "user_attributes");
  public get userAttributes() {
    return this._userAttributes;
  }
  public putUserAttributes(value: OrgLdapCustomSettingsUserAttributes) {
    this._userAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap vcd_org_ldap}
*/
export class OrgLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgLdap to import
  * @param importFromId The id of the existing OrgLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_ldap vcd_org_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgLdapConfig
  */
  public constructor(scope: Construct, id: string, config: OrgLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_ldap',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customUserOu = config.customUserOu;
    this._id = config.id;
    this._ldapMode = config.ldapMode;
    this._orgId = config.orgId;
    this._customSettings.internalValue = config.customSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_user_ou - computed: false, optional: true, required: false
  private _customUserOu?: string; 
  public get customUserOu() {
    return this.getStringAttribute('custom_user_ou');
  }
  public set customUserOu(value: string) {
    this._customUserOu = value;
  }
  public resetCustomUserOu() {
    this._customUserOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserOuInput() {
    return this._customUserOu;
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

  // ldap_mode - computed: false, optional: false, required: true
  private _ldapMode?: string; 
  public get ldapMode() {
    return this.getStringAttribute('ldap_mode');
  }
  public set ldapMode(value: string) {
    this._ldapMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapModeInput() {
    return this._ldapMode;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new OrgLdapCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: OrgLdapCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_user_ou: cdktf.stringToTerraform(this._customUserOu),
      id: cdktf.stringToTerraform(this._id),
      ldap_mode: cdktf.stringToTerraform(this._ldapMode),
      org_id: cdktf.stringToTerraform(this._orgId),
      custom_settings: orgLdapCustomSettingsToTerraform(this._customSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_user_ou: {
        value: cdktf.stringToHclTerraform(this._customUserOu),
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
      ldap_mode: {
        value: cdktf.stringToHclTerraform(this._ldapMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_settings: {
        value: orgLdapCustomSettingsToHclTerraform(this._customSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgLdapCustomSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
