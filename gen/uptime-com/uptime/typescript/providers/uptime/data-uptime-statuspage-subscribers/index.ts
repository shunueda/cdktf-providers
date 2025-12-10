// https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/statuspage_subscribers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeStatuspageSubscribersConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the status page to retrieve subscribers for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/statuspage_subscribers#statuspage_id DataUptimeStatuspageSubscribers#statuspage_id}
  */
  readonly statuspageId: number;
}
export interface DataUptimeStatuspageSubscribersSubscribers {
}

export function dataUptimeStatuspageSubscribersSubscribersToTerraform(struct?: DataUptimeStatuspageSubscribersSubscribers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeStatuspageSubscribersSubscribersToHclTerraform(struct?: DataUptimeStatuspageSubscribersSubscribers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeStatuspageSubscribersSubscribersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeStatuspageSubscribersSubscribers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeStatuspageSubscribersSubscribers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // force_validation_sms - computed: true, optional: false, required: false
  public get forceValidationSms() {
    return this.getBooleanAttribute('force_validation_sms');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataUptimeStatuspageSubscribersSubscribersList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeStatuspageSubscribersSubscribersOutputReference {
    return new DataUptimeStatuspageSubscribersSubscribersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/statuspage_subscribers uptime_statuspage_subscribers}
*/
export class DataUptimeStatuspageSubscribers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_subscribers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeStatuspageSubscribers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeStatuspageSubscribers to import
  * @param importFromId The id of the existing DataUptimeStatuspageSubscribers that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/statuspage_subscribers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeStatuspageSubscribers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_subscribers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/statuspage_subscribers uptime_statuspage_subscribers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeStatuspageSubscribersConfig
  */
  public constructor(scope: Construct, id: string, config: DataUptimeStatuspageSubscribersConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_subscribers',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.21.0',
        providerVersionConstraint: '2.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // subscribers - computed: true, optional: false, required: false
  private _subscribers = new DataUptimeStatuspageSubscribersSubscribersList(this, "subscribers", false);
  public get subscribers() {
    return this._subscribers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
