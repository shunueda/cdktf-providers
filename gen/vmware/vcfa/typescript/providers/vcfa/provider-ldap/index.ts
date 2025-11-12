// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines if the LDAP certificate should automatically be trusted, only makes sense if 'is_ssl=true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#auto_trust_certificate ProviderLdap#auto_trust_certificate}
  */
  readonly autoTrustCertificate: boolean | cdktf.IResolvable;
  /**
  * LDAP search base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#base_distinguished_name ProviderLdap#base_distinguished_name}
  */
  readonly baseDistinguishedName: string;
  /**
  * Type of connector: one of OPEN_LDAP, ACTIVE_DIRECTORY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#connector_type ProviderLdap#connector_type}
  */
  readonly connectorType: string;
  /**
  * If you provide a custom button label, on the login screen, the custom label replaces the default label for this identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#custom_ui_button_label ProviderLdap#custom_ui_button_label}
  */
  readonly customUiButtonLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#id ProviderLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if the LDAP service requires an SSL connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#is_ssl ProviderLdap#is_ssl}
  */
  readonly isSsl?: boolean | cdktf.IResolvable;
  /**
  * Password for the user identified by UserName. This value is never returned back. It is inspected on create and modify. On modify, the absence of this element indicates that the password should not be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#password ProviderLdap#password}
  */
  readonly password?: string;
  /**
  * Port number for LDAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#port ProviderLdap#port}
  */
  readonly port: number;
  /**
  * host name or IP of the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#server ProviderLdap#server}
  */
  readonly server: string;
  /**
  * Username to use when logging in to LDAP, specified using LDAP attribute=value pairs (for example: cn="ldap-admin", c="example", dc="com")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#username ProviderLdap#username}
  */
  readonly username?: string;
  /**
  * group_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#group_attributes ProviderLdap#group_attributes}
  */
  readonly groupAttributes: ProviderLdapGroupAttributes;
  /**
  * user_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#user_attributes ProviderLdap#user_attributes}
  */
  readonly userAttributes: ProviderLdapUserAttributes;
}
export interface ProviderLdapGroupAttributes {
  /**
  * LDAP group attribute used to identify a group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#group_back_link_identifier ProviderLdap#group_back_link_identifier}
  */
  readonly groupBackLinkIdentifier?: string;
  /**
  * LDAP attribute that identifies a group as a member of another group. For example, the 'dn' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#group_membership_identifier ProviderLdap#group_membership_identifier}
  */
  readonly groupMembershipIdentifier: string;
  /**
  * LDAP attribute to use when getting the members of a group. For example, the 'member' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#membership ProviderLdap#membership}
  */
  readonly membership: string;
  /**
  * LDAP attribute to use for the group name. For example, the 'cn' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#name ProviderLdap#name}
  */
  readonly name: string;
  /**
  * LDAP objectClass of which imported groups are members. For example, the 'group' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#object_class ProviderLdap#object_class}
  */
  readonly objectClass: string;
  /**
  * LDAP attribute to use as the unique identifier for a group. For example, the 'objectGuid' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#unique_identifier ProviderLdap#unique_identifier}
  */
  readonly uniqueIdentifier: string;
}

