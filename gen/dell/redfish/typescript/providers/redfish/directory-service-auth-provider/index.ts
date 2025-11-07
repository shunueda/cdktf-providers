// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceAuthProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active DirectoryNote: `active_directory` is mutually inclusive with `active_directory_attributes`. , Note: `active_directory` is mutually exclusive with `ldap`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#active_directory DirectoryServiceAuthProvider#active_directory}
  */
  readonly activeDirectory?: DirectoryServiceAuthProviderActiveDirectory;
  /**
  * ActiveDirectory.* attributes in Dell iDRAC attributes.Note: `active_directory` is mutually inclusive with `active_directory_attributes`. , Note: `active_directory_attributes` is mutually exclusive with `ldap_attributes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#active_directory_attributes DirectoryServiceAuthProvider#active_directory_attributes}
  */
  readonly activeDirectoryAttributes?: { [key: string]: string };
  /**
  * LDAPNote: `ldap` is mutually inclusive with `ldap_attributes`. , Note: `active_directory` is mutually exclusive with `ldap`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#ldap DirectoryServiceAuthProvider#ldap}
  */
  readonly ldap?: DirectoryServiceAuthProviderLdap;
  /**
  * LDAP.* attributes in Dell iDRAC attributes.Note: `ldap` is mutually inclusive with `ldap_attributes`. , Note: `active_directory_attributes` is mutually exclusive with `ldap_attributes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#ldap_attributes DirectoryServiceAuthProvider#ldap_attributes}
  */
  readonly ldapAttributes?: { [key: string]: string };
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#redfish_server DirectoryServiceAuthProvider#redfish_server}
  */
  readonly redfishServer?: DirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable;
}
export interface DirectoryServiceAuthProviderActiveDirectoryAuthentication {
  /**
  * KerberosKeytab is a Base64-encoded version of the Kerberos keytab for this Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#kerberos_key_tab_file DirectoryServiceAuthProvider#kerberos_key_tab_file}
  */
  readonly kerberosKeyTabFile?: string;
}

export function directoryServiceAuthProviderActiveDirectoryAuthenticationToTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_key_tab_file: cdktf.stringToTerraform(struct!.kerberosKeyTabFile),
  }
}


export function directoryServiceAuthProviderActiveDirectoryAuthenticationToHclTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_key_tab_file: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKeyTabFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderActiveDirectoryAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderActiveDirectoryAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosKeyTabFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeyTabFile = this._kerberosKeyTabFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderActiveDirectoryAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberosKeyTabFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberosKeyTabFile = value.kerberosKeyTabFile;
    }
  }

  // kerberos_key_tab_file - computed: true, optional: true, required: false
  private _kerberosKeyTabFile?: string; 
  public get kerberosKeyTabFile() {
    return this.getStringAttribute('kerberos_key_tab_file');
  }
  public set kerberosKeyTabFile(value: string) {
    this._kerberosKeyTabFile = value;
  }
  public resetKerberosKeyTabFile() {
    this._kerberosKeyTabFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeyTabFileInput() {
    return this._kerberosKeyTabFile;
  }
}
export interface DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping {
  /**
  * Role Assigned to the Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#local_role DirectoryServiceAuthProvider#local_role}
  */
  readonly localRole?: string;
  /**
  * Name of the remote group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#remote_group DirectoryServiceAuthProvider#remote_group}
  */
  readonly remoteGroup?: string;
}

export function directoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_role: cdktf.stringToTerraform(struct!.localRole),
    remote_group: cdktf.stringToTerraform(struct!.remoteGroup),
  }
}


