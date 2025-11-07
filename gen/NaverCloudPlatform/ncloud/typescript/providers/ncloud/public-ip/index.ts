// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip#description PublicIp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip#id PublicIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip#internet_line_type PublicIp#internet_line_type}
  */
  readonly internetLineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip#server_instance_no PublicIp#server_instance_no}
  */
  readonly serverInstanceNo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip ncloud_public_ip}
*/
export class PublicIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicIp to import
  * @param importFromId The id of the existing PublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/public_ip ncloud_public_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PublicIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._internetLineType = config.internetLineType;
    this._serverInstanceNo = config.serverInstanceNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_no - computed: true, optional: false, required: false
  public get instanceNo() {
    return this.getStringAttribute('instance_no');
  }

  // internet_line_type - computed: true, optional: true, required: false
  private _internetLineType?: string; 
  public get internetLineType() {
    return this.getStringAttribute('internet_line_type');
  }
  public set internetLineType(value: string) {
    this._internetLineType = value;
  }
  public resetInternetLineType() {
    this._internetLineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetLineTypeInput() {
    return this._internetLineType;
  }

  // kind_type - computed: true, optional: false, required: false
  public get kindType() {
    return this.getStringAttribute('kind_type');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ip_no - computed: true, optional: false, required: false
  public get publicIpNo() {
    return this.getStringAttribute('public_ip_no');
  }

  // server_instance_no - computed: false, optional: true, required: false
  private _serverInstanceNo?: string; 
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }
  public set serverInstanceNo(value: string) {
    this._serverInstanceNo = value;
  }
  public resetServerInstanceNo() {
    this._serverInstanceNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNoInput() {
    return this._serverInstanceNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      internet_line_type: cdktf.stringToTerraform(this._internetLineType),
      server_instance_no: cdktf.stringToTerraform(this._serverInstanceNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      internet_line_type: {
        value: cdktf.stringToHclTerraform(this._internetLineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_no: {
        value: cdktf.stringToHclTerraform(this._serverInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
