import * as cdktf from 'cdktf';
import { DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapAttributesList,
DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapClientCertificateOutputReference,
DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference } from './structs1600'
export interface DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks {
}

export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions {
}

export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate {
}

export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsAbstractProvisionedLdap {
}

export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapToTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsAbstractProvisionedLdapToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsAbstractProvisionedLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsAbstractProvisionedLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // bind_password - computed: true, optional: false, required: false
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }

  // client_certificate - computed: true, optional: false, required: false
  private _clientCertificate = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }

  // failover_host - computed: true, optional: false, required: false
  public get failoverHost() {
    return this.getStringAttribute('failover_host');
  }

  // failover_trusted_certificate - computed: true, optional: false, required: false
  private _failoverTrustedCertificate = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapFailoverTrustedCertificateOutputReference(this, "failover_trusted_certificate");
  public get failoverTrustedCertificate() {
    return this._failoverTrustedCertificate;
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // object_classes - computed: true, optional: false, required: false
  public get objectClasses() {
    return this.getStringAttribute('object_classes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // service_account_dn - computed: true, optional: false, required: false
  public get serviceAccountDn() {
    return this.getStringAttribute('service_account_dn');
  }

  // ssh_public_key_support - computed: true, optional: false, required: false
  public get sshPublicKeySupport() {
    return this.getStringAttribute('ssh_public_key_support');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getStringAttribute('tls');
  }

  // trusted_certificate - computed: true, optional: false, required: false
  private _trustedCertificate = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapTrustedCertificateOutputReference(this, "trusted_certificate");
  public get trustedCertificate() {
    return this._trustedCertificate;
  }

  // user_dn - computed: true, optional: false, required: false
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
}
export interface DataKeyhubGroupOwnedSystemsCleanupPeriod {
}

export function dataKeyhubGroupOwnedSystemsCleanupPeriodToTerraform(struct?: DataKeyhubGroupOwnedSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsCleanupPeriodToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsCleanupPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsCleanupPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsCleanupPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsCleanupPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getNumberAttribute('months');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getNumberAttribute('years');
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministratorLinks {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsContentAdministratorLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsContentAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministratorPermissions {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsContentAdministratorPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsContentAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsContentAdministrator {
}

export function dataKeyhubGroupOwnedSystemsContentAdministratorToTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsContentAdministratorToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsContentAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsContentAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsContentAdministrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsContentAdministrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsContentAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsContentAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsContentAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsLinks {
}

export function dataKeyhubGroupOwnedSystemsLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsOwnerLinks {
}

export function dataKeyhubGroupOwnedSystemsOwnerLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOwnerLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsOwnerPermissions {
}

export function dataKeyhubGroupOwnedSystemsOwnerPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsOwnerPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOwnerPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsOwner {
}

export function dataKeyhubGroupOwnedSystemsOwnerToTerraform(struct?: DataKeyhubGroupOwnedSystemsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsOwnerToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsPermissions {
}

export function dataKeyhubGroupOwnedSystemsPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAD {
}

export function dataKeyhubGroupOwnedSystemsProvisionedADToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedADToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedADOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAD | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAD | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sam_account_name_scheme - computed: true, optional: false, required: false
  public get samAccountNameScheme() {
    return this.getStringAttribute('sam_account_name_scheme');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts_writable - computed: true, optional: false, required: false
  public get accountsWritable() {
    return this.getBooleanAttribute('accounts_writable');
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedAzureTenant {
}

export function dataKeyhubGroupOwnedSystemsProvisionedAzureTenantToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedAzureTenantToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedAzureTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedAzureTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedAzureTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedAzureTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // idp_domain - computed: true, optional: false, required: false
  public get idpDomain() {
    return this.getStringAttribute('idp_domain');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificate {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecret {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // share_end_time - computed: true, optional: false, required: false
  public get shareEndTime() {
    return this.getStringAttribute('share_end_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClient {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // client_certificate - computed: true, optional: false, required: false
  private _clientCertificate = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }

  // share_secret_in_vault - computed: true, optional: false, required: false
  public get shareSecretInVault() {
    return this.getBooleanAttribute('share_secret_in_vault');
  }

  // shared_secret - computed: true, optional: false, required: false
  private _sharedSecret = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // freely_useable - computed: true, optional: false, required: false
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getBooleanAttribute('list');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: false, required: false
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributes {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_definition - computed: true, optional: false, required: false
  private _attributeDefinition = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // share_end_time - computed: true, optional: false, required: false
  public get shareEndTime() {
    return this.getStringAttribute('share_end_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2Client {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2Client | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2Client | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_permissions - computed: true, optional: false, required: false
  private _accountPermissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAccountPermissionsList(this, "account_permissions", false);
  public get accountPermissions() {
    return this._accountPermissions;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // callback_uri - computed: true, optional: false, required: false
  public get callbackUri() {
    return this.getStringAttribute('callback_uri');
  }

  // debug_mode - computed: true, optional: false, required: false
  public get debugMode() {
    return this.getBooleanAttribute('debug_mode');
  }

  // for_identity_source - computed: true, optional: false, required: false
  public get forIdentitySource() {
    return this.getBooleanAttribute('for_identity_source');
  }

  // id_token_claims - computed: true, optional: false, required: false
  public get idTokenClaims() {
    return this.getStringAttribute('id_token_claims');
  }

  // initiate_login_uri - computed: true, optional: false, required: false
  public get initiateLoginUri() {
    return this.getStringAttribute('initiate_login_uri');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // resource_uris - computed: true, optional: false, required: false
  public get resourceUris() {
    return this.getStringAttribute('resource_uris');
  }

  // share_secret_in_vault - computed: true, optional: false, required: false
  public get shareSecretInVault() {
    return this.getBooleanAttribute('share_secret_in_vault');
  }

  // shared_secret - computed: true, optional: false, required: false
  private _sharedSecret = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientSharedSecretOutputReference(this, "shared_secret");
  public get sharedSecret() {
    return this._sharedSecret;
  }

  // show_landing_page - computed: true, optional: false, required: false
  public get showLandingPage() {
    return this.getBooleanAttribute('show_landing_page');
  }

  // use_client_credentials - computed: true, optional: false, required: false
  public get useClientCredentials() {
    return this.getBooleanAttribute('use_client_credentials');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwner {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // freely_useable - computed: true, optional: false, required: false
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getBooleanAttribute('list');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: false, required: false
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributes {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_definition - computed: true, optional: false, required: false
  private _attributeDefinition = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2Client {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2Client | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2Client | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // subject_format - computed: true, optional: false, required: false
  public get subjectFormat() {
    return this.getStringAttribute('subject_format');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministrator {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClient {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // ldap_client - computed: true, optional: false, required: false
  private _ldapClient = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLdapClientOutputReference(this, "ldap_client");
  public get ldapClient() {
    return this._ldapClient;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth2_client - computed: true, optional: false, required: false
  private _oauth2Client = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // saml2_client - computed: true, optional: false, required: false
  private _saml2Client = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientSaml2ClientOutputReference(this, "saml2_client");
  public get saml2Client() {
    return this._saml2Client;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // sso_application - computed: true, optional: false, required: false
  public get ssoApplication() {
    return this.getBooleanAttribute('sso_application');
  }

  // technical_administrator - computed: true, optional: false, required: false
  private _technicalAdministrator = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedInternalLdap {
}

export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedInternalLdapToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedInternalLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedInternalLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedInternalLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedInternalLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client - computed: true, optional: false, required: false
  private _client = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumbering {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_id - computed: true, optional: false, required: false
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapNumbering {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapNumberingToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_id - computed: true, optional: false, required: false
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdap {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // gid_numbering - computed: true, optional: false, required: false
  private _gidNumbering = new DataKeyhubGroupOwnedSystemsProvisionedLdapGidNumberingOutputReference(this, "gid_numbering");
  public get gidNumbering() {
    return this._gidNumbering;
  }

  // hashing_scheme - computed: true, optional: false, required: false
  public get hashingScheme() {
    return this.getStringAttribute('hashing_scheme');
  }

  // numbering - computed: true, optional: false, required: false
  private _numbering = new DataKeyhubGroupOwnedSystemsProvisionedLdapNumberingOutputReference(this, "numbering");
  public get numbering() {
    return this._numbering;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinition {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // freely_useable - computed: true, optional: false, required: false
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getBooleanAttribute('list');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: false, required: false
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributes {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_definition - computed: true, optional: false, required: false
  private _attributeDefinition = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_validity_supported - computed: true, optional: false, required: false
  public get accountValiditySupported() {
    return this.getBooleanAttribute('account_validity_supported');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumbering {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_id - computed: true, optional: false, required: false
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumbering {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumbering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumbering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumbering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_id - computed: true, optional: false, required: false
  public get nextId() {
    return this.getNumberAttribute('next_id');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedLdapDirectory {
}

export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedLdapDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedLdapDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts_writable - computed: true, optional: false, required: false
  public get accountsWritable() {
    return this.getBooleanAttribute('accounts_writable');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // gid_numbering - computed: true, optional: false, required: false
  private _gidNumbering = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryGidNumberingOutputReference(this, "gid_numbering");
  public get gidNumbering() {
    return this._gidNumbering;
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // hashing_scheme - computed: true, optional: false, required: false
  public get hashingScheme() {
    return this.getStringAttribute('hashing_scheme');
  }

  // numbering - computed: true, optional: false, required: false
  private _numbering = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryNumberingOutputReference(this, "numbering");
  public get numbering() {
    return this._numbering;
  }

  // object_classes - computed: true, optional: false, required: false
  public get objectClasses() {
    return this.getStringAttribute('object_classes');
  }

  // sam_account_name_scheme - computed: true, optional: false, required: false
  public get samAccountNameScheme() {
    return this.getStringAttribute('sam_account_name_scheme');
  }

  // ssh_public_key_support - computed: true, optional: false, required: false
  public get sshPublicKeySupport() {
    return this.getStringAttribute('ssh_public_key_support');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystem {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // admin_permissions - computed: true, optional: false, required: false
  public get adminPermissions() {
    return this.getBooleanAttribute('admin_permissions');
  }

  // can_write_accounts - computed: true, optional: false, required: false
  public get canWriteAccounts() {
    return this.getBooleanAttribute('can_write_accounts');
  }

  // content_admin_permissions - computed: true, optional: false, required: false
  public get contentAdminPermissions() {
    return this.getBooleanAttribute('content_admin_permissions');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // owner_permissions - computed: true, optional: false, required: false
  public get ownerPermissions() {
    return this.getBooleanAttribute('owner_permissions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedNamespace {
}

export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedNamespaceToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_system - computed: true, optional: false, required: false
  private _baseSystem = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceBaseSystemOutputReference(this, "base_system");
  public get baseSystem() {
    return this._baseSystem;
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // service_account_dn - computed: true, optional: false, required: false
  public get serviceAccountDn() {
    return this.getStringAttribute('service_account_dn');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinks {
}

export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissions {
}

export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinition {
}

export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // freely_useable - computed: true, optional: false, required: false
  public get freelyUseable() {
    return this.getBooleanAttribute('freely_useable');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getBooleanAttribute('list');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // system_definition - computed: true, optional: false, required: false
  public get systemDefinition() {
    return this.getStringAttribute('system_definition');
  }

  // unique - computed: true, optional: false, required: false
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedScimAttributes {
}

export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedScimAttributesToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScimAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedScimAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedScimAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_definition - computed: true, optional: false, required: false
  private _attributeDefinition = new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesAttributeDefinitionOutputReference(this, "attribute_definition");
  public get attributeDefinition() {
    return this._attributeDefinition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsProvisionedScimAttributesOutputReference {
    return new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsProvisionedScim {
}

export function dataKeyhubGroupOwnedSystemsProvisionedScimToTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsProvisionedScimToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsProvisionedScim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsProvisionedScimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsProvisionedScim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsProvisionedScim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataKeyhubGroupOwnedSystemsProvisionedScimAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // authentication_scheme - computed: true, optional: false, required: false
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }

  // basic_auth_password - computed: true, optional: false, required: false
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }

  // basic_auth_username - computed: true, optional: false, required: false
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // connector_configuration - computed: true, optional: false, required: false
  public get connectorConfiguration() {
    return this.getStringAttribute('connector_configuration');
  }

  // custom_header_name - computed: true, optional: false, required: false
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }

  // custom_header_value - computed: true, optional: false, required: false
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }

  // external_id_supported - computed: true, optional: false, required: false
  public get externalIdSupported() {
    return this.getBooleanAttribute('external_id_supported');
  }

  // filter_active_users_supported - computed: true, optional: false, required: false
  public get filterActiveUsersSupported() {
    return this.getBooleanAttribute('filter_active_users_supported');
  }

  // groups_supported - computed: true, optional: false, required: false
  public get groupsSupported() {
    return this.getBooleanAttribute('groups_supported');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // password_supported - computed: true, optional: false, required: false
  public get passwordSupported() {
    return this.getBooleanAttribute('password_supported');
  }

  // update_strategy - computed: true, optional: false, required: false
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_scim_json_mimetype - computed: true, optional: false, required: false
  public get useScimJsonMimetype() {
    return this.getBooleanAttribute('use_scim_json_mimetype');
  }

  // vendor_escaped - computed: true, optional: false, required: false
  public get vendorEscaped() {
    return this.getStringAttribute('vendor_escaped');
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinks {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinks {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference {
    return new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissions {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnit {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissions {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsOutputReference {
    return new DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupOwnedSystemsTechnicalAdministrator {
}

export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorToTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsTechnicalAdministratorToHclTerraform(struct?: DataKeyhubGroupOwnedSystemsTechnicalAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsTechnicalAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupOwnedSystemsTechnicalAdministrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystemsTechnicalAdministrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataKeyhubGroupOwnedSystems {
}

export function dataKeyhubGroupOwnedSystemsToTerraform(struct?: DataKeyhubGroupOwnedSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupOwnedSystemsToHclTerraform(struct?: DataKeyhubGroupOwnedSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupOwnedSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupOwnedSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupOwnedSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abstract_provisioned_ldap - computed: true, optional: false, required: false
  private _abstractProvisionedLdap = new DataKeyhubGroupOwnedSystemsAbstractProvisionedLdapOutputReference(this, "abstract_provisioned_ldap");
  public get abstractProvisionedLdap() {
    return this._abstractProvisionedLdap;
  }

  // account_count - computed: true, optional: false, required: false
  public get accountCount() {
    return this.getNumberAttribute('account_count');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // admin_permissions - computed: true, optional: false, required: false
  public get adminPermissions() {
    return this.getBooleanAttribute('admin_permissions');
  }

  // can_write_accounts - computed: true, optional: false, required: false
  public get canWriteAccounts() {
    return this.getBooleanAttribute('can_write_accounts');
  }

  // cleanup_period - computed: true, optional: false, required: false
  private _cleanupPeriod = new DataKeyhubGroupOwnedSystemsCleanupPeriodOutputReference(this, "cleanup_period");
  public get cleanupPeriod() {
    return this._cleanupPeriod;
  }

  // content_admin_permissions - computed: true, optional: false, required: false
  public get contentAdminPermissions() {
    return this.getBooleanAttribute('content_admin_permissions');
  }

  // content_administrator - computed: true, optional: false, required: false
  private _contentAdministrator = new DataKeyhubGroupOwnedSystemsContentAdministratorOutputReference(this, "content_administrator");
  public get contentAdministrator() {
    return this._contentAdministrator;
  }

  // external_uuid - computed: true, optional: false, required: false
  public get externalUuid() {
    return this.getStringAttribute('external_uuid');
  }

  // group_on_system_provisioning - computed: true, optional: false, required: false
  public get groupOnSystemProvisioning() {
    return this.getStringAttribute('group_on_system_provisioning');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupOwnedSystemsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOwnedSystemsOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataKeyhubGroupOwnedSystemsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // owner_permissions - computed: true, optional: false, required: false
  public get ownerPermissions() {
    return this.getBooleanAttribute('owner_permissions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupOwnedSystemsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // provisioned_a_d - computed: true, optional: false, required: false
  private _provisionedAD = new DataKeyhubGroupOwnedSystemsProvisionedADOutputReference(this, "provisioned_a_d");
  public get provisionedAD() {
    return this._provisionedAD;
  }

  // provisioned_azure_oidc_directory - computed: true, optional: false, required: false
  private _provisionedAzureOidcDirectory = new DataKeyhubGroupOwnedSystemsProvisionedAzureOidcDirectoryOutputReference(this, "provisioned_azure_oidc_directory");
  public get provisionedAzureOidcDirectory() {
    return this._provisionedAzureOidcDirectory;
  }

  // provisioned_azure_sync_ldap_directory - computed: true, optional: false, required: false
  private _provisionedAzureSyncLdapDirectory = new DataKeyhubGroupOwnedSystemsProvisionedAzureSyncLdapDirectoryOutputReference(this, "provisioned_azure_sync_ldap_directory");
  public get provisionedAzureSyncLdapDirectory() {
    return this._provisionedAzureSyncLdapDirectory;
  }

  // provisioned_azure_tenant - computed: true, optional: false, required: false
  private _provisionedAzureTenant = new DataKeyhubGroupOwnedSystemsProvisionedAzureTenantOutputReference(this, "provisioned_azure_tenant");
  public get provisionedAzureTenant() {
    return this._provisionedAzureTenant;
  }

  // provisioned_internal_ldap - computed: true, optional: false, required: false
  private _provisionedInternalLdap = new DataKeyhubGroupOwnedSystemsProvisionedInternalLdapOutputReference(this, "provisioned_internal_ldap");
  public get provisionedInternalLdap() {
    return this._provisionedInternalLdap;
  }

  // provisioned_ldap - computed: true, optional: false, required: false
  private _provisionedLdap = new DataKeyhubGroupOwnedSystemsProvisionedLdapOutputReference(this, "provisioned_ldap");
  public get provisionedLdap() {
    return this._provisionedLdap;
  }

  // provisioned_ldap_directory - computed: true, optional: false, required: false
  private _provisionedLdapDirectory = new DataKeyhubGroupOwnedSystemsProvisionedLdapDirectoryOutputReference(this, "provisioned_ldap_directory");
  public get provisionedLdapDirectory() {
    return this._provisionedLdapDirectory;
  }

  // provisioned_namespace - computed: true, optional: false, required: false
  private _provisionedNamespace = new DataKeyhubGroupOwnedSystemsProvisionedNamespaceOutputReference(this, "provisioned_namespace");
  public get provisionedNamespace() {
    return this._provisionedNamespace;
  }

  // provisioned_scim - computed: true, optional: false, required: false
  private _provisionedScim = new DataKeyhubGroupOwnedSystemsProvisionedScimOutputReference(this, "provisioned_scim");
  public get provisionedScim() {
    return this._provisionedScim;
  }

  // self_service_existing_groups - computed: true, optional: false, required: false
  public get selfServiceExistingGroups() {
    return this.getBooleanAttribute('self_service_existing_groups');
  }

  // self_service_new_groups - computed: true, optional: false, required: false
  public get selfServiceNewGroups() {
    return this.getBooleanAttribute('self_service_new_groups');
  }

  // self_service_new_namespaces - computed: true, optional: false, required: false
  public get selfServiceNewNamespaces() {
    return this.getBooleanAttribute('self_service_new_namespaces');
  }

  // self_service_service_accounts - computed: true, optional: false, required: false
  public get selfServiceServiceAccounts() {
    return this.getBooleanAttribute('self_service_service_accounts');
  }

  // should_destroy_unknown_accounts - computed: true, optional: false, required: false
  public get shouldDestroyUnknownAccounts() {
    return this.getBooleanAttribute('should_destroy_unknown_accounts');
  }

  // technical_administrator - computed: true, optional: false, required: false
  private _technicalAdministrator = new DataKeyhubGroupOwnedSystemsTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username_prefix - computed: true, optional: false, required: false
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataKeyhubGroupOwnedSystemsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupOwnedSystemsOutputReference {
    return new DataKeyhubGroupOwnedSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupPermissions {
}

export function dataKeyhubGroupPermissionsToTerraform(struct?: DataKeyhubGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupPermissionsToHclTerraform(struct?: DataKeyhubGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupPermissionsOutputReference {
    return new DataKeyhubGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsAccountsLinks {
}

export function dataKeyhubGroupRecentAuditsAccountsLinksToTerraform(struct?: DataKeyhubGroupRecentAuditsAccountsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsAccountsLinksToHclTerraform(struct?: DataKeyhubGroupRecentAuditsAccountsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsAccountsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsAccountsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsAccountsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsAccountsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsAccountsLinksOutputReference {
    return new DataKeyhubGroupRecentAuditsAccountsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsAccountsPermissions {
}

export function dataKeyhubGroupRecentAuditsAccountsPermissionsToTerraform(struct?: DataKeyhubGroupRecentAuditsAccountsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsAccountsPermissionsToHclTerraform(struct?: DataKeyhubGroupRecentAuditsAccountsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsAccountsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsAccountsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsAccountsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsAccountsPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsAccountsPermissionsOutputReference {
    return new DataKeyhubGroupRecentAuditsAccountsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsAccounts {
}

export function dataKeyhubGroupRecentAuditsAccountsToTerraform(struct?: DataKeyhubGroupRecentAuditsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsAccountsToHclTerraform(struct?: DataKeyhubGroupRecentAuditsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_uuid - computed: true, optional: false, required: false
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }

  // account_valid - computed: true, optional: false, required: false
  public get accountValid() {
    return this.getBooleanAttribute('account_valid');
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // disconnected_nested - computed: true, optional: false, required: false
  public get disconnectedNested() {
    return this.getBooleanAttribute('disconnected_nested');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // last_active - computed: true, optional: false, required: false
  public get lastActive() {
    return this.getStringAttribute('last_active');
  }

  // last_used - computed: true, optional: false, required: false
  public get lastUsed() {
    return this.getStringAttribute('last_used');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupRecentAuditsAccountsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // nested - computed: true, optional: false, required: false
  public get nested() {
    return this.getBooleanAttribute('nested');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupRecentAuditsAccountsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // rights - computed: true, optional: false, required: false
  public get rights() {
    return this.getStringAttribute('rights');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataKeyhubGroupRecentAuditsAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsAccountsOutputReference {
    return new DataKeyhubGroupRecentAuditsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsLinks {
}

export function dataKeyhubGroupRecentAuditsLinksToTerraform(struct?: DataKeyhubGroupRecentAuditsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsLinksToHclTerraform(struct?: DataKeyhubGroupRecentAuditsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsLinksOutputReference {
    return new DataKeyhubGroupRecentAuditsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsNestedGroupsLinks {
}

export function dataKeyhubGroupRecentAuditsNestedGroupsLinksToTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsNestedGroupsLinksToHclTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroupsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsNestedGroupsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsNestedGroupsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsNestedGroupsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsNestedGroupsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsNestedGroupsLinksOutputReference {
    return new DataKeyhubGroupRecentAuditsNestedGroupsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsNestedGroupsPermissions {
}

export function dataKeyhubGroupRecentAuditsNestedGroupsPermissionsToTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroupsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsNestedGroupsPermissionsToHclTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroupsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsNestedGroupsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsNestedGroupsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsNestedGroupsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsNestedGroupsPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsNestedGroupsPermissionsOutputReference {
    return new DataKeyhubGroupRecentAuditsNestedGroupsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsNestedGroups {
}

export function dataKeyhubGroupRecentAuditsNestedGroupsToTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsNestedGroupsToHclTerraform(struct?: DataKeyhubGroupRecentAuditsNestedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsNestedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsNestedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsNestedGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // group_uuid - computed: true, optional: false, required: false
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupRecentAuditsNestedGroupsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupRecentAuditsNestedGroupsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
}

export class DataKeyhubGroupRecentAuditsNestedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsNestedGroupsOutputReference {
    return new DataKeyhubGroupRecentAuditsNestedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAuditsPermissions {
}

export function dataKeyhubGroupRecentAuditsPermissionsToTerraform(struct?: DataKeyhubGroupRecentAuditsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsPermissionsToHclTerraform(struct?: DataKeyhubGroupRecentAuditsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAuditsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAuditsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupRecentAuditsPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsPermissionsOutputReference {
    return new DataKeyhubGroupRecentAuditsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupRecentAudits {
}

export function dataKeyhubGroupRecentAuditsToTerraform(struct?: DataKeyhubGroupRecentAudits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupRecentAuditsToHclTerraform(struct?: DataKeyhubGroupRecentAudits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupRecentAuditsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupRecentAudits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupRecentAudits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataKeyhubGroupRecentAuditsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupRecentAuditsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name_on_audit - computed: true, optional: false, required: false
  public get nameOnAudit() {
    return this.getStringAttribute('name_on_audit');
  }

  // nested_groups - computed: true, optional: false, required: false
  private _nestedGroups = new DataKeyhubGroupRecentAuditsNestedGroupsList(this, "nested_groups", false);
  public get nestedGroups() {
    return this._nestedGroups;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupRecentAuditsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // reviewed_at - computed: true, optional: false, required: false
  public get reviewedAt() {
    return this.getStringAttribute('reviewed_at');
  }

  // reviewed_by - computed: true, optional: false, required: false
  public get reviewedBy() {
    return this.getStringAttribute('reviewed_by');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // submitted_by - computed: true, optional: false, required: false
  public get submittedBy() {
    return this.getStringAttribute('submitted_by');
  }
}

export class DataKeyhubGroupRecentAuditsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupRecentAuditsOutputReference {
    return new DataKeyhubGroupRecentAuditsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupServiceAccountsLinks {
}

export function dataKeyhubGroupServiceAccountsLinksToTerraform(struct?: DataKeyhubGroupServiceAccountsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupServiceAccountsLinksToHclTerraform(struct?: DataKeyhubGroupServiceAccountsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupServiceAccountsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupServiceAccountsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupServiceAccountsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupServiceAccountsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupServiceAccountsLinksOutputReference {
    return new DataKeyhubGroupServiceAccountsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupServiceAccountsPasswordLinks {
}

export function dataKeyhubGroupServiceAccountsPasswordLinksToTerraform(struct?: DataKeyhubGroupServiceAccountsPasswordLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupServiceAccountsPasswordLinksToHclTerraform(struct?: DataKeyhubGroupServiceAccountsPasswordLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupServiceAccountsPasswordLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupServiceAccountsPasswordLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupServiceAccountsPasswordLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupServiceAccountsPasswordLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupServiceAccountsPasswordLinksOutputReference {
    return new DataKeyhubGroupServiceAccountsPasswordLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
