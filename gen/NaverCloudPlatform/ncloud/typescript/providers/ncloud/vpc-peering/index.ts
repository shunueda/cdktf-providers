// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#description VpcPeering#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#name VpcPeering#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#source_vpc_no VpcPeering#source_vpc_no}
  */
  readonly sourceVpcNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#target_vpc_login_id VpcPeering#target_vpc_login_id}
  */
  readonly targetVpcLoginId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#target_vpc_name VpcPeering#target_vpc_name}
  */
  readonly targetVpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#target_vpc_no VpcPeering#target_vpc_no}
  */
  readonly targetVpcNo: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering ncloud_vpc_peering}
*/
export class VpcPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeering to import
  * @param importFromId The id of the existing VpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/vpc_peering ncloud_vpc_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_vpc_peering',
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
    this._name = config.name;
    this._sourceVpcNo = config.sourceVpcNo;
    this._targetVpcLoginId = config.targetVpcLoginId;
    this._targetVpcName = config.targetVpcName;
    this._targetVpcNo = config.targetVpcNo;
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

  // has_reverse_vpc_peering - computed: true, optional: false, required: false
  public get hasReverseVpcPeering() {
    return this.getBooleanAttribute('has_reverse_vpc_peering');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_between_accounts - computed: true, optional: false, required: false
  public get isBetweenAccounts() {
    return this.getBooleanAttribute('is_between_accounts');
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

  // source_vpc_no - computed: false, optional: false, required: true
  private _sourceVpcNo?: string; 
  public get sourceVpcNo() {
    return this.getStringAttribute('source_vpc_no');
  }
  public set sourceVpcNo(value: string) {
    this._sourceVpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcNoInput() {
    return this._sourceVpcNo;
  }

  // target_vpc_login_id - computed: true, optional: true, required: false
  private _targetVpcLoginId?: string; 
  public get targetVpcLoginId() {
    return this.getStringAttribute('target_vpc_login_id');
  }
  public set targetVpcLoginId(value: string) {
    this._targetVpcLoginId = value;
  }
  public resetTargetVpcLoginId() {
    this._targetVpcLoginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcLoginIdInput() {
    return this._targetVpcLoginId;
  }

  // target_vpc_name - computed: true, optional: true, required: false
  private _targetVpcName?: string; 
  public get targetVpcName() {
    return this.getStringAttribute('target_vpc_name');
  }
  public set targetVpcName(value: string) {
    this._targetVpcName = value;
  }
  public resetTargetVpcName() {
    this._targetVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcNameInput() {
    return this._targetVpcName;
  }

  // target_vpc_no - computed: false, optional: false, required: true
  private _targetVpcNo?: string; 
  public get targetVpcNo() {
    return this.getStringAttribute('target_vpc_no');
  }
  public set targetVpcNo(value: string) {
    this._targetVpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcNoInput() {
    return this._targetVpcNo;
  }

  // vpc_peering_no - computed: true, optional: false, required: false
  public get vpcPeeringNo() {
    return this.getStringAttribute('vpc_peering_no');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      source_vpc_no: cdktf.stringToTerraform(this._sourceVpcNo),
      target_vpc_login_id: cdktf.stringToTerraform(this._targetVpcLoginId),
      target_vpc_name: cdktf.stringToTerraform(this._targetVpcName),
      target_vpc_no: cdktf.stringToTerraform(this._targetVpcNo),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vpc_no: {
        value: cdktf.stringToHclTerraform(this._sourceVpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpc_login_id: {
        value: cdktf.stringToHclTerraform(this._targetVpcLoginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpc_name: {
        value: cdktf.stringToHclTerraform(this._targetVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpc_no: {
        value: cdktf.stringToHclTerraform(this._targetVpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
