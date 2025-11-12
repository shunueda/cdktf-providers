// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdynamicscloudConnectionAwsRoleAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Connection ID of the AWS Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment#connection_id AppdynamicscloudConnectionAwsRoleAttachment#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment#id AppdynamicscloudConnectionAwsRoleAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Role name for AWS iam role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment#role_name AppdynamicscloudConnectionAwsRoleAttachment#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment appdynamicscloud_connection_aws_role_attachment}
*/
export class AppdynamicscloudConnectionAwsRoleAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appdynamicscloud_connection_aws_role_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdynamicscloudConnectionAwsRoleAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdynamicscloudConnectionAwsRoleAttachment to import
  * @param importFromId The id of the existing AppdynamicscloudConnectionAwsRoleAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdynamicscloudConnectionAwsRoleAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appdynamicscloud_connection_aws_role_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws_role_attachment appdynamicscloud_connection_aws_role_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdynamicscloudConnectionAwsRoleAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppdynamicscloudConnectionAwsRoleAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'appdynamicscloud_connection_aws_role_attachment',
      terraformGeneratorMetadata: {
        providerName: 'appd',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
