// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagSnatEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry#cidr_block SagSnatEntry#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry#id SagSnatEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry#sag_id SagSnatEntry#sag_id}
  */
  readonly sagId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry#snat_ip SagSnatEntry#snat_ip}
  */
  readonly snatIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry alicloud_sag_snat_entry}
*/
export class SagSnatEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sag_snat_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagSnatEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagSnatEntry to import
  * @param importFromId The id of the existing SagSnatEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagSnatEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sag_snat_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sag_snat_entry alicloud_sag_snat_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagSnatEntryConfig
  */
  public constructor(scope: Construct, id: string, config: SagSnatEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sag_snat_entry',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._id = config.id;
    this._sagId = config.sagId;
    this._snatIp = config.snatIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // sag_id - computed: false, optional: false, required: true
  private _sagId?: string; 
  public get sagId() {
    return this.getStringAttribute('sag_id');
  }
  public set sagId(value: string) {
    this._sagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sagIdInput() {
    return this._sagId;
  }

  // snat_ip - computed: false, optional: false, required: true
  private _snatIp?: string; 
  public get snatIp() {
    return this.getStringAttribute('snat_ip');
  }
  public set snatIp(value: string) {
    this._snatIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpInput() {
    return this._snatIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      id: cdktf.stringToTerraform(this._id),
      sag_id: cdktf.stringToTerraform(this._sagId),
      snat_ip: cdktf.stringToTerraform(this._snatIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
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
      sag_id: {
        value: cdktf.stringToHclTerraform(this._sagId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_ip: {
        value: cdktf.stringToHclTerraform(this._snatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
