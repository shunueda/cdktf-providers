import * as cdktf from 'cdktf';
import { DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityList,
DbServiceServiceConnectivityComputesConnectivityList,
DbServiceServiceConnectivityConnectStringsList,
DbServiceServiceConnectivityPrivateLinkList } from './structs0'
export interface DbServiceServiceConnectivityUpdateInProgressInfoPrivateLink {
}

export function dbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkToTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkToHclTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityUpdateInProgressInfoPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityUpdateInProgressInfoPrivateLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: false, required: false
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }

  // service_principals - computed: true, optional: false, required: false
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }
}

export class DbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference {
    return new DbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityUpdateInProgressInfo {
}

export function dbServiceServiceConnectivityUpdateInProgressInfoToTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityUpdateInProgressInfoToHclTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityUpdateInProgressInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityUpdateInProgressInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityUpdateInProgressInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // computes_connectivity - computed: true, optional: false, required: false
  private _computesConnectivity = new DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityList(this, "computes_connectivity", false);
  public get computesConnectivity() {
    return this._computesConnectivity;
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // private_link - computed: true, optional: false, required: false
  private _privateLink = new DbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
}

export class DbServiceServiceConnectivityUpdateInProgressInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityUpdateInProgressInfoOutputReference {
    return new DbServiceServiceConnectivityUpdateInProgressInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivity {
  /**
  * The list of allowed ipv4 addresses that can connect to the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#allowed_ip_addresses DbService#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string[];
  /**
  * DNS Prefix associated with the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dns_prefix DbService#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * Specify whether to enable public access to the DB Service, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_public_access DbService#enable_public_access}
  */
  readonly enablePublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable SSL to the DB Service, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_ssl DbService#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * The connection port for the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#service_port DbService#service_port}
  */
  readonly servicePort?: number;
}

export function dbServiceServiceConnectivityToTerraform(struct?: DbServiceServiceConnectivityOutputReference | DbServiceServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpAddresses),
    dns_prefix: cdktf.stringToTerraform(struct!.dnsPrefix),
    enable_public_access: cdktf.booleanToTerraform(struct!.enablePublicAccess),
    enable_ssl: cdktf.booleanToTerraform(struct!.enableSsl),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
  }
}


