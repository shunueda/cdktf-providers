// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique Clumio assigned identifier for the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties#bucket_id S3BucketProperties#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Determines if continuous backup is enabled for the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties#event_bridge_enabled S3BucketProperties#event_bridge_enabled}
  */
  readonly eventBridgeEnabled: boolean | cdktf.IResolvable;
  /**
  * If true, tries to disable EventBridge notification for the given bucket. This may override the existing bucket notification configuration in the AWS account. Defaults to true if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties#event_bridge_notification_disabled S3BucketProperties#event_bridge_notification_disabled}
  */
  readonly eventBridgeNotificationDisabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties clumio_s3_bucket_properties}
*/
export class S3BucketProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_s3_bucket_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketProperties to import
  * @param importFromId The id of the existing S3BucketProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_s3_bucket_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/s3_bucket_properties clumio_s3_bucket_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_s3_bucket_properties',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._eventBridgeEnabled = config.eventBridgeEnabled;
    this._eventBridgeNotificationDisabled = config.eventBridgeNotificationDisabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // event_bridge_enabled - computed: false, optional: false, required: true
  private _eventBridgeEnabled?: boolean | cdktf.IResolvable; 
  public get eventBridgeEnabled() {
    return this.getBooleanAttribute('event_bridge_enabled');
  }
  public set eventBridgeEnabled(value: boolean | cdktf.IResolvable) {
    this._eventBridgeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeEnabledInput() {
    return this._eventBridgeEnabled;
  }

  // event_bridge_notification_disabled - computed: false, optional: true, required: false
  private _eventBridgeNotificationDisabled?: boolean | cdktf.IResolvable; 
  public get eventBridgeNotificationDisabled() {
    return this.getBooleanAttribute('event_bridge_notification_disabled');
  }
  public set eventBridgeNotificationDisabled(value: boolean | cdktf.IResolvable) {
    this._eventBridgeNotificationDisabled = value;
  }
  public resetEventBridgeNotificationDisabled() {
    this._eventBridgeNotificationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeNotificationDisabledInput() {
    return this._eventBridgeNotificationDisabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      event_bridge_enabled: cdktf.booleanToTerraform(this._eventBridgeEnabled),
      event_bridge_notification_disabled: cdktf.booleanToTerraform(this._eventBridgeNotificationDisabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bridge_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventBridgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bridge_notification_disabled: {
        value: cdktf.booleanToHclTerraform(this._eventBridgeNotificationDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
