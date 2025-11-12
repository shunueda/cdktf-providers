// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlMysqlDbSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#access_mode MysqlMysqlDbSystem#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}
  */
  readonly crashRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}
  */
  readonly dataStorageSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}
  */
  readonly databaseManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#database_mode MysqlMysqlDbSystem#database_mode}
  */
  readonly databaseMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}
  */
  readonly isHighlyAvailable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}
  */
  readonly mysqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#nsg_ids MysqlMysqlDbSystem#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}
  */
  readonly portX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#security_attributes MysqlMysqlDbSystem#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}
  */
  readonly shutdownType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}
  */
  readonly subnetId: string;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}
  */
  readonly backupPolicy?: MysqlMysqlDbSystemBackupPolicy;
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}
  */
  readonly customerContacts?: MysqlMysqlDbSystemCustomerContacts[] | cdktf.IResolvable;
  /**
  * data_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}
  */
  readonly dataStorage?: MysqlMysqlDbSystemDataStorage;
  /**
  * deletion_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}
  */
  readonly deletionPolicy?: MysqlMysqlDbSystemDeletionPolicy[] | cdktf.IResolvable;
  /**
  * encrypt_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#encrypt_data MysqlMysqlDbSystem#encrypt_data}
  */
  readonly encryptData?: MysqlMysqlDbSystemEncryptData;
  /**
  * maintenance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}
  */
  readonly maintenance?: MysqlMysqlDbSystemMaintenance;
  /**
  * read_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#read_endpoint MysqlMysqlDbSystem#read_endpoint}
  */
  readonly readEndpoint?: MysqlMysqlDbSystemReadEndpoint;
  /**
  * rest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#rest MysqlMysqlDbSystem#rest}
  */
  readonly rest?: MysqlMysqlDbSystemRest;
  /**
  * secure_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}
  */
  readonly secureConnections?: MysqlMysqlDbSystemSecureConnections;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}
  */
  readonly source?: MysqlMysqlDbSystemSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}
  */
  readonly timeouts?: MysqlMysqlDbSystemTimeouts;
}
export interface MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling {
}

