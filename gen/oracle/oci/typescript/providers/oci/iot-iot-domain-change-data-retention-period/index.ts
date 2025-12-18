// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotIotDomainChangeDataRetentionPeriodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#data_retention_period_in_days IotIotDomainChangeDataRetentionPeriod#data_retention_period_in_days}
  */
  readonly dataRetentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#id IotIotDomainChangeDataRetentionPeriod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#iot_domain_id IotIotDomainChangeDataRetentionPeriod#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#type IotIotDomainChangeDataRetentionPeriod#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#timeouts IotIotDomainChangeDataRetentionPeriod#timeouts}
  */
  readonly timeouts?: IotIotDomainChangeDataRetentionPeriodTimeouts;
}
export interface IotIotDomainChangeDataRetentionPeriodTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#create IotIotDomainChangeDataRetentionPeriod#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#delete IotIotDomainChangeDataRetentionPeriod#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#update IotIotDomainChangeDataRetentionPeriod#update}
  */
  readonly update?: string;
}

export function iotIotDomainChangeDataRetentionPeriodTimeoutsToTerraform(struct?: IotIotDomainChangeDataRetentionPeriodTimeouts | cdktf.IResolvable): any {
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


export function iotIotDomainChangeDataRetentionPeriodTimeoutsToHclTerraform(struct?: IotIotDomainChangeDataRetentionPeriodTimeouts | cdktf.IResolvable): any {
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

export class IotIotDomainChangeDataRetentionPeriodTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotIotDomainChangeDataRetentionPeriodTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotIotDomainChangeDataRetentionPeriodTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period oci_iot_iot_domain_change_data_retention_period}
*/
export class IotIotDomainChangeDataRetentionPeriod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_iot_domain_change_data_retention_period";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotIotDomainChangeDataRetentionPeriod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotIotDomainChangeDataRetentionPeriod to import
  * @param importFromId The id of the existing IotIotDomainChangeDataRetentionPeriod that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotIotDomainChangeDataRetentionPeriod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_iot_domain_change_data_retention_period", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_iot_domain_change_data_retention_period oci_iot_iot_domain_change_data_retention_period} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotIotDomainChangeDataRetentionPeriodConfig
  */
  public constructor(scope: Construct, id: string, config: IotIotDomainChangeDataRetentionPeriodConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_iot_domain_change_data_retention_period',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataRetentionPeriodInDays = config.dataRetentionPeriodInDays;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention_period_in_days - computed: false, optional: false, required: true
  private _dataRetentionPeriodInDays?: number; 
  public get dataRetentionPeriodInDays() {
    return this.getNumberAttribute('data_retention_period_in_days');
  }
  public set dataRetentionPeriodInDays(value: number) {
    this._dataRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionPeriodInDaysInput() {
    return this._dataRetentionPeriodInDays;
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

  // iot_domain_id - computed: false, optional: false, required: true
  private _iotDomainId?: string; 
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }
  public set iotDomainId(value: string) {
    this._iotDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainIdInput() {
    return this._iotDomainId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotIotDomainChangeDataRetentionPeriodTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotIotDomainChangeDataRetentionPeriodTimeouts) {
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
      data_retention_period_in_days: cdktf.numberToTerraform(this._dataRetentionPeriodInDays),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: iotIotDomainChangeDataRetentionPeriodTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionPeriodInDays),
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
      iot_domain_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iotIotDomainChangeDataRetentionPeriodTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotIotDomainChangeDataRetentionPeriodTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
