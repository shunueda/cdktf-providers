// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNfsZoneSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings#filter DataPowerscaleNfsZoneSettings#filter}
  */
  readonly filter?: DataPowerscaleNfsZoneSettingsFilter;
}
export interface DataPowerscaleNfsZoneSettingsNfsZoneSettings {
}

export function dataPowerscaleNfsZoneSettingsNfsZoneSettingsToTerraform(struct?: DataPowerscaleNfsZoneSettingsNfsZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsZoneSettingsNfsZoneSettingsToHclTerraform(struct?: DataPowerscaleNfsZoneSettingsNfsZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsZoneSettingsNfsZoneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsZoneSettingsNfsZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsZoneSettingsNfsZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nfsv4_allow_numeric_ids - computed: true, optional: false, required: false
  public get nfsv4AllowNumericIds() {
    return this.getBooleanAttribute('nfsv4_allow_numeric_ids');
  }

  // nfsv4_domain - computed: true, optional: false, required: false
  public get nfsv4Domain() {
    return this.getStringAttribute('nfsv4_domain');
  }

  // nfsv4_no_domain - computed: true, optional: false, required: false
  public get nfsv4NoDomain() {
    return this.getBooleanAttribute('nfsv4_no_domain');
  }

  // nfsv4_no_domain_uids - computed: true, optional: false, required: false
  public get nfsv4NoDomainUids() {
    return this.getBooleanAttribute('nfsv4_no_domain_uids');
  }

  // nfsv4_no_names - computed: true, optional: false, required: false
  public get nfsv4NoNames() {
    return this.getBooleanAttribute('nfsv4_no_names');
  }

  // nfsv4_replace_domain - computed: true, optional: false, required: false
  public get nfsv4ReplaceDomain() {
    return this.getBooleanAttribute('nfsv4_replace_domain');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export interface DataPowerscaleNfsZoneSettingsFilter {
  /**
  * Access zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings#zone DataPowerscaleNfsZoneSettings#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleNfsZoneSettingsFilterToTerraform(struct?: DataPowerscaleNfsZoneSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleNfsZoneSettingsFilterToHclTerraform(struct?: DataPowerscaleNfsZoneSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataPowerscaleNfsZoneSettingsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsZoneSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsZoneSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zone = value.zone;
    }
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
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings powerscale_nfs_zone_settings}
*/
export class DataPowerscaleNfsZoneSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_zone_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNfsZoneSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNfsZoneSettings to import
  * @param importFromId The id of the existing DataPowerscaleNfsZoneSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNfsZoneSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_zone_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_zone_settings powerscale_nfs_zone_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNfsZoneSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNfsZoneSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_zone_settings',
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

  // nfs_zone_settings - computed: true, optional: false, required: false
  private _nfsZoneSettings = new DataPowerscaleNfsZoneSettingsNfsZoneSettingsOutputReference(this, "nfs_zone_settings");
  public get nfsZoneSettings() {
    return this._nfsZoneSettings;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleNfsZoneSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleNfsZoneSettingsFilter) {
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
      filter: dataPowerscaleNfsZoneSettingsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleNfsZoneSettingsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleNfsZoneSettingsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
