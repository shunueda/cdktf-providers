// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcaplusClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the TcaplusDB cluster. Name length should be between 1 and 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#cluster_name TcaplusCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#id TcaplusCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDL type of the TcaplusDB cluster. Valid values: `PROTO` and `TDR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#idl_type TcaplusCluster#idl_type}
  */
  readonly idlType: string;
  /**
  * Expiration time of old password after password update, unit: second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#old_password_expire_last TcaplusCluster#old_password_expire_last}
  */
  readonly oldPasswordExpireLast?: number;
  /**
  * Password of the TcaplusDB cluster. Password length should be between 12 and 16. The password must be a *mix* of uppercase letters (A-Z), lowercase *letters* (a-z) and *numbers* (0-9).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#password TcaplusCluster#password}
  */
  readonly password: string;
  /**
  * Subnet id of the TcaplusDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#subnet_id TcaplusCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC id of the TcaplusDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#vpc_id TcaplusCluster#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster tencentcloud_tcaplus_cluster}
*/
export class TcaplusCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcaplus_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcaplusCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcaplusCluster to import
  * @param importFromId The id of the existing TcaplusCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcaplusCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcaplus_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcaplus_cluster tencentcloud_tcaplus_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcaplusClusterConfig
  */
  public constructor(scope: Construct, id: string, config: TcaplusClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcaplus_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._idlType = config.idlType;
    this._oldPasswordExpireLast = config.oldPasswordExpireLast;
    this._password = config.password;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access_id - computed: true, optional: false, required: false
  public get apiAccessId() {
    return this.getStringAttribute('api_access_id');
  }

  // api_access_ip - computed: true, optional: false, required: false
  public get apiAccessIp() {
    return this.getStringAttribute('api_access_ip');
  }

  // api_access_port - computed: true, optional: false, required: false
  public get apiAccessPort() {
    return this.getNumberAttribute('api_access_port');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // idl_type - computed: false, optional: false, required: true
  private _idlType?: string; 
  public get idlType() {
    return this.getStringAttribute('idl_type');
  }
  public set idlType(value: string) {
    this._idlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idlTypeInput() {
    return this._idlType;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // old_password_expire_last - computed: false, optional: true, required: false
  private _oldPasswordExpireLast?: number; 
  public get oldPasswordExpireLast() {
    return this.getNumberAttribute('old_password_expire_last');
  }
  public set oldPasswordExpireLast(value: number) {
    this._oldPasswordExpireLast = value;
  }
  public resetOldPasswordExpireLast() {
    this._oldPasswordExpireLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordExpireLastInput() {
    return this._oldPasswordExpireLast;
  }

  // old_password_expire_time - computed: true, optional: false, required: false
  public get oldPasswordExpireTime() {
    return this.getStringAttribute('old_password_expire_time');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_status - computed: true, optional: false, required: false
  public get passwordStatus() {
    return this.getStringAttribute('password_status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      idl_type: cdktf.stringToTerraform(this._idlType),
      old_password_expire_last: cdktf.numberToTerraform(this._oldPasswordExpireLast),
      password: cdktf.stringToTerraform(this._password),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      idl_type: {
        value: cdktf.stringToHclTerraform(this._idlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password_expire_last: {
        value: cdktf.numberToHclTerraform(this._oldPasswordExpireLast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
