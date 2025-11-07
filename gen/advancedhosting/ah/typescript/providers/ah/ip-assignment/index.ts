// https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment#cloud_server_id IpAssignment#cloud_server_id}
  */
  readonly cloudServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment#id IpAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment#ip_address IpAssignment#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment#primary IpAssignment#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment ah_ip_assignment}
*/
export class IpAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ah_ip_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAssignment to import
  * @param importFromId The id of the existing IpAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ah_ip_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/ip_assignment ah_ip_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IpAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ah_ip_assignment',
      terraformGeneratorMetadata: {
        providerName: 'ah',
        providerVersion: '0.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudServerId = config.cloudServerId;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._primary = config.primary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_server_id - computed: false, optional: false, required: true
  private _cloudServerId?: string; 
  public get cloudServerId() {
    return this.getStringAttribute('cloud_server_id');
  }
  public set cloudServerId(value: string) {
    this._cloudServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerIdInput() {
    return this._cloudServerId;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_server_id: cdktf.stringToTerraform(this._cloudServerId),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      primary: cdktf.booleanToTerraform(this._primary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_server_id: {
        value: cdktf.stringToHclTerraform(this._cloudServerId),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.booleanToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
