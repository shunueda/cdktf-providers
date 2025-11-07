// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDoublecloudKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Public connection info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#connection_info DataDoublecloudKafka#connection_info}
  */
  readonly connectionInfo?: DataDoublecloudKafkaConnectionInfo;
  /**
  * Cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#id DataDoublecloudKafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#name DataDoublecloudKafka#name}
  */
  readonly name?: string;
  /**
  * Private connection info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#private_connection_info DataDoublecloudKafka#private_connection_info}
  */
  readonly privateConnectionInfo?: DataDoublecloudKafkaPrivateConnectionInfo;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#project_id DataDoublecloudKafka#project_id}
  */
  readonly projectId: string;
}
export interface DataDoublecloudKafkaConnectionInfo {
  /**
  * String to use in clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#connection_string DataDoublecloudKafka#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Password for the Apache Kafka® user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#password DataDoublecloudKafka#password}
  */
  readonly password?: string;
  /**
  * Apache Kafka® user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#user DataDoublecloudKafka#user}
  */
  readonly user?: string;
}

export function dataDoublecloudKafkaConnectionInfoToTerraform(struct?: DataDoublecloudKafkaConnectionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataDoublecloudKafkaConnectionInfoToHclTerraform(struct?: DataDoublecloudKafkaConnectionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDoublecloudKafkaConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDoublecloudKafkaConnectionInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDoublecloudKafkaConnectionInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionString = undefined;
      this._password = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionString = value.connectionString;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataDoublecloudKafkaPrivateConnectionInfo {
  /**
  * String to use in clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#connection_string DataDoublecloudKafka#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Password for the Apache Kafka® user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#password DataDoublecloudKafka#password}
  */
  readonly password?: string;
  /**
  * Apache Kafka® user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#user DataDoublecloudKafka#user}
  */
  readonly user?: string;
}

export function dataDoublecloudKafkaPrivateConnectionInfoToTerraform(struct?: DataDoublecloudKafkaPrivateConnectionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataDoublecloudKafkaPrivateConnectionInfoToHclTerraform(struct?: DataDoublecloudKafkaPrivateConnectionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDoublecloudKafkaPrivateConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDoublecloudKafkaPrivateConnectionInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDoublecloudKafkaPrivateConnectionInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionString = undefined;
      this._password = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionString = value.connectionString;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka doublecloud_kafka}
*/
export class DataDoublecloudKafka extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDoublecloudKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDoublecloudKafka to import
  * @param importFromId The id of the existing DataDoublecloudKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDoublecloudKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/kafka doublecloud_kafka} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDoublecloudKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: DataDoublecloudKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_kafka',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionInfo.internalValue = config.connectionInfo;
    this._id = config.id;
    this._name = config.name;
    this._privateConnectionInfo.internalValue = config.privateConnectionInfo;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // connection_info - computed: true, optional: true, required: false
  private _connectionInfo = new DataDoublecloudKafkaConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public putConnectionInfo(value: DataDoublecloudKafkaConnectionInfo) {
    this._connectionInfo.internalValue = value;
  }
  public resetConnectionInfo() {
    this._connectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_connection_info - computed: true, optional: true, required: false
  private _privateConnectionInfo = new DataDoublecloudKafkaPrivateConnectionInfoOutputReference(this, "private_connection_info");
  public get privateConnectionInfo() {
    return this._privateConnectionInfo;
  }
  public putPrivateConnectionInfo(value: DataDoublecloudKafkaPrivateConnectionInfo) {
    this._privateConnectionInfo.internalValue = value;
  }
  public resetPrivateConnectionInfo() {
    this._privateConnectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionInfoInput() {
    return this._privateConnectionInfo.internalValue;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_info: dataDoublecloudKafkaConnectionInfoToTerraform(this._connectionInfo.internalValue),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_connection_info: dataDoublecloudKafkaPrivateConnectionInfoToTerraform(this._privateConnectionInfo.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_info: {
        value: dataDoublecloudKafkaConnectionInfoToHclTerraform(this._connectionInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDoublecloudKafkaConnectionInfo",
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
      private_connection_info: {
        value: dataDoublecloudKafkaPrivateConnectionInfoToHclTerraform(this._privateConnectionInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDoublecloudKafkaPrivateConnectionInfo",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
