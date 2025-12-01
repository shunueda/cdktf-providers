// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbDbInstanceIpArrayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#db_instance_id GpdbDbInstanceIpArray#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#db_instance_ip_array_attribute GpdbDbInstanceIpArray#db_instance_ip_array_attribute}
  */
  readonly dbInstanceIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#db_instance_ip_array_name GpdbDbInstanceIpArray#db_instance_ip_array_name}
  */
  readonly dbInstanceIpArrayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#id GpdbDbInstanceIpArray#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#modify_mode GpdbDbInstanceIpArray#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#security_ip_list GpdbDbInstanceIpArray#security_ip_list}
  */
  readonly securityIpList: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#timeouts GpdbDbInstanceIpArray#timeouts}
  */
  readonly timeouts?: GpdbDbInstanceIpArrayTimeouts;
}
export interface GpdbDbInstanceIpArrayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#create GpdbDbInstanceIpArray#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#delete GpdbDbInstanceIpArray#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#update GpdbDbInstanceIpArray#update}
  */
  readonly update?: string;
}

export function gpdbDbInstanceIpArrayTimeoutsToTerraform(struct?: GpdbDbInstanceIpArrayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbDbInstanceIpArrayTimeoutsToHclTerraform(struct?: GpdbDbInstanceIpArrayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstanceIpArrayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbDbInstanceIpArrayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstanceIpArrayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array alicloud_gpdb_db_instance_ip_array}
*/
export class GpdbDbInstanceIpArray extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_db_instance_ip_array";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbDbInstanceIpArray resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbDbInstanceIpArray to import
  * @param importFromId The id of the existing GpdbDbInstanceIpArray that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbDbInstanceIpArray to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_db_instance_ip_array", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/gpdb_db_instance_ip_array alicloud_gpdb_db_instance_ip_array} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbDbInstanceIpArrayConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbDbInstanceIpArrayConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_db_instance_ip_array',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._dbInstanceIpArrayAttribute = config.dbInstanceIpArrayAttribute;
    this._dbInstanceIpArrayName = config.dbInstanceIpArrayName;
    this._id = config.id;
    this._modifyMode = config.modifyMode;
    this._securityIpList = config.securityIpList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // db_instance_ip_array_attribute - computed: false, optional: true, required: false
  private _dbInstanceIpArrayAttribute?: string; 
  public get dbInstanceIpArrayAttribute() {
    return this.getStringAttribute('db_instance_ip_array_attribute');
  }
  public set dbInstanceIpArrayAttribute(value: string) {
    this._dbInstanceIpArrayAttribute = value;
  }
  public resetDbInstanceIpArrayAttribute() {
    this._dbInstanceIpArrayAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayAttributeInput() {
    return this._dbInstanceIpArrayAttribute;
  }

  // db_instance_ip_array_name - computed: false, optional: false, required: true
  private _dbInstanceIpArrayName?: string; 
  public get dbInstanceIpArrayName() {
    return this.getStringAttribute('db_instance_ip_array_name');
  }
  public set dbInstanceIpArrayName(value: string) {
    this._dbInstanceIpArrayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayNameInput() {
    return this._dbInstanceIpArrayName;
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

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: string; 
  public get modifyMode() {
    return this.getStringAttribute('modify_mode');
  }
  public set modifyMode(value: string) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // security_ip_list - computed: false, optional: false, required: true
  private _securityIpList?: string[]; 
  public get securityIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ip_list'));
  }
  public set securityIpList(value: string[]) {
    this._securityIpList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbDbInstanceIpArrayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbDbInstanceIpArrayTimeouts) {
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
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      db_instance_ip_array_attribute: cdktf.stringToTerraform(this._dbInstanceIpArrayAttribute),
      db_instance_ip_array_name: cdktf.stringToTerraform(this._dbInstanceIpArrayName),
      id: cdktf.stringToTerraform(this._id),
      modify_mode: cdktf.stringToTerraform(this._modifyMode),
      security_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIpList),
      timeouts: gpdbDbInstanceIpArrayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array_attribute: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array_name: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayName),
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
      modify_mode: {
        value: cdktf.stringToHclTerraform(this._modifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: gpdbDbInstanceIpArrayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbDbInstanceIpArrayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
