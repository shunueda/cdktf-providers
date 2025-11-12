// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsZoneSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, sends owners and groups as UIDs and GIDs when look up fails or if the 'nfsv4_no_name' property is set to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_allow_numeric_ids NfsZoneSettings#nfsv4_allow_numeric_ids}
  */
  readonly nfsv4AllowNumericIds?: boolean | cdktf.IResolvable;
  /**
  * Specifies the domain or realm through which users and groups are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_domain NfsZoneSettings#nfsv4_domain}
  */
  readonly nfsv4Domain?: string;
  /**
  * If true, sends owners and groups without a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_no_domain NfsZoneSettings#nfsv4_no_domain}
  */
  readonly nfsv4NoDomain?: boolean | cdktf.IResolvable;
  /**
  * If true, sends UIDs and GIDs without a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_no_domain_uids NfsZoneSettings#nfsv4_no_domain_uids}
  */
  readonly nfsv4NoDomainUids?: boolean | cdktf.IResolvable;
  /**
  * If true, sends owners and groups as UIDs and GIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_no_names NfsZoneSettings#nfsv4_no_names}
  */
  readonly nfsv4NoNames?: boolean | cdktf.IResolvable;
  /**
  * If true, replaces the owner or group domain with an NFS domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#nfsv4_replace_domain NfsZoneSettings#nfsv4_replace_domain}
  */
  readonly nfsv4ReplaceDomain?: boolean | cdktf.IResolvable;
  /**
  * Access zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#zone NfsZoneSettings#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings powerscale_nfs_zone_settings}
*/
export class NfsZoneSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_zone_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsZoneSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsZoneSettings to import
  * @param importFromId The id of the existing NfsZoneSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsZoneSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_zone_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_zone_settings powerscale_nfs_zone_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsZoneSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NfsZoneSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_zone_settings',
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
    this._nfsv4AllowNumericIds = config.nfsv4AllowNumericIds;
    this._nfsv4Domain = config.nfsv4Domain;
    this._nfsv4NoDomain = config.nfsv4NoDomain;
    this._nfsv4NoDomainUids = config.nfsv4NoDomainUids;
    this._nfsv4NoNames = config.nfsv4NoNames;
    this._nfsv4ReplaceDomain = config.nfsv4ReplaceDomain;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nfsv4_allow_numeric_ids - computed: true, optional: true, required: false
  private _nfsv4AllowNumericIds?: boolean | cdktf.IResolvable; 
  public get nfsv4AllowNumericIds() {
    return this.getBooleanAttribute('nfsv4_allow_numeric_ids');
  }
  public set nfsv4AllowNumericIds(value: boolean | cdktf.IResolvable) {
    this._nfsv4AllowNumericIds = value;
  }
  public resetNfsv4AllowNumericIds() {
    this._nfsv4AllowNumericIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4AllowNumericIdsInput() {
    return this._nfsv4AllowNumericIds;
  }

  // nfsv4_domain - computed: true, optional: true, required: false
  private _nfsv4Domain?: string; 
  public get nfsv4Domain() {
    return this.getStringAttribute('nfsv4_domain');
  }
  public set nfsv4Domain(value: string) {
    this._nfsv4Domain = value;
  }
  public resetNfsv4Domain() {
    this._nfsv4Domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4DomainInput() {
    return this._nfsv4Domain;
  }

  // nfsv4_no_domain - computed: true, optional: true, required: false
  private _nfsv4NoDomain?: boolean | cdktf.IResolvable; 
  public get nfsv4NoDomain() {
    return this.getBooleanAttribute('nfsv4_no_domain');
  }
  public set nfsv4NoDomain(value: boolean | cdktf.IResolvable) {
    this._nfsv4NoDomain = value;
  }
  public resetNfsv4NoDomain() {
    this._nfsv4NoDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4NoDomainInput() {
    return this._nfsv4NoDomain;
  }

  // nfsv4_no_domain_uids - computed: true, optional: true, required: false
  private _nfsv4NoDomainUids?: boolean | cdktf.IResolvable; 
  public get nfsv4NoDomainUids() {
    return this.getBooleanAttribute('nfsv4_no_domain_uids');
  }
  public set nfsv4NoDomainUids(value: boolean | cdktf.IResolvable) {
    this._nfsv4NoDomainUids = value;
  }
  public resetNfsv4NoDomainUids() {
    this._nfsv4NoDomainUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4NoDomainUidsInput() {
    return this._nfsv4NoDomainUids;
  }

  // nfsv4_no_names - computed: true, optional: true, required: false
  private _nfsv4NoNames?: boolean | cdktf.IResolvable; 
  public get nfsv4NoNames() {
    return this.getBooleanAttribute('nfsv4_no_names');
  }
  public set nfsv4NoNames(value: boolean | cdktf.IResolvable) {
    this._nfsv4NoNames = value;
  }
  public resetNfsv4NoNames() {
    this._nfsv4NoNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4NoNamesInput() {
    return this._nfsv4NoNames;
  }

  // nfsv4_replace_domain - computed: true, optional: true, required: false
  private _nfsv4ReplaceDomain?: boolean | cdktf.IResolvable; 
  public get nfsv4ReplaceDomain() {
    return this.getBooleanAttribute('nfsv4_replace_domain');
  }
  public set nfsv4ReplaceDomain(value: boolean | cdktf.IResolvable) {
    this._nfsv4ReplaceDomain = value;
  }
  public resetNfsv4ReplaceDomain() {
    this._nfsv4ReplaceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4ReplaceDomainInput() {
    return this._nfsv4ReplaceDomain;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nfsv4_allow_numeric_ids: cdktf.booleanToTerraform(this._nfsv4AllowNumericIds),
      nfsv4_domain: cdktf.stringToTerraform(this._nfsv4Domain),
      nfsv4_no_domain: cdktf.booleanToTerraform(this._nfsv4NoDomain),
      nfsv4_no_domain_uids: cdktf.booleanToTerraform(this._nfsv4NoDomainUids),
      nfsv4_no_names: cdktf.booleanToTerraform(this._nfsv4NoNames),
      nfsv4_replace_domain: cdktf.booleanToTerraform(this._nfsv4ReplaceDomain),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nfsv4_allow_numeric_ids: {
        value: cdktf.booleanToHclTerraform(this._nfsv4AllowNumericIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv4_domain: {
        value: cdktf.stringToHclTerraform(this._nfsv4Domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfsv4_no_domain: {
        value: cdktf.booleanToHclTerraform(this._nfsv4NoDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv4_no_domain_uids: {
        value: cdktf.booleanToHclTerraform(this._nfsv4NoDomainUids),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv4_no_names: {
        value: cdktf.booleanToHclTerraform(this._nfsv4NoNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv4_replace_domain: {
        value: cdktf.booleanToHclTerraform(this._nfsv4ReplaceDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
