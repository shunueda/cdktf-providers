// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HologramInstanceBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#data_keep_quantity HologramInstanceBackupPolicy#data_keep_quantity}
  */
  readonly dataKeepQuantity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#enabled HologramInstanceBackupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#hour HologramInstanceBackupPolicy#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#id HologramInstanceBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#instance_id HologramInstanceBackupPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#week HologramInstanceBackupPolicy#week}
  */
  readonly week: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy alibabacloudstack_hologram_instance_backup_policy}
*/
export class HologramInstanceBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_hologram_instance_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HologramInstanceBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HologramInstanceBackupPolicy to import
  * @param importFromId The id of the existing HologramInstanceBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HologramInstanceBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_hologram_instance_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/hologram_instance_backup_policy alibabacloudstack_hologram_instance_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HologramInstanceBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HologramInstanceBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_hologram_instance_backup_policy',
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
    this._dataKeepQuantity = config.dataKeepQuantity;
    this._enabled = config.enabled;
    this._hour = config.hour;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._week = config.week;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_keep_quantity - computed: false, optional: false, required: true
  private _dataKeepQuantity?: number; 
  public get dataKeepQuantity() {
    return this.getNumberAttribute('data_keep_quantity');
  }
  public set dataKeepQuantity(value: number) {
    this._dataKeepQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataKeepQuantityInput() {
    return this._dataKeepQuantity;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // week - computed: false, optional: false, required: true
  private _week?: string[]; 
  public get week() {
    return cdktf.Fn.tolist(this.getListAttribute('week'));
  }
  public set week(value: string[]) {
    this._week = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInput() {
    return this._week;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_keep_quantity: cdktf.numberToTerraform(this._dataKeepQuantity),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._week),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_keep_quantity: {
        value: cdktf.numberToHclTerraform(this._dataKeepQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._week),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
