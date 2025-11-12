// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org#alarmtemplate_id Org#alarmtemplate_id}
  */
  readonly alarmtemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org#allow_mist Org#allow_mist}
  */
  readonly allowMist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org#name Org#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org#session_expiry Org#session_expiry}
  */
  readonly sessionExpiry?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org mist_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org mist_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmtemplateId = config.alarmtemplateId;
    this._allowMist = config.allowMist;
    this._name = config.name;
    this._sessionExpiry = config.sessionExpiry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarmtemplate_id - computed: false, optional: true, required: false
  private _alarmtemplateId?: string; 
  public get alarmtemplateId() {
    return this.getStringAttribute('alarmtemplate_id');
  }
  public set alarmtemplateId(value: string) {
    this._alarmtemplateId = value;
  }
  public resetAlarmtemplateId() {
    this._alarmtemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmtemplateIdInput() {
    return this._alarmtemplateId;
  }

  // allow_mist - computed: true, optional: true, required: false
  private _allowMist?: boolean | cdktf.IResolvable; 
  public get allowMist() {
    return this.getBooleanAttribute('allow_mist');
  }
  public set allowMist(value: boolean | cdktf.IResolvable) {
    this._allowMist = value;
  }
  public resetAllowMist() {
    this._allowMist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMistInput() {
    return this._allowMist;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msp_id - computed: true, optional: false, required: false
  public get mspId() {
    return this.getStringAttribute('msp_id');
  }

  // msp_logo_url - computed: true, optional: false, required: false
  public get mspLogoUrl() {
    return this.getStringAttribute('msp_logo_url');
  }

  // msp_name - computed: true, optional: false, required: false
  public get mspName() {
    return this.getStringAttribute('msp_name');
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

  // orggroup_ids - computed: true, optional: false, required: false
  public get orggroupIds() {
    return this.getListAttribute('orggroup_ids');
  }

  // session_expiry - computed: true, optional: true, required: false
  private _sessionExpiry?: number; 
  public get sessionExpiry() {
    return this.getNumberAttribute('session_expiry');
  }
  public set sessionExpiry(value: number) {
    this._sessionExpiry = value;
  }
  public resetSessionExpiry() {
    this._sessionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpiryInput() {
    return this._sessionExpiry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarmtemplate_id: cdktf.stringToTerraform(this._alarmtemplateId),
      allow_mist: cdktf.booleanToTerraform(this._allowMist),
      name: cdktf.stringToTerraform(this._name),
      session_expiry: cdktf.numberToTerraform(this._sessionExpiry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarmtemplate_id: {
        value: cdktf.stringToHclTerraform(this._alarmtemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_mist: {
        value: cdktf.booleanToHclTerraform(this._allowMist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_expiry: {
        value: cdktf.numberToHclTerraform(this._sessionExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
