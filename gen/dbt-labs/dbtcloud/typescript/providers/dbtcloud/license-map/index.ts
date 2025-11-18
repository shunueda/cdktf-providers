// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * License type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map#license_type LicenseMap#license_type}
  */
  readonly licenseType: string;
  /**
  * SSO license mapping group names for this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map#sso_license_mapping_groups LicenseMap#sso_license_mapping_groups}
  */
  readonly ssoLicenseMappingGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map dbtcloud_license_map}
*/
export class LicenseMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_license_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseMap to import
  * @param importFromId The id of the existing LicenseMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_license_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/license_map dbtcloud_license_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseMapConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseMapConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_license_map',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenseType = config.licenseType;
    this._ssoLicenseMappingGroups = config.ssoLicenseMappingGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // sso_license_mapping_groups - computed: false, optional: true, required: false
  private _ssoLicenseMappingGroups?: string[]; 
  public get ssoLicenseMappingGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_license_mapping_groups'));
  }
  public set ssoLicenseMappingGroups(value: string[]) {
    this._ssoLicenseMappingGroups = value;
  }
  public resetSsoLicenseMappingGroups() {
    this._ssoLicenseMappingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoLicenseMappingGroupsInput() {
    return this._ssoLicenseMappingGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_type: cdktf.stringToTerraform(this._licenseType),
      sso_license_mapping_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoLicenseMappingGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_license_mapping_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoLicenseMappingGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
