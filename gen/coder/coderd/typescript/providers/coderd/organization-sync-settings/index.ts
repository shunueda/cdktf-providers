// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSyncSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, every user will be added to the default organization, regardless of claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings#assign_default OrganizationSyncSettings#assign_default}
  */
  readonly assignDefault: boolean | cdktf.IResolvable;
  /**
  * The claim field that specifies what organizations a user should be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings#field OrganizationSyncSettings#field}
  */
  readonly field: string;
  /**
  * A map from OIDC group name to Coder organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings#mapping OrganizationSyncSettings#mapping}
  */
  readonly mapping?: { [key: string]: string[] } | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings coderd_organization_sync_settings}
*/
export class OrganizationSyncSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_organization_sync_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationSyncSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSyncSettings to import
  * @param importFromId The id of the existing OrganizationSyncSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSyncSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_organization_sync_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization_sync_settings coderd_organization_sync_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSyncSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationSyncSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_organization_sync_settings',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12',
        providerVersionConstraint: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignDefault = config.assignDefault;
    this._field = config.field;
    this._mapping = config.mapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_default - computed: false, optional: false, required: true
  private _assignDefault?: boolean | cdktf.IResolvable; 
  public get assignDefault() {
    return this.getBooleanAttribute('assign_default');
  }
  public set assignDefault(value: boolean | cdktf.IResolvable) {
    this._assignDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignDefaultInput() {
    return this._assignDefault;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get mapping() {
    return this.interpolationForAttribute('mapping');
  }
  public set mapping(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_default: cdktf.booleanToTerraform(this._assignDefault),
      field: cdktf.stringToTerraform(this._field),
      mapping: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._mapping),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_default: {
        value: cdktf.booleanToHclTerraform(this._assignDefault),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
