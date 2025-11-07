// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPresenceDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the presence definition is not active. If not set, the presence definition defaults to active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#deactivated OrganizationPresenceDefinition#deactivated}
  */
  readonly deactivated?: boolean | cdktf.IResolvable;
  /**
  * The division to which the presence definition will belong. If not set, the presence definition will apply to all divisions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#division_id OrganizationPresenceDefinition#division_id}
  */
  readonly divisionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#id OrganizationPresenceDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The localized language labels for the presence definition. Valid labels include: ar, cs, da, de, en, en_US, es, fi, fr, he, hi, it, ja, ko, nl, no, pl, pt, pt_BR, pt_PT, ru, sv, th, tr, uk, zh_CN, zh_TW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#language_labels OrganizationPresenceDefinition#language_labels}
  */
  readonly languageLabels: { [key: string]: string };
  /**
  * System presence to create presence definition for. Once presence definition is created, this cannot be changed. Valid presences include: Available, Away, Break, Busy, Meal, Meeting, Training, OnQueue, Offline, Idle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#system_presence OrganizationPresenceDefinition#system_presence}
  */
  readonly systemPresence: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition genesyscloud_organization_presence_definition}
*/
export class OrganizationPresenceDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_organization_presence_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPresenceDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPresenceDefinition to import
  * @param importFromId The id of the existing OrganizationPresenceDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPresenceDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_organization_presence_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_presence_definition genesyscloud_organization_presence_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPresenceDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationPresenceDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_organization_presence_definition',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deactivated = config.deactivated;
    this._divisionId = config.divisionId;
    this._id = config.id;
    this._languageLabels = config.languageLabels;
    this._systemPresence = config.systemPresence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deactivated - computed: false, optional: true, required: false
  private _deactivated?: boolean | cdktf.IResolvable; 
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }
  public set deactivated(value: boolean | cdktf.IResolvable) {
    this._deactivated = value;
  }
  public resetDeactivated() {
    this._deactivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatedInput() {
    return this._deactivated;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // language_labels - computed: false, optional: false, required: true
  private _languageLabels?: { [key: string]: string }; 
  public get languageLabels() {
    return this.getStringMapAttribute('language_labels');
  }
  public set languageLabels(value: { [key: string]: string }) {
    this._languageLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageLabelsInput() {
    return this._languageLabels;
  }

  // system_presence - computed: false, optional: false, required: true
  private _systemPresence?: string; 
  public get systemPresence() {
    return this.getStringAttribute('system_presence');
  }
  public set systemPresence(value: string) {
    this._systemPresence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPresenceInput() {
    return this._systemPresence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deactivated: cdktf.booleanToTerraform(this._deactivated),
      division_id: cdktf.stringToTerraform(this._divisionId),
      id: cdktf.stringToTerraform(this._id),
      language_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._languageLabels),
      system_presence: cdktf.stringToTerraform(this._systemPresence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deactivated: {
        value: cdktf.booleanToHclTerraform(this._deactivated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
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
      language_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._languageLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      system_presence: {
        value: cdktf.stringToHclTerraform(this._systemPresence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
