// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxMpsgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup#id DataNetscalersdxMpsgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group Name. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup#name DataNetscalersdxMpsgroup#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup netscalersdx_mpsgroup}
*/
export class DataNetscalersdxMpsgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mpsgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxMpsgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxMpsgroup to import
  * @param importFromId The id of the existing DataNetscalersdxMpsgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxMpsgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mpsgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mpsgroup netscalersdx_mpsgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxMpsgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxMpsgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mpsgroup',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_application_only - computed: true, optional: false, required: false
  public get allowApplicationOnly() {
    return this.getBooleanAttribute('allow_application_only');
  }

  // application_names - computed: true, optional: false, required: false
  public get applicationNames() {
    return cdktf.Fn.tolist(this.getListAttribute('application_names'));
  }

  // apply_all_bound_entities - computed: true, optional: false, required: false
  public get applyAllBoundEntities() {
    return this.getBooleanAttribute('apply_all_bound_entities');
  }

  // assign_all_apps - computed: true, optional: false, required: false
  public get assignAllApps() {
    return this.getBooleanAttribute('assign_all_apps');
  }

  // assign_all_autoscale_groups - computed: true, optional: false, required: false
  public get assignAllAutoscaleGroups() {
    return this.getBooleanAttribute('assign_all_autoscale_groups');
  }

  // assign_all_devices - computed: true, optional: false, required: false
  public get assignAllDevices() {
    return this.getBooleanAttribute('assign_all_devices');
  }

  // assign_all_selected_device_apps - computed: true, optional: false, required: false
  public get assignAllSelectedDeviceApps() {
    return this.getBooleanAttribute('assign_all_selected_device_apps');
  }

  // autoscale_groups_id - computed: true, optional: false, required: false
  public get autoscaleGroupsId() {
    return cdktf.Fn.tolist(this.getListAttribute('autoscale_groups_id'));
  }

  // bound_entity_selected - computed: true, optional: false, required: false
  public get boundEntitySelected() {
    return this.getNumberAttribute('bound_entity_selected');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_session_timeout - computed: true, optional: false, required: false
  public get enableSessionTimeout() {
    return this.getBooleanAttribute('enable_session_timeout');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // select_individual_entity - computed: true, optional: false, required: false
  public get selectIndividualEntity() {
    return this.getBooleanAttribute('select_individual_entity');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // session_timeout_unit - computed: true, optional: false, required: false
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }

  // standalone_instances_id - computed: true, optional: false, required: false
  public get standaloneInstancesId() {
    return cdktf.Fn.tolist(this.getListAttribute('standalone_instances_id'));
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
