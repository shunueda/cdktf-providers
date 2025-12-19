// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgSsoMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata#org_id DataMistOrgSsoMetadata#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata#sso_id DataMistOrgSsoMetadata#sso_id}
  */
  readonly ssoId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata mist_org_sso_metadata}
*/
export class DataMistOrgSsoMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_sso_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgSsoMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgSsoMetadata to import
  * @param importFromId The id of the existing DataMistOrgSsoMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgSsoMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_sso_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/org_sso_metadata mist_org_sso_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgSsoMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgSsoMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_sso_metadata',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
    this._ssoId = config.ssoId;
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

  // sso_id - computed: false, optional: false, required: true
  private _ssoId?: string; 
  public get ssoId() {
    return this.getStringAttribute('sso_id');
  }
  public set ssoId(value: string) {
    this._ssoId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIdInput() {
    return this._ssoId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
      sso_id: cdktf.stringToTerraform(this._ssoId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_id: {
        value: cdktf.stringToHclTerraform(this._ssoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
