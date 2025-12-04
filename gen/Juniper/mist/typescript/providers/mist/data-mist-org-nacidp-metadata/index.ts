// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgNacidpMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata#nacidp_id DataMistOrgNacidpMetadata#nacidp_id}
  */
  readonly nacidpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata#org_id DataMistOrgNacidpMetadata#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata mist_org_nacidp_metadata}
*/
export class DataMistOrgNacidpMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_nacidp_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgNacidpMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgNacidpMetadata to import
  * @param importFromId The id of the existing DataMistOrgNacidpMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgNacidpMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_nacidp_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_nacidp_metadata mist_org_nacidp_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgNacidpMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgNacidpMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_nacidp_metadata',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nacidpId = config.nacidpId;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_url - computed: true, optional: false, required: false
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // nacidp_id - computed: false, optional: false, required: true
  private _nacidpId?: string; 
  public get nacidpId() {
    return this.getStringAttribute('nacidp_id');
  }
  public set nacidpId(value: string) {
    this._nacidpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nacidpIdInput() {
    return this._nacidpId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // scim_base_url - computed: true, optional: false, required: false
  public get scimBaseUrl() {
    return this.getStringAttribute('scim_base_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nacidp_id: cdktf.stringToTerraform(this._nacidpId),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nacidp_id: {
        value: cdktf.stringToHclTerraform(this._nacidpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