export function providerLdapGroupAttributesToTerraform(struct?: ProviderLdapGroupAttributesOutputReference | ProviderLdapGroupAttributes): any {
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


export function providerLdapGroupAttributesToHclTerraform(struct?: ProviderLdapGroupAttributesOutputReference | ProviderLdapGroupAttributes): any {
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

export class ProviderLdapGroupAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderLdapGroupAttributes | undefined {
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

  public set internalValue(value: ProviderLdapGroupAttributes | undefined) {
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
export interface ProviderLdapUserAttributes {
  /**
  * LDAP attribute to use for the user's full name. For example, the 'displayName' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#display_name ProviderLdap#display_name}
  */
  readonly displayName: string;
  /**
  * LDAP attribute to use for the user's email address. For example, the 'mail' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#email ProviderLdap#email}
  */
  readonly email: string;
  /**
  * LDAP attribute to use for the user's given name. For example, the 'givenName' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#given_name ProviderLdap#given_name}
  */
  readonly givenName: string;
  /**
  * LDAP attribute that returns the identifiers of all the groups of which the user is a member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#group_back_link_identifier ProviderLdap#group_back_link_identifier}
  */
  readonly groupBackLinkIdentifier?: string;
  /**
  * LDAP attribute that identifies a user as a member of a group. For example, the 'dn' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#group_membership_identifier ProviderLdap#group_membership_identifier}
  */
  readonly groupMembershipIdentifier: string;
  /**
  * LDAP objectClass of which imported users are members. For example, 'user' or 'person' attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#object_class ProviderLdap#object_class}
  */
  readonly objectClass: string;
  /**
  * LDAP attribute to use for the user's surname. For example, the 'sn' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#surname ProviderLdap#surname}
  */
  readonly surname: string;
  /**
  * LDAP attribute to use for the user's telephone number. For example, the 'telephoneNumber' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#telephone ProviderLdap#telephone}
  */
  readonly telephone: string;
  /**
  * LDAP attribute to use as the unique identifier for a user. For example, the 'objectGuid' attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#unique_identifier ProviderLdap#unique_identifier}
  */
  readonly uniqueIdentifier: string;
  /**
  * LDAP attribute to use when looking up a user name to import. For example, 'userPrincipalName' or 'samAccountName' attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#username ProviderLdap#username}
  */
  readonly username: string;
}

export function providerLdapUserAttributesToTerraform(struct?: ProviderLdapUserAttributesOutputReference | ProviderLdapUserAttributes): any {
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


export function providerLdapUserAttributesToHclTerraform(struct?: ProviderLdapUserAttributesOutputReference | ProviderLdapUserAttributes): any {
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

export class ProviderLdapUserAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderLdapUserAttributes | undefined {
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

  public set internalValue(value: ProviderLdapUserAttributes | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap vcfa_provider_ldap}
*/
export class ProviderLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_provider_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderLdap to import
  * @param importFromId The id of the existing ProviderLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_provider_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_ldap vcfa_provider_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderLdapConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_provider_ldap',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoTrustCertificate = config.autoTrustCertificate;
    this._baseDistinguishedName = config.baseDistinguishedName;
    this._connectorType = config.connectorType;
    this._customUiButtonLabel = config.customUiButtonLabel;
    this._id = config.id;
    this._isSsl = config.isSsl;
    this._password = config.password;
    this._port = config.port;
    this._server = config.server;
    this._username = config.username;
    this._groupAttributes.internalValue = config.groupAttributes;
    this._userAttributes.internalValue = config.userAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_trust_certificate - computed: false, optional: false, required: true
  private _autoTrustCertificate?: boolean | cdktf.IResolvable; 
  public get autoTrustCertificate() {
    return this.getBooleanAttribute('auto_trust_certificate');
  }
  public set autoTrustCertificate(value: boolean | cdktf.IResolvable) {
    this._autoTrustCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTrustCertificateInput() {
    return this._autoTrustCertificate;
  }

  // base_distinguished_name - computed: false, optional: false, required: true
  private _baseDistinguishedName?: string; 
  public get baseDistinguishedName() {
    return this.getStringAttribute('base_distinguished_name');
  }
  public set baseDistinguishedName(value: string) {
    this._baseDistinguishedName = value;
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

  // custom_ui_button_label - computed: false, optional: true, required: false
  private _customUiButtonLabel?: string; 
  public get customUiButtonLabel() {
    return this.getStringAttribute('custom_ui_button_label');
  }
  public set customUiButtonLabel(value: string) {
    this._customUiButtonLabel = value;
  }
  public resetCustomUiButtonLabel() {
    this._customUiButtonLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUiButtonLabelInput() {
    return this._customUiButtonLabel;
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
  private _groupAttributes = new ProviderLdapGroupAttributesOutputReference(this, "group_attributes");
  public get groupAttributes() {
    return this._groupAttributes;
  }
  public putGroupAttributes(value: ProviderLdapGroupAttributes) {
    this._groupAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributesInput() {
    return this._groupAttributes.internalValue;
  }

  // user_attributes - computed: false, optional: false, required: true
  private _userAttributes = new ProviderLdapUserAttributesOutputReference(this, "user_attributes");
  public get userAttributes() {
    return this._userAttributes;
  }
  public putUserAttributes(value: ProviderLdapUserAttributes) {
    this._userAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_trust_certificate: cdktf.booleanToTerraform(this._autoTrustCertificate),
      base_distinguished_name: cdktf.stringToTerraform(this._baseDistinguishedName),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      custom_ui_button_label: cdktf.stringToTerraform(this._customUiButtonLabel),
      id: cdktf.stringToTerraform(this._id),
      is_ssl: cdktf.booleanToTerraform(this._isSsl),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      username: cdktf.stringToTerraform(this._username),
      group_attributes: providerLdapGroupAttributesToTerraform(this._groupAttributes.internalValue),
      user_attributes: providerLdapUserAttributesToTerraform(this._userAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_trust_certificate: {
        value: cdktf.booleanToHclTerraform(this._autoTrustCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._baseDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ui_button_label: {
        value: cdktf.stringToHclTerraform(this._customUiButtonLabel),
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
      is_ssl: {
        value: cdktf.booleanToHclTerraform(this._isSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_attributes: {
        value: providerLdapGroupAttributesToHclTerraform(this._groupAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderLdapGroupAttributesList",
      },
      user_attributes: {
        value: providerLdapUserAttributesToHclTerraform(this._userAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderLdapUserAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