export function mysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingToTerraform(struct?: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingToHclTerraform(struct?: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_configured_log_filename - computed: true, optional: false, required: false
  public get lastConfiguredLogFilename() {
    return this.getStringAttribute('last_configured_log_filename');
  }

  // last_configured_log_offset - computed: true, optional: false, required: false
  public get lastConfiguredLogOffset() {
    return this.getStringAttribute('last_configured_log_offset');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference {
    return new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemChannelsSourceSslCaCertificate {
}

export function mysqlMysqlDbSystemChannelsSourceSslCaCertificateToTerraform(struct?: MysqlMysqlDbSystemChannelsSourceSslCaCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsSourceSslCaCertificateToHclTerraform(struct?: MysqlMysqlDbSystemChannelsSourceSslCaCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannelsSourceSslCaCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannelsSourceSslCaCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // contents - computed: true, optional: false, required: false
  public get contents() {
    return this.getStringAttribute('contents');
  }
}

export class MysqlMysqlDbSystemChannelsSourceSslCaCertificateList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference {
    return new MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemChannelsSource {
}

export function mysqlMysqlDbSystemChannelsSourceToTerraform(struct?: MysqlMysqlDbSystemChannelsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsSourceToHclTerraform(struct?: MysqlMysqlDbSystemChannelsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannelsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannelsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anonymous_transactions_handling - computed: true, optional: false, required: false
  private _anonymousTransactionsHandling = new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(this, "anonymous_transactions_handling", false);
  public get anonymousTransactionsHandling() {
    return this._anonymousTransactionsHandling;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // ssl_ca_certificate - computed: true, optional: false, required: false
  private _sslCaCertificate = new MysqlMysqlDbSystemChannelsSourceSslCaCertificateList(this, "ssl_ca_certificate", false);
  public get sslCaCertificate() {
    return this._sslCaCertificate;
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class MysqlMysqlDbSystemChannelsSourceList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsSourceOutputReference {
    return new MysqlMysqlDbSystemChannelsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemChannelsTargetFilters {
}

export function mysqlMysqlDbSystemChannelsTargetFiltersToTerraform(struct?: MysqlMysqlDbSystemChannelsTargetFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsTargetFiltersToHclTerraform(struct?: MysqlMysqlDbSystemChannelsTargetFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsTargetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannelsTargetFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannelsTargetFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class MysqlMysqlDbSystemChannelsTargetFiltersList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsTargetFiltersOutputReference {
    return new MysqlMysqlDbSystemChannelsTargetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemChannelsTarget {
}

export function mysqlMysqlDbSystemChannelsTargetToTerraform(struct?: MysqlMysqlDbSystemChannelsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsTargetToHclTerraform(struct?: MysqlMysqlDbSystemChannelsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannelsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannelsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applier_username - computed: true, optional: false, required: false
  public get applierUsername() {
    return this.getStringAttribute('applier_username');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // delay_in_seconds - computed: true, optional: false, required: false
  public get delayInSeconds() {
    return this.getNumberAttribute('delay_in_seconds');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new MysqlMysqlDbSystemChannelsTargetFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // tables_without_primary_key_handling - computed: true, optional: false, required: false
  public get tablesWithoutPrimaryKeyHandling() {
    return this.getStringAttribute('tables_without_primary_key_handling');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class MysqlMysqlDbSystemChannelsTargetList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsTargetOutputReference {
    return new MysqlMysqlDbSystemChannelsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemChannels {
}

export function mysqlMysqlDbSystemChannelsToTerraform(struct?: MysqlMysqlDbSystemChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemChannelsToHclTerraform(struct?: MysqlMysqlDbSystemChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // source - computed: true, optional: false, required: false
  private _source = new MysqlMysqlDbSystemChannelsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target - computed: true, optional: false, required: false
  private _target = new MysqlMysqlDbSystemChannelsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class MysqlMysqlDbSystemChannelsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemChannelsOutputReference {
    return new MysqlMysqlDbSystemChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemCurrentPlacement {
}

export function mysqlMysqlDbSystemCurrentPlacementToTerraform(struct?: MysqlMysqlDbSystemCurrentPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemCurrentPlacementToHclTerraform(struct?: MysqlMysqlDbSystemCurrentPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemCurrentPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemCurrentPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemCurrentPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
}

export class MysqlMysqlDbSystemCurrentPlacementList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemCurrentPlacementOutputReference {
    return new MysqlMysqlDbSystemCurrentPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemEndpoints {
}

export function mysqlMysqlDbSystemEndpointsToTerraform(struct?: MysqlMysqlDbSystemEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemEndpointsToHclTerraform(struct?: MysqlMysqlDbSystemEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // modes - computed: true, optional: false, required: false
  public get modes() {
    return this.getListAttribute('modes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: false
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}

export class MysqlMysqlDbSystemEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemEndpointsOutputReference {
    return new MysqlMysqlDbSystemEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemHeatWaveCluster {
}

export function mysqlMysqlDbSystemHeatWaveClusterToTerraform(struct?: MysqlMysqlDbSystemHeatWaveCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemHeatWaveClusterToHclTerraform(struct?: MysqlMysqlDbSystemHeatWaveCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemHeatWaveClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemHeatWaveCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemHeatWaveCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_size - computed: true, optional: false, required: false
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }

  // is_lakehouse_enabled - computed: true, optional: false, required: false
  public get isLakehouseEnabled() {
    return this.getBooleanAttribute('is_lakehouse_enabled');
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class MysqlMysqlDbSystemHeatWaveClusterList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemHeatWaveClusterOutputReference {
    return new MysqlMysqlDbSystemHeatWaveClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemPointInTimeRecoveryDetails {
}

export function mysqlMysqlDbSystemPointInTimeRecoveryDetailsToTerraform(struct?: MysqlMysqlDbSystemPointInTimeRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlDbSystemPointInTimeRecoveryDetailsToHclTerraform(struct?: MysqlMysqlDbSystemPointInTimeRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemPointInTimeRecoveryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemPointInTimeRecoveryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_earliest_recovery_point - computed: true, optional: false, required: false
  public get timeEarliestRecoveryPoint() {
    return this.getStringAttribute('time_earliest_recovery_point');
  }

  // time_latest_recovery_point - computed: true, optional: false, required: false
  public get timeLatestRecoveryPoint() {
    return this.getStringAttribute('time_latest_recovery_point');
  }
}

export class MysqlMysqlDbSystemPointInTimeRecoveryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference {
    return new MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemBackupPolicyCopyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#backup_copy_retention_in_days MysqlMysqlDbSystem#backup_copy_retention_in_days}
  */
  readonly backupCopyRetentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#copy_to_region MysqlMysqlDbSystem#copy_to_region}
  */
  readonly copyToRegion: string;
}

export function mysqlMysqlDbSystemBackupPolicyCopyPoliciesToTerraform(struct?: MysqlMysqlDbSystemBackupPolicyCopyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_copy_retention_in_days: cdktf.numberToTerraform(struct!.backupCopyRetentionInDays),
    copy_to_region: cdktf.stringToTerraform(struct!.copyToRegion),
  }
}


export function mysqlMysqlDbSystemBackupPolicyCopyPoliciesToHclTerraform(struct?: MysqlMysqlDbSystemBackupPolicyCopyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_copy_retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.backupCopyRetentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_to_region: {
      value: cdktf.stringToHclTerraform(struct!.copyToRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemBackupPolicyCopyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemBackupPolicyCopyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupCopyRetentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCopyRetentionInDays = this._backupCopyRetentionInDays;
    }
    if (this._copyToRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyToRegion = this._copyToRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemBackupPolicyCopyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupCopyRetentionInDays = undefined;
      this._copyToRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupCopyRetentionInDays = value.backupCopyRetentionInDays;
      this._copyToRegion = value.copyToRegion;
    }
  }

  // backup_copy_retention_in_days - computed: true, optional: true, required: false
  private _backupCopyRetentionInDays?: number; 
  public get backupCopyRetentionInDays() {
    return this.getNumberAttribute('backup_copy_retention_in_days');
  }
  public set backupCopyRetentionInDays(value: number) {
    this._backupCopyRetentionInDays = value;
  }
  public resetBackupCopyRetentionInDays() {
    this._backupCopyRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCopyRetentionInDaysInput() {
    return this._backupCopyRetentionInDays;
  }

  // copy_to_region - computed: false, optional: false, required: true
  private _copyToRegion?: string; 
  public get copyToRegion() {
    return this.getStringAttribute('copy_to_region');
  }
  public set copyToRegion(value: string) {
    this._copyToRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyToRegionInput() {
    return this._copyToRegion;
  }
}

export class MysqlMysqlDbSystemBackupPolicyCopyPoliciesList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlDbSystemBackupPolicyCopyPolicies[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlDbSystemBackupPolicyCopyPoliciesOutputReference {
    return new MysqlMysqlDbSystemBackupPolicyCopyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemBackupPolicyPitrPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function mysqlMysqlDbSystemBackupPolicyPitrPolicyToTerraform(struct?: MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference | MysqlMysqlDbSystemBackupPolicyPitrPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function mysqlMysqlDbSystemBackupPolicyPitrPolicyToHclTerraform(struct?: MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference | MysqlMysqlDbSystemBackupPolicyPitrPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemBackupPolicyPitrPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemBackupPolicyPitrPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface MysqlMysqlDbSystemBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#soft_delete MysqlMysqlDbSystem#soft_delete}
  */
  readonly softDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}
  */
  readonly windowStartTime?: string;
  /**
  * copy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#copy_policies MysqlMysqlDbSystem#copy_policies}
  */
  readonly copyPolicies?: MysqlMysqlDbSystemBackupPolicyCopyPolicies[] | cdktf.IResolvable;
  /**
  * pitr_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}
  */
  readonly pitrPolicy?: MysqlMysqlDbSystemBackupPolicyPitrPolicy;
}

export function mysqlMysqlDbSystemBackupPolicyToTerraform(struct?: MysqlMysqlDbSystemBackupPolicyOutputReference | MysqlMysqlDbSystemBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    soft_delete: cdktf.stringToTerraform(struct!.softDelete),
    window_start_time: cdktf.stringToTerraform(struct!.windowStartTime),
    copy_policies: cdktf.listMapper(mysqlMysqlDbSystemBackupPolicyCopyPoliciesToTerraform, true)(struct!.copyPolicies),
    pitr_policy: mysqlMysqlDbSystemBackupPolicyPitrPolicyToTerraform(struct!.pitrPolicy),
  }
}


export function mysqlMysqlDbSystemBackupPolicyToHclTerraform(struct?: MysqlMysqlDbSystemBackupPolicyOutputReference | MysqlMysqlDbSystemBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soft_delete: {
      value: cdktf.stringToHclTerraform(struct!.softDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: cdktf.stringToHclTerraform(struct!.windowStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_policies: {
      value: cdktf.listMapperHcl(mysqlMysqlDbSystemBackupPolicyCopyPoliciesToHclTerraform, true)(struct!.copyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlDbSystemBackupPolicyCopyPoliciesList",
    },
    pitr_policy: {
      value: mysqlMysqlDbSystemBackupPolicyPitrPolicyToHclTerraform(struct!.pitrPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlDbSystemBackupPolicyPitrPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._softDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.softDelete = this._softDelete;
    }
    if (this._windowStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime;
    }
    if (this._copyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyPolicies = this._copyPolicies?.internalValue;
    }
    if (this._pitrPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitrPolicy = this._pitrPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._isEnabled = undefined;
      this._retentionInDays = undefined;
      this._softDelete = undefined;
      this._windowStartTime = undefined;
      this._copyPolicies.internalValue = undefined;
      this._pitrPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._isEnabled = value.isEnabled;
      this._retentionInDays = value.retentionInDays;
      this._softDelete = value.softDelete;
      this._windowStartTime = value.windowStartTime;
      this._copyPolicies.internalValue = value.copyPolicies;
      this._pitrPolicy.internalValue = value.pitrPolicy;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // soft_delete - computed: true, optional: true, required: false
  private _softDelete?: string; 
  public get softDelete() {
    return this.getStringAttribute('soft_delete');
  }
  public set softDelete(value: string) {
    this._softDelete = value;
  }
  public resetSoftDelete() {
    this._softDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteInput() {
    return this._softDelete;
  }

  // window_start_time - computed: true, optional: true, required: false
  private _windowStartTime?: string; 
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
  public set windowStartTime(value: string) {
    this._windowStartTime = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime;
  }

  // copy_policies - computed: false, optional: true, required: false
  private _copyPolicies = new MysqlMysqlDbSystemBackupPolicyCopyPoliciesList(this, "copy_policies", false);
  public get copyPolicies() {
    return this._copyPolicies;
  }
  public putCopyPolicies(value: MysqlMysqlDbSystemBackupPolicyCopyPolicies[] | cdktf.IResolvable) {
    this._copyPolicies.internalValue = value;
  }
  public resetCopyPolicies() {
    this._copyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPoliciesInput() {
    return this._copyPolicies.internalValue;
  }

  // pitr_policy - computed: false, optional: true, required: false
  private _pitrPolicy = new MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(this, "pitr_policy");
  public get pitrPolicy() {
    return this._pitrPolicy;
  }
  public putPitrPolicy(value: MysqlMysqlDbSystemBackupPolicyPitrPolicy) {
    this._pitrPolicy.internalValue = value;
  }
  public resetPitrPolicy() {
    this._pitrPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrPolicyInput() {
    return this._pitrPolicy.internalValue;
  }
}
export interface MysqlMysqlDbSystemCustomerContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}
  */
  readonly email: string;
}

export function mysqlMysqlDbSystemCustomerContactsToTerraform(struct?: MysqlMysqlDbSystemCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function mysqlMysqlDbSystemCustomerContactsToHclTerraform(struct?: MysqlMysqlDbSystemCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemCustomerContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemCustomerContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
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
}

export class MysqlMysqlDbSystemCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlDbSystemCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlDbSystemCustomerContactsOutputReference {
    return new MysqlMysqlDbSystemCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemDataStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}
  */
  readonly isAutoExpandStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}
  */
  readonly maxStorageSizeInGbs?: number;
}

export function mysqlMysqlDbSystemDataStorageToTerraform(struct?: MysqlMysqlDbSystemDataStorageOutputReference | MysqlMysqlDbSystemDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_auto_expand_storage_enabled: cdktf.booleanToTerraform(struct!.isAutoExpandStorageEnabled),
    max_storage_size_in_gbs: cdktf.numberToTerraform(struct!.maxStorageSizeInGbs),
  }
}


export function mysqlMysqlDbSystemDataStorageToHclTerraform(struct?: MysqlMysqlDbSystemDataStorageOutputReference | MysqlMysqlDbSystemDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_auto_expand_storage_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoExpandStorageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.maxStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemDataStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemDataStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAutoExpandStorageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoExpandStorageEnabled = this._isAutoExpandStorageEnabled;
    }
    if (this._maxStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorageSizeInGbs = this._maxStorageSizeInGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemDataStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isAutoExpandStorageEnabled = undefined;
      this._maxStorageSizeInGbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isAutoExpandStorageEnabled = value.isAutoExpandStorageEnabled;
      this._maxStorageSizeInGbs = value.maxStorageSizeInGbs;
    }
  }

  // allocated_storage_size_in_gbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInGbs() {
    return this.getNumberAttribute('allocated_storage_size_in_gbs');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // data_storage_size_limit_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeLimitInGbs() {
    return this.getNumberAttribute('data_storage_size_limit_in_gbs');
  }

  // is_auto_expand_storage_enabled - computed: true, optional: true, required: false
  private _isAutoExpandStorageEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoExpandStorageEnabled() {
    return this.getBooleanAttribute('is_auto_expand_storage_enabled');
  }
  public set isAutoExpandStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoExpandStorageEnabled = value;
  }
  public resetIsAutoExpandStorageEnabled() {
    this._isAutoExpandStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoExpandStorageEnabledInput() {
    return this._isAutoExpandStorageEnabled;
  }

  // max_storage_size_in_gbs - computed: true, optional: true, required: false
  private _maxStorageSizeInGbs?: number; 
  public get maxStorageSizeInGbs() {
    return this.getNumberAttribute('max_storage_size_in_gbs');
  }
  public set maxStorageSizeInGbs(value: number) {
    this._maxStorageSizeInGbs = value;
  }
  public resetMaxStorageSizeInGbs() {
    this._maxStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageSizeInGbsInput() {
    return this._maxStorageSizeInGbs;
  }
}
export interface MysqlMysqlDbSystemDeletionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}
  */
  readonly automaticBackupRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}
  */
  readonly finalBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}
  */
  readonly isDeleteProtected?: boolean | cdktf.IResolvable;
}

export function mysqlMysqlDbSystemDeletionPolicyToTerraform(struct?: MysqlMysqlDbSystemDeletionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_backup_retention: cdktf.stringToTerraform(struct!.automaticBackupRetention),
    final_backup: cdktf.stringToTerraform(struct!.finalBackup),
    is_delete_protected: cdktf.booleanToTerraform(struct!.isDeleteProtected),
  }
}


export function mysqlMysqlDbSystemDeletionPolicyToHclTerraform(struct?: MysqlMysqlDbSystemDeletionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_backup_retention: {
      value: cdktf.stringToHclTerraform(struct!.automaticBackupRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_backup: {
      value: cdktf.stringToHclTerraform(struct!.finalBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_delete_protected: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleteProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemDeletionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlDbSystemDeletionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticBackupRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticBackupRetention = this._automaticBackupRetention;
    }
    if (this._finalBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalBackup = this._finalBackup;
    }
    if (this._isDeleteProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleteProtected = this._isDeleteProtected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemDeletionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticBackupRetention = undefined;
      this._finalBackup = undefined;
      this._isDeleteProtected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticBackupRetention = value.automaticBackupRetention;
      this._finalBackup = value.finalBackup;
      this._isDeleteProtected = value.isDeleteProtected;
    }
  }

  // automatic_backup_retention - computed: true, optional: true, required: false
  private _automaticBackupRetention?: string; 
  public get automaticBackupRetention() {
    return this.getStringAttribute('automatic_backup_retention');
  }
  public set automaticBackupRetention(value: string) {
    this._automaticBackupRetention = value;
  }
  public resetAutomaticBackupRetention() {
    this._automaticBackupRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticBackupRetentionInput() {
    return this._automaticBackupRetention;
  }

  // final_backup - computed: true, optional: true, required: false
  private _finalBackup?: string; 
  public get finalBackup() {
    return this.getStringAttribute('final_backup');
  }
  public set finalBackup(value: string) {
    this._finalBackup = value;
  }
  public resetFinalBackup() {
    this._finalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupInput() {
    return this._finalBackup;
  }

  // is_delete_protected - computed: true, optional: true, required: false
  private _isDeleteProtected?: boolean | cdktf.IResolvable; 
  public get isDeleteProtected() {
    return this.getBooleanAttribute('is_delete_protected');
  }
  public set isDeleteProtected(value: boolean | cdktf.IResolvable) {
    this._isDeleteProtected = value;
  }
  public resetIsDeleteProtected() {
    this._isDeleteProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeleteProtectedInput() {
    return this._isDeleteProtected;
  }
}

export class MysqlMysqlDbSystemDeletionPolicyList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlDbSystemDeletionPolicy[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlDbSystemDeletionPolicyOutputReference {
    return new MysqlMysqlDbSystemDeletionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlDbSystemEncryptData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#key_generation_type MysqlMysqlDbSystem#key_generation_type}
  */
  readonly keyGenerationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#key_id MysqlMysqlDbSystem#key_id}
  */
  readonly keyId?: string;
}

export function mysqlMysqlDbSystemEncryptDataToTerraform(struct?: MysqlMysqlDbSystemEncryptDataOutputReference | MysqlMysqlDbSystemEncryptData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_generation_type: cdktf.stringToTerraform(struct!.keyGenerationType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function mysqlMysqlDbSystemEncryptDataToHclTerraform(struct?: MysqlMysqlDbSystemEncryptDataOutputReference | MysqlMysqlDbSystemEncryptData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_generation_type: {
      value: cdktf.stringToHclTerraform(struct!.keyGenerationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemEncryptDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemEncryptData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyGenerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyGenerationType = this._keyGenerationType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemEncryptData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyGenerationType = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyGenerationType = value.keyGenerationType;
      this._keyId = value.keyId;
    }
  }

  // key_generation_type - computed: false, optional: false, required: true
  private _keyGenerationType?: string; 
  public get keyGenerationType() {
    return this.getStringAttribute('key_generation_type');
  }
  public set keyGenerationType(value: string) {
    this._keyGenerationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyGenerationTypeInput() {
    return this._keyGenerationType;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface MysqlMysqlDbSystemMaintenance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#maintenance_schedule_type MysqlMysqlDbSystem#maintenance_schedule_type}
  */
  readonly maintenanceScheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#version_preference MysqlMysqlDbSystem#version_preference}
  */
  readonly versionPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#version_track_preference MysqlMysqlDbSystem#version_track_preference}
  */
  readonly versionTrackPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}
  */
  readonly windowStartTime: string;
}

export function mysqlMysqlDbSystemMaintenanceToTerraform(struct?: MysqlMysqlDbSystemMaintenanceOutputReference | MysqlMysqlDbSystemMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_schedule_type: cdktf.stringToTerraform(struct!.maintenanceScheduleType),
    version_preference: cdktf.stringToTerraform(struct!.versionPreference),
    version_track_preference: cdktf.stringToTerraform(struct!.versionTrackPreference),
    window_start_time: cdktf.stringToTerraform(struct!.windowStartTime),
  }
}


export function mysqlMysqlDbSystemMaintenanceToHclTerraform(struct?: MysqlMysqlDbSystemMaintenanceOutputReference | MysqlMysqlDbSystemMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceScheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_preference: {
      value: cdktf.stringToHclTerraform(struct!.versionPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_track_preference: {
      value: cdktf.stringToHclTerraform(struct!.versionTrackPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: cdktf.stringToHclTerraform(struct!.windowStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceScheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceScheduleType = this._maintenanceScheduleType;
    }
    if (this._versionPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPreference = this._versionPreference;
    }
    if (this._versionTrackPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionTrackPreference = this._versionTrackPreference;
    }
    if (this._windowStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceScheduleType = undefined;
      this._versionPreference = undefined;
      this._versionTrackPreference = undefined;
      this._windowStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceScheduleType = value.maintenanceScheduleType;
      this._versionPreference = value.versionPreference;
      this._versionTrackPreference = value.versionTrackPreference;
      this._windowStartTime = value.windowStartTime;
    }
  }

  // maintenance_schedule_type - computed: true, optional: true, required: false
  private _maintenanceScheduleType?: string; 
  public get maintenanceScheduleType() {
    return this.getStringAttribute('maintenance_schedule_type');
  }
  public set maintenanceScheduleType(value: string) {
    this._maintenanceScheduleType = value;
  }
  public resetMaintenanceScheduleType() {
    this._maintenanceScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceScheduleTypeInput() {
    return this._maintenanceScheduleType;
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // version_preference - computed: true, optional: true, required: false
  private _versionPreference?: string; 
  public get versionPreference() {
    return this.getStringAttribute('version_preference');
  }
  public set versionPreference(value: string) {
    this._versionPreference = value;
  }
  public resetVersionPreference() {
    this._versionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPreferenceInput() {
    return this._versionPreference;
  }

  // version_track_preference - computed: true, optional: true, required: false
  private _versionTrackPreference?: string; 
  public get versionTrackPreference() {
    return this.getStringAttribute('version_track_preference');
  }
  public set versionTrackPreference(value: string) {
    this._versionTrackPreference = value;
  }
  public resetVersionTrackPreference() {
    this._versionTrackPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTrackPreferenceInput() {
    return this._versionTrackPreference;
  }

  // window_start_time - computed: false, optional: false, required: true
  private _windowStartTime?: string; 
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
  public set windowStartTime(value: string) {
    this._windowStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime;
  }
}
export interface MysqlMysqlDbSystemReadEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#exclude_ips MysqlMysqlDbSystem#exclude_ips}
  */
  readonly excludeIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#read_endpoint_hostname_label MysqlMysqlDbSystem#read_endpoint_hostname_label}
  */
  readonly readEndpointHostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#read_endpoint_ip_address MysqlMysqlDbSystem#read_endpoint_ip_address}
  */
  readonly readEndpointIpAddress?: string;
}

export function mysqlMysqlDbSystemReadEndpointToTerraform(struct?: MysqlMysqlDbSystemReadEndpointOutputReference | MysqlMysqlDbSystemReadEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeIps),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    read_endpoint_hostname_label: cdktf.stringToTerraform(struct!.readEndpointHostnameLabel),
    read_endpoint_ip_address: cdktf.stringToTerraform(struct!.readEndpointIpAddress),
  }
}


export function mysqlMysqlDbSystemReadEndpointToHclTerraform(struct?: MysqlMysqlDbSystemReadEndpointOutputReference | MysqlMysqlDbSystemReadEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_endpoint_hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.readEndpointHostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_endpoint_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.readEndpointIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemReadEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemReadEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIps = this._excludeIps;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._readEndpointHostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.readEndpointHostnameLabel = this._readEndpointHostnameLabel;
    }
    if (this._readEndpointIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.readEndpointIpAddress = this._readEndpointIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemReadEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeIps = undefined;
      this._isEnabled = undefined;
      this._readEndpointHostnameLabel = undefined;
      this._readEndpointIpAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeIps = value.excludeIps;
      this._isEnabled = value.isEnabled;
      this._readEndpointHostnameLabel = value.readEndpointHostnameLabel;
      this._readEndpointIpAddress = value.readEndpointIpAddress;
    }
  }

  // exclude_ips - computed: true, optional: true, required: false
  private _excludeIps?: string[]; 
  public get excludeIps() {
    return this.getListAttribute('exclude_ips');
  }
  public set excludeIps(value: string[]) {
    this._excludeIps = value;
  }
  public resetExcludeIps() {
    this._excludeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpsInput() {
    return this._excludeIps;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // read_endpoint_hostname_label - computed: true, optional: true, required: false
  private _readEndpointHostnameLabel?: string; 
  public get readEndpointHostnameLabel() {
    return this.getStringAttribute('read_endpoint_hostname_label');
  }
  public set readEndpointHostnameLabel(value: string) {
    this._readEndpointHostnameLabel = value;
  }
  public resetReadEndpointHostnameLabel() {
    this._readEndpointHostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readEndpointHostnameLabelInput() {
    return this._readEndpointHostnameLabel;
  }

  // read_endpoint_ip_address - computed: true, optional: true, required: false
  private _readEndpointIpAddress?: string; 
  public get readEndpointIpAddress() {
    return this.getStringAttribute('read_endpoint_ip_address');
  }
  public set readEndpointIpAddress(value: string) {
    this._readEndpointIpAddress = value;
  }
  public resetReadEndpointIpAddress() {
    this._readEndpointIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readEndpointIpAddressInput() {
    return this._readEndpointIpAddress;
  }
}
export interface MysqlMysqlDbSystemRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#configuration MysqlMysqlDbSystem#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}
  */
  readonly port?: number;
}

export function mysqlMysqlDbSystemRestToTerraform(struct?: MysqlMysqlDbSystemRestOutputReference | MysqlMysqlDbSystemRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mysqlMysqlDbSystemRestToHclTerraform(struct?: MysqlMysqlDbSystemRestOutputReference | MysqlMysqlDbSystemRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemRest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemRest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._port = value.port;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MysqlMysqlDbSystemSecureConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}
  */
  readonly certificateGenerationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}
  */
  readonly certificateId?: string;
}

export function mysqlMysqlDbSystemSecureConnectionsToTerraform(struct?: MysqlMysqlDbSystemSecureConnectionsOutputReference | MysqlMysqlDbSystemSecureConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_generation_type: cdktf.stringToTerraform(struct!.certificateGenerationType),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function mysqlMysqlDbSystemSecureConnectionsToHclTerraform(struct?: MysqlMysqlDbSystemSecureConnectionsOutputReference | MysqlMysqlDbSystemSecureConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_generation_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateGenerationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemSecureConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemSecureConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateGenerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateGenerationType = this._certificateGenerationType;
    }
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemSecureConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateGenerationType = undefined;
      this._certificateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateGenerationType = value.certificateGenerationType;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_generation_type - computed: false, optional: false, required: true
  private _certificateGenerationType?: string; 
  public get certificateGenerationType() {
    return this.getStringAttribute('certificate_generation_type');
  }
  public set certificateGenerationType(value: string) {
    this._certificateGenerationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateGenerationTypeInput() {
    return this._certificateGenerationType;
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}
export interface MysqlMysqlDbSystemSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}
  */
  readonly recoveryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}
  */
  readonly sourceUrl?: string;
}

export function mysqlMysqlDbSystemSourceToTerraform(struct?: MysqlMysqlDbSystemSourceOutputReference | MysqlMysqlDbSystemSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    recovery_point: cdktf.stringToTerraform(struct!.recoveryPoint),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}


export function mysqlMysqlDbSystemSourceToHclTerraform(struct?: MysqlMysqlDbSystemSourceOutputReference | MysqlMysqlDbSystemSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_point: {
      value: cdktf.stringToHclTerraform(struct!.recoveryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlDbSystemSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._recoveryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPoint = this._recoveryPoint;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._dbSystemId = undefined;
      this._recoveryPoint = undefined;
      this._sourceType = undefined;
      this._sourceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._dbSystemId = value.dbSystemId;
      this._recoveryPoint = value.recoveryPoint;
      this._sourceType = value.sourceType;
      this._sourceUrl = value.sourceUrl;
    }
  }

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // recovery_point - computed: true, optional: true, required: false
  private _recoveryPoint?: string; 
  public get recoveryPoint() {
    return this.getStringAttribute('recovery_point');
  }
  public set recoveryPoint(value: string) {
    this._recoveryPoint = value;
  }
  public resetRecoveryPoint() {
    this._recoveryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointInput() {
    return this._recoveryPoint;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }
}
export interface MysqlMysqlDbSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}
  */
  readonly update?: string;
}

export function mysqlMysqlDbSystemTimeoutsToTerraform(struct?: MysqlMysqlDbSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mysqlMysqlDbSystemTimeoutsToHclTerraform(struct?: MysqlMysqlDbSystemTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlDbSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlMysqlDbSystemTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlDbSystemTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system}
*/
export class MysqlMysqlDbSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_mysql_db_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlMysqlDbSystem to import
  * @param importFromId The id of the existing MysqlMysqlDbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlMysqlDbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_mysql_db_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlMysqlDbSystemConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlMysqlDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_db_system',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._configurationId = config.configurationId;
    this._crashRecovery = config.crashRecovery;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._databaseManagement = config.databaseManagement;
    this._databaseMode = config.databaseMode;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._hostnameLabel = config.hostnameLabel;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._isHighlyAvailable = config.isHighlyAvailable;
    this._mysqlVersion = config.mysqlVersion;
    this._nsgIds = config.nsgIds;
    this._port = config.port;
    this._portX = config.portX;
    this._securityAttributes = config.securityAttributes;
    this._shapeName = config.shapeName;
    this._shutdownType = config.shutdownType;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._customerContacts.internalValue = config.customerContacts;
    this._dataStorage.internalValue = config.dataStorage;
    this._deletionPolicy.internalValue = config.deletionPolicy;
    this._encryptData.internalValue = config.encryptData;
    this._maintenance.internalValue = config.maintenance;
    this._readEndpoint.internalValue = config.readEndpoint;
    this._rest.internalValue = config.rest;
    this._secureConnections.internalValue = config.secureConnections;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // channels - computed: true, optional: false, required: false
  private _channels = new MysqlMysqlDbSystemChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // configuration_id - computed: true, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // crash_recovery - computed: true, optional: true, required: false
  private _crashRecovery?: string; 
  public get crashRecovery() {
    return this.getStringAttribute('crash_recovery');
  }
  public set crashRecovery(value: string) {
    this._crashRecovery = value;
  }
  public resetCrashRecovery() {
    this._crashRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashRecoveryInput() {
    return this._crashRecovery;
  }

  // current_placement - computed: true, optional: false, required: false
  private _currentPlacement = new MysqlMysqlDbSystemCurrentPlacementList(this, "current_placement", false);
  public get currentPlacement() {
    return this._currentPlacement;
  }

  // data_storage_size_in_gb - computed: true, optional: true, required: false
  private _dataStorageSizeInGb?: number; 
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number) {
    this._dataStorageSizeInGb = value;
  }
  public resetDataStorageSizeInGb() {
    this._dataStorageSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbInput() {
    return this._dataStorageSizeInGb;
  }

  // database_management - computed: true, optional: true, required: false
  private _databaseManagement?: string; 
  public get databaseManagement() {
    return this.getStringAttribute('database_management');
  }
  public set databaseManagement(value: string) {
    this._databaseManagement = value;
  }
  public resetDatabaseManagement() {
    this._databaseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseManagementInput() {
    return this._databaseManagement;
  }

  // database_mode - computed: true, optional: true, required: false
  private _databaseMode?: string; 
  public get databaseMode() {
    return this.getStringAttribute('database_mode');
  }
  public set databaseMode(value: string) {
    this._databaseMode = value;
  }
  public resetDatabaseMode() {
    this._databaseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseModeInput() {
    return this._databaseMode;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new MysqlMysqlDbSystemEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // heat_wave_cluster - computed: true, optional: false, required: false
  private _heatWaveCluster = new MysqlMysqlDbSystemHeatWaveClusterList(this, "heat_wave_cluster", false);
  public get heatWaveCluster() {
    return this._heatWaveCluster;
  }

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_heat_wave_cluster_attached - computed: true, optional: false, required: false
  public get isHeatWaveClusterAttached() {
    return this.getBooleanAttribute('is_heat_wave_cluster_attached');
  }

  // is_highly_available - computed: true, optional: true, required: false
  private _isHighlyAvailable?: boolean | cdktf.IResolvable; 
  public get isHighlyAvailable() {
    return this.getBooleanAttribute('is_highly_available');
  }
  public set isHighlyAvailable(value: boolean | cdktf.IResolvable) {
    this._isHighlyAvailable = value;
  }
  public resetIsHighlyAvailable() {
    this._isHighlyAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHighlyAvailableInput() {
    return this._isHighlyAvailable;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: true, required: false
  private _mysqlVersion?: string; 
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }
  public set mysqlVersion(value: string) {
    this._mysqlVersion = value;
  }
  public resetMysqlVersion() {
    this._mysqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlVersionInput() {
    return this._mysqlVersion;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // point_in_time_recovery_details - computed: true, optional: false, required: false
  private _pointInTimeRecoveryDetails = new MysqlMysqlDbSystemPointInTimeRecoveryDetailsList(this, "point_in_time_recovery_details", false);
  public get pointInTimeRecoveryDetails() {
    return this._pointInTimeRecoveryDetails;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_x - computed: true, optional: true, required: false
  private _portX?: number; 
  public get portX() {
    return this.getNumberAttribute('port_x');
  }
  public set portX(value: number) {
    this._portX = value;
  }
  public resetPortX() {
    this._portX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portXInput() {
    return this._portX;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // shutdown_type - computed: false, optional: true, required: false
  private _shutdownType?: string; 
  public get shutdownType() {
    return this.getStringAttribute('shutdown_type');
  }
  public set shutdownType(value: string) {
    this._shutdownType = value;
  }
  public resetShutdownType() {
    this._shutdownType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownTypeInput() {
    return this._shutdownType;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new MysqlMysqlDbSystemBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: MysqlMysqlDbSystemBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new MysqlMysqlDbSystemCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: MysqlMysqlDbSystemCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }

  // data_storage - computed: false, optional: true, required: false
  private _dataStorage = new MysqlMysqlDbSystemDataStorageOutputReference(this, "data_storage");
  public get dataStorage() {
    return this._dataStorage;
  }
  public putDataStorage(value: MysqlMysqlDbSystemDataStorage) {
    this._dataStorage.internalValue = value;
  }
  public resetDataStorage() {
    this._dataStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageInput() {
    return this._dataStorage.internalValue;
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy = new MysqlMysqlDbSystemDeletionPolicyList(this, "deletion_policy", false);
  public get deletionPolicy() {
    return this._deletionPolicy;
  }
  public putDeletionPolicy(value: MysqlMysqlDbSystemDeletionPolicy[] | cdktf.IResolvable) {
    this._deletionPolicy.internalValue = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy.internalValue;
  }

  // encrypt_data - computed: false, optional: true, required: false
  private _encryptData = new MysqlMysqlDbSystemEncryptDataOutputReference(this, "encrypt_data");
  public get encryptData() {
    return this._encryptData;
  }
  public putEncryptData(value: MysqlMysqlDbSystemEncryptData) {
    this._encryptData.internalValue = value;
  }
  public resetEncryptData() {
    this._encryptData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDataInput() {
    return this._encryptData.internalValue;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance = new MysqlMysqlDbSystemMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: MysqlMysqlDbSystemMaintenance) {
    this._maintenance.internalValue = value;
  }
  public resetMaintenance() {
    this._maintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
  }

  // read_endpoint - computed: false, optional: true, required: false
  private _readEndpoint = new MysqlMysqlDbSystemReadEndpointOutputReference(this, "read_endpoint");
  public get readEndpoint() {
    return this._readEndpoint;
  }
  public putReadEndpoint(value: MysqlMysqlDbSystemReadEndpoint) {
    this._readEndpoint.internalValue = value;
  }
  public resetReadEndpoint() {
    this._readEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readEndpointInput() {
    return this._readEndpoint.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new MysqlMysqlDbSystemRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: MysqlMysqlDbSystemRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }

  // secure_connections - computed: false, optional: true, required: false
  private _secureConnections = new MysqlMysqlDbSystemSecureConnectionsOutputReference(this, "secure_connections");
  public get secureConnections() {
    return this._secureConnections;
  }
  public putSecureConnections(value: MysqlMysqlDbSystemSecureConnections) {
    this._secureConnections.internalValue = value;
  }
  public resetSecureConnections() {
    this._secureConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConnectionsInput() {
    return this._secureConnections.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new MysqlMysqlDbSystemSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: MysqlMysqlDbSystemSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlMysqlDbSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlMysqlDbSystemTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      crash_recovery: cdktf.stringToTerraform(this._crashRecovery),
      data_storage_size_in_gb: cdktf.numberToTerraform(this._dataStorageSizeInGb),
      database_management: cdktf.stringToTerraform(this._databaseManagement),
      database_mode: cdktf.stringToTerraform(this._databaseMode),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      hostname_label: cdktf.stringToTerraform(this._hostnameLabel),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_highly_available: cdktf.booleanToTerraform(this._isHighlyAvailable),
      mysql_version: cdktf.stringToTerraform(this._mysqlVersion),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      port: cdktf.numberToTerraform(this._port),
      port_x: cdktf.numberToTerraform(this._portX),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape_name: cdktf.stringToTerraform(this._shapeName),
      shutdown_type: cdktf.stringToTerraform(this._shutdownType),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      backup_policy: mysqlMysqlDbSystemBackupPolicyToTerraform(this._backupPolicy.internalValue),
      customer_contacts: cdktf.listMapper(mysqlMysqlDbSystemCustomerContactsToTerraform, true)(this._customerContacts.internalValue),
      data_storage: mysqlMysqlDbSystemDataStorageToTerraform(this._dataStorage.internalValue),
      deletion_policy: cdktf.listMapper(mysqlMysqlDbSystemDeletionPolicyToTerraform, true)(this._deletionPolicy.internalValue),
      encrypt_data: mysqlMysqlDbSystemEncryptDataToTerraform(this._encryptData.internalValue),
      maintenance: mysqlMysqlDbSystemMaintenanceToTerraform(this._maintenance.internalValue),
      read_endpoint: mysqlMysqlDbSystemReadEndpointToTerraform(this._readEndpoint.internalValue),
      rest: mysqlMysqlDbSystemRestToTerraform(this._rest.internalValue),
      secure_connections: mysqlMysqlDbSystemSecureConnectionsToTerraform(this._secureConnections.internalValue),
      source: mysqlMysqlDbSystemSourceToTerraform(this._source.internalValue),
      timeouts: mysqlMysqlDbSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crash_recovery: {
        value: cdktf.stringToHclTerraform(this._crashRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_storage_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_management: {
        value: cdktf.stringToHclTerraform(this._databaseManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_mode: {
        value: cdktf.stringToHclTerraform(this._databaseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hostname_label: {
        value: cdktf.stringToHclTerraform(this._hostnameLabel),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_highly_available: {
        value: cdktf.booleanToHclTerraform(this._isHighlyAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mysql_version: {
        value: cdktf.stringToHclTerraform(this._mysqlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_x: {
        value: cdktf.numberToHclTerraform(this._portX),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shape_name: {
        value: cdktf.stringToHclTerraform(this._shapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_type: {
        value: cdktf.stringToHclTerraform(this._shutdownType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy: {
        value: mysqlMysqlDbSystemBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemBackupPolicyList",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(mysqlMysqlDbSystemCustomerContactsToHclTerraform, true)(this._customerContacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemCustomerContactsList",
      },
      data_storage: {
        value: mysqlMysqlDbSystemDataStorageToHclTerraform(this._dataStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemDataStorageList",
      },
      deletion_policy: {
        value: cdktf.listMapperHcl(mysqlMysqlDbSystemDeletionPolicyToHclTerraform, true)(this._deletionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemDeletionPolicyList",
      },
      encrypt_data: {
        value: mysqlMysqlDbSystemEncryptDataToHclTerraform(this._encryptData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemEncryptDataList",
      },
      maintenance: {
        value: mysqlMysqlDbSystemMaintenanceToHclTerraform(this._maintenance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemMaintenanceList",
      },
      read_endpoint: {
        value: mysqlMysqlDbSystemReadEndpointToHclTerraform(this._readEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemReadEndpointList",
      },
      rest: {
        value: mysqlMysqlDbSystemRestToHclTerraform(this._rest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemRestList",
      },
      secure_connections: {
        value: mysqlMysqlDbSystemSecureConnectionsToHclTerraform(this._secureConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemSecureConnectionsList",
      },
      source: {
        value: mysqlMysqlDbSystemSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlDbSystemSourceList",
      },
      timeouts: {
        value: mysqlMysqlDbSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlMysqlDbSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
