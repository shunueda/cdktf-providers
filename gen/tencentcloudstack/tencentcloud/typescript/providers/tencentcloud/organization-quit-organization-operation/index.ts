// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationQuitOrganizationOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation#id OrganizationQuitOrganizationOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation#org_id OrganizationQuitOrganizationOperation#org_id}
  */
  readonly orgId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation tencentcloud_organization_quit_organization_operation}
*/
export class OrganizationQuitOrganizationOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_quit_organization_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationQuitOrganizationOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationQuitOrganizationOperation to import
  * @param importFromId The id of the existing OrganizationQuitOrganizationOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationQuitOrganizationOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_quit_organization_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/organization_quit_organization_operation tencentcloud_organization_quit_organization_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationQuitOrganizationOperationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationQuitOrganizationOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_quit_organization_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._orgId = config.orgId;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.numberToTerraform(this._orgId),
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
      org_id: {
        value: cdktf.numberToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
