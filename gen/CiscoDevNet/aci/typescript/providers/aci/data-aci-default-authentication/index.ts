// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciDefaultAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#annotation DataAciDefaultAuthentication#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#description DataAciDefaultAuthentication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#fallback_check DataAciDefaultAuthentication#fallback_check}
  */
  readonly fallbackCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#id DataAciDefaultAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#name_alias DataAciDefaultAuthentication#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#provider_group DataAciDefaultAuthentication#provider_group}
  */
  readonly providerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#realm DataAciDefaultAuthentication#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#realm_sub_type DataAciDefaultAuthentication#realm_sub_type}
  */
  readonly realmSubType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication aci_default_authentication}
*/
export class DataAciDefaultAuthentication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_default_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciDefaultAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciDefaultAuthentication to import
  * @param importFromId The id of the existing DataAciDefaultAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciDefaultAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_default_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/default_authentication aci_default_authentication} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciDefaultAuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciDefaultAuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_default_authentication',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._fallbackCheck = config.fallbackCheck;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._providerGroup = config.providerGroup;
    this._realm = config.realm;
    this._realmSubType = config.realmSubType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fallback_check - computed: true, optional: true, required: false
  private _fallbackCheck?: string; 
  public get fallbackCheck() {
    return this.getStringAttribute('fallback_check');
  }
  public set fallbackCheck(value: string) {
    this._fallbackCheck = value;
  }
  public resetFallbackCheck() {
    this._fallbackCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackCheckInput() {
    return this._fallbackCheck;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // provider_group - computed: true, optional: true, required: false
  private _providerGroup?: string; 
  public get providerGroup() {
    return this.getStringAttribute('provider_group');
  }
  public set providerGroup(value: string) {
    this._providerGroup = value;
  }
  public resetProviderGroup() {
    this._providerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerGroupInput() {
    return this._providerGroup;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // realm_sub_type - computed: true, optional: true, required: false
  private _realmSubType?: string; 
  public get realmSubType() {
    return this.getStringAttribute('realm_sub_type');
  }
  public set realmSubType(value: string) {
    this._realmSubType = value;
  }
  public resetRealmSubType() {
    this._realmSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmSubTypeInput() {
    return this._realmSubType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      fallback_check: cdktf.stringToTerraform(this._fallbackCheck),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      provider_group: cdktf.stringToTerraform(this._providerGroup),
      realm: cdktf.stringToTerraform(this._realm),
      realm_sub_type: cdktf.stringToTerraform(this._realmSubType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_check: {
        value: cdktf.stringToHclTerraform(this._fallbackCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_group: {
        value: cdktf.stringToHclTerraform(this._providerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_sub_type: {
        value: cdktf.stringToHclTerraform(this._realmSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