export function directoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToHclTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_role: {
      value: cdktf.stringToHclTerraform(struct!.localRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_group: {
      value: cdktf.stringToHclTerraform(struct!.remoteGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRole = this._localRole;
    }
    if (this._remoteGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGroup = this._remoteGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localRole = undefined;
      this._remoteGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localRole = value.localRole;
      this._remoteGroup = value.remoteGroup;
    }
  }

  // local_role - computed: true, optional: true, required: false
  private _localRole?: string; 
  public get localRole() {
    return this.getStringAttribute('local_role');
  }
  public set localRole(value: string) {
    this._localRole = value;
  }
  public resetLocalRole() {
    this._localRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoleInput() {
    return this._localRole;
  }

  // remote_group - computed: true, optional: true, required: false
  private _remoteGroup?: string; 
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
  public set remoteGroup(value: string) {
    this._remoteGroup = value;
  }
  public resetRemoteGroup() {
    this._remoteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupInput() {
    return this._remoteGroup;
  }
}

export class DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingList extends cdktf.ComplexList {
  public internalValue? : DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference {
    return new DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServiceAuthProviderActiveDirectoryDirectory {
  /**
  * Mapping rules that are used to convert the account providers account information to the local Redfish role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#remote_role_mapping DirectoryServiceAuthProvider#remote_role_mapping}
  */
  readonly remoteRoleMapping?: DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping[] | cdktf.IResolvable;
  /**
  * ServiceAddresses of the account providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#service_addresses DirectoryServiceAuthProvider#service_addresses}
  */
  readonly serviceAddresses?: string[];
  /**
  * ServiceEnabled indicate whether this service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#service_enabled DirectoryServiceAuthProvider#service_enabled}
  */
  readonly serviceEnabled?: boolean | cdktf.IResolvable;
}

export function directoryServiceAuthProviderActiveDirectoryDirectoryToTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_role_mapping: cdktf.listMapper(directoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToTerraform, false)(struct!.remoteRoleMapping),
    service_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddresses),
    service_enabled: cdktf.booleanToTerraform(struct!.serviceEnabled),
  }
}


export function directoryServiceAuthProviderActiveDirectoryDirectoryToHclTerraform(struct?: DirectoryServiceAuthProviderActiveDirectoryDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_role_mapping: {
      value: cdktf.listMapperHcl(directoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToHclTerraform, false)(struct!.remoteRoleMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingList",
    },
    service_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderActiveDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderActiveDirectoryDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteRoleMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRoleMapping = this._remoteRoleMapping?.internalValue;
    }
    if (this._serviceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddresses = this._serviceAddresses;
    }
    if (this._serviceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEnabled = this._serviceEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderActiveDirectoryDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteRoleMapping.internalValue = undefined;
      this._serviceAddresses = undefined;
      this._serviceEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteRoleMapping.internalValue = value.remoteRoleMapping;
      this._serviceAddresses = value.serviceAddresses;
      this._serviceEnabled = value.serviceEnabled;
    }
  }

  // remote_role_mapping - computed: true, optional: true, required: false
  private _remoteRoleMapping = new DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingList(this, "remote_role_mapping", false);
  public get remoteRoleMapping() {
    return this._remoteRoleMapping;
  }
  public putRemoteRoleMapping(value: DirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping[] | cdktf.IResolvable) {
    this._remoteRoleMapping.internalValue = value;
  }
  public resetRemoteRoleMapping() {
    this._remoteRoleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRoleMappingInput() {
    return this._remoteRoleMapping.internalValue;
  }

  // service_addresses - computed: true, optional: true, required: false
  private _serviceAddresses?: string[]; 
  public get serviceAddresses() {
    return this.getListAttribute('service_addresses');
  }
  public set serviceAddresses(value: string[]) {
    this._serviceAddresses = value;
  }
  public resetServiceAddresses() {
    this._serviceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressesInput() {
    return this._serviceAddresses;
  }

  // service_enabled - computed: true, optional: true, required: false
  private _serviceEnabled?: boolean | cdktf.IResolvable; 
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
  public set serviceEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceEnabled = value;
  }
  public resetServiceEnabled() {
    this._serviceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnabledInput() {
    return this._serviceEnabled;
  }
}
export interface DirectoryServiceAuthProviderActiveDirectory {
  /**
  * Authentication information for the account provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#authentication DirectoryServiceAuthProvider#authentication}
  */
  readonly authentication?: DirectoryServiceAuthProviderActiveDirectoryAuthentication;
  /**
  * Directory for Active Directory .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#directory DirectoryServiceAuthProvider#directory}
  */
  readonly directory?: DirectoryServiceAuthProviderActiveDirectoryDirectory;
}

export function directoryServiceAuthProviderActiveDirectoryToTerraform(struct?: DirectoryServiceAuthProviderActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: directoryServiceAuthProviderActiveDirectoryAuthenticationToTerraform(struct!.authentication),
    directory: directoryServiceAuthProviderActiveDirectoryDirectoryToTerraform(struct!.directory),
  }
}


export function directoryServiceAuthProviderActiveDirectoryToHclTerraform(struct?: DirectoryServiceAuthProviderActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: directoryServiceAuthProviderActiveDirectoryAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DirectoryServiceAuthProviderActiveDirectoryAuthentication",
    },
    directory: {
      value: directoryServiceAuthProviderActiveDirectoryDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DirectoryServiceAuthProviderActiveDirectoryDirectory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderActiveDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderActiveDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._directory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._directory.internalValue = value.directory;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DirectoryServiceAuthProviderActiveDirectoryAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DirectoryServiceAuthProviderActiveDirectoryAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // directory - computed: true, optional: true, required: false
  private _directory = new DirectoryServiceAuthProviderActiveDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DirectoryServiceAuthProviderActiveDirectoryDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }
}
export interface DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping {
  /**
  * Role Assigned to the Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#local_role DirectoryServiceAuthProvider#local_role}
  */
  readonly localRole?: string;
  /**
  * Name of the remote group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#remote_group DirectoryServiceAuthProvider#remote_group}
  */
  readonly remoteGroup?: string;
}

export function directoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToTerraform(struct?: DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_role: cdktf.stringToTerraform(struct!.localRole),
    remote_group: cdktf.stringToTerraform(struct!.remoteGroup),
  }
}


