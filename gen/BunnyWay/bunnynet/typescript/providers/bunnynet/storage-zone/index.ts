// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The file path for a custom 404 error page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#custom_404_file_path StorageZone#custom_404_file_path}
  */
  readonly custom404FilePath?: string;
  /**
  * The name of the storage zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#name StorageZone#name}
  */
  readonly name: string;
  /**
  * The region where the storage zone is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#region StorageZone#region}
  */
  readonly region: string;
  /**
  * A set of regions for data replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#replication_regions StorageZone#replication_regions}
  */
  readonly replicationRegions?: string[];
  /**
  * Indicates whether to rewrite 404 errors to 200 status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#rewrite_404_to_200 StorageZone#rewrite_404_to_200}
  */
  readonly rewrite404To200?: boolean | cdktf.IResolvable;
  /**
  * Options: `Edge`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#zone_tier StorageZone#zone_tier}
  */
  readonly zoneTier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone bunnynet_storage_zone}
*/
export class StorageZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_storage_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageZone to import
  * @param importFromId The id of the existing StorageZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_storage_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/storage_zone bunnynet_storage_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageZoneConfig
  */
  public constructor(scope: Construct, id: string, config: StorageZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_storage_zone',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.4',
        providerVersionConstraint: '0.11.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._custom404FilePath = config.custom404FilePath;
    this._name = config.name;
    this._region = config.region;
    this._replicationRegions = config.replicationRegions;
    this._rewrite404To200 = config.rewrite404To200;
    this._zoneTier = config.zoneTier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_404_file_path - computed: false, optional: true, required: false
  private _custom404FilePath?: string; 
  public get custom404FilePath() {
    return this.getStringAttribute('custom_404_file_path');
  }
  public set custom404FilePath(value: string) {
    this._custom404FilePath = value;
  }
  public resetCustom404FilePath() {
    this._custom404FilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom404FilePathInput() {
    return this._custom404FilePath;
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_readonly - computed: true, optional: false, required: false
  public get passwordReadonly() {
    return this.getStringAttribute('password_readonly');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_regions - computed: true, optional: true, required: false
  private _replicationRegions?: string[]; 
  public get replicationRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('replication_regions'));
  }
  public set replicationRegions(value: string[]) {
    this._replicationRegions = value;
  }
  public resetReplicationRegions() {
    this._replicationRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegionsInput() {
    return this._replicationRegions;
  }

  // rewrite_404_to_200 - computed: true, optional: true, required: false
  private _rewrite404To200?: boolean | cdktf.IResolvable; 
  public get rewrite404To200() {
    return this.getBooleanAttribute('rewrite_404_to_200');
  }
  public set rewrite404To200(value: boolean | cdktf.IResolvable) {
    this._rewrite404To200 = value;
  }
  public resetRewrite404To200() {
    this._rewrite404To200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewrite404To200Input() {
    return this._rewrite404To200;
  }

  // zone_tier - computed: false, optional: false, required: true
  private _zoneTier?: string; 
  public get zoneTier() {
    return this.getStringAttribute('zone_tier');
  }
  public set zoneTier(value: string) {
    this._zoneTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTierInput() {
    return this._zoneTier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_404_file_path: cdktf.stringToTerraform(this._custom404FilePath),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      replication_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicationRegions),
      rewrite_404_to_200: cdktf.booleanToTerraform(this._rewrite404To200),
      zone_tier: cdktf.stringToTerraform(this._zoneTier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_404_file_path: {
        value: cdktf.stringToHclTerraform(this._custom404FilePath),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicationRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rewrite_404_to_200: {
        value: cdktf.booleanToHclTerraform(this._rewrite404To200),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_tier: {
        value: cdktf.stringToHclTerraform(this._zoneTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
