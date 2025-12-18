// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStorageMountTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}
  */
  readonly idmapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}
  */
  readonly requestedThroughput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#security_attributes FileStorageMountTarget#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}
  */
  readonly subnetId: string;
  /**
  * kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}
  */
  readonly kerberos?: FileStorageMountTargetKerberos;
  /**
  * ldap_idmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}
  */
  readonly ldapIdmap?: FileStorageMountTargetLdapIdmap;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}
  */
  readonly locks?: FileStorageMountTargetLocks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}
  */
  readonly timeouts?: FileStorageMountTargetTimeouts;
}
export interface FileStorageMountTargetKerberos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}
  */
  readonly backupKeyTabSecretVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}
  */
  readonly currentKeyTabSecretVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}
  */
  readonly isKerberosEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}
  */
  readonly kerberosRealm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}
  */
  readonly keyTabSecretId?: string;
}

export function fileStorageMountTargetKerberosToTerraform(struct?: FileStorageMountTargetKerberosOutputReference | FileStorageMountTargetKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_key_tab_secret_version: cdktf.numberToTerraform(struct!.backupKeyTabSecretVersion),
    current_key_tab_secret_version: cdktf.numberToTerraform(struct!.currentKeyTabSecretVersion),
    is_kerberos_enabled: cdktf.booleanToTerraform(struct!.isKerberosEnabled),
    kerberos_realm: cdktf.stringToTerraform(struct!.kerberosRealm),
    key_tab_secret_id: cdktf.stringToTerraform(struct!.keyTabSecretId),
  }
}


export function fileStorageMountTargetKerberosToHclTerraform(struct?: FileStorageMountTargetKerberosOutputReference | FileStorageMountTargetKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_key_tab_secret_version: {
      value: cdktf.numberToHclTerraform(struct!.backupKeyTabSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_key_tab_secret_version: {
      value: cdktf.numberToHclTerraform(struct!.currentKeyTabSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kerberos_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isKerberosEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos_realm: {
      value: cdktf.stringToHclTerraform(struct!.kerberosRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tab_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyTabSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageMountTargetKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileStorageMountTargetKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupKeyTabSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupKeyTabSecretVersion = this._backupKeyTabSecretVersion;
    }
    if (this._currentKeyTabSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKeyTabSecretVersion = this._currentKeyTabSecretVersion;
    }
    if (this._isKerberosEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKerberosEnabled = this._isKerberosEnabled;
    }
    if (this._kerberosRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRealm = this._kerberosRealm;
    }
    if (this._keyTabSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTabSecretId = this._keyTabSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageMountTargetKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupKeyTabSecretVersion = undefined;
      this._currentKeyTabSecretVersion = undefined;
      this._isKerberosEnabled = undefined;
      this._kerberosRealm = undefined;
      this._keyTabSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupKeyTabSecretVersion = value.backupKeyTabSecretVersion;
      this._currentKeyTabSecretVersion = value.currentKeyTabSecretVersion;
      this._isKerberosEnabled = value.isKerberosEnabled;
      this._kerberosRealm = value.kerberosRealm;
      this._keyTabSecretId = value.keyTabSecretId;
    }
  }

  // backup_key_tab_secret_version - computed: true, optional: true, required: false
  private _backupKeyTabSecretVersion?: number; 
  public get backupKeyTabSecretVersion() {
    return this.getNumberAttribute('backup_key_tab_secret_version');
  }
  public set backupKeyTabSecretVersion(value: number) {
    this._backupKeyTabSecretVersion = value;
  }
  public resetBackupKeyTabSecretVersion() {
    this._backupKeyTabSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupKeyTabSecretVersionInput() {
    return this._backupKeyTabSecretVersion;
  }

  // current_key_tab_secret_version - computed: true, optional: true, required: false
  private _currentKeyTabSecretVersion?: number; 
  public get currentKeyTabSecretVersion() {
    return this.getNumberAttribute('current_key_tab_secret_version');
  }
  public set currentKeyTabSecretVersion(value: number) {
    this._currentKeyTabSecretVersion = value;
  }
  public resetCurrentKeyTabSecretVersion() {
    this._currentKeyTabSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKeyTabSecretVersionInput() {
    return this._currentKeyTabSecretVersion;
  }

  // is_kerberos_enabled - computed: true, optional: true, required: false
  private _isKerberosEnabled?: boolean | cdktf.IResolvable; 
  public get isKerberosEnabled() {
    return this.getBooleanAttribute('is_kerberos_enabled');
  }
  public set isKerberosEnabled(value: boolean | cdktf.IResolvable) {
    this._isKerberosEnabled = value;
  }
  public resetIsKerberosEnabled() {
    this._isKerberosEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKerberosEnabledInput() {
    return this._isKerberosEnabled;
  }

  // kerberos_realm - computed: false, optional: false, required: true
  private _kerberosRealm?: string; 
  public get kerberosRealm() {
    return this.getStringAttribute('kerberos_realm');
  }
  public set kerberosRealm(value: string) {
    this._kerberosRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmInput() {
    return this._kerberosRealm;
  }

  // key_tab_secret_id - computed: false, optional: true, required: false
  private _keyTabSecretId?: string; 
  public get keyTabSecretId() {
    return this.getStringAttribute('key_tab_secret_id');
  }
  public set keyTabSecretId(value: string) {
    this._keyTabSecretId = value;
  }
  public resetKeyTabSecretId() {
    this._keyTabSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabSecretIdInput() {
    return this._keyTabSecretId;
  }
}
export interface FileStorageMountTargetLdapIdmap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}
  */
  readonly cacheLifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}
  */
  readonly cacheRefreshIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}
  */
  readonly groupSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}
  */
  readonly negativeCacheLifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}
  */
  readonly outboundConnector1Id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}
  */
  readonly outboundConnector2Id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}
  */
  readonly schemaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}
  */
  readonly userSearchBase?: string;
}

