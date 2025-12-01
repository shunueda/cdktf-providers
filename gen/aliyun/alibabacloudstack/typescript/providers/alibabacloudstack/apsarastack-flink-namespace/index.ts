// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackFlinkNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#cpu_type ApsarastackFlinkNamespace#cpu_type}
  */
  readonly cpuType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#cu ApsarastackFlinkNamespace#cu}
  */
  readonly cu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#id ApsarastackFlinkNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#name ApsarastackFlinkNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#owner_uid ApsarastackFlinkNamespace#owner_uid}
  */
  readonly ownerUid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace apsarastack_flink_namespace}
*/
export class ApsarastackFlinkNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_flink_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackFlinkNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackFlinkNamespace to import
  * @param importFromId The id of the existing ApsarastackFlinkNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackFlinkNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_flink_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_flink_namespace apsarastack_flink_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackFlinkNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackFlinkNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_flink_namespace',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuType = config.cpuType;
    this._cu = config.cu;
    this._id = config.id;
    this._name = config.name;
    this._ownerUid = config.ownerUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_type - computed: false, optional: false, required: true
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // cu - computed: false, optional: false, required: true
  private _cu?: number; 
  public get cu() {
    return this.getNumberAttribute('cu');
  }
  public set cu(value: number) {
    this._cu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cuInput() {
    return this._cu;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_uid - computed: false, optional: true, required: false
  private _ownerUid?: string; 
  public get ownerUid() {
    return this.getStringAttribute('owner_uid');
  }
  public set ownerUid(value: string) {
    this._ownerUid = value;
  }
  public resetOwnerUid() {
    this._ownerUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      cu: cdktf.numberToTerraform(this._cu),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_uid: cdktf.stringToTerraform(this._ownerUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cu: {
        value: cdktf.numberToHclTerraform(this._cu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      owner_uid: {
        value: cdktf.stringToHclTerraform(this._ownerUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
