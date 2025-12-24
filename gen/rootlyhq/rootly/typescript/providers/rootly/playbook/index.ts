// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaybookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Environment ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#environment_ids Playbook#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * The external url of the playbook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#external_url Playbook#external_url}
  */
  readonly externalUrl?: string;
  /**
  * The Functionality ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#functionality_ids Playbook#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * The Team ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#group_ids Playbook#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#id Playbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Incident Type ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#incident_type_ids Playbook#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * The Service ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#service_ids Playbook#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * The Severity ID's to attach to the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#severity_ids Playbook#severity_ids}
  */
  readonly severityIds?: string[];
  /**
  * The summary of the playbook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#summary Playbook#summary}
  */
  readonly summary?: string;
  /**
  * The title of the playbook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#title Playbook#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook rootly_playbook}
*/
export class Playbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_playbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Playbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Playbook to import
  * @param importFromId The id of the existing Playbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Playbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_playbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/playbook rootly_playbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlaybookConfig
  */
  public constructor(scope: Construct, id: string, config: PlaybookConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_playbook',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentIds = config.environmentIds;
    this._externalUrl = config.externalUrl;
    this._functionalityIds = config.functionalityIds;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._incidentTypeIds = config.incidentTypeIds;
    this._serviceIds = config.serviceIds;
    this._severityIds = config.severityIds;
    this._summary = config.summary;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // external_url - computed: true, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // functionality_ids - computed: false, optional: true, required: false
  private _functionalityIds?: string[]; 
  public get functionalityIds() {
    return this.getListAttribute('functionality_ids');
  }
  public set functionalityIds(value: string[]) {
    this._functionalityIds = value;
  }
  public resetFunctionalityIds() {
    this._functionalityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalityIdsInput() {
    return this._functionalityIds;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // incident_type_ids - computed: false, optional: true, required: false
  private _incidentTypeIds?: string[]; 
  public get incidentTypeIds() {
    return this.getListAttribute('incident_type_ids');
  }
  public set incidentTypeIds(value: string[]) {
    this._incidentTypeIds = value;
  }
  public resetIncidentTypeIds() {
    this._incidentTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeIdsInput() {
    return this._incidentTypeIds;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // severity_ids - computed: false, optional: true, required: false
  private _severityIds?: string[]; 
  public get severityIds() {
    return this.getListAttribute('severity_ids');
  }
  public set severityIds(value: string[]) {
    this._severityIds = value;
  }
  public resetSeverityIds() {
    this._severityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdsInput() {
    return this._severityIds;
  }

  // summary - computed: true, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      external_url: cdktf.stringToTerraform(this._externalUrl),
      functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionalityIds),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentTypeIds),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      severity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityIds),
      summary: cdktf.stringToTerraform(this._summary),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_url: {
        value: cdktf.stringToHclTerraform(this._externalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functionality_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionalityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentTypeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
