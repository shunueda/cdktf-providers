// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciMaintenancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#admin_st DataAciMaintenancePolicy#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#annotation DataAciMaintenancePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#description DataAciMaintenancePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#graceful DataAciMaintenancePolicy#graceful}
  */
  readonly graceful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#id DataAciMaintenancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#ignore_compat DataAciMaintenancePolicy#ignore_compat}
  */
  readonly ignoreCompat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#internal_label DataAciMaintenancePolicy#internal_label}
  */
  readonly internalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#name DataAciMaintenancePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#name_alias DataAciMaintenancePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#notif_cond DataAciMaintenancePolicy#notif_cond}
  */
  readonly notifCond?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#run_mode DataAciMaintenancePolicy#run_mode}
  */
  readonly runMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#version DataAciMaintenancePolicy#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#version_check_override DataAciMaintenancePolicy#version_check_override}
  */
  readonly versionCheckOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy aci_maintenance_policy}
*/
export class DataAciMaintenancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_maintenance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciMaintenancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciMaintenancePolicy to import
  * @param importFromId The id of the existing DataAciMaintenancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciMaintenancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_maintenance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/maintenance_policy aci_maintenance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciMaintenancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciMaintenancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_maintenance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._graceful = config.graceful;
    this._id = config.id;
    this._ignoreCompat = config.ignoreCompat;
    this._internalLabel = config.internalLabel;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._notifCond = config.notifCond;
    this._runMode = config.runMode;
    this._version = config.version;
    this._versionCheckOverride = config.versionCheckOverride;
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

  // graceful - computed: true, optional: true, required: false
  private _graceful?: string; 
  public get graceful() {
    return this.getStringAttribute('graceful');
  }
  public set graceful(value: string) {
    this._graceful = value;
  }
  public resetGraceful() {
    this._graceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulInput() {
    return this._graceful;
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

  // ignore_compat - computed: true, optional: true, required: false
  private _ignoreCompat?: string; 
  public get ignoreCompat() {
    return this.getStringAttribute('ignore_compat');
  }
  public set ignoreCompat(value: string) {
    this._ignoreCompat = value;
  }
  public resetIgnoreCompat() {
    this._ignoreCompat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCompatInput() {
    return this._ignoreCompat;
  }

  // internal_label - computed: true, optional: true, required: false
  private _internalLabel?: string; 
  public get internalLabel() {
    return this.getStringAttribute('internal_label');
  }
  public set internalLabel(value: string) {
    this._internalLabel = value;
  }
  public resetInternalLabel() {
    this._internalLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLabelInput() {
    return this._internalLabel;
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

  // notif_cond - computed: true, optional: true, required: false
  private _notifCond?: string; 
  public get notifCond() {
    return this.getStringAttribute('notif_cond');
  }
  public set notifCond(value: string) {
    this._notifCond = value;
  }
  public resetNotifCond() {
    this._notifCond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifCondInput() {
    return this._notifCond;
  }

  // run_mode - computed: true, optional: true, required: false
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_check_override - computed: true, optional: true, required: false
  private _versionCheckOverride?: string; 
  public get versionCheckOverride() {
    return this.getStringAttribute('version_check_override');
  }
  public set versionCheckOverride(value: string) {
    this._versionCheckOverride = value;
  }
  public resetVersionCheckOverride() {
    this._versionCheckOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCheckOverrideInput() {
    return this._versionCheckOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      graceful: cdktf.stringToTerraform(this._graceful),
      id: cdktf.stringToTerraform(this._id),
      ignore_compat: cdktf.stringToTerraform(this._ignoreCompat),
      internal_label: cdktf.stringToTerraform(this._internalLabel),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      notif_cond: cdktf.stringToTerraform(this._notifCond),
      run_mode: cdktf.stringToTerraform(this._runMode),
      version: cdktf.stringToTerraform(this._version),
      version_check_override: cdktf.stringToTerraform(this._versionCheckOverride),
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
      graceful: {
        value: cdktf.stringToHclTerraform(this._graceful),
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
      ignore_compat: {
        value: cdktf.stringToHclTerraform(this._ignoreCompat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_label: {
        value: cdktf.stringToHclTerraform(this._internalLabel),
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
      notif_cond: {
        value: cdktf.stringToHclTerraform(this._notifCond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_mode: {
        value: cdktf.stringToHclTerraform(this._runMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_check_override: {
        value: cdktf.stringToHclTerraform(this._versionCheckOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