export function fileStorageMountTargetLdapIdmapToTerraform(struct?: FileStorageMountTargetLdapIdmapOutputReference | FileStorageMountTargetLdapIdmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_lifetime_seconds: cdktf.numberToTerraform(struct!.cacheLifetimeSeconds),
    cache_refresh_interval_seconds: cdktf.numberToTerraform(struct!.cacheRefreshIntervalSeconds),
    group_search_base: cdktf.stringToTerraform(struct!.groupSearchBase),
    negative_cache_lifetime_seconds: cdktf.numberToTerraform(struct!.negativeCacheLifetimeSeconds),
    outbound_connector1id: cdktf.stringToTerraform(struct!.outboundConnector1Id),
    outbound_connector2id: cdktf.stringToTerraform(struct!.outboundConnector2Id),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
    user_search_base: cdktf.stringToTerraform(struct!.userSearchBase),
  }
}


export function fileStorageMountTargetLdapIdmapToHclTerraform(struct?: FileStorageMountTargetLdapIdmapOutputReference | FileStorageMountTargetLdapIdmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheLifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_refresh_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheRefreshIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_search_base: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_cache_lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.negativeCacheLifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_connector1id: {
      value: cdktf.stringToHclTerraform(struct!.outboundConnector1Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_connector2id: {
      value: cdktf.stringToHclTerraform(struct!.outboundConnector2Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_type: {
      value: cdktf.stringToHclTerraform(struct!.schemaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_base: {
      value: cdktf.stringToHclTerraform(struct!.userSearchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageMountTargetLdapIdmapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileStorageMountTargetLdapIdmap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheLifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLifetimeSeconds = this._cacheLifetimeSeconds;
    }
    if (this._cacheRefreshIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRefreshIntervalSeconds = this._cacheRefreshIntervalSeconds;
    }
    if (this._groupSearchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchBase = this._groupSearchBase;
    }
    if (this._negativeCacheLifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCacheLifetimeSeconds = this._negativeCacheLifetimeSeconds;
    }
    if (this._outboundConnector1Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundConnector1Id = this._outboundConnector1Id;
    }
    if (this._outboundConnector2Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundConnector2Id = this._outboundConnector2Id;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._userSearchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchBase = this._userSearchBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageMountTargetLdapIdmap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheLifetimeSeconds = undefined;
      this._cacheRefreshIntervalSeconds = undefined;
      this._groupSearchBase = undefined;
      this._negativeCacheLifetimeSeconds = undefined;
      this._outboundConnector1Id = undefined;
      this._outboundConnector2Id = undefined;
      this._schemaType = undefined;
      this._userSearchBase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheLifetimeSeconds = value.cacheLifetimeSeconds;
      this._cacheRefreshIntervalSeconds = value.cacheRefreshIntervalSeconds;
      this._groupSearchBase = value.groupSearchBase;
      this._negativeCacheLifetimeSeconds = value.negativeCacheLifetimeSeconds;
      this._outboundConnector1Id = value.outboundConnector1Id;
      this._outboundConnector2Id = value.outboundConnector2Id;
      this._schemaType = value.schemaType;
      this._userSearchBase = value.userSearchBase;
    }
  }

  // cache_lifetime_seconds - computed: true, optional: true, required: false
  private _cacheLifetimeSeconds?: number; 
  public get cacheLifetimeSeconds() {
    return this.getNumberAttribute('cache_lifetime_seconds');
  }
  public set cacheLifetimeSeconds(value: number) {
    this._cacheLifetimeSeconds = value;
  }
  public resetCacheLifetimeSeconds() {
    this._cacheLifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLifetimeSecondsInput() {
    return this._cacheLifetimeSeconds;
  }

  // cache_refresh_interval_seconds - computed: true, optional: true, required: false
  private _cacheRefreshIntervalSeconds?: number; 
  public get cacheRefreshIntervalSeconds() {
    return this.getNumberAttribute('cache_refresh_interval_seconds');
  }
  public set cacheRefreshIntervalSeconds(value: number) {
    this._cacheRefreshIntervalSeconds = value;
  }
  public resetCacheRefreshIntervalSeconds() {
    this._cacheRefreshIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRefreshIntervalSecondsInput() {
    return this._cacheRefreshIntervalSeconds;
  }

  // group_search_base - computed: true, optional: true, required: false
  private _groupSearchBase?: string; 
  public get groupSearchBase() {
    return this.getStringAttribute('group_search_base');
  }
  public set groupSearchBase(value: string) {
    this._groupSearchBase = value;
  }
  public resetGroupSearchBase() {
    this._groupSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseInput() {
    return this._groupSearchBase;
  }

  // negative_cache_lifetime_seconds - computed: true, optional: true, required: false
  private _negativeCacheLifetimeSeconds?: number; 
  public get negativeCacheLifetimeSeconds() {
    return this.getNumberAttribute('negative_cache_lifetime_seconds');
  }
  public set negativeCacheLifetimeSeconds(value: number) {
    this._negativeCacheLifetimeSeconds = value;
  }
  public resetNegativeCacheLifetimeSeconds() {
    this._negativeCacheLifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCacheLifetimeSecondsInput() {
    return this._negativeCacheLifetimeSeconds;
  }

  // outbound_connector1id - computed: false, optional: true, required: false
  private _outboundConnector1Id?: string; 
  public get outboundConnector1Id() {
    return this.getStringAttribute('outbound_connector1id');
  }
  public set outboundConnector1Id(value: string) {
    this._outboundConnector1Id = value;
  }
  public resetOutboundConnector1Id() {
    this._outboundConnector1Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundConnector1IdInput() {
    return this._outboundConnector1Id;
  }

  // outbound_connector2id - computed: false, optional: true, required: false
  private _outboundConnector2Id?: string; 
  public get outboundConnector2Id() {
    return this.getStringAttribute('outbound_connector2id');
  }
  public set outboundConnector2Id(value: string) {
    this._outboundConnector2Id = value;
  }
  public resetOutboundConnector2Id() {
    this._outboundConnector2Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundConnector2IdInput() {
    return this._outboundConnector2Id;
  }

  // schema_type - computed: true, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }

  // user_search_base - computed: true, optional: true, required: false
  private _userSearchBase?: string; 
  public get userSearchBase() {
    return this.getStringAttribute('user_search_base');
  }
  public set userSearchBase(value: string) {
    this._userSearchBase = value;
  }
  public resetUserSearchBase() {
    this._userSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchBaseInput() {
    return this._userSearchBase;
  }
}
export interface FileStorageMountTargetLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}
  */
  readonly type: string;
}

export function fileStorageMountTargetLocksToTerraform(struct?: FileStorageMountTargetLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fileStorageMountTargetLocksToHclTerraform(struct?: FileStorageMountTargetLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
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

export class FileStorageMountTargetLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageMountTargetLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageMountTargetLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FileStorageMountTargetLocksList extends cdktf.ComplexList {
  public internalValue? : FileStorageMountTargetLocks[] | cdktf.IResolvable

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
  public get(index: number): FileStorageMountTargetLocksOutputReference {
    return new FileStorageMountTargetLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageMountTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}
  */
  readonly update?: string;
}

export function fileStorageMountTargetTimeoutsToTerraform(struct?: FileStorageMountTargetTimeouts | cdktf.IResolvable): any {
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


export function fileStorageMountTargetTimeoutsToHclTerraform(struct?: FileStorageMountTargetTimeouts | cdktf.IResolvable): any {
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

export class FileStorageMountTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileStorageMountTargetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FileStorageMountTargetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}
*/
export class FileStorageMountTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_mount_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStorageMountTarget to import
  * @param importFromId The id of the existing FileStorageMountTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStorageMountTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_mount_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStorageMountTargetConfig
  */
  public constructor(scope: Construct, id: string, config: FileStorageMountTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_mount_target',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._hostnameLabel = config.hostnameLabel;
    this._id = config.id;
    this._idmapType = config.idmapType;
    this._ipAddress = config.ipAddress;
    this._isLockOverride = config.isLockOverride;
    this._nsgIds = config.nsgIds;
    this._requestedThroughput = config.requestedThroughput;
    this._securityAttributes = config.securityAttributes;
    this._subnetId = config.subnetId;
    this._kerberos.internalValue = config.kerberos;
    this._ldapIdmap.internalValue = config.ldapIdmap;
    this._locks.internalValue = config.locks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // export_set_id - computed: true, optional: false, required: false
  public get exportSetId() {
    return this.getStringAttribute('export_set_id');
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

  // idmap_type - computed: true, optional: true, required: false
  private _idmapType?: string; 
  public get idmapType() {
    return this.getStringAttribute('idmap_type');
  }
  public set idmapType(value: string) {
    this._idmapType = value;
  }
  public resetIdmapType() {
    this._idmapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmapTypeInput() {
    return this._idmapType;
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

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // observed_throughput - computed: true, optional: false, required: false
  public get observedThroughput() {
    return this.getStringAttribute('observed_throughput');
  }

  // private_ip_ids - computed: true, optional: false, required: false
  public get privateIpIds() {
    return this.getListAttribute('private_ip_ids');
  }

  // requested_throughput - computed: true, optional: true, required: false
  private _requestedThroughput?: string; 
  public get requestedThroughput() {
    return this.getStringAttribute('requested_throughput');
  }
  public set requestedThroughput(value: string) {
    this._requestedThroughput = value;
  }
  public resetRequestedThroughput() {
    this._requestedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedThroughputInput() {
    return this._requestedThroughput;
  }

  // reserved_storage_capacity - computed: true, optional: false, required: false
  public get reservedStorageCapacity() {
    return this.getStringAttribute('reserved_storage_capacity');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_billing_cycle_end - computed: true, optional: false, required: false
  public get timeBillingCycleEnd() {
    return this.getStringAttribute('time_billing_cycle_end');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new FileStorageMountTargetKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: FileStorageMountTargetKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ldap_idmap - computed: false, optional: true, required: false
  private _ldapIdmap = new FileStorageMountTargetLdapIdmapOutputReference(this, "ldap_idmap");
  public get ldapIdmap() {
    return this._ldapIdmap;
  }
  public putLdapIdmap(value: FileStorageMountTargetLdapIdmap) {
    this._ldapIdmap.internalValue = value;
  }
  public resetLdapIdmap() {
    this._ldapIdmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapIdmapInput() {
    return this._ldapIdmap.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new FileStorageMountTargetLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: FileStorageMountTargetLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileStorageMountTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileStorageMountTargetTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      hostname_label: cdktf.stringToTerraform(this._hostnameLabel),
      id: cdktf.stringToTerraform(this._id),
      idmap_type: cdktf.stringToTerraform(this._idmapType),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      requested_throughput: cdktf.stringToTerraform(this._requestedThroughput),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      kerberos: fileStorageMountTargetKerberosToTerraform(this._kerberos.internalValue),
      ldap_idmap: fileStorageMountTargetLdapIdmapToTerraform(this._ldapIdmap.internalValue),
      locks: cdktf.listMapper(fileStorageMountTargetLocksToTerraform, true)(this._locks.internalValue),
      timeouts: fileStorageMountTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      idmap_type: {
        value: cdktf.stringToHclTerraform(this._idmapType),
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
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      requested_throughput: {
        value: cdktf.stringToHclTerraform(this._requestedThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos: {
        value: fileStorageMountTargetKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageMountTargetKerberosList",
      },
      ldap_idmap: {
        value: fileStorageMountTargetLdapIdmapToHclTerraform(this._ldapIdmap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageMountTargetLdapIdmapList",
      },
      locks: {
        value: cdktf.listMapperHcl(fileStorageMountTargetLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageMountTargetLocksList",
      },
      timeouts: {
        value: fileStorageMountTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileStorageMountTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
