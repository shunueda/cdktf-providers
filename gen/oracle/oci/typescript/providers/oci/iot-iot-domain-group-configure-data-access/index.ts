// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotIotDomainGroupConfigureDataAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#db_allow_listed_vcn_ids IotIotDomainGroupConfigureDataAccess#db_allow_listed_vcn_ids}
  */
  readonly dbAllowListedVcnIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#id IotIotDomainGroupConfigureDataAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#iot_domain_group_id IotIotDomainGroupConfigureDataAccess#iot_domain_group_id}
  */
  readonly iotDomainGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#timeouts IotIotDomainGroupConfigureDataAccess#timeouts}
  */
  readonly timeouts?: IotIotDomainGroupConfigureDataAccessTimeouts;
}
export interface IotIotDomainGroupConfigureDataAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#create IotIotDomainGroupConfigureDataAccess#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#delete IotIotDomainGroupConfigureDataAccess#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#update IotIotDomainGroupConfigureDataAccess#update}
  */
  readonly update?: string;
}

export function iotIotDomainGroupConfigureDataAccessTimeoutsToTerraform(struct?: IotIotDomainGroupConfigureDataAccessTimeouts | cdktf.IResolvable): any {
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


export function iotIotDomainGroupConfigureDataAccessTimeoutsToHclTerraform(struct?: IotIotDomainGroupConfigureDataAccessTimeouts | cdktf.IResolvable): any {
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

export class IotIotDomainGroupConfigureDataAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotIotDomainGroupConfigureDataAccessTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotIotDomainGroupConfigureDataAccessTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access oci_iot_iot_domain_group_configure_data_access}
*/
export class IotIotDomainGroupConfigureDataAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_iot_domain_group_configure_data_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotIotDomainGroupConfigureDataAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotIotDomainGroupConfigureDataAccess to import
  * @param importFromId The id of the existing IotIotDomainGroupConfigureDataAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotIotDomainGroupConfigureDataAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_iot_domain_group_configure_data_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/iot_iot_domain_group_configure_data_access oci_iot_iot_domain_group_configure_data_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotIotDomainGroupConfigureDataAccessConfig
  */
  public constructor(scope: Construct, id: string, config: IotIotDomainGroupConfigureDataAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_iot_domain_group_configure_data_access',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbAllowListedVcnIds = config.dbAllowListedVcnIds;
    this._id = config.id;
    this._iotDomainGroupId = config.iotDomainGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_allow_listed_vcn_ids - computed: false, optional: false, required: true
  private _dbAllowListedVcnIds?: string[]; 
  public get dbAllowListedVcnIds() {
    return this.getListAttribute('db_allow_listed_vcn_ids');
  }
  public set dbAllowListedVcnIds(value: string[]) {
    this._dbAllowListedVcnIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAllowListedVcnIdsInput() {
    return this._dbAllowListedVcnIds;
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

  // iot_domain_group_id - computed: false, optional: false, required: true
  private _iotDomainGroupId?: string; 
  public get iotDomainGroupId() {
    return this.getStringAttribute('iot_domain_group_id');
  }
  public set iotDomainGroupId(value: string) {
    this._iotDomainGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainGroupIdInput() {
    return this._iotDomainGroupId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotIotDomainGroupConfigureDataAccessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotIotDomainGroupConfigureDataAccessTimeouts) {
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
      db_allow_listed_vcn_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbAllowListedVcnIds),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_group_id: cdktf.stringToTerraform(this._iotDomainGroupId),
      timeouts: iotIotDomainGroupConfigureDataAccessTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_allow_listed_vcn_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbAllowListedVcnIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iot_domain_group_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iotIotDomainGroupConfigureDataAccessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotIotDomainGroupConfigureDataAccessTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
