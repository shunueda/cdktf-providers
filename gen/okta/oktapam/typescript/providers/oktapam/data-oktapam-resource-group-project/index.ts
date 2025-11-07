// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamResourceGroupProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project#id DataOktapamResourceGroupProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project#resource_group DataOktapamResourceGroupProject#resource_group}
  */
  readonly resourceGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project oktapam_resource_group_project}
*/
export class DataOktapamResourceGroupProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_resource_group_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamResourceGroupProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamResourceGroupProject to import
  * @param importFromId The id of the existing DataOktapamResourceGroupProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamResourceGroupProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_resource_group_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/resource_group_project oktapam_resource_group_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamResourceGroupProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamResourceGroupProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_resource_group_project',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
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
    this._resourceGroup = config.resourceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_discovery - computed: true, optional: false, required: false
  public get accountDiscovery() {
    return this.getBooleanAttribute('account_discovery');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // gateway_selector - computed: true, optional: false, required: false
  public get gatewaySelector() {
    return this.getStringAttribute('gateway_selector');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // ssh_certificate_type - computed: true, optional: false, required: false
  public get sshCertificateType() {
    return this.getStringAttribute('ssh_certificate_type');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
