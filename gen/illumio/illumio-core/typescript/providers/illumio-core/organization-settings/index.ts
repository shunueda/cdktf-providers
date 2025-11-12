// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum severity level of audit event messages. Allowed values are "error", "warning", and "informational" 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings#audit_event_min_severity OrganizationSettings#audit_event_min_severity}
  */
  readonly auditEventMinSeverity?: string;
  /**
  * The time in seconds an audit event is stored in the database. The value should be between 86400 and 17280000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings#audit_event_retention_seconds OrganizationSettings#audit_event_retention_seconds}
  */
  readonly auditEventRetentionSeconds?: number;
  /**
  * The log format (JSON, CEF, LEEF), which applies to all remote Syslog destinations. Allowed values are "JSON", "CEF", and "LEEF" 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings#format OrganizationSettings#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings#id OrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings illumio-core_organization_settings}
*/
export class OrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSettings to import
  * @param importFromId The id of the existing OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/organization_settings illumio-core_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditEventMinSeverity = config.auditEventMinSeverity;
    this._auditEventRetentionSeconds = config.auditEventRetentionSeconds;
    this._format = config.format;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_event_min_severity - computed: true, optional: true, required: false
  private _auditEventMinSeverity?: string; 
  public get auditEventMinSeverity() {
    return this.getStringAttribute('audit_event_min_severity');
  }
  public set auditEventMinSeverity(value: string) {
    this._auditEventMinSeverity = value;
  }
  public resetAuditEventMinSeverity() {
    this._auditEventMinSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEventMinSeverityInput() {
    return this._auditEventMinSeverity;
  }

  // audit_event_retention_seconds - computed: true, optional: true, required: false
  private _auditEventRetentionSeconds?: number; 
  public get auditEventRetentionSeconds() {
    return this.getNumberAttribute('audit_event_retention_seconds');
  }
  public set auditEventRetentionSeconds(value: number) {
    this._auditEventRetentionSeconds = value;
  }
  public resetAuditEventRetentionSeconds() {
    this._auditEventRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEventRetentionSecondsInput() {
    return this._auditEventRetentionSeconds;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_event_min_severity: cdktf.stringToTerraform(this._auditEventMinSeverity),
      audit_event_retention_seconds: cdktf.numberToTerraform(this._auditEventRetentionSeconds),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_event_min_severity: {
        value: cdktf.stringToHclTerraform(this._auditEventMinSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_event_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._auditEventRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
