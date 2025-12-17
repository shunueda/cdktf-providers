// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrospectiveConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Teams associated with the retrospective configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#group_ids RetrospectiveConfiguration#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#id RetrospectiveConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Incident types associated with the retrospective configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#incident_type_ids RetrospectiveConfiguration#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * The kind of the retrospective configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#kind RetrospectiveConfiguration#kind}
  */
  readonly kind?: string;
  /**
  * Severities associated with the retrospective configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#severity_ids RetrospectiveConfiguration#severity_ids}
  */
  readonly severityIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration rootly_retrospective_configuration}
*/
export class RetrospectiveConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrospectiveConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrospectiveConfiguration to import
  * @param importFromId The id of the existing RetrospectiveConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrospectiveConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_configuration rootly_retrospective_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrospectiveConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RetrospectiveConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_configuration',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._incidentTypeIds = config.incidentTypeIds;
    this._kind = config.kind;
    this._severityIds = config.severityIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ids - computed: true, optional: true, required: false
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

  // incident_type_ids - computed: true, optional: true, required: false
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

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // severity_ids - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentTypeIds),
      kind: cdktf.stringToTerraform(this._kind),
      severity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