export function directoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToHclTerraform(struct?: DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_role: {
      value: cdktf.stringToHclTerraform(struct!.localRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_group: {
      value: cdktf.stringToHclTerraform(struct!.remoteGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRole = this._localRole;
    }
    if (this._remoteGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGroup = this._remoteGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localRole = undefined;
      this._remoteGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localRole = value.localRole;
      this._remoteGroup = value.remoteGroup;
    }
  }

  // local_role - computed: true, optional: true, required: false
  private _localRole?: string; 
  public get localRole() {
    return this.getStringAttribute('local_role');
  }
  public set localRole(value: string) {
    this._localRole = value;
  }
  public resetLocalRole() {
    this._localRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoleInput() {
    return this._localRole;
  }

  // remote_group - computed: true, optional: true, required: false
  private _remoteGroup?: string; 
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
  public set remoteGroup(value: string) {
    this._remoteGroup = value;
  }
  public resetRemoteGroup() {
    this._remoteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupInput() {
    return this._remoteGroup;
  }
}

export class DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingList extends cdktf.ComplexList {
  public internalValue? : DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference {
    return new DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServiceAuthProviderLdapDirectory {
  /**
  * Mapping rules that are used to convert the account providers account information to the local Redfish role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#remote_role_mapping DirectoryServiceAuthProvider#remote_role_mapping}
  */
  readonly remoteRoleMapping?: DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping[] | cdktf.IResolvable;
  /**
  * ServiceAddresses of the account providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#service_addresses DirectoryServiceAuthProvider#service_addresses}
  */
  readonly serviceAddresses?: string[];
  /**
  * ServiceEnabled indicate whether this service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#service_enabled DirectoryServiceAuthProvider#service_enabled}
  */
  readonly serviceEnabled?: boolean | cdktf.IResolvable;
}

export function directoryServiceAuthProviderLdapDirectoryToTerraform(struct?: DirectoryServiceAuthProviderLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_role_mapping: cdktf.listMapper(directoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToTerraform, false)(struct!.remoteRoleMapping),
    service_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddresses),
    service_enabled: cdktf.booleanToTerraform(struct!.serviceEnabled),
  }
}


export function directoryServiceAuthProviderLdapDirectoryToHclTerraform(struct?: DirectoryServiceAuthProviderLdapDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_role_mapping: {
      value: cdktf.listMapperHcl(directoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToHclTerraform, false)(struct!.remoteRoleMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingList",
    },
    service_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderLdapDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteRoleMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRoleMapping = this._remoteRoleMapping?.internalValue;
    }
    if (this._serviceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddresses = this._serviceAddresses;
    }
    if (this._serviceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEnabled = this._serviceEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderLdapDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteRoleMapping.internalValue = undefined;
      this._serviceAddresses = undefined;
      this._serviceEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteRoleMapping.internalValue = value.remoteRoleMapping;
      this._serviceAddresses = value.serviceAddresses;
      this._serviceEnabled = value.serviceEnabled;
    }
  }

  // remote_role_mapping - computed: true, optional: true, required: false
  private _remoteRoleMapping = new DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingList(this, "remote_role_mapping", false);
  public get remoteRoleMapping() {
    return this._remoteRoleMapping;
  }
  public putRemoteRoleMapping(value: DirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping[] | cdktf.IResolvable) {
    this._remoteRoleMapping.internalValue = value;
  }
  public resetRemoteRoleMapping() {
    this._remoteRoleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRoleMappingInput() {
    return this._remoteRoleMapping.internalValue;
  }

  // service_addresses - computed: true, optional: true, required: false
  private _serviceAddresses?: string[]; 
  public get serviceAddresses() {
    return this.getListAttribute('service_addresses');
  }
  public set serviceAddresses(value: string[]) {
    this._serviceAddresses = value;
  }
  public resetServiceAddresses() {
    this._serviceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressesInput() {
    return this._serviceAddresses;
  }

  // service_enabled - computed: true, optional: true, required: false
  private _serviceEnabled?: boolean | cdktf.IResolvable; 
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
  public set serviceEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceEnabled = value;
  }
  public resetServiceEnabled() {
    this._serviceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnabledInput() {
    return this._serviceEnabled;
  }
}
export interface DirectoryServiceAuthProviderLdapLdapServiceSearchSettings {
  /**
  * BaseDistinguishedNames is an array of base distinguished names to use to search an external LDAP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#base_distinguished_names DirectoryServiceAuthProvider#base_distinguished_names}
  */
  readonly baseDistinguishedNames?: string[];
  /**
  * GroupNameAttribute is the attribute name that contains the LDAP group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#group_name_attribute DirectoryServiceAuthProvider#group_name_attribute}
  */
  readonly groupNameAttribute?: string;
  /**
  * UsernameAttribute is the attribute name that contains the LDAP user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#user_name_attribute DirectoryServiceAuthProvider#user_name_attribute}
  */
  readonly userNameAttribute?: string;
}

export function directoryServiceAuthProviderLdapLdapServiceSearchSettingsToTerraform(struct?: DirectoryServiceAuthProviderLdapLdapServiceSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_distinguished_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.baseDistinguishedNames),
    group_name_attribute: cdktf.stringToTerraform(struct!.groupNameAttribute),
    user_name_attribute: cdktf.stringToTerraform(struct!.userNameAttribute),
  }
}


export function directoryServiceAuthProviderLdapLdapServiceSearchSettingsToHclTerraform(struct?: DirectoryServiceAuthProviderLdapLdapServiceSearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_distinguished_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.baseDistinguishedNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderLdapLdapServiceSearchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderLdapLdapServiceSearchSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDistinguishedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDistinguishedNames = this._baseDistinguishedNames;
    }
    if (this._groupNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameAttribute = this._groupNameAttribute;
    }
    if (this._userNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttribute = this._userNameAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderLdapLdapServiceSearchSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDistinguishedNames = undefined;
      this._groupNameAttribute = undefined;
      this._userNameAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDistinguishedNames = value.baseDistinguishedNames;
      this._groupNameAttribute = value.groupNameAttribute;
      this._userNameAttribute = value.userNameAttribute;
    }
  }

  // base_distinguished_names - computed: true, optional: true, required: false
  private _baseDistinguishedNames?: string[]; 
  public get baseDistinguishedNames() {
    return this.getListAttribute('base_distinguished_names');
  }
  public set baseDistinguishedNames(value: string[]) {
    this._baseDistinguishedNames = value;
  }
  public resetBaseDistinguishedNames() {
    this._baseDistinguishedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDistinguishedNamesInput() {
    return this._baseDistinguishedNames;
  }

  // group_name_attribute - computed: true, optional: true, required: false
  private _groupNameAttribute?: string; 
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }
  public set groupNameAttribute(value: string) {
    this._groupNameAttribute = value;
  }
  public resetGroupNameAttribute() {
    this._groupNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameAttributeInput() {
    return this._groupNameAttribute;
  }

  // user_name_attribute - computed: true, optional: true, required: false
  private _userNameAttribute?: string; 
  public get userNameAttribute() {
    return this.getStringAttribute('user_name_attribute');
  }
  public set userNameAttribute(value: string) {
    this._userNameAttribute = value;
  }
  public resetUserNameAttribute() {
    this._userNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeInput() {
    return this._userNameAttribute;
  }
}
export interface DirectoryServiceAuthProviderLdapLdapService {
  /**
  * SearchSettings is the required settings to search an external LDAP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#search_settings DirectoryServiceAuthProvider#search_settings}
  */
  readonly searchSettings?: DirectoryServiceAuthProviderLdapLdapServiceSearchSettings;
}

export function directoryServiceAuthProviderLdapLdapServiceToTerraform(struct?: DirectoryServiceAuthProviderLdapLdapService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_settings: directoryServiceAuthProviderLdapLdapServiceSearchSettingsToTerraform(struct!.searchSettings),
  }
}


export function directoryServiceAuthProviderLdapLdapServiceToHclTerraform(struct?: DirectoryServiceAuthProviderLdapLdapService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_settings: {
      value: directoryServiceAuthProviderLdapLdapServiceSearchSettingsToHclTerraform(struct!.searchSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DirectoryServiceAuthProviderLdapLdapServiceSearchSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderLdapLdapServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderLdapLdapService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSettings = this._searchSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderLdapLdapService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchSettings.internalValue = value.searchSettings;
    }
  }

  // search_settings - computed: true, optional: true, required: false
  private _searchSettings = new DirectoryServiceAuthProviderLdapLdapServiceSearchSettingsOutputReference(this, "search_settings");
  public get searchSettings() {
    return this._searchSettings;
  }
  public putSearchSettings(value: DirectoryServiceAuthProviderLdapLdapServiceSearchSettings) {
    this._searchSettings.internalValue = value;
  }
  public resetSearchSettings() {
    this._searchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSettingsInput() {
    return this._searchSettings.internalValue;
  }
}
export interface DirectoryServiceAuthProviderLdap {
  /**
  * Directory for LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#directory DirectoryServiceAuthProvider#directory}
  */
  readonly directory?: DirectoryServiceAuthProviderLdapDirectory;
  /**
  * LDAPService is any additional mapping information needed to parse a generic LDAP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#ldap_service DirectoryServiceAuthProvider#ldap_service}
  */
  readonly ldapService?: DirectoryServiceAuthProviderLdapLdapService;
}

export function directoryServiceAuthProviderLdapToTerraform(struct?: DirectoryServiceAuthProviderLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: directoryServiceAuthProviderLdapDirectoryToTerraform(struct!.directory),
    ldap_service: directoryServiceAuthProviderLdapLdapServiceToTerraform(struct!.ldapService),
  }
}


export function directoryServiceAuthProviderLdapToHclTerraform(struct?: DirectoryServiceAuthProviderLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: directoryServiceAuthProviderLdapDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DirectoryServiceAuthProviderLdapDirectory",
    },
    ldap_service: {
      value: directoryServiceAuthProviderLdapLdapServiceToHclTerraform(struct!.ldapService),
      isBlock: true,
      type: "struct",
      storageClassType: "DirectoryServiceAuthProviderLdapLdapService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceAuthProviderLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._ldapService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapService = this._ldapService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory.internalValue = undefined;
      this._ldapService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory.internalValue = value.directory;
      this._ldapService.internalValue = value.ldapService;
    }
  }

  // directory - computed: true, optional: true, required: false
  private _directory = new DirectoryServiceAuthProviderLdapDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DirectoryServiceAuthProviderLdapDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // ldap_service - computed: true, optional: true, required: false
  private _ldapService = new DirectoryServiceAuthProviderLdapLdapServiceOutputReference(this, "ldap_service");
  public get ldapService() {
    return this._ldapService;
  }
  public putLdapService(value: DirectoryServiceAuthProviderLdapLdapService) {
    this._ldapService.internalValue = value;
  }
  public resetLdapService() {
    this._ldapService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServiceInput() {
    return this._ldapService.internalValue;
  }
}
export interface DirectoryServiceAuthProviderRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#endpoint DirectoryServiceAuthProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#password DirectoryServiceAuthProvider#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#redfish_alias DirectoryServiceAuthProvider#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#ssl_insecure DirectoryServiceAuthProvider#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#user DirectoryServiceAuthProvider#user}
  */
  readonly user?: string;
}

