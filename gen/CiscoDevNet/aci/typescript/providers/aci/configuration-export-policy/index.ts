// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationExportPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#admin_st ConfigurationExportPolicy#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#annotation ConfigurationExportPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#description ConfigurationExportPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#format ConfigurationExportPolicy#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#id ConfigurationExportPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#include_secure_fields ConfigurationExportPolicy#include_secure_fields}
  */
  readonly includeSecureFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#max_snapshot_count ConfigurationExportPolicy#max_snapshot_count}
  */
  readonly maxSnapshotCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#name ConfigurationExportPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#name_alias ConfigurationExportPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#relation_config_rs_export_destination ConfigurationExportPolicy#relation_config_rs_export_destination}
  */
  readonly relationConfigRsExportDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#relation_config_rs_export_scheduler ConfigurationExportPolicy#relation_config_rs_export_scheduler}
  */
  readonly relationConfigRsExportScheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#relation_config_rs_remote_path ConfigurationExportPolicy#relation_config_rs_remote_path}
  */
  readonly relationConfigRsRemotePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#relation_trig_rs_triggerable ConfigurationExportPolicy#relation_trig_rs_triggerable}
  */
  readonly relationTrigRsTriggerable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#snapshot ConfigurationExportPolicy#snapshot}
  */
  readonly snapshot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#target_dn ConfigurationExportPolicy#target_dn}
  */
  readonly targetDn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy aci_configuration_export_policy}
*/
export class ConfigurationExportPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_configuration_export_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationExportPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationExportPolicy to import
  * @param importFromId The id of the existing ConfigurationExportPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationExportPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_configuration_export_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_export_policy aci_configuration_export_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationExportPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationExportPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_configuration_export_policy',
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
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._includeSecureFields = config.includeSecureFields;
    this._maxSnapshotCount = config.maxSnapshotCount;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationConfigRsExportDestination = config.relationConfigRsExportDestination;
    this._relationConfigRsExportScheduler = config.relationConfigRsExportScheduler;
    this._relationConfigRsRemotePath = config.relationConfigRsRemotePath;
    this._relationTrigRsTriggerable = config.relationTrigRsTriggerable;
    this._snapshot = config.snapshot;
    this._targetDn = config.targetDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
  }

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

  // include_secure_fields - computed: true, optional: true, required: false
  private _includeSecureFields?: string; 
  public get includeSecureFields() {
    return this.getStringAttribute('include_secure_fields');
  }
  public set includeSecureFields(value: string) {
    this._includeSecureFields = value;
  }
  public resetIncludeSecureFields() {
    this._includeSecureFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSecureFieldsInput() {
    return this._includeSecureFields;
  }

  // max_snapshot_count - computed: true, optional: true, required: false
  private _maxSnapshotCount?: string; 
  public get maxSnapshotCount() {
    return this.getStringAttribute('max_snapshot_count');
  }
  public set maxSnapshotCount(value: string) {
    this._maxSnapshotCount = value;
  }
  public resetMaxSnapshotCount() {
    this._maxSnapshotCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotCountInput() {
    return this._maxSnapshotCount;
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

  // relation_config_rs_export_destination - computed: false, optional: true, required: false
  private _relationConfigRsExportDestination?: string; 
  public get relationConfigRsExportDestination() {
    return this.getStringAttribute('relation_config_rs_export_destination');
  }
  public set relationConfigRsExportDestination(value: string) {
    this._relationConfigRsExportDestination = value;
  }
  public resetRelationConfigRsExportDestination() {
    this._relationConfigRsExportDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationConfigRsExportDestinationInput() {
    return this._relationConfigRsExportDestination;
  }

  // relation_config_rs_export_scheduler - computed: false, optional: true, required: false
  private _relationConfigRsExportScheduler?: string; 
  public get relationConfigRsExportScheduler() {
    return this.getStringAttribute('relation_config_rs_export_scheduler');
  }
  public set relationConfigRsExportScheduler(value: string) {
    this._relationConfigRsExportScheduler = value;
  }
  public resetRelationConfigRsExportScheduler() {
    this._relationConfigRsExportScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationConfigRsExportSchedulerInput() {
    return this._relationConfigRsExportScheduler;
  }

  // relation_config_rs_remote_path - computed: false, optional: true, required: false
  private _relationConfigRsRemotePath?: string; 
  public get relationConfigRsRemotePath() {
    return this.getStringAttribute('relation_config_rs_remote_path');
  }
  public set relationConfigRsRemotePath(value: string) {
    this._relationConfigRsRemotePath = value;
  }
  public resetRelationConfigRsRemotePath() {
    this._relationConfigRsRemotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationConfigRsRemotePathInput() {
    return this._relationConfigRsRemotePath;
  }

  // relation_trig_rs_triggerable - computed: false, optional: true, required: false
  private _relationTrigRsTriggerable?: string; 
  public get relationTrigRsTriggerable() {
    return this.getStringAttribute('relation_trig_rs_triggerable');
  }
  public set relationTrigRsTriggerable(value: string) {
    this._relationTrigRsTriggerable = value;
  }
  public resetRelationTrigRsTriggerable() {
    this._relationTrigRsTriggerable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTrigRsTriggerableInput() {
    return this._relationTrigRsTriggerable;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      include_secure_fields: cdktf.stringToTerraform(this._includeSecureFields),
      max_snapshot_count: cdktf.stringToTerraform(this._maxSnapshotCount),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_config_rs_export_destination: cdktf.stringToTerraform(this._relationConfigRsExportDestination),
      relation_config_rs_export_scheduler: cdktf.stringToTerraform(this._relationConfigRsExportScheduler),
      relation_config_rs_remote_path: cdktf.stringToTerraform(this._relationConfigRsRemotePath),
      relation_trig_rs_triggerable: cdktf.stringToTerraform(this._relationTrigRsTriggerable),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      target_dn: cdktf.stringToTerraform(this._targetDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      include_secure_fields: {
        value: cdktf.stringToHclTerraform(this._includeSecureFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_snapshot_count: {
        value: cdktf.stringToHclTerraform(this._maxSnapshotCount),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_config_rs_export_destination: {
        value: cdktf.stringToHclTerraform(this._relationConfigRsExportDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_config_rs_export_scheduler: {
        value: cdktf.stringToHclTerraform(this._relationConfigRsExportScheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_config_rs_remote_path: {
        value: cdktf.stringToHclTerraform(this._relationConfigRsRemotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_trig_rs_triggerable: {
        value: cdktf.stringToHclTerraform(this._relationTrigRsTriggerable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