export function dbServiceServiceConnectivityToHclTerraform(struct?: DbServiceServiceConnectivityOutputReference | DbServiceServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceServiceConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceServiceConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpAddresses = this._allowedIpAddresses;
    }
    if (this._dnsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrefix = this._dnsPrefix;
    }
    if (this._enablePublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicAccess = this._enablePublicAccess;
    }
    if (this._enableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl = this._enableSsl;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIpAddresses = undefined;
      this._dnsPrefix = undefined;
      this._enablePublicAccess = undefined;
      this._enableSsl = undefined;
      this._servicePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIpAddresses = value.allowedIpAddresses;
      this._dnsPrefix = value.dnsPrefix;
      this._enablePublicAccess = value.enablePublicAccess;
      this._enableSsl = value.enableSsl;
      this._servicePort = value.servicePort;
    }
  }

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }

  // ca_cert_id - computed: true, optional: false, required: false
  public get caCertId() {
    return this.getStringAttribute('ca_cert_id');
  }

  // computes_connectivity - computed: true, optional: false, required: false
  private _computesConnectivity = new DbServiceServiceConnectivityComputesConnectivityList(this, "computes_connectivity", false);
  public get computesConnectivity() {
    return this._computesConnectivity;
  }

  // connect_strings - computed: true, optional: false, required: false
  private _connectStrings = new DbServiceServiceConnectivityConnectStringsList(this, "connect_strings", false);
  public get connectStrings() {
    return this._connectStrings;
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // enable_public_access - computed: false, optional: true, required: false
  private _enablePublicAccess?: boolean | cdktf.IResolvable; 
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
  public set enablePublicAccess(value: boolean | cdktf.IResolvable) {
    this._enablePublicAccess = value;
  }
  public resetEnablePublicAccess() {
    this._enablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicAccessInput() {
    return this._enablePublicAccess;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // private_link - computed: true, optional: false, required: false
  private _privateLink = new DbServiceServiceConnectivityPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // update_in_progress_info - computed: true, optional: false, required: false
  private _updateInProgressInfo = new DbServiceServiceConnectivityUpdateInProgressInfoList(this, "update_in_progress_info", false);
  public get updateInProgressInfo() {
    return this._updateInProgressInfo;
  }
}
export interface DbServiceSharedWithUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#email_id DbService#email_id}
  */
  readonly emailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#role DbService#role}
  */
  readonly role?: string;
}

export function dbServiceSharedWithUsersToTerraform(struct?: DbServiceSharedWithUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_id: cdktf.stringToTerraform(struct!.emailId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dbServiceSharedWithUsersToHclTerraform(struct?: DbServiceSharedWithUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_id: {
      value: cdktf.stringToHclTerraform(struct!.emailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSharedWithUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceSharedWithUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailId = this._emailId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSharedWithUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailId = value.emailId;
      this._role = value.role;
    }
  }

  // email_id - computed: false, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class DbServiceSharedWithUsersList extends cdktf.ComplexList {
  public internalValue? : DbServiceSharedWithUsers[] | cdktf.IResolvable

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
  public get(index: number): DbServiceSharedWithUsersOutputReference {
    return new DbServiceSharedWithUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceSharedWith {
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#users DbService#users}
  */
  readonly users?: DbServiceSharedWithUsers[] | cdktf.IResolvable;
}

export function dbServiceSharedWithToTerraform(struct?: DbServiceSharedWithOutputReference | DbServiceSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users: cdktf.listMapper(dbServiceSharedWithUsersToTerraform, true)(struct!.users),
  }
}


export function dbServiceSharedWithToHclTerraform(struct?: DbServiceSharedWithOutputReference | DbServiceSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users: {
      value: cdktf.listMapperHcl(dbServiceSharedWithUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSharedWithUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSharedWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._users.internalValue = value.users;
    }
  }

  // users - computed: false, optional: true, required: false
  private _users = new DbServiceSharedWithUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DbServiceSharedWithUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface DbServiceSnapshotConfigurationFullBackupScheduleStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute?: number;
}

export function dbServiceSnapshotConfigurationFullBackupScheduleStartTimeToTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleStartTimeOutputReference | DbServiceSnapshotConfigurationFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceSnapshotConfigurationFullBackupScheduleStartTimeToHclTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleStartTimeOutputReference | DbServiceSnapshotConfigurationFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationFullBackupScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleToTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleOutputReference | DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleOutputReference | DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceSnapshotConfigurationFullBackupSchedule {
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#start_time DbService#start_time}
  */
  readonly startTime?: DbServiceSnapshotConfigurationFullBackupScheduleStartTime;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule;
}

export function dbServiceSnapshotConfigurationFullBackupScheduleToTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleOutputReference | DbServiceSnapshotConfigurationFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: dbServiceSnapshotConfigurationFullBackupScheduleStartTimeToTerraform(struct!.startTime),
    weekly_schedule: dbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function dbServiceSnapshotConfigurationFullBackupScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationFullBackupScheduleOutputReference | DbServiceSnapshotConfigurationFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: dbServiceSnapshotConfigurationFullBackupScheduleStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationFullBackupScheduleStartTimeList",
    },
    weekly_schedule: {
      value: dbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationFullBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime.internalValue = value.startTime;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime = new DbServiceSnapshotConfigurationFullBackupScheduleStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: DbServiceSnapshotConfigurationFullBackupScheduleStartTime) {
    this._startTime.internalValue = value;
  }
  public resetStartTime() {
    this._startTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceSnapshotConfigurationFullBackupScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceSnapshotConfigurationFullBackupScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface DbServiceSnapshotConfigurationScheduleBackupStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute?: number;
}

export function dbServiceSnapshotConfigurationScheduleBackupStartTimeToTerraform(struct?: DbServiceSnapshotConfigurationScheduleBackupStartTimeOutputReference | DbServiceSnapshotConfigurationScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceSnapshotConfigurationScheduleBackupStartTimeToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleBackupStartTimeOutputReference | DbServiceSnapshotConfigurationScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceSnapshotConfigurationScheduleDailySchedule {
  /**
  * The number of backups to be captured per day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backups_per_day DbService#backups_per_day}
  */
  readonly backupsPerDay?: number;
}

export function dbServiceSnapshotConfigurationScheduleDailyScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleDailyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups_per_day: cdktf.numberToTerraform(struct!.backupsPerDay),
  }
}


export function dbServiceSnapshotConfigurationScheduleDailyScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleDailyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups_per_day: {
      value: cdktf.numberToHclTerraform(struct!.backupsPerDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupsPerDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsPerDay = this._backupsPerDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupsPerDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupsPerDay = value.backupsPerDay;
    }
  }

  // backups_per_day - computed: false, optional: true, required: false
  private _backupsPerDay?: number; 
  public get backupsPerDay() {
    return this.getNumberAttribute('backups_per_day');
  }
  public set backupsPerDay(value: number) {
    this._backupsPerDay = value;
  }
  public resetBackupsPerDay() {
    this._backupsPerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsPerDayInput() {
    return this._backupsPerDay;
  }
}
export interface DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
}

export function dbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
  }
}


