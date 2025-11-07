// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryfaultconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#id Inventoryfaultconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#name Inventoryfaultconfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#tenant_ref Inventoryfaultconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#uuid Inventoryfaultconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#configpb_attributes Inventoryfaultconfig#configpb_attributes}
  */
  readonly configpbAttributes?: InventoryfaultconfigConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * controller_faults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#controller_faults Inventoryfaultconfig#controller_faults}
  */
  readonly controllerFaults?: InventoryfaultconfigControllerFaults[] | cdktf.IResolvable;
  /**
  * serviceengine_faults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#serviceengine_faults Inventoryfaultconfig#serviceengine_faults}
  */
  readonly serviceengineFaults?: InventoryfaultconfigServiceengineFaults[] | cdktf.IResolvable;
  /**
  * virtualservice_faults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#virtualservice_faults Inventoryfaultconfig#virtualservice_faults}
  */
  readonly virtualserviceFaults?: InventoryfaultconfigVirtualserviceFaults[] | cdktf.IResolvable;
}
export interface InventoryfaultconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#version Inventoryfaultconfig#version}
  */
  readonly version?: string;
}

export function inventoryfaultconfigConfigpbAttributesToTerraform(struct?: InventoryfaultconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function inventoryfaultconfigConfigpbAttributesToHclTerraform(struct?: InventoryfaultconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryfaultconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryfaultconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryfaultconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class InventoryfaultconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : InventoryfaultconfigConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): InventoryfaultconfigConfigpbAttributesOutputReference {
    return new InventoryfaultconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InventoryfaultconfigControllerFaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#backup_scheduler_faults Inventoryfaultconfig#backup_scheduler_faults}
  */
  readonly backupSchedulerFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#cluster_faults Inventoryfaultconfig#cluster_faults}
  */
  readonly clusterFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#deprecated_api_version_faults Inventoryfaultconfig#deprecated_api_version_faults}
  */
  readonly deprecatedApiVersionFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#license_faults Inventoryfaultconfig#license_faults}
  */
  readonly licenseFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#migration_faults Inventoryfaultconfig#migration_faults}
  */
  readonly migrationFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#sslprofile_faults Inventoryfaultconfig#sslprofile_faults}
  */
  readonly sslprofileFaults?: string;
}

export function inventoryfaultconfigControllerFaultsToTerraform(struct?: InventoryfaultconfigControllerFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_scheduler_faults: cdktf.stringToTerraform(struct!.backupSchedulerFaults),
    cluster_faults: cdktf.stringToTerraform(struct!.clusterFaults),
    deprecated_api_version_faults: cdktf.stringToTerraform(struct!.deprecatedApiVersionFaults),
    license_faults: cdktf.stringToTerraform(struct!.licenseFaults),
    migration_faults: cdktf.stringToTerraform(struct!.migrationFaults),
    sslprofile_faults: cdktf.stringToTerraform(struct!.sslprofileFaults),
  }
}


