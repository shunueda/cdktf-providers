// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNfsServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services#cx_profile_name DataNetappOntapNfsServices#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services#filter DataNetappOntapNfsServices#filter}
  */
  readonly filter?: DataNetappOntapNfsServicesFilter;
}
export interface DataNetappOntapNfsServicesFilter {
  /**
  * ProtocolsNfsService svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services#svm_name DataNetappOntapNfsServices#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapNfsServicesFilterToTerraform(struct?: DataNetappOntapNfsServicesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapNfsServicesFilterToHclTerraform(struct?: DataNetappOntapNfsServicesFilter | cdktf.IResolvable): any {
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

export class DataNetappOntapNfsServicesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapNfsServicesFilter | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40Features {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40FeaturesToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40FeaturesToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40Features | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41Features {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41FeaturesToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41FeaturesToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41Features | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesProtocol {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesProtocolToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesProtocol | undefined) {
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
  private _v40Features = new DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV40FeaturesOutputReference(this, "v40_features");
  public get v40Features() {
    return this._v40Features;
  }

  // v41_enabled - computed: true, optional: false, required: false
  public get v41Enabled() {
    return this.getBooleanAttribute('v41_enabled');
  }

  // v41_features - computed: true, optional: false, required: false
  private _v41Features = new DataNetappOntapNfsServicesProtocolsNfsServicesProtocolV41FeaturesOutputReference(this, "v41_features");
  public get v41Features() {
    return this._v41Features;
  }

  // v4_id_domain - computed: true, optional: false, required: false
  public get v4IdDomain() {
    return this.getStringAttribute('v4_id_domain');
  }
}
export interface DataNetappOntapNfsServicesProtocolsNfsServicesRoot {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesRootToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesRootToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesRoot | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesSecurity {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesSecurityToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesSecurityToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesSecurity | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesTransport {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesTransportToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesTransportToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesTransport | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServicesWindows {
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesWindowsToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesWindowsToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServicesWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServicesWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServicesWindows | undefined) {
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
export interface DataNetappOntapNfsServicesProtocolsNfsServices {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services#cx_profile_name DataNetappOntapNfsServices#cx_profile_name}
  */
  readonly cxProfileName: string;
}

export function dataNetappOntapNfsServicesProtocolsNfsServicesToTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
  }
}


export function dataNetappOntapNfsServicesProtocolsNfsServicesToHclTerraform(struct?: DataNetappOntapNfsServicesProtocolsNfsServices): any {
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

export class DataNetappOntapNfsServicesProtocolsNfsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapNfsServicesProtocolsNfsServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNfsServicesProtocolsNfsServices | undefined) {
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
  private _protocol = new DataNetappOntapNfsServicesProtocolsNfsServicesProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // root - computed: true, optional: false, required: false
  private _root = new DataNetappOntapNfsServicesProtocolsNfsServicesRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataNetappOntapNfsServicesProtocolsNfsServicesSecurityOutputReference(this, "security");
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
  private _transport = new DataNetappOntapNfsServicesProtocolsNfsServicesTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // vstorage_enabled - computed: true, optional: false, required: false
  public get vstorageEnabled() {
    return this.getBooleanAttribute('vstorage_enabled');
  }

  // windows - computed: true, optional: false, required: false
  private _windows = new DataNetappOntapNfsServicesProtocolsNfsServicesWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
}

export class DataNetappOntapNfsServicesProtocolsNfsServicesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapNfsServicesProtocolsNfsServices[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapNfsServicesProtocolsNfsServicesOutputReference {
    return new DataNetappOntapNfsServicesProtocolsNfsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services netapp-ontap_nfs_services}
*/
export class DataNetappOntapNfsServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_nfs_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNfsServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNfsServices to import
  * @param importFromId The id of the existing DataNetappOntapNfsServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNfsServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_nfs_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_services netapp-ontap_nfs_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNfsServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNfsServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_nfs_services',
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
  private _filter = new DataNetappOntapNfsServicesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapNfsServicesFilter) {
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
  private _protocolsNfsServices = new DataNetappOntapNfsServicesProtocolsNfsServicesList(this, "protocols_nfs_services", false);
  public get protocolsNfsServices() {
    return this._protocolsNfsServices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapNfsServicesFilterToTerraform(this._filter.internalValue),
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
        value: dataNetappOntapNfsServicesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapNfsServicesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
