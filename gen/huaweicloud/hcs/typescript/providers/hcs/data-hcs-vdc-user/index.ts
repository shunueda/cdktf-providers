// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsVdcUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#access_mode DataHcsVdcUser#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#auth_type DataHcsVdcUser#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#create_at DataHcsVdcUser#create_at}
  */
  readonly createAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#description DataHcsVdcUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#display_name DataHcsVdcUser#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#domain_id DataHcsVdcUser#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#enabled DataHcsVdcUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#id DataHcsVdcUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#ldap_id DataHcsVdcUser#ldap_id}
  */
  readonly ldapId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#name DataHcsVdcUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#top_vdc_id DataHcsVdcUser#top_vdc_id}
  */
  readonly topVdcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#vdc_id DataHcsVdcUser#vdc_id}
  */
  readonly vdcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user hcs_vdc_user}
*/
export class DataHcsVdcUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_vdc_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcsVdcUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcsVdcUser to import
  * @param importFromId The id of the existing DataHcsVdcUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcsVdcUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_vdc_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/vdc_user hcs_vdc_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsVdcUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcsVdcUserConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_vdc_user',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._authType = config.authType;
    this._createAt = config.createAt;
    this._description = config.description;
    this._displayName = config.displayName;
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ldapId = config.ldapId;
    this._name = config.name;
    this._topVdcId = config.topVdcId;
    this._vdcId = config.vdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // create_at - computed: false, optional: true, required: false
  private _createAt?: number; 
  public get createAt() {
    return this.getNumberAttribute('create_at');
  }
  public set createAt(value: number) {
    this._createAt = value;
  }
  public resetCreateAt() {
    this._createAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAtInput() {
    return this._createAt;
  }

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: true, required: false
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

  // ldap_id - computed: false, optional: true, required: false
  private _ldapId?: string; 
  public get ldapId() {
    return this.getStringAttribute('ldap_id');
  }
  public set ldapId(value: string) {
    this._ldapId = value;
  }
  public resetLdapId() {
    this._ldapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapIdInput() {
    return this._ldapId;
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

  // top_vdc_id - computed: false, optional: true, required: false
  private _topVdcId?: string; 
  public get topVdcId() {
    return this.getStringAttribute('top_vdc_id');
  }
  public set topVdcId(value: string) {
    this._topVdcId = value;
  }
  public resetTopVdcId() {
    this._topVdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topVdcIdInput() {
    return this._topVdcId;
  }

  // vdc_id - computed: false, optional: false, required: true
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      auth_type: cdktf.stringToTerraform(this._authType),
      create_at: cdktf.numberToTerraform(this._createAt),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_id: cdktf.stringToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ldap_id: cdktf.stringToTerraform(this._ldapId),
      name: cdktf.stringToTerraform(this._name),
      top_vdc_id: cdktf.stringToTerraform(this._topVdcId),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_at: {
        value: cdktf.numberToHclTerraform(this._createAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_id: {
        value: cdktf.stringToHclTerraform(this._ldapId),
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
      top_vdc_id: {
        value: cdktf.stringToHclTerraform(this._topVdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
