// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapProtocolsNfsServicesDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source#cx_profile_name DataNetappOntapProtocolsNfsServicesDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source#filter DataNetappOntapProtocolsNfsServicesDataSource#filter}
  */
  readonly filter?: DataNetappOntapProtocolsNfsServicesDataSourceFilter;
}
export interface DataNetappOntapProtocolsNfsServicesDataSourceFilter {
  /**
  * ProtocolsNfsService svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source#svm_name DataNetappOntapProtocolsNfsServicesDataSource#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapProtocolsNfsServicesDataSourceFilterToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceFilterToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsNfsServicesDataSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._svmName = value.svmName;
    }
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40Features {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40FeaturesToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40FeaturesToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40Features | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41Features {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41FeaturesToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41FeaturesToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41Features | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocol {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocol | undefined) {
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
  private _v40Features = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV40FeaturesOutputReference(this, "v40_features");
  public get v40Features() {
    return this._v40Features;
  }

  // v41_enabled - computed: true, optional: false, required: false
  public get v41Enabled() {
    return this.getBooleanAttribute('v41_enabled');
  }

  // v41_features - computed: true, optional: false, required: false
  private _v41Features = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolV41FeaturesOutputReference(this, "v41_features");
  public get v41Features() {
    return this._v41Features;
  }

  // v4_id_domain - computed: true, optional: false, required: false
  public get v4IdDomain() {
    return this.getStringAttribute('v4_id_domain');
  }
}
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRoot {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRootToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRootToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRoot | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurity {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurityToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurityToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurity | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransport {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransportToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransportToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransport | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindows {
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindowsToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindowsToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindows | undefined) {
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
export interface DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source#cx_profile_name DataNetappOntapProtocolsNfsServicesDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
}

export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesToTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
  }
}


export function dataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesToHclTerraform(struct?: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cx_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.cxProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
    }
  }

  // cx_profile_name - computed: true, optional: false, required: true
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
  private _protocol = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // root - computed: true, optional: false, required: false
  private _root = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }

  // showmount_enabled - computed: true, optional: false, required: false
  public get showmountEnabled() {
    return this.getBooleanAttribute('showmount_enabled');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // vstorage_enabled - computed: true, optional: false, required: false
  public get vstorageEnabled() {
    return this.getBooleanAttribute('vstorage_enabled');
  }

  // windows - computed: true, optional: false, required: false
  private _windows = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
}

export class DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServices[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesOutputReference {
    return new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source netapp-ontap_protocols_nfs_services_data_source}
*/
export class DataNetappOntapProtocolsNfsServicesDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_nfs_services_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapProtocolsNfsServicesDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapProtocolsNfsServicesDataSource to import
  * @param importFromId The id of the existing DataNetappOntapProtocolsNfsServicesDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapProtocolsNfsServicesDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_nfs_services_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_services_data_source netapp-ontap_protocols_nfs_services_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapProtocolsNfsServicesDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapProtocolsNfsServicesDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_nfs_services_data_source',
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
    this._filter.internalValue = config.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapProtocolsNfsServicesDataSourceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapProtocolsNfsServicesDataSourceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // protocols_nfs_services - computed: true, optional: false, required: false
  private _protocolsNfsServices = new DataNetappOntapProtocolsNfsServicesDataSourceProtocolsNfsServicesList(this, "protocols_nfs_services", false);
  public get protocolsNfsServices() {
    return this._protocolsNfsServices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapProtocolsNfsServicesDataSourceFilterToTerraform(this._filter.internalValue),
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
      filter: {
        value: dataNetappOntapProtocolsNfsServicesDataSourceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsNfsServicesDataSourceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
