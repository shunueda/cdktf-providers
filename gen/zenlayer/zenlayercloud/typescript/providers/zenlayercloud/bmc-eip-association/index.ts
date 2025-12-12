// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmcEipAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association#eip_id BmcEipAssociation#eip_id}
  */
  readonly eipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association#id BmcEipAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance id going to bind with the EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association#instance_id BmcEipAssociation#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association zenlayercloud_bmc_eip_association}
*/
export class BmcEipAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_eip_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmcEipAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmcEipAssociation to import
  * @param importFromId The id of the existing BmcEipAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmcEipAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_eip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/bmc_eip_association zenlayercloud_bmc_eip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmcEipAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: BmcEipAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_eip_association',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.17',
        providerVersionConstraint: '0.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipId = config.eipId;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eip_id - computed: false, optional: false, required: true
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
