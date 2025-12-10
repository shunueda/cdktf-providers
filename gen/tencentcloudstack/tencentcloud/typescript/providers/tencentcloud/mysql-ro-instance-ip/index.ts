// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlRoInstanceIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip#id MysqlRoInstanceIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Read-only instance ID, in the format: cdbro-3i70uj0k, which is the same as the read-only instance ID displayed on the cloud database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip#instance_id MysqlRoInstanceIp#instance_id}
  */
  readonly instanceId: string;
  /**
  * Subnet descriptor, for example: subnet-1typ0s7d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip#uniq_subnet_id MysqlRoInstanceIp#uniq_subnet_id}
  */
  readonly uniqSubnetId?: string;
  /**
  * vpc descriptor, for example: vpc-a23yt67j, if this field is passed, UniqSubnetId must be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip#uniq_vpc_id MysqlRoInstanceIp#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip tencentcloud_mysql_ro_instance_ip}
*/
export class MysqlRoInstanceIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_ro_instance_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlRoInstanceIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlRoInstanceIp to import
  * @param importFromId The id of the existing MysqlRoInstanceIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlRoInstanceIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_ro_instance_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mysql_ro_instance_ip tencentcloud_mysql_ro_instance_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlRoInstanceIpConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlRoInstanceIpConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_ro_instance_ip',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._instanceId = config.instanceId;
    this._uniqSubnetId = config.uniqSubnetId;
    this._uniqVpcId = config.uniqVpcId;
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

  // ro_vip - computed: true, optional: false, required: false
  public get roVip() {
    return this.getStringAttribute('ro_vip');
  }

  // ro_vport - computed: true, optional: false, required: false
  public get roVport() {
    return this.getNumberAttribute('ro_vport');
  }

  // uniq_subnet_id - computed: false, optional: true, required: false
  private _uniqSubnetId?: string; 
  public get uniqSubnetId() {
    return this.getStringAttribute('uniq_subnet_id');
  }
  public set uniqSubnetId(value: string) {
    this._uniqSubnetId = value;
  }
  public resetUniqSubnetId() {
    this._uniqSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqSubnetIdInput() {
    return this._uniqSubnetId;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      uniq_subnet_id: cdktf.stringToTerraform(this._uniqSubnetId),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniq_subnet_id: {
        value: cdktf.stringToHclTerraform(this._uniqSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniq_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
