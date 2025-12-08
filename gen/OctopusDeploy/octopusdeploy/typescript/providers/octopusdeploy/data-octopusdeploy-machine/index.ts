// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine#id DataOctopusdeployMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine#name DataOctopusdeployMachine#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine octopusdeploy_machine}
*/
export class DataOctopusdeployMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployMachine to import
  * @param importFromId The id of the existing DataOctopusdeployMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/machine octopusdeploy_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_machine',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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

  // endpoint_communicationstyle - computed: true, optional: false, required: false
  public get endpointCommunicationstyle() {
    return this.getStringAttribute('endpoint_communicationstyle');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_proxyid - computed: true, optional: false, required: false
  public get endpointProxyid() {
    return this.getStringAttribute('endpoint_proxyid');
  }

  // endpoint_tentacleversiondetails_upgradelocked - computed: true, optional: false, required: false
  public get endpointTentacleversiondetailsUpgradelocked() {
    return this.getStringAttribute('endpoint_tentacleversiondetails_upgradelocked');
  }

  // endpoint_tentacleversiondetails_upgraderequired - computed: true, optional: false, required: false
  public get endpointTentacleversiondetailsUpgraderequired() {
    return this.getStringAttribute('endpoint_tentacleversiondetails_upgraderequired');
  }

  // endpoint_tentacleversiondetails_upgradesuggested - computed: true, optional: false, required: false
  public get endpointTentacleversiondetailsUpgradesuggested() {
    return this.getStringAttribute('endpoint_tentacleversiondetails_upgradesuggested');
  }

  // endpoint_tentacleversiondetails_version - computed: true, optional: false, required: false
  public get endpointTentacleversiondetailsVersion() {
    return this.getStringAttribute('endpoint_tentacleversiondetails_version');
  }

  // endpoint_thumbprint - computed: true, optional: false, required: false
  public get endpointThumbprint() {
    return this.getStringAttribute('endpoint_thumbprint');
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return this.getListAttribute('environments');
  }

  // haslatestcalamari - computed: true, optional: false, required: false
  public get haslatestcalamari() {
    return this.getBooleanAttribute('haslatestcalamari');
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

  // isdisabled - computed: true, optional: false, required: false
  public get isdisabled() {
    return this.getBooleanAttribute('isdisabled');
  }

  // isinprocess - computed: true, optional: false, required: false
  public get isinprocess() {
    return this.getBooleanAttribute('isinprocess');
  }

  // machinepolicy - computed: true, optional: false, required: false
  public get machinepolicy() {
    return this.getStringAttribute('machinepolicy');
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

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // statussummary - computed: true, optional: false, required: false
  public get statussummary() {
    return this.getStringAttribute('statussummary');
  }

  // tenanteddeploymentparticipation - computed: true, optional: false, required: false
  public get tenanteddeploymentparticipation() {
    return this.getStringAttribute('tenanteddeploymentparticipation');
  }

  // tenantids - computed: true, optional: false, required: false
  public get tenantids() {
    return this.getListAttribute('tenantids');
  }

  // tenanttags - computed: true, optional: false, required: false
  public get tenanttags() {
    return this.getListAttribute('tenanttags');
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