export function dbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }
}
export interface DbServiceSnapshotConfigurationScheduleMonthlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule;
}

export function dbServiceSnapshotConfigurationScheduleMonthlyScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleMonthlyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
  }
}


export function dbServiceSnapshotConfigurationScheduleMonthlyScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleMonthlyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceSnapshotConfigurationScheduleMonthlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }
}
export interface DbServiceSnapshotConfigurationScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceSnapshotConfigurationScheduleWeeklyScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleWeeklyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceSnapshotConfigurationScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleWeeklyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#months DbService#months}
  */
  readonly months?: string[];
}

export function dbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
  }
}


export function dbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
      this._months = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
      this._months = value.months;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }

  // months - computed: false, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }
}
export interface DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates: number[];
  /**
  * Name of a month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month DbService#month}
  */
  readonly month: string;
}

export function dbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function dbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dates = undefined;
      this._month = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dates = value.dates;
      this._month = value.month;
    }
  }

  // dates - computed: false, optional: false, required: true
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // month - computed: false, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}

export class DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {
  public internalValue? : DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable

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
  public get(index: number): DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceSnapshotConfigurationScheduleYearlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule;
  /**
  * month_specific_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month_specific_schedule DbService#month_specific_schedule}
  */
  readonly monthSpecificSchedule?: DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable;
}

export function dbServiceSnapshotConfigurationScheduleYearlyScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
    month_specific_schedule: cdktf.listMapper(dbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleToTerraform, true)(struct!.monthSpecificSchedule),
  }
}