export function directoryServiceAuthProviderRedfishServerToTerraform(struct?: DirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function directoryServiceAuthProviderRedfishServerToHclTerraform(struct?: DirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceAuthProviderRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class DirectoryServiceAuthProviderRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServiceAuthProviderRedfishServerOutputReference {
    return new DirectoryServiceAuthProviderRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider redfish_directory_service_auth_provider}
*/
export class DirectoryServiceAuthProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_directory_service_auth_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryServiceAuthProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryServiceAuthProvider to import
  * @param importFromId The id of the existing DirectoryServiceAuthProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryServiceAuthProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_directory_service_auth_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/directory_service_auth_provider redfish_directory_service_auth_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceAuthProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceAuthProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_directory_service_auth_provider',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDirectory.internalValue = config.activeDirectory;
    this._activeDirectoryAttributes = config.activeDirectoryAttributes;
    this._ldap.internalValue = config.ldap;
    this._ldapAttributes = config.ldapAttributes;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory - computed: true, optional: true, required: false
  private _activeDirectory = new DirectoryServiceAuthProviderActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: DirectoryServiceAuthProviderActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // active_directory_attributes - computed: true, optional: true, required: false
  private _activeDirectoryAttributes?: { [key: string]: string }; 
  public get activeDirectoryAttributes() {
    return this.getStringMapAttribute('active_directory_attributes');
  }
  public set activeDirectoryAttributes(value: { [key: string]: string }) {
    this._activeDirectoryAttributes = value;
  }
  public resetActiveDirectoryAttributes() {
    this._activeDirectoryAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAttributesInput() {
    return this._activeDirectoryAttributes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap - computed: true, optional: true, required: false
  private _ldap = new DirectoryServiceAuthProviderLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DirectoryServiceAuthProviderLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // ldap_attributes - computed: true, optional: true, required: false
  private _ldapAttributes?: { [key: string]: string }; 
  public get ldapAttributes() {
    return this.getStringMapAttribute('ldap_attributes');
  }
  public set ldapAttributes(value: { [key: string]: string }) {
    this._ldapAttributes = value;
  }
  public resetLdapAttributes() {
    this._ldapAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributesInput() {
    return this._ldapAttributes;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DirectoryServiceAuthProviderRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_directory: directoryServiceAuthProviderActiveDirectoryToTerraform(this._activeDirectory.internalValue),
      active_directory_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._activeDirectoryAttributes),
      ldap: directoryServiceAuthProviderLdapToTerraform(this._ldap.internalValue),
      ldap_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._ldapAttributes),
      redfish_server: cdktf.listMapper(directoryServiceAuthProviderRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory: {
        value: directoryServiceAuthProviderActiveDirectoryToHclTerraform(this._activeDirectory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DirectoryServiceAuthProviderActiveDirectory",
      },
      active_directory_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._activeDirectoryAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ldap: {
        value: directoryServiceAuthProviderLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DirectoryServiceAuthProviderLdap",
      },
      ldap_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ldapAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(directoryServiceAuthProviderRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectoryServiceAuthProviderRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