export function inventoryfaultconfigControllerFaultsToHclTerraform(struct?: InventoryfaultconfigControllerFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_scheduler_faults: {
      value: cdktf.stringToHclTerraform(struct!.backupSchedulerFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_faults: {
      value: cdktf.stringToHclTerraform(struct!.clusterFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deprecated_api_version_faults: {
      value: cdktf.stringToHclTerraform(struct!.deprecatedApiVersionFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_faults: {
      value: cdktf.stringToHclTerraform(struct!.licenseFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migration_faults: {
      value: cdktf.stringToHclTerraform(struct!.migrationFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslprofile_faults: {
      value: cdktf.stringToHclTerraform(struct!.sslprofileFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryfaultconfigControllerFaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryfaultconfigControllerFaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSchedulerFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedulerFaults = this._backupSchedulerFaults;
    }
    if (this._clusterFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFaults = this._clusterFaults;
    }
    if (this._deprecatedApiVersionFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedApiVersionFaults = this._deprecatedApiVersionFaults;
    }
    if (this._licenseFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFaults = this._licenseFaults;
    }
    if (this._migrationFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrationFaults = this._migrationFaults;
    }
    if (this._sslprofileFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslprofileFaults = this._sslprofileFaults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryfaultconfigControllerFaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSchedulerFaults = undefined;
      this._clusterFaults = undefined;
      this._deprecatedApiVersionFaults = undefined;
      this._licenseFaults = undefined;
      this._migrationFaults = undefined;
      this._sslprofileFaults = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSchedulerFaults = value.backupSchedulerFaults;
      this._clusterFaults = value.clusterFaults;
      this._deprecatedApiVersionFaults = value.deprecatedApiVersionFaults;
      this._licenseFaults = value.licenseFaults;
      this._migrationFaults = value.migrationFaults;
      this._sslprofileFaults = value.sslprofileFaults;
    }
  }

  // backup_scheduler_faults - computed: false, optional: true, required: false
  private _backupSchedulerFaults?: string; 
  public get backupSchedulerFaults() {
    return this.getStringAttribute('backup_scheduler_faults');
  }
  public set backupSchedulerFaults(value: string) {
    this._backupSchedulerFaults = value;
  }
  public resetBackupSchedulerFaults() {
    this._backupSchedulerFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSchedulerFaultsInput() {
    return this._backupSchedulerFaults;
  }

  // cluster_faults - computed: false, optional: true, required: false
  private _clusterFaults?: string; 
  public get clusterFaults() {
    return this.getStringAttribute('cluster_faults');
  }
  public set clusterFaults(value: string) {
    this._clusterFaults = value;
  }
  public resetClusterFaults() {
    this._clusterFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFaultsInput() {
    return this._clusterFaults;
  }

  // deprecated_api_version_faults - computed: false, optional: true, required: false
  private _deprecatedApiVersionFaults?: string; 
  public get deprecatedApiVersionFaults() {
    return this.getStringAttribute('deprecated_api_version_faults');
  }
  public set deprecatedApiVersionFaults(value: string) {
    this._deprecatedApiVersionFaults = value;
  }
  public resetDeprecatedApiVersionFaults() {
    this._deprecatedApiVersionFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedApiVersionFaultsInput() {
    return this._deprecatedApiVersionFaults;
  }

  // license_faults - computed: false, optional: true, required: false
  private _licenseFaults?: string; 
  public get licenseFaults() {
    return this.getStringAttribute('license_faults');
  }
  public set licenseFaults(value: string) {
    this._licenseFaults = value;
  }
  public resetLicenseFaults() {
    this._licenseFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFaultsInput() {
    return this._licenseFaults;
  }

  // migration_faults - computed: false, optional: true, required: false
  private _migrationFaults?: string; 
  public get migrationFaults() {
    return this.getStringAttribute('migration_faults');
  }
  public set migrationFaults(value: string) {
    this._migrationFaults = value;
  }
  public resetMigrationFaults() {
    this._migrationFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationFaultsInput() {
    return this._migrationFaults;
  }

  // sslprofile_faults - computed: false, optional: true, required: false
  private _sslprofileFaults?: string; 
  public get sslprofileFaults() {
    return this.getStringAttribute('sslprofile_faults');
  }
  public set sslprofileFaults(value: string) {
    this._sslprofileFaults = value;
  }
  public resetSslprofileFaults() {
    this._sslprofileFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslprofileFaultsInput() {
    return this._sslprofileFaults;
  }
}

export class InventoryfaultconfigControllerFaultsList extends cdktf.ComplexList {
  public internalValue? : InventoryfaultconfigControllerFaults[] | cdktf.IResolvable

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
  public get(index: number): InventoryfaultconfigControllerFaultsOutputReference {
    return new InventoryfaultconfigControllerFaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InventoryfaultconfigServiceengineFaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#debug_faults Inventoryfaultconfig#debug_faults}
  */
  readonly debugFaults?: string;
}

export function inventoryfaultconfigServiceengineFaultsToTerraform(struct?: InventoryfaultconfigServiceengineFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_faults: cdktf.stringToTerraform(struct!.debugFaults),
  }
}


export function inventoryfaultconfigServiceengineFaultsToHclTerraform(struct?: InventoryfaultconfigServiceengineFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_faults: {
      value: cdktf.stringToHclTerraform(struct!.debugFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryfaultconfigServiceengineFaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryfaultconfigServiceengineFaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugFaults = this._debugFaults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryfaultconfigServiceengineFaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugFaults = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugFaults = value.debugFaults;
    }
  }

  // debug_faults - computed: false, optional: true, required: false
  private _debugFaults?: string; 
  public get debugFaults() {
    return this.getStringAttribute('debug_faults');
  }
  public set debugFaults(value: string) {
    this._debugFaults = value;
  }
  public resetDebugFaults() {
    this._debugFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFaultsInput() {
    return this._debugFaults;
  }
}

export class InventoryfaultconfigServiceengineFaultsList extends cdktf.ComplexList {
  public internalValue? : InventoryfaultconfigServiceengineFaults[] | cdktf.IResolvable

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
  public get(index: number): InventoryfaultconfigServiceengineFaultsOutputReference {
    return new InventoryfaultconfigServiceengineFaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InventoryfaultconfigVirtualserviceFaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#debug_faults Inventoryfaultconfig#debug_faults}
  */
  readonly debugFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#pool_server_faults Inventoryfaultconfig#pool_server_faults}
  */
  readonly poolServerFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#scaleout_faults Inventoryfaultconfig#scaleout_faults}
  */
  readonly scaleoutFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#shared_vip_faults Inventoryfaultconfig#shared_vip_faults}
  */
  readonly sharedVipFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#ssl_cert_expiry_faults Inventoryfaultconfig#ssl_cert_expiry_faults}
  */
  readonly sslCertExpiryFaults?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#ssl_cert_status_faults Inventoryfaultconfig#ssl_cert_status_faults}
  */
  readonly sslCertStatusFaults?: string;
}

export function inventoryfaultconfigVirtualserviceFaultsToTerraform(struct?: InventoryfaultconfigVirtualserviceFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_faults: cdktf.stringToTerraform(struct!.debugFaults),
    pool_server_faults: cdktf.stringToTerraform(struct!.poolServerFaults),
    scaleout_faults: cdktf.stringToTerraform(struct!.scaleoutFaults),
    shared_vip_faults: cdktf.stringToTerraform(struct!.sharedVipFaults),
    ssl_cert_expiry_faults: cdktf.stringToTerraform(struct!.sslCertExpiryFaults),
    ssl_cert_status_faults: cdktf.stringToTerraform(struct!.sslCertStatusFaults),
  }
}


export function inventoryfaultconfigVirtualserviceFaultsToHclTerraform(struct?: InventoryfaultconfigVirtualserviceFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_faults: {
      value: cdktf.stringToHclTerraform(struct!.debugFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_server_faults: {
      value: cdktf.stringToHclTerraform(struct!.poolServerFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaleout_faults: {
      value: cdktf.stringToHclTerraform(struct!.scaleoutFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_vip_faults: {
      value: cdktf.stringToHclTerraform(struct!.sharedVipFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_expiry_faults: {
      value: cdktf.stringToHclTerraform(struct!.sslCertExpiryFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_status_faults: {
      value: cdktf.stringToHclTerraform(struct!.sslCertStatusFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryfaultconfigVirtualserviceFaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryfaultconfigVirtualserviceFaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugFaults = this._debugFaults;
    }
    if (this._poolServerFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolServerFaults = this._poolServerFaults;
    }
    if (this._scaleoutFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutFaults = this._scaleoutFaults;
    }
    if (this._sharedVipFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedVipFaults = this._sharedVipFaults;
    }
    if (this._sslCertExpiryFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertExpiryFaults = this._sslCertExpiryFaults;
    }
    if (this._sslCertStatusFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertStatusFaults = this._sslCertStatusFaults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryfaultconfigVirtualserviceFaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugFaults = undefined;
      this._poolServerFaults = undefined;
      this._scaleoutFaults = undefined;
      this._sharedVipFaults = undefined;
      this._sslCertExpiryFaults = undefined;
      this._sslCertStatusFaults = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugFaults = value.debugFaults;
      this._poolServerFaults = value.poolServerFaults;
      this._scaleoutFaults = value.scaleoutFaults;
      this._sharedVipFaults = value.sharedVipFaults;
      this._sslCertExpiryFaults = value.sslCertExpiryFaults;
      this._sslCertStatusFaults = value.sslCertStatusFaults;
    }
  }

  // debug_faults - computed: false, optional: true, required: false
  private _debugFaults?: string; 
  public get debugFaults() {
    return this.getStringAttribute('debug_faults');
  }
  public set debugFaults(value: string) {
    this._debugFaults = value;
  }
  public resetDebugFaults() {
    this._debugFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFaultsInput() {
    return this._debugFaults;
  }

  // pool_server_faults - computed: false, optional: true, required: false
  private _poolServerFaults?: string; 
  public get poolServerFaults() {
    return this.getStringAttribute('pool_server_faults');
  }
  public set poolServerFaults(value: string) {
    this._poolServerFaults = value;
  }
  public resetPoolServerFaults() {
    this._poolServerFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolServerFaultsInput() {
    return this._poolServerFaults;
  }

  // scaleout_faults - computed: false, optional: true, required: false
  private _scaleoutFaults?: string; 
  public get scaleoutFaults() {
    return this.getStringAttribute('scaleout_faults');
  }
  public set scaleoutFaults(value: string) {
    this._scaleoutFaults = value;
  }
  public resetScaleoutFaults() {
    this._scaleoutFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutFaultsInput() {
    return this._scaleoutFaults;
  }

  // shared_vip_faults - computed: false, optional: true, required: false
  private _sharedVipFaults?: string; 
  public get sharedVipFaults() {
    return this.getStringAttribute('shared_vip_faults');
  }
  public set sharedVipFaults(value: string) {
    this._sharedVipFaults = value;
  }
  public resetSharedVipFaults() {
    this._sharedVipFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVipFaultsInput() {
    return this._sharedVipFaults;
  }

  // ssl_cert_expiry_faults - computed: false, optional: true, required: false
  private _sslCertExpiryFaults?: string; 
  public get sslCertExpiryFaults() {
    return this.getStringAttribute('ssl_cert_expiry_faults');
  }
  public set sslCertExpiryFaults(value: string) {
    this._sslCertExpiryFaults = value;
  }
  public resetSslCertExpiryFaults() {
    this._sslCertExpiryFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertExpiryFaultsInput() {
    return this._sslCertExpiryFaults;
  }

  // ssl_cert_status_faults - computed: false, optional: true, required: false
  private _sslCertStatusFaults?: string; 
  public get sslCertStatusFaults() {
    return this.getStringAttribute('ssl_cert_status_faults');
  }
  public set sslCertStatusFaults(value: string) {
    this._sslCertStatusFaults = value;
  }
  public resetSslCertStatusFaults() {
    this._sslCertStatusFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertStatusFaultsInput() {
    return this._sslCertStatusFaults;
  }
}

export class InventoryfaultconfigVirtualserviceFaultsList extends cdktf.ComplexList {
  public internalValue? : InventoryfaultconfigVirtualserviceFaults[] | cdktf.IResolvable

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
  public get(index: number): InventoryfaultconfigVirtualserviceFaultsOutputReference {
    return new InventoryfaultconfigVirtualserviceFaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig avi_inventoryfaultconfig}
*/
export class Inventoryfaultconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_inventoryfaultconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Inventoryfaultconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inventoryfaultconfig to import
  * @param importFromId The id of the existing Inventoryfaultconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inventoryfaultconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_inventoryfaultconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/inventoryfaultconfig avi_inventoryfaultconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryfaultconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InventoryfaultconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_inventoryfaultconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._controllerFaults.internalValue = config.controllerFaults;
    this._serviceengineFaults.internalValue = config.serviceengineFaults;
    this._virtualserviceFaults.internalValue = config.virtualserviceFaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new InventoryfaultconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: InventoryfaultconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // controller_faults - computed: false, optional: true, required: false
  private _controllerFaults = new InventoryfaultconfigControllerFaultsList(this, "controller_faults", true);
  public get controllerFaults() {
    return this._controllerFaults;
  }
  public putControllerFaults(value: InventoryfaultconfigControllerFaults[] | cdktf.IResolvable) {
    this._controllerFaults.internalValue = value;
  }
  public resetControllerFaults() {
    this._controllerFaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerFaultsInput() {
    return this._controllerFaults.internalValue;
  }

  // serviceengine_faults - computed: false, optional: true, required: false
  private _serviceengineFaults = new InventoryfaultconfigServiceengineFaultsList(this, "serviceengine_faults", true);
  public get serviceengineFaults() {
    return this._serviceengineFaults;
  }
  public putServiceengineFaults(value: InventoryfaultconfigServiceengineFaults[] | cdktf.IResolvable) {
    this._serviceengineFaults.internalValue = value;
  }
  public resetServiceengineFaults() {
    this._serviceengineFaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceengineFaultsInput() {
    return this._serviceengineFaults.internalValue;
  }

  // virtualservice_faults - computed: false, optional: true, required: false
  private _virtualserviceFaults = new InventoryfaultconfigVirtualserviceFaultsList(this, "virtualservice_faults", true);
  public get virtualserviceFaults() {
    return this._virtualserviceFaults;
  }
  public putVirtualserviceFaults(value: InventoryfaultconfigVirtualserviceFaults[] | cdktf.IResolvable) {
    this._virtualserviceFaults.internalValue = value;
  }
  public resetVirtualserviceFaults() {
    this._virtualserviceFaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualserviceFaultsInput() {
    return this._virtualserviceFaults.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(inventoryfaultconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      controller_faults: cdktf.listMapper(inventoryfaultconfigControllerFaultsToTerraform, true)(this._controllerFaults.internalValue),
      serviceengine_faults: cdktf.listMapper(inventoryfaultconfigServiceengineFaultsToTerraform, true)(this._serviceengineFaults.internalValue),
      virtualservice_faults: cdktf.listMapper(inventoryfaultconfigVirtualserviceFaultsToTerraform, true)(this._virtualserviceFaults.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(inventoryfaultconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryfaultconfigConfigpbAttributesList",
      },
      controller_faults: {
        value: cdktf.listMapperHcl(inventoryfaultconfigControllerFaultsToHclTerraform, true)(this._controllerFaults.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryfaultconfigControllerFaultsList",
      },
      serviceengine_faults: {
        value: cdktf.listMapperHcl(inventoryfaultconfigServiceengineFaultsToHclTerraform, true)(this._serviceengineFaults.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryfaultconfigServiceengineFaultsList",
      },
      virtualservice_faults: {
        value: cdktf.listMapperHcl(inventoryfaultconfigVirtualserviceFaultsToHclTerraform, true)(this._virtualserviceFaults.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryfaultconfigVirtualserviceFaultsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
