// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlikafkaSaslAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#acl_operation_type AlikafkaSaslAcl#acl_operation_type}
  */
  readonly aclOperationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#acl_resource_name AlikafkaSaslAcl#acl_resource_name}
  */
  readonly aclResourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#acl_resource_pattern_type AlikafkaSaslAcl#acl_resource_pattern_type}
  */
  readonly aclResourcePatternType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#acl_resource_type AlikafkaSaslAcl#acl_resource_type}
  */
  readonly aclResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#id AlikafkaSaslAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#instance_id AlikafkaSaslAcl#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#username AlikafkaSaslAcl#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl alicloud_alikafka_sasl_acl}
*/
export class AlikafkaSaslAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alikafka_sasl_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlikafkaSaslAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlikafkaSaslAcl to import
  * @param importFromId The id of the existing AlikafkaSaslAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlikafkaSaslAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alikafka_sasl_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_sasl_acl alicloud_alikafka_sasl_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlikafkaSaslAclConfig
  */
  public constructor(scope: Construct, id: string, config: AlikafkaSaslAclConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alikafka_sasl_acl',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclOperationType = config.aclOperationType;
    this._aclResourceName = config.aclResourceName;
    this._aclResourcePatternType = config.aclResourcePatternType;
    this._aclResourceType = config.aclResourceType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_operation_type - computed: false, optional: false, required: true
  private _aclOperationType?: string; 
  public get aclOperationType() {
    return this.getStringAttribute('acl_operation_type');
  }
  public set aclOperationType(value: string) {
    this._aclOperationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclOperationTypeInput() {
    return this._aclOperationType;
  }

  // acl_resource_name - computed: false, optional: false, required: true
  private _aclResourceName?: string; 
  public get aclResourceName() {
    return this.getStringAttribute('acl_resource_name');
  }
  public set aclResourceName(value: string) {
    this._aclResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclResourceNameInput() {
    return this._aclResourceName;
  }

  // acl_resource_pattern_type - computed: false, optional: false, required: true
  private _aclResourcePatternType?: string; 
  public get aclResourcePatternType() {
    return this.getStringAttribute('acl_resource_pattern_type');
  }
  public set aclResourcePatternType(value: string) {
    this._aclResourcePatternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclResourcePatternTypeInput() {
    return this._aclResourcePatternType;
  }

  // acl_resource_type - computed: false, optional: false, required: true
  private _aclResourceType?: string; 
  public get aclResourceType() {
    return this.getStringAttribute('acl_resource_type');
  }
  public set aclResourceType(value: string) {
    this._aclResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclResourceTypeInput() {
    return this._aclResourceType;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_operation_type: cdktf.stringToTerraform(this._aclOperationType),
      acl_resource_name: cdktf.stringToTerraform(this._aclResourceName),
      acl_resource_pattern_type: cdktf.stringToTerraform(this._aclResourcePatternType),
      acl_resource_type: cdktf.stringToTerraform(this._aclResourceType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_operation_type: {
        value: cdktf.stringToHclTerraform(this._aclOperationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_resource_name: {
        value: cdktf.stringToHclTerraform(this._aclResourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_resource_pattern_type: {
        value: cdktf.stringToHclTerraform(this._aclResourcePatternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_resource_type: {
        value: cdktf.stringToHclTerraform(this._aclResourceType),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
