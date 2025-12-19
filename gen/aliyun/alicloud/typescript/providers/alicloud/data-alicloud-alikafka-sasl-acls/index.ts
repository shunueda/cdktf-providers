// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudAlikafkaSaslAclsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#acl_resource_name DataAlicloudAlikafkaSaslAcls#acl_resource_name}
  */
  readonly aclResourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#acl_resource_type DataAlicloudAlikafkaSaslAcls#acl_resource_type}
  */
  readonly aclResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#id DataAlicloudAlikafkaSaslAcls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#instance_id DataAlicloudAlikafkaSaslAcls#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#output_file DataAlicloudAlikafkaSaslAcls#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#username DataAlicloudAlikafkaSaslAcls#username}
  */
  readonly username: string;
}
export interface DataAlicloudAlikafkaSaslAclsAcls {
}

export function dataAlicloudAlikafkaSaslAclsAclsToTerraform(struct?: DataAlicloudAlikafkaSaslAclsAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlikafkaSaslAclsAclsToHclTerraform(struct?: DataAlicloudAlikafkaSaslAclsAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlikafkaSaslAclsAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudAlikafkaSaslAclsAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlikafkaSaslAclsAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_operation_type - computed: true, optional: false, required: false
  public get aclOperationType() {
    return this.getStringAttribute('acl_operation_type');
  }

  // acl_resource_name - computed: true, optional: false, required: false
  public get aclResourceName() {
    return this.getStringAttribute('acl_resource_name');
  }

  // acl_resource_pattern_type - computed: true, optional: false, required: false
  public get aclResourcePatternType() {
    return this.getStringAttribute('acl_resource_pattern_type');
  }

  // acl_resource_type - computed: true, optional: false, required: false
  public get aclResourceType() {
    return this.getStringAttribute('acl_resource_type');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAlicloudAlikafkaSaslAclsAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudAlikafkaSaslAclsAclsOutputReference {
    return new DataAlicloudAlikafkaSaslAclsAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls alicloud_alikafka_sasl_acls}
*/
export class DataAlicloudAlikafkaSaslAcls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alikafka_sasl_acls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudAlikafkaSaslAcls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudAlikafkaSaslAcls to import
  * @param importFromId The id of the existing DataAlicloudAlikafkaSaslAcls that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudAlikafkaSaslAcls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alikafka_sasl_acls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/alikafka_sasl_acls alicloud_alikafka_sasl_acls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudAlikafkaSaslAclsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudAlikafkaSaslAclsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alikafka_sasl_acls',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclResourceName = config.aclResourceName;
    this._aclResourceType = config.aclResourceType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._outputFile = config.outputFile;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // acls - computed: true, optional: false, required: false
  private _acls = new DataAlicloudAlikafkaSaslAclsAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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
      acl_resource_name: cdktf.stringToTerraform(this._aclResourceName),
      acl_resource_type: cdktf.stringToTerraform(this._aclResourceType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_resource_name: {
        value: cdktf.stringToHclTerraform(this._aclResourceName),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
