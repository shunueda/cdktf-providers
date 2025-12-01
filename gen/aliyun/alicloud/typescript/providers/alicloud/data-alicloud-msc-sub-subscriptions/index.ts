// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudMscSubSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions#id DataAlicloudMscSubSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions#output_file DataAlicloudMscSubSubscriptions#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudMscSubSubscriptionsSubscriptions {
}

export function dataAlicloudMscSubSubscriptionsSubscriptionsToTerraform(struct?: DataAlicloudMscSubSubscriptionsSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudMscSubSubscriptionsSubscriptionsToHclTerraform(struct?: DataAlicloudMscSubSubscriptionsSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudMscSubSubscriptionsSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudMscSubSubscriptionsSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudMscSubSubscriptionsSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // contact_ids - computed: true, optional: false, required: false
  public get contactIds() {
    return this.getNumberListAttribute('contact_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_status - computed: true, optional: false, required: false
  public get emailStatus() {
    return this.getNumberAttribute('email_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_id - computed: true, optional: false, required: false
  public get itemId() {
    return this.getStringAttribute('item_id');
  }

  // item_name - computed: true, optional: false, required: false
  public get itemName() {
    return this.getStringAttribute('item_name');
  }

  // pmsg_status - computed: true, optional: false, required: false
  public get pmsgStatus() {
    return this.getNumberAttribute('pmsg_status');
  }

  // sms_status - computed: true, optional: false, required: false
  public get smsStatus() {
    return this.getNumberAttribute('sms_status');
  }

  // tts_status - computed: true, optional: false, required: false
  public get ttsStatus() {
    return this.getNumberAttribute('tts_status');
  }

  // webhook_ids - computed: true, optional: false, required: false
  public get webhookIds() {
    return this.getNumberListAttribute('webhook_ids');
  }

  // webhook_status - computed: true, optional: false, required: false
  public get webhookStatus() {
    return this.getNumberAttribute('webhook_status');
  }
}

export class DataAlicloudMscSubSubscriptionsSubscriptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudMscSubSubscriptionsSubscriptionsOutputReference {
    return new DataAlicloudMscSubSubscriptionsSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions alicloud_msc_sub_subscriptions}
*/
export class DataAlicloudMscSubSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_msc_sub_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudMscSubSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudMscSubSubscriptions to import
  * @param importFromId The id of the existing DataAlicloudMscSubSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudMscSubSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_msc_sub_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/msc_sub_subscriptions alicloud_msc_sub_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudMscSubSubscriptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudMscSubSubscriptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_msc_sub_subscriptions',
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
    this._id = config.id;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subscriptions - computed: true, optional: false, required: false
  private _subscriptions = new DataAlicloudMscSubSubscriptionsSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
