// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClonedVappConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, it will delete the source (vApp or template) after creating the new vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#delete_source ClonedVapp#delete_source}
  */
  readonly deleteSource?: boolean | cdktf.IResolvable;
  /**
  * Optional description of the vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#description ClonedVapp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#id ClonedVapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name for the vApp, unique withing the VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#name ClonedVapp#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#org ClonedVapp#org}
  */
  readonly org?: string;
  /**
  * A boolean value stating if this vApp should be powered on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#power_on ClonedVapp#power_on}
  */
  readonly powerOn?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the source to use for the creation of this vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#source_id ClonedVapp#source_id}
  */
  readonly sourceId: string;
  /**
  * The type of the source to use for the creation of this vApp (one of 'vapp' or 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#source_type ClonedVapp#source_type}
  */
  readonly sourceType: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#vdc ClonedVapp#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp vcd_cloned_vapp}
*/
export class ClonedVapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_cloned_vapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClonedVapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClonedVapp to import
  * @param importFromId The id of the existing ClonedVapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClonedVapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_cloned_vapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/cloned_vapp vcd_cloned_vapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClonedVappConfig
  */
  public constructor(scope: Construct, id: string, config: ClonedVappConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_cloned_vapp',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteSource = config.deleteSource;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._powerOn = config.powerOn;
    this._sourceId = config.sourceId;
    this._sourceType = config.sourceType;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_source - computed: false, optional: true, required: false
  private _deleteSource?: boolean | cdktf.IResolvable; 
  public get deleteSource() {
    return this.getBooleanAttribute('delete_source');
  }
  public set deleteSource(value: boolean | cdktf.IResolvable) {
    this._deleteSource = value;
  }
  public resetDeleteSource() {
    this._deleteSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSourceInput() {
    return this._deleteSource;
  }

  // description - computed: false, optional: true, required: false
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // power_on - computed: false, optional: true, required: false
  private _powerOn?: boolean | cdktf.IResolvable; 
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }
  public set powerOn(value: boolean | cdktf.IResolvable) {
    this._powerOn = value;
  }
  public resetPowerOn() {
    this._powerOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnInput() {
    return this._powerOn;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_text - computed: true, optional: false, required: false
  public get statusText() {
    return this.getStringAttribute('status_text');
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vm_list - computed: true, optional: false, required: false
  public get vmList() {
    return this.getListAttribute('vm_list');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_source: cdktf.booleanToTerraform(this._deleteSource),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      power_on: cdktf.booleanToTerraform(this._powerOn),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_source: {
        value: cdktf.booleanToHclTerraform(this._deleteSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_on: {
        value: cdktf.booleanToHclTerraform(this._powerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
