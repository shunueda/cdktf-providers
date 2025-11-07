// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnatEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#id SnatEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#snat_ip SnatEntry#snat_ip}
  */
  readonly snatIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#snat_table_id SnatEntry#snat_table_id}
  */
  readonly snatTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#source_cidr SnatEntry#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#source_vswitch_id SnatEntry#source_vswitch_id}
  */
  readonly sourceVswitchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry alibabacloudstack_snat_entry}
*/
export class SnatEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_snat_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnatEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnatEntry to import
  * @param importFromId The id of the existing SnatEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnatEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_snat_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/snat_entry alibabacloudstack_snat_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnatEntryConfig
  */
  public constructor(scope: Construct, id: string, config: SnatEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_snat_entry',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._snatIp = config.snatIp;
    this._snatTableId = config.snatTableId;
    this._sourceCidr = config.sourceCidr;
    this._sourceVswitchId = config.sourceVswitchId;
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

  // snat_entry_id - computed: true, optional: false, required: false
  public get snatEntryId() {
    return this.getStringAttribute('snat_entry_id');
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

  // snat_table_id - computed: false, optional: false, required: true
  private _snatTableId?: string; 
  public get snatTableId() {
    return this.getStringAttribute('snat_table_id');
  }
  public set snatTableId(value: string) {
    this._snatTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatTableIdInput() {
    return this._snatTableId;
  }

  // source_cidr - computed: true, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_vswitch_id - computed: true, optional: true, required: false
  private _sourceVswitchId?: string; 
  public get sourceVswitchId() {
    return this.getStringAttribute('source_vswitch_id');
  }
  public set sourceVswitchId(value: string) {
    this._sourceVswitchId = value;
  }
  public resetSourceVswitchId() {
    this._sourceVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVswitchIdInput() {
    return this._sourceVswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      snat_ip: cdktf.stringToTerraform(this._snatIp),
      snat_table_id: cdktf.stringToTerraform(this._snatTableId),
      source_cidr: cdktf.stringToTerraform(this._sourceCidr),
      source_vswitch_id: cdktf.stringToTerraform(this._sourceVswitchId),
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
      snat_ip: {
        value: cdktf.stringToHclTerraform(this._snatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_table_id: {
        value: cdktf.stringToHclTerraform(this._snatTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr: {
        value: cdktf.stringToHclTerraform(this._sourceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._sourceVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
