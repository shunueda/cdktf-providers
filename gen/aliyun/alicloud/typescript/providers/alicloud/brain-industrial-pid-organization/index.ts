// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrainIndustrialPidOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization#id BrainIndustrialPidOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization#parent_pid_organization_id BrainIndustrialPidOrganization#parent_pid_organization_id}
  */
  readonly parentPidOrganizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization#pid_organization_name BrainIndustrialPidOrganization#pid_organization_name}
  */
  readonly pidOrganizationName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization alicloud_brain_industrial_pid_organization}
*/
export class BrainIndustrialPidOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_brain_industrial_pid_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrainIndustrialPidOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrainIndustrialPidOrganization to import
  * @param importFromId The id of the existing BrainIndustrialPidOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrainIndustrialPidOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_brain_industrial_pid_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_organization alicloud_brain_industrial_pid_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrainIndustrialPidOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: BrainIndustrialPidOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_brain_industrial_pid_organization',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._parentPidOrganizationId = config.parentPidOrganizationId;
    this._pidOrganizationName = config.pidOrganizationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent_pid_organization_id - computed: false, optional: true, required: false
  private _parentPidOrganizationId?: string; 
  public get parentPidOrganizationId() {
    return this.getStringAttribute('parent_pid_organization_id');
  }
  public set parentPidOrganizationId(value: string) {
    this._parentPidOrganizationId = value;
  }
  public resetParentPidOrganizationId() {
    this._parentPidOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPidOrganizationIdInput() {
    return this._parentPidOrganizationId;
  }

  // pid_organization_name - computed: false, optional: false, required: true
  private _pidOrganizationName?: string; 
  public get pidOrganizationName() {
    return this.getStringAttribute('pid_organization_name');
  }
  public set pidOrganizationName(value: string) {
    this._pidOrganizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidOrganizationNameInput() {
    return this._pidOrganizationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent_pid_organization_id: cdktf.stringToTerraform(this._parentPidOrganizationId),
      pid_organization_name: cdktf.stringToTerraform(this._pidOrganizationName),
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
      parent_pid_organization_id: {
        value: cdktf.stringToHclTerraform(this._parentPidOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_organization_name: {
        value: cdktf.stringToHclTerraform(this._pidOrganizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