export function dbServiceSnapshotConfigurationScheduleYearlyScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleYearlyScheduleOutputReference | DbServiceSnapshotConfigurationScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleList",
    },
    month_specific_schedule: {
      value: cdktf.listMapperHcl(dbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform, true)(struct!.monthSpecificSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    if (this._monthSpecificSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSpecificSchedule = this._monthSpecificSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
      this._monthSpecificSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
      this._monthSpecificSchedule.internalValue = value.monthSpecificSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceSnapshotConfigurationScheduleYearlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }

  // month_specific_schedule - computed: false, optional: true, required: false
  private _monthSpecificSchedule = new DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
  public putMonthSpecificSchedule(value: DbServiceSnapshotConfigurationScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable) {
    this._monthSpecificSchedule.internalValue = value;
  }
  public resetMonthSpecificSchedule() {
    this._monthSpecificSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthSpecificScheduleInput() {
    return this._monthSpecificSchedule.internalValue;
  }
}
export interface DbServiceSnapshotConfigurationSchedule {
  /**
  * backup_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_start_time DbService#backup_start_time}
  */
  readonly backupStartTime?: DbServiceSnapshotConfigurationScheduleBackupStartTime;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#daily_schedule DbService#daily_schedule}
  */
  readonly dailySchedule?: DbServiceSnapshotConfigurationScheduleDailySchedule;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#monthly_schedule DbService#monthly_schedule}
  */
  readonly monthlySchedule?: DbServiceSnapshotConfigurationScheduleMonthlySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceSnapshotConfigurationScheduleWeeklySchedule;
  /**
  * yearly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#yearly_schedule DbService#yearly_schedule}
  */
  readonly yearlySchedule?: DbServiceSnapshotConfigurationScheduleYearlySchedule;
}

export function dbServiceSnapshotConfigurationScheduleToTerraform(struct?: DbServiceSnapshotConfigurationScheduleOutputReference | DbServiceSnapshotConfigurationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_start_time: dbServiceSnapshotConfigurationScheduleBackupStartTimeToTerraform(struct!.backupStartTime),
    daily_schedule: dbServiceSnapshotConfigurationScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    monthly_schedule: dbServiceSnapshotConfigurationScheduleMonthlyScheduleToTerraform(struct!.monthlySchedule),
    weekly_schedule: dbServiceSnapshotConfigurationScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
    yearly_schedule: dbServiceSnapshotConfigurationScheduleYearlyScheduleToTerraform(struct!.yearlySchedule),
  }
}


export function dbServiceSnapshotConfigurationScheduleToHclTerraform(struct?: DbServiceSnapshotConfigurationScheduleOutputReference | DbServiceSnapshotConfigurationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_start_time: {
      value: dbServiceSnapshotConfigurationScheduleBackupStartTimeToHclTerraform(struct!.backupStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleBackupStartTimeList",
    },
    daily_schedule: {
      value: dbServiceSnapshotConfigurationScheduleDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleDailyScheduleList",
    },
    monthly_schedule: {
      value: dbServiceSnapshotConfigurationScheduleMonthlyScheduleToHclTerraform(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleMonthlyScheduleList",
    },
    weekly_schedule: {
      value: dbServiceSnapshotConfigurationScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleWeeklyScheduleList",
    },
    yearly_schedule: {
      value: dbServiceSnapshotConfigurationScheduleYearlyScheduleToHclTerraform(struct!.yearlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleYearlyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartTime = this._backupStartTime?.internalValue;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    if (this._yearlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlySchedule = this._yearlySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupStartTime.internalValue = undefined;
      this._dailySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
      this._yearlySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupStartTime.internalValue = value.backupStartTime;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
      this._yearlySchedule.internalValue = value.yearlySchedule;
    }
  }

  // backup_start_time - computed: false, optional: true, required: false
  private _backupStartTime = new DbServiceSnapshotConfigurationScheduleBackupStartTimeOutputReference(this, "backup_start_time");
  public get backupStartTime() {
    return this._backupStartTime;
  }
  public putBackupStartTime(value: DbServiceSnapshotConfigurationScheduleBackupStartTime) {
    this._backupStartTime.internalValue = value;
  }
  public resetBackupStartTime() {
    this._backupStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartTimeInput() {
    return this._backupStartTime.internalValue;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new DbServiceSnapshotConfigurationScheduleDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: DbServiceSnapshotConfigurationScheduleDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new DbServiceSnapshotConfigurationScheduleMonthlyScheduleOutputReference(this, "monthly_schedule");
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: DbServiceSnapshotConfigurationScheduleMonthlySchedule) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceSnapshotConfigurationScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceSnapshotConfigurationScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }

  // yearly_schedule - computed: false, optional: true, required: false
  private _yearlySchedule = new DbServiceSnapshotConfigurationScheduleYearlyScheduleOutputReference(this, "yearly_schedule");
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
  public putYearlySchedule(value: DbServiceSnapshotConfigurationScheduleYearlySchedule) {
    this._yearlySchedule.internalValue = value;
  }
  public resetYearlySchedule() {
    this._yearlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyScheduleInput() {
    return this._yearlySchedule.internalValue;
  }
}
export interface DbServiceSnapshotConfigurationSnapshotStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute?: number;
}

export function dbServiceSnapshotConfigurationSnapshotStartTimeToTerraform(struct?: DbServiceSnapshotConfigurationSnapshotStartTimeOutputReference | DbServiceSnapshotConfigurationSnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceSnapshotConfigurationSnapshotStartTimeToHclTerraform(struct?: DbServiceSnapshotConfigurationSnapshotStartTimeOutputReference | DbServiceSnapshotConfigurationSnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationSnapshotStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationSnapshotStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationSnapshotStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceSnapshotConfigurationSnapshotWindow {
  /**
  * Time value in (hh:mm) format. ex. '02:00'. Deprecated, please use backupStartTime in schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#time DbService#time}
  */
  readonly time?: string;
}

export function dbServiceSnapshotConfigurationSnapshotWindowToTerraform(struct?: DbServiceSnapshotConfigurationSnapshotWindowOutputReference | DbServiceSnapshotConfigurationSnapshotWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dbServiceSnapshotConfigurationSnapshotWindowToHclTerraform(struct?: DbServiceSnapshotConfigurationSnapshotWindowOutputReference | DbServiceSnapshotConfigurationSnapshotWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationSnapshotWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfigurationSnapshotWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfigurationSnapshotWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time = value.time;
    }
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DbServiceSnapshotConfiguration {
  /**
  * Flag to decide whether the transaction logs would be retained to support PITR (Point in time recoverability)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#include_transaction_logs DbService#include_transaction_logs}
  */
  readonly includeTransactionLogs?: boolean | cdktf.IResolvable;
  /**
  * Number of days for which the snapshot of DB Service would be retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#retention_days DbService#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * The snapshot SLA for the DB Service. If not specified, a default SLA would be associated with the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#sla DbService#sla}
  */
  readonly sla?: string;
  /**
  * full_backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#full_backup_schedule DbService#full_backup_schedule}
  */
  readonly fullBackupSchedule?: DbServiceSnapshotConfigurationFullBackupSchedule;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#schedule DbService#schedule}
  */
  readonly schedule?: DbServiceSnapshotConfigurationSchedule;
  /**
  * snapshot_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#snapshot_start_time DbService#snapshot_start_time}
  */
  readonly snapshotStartTime?: DbServiceSnapshotConfigurationSnapshotStartTime;
  /**
  * snapshot_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#snapshot_window DbService#snapshot_window}
  */
  readonly snapshotWindow?: DbServiceSnapshotConfigurationSnapshotWindow;
}

export function dbServiceSnapshotConfigurationToTerraform(struct?: DbServiceSnapshotConfigurationOutputReference | DbServiceSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_transaction_logs: cdktf.booleanToTerraform(struct!.includeTransactionLogs),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    sla: cdktf.stringToTerraform(struct!.sla),
    full_backup_schedule: dbServiceSnapshotConfigurationFullBackupScheduleToTerraform(struct!.fullBackupSchedule),
    schedule: dbServiceSnapshotConfigurationScheduleToTerraform(struct!.schedule),
    snapshot_start_time: dbServiceSnapshotConfigurationSnapshotStartTimeToTerraform(struct!.snapshotStartTime),
    snapshot_window: dbServiceSnapshotConfigurationSnapshotWindowToTerraform(struct!.snapshotWindow),
  }
}


export function dbServiceSnapshotConfigurationToHclTerraform(struct?: DbServiceSnapshotConfigurationOutputReference | DbServiceSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_transaction_logs: {
      value: cdktf.booleanToHclTerraform(struct!.includeTransactionLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla: {
      value: cdktf.stringToHclTerraform(struct!.sla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_backup_schedule: {
      value: dbServiceSnapshotConfigurationFullBackupScheduleToHclTerraform(struct!.fullBackupSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationFullBackupScheduleList",
    },
    schedule: {
      value: dbServiceSnapshotConfigurationScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationScheduleList",
    },
    snapshot_start_time: {
      value: dbServiceSnapshotConfigurationSnapshotStartTimeToHclTerraform(struct!.snapshotStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationSnapshotStartTimeList",
    },
    snapshot_window: {
      value: dbServiceSnapshotConfigurationSnapshotWindowToHclTerraform(struct!.snapshotWindow),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceSnapshotConfigurationSnapshotWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceSnapshotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeTransactionLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionLogs = this._includeTransactionLogs;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._sla !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla;
    }
    if (this._fullBackupSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupSchedule = this._fullBackupSchedule?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._snapshotStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStartTime = this._snapshotStartTime?.internalValue;
    }
    if (this._snapshotWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotWindow = this._snapshotWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceSnapshotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeTransactionLogs = undefined;
      this._retentionDays = undefined;
      this._sla = undefined;
      this._fullBackupSchedule.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._snapshotStartTime.internalValue = undefined;
      this._snapshotWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeTransactionLogs = value.includeTransactionLogs;
      this._retentionDays = value.retentionDays;
      this._sla = value.sla;
      this._fullBackupSchedule.internalValue = value.fullBackupSchedule;
      this._schedule.internalValue = value.schedule;
      this._snapshotStartTime.internalValue = value.snapshotStartTime;
      this._snapshotWindow.internalValue = value.snapshotWindow;
    }
  }

  // include_transaction_logs - computed: false, optional: true, required: false
  private _includeTransactionLogs?: boolean | cdktf.IResolvable; 
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }
  public set includeTransactionLogs(value: boolean | cdktf.IResolvable) {
    this._includeTransactionLogs = value;
  }
  public resetIncludeTransactionLogs() {
    this._includeTransactionLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionLogsInput() {
    return this._includeTransactionLogs;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // sla - computed: false, optional: true, required: false
  private _sla?: string; 
  public get sla() {
    return this.getStringAttribute('sla');
  }
  public set sla(value: string) {
    this._sla = value;
  }
  public resetSla() {
    this._sla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla;
  }

  // full_backup_schedule - computed: false, optional: true, required: false
  private _fullBackupSchedule = new DbServiceSnapshotConfigurationFullBackupScheduleOutputReference(this, "full_backup_schedule");
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }
  public putFullBackupSchedule(value: DbServiceSnapshotConfigurationFullBackupSchedule) {
    this._fullBackupSchedule.internalValue = value;
  }
  public resetFullBackupSchedule() {
    this._fullBackupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupScheduleInput() {
    return this._fullBackupSchedule.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DbServiceSnapshotConfigurationScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DbServiceSnapshotConfigurationSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // snapshot_start_time - computed: false, optional: true, required: false
  private _snapshotStartTime = new DbServiceSnapshotConfigurationSnapshotStartTimeOutputReference(this, "snapshot_start_time");
  public get snapshotStartTime() {
    return this._snapshotStartTime;
  }
  public putSnapshotStartTime(value: DbServiceSnapshotConfigurationSnapshotStartTime) {
    this._snapshotStartTime.internalValue = value;
  }
  public resetSnapshotStartTime() {
    this._snapshotStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStartTimeInput() {
    return this._snapshotStartTime.internalValue;
  }

  // snapshot_window - computed: false, optional: true, required: false
  private _snapshotWindow = new DbServiceSnapshotConfigurationSnapshotWindowOutputReference(this, "snapshot_window");
  public get snapshotWindow() {
    return this._snapshotWindow;
  }
  public putSnapshotWindow(value: DbServiceSnapshotConfigurationSnapshotWindow) {
    this._snapshotWindow.internalValue = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow.internalValue;
  }
}
export interface DbServiceTags {
  /**
  * Case sensitive, tag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name?: string;
  /**
  * Case sensitive, tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#value DbService#value}
  */
  readonly value?: string;
}

export function dbServiceTagsToTerraform(struct?: DbServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dbServiceTagsToHclTerraform(struct?: DbServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DbServiceTagsList extends cdktf.ComplexList {
  public internalValue? : DbServiceTags[] | cdktf.IResolvable

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
  public get(index: number): DbServiceTagsOutputReference {
    return new DbServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#create DbService#create}
  */
  readonly create?: string;
}

export function dbServiceTimeoutsToTerraform(struct?: DbServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dbServiceTimeoutsToHclTerraform(struct?: DbServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}
