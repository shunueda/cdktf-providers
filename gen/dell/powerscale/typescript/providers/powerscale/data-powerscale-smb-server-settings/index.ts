// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSmbServerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings#filter DataPowerscaleSmbServerSettings#filter}
  */
  readonly filter?: DataPowerscaleSmbServerSettingsFilter;
}
export interface DataPowerscaleSmbServerSettingsSmbServerSettings {
}

export function dataPowerscaleSmbServerSettingsSmbServerSettingsToTerraform(struct?: DataPowerscaleSmbServerSettingsSmbServerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbServerSettingsSmbServerSettingsToHclTerraform(struct?: DataPowerscaleSmbServerSettingsSmbServerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbServerSettingsSmbServerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbServerSettingsSmbServerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbServerSettingsSmbServerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_based_share_enum - computed: true, optional: false, required: false
  public get accessBasedShareEnum() {
    return this.getBooleanAttribute('access_based_share_enum');
  }

  // audit_fileshare - computed: true, optional: false, required: false
  public get auditFileshare() {
    return this.getStringAttribute('audit_fileshare');
  }

  // audit_logon - computed: true, optional: false, required: false
  public get auditLogon() {
    return this.getStringAttribute('audit_logon');
  }

  // dot_snap_accessible_child - computed: true, optional: false, required: false
  public get dotSnapAccessibleChild() {
    return this.getBooleanAttribute('dot_snap_accessible_child');
  }

  // dot_snap_accessible_root - computed: true, optional: false, required: false
  public get dotSnapAccessibleRoot() {
    return this.getBooleanAttribute('dot_snap_accessible_root');
  }

  // dot_snap_visible_child - computed: true, optional: false, required: false
  public get dotSnapVisibleChild() {
    return this.getBooleanAttribute('dot_snap_visible_child');
  }

  // dot_snap_visible_root - computed: true, optional: false, required: false
  public get dotSnapVisibleRoot() {
    return this.getBooleanAttribute('dot_snap_visible_root');
  }

  // enable_security_signatures - computed: true, optional: false, required: false
  public get enableSecuritySignatures() {
    return this.getBooleanAttribute('enable_security_signatures');
  }

  // guest_user - computed: true, optional: false, required: false
  public get guestUser() {
    return this.getStringAttribute('guest_user');
  }

  // ignore_eas - computed: true, optional: false, required: false
  public get ignoreEas() {
    return this.getBooleanAttribute('ignore_eas');
  }

  // onefs_cpu_multiplier - computed: true, optional: false, required: false
  public get onefsCpuMultiplier() {
    return this.getNumberAttribute('onefs_cpu_multiplier');
  }

  // onefs_num_workers - computed: true, optional: false, required: false
  public get onefsNumWorkers() {
    return this.getNumberAttribute('onefs_num_workers');
  }

  // reject_unencrypted_access - computed: true, optional: false, required: false
  public get rejectUnencryptedAccess() {
    return this.getBooleanAttribute('reject_unencrypted_access');
  }

  // require_security_signatures - computed: true, optional: false, required: false
  public get requireSecuritySignatures() {
    return this.getBooleanAttribute('require_security_signatures');
  }

  // server_side_copy - computed: true, optional: false, required: false
  public get serverSideCopy() {
    return this.getBooleanAttribute('server_side_copy');
  }

  // server_string - computed: true, optional: false, required: false
  public get serverString() {
    return this.getStringAttribute('server_string');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getBooleanAttribute('service');
  }

  // srv_cpu_multiplier - computed: true, optional: false, required: false
  public get srvCpuMultiplier() {
    return this.getNumberAttribute('srv_cpu_multiplier');
  }

  // srv_num_workers - computed: true, optional: false, required: false
  public get srvNumWorkers() {
    return this.getNumberAttribute('srv_num_workers');
  }

  // support_multichannel - computed: true, optional: false, required: false
  public get supportMultichannel() {
    return this.getBooleanAttribute('support_multichannel');
  }

  // support_netbios - computed: true, optional: false, required: false
  public get supportNetbios() {
    return this.getBooleanAttribute('support_netbios');
  }

  // support_smb2 - computed: true, optional: false, required: false
  public get supportSmb2() {
    return this.getBooleanAttribute('support_smb2');
  }

  // support_smb3_encryption - computed: true, optional: false, required: false
  public get supportSmb3Encryption() {
    return this.getBooleanAttribute('support_smb3_encryption');
  }
}
export interface DataPowerscaleSmbServerSettingsFilter {
  /**
  * If specified as "effective" or not specified, all fields are returned.  If specified as "user", only fields with non-default values are shown.  If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings#scope DataPowerscaleSmbServerSettings#scope}
  */
  readonly scope?: string;
}

export function dataPowerscaleSmbServerSettingsFilterToTerraform(struct?: DataPowerscaleSmbServerSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataPowerscaleSmbServerSettingsFilterToHclTerraform(struct?: DataPowerscaleSmbServerSettingsFilter | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleSmbServerSettingsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbServerSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbServerSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings powerscale_smb_server_settings}
*/
export class DataPowerscaleSmbServerSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSmbServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSmbServerSettings to import
  * @param importFromId The id of the existing DataPowerscaleSmbServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSmbServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_server_settings powerscale_smb_server_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSmbServerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSmbServerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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

  // smb_server_settings - computed: true, optional: false, required: false
  private _smbServerSettings = new DataPowerscaleSmbServerSettingsSmbServerSettingsOutputReference(this, "smb_server_settings");
  public get smbServerSettings() {
    return this._smbServerSettings;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleSmbServerSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleSmbServerSettingsFilter) {
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
      filter: dataPowerscaleSmbServerSettingsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleSmbServerSettingsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleSmbServerSettingsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
