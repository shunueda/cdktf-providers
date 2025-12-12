// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMessageQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The [access key](https://yandex.cloud/docs/iam/operations/sa/create-access-key) to use when applying changes. If omitted, `ymq_access_key` specified in provider config is used. For more information see [documentation](https://yandex.cloud/docs/message-queue/quickstart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#access_key DataYandexMessageQueue#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#id DataYandexMessageQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Queue name. The maximum length is 80 characters. You can use numbers, letters, underscores, and hyphens in the name. The name of a FIFO queue must end with the `.fifo` suffix. If not specified, random name will be generated. Conflicts with `name_prefix`. For more information see [documentation](https://yandex.cloud/docs/message-queue/api-ref/queue/CreateQueue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#name DataYandexMessageQueue#name}
  */
  readonly name: string;
  /**
  * ID of the region where the message queue is located at. The default is 'ru-central1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#region_id DataYandexMessageQueue#region_id}
  */
  readonly regionId?: string;
  /**
  * The [secret key](https://yandex.cloud/docs/iam/operations/sa/create-access-key) to use when applying changes. If omitted, `ymq_secret_key` specified in provider config is used. For more information see [documentation](https://yandex.cloud/docs/message-queue/quickstart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#secret_key DataYandexMessageQueue#secret_key}
  */
  readonly secretKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue yandex_message_queue}
*/
export class DataYandexMessageQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_message_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMessageQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMessageQueue to import
  * @param importFromId The id of the existing DataYandexMessageQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMessageQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_message_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/message_queue yandex_message_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMessageQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMessageQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_message_queue',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._id = config.id;
    this._name = config.name;
    this._regionId = config.regionId;
    this._secretKey = config.secretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      secret_key: cdktf.stringToTerraform(this._secretKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
