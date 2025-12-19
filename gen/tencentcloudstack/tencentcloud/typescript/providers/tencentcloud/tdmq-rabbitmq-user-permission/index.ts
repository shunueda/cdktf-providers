// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRabbitmqUserPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure permission regexp, controls which resources can be declared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#config_regexp TdmqRabbitmqUserPermission#config_regexp}
  */
  readonly configRegexp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#id TdmqRabbitmqUserPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#instance_id TdmqRabbitmqUserPermission#instance_id}
  */
  readonly instanceId: string;
  /**
  * Read permission regexp, controls which resources can be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#read_regexp TdmqRabbitmqUserPermission#read_regexp}
  */
  readonly readRegexp: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#user TdmqRabbitmqUserPermission#user}
  */
  readonly user: string;
  /**
  * VirtualHost name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#virtual_host TdmqRabbitmqUserPermission#virtual_host}
  */
  readonly virtualHost: string;
  /**
  * Write permission regexp, controls which resources can be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#write_regexp TdmqRabbitmqUserPermission#write_regexp}
  */
  readonly writeRegexp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission tencentcloud_tdmq_rabbitmq_user_permission}
*/
export class TdmqRabbitmqUserPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rabbitmq_user_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRabbitmqUserPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRabbitmqUserPermission to import
  * @param importFromId The id of the existing TdmqRabbitmqUserPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRabbitmqUserPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rabbitmq_user_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/tdmq_rabbitmq_user_permission tencentcloud_tdmq_rabbitmq_user_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRabbitmqUserPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRabbitmqUserPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rabbitmq_user_permission',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configRegexp = config.configRegexp;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._readRegexp = config.readRegexp;
    this._user = config.user;
    this._virtualHost = config.virtualHost;
    this._writeRegexp = config.writeRegexp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_regexp - computed: false, optional: false, required: true
  private _configRegexp?: string; 
  public get configRegexp() {
    return this.getStringAttribute('config_regexp');
  }
  public set configRegexp(value: string) {
    this._configRegexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configRegexpInput() {
    return this._configRegexp;
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

  // read_regexp - computed: false, optional: false, required: true
  private _readRegexp?: string; 
  public get readRegexp() {
    return this.getStringAttribute('read_regexp');
  }
  public set readRegexp(value: string) {
    this._readRegexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readRegexpInput() {
    return this._readRegexp;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // virtual_host - computed: false, optional: false, required: true
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // write_regexp - computed: false, optional: false, required: true
  private _writeRegexp?: string; 
  public get writeRegexp() {
    return this.getStringAttribute('write_regexp');
  }
  public set writeRegexp(value: string) {
    this._writeRegexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeRegexpInput() {
    return this._writeRegexp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_regexp: cdktf.stringToTerraform(this._configRegexp),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      read_regexp: cdktf.stringToTerraform(this._readRegexp),
      user: cdktf.stringToTerraform(this._user),
      virtual_host: cdktf.stringToTerraform(this._virtualHost),
      write_regexp: cdktf.stringToTerraform(this._writeRegexp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_regexp: {
        value: cdktf.stringToHclTerraform(this._configRegexp),
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
      read_regexp: {
        value: cdktf.stringToHclTerraform(this._readRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host: {
        value: cdktf.stringToHclTerraform(this._virtualHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_regexp: {
        value: cdktf.stringToHclTerraform(this._writeRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
