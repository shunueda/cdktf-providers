// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdsAuditLogPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the audit scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#audit_scope DdsAuditLogPolicy#audit_scope}
  */
  readonly auditScope?: string;
  /**
  * Specifies the audit type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#audit_types DdsAuditLogPolicy#audit_types}
  */
  readonly auditTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#id DdsAuditLogPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the ID of the DDS instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#instance_id DdsAuditLogPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Specifies the number of days for storing audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#keep_days DdsAuditLogPolicy#keep_days}
  */
  readonly keepDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#region DdsAuditLogPolicy#region}
  */
  readonly region?: string;
  /**
  * Specifies whether the historical audit logs are retained when SQL audit is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#reserve_auditlogs DdsAuditLogPolicy#reserve_auditlogs}
  */
  readonly reserveAuditlogs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy flexibleengine_dds_audit_log_policy}
*/
export class DdsAuditLogPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_dds_audit_log_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdsAuditLogPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdsAuditLogPolicy to import
  * @param importFromId The id of the existing DdsAuditLogPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdsAuditLogPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_dds_audit_log_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dds_audit_log_policy flexibleengine_dds_audit_log_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdsAuditLogPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdsAuditLogPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_dds_audit_log_policy',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditScope = config.auditScope;
    this._auditTypes = config.auditTypes;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._keepDays = config.keepDays;
    this._region = config.region;
    this._reserveAuditlogs = config.reserveAuditlogs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_scope - computed: true, optional: true, required: false
  private _auditScope?: string; 
  public get auditScope() {
    return this.getStringAttribute('audit_scope');
  }
  public set auditScope(value: string) {
    this._auditScope = value;
  }
  public resetAuditScope() {
    this._auditScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditScopeInput() {
    return this._auditScope;
  }

  // audit_types - computed: true, optional: true, required: false
  private _auditTypes?: string[]; 
  public get auditTypes() {
    return this.getListAttribute('audit_types');
  }
  public set auditTypes(value: string[]) {
    this._auditTypes = value;
  }
  public resetAuditTypes() {
    this._auditTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditTypesInput() {
    return this._auditTypes;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // keep_days - computed: false, optional: false, required: true
  private _keepDays?: number; 
  public get keepDays() {
    return this.getNumberAttribute('keep_days');
  }
  public set keepDays(value: number) {
    this._keepDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDaysInput() {
    return this._keepDays;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserve_auditlogs - computed: true, optional: true, required: false
  private _reserveAuditlogs?: string; 
  public get reserveAuditlogs() {
    return this.getStringAttribute('reserve_auditlogs');
  }
  public set reserveAuditlogs(value: string) {
    this._reserveAuditlogs = value;
  }
  public resetReserveAuditlogs() {
    this._reserveAuditlogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveAuditlogsInput() {
    return this._reserveAuditlogs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_scope: cdktf.stringToTerraform(this._auditScope),
      audit_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditTypes),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      keep_days: cdktf.numberToTerraform(this._keepDays),
      region: cdktf.stringToTerraform(this._region),
      reserve_auditlogs: cdktf.stringToTerraform(this._reserveAuditlogs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_scope: {
        value: cdktf.stringToHclTerraform(this._auditScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditTypes),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_days: {
        value: cdktf.numberToHclTerraform(this._keepDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_auditlogs: {
        value: cdktf.stringToHclTerraform(this._reserveAuditlogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
