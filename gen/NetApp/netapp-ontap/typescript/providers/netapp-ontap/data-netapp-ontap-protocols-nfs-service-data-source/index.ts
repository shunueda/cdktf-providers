// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapProtocolsNfsServiceDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source#cx_profile_name DataNetappOntapProtocolsNfsServiceDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * NFS svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source#svm_name DataNetappOntapProtocolsNfsServiceDataSource#svm_name}
  */
  readonly svmName: string;
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40Features {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolV40FeaturesToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolV40FeaturesToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_enabled - computed: true, optional: false, required: false
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }

  // read_delegation_enabled - computed: true, optional: false, required: false
  public get readDelegationEnabled() {
    return this.getBooleanAttribute('read_delegation_enabled');
  }

  // write_delegation_enabled - computed: true, optional: false, required: false
  public get writeDelegationEnabled() {
    return this.getBooleanAttribute('write_delegation_enabled');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41Features {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolV41FeaturesToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolV41FeaturesToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_enabled - computed: true, optional: false, required: false
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }

  // pnfs_enabled - computed: true, optional: false, required: false
  public get pnfsEnabled() {
    return this.getBooleanAttribute('pnfs_enabled');
  }

  // read_delegation_enabled - computed: true, optional: false, required: false
  public get readDelegationEnabled() {
    return this.getBooleanAttribute('read_delegation_enabled');
  }

  // write_delegation_enabled - computed: true, optional: false, required: false
  public get writeDelegationEnabled() {
    return this.getBooleanAttribute('write_delegation_enabled');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceProtocol {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceProtocolToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // v3_enabled - computed: true, optional: false, required: false
  public get v3Enabled() {
    return this.getBooleanAttribute('v3_enabled');
  }

  // v40_enabled - computed: true, optional: false, required: false
  public get v40Enabled() {
    return this.getBooleanAttribute('v40_enabled');
  }

  // v40_features - computed: true, optional: false, required: false
  private _v40Features = new DataNetappOntapProtocolsNfsServiceDataSourceProtocolV40FeaturesOutputReference(this, "v40_features");
  public get v40Features() {
    return this._v40Features;
  }

  // v41_enabled - computed: true, optional: false, required: false
  public get v41Enabled() {
    return this.getBooleanAttribute('v41_enabled');
  }

  // v41_features - computed: true, optional: false, required: false
  private _v41Features = new DataNetappOntapProtocolsNfsServiceDataSourceProtocolV41FeaturesOutputReference(this, "v41_features");
  public get v41Features() {
    return this._v41Features;
  }

  // v4_id_domain - computed: true, optional: false, required: false
  public get v4IdDomain() {
    return this.getStringAttribute('v4_id_domain');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceRoot {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceRootToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceRootToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_nt_acl - computed: true, optional: false, required: false
  public get ignoreNtAcl() {
    return this.getBooleanAttribute('ignore_nt_acl');
  }

  // skip_write_permission_check - computed: true, optional: false, required: false
  public get skipWritePermissionCheck() {
    return this.getBooleanAttribute('skip_write_permission_check');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceSecurity {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceSecurityToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceSecurityToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chown_mode - computed: true, optional: false, required: false
  public get chownMode() {
    return this.getStringAttribute('chown_mode');
  }

  // nt_acl_display_permission - computed: true, optional: false, required: false
  public get ntAclDisplayPermission() {
    return this.getBooleanAttribute('nt_acl_display_permission');
  }

  // ntfs_unix_security - computed: true, optional: false, required: false
  public get ntfsUnixSecurity() {
    return this.getStringAttribute('ntfs_unix_security');
  }

  // permitted_encryption_types - computed: true, optional: false, required: false
  public get permittedEncryptionTypes() {
    return this.getListAttribute('permitted_encryption_types');
  }

  // rpcsec_context_idle - computed: true, optional: false, required: false
  public get rpcsecContextIdle() {
    return this.getNumberAttribute('rpcsec_context_idle');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceTransport {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceTransportToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceTransportToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tcp_enabled - computed: true, optional: false, required: false
  public get tcpEnabled() {
    return this.getBooleanAttribute('tcp_enabled');
  }

  // tcp_max_transfer_size - computed: true, optional: false, required: false
  public get tcpMaxTransferSize() {
    return this.getNumberAttribute('tcp_max_transfer_size');
  }

  // udp_enabled - computed: true, optional: false, required: false
  public get udpEnabled() {
    return this.getBooleanAttribute('udp_enabled');
  }
}
export interface DataNetappOntapProtocolsNfsServiceDataSourceWindows {
}

export function dataNetappOntapProtocolsNfsServiceDataSourceWindowsToTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServiceDataSourceWindowsToHclTerraform(struct?: DataNetappOntapProtocolsNfsServiceDataSourceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServiceDataSourceWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServiceDataSourceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServiceDataSourceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_user - computed: true, optional: false, required: false
  public get defaultUser() {
    return this.getStringAttribute('default_user');
  }

  // map_unknown_uid_to_default_user - computed: true, optional: false, required: false
  public get mapUnknownUidToDefaultUser() {
    return this.getBooleanAttribute('map_unknown_uid_to_default_user');
  }

  // v3_ms_dos_client_enabled - computed: true, optional: false, required: false
  public get v3MsDosClientEnabled() {
    return this.getBooleanAttribute('v3_ms_dos_client_enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source netapp-ontap_protocols_nfs_service_data_source}
*/
export class DataNetappOntapProtocolsNfsServiceDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_nfs_service_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapProtocolsNfsServiceDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapProtocolsNfsServiceDataSource to import
  * @param importFromId The id of the existing DataNetappOntapProtocolsNfsServiceDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapProtocolsNfsServiceDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_nfs_service_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_service_data_source netapp-ontap_protocols_nfs_service_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapProtocolsNfsServiceDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapProtocolsNfsServiceDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_nfs_service_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataNetappOntapProtocolsNfsServiceDataSourceProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // root - computed: true, optional: false, required: false
  private _root = new DataNetappOntapProtocolsNfsServiceDataSourceRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataNetappOntapProtocolsNfsServiceDataSourceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }

  // showmount_enabled - computed: true, optional: false, required: false
  public get showmountEnabled() {
    return this.getBooleanAttribute('showmount_enabled');
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataNetappOntapProtocolsNfsServiceDataSourceTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // vstorage_enabled - computed: true, optional: false, required: false
  public get vstorageEnabled() {
    return this.getBooleanAttribute('vstorage_enabled');
  }

  // windows - computed: true, optional: false, required: false
  private _windows = new DataNetappOntapProtocolsNfsServiceDataSourceWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
