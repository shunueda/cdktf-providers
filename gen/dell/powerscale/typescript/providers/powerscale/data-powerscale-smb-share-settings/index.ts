// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSmbShareSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings#filter DataPowerscaleSmbShareSettings#filter}
  */
  readonly filter?: DataPowerscaleSmbShareSettingsFilter;
}
export interface DataPowerscaleSmbShareSettingsSmbShareSettings {
}

export function dataPowerscaleSmbShareSettingsSmbShareSettingsToTerraform(struct?: DataPowerscaleSmbShareSettingsSmbShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbShareSettingsSmbShareSettingsToHclTerraform(struct?: DataPowerscaleSmbShareSettingsSmbShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbShareSettingsSmbShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbShareSettingsSmbShareSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSettingsSmbShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_based_enumeration - computed: true, optional: false, required: false
  public get accessBasedEnumeration() {
    return this.getBooleanAttribute('access_based_enumeration');
  }

  // access_based_enumeration_root_only - computed: true, optional: false, required: false
  public get accessBasedEnumerationRootOnly() {
    return this.getBooleanAttribute('access_based_enumeration_root_only');
  }

  // allow_delete_readonly - computed: true, optional: false, required: false
  public get allowDeleteReadonly() {
    return this.getBooleanAttribute('allow_delete_readonly');
  }

  // allow_execute_always - computed: true, optional: false, required: false
  public get allowExecuteAlways() {
    return this.getBooleanAttribute('allow_execute_always');
  }

  // ca_timeout - computed: true, optional: false, required: false
  public get caTimeout() {
    return this.getNumberAttribute('ca_timeout');
  }

  // ca_write_integrity - computed: true, optional: false, required: false
  public get caWriteIntegrity() {
    return this.getStringAttribute('ca_write_integrity');
  }

  // change_notify - computed: true, optional: false, required: false
  public get changeNotify() {
    return this.getStringAttribute('change_notify');
  }

  // continuously_available - computed: true, optional: false, required: false
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }

  // create_permissions - computed: true, optional: false, required: false
  public get createPermissions() {
    return this.getStringAttribute('create_permissions');
  }

  // csc_policy - computed: true, optional: false, required: false
  public get cscPolicy() {
    return this.getStringAttribute('csc_policy');
  }

  // directory_create_mask - computed: true, optional: false, required: false
  public get directoryCreateMask() {
    return this.getNumberAttribute('directory_create_mask');
  }

  // directory_create_mode - computed: true, optional: false, required: false
  public get directoryCreateMode() {
    return this.getNumberAttribute('directory_create_mode');
  }

  // file_create_mask - computed: true, optional: false, required: false
  public get fileCreateMask() {
    return this.getNumberAttribute('file_create_mask');
  }

  // file_create_mode - computed: true, optional: false, required: false
  public get fileCreateMode() {
    return this.getNumberAttribute('file_create_mode');
  }

  // file_filter_extensions - computed: true, optional: false, required: false
  public get fileFilterExtensions() {
    return this.getListAttribute('file_filter_extensions');
  }

  // file_filter_type - computed: true, optional: false, required: false
  public get fileFilterType() {
    return this.getStringAttribute('file_filter_type');
  }

  // file_filtering_enabled - computed: true, optional: false, required: false
  public get fileFilteringEnabled() {
    return this.getBooleanAttribute('file_filtering_enabled');
  }

  // hide_dot_files - computed: true, optional: false, required: false
  public get hideDotFiles() {
    return this.getBooleanAttribute('hide_dot_files');
  }

  // host_acl - computed: true, optional: false, required: false
  public get hostAcl() {
    return this.getListAttribute('host_acl');
  }

  // impersonate_guest - computed: true, optional: false, required: false
  public get impersonateGuest() {
    return this.getStringAttribute('impersonate_guest');
  }

  // impersonate_user - computed: true, optional: false, required: false
  public get impersonateUser() {
    return this.getStringAttribute('impersonate_user');
  }

  // mangle_byte_start - computed: true, optional: false, required: false
  public get mangleByteStart() {
    return this.getNumberAttribute('mangle_byte_start');
  }

  // mangle_map - computed: true, optional: false, required: false
  public get mangleMap() {
    return this.getListAttribute('mangle_map');
  }

  // ntfs_acl_support - computed: true, optional: false, required: false
  public get ntfsAclSupport() {
    return this.getBooleanAttribute('ntfs_acl_support');
  }

  // oplocks - computed: true, optional: false, required: false
  public get oplocks() {
    return this.getBooleanAttribute('oplocks');
  }

  // smb3_encryption_enabled - computed: true, optional: false, required: false
  public get smb3EncryptionEnabled() {
    return this.getBooleanAttribute('smb3_encryption_enabled');
  }

  // sparse_file - computed: true, optional: false, required: false
  public get sparseFile() {
    return this.getBooleanAttribute('sparse_file');
  }

  // strict_ca_lockout - computed: true, optional: false, required: false
  public get strictCaLockout() {
    return this.getBooleanAttribute('strict_ca_lockout');
  }

  // strict_flush - computed: true, optional: false, required: false
  public get strictFlush() {
    return this.getBooleanAttribute('strict_flush');
  }

  // strict_locking - computed: true, optional: false, required: false
  public get strictLocking() {
    return this.getBooleanAttribute('strict_locking');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export interface DataPowerscaleSmbShareSettingsFilter {
  /**
  * If specified as "effective" or not specified, all fields are returned.  If specified as "user", only fields with non-default values are shown.  If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings#scope DataPowerscaleSmbShareSettings#scope}
  */
  readonly scope?: string;
  /**
  * Specifies which access zone to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings#zone DataPowerscaleSmbShareSettings#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleSmbShareSettingsFilterToTerraform(struct?: DataPowerscaleSmbShareSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleSmbShareSettingsFilterToHclTerraform(struct?: DataPowerscaleSmbShareSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleSmbShareSettingsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbShareSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._zone = value.zone;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings powerscale_smb_share_settings}
*/
export class DataPowerscaleSmbShareSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_share_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSmbShareSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSmbShareSettings to import
  * @param importFromId The id of the existing DataPowerscaleSmbShareSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSmbShareSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_share_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share_settings powerscale_smb_share_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSmbShareSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSmbShareSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_share_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // smb_share_settings - computed: true, optional: false, required: false
  private _smbShareSettings = new DataPowerscaleSmbShareSettingsSmbShareSettingsOutputReference(this, "smb_share_settings");
  public get smbShareSettings() {
    return this._smbShareSettings;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleSmbShareSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleSmbShareSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleSmbShareSettingsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleSmbShareSettingsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleSmbShareSettingsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
