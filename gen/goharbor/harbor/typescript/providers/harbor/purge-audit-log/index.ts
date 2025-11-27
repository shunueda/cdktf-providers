// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PurgeAuditLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#audit_retention_hour PurgeAuditLog#audit_retention_hour}
  */
  readonly auditRetentionHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#id PurgeAuditLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#include_event_types PurgeAuditLog#include_event_types}
  */
  readonly includeEventTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#include_operations PurgeAuditLog#include_operations}
  */
  readonly includeOperations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#schedule PurgeAuditLog#schedule}
  */
  readonly schedule: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log harbor_purge_audit_log}
*/
export class PurgeAuditLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_purge_audit_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PurgeAuditLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PurgeAuditLog to import
  * @param importFromId The id of the existing PurgeAuditLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PurgeAuditLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_purge_audit_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/purge_audit_log harbor_purge_audit_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PurgeAuditLogConfig
  */
  public constructor(scope: Construct, id: string, config: PurgeAuditLogConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_purge_audit_log',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditRetentionHour = config.auditRetentionHour;
    this._id = config.id;
    this._includeEventTypes = config.includeEventTypes;
    this._includeOperations = config.includeOperations;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_retention_hour - computed: false, optional: false, required: true
  private _auditRetentionHour?: number; 
  public get auditRetentionHour() {
    return this.getNumberAttribute('audit_retention_hour');
  }
  public set auditRetentionHour(value: number) {
    this._auditRetentionHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditRetentionHourInput() {
    return this._auditRetentionHour;
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

  // include_event_types - computed: false, optional: true, required: false
  private _includeEventTypes?: string; 
  public get includeEventTypes() {
    return this.getStringAttribute('include_event_types');
  }
  public set includeEventTypes(value: string) {
    this._includeEventTypes = value;
  }
  public resetIncludeEventTypes() {
    this._includeEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEventTypesInput() {
    return this._includeEventTypes;
  }

  // include_operations - computed: false, optional: true, required: false
  private _includeOperations?: string; 
  public get includeOperations() {
    return this.getStringAttribute('include_operations');
  }
  public set includeOperations(value: string) {
    this._includeOperations = value;
  }
  public resetIncludeOperations() {
    this._includeOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOperationsInput() {
    return this._includeOperations;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_retention_hour: cdktf.numberToTerraform(this._auditRetentionHour),
      id: cdktf.stringToTerraform(this._id),
      include_event_types: cdktf.stringToTerraform(this._includeEventTypes),
      include_operations: cdktf.stringToTerraform(this._includeOperations),
      schedule: cdktf.stringToTerraform(this._schedule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_retention_hour: {
        value: cdktf.numberToHclTerraform(this._auditRetentionHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_event_types: {
        value: cdktf.stringToHclTerraform(this._includeEventTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_operations: {
        value: cdktf.stringToHclTerraform(this._includeOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
