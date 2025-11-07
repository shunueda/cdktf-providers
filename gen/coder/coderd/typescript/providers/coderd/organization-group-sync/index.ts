// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationGroupSyncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls whether groups will be created if they are missing. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#auto_create_missing OrganizationGroupSyncA#auto_create_missing}
  */
  readonly autoCreateMissing?: boolean | cdktf.IResolvable;
  /**
  * The claim field that specifies what groups a user should be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#field OrganizationGroupSyncA#field}
  */
  readonly field: string;
  /**
  * A map from OIDC group name to Coder group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#mapping OrganizationGroupSyncA#mapping}
  */
  readonly mapping: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The ID of the organization to configure group sync for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#organization_id OrganizationGroupSyncA#organization_id}
  */
  readonly organizationId: string;
  /**
  * A regular expression that will be used to filter the groups returned by the OIDC provider. Any group not matched will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#regex_filter OrganizationGroupSyncA#regex_filter}
  */
  readonly regexFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync coderd_organization_group_sync}
*/
export class OrganizationGroupSyncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_organization_group_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationGroupSyncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationGroupSyncA to import
  * @param importFromId The id of the existing OrganizationGroupSyncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationGroupSyncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_organization_group_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_group_sync coderd_organization_group_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationGroupSyncAConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationGroupSyncAConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_organization_group_sync',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateMissing = config.autoCreateMissing;
    this._field = config.field;
    this._mapping = config.mapping;
    this._organizationId = config.organizationId;
    this._regexFilter = config.regexFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_missing - computed: true, optional: true, required: false
  private _autoCreateMissing?: boolean | cdktf.IResolvable; 
  public get autoCreateMissing() {
    return this.getBooleanAttribute('auto_create_missing');
  }
  public set autoCreateMissing(value: boolean | cdktf.IResolvable) {
    this._autoCreateMissing = value;
  }
  public resetAutoCreateMissing() {
    this._autoCreateMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateMissingInput() {
    return this._autoCreateMissing;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // mapping - computed: false, optional: false, required: true
  private _mapping?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get mapping() {
    return this.interpolationForAttribute('mapping');
  }
  public set mapping(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._mapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // regex_filter - computed: false, optional: true, required: false
  private _regexFilter?: string; 
  public get regexFilter() {
    return this.getStringAttribute('regex_filter');
  }
  public set regexFilter(value: string) {
    this._regexFilter = value;
  }
  public resetRegexFilter() {
    this._regexFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFilterInput() {
    return this._regexFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_missing: cdktf.booleanToTerraform(this._autoCreateMissing),
      field: cdktf.stringToTerraform(this._field),
      mapping: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._mapping),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      regex_filter: cdktf.stringToTerraform(this._regexFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_missing: {
        value: cdktf.booleanToHclTerraform(this._autoCreateMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._mapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex_filter: {
        value: cdktf.stringToHclTerraform(this._regexFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
