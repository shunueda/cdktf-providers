// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#acknowledged_at DataRootlyIncident#acknowledged_at}
  */
  readonly acknowledgedAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#closed_at DataRootlyIncident#closed_at}
  */
  readonly closedAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#created_at DataRootlyIncident#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#detected_at DataRootlyIncident#detected_at}
  */
  readonly detectedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#environments DataRootlyIncident#environments}
  */
  readonly environments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#functionalities DataRootlyIncident#functionalities}
  */
  readonly functionalities?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#in_triage_at DataRootlyIncident#in_triage_at}
  */
  readonly inTriageAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#kind DataRootlyIncident#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#labels DataRootlyIncident#labels}
  */
  readonly labels?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#mitigated_at DataRootlyIncident#mitigated_at}
  */
  readonly mitigatedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#private DataRootlyIncident#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#resolved_at DataRootlyIncident#resolved_at}
  */
  readonly resolvedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#services DataRootlyIncident#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#severity DataRootlyIncident#severity}
  */
  readonly severity?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#started_at DataRootlyIncident#started_at}
  */
  readonly startedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#status DataRootlyIncident#status}
  */
  readonly status?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#updated_at DataRootlyIncident#updated_at}
  */
  readonly updatedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#user DataRootlyIncident#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident rootly_incident}
*/
export class DataRootlyIncident extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyIncident to import
  * @param importFromId The id of the existing DataRootlyIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/incident rootly_incident} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyIncidentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyIncidentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7',
        providerVersionConstraint: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acknowledgedAt = config.acknowledgedAt;
    this._closedAt = config.closedAt;
    this._createdAt = config.createdAt;
    this._detectedAt = config.detectedAt;
    this._environments = config.environments;
    this._functionalities = config.functionalities;
    this._inTriageAt = config.inTriageAt;
    this._kind = config.kind;
    this._labels = config.labels;
    this._mitigatedAt = config.mitigatedAt;
    this._private = config.private;
    this._resolvedAt = config.resolvedAt;
    this._services = config.services;
    this._severity = config.severity;
    this._startedAt = config.startedAt;
    this._status = config.status;
    this._updatedAt = config.updatedAt;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledged_at - computed: false, optional: true, required: false
  private _acknowledgedAt?: { [key: string]: string }; 
  public get acknowledgedAt() {
    return this.getStringMapAttribute('acknowledged_at');
  }
  public set acknowledgedAt(value: { [key: string]: string }) {
    this._acknowledgedAt = value;
  }
  public resetAcknowledgedAt() {
    this._acknowledgedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedAtInput() {
    return this._acknowledgedAt;
  }

  // closed_at - computed: false, optional: true, required: false
  private _closedAt?: { [key: string]: string }; 
  public get closedAt() {
    return this.getStringMapAttribute('closed_at');
  }
  public set closedAt(value: { [key: string]: string }) {
    this._closedAt = value;
  }
  public resetClosedAt() {
    this._closedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedAtInput() {
    return this._closedAt;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // detected_at - computed: false, optional: true, required: false
  private _detectedAt?: { [key: string]: string }; 
  public get detectedAt() {
    return this.getStringMapAttribute('detected_at');
  }
  public set detectedAt(value: { [key: string]: string }) {
    this._detectedAt = value;
  }
  public resetDetectedAt() {
    this._detectedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectedAtInput() {
    return this._detectedAt;
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string; 
  public get environments() {
    return this.getStringAttribute('environments');
  }
  public set environments(value: string) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // functionalities - computed: true, optional: true, required: false
  private _functionalities?: string; 
  public get functionalities() {
    return this.getStringAttribute('functionalities');
  }
  public set functionalities(value: string) {
    this._functionalities = value;
  }
  public resetFunctionalities() {
    this._functionalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalitiesInput() {
    return this._functionalities;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_triage_at - computed: false, optional: true, required: false
  private _inTriageAt?: { [key: string]: string }; 
  public get inTriageAt() {
    return this.getStringMapAttribute('in_triage_at');
  }
  public set inTriageAt(value: { [key: string]: string }) {
    this._inTriageAt = value;
  }
  public resetInTriageAt() {
    this._inTriageAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTriageAtInput() {
    return this._inTriageAt;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mitigated_at - computed: false, optional: true, required: false
  private _mitigatedAt?: { [key: string]: string }; 
  public get mitigatedAt() {
    return this.getStringMapAttribute('mitigated_at');
  }
  public set mitigatedAt(value: { [key: string]: string }) {
    this._mitigatedAt = value;
  }
  public resetMitigatedAt() {
    this._mitigatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigatedAtInput() {
    return this._mitigatedAt;
  }

  // private - computed: true, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // resolved_at - computed: false, optional: true, required: false
  private _resolvedAt?: { [key: string]: string }; 
  public get resolvedAt() {
    return this.getStringMapAttribute('resolved_at');
  }
  public set resolvedAt(value: { [key: string]: string }) {
    this._resolvedAt = value;
  }
  public resetResolvedAt() {
    this._resolvedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedAtInput() {
    return this._resolvedAt;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: { [key: string]: string }; 
  public get startedAt() {
    return this.getStringMapAttribute('started_at');
  }
  public set startedAt(value: { [key: string]: string }) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: { [key: string]: string }; 
  public get updatedAt() {
    return this.getStringMapAttribute('updated_at');
  }
  public set updatedAt(value: { [key: string]: string }) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledged_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._acknowledgedAt),
      closed_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._closedAt),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      detected_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._detectedAt),
      environments: cdktf.stringToTerraform(this._environments),
      functionalities: cdktf.stringToTerraform(this._functionalities),
      in_triage_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._inTriageAt),
      kind: cdktf.stringToTerraform(this._kind),
      labels: cdktf.stringToTerraform(this._labels),
      mitigated_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._mitigatedAt),
      private: cdktf.booleanToTerraform(this._private),
      resolved_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._resolvedAt),
      services: cdktf.stringToTerraform(this._services),
      severity: cdktf.stringToTerraform(this._severity),
      started_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._startedAt),
      status: cdktf.stringToTerraform(this._status),
      updated_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._updatedAt),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledged_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._acknowledgedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      closed_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._closedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      detected_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._detectedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      environments: {
        value: cdktf.stringToHclTerraform(this._environments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functionalities: {
        value: cdktf.stringToHclTerraform(this._functionalities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_triage_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inTriageAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitigated_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mitigatedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resolved_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resolvedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      services: {
        value: cdktf.stringToHclTerraform(this._services),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      started_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._startedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._updatedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
