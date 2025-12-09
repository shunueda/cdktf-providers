// https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIndykiteApplicationSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of Application Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#app_space_id DataIndykiteApplicationSpace#app_space_id}
  */
  readonly appSpaceId?: string;
  /**
  * Identifier of Customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#customer_id DataIndykiteApplicationSpace#customer_id}
  */
  readonly customerId?: string;
  /**
  * Your own description of the resource. Must be less than or equal to 65000 UTF-8 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#description DataIndykiteApplicationSpace#description}
  */
  readonly description?: string;
  /**
  * The display name for the instance. Can be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#display_name DataIndykiteApplicationSpace#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#id DataIndykiteApplicationSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#name DataIndykiteApplicationSpace#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#timeouts DataIndykiteApplicationSpace#timeouts}
  */
  readonly timeouts?: DataIndykiteApplicationSpaceTimeouts;
}
export interface DataIndykiteApplicationSpaceDbConnection {
}

export function dataIndykiteApplicationSpaceDbConnectionToTerraform(struct?: DataIndykiteApplicationSpaceDbConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIndykiteApplicationSpaceDbConnectionToHclTerraform(struct?: DataIndykiteApplicationSpaceDbConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIndykiteApplicationSpaceDbConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIndykiteApplicationSpaceDbConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIndykiteApplicationSpaceDbConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataIndykiteApplicationSpaceDbConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataIndykiteApplicationSpaceDbConnectionOutputReference {
    return new DataIndykiteApplicationSpaceDbConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIndykiteApplicationSpaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#default DataIndykiteApplicationSpace#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#read DataIndykiteApplicationSpace#read}
  */
  readonly read?: string;
}

export function dataIndykiteApplicationSpaceTimeoutsToTerraform(struct?: DataIndykiteApplicationSpaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataIndykiteApplicationSpaceTimeoutsToHclTerraform(struct?: DataIndykiteApplicationSpaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIndykiteApplicationSpaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIndykiteApplicationSpaceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIndykiteApplicationSpaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._read = value.read;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space indykite_application_space}
*/
export class DataIndykiteApplicationSpace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_application_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIndykiteApplicationSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIndykiteApplicationSpace to import
  * @param importFromId The id of the existing DataIndykiteApplicationSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIndykiteApplicationSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_application_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_space indykite_application_space} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIndykiteApplicationSpaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIndykiteApplicationSpaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'indykite_application_space',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.29.0',
        providerVersionConstraint: '0.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appSpaceId = config.appSpaceId;
    this._customerId = config.customerId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_space_id - computed: false, optional: true, required: false
  private _appSpaceId?: string; 
  public get appSpaceId() {
    return this.getStringAttribute('app_space_id');
  }
  public set appSpaceId(value: string) {
    this._appSpaceId = value;
  }
  public resetAppSpaceId() {
    this._appSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSpaceIdInput() {
    return this._appSpaceId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // db_connection - computed: true, optional: false, required: false
  private _dbConnection = new DataIndykiteApplicationSpaceDbConnectionList(this, "db_connection", false);
  public get dbConnection() {
    return this._dbConnection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ikg_size - computed: true, optional: false, required: false
  public get ikgSize() {
    return this.getStringAttribute('ikg_size');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_region - computed: true, optional: false, required: false
  public get replicaRegion() {
    return this.getStringAttribute('replica_region');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIndykiteApplicationSpaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIndykiteApplicationSpaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_space_id: cdktf.stringToTerraform(this._appSpaceId),
      customer_id: cdktf.stringToTerraform(this._customerId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataIndykiteApplicationSpaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_space_id: {
        value: cdktf.stringToHclTerraform(this._appSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataIndykiteApplicationSpaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataIndykiteApplicationSpaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
