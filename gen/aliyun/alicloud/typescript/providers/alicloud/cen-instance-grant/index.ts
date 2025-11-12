// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenInstanceGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant#cen_id CenInstanceGrant#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant#cen_owner_id CenInstanceGrant#cen_owner_id}
  */
  readonly cenOwnerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant#child_instance_id CenInstanceGrant#child_instance_id}
  */
  readonly childInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant#id CenInstanceGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant alicloud_cen_instance_grant}
*/
export class CenInstanceGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_instance_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenInstanceGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenInstanceGrant to import
  * @param importFromId The id of the existing CenInstanceGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenInstanceGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_instance_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_instance_grant alicloud_cen_instance_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenInstanceGrantConfig
  */
  public constructor(scope: Construct, id: string, config: CenInstanceGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_instance_grant',
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
    this._cenId = config.cenId;
    this._cenOwnerId = config.cenOwnerId;
    this._childInstanceId = config.childInstanceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // cen_owner_id - computed: false, optional: false, required: true
  private _cenOwnerId?: string; 
  public get cenOwnerId() {
    return this.getStringAttribute('cen_owner_id');
  }
  public set cenOwnerId(value: string) {
    this._cenOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenOwnerIdInput() {
    return this._cenOwnerId;
  }

  // child_instance_id - computed: false, optional: false, required: true
  private _childInstanceId?: string; 
  public get childInstanceId() {
    return this.getStringAttribute('child_instance_id');
  }
  public set childInstanceId(value: string) {
    this._childInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceIdInput() {
    return this._childInstanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      cen_owner_id: cdktf.stringToTerraform(this._cenOwnerId),
      child_instance_id: cdktf.stringToTerraform(this._childInstanceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_owner_id: {
        value: cdktf.stringToHclTerraform(this._cenOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
