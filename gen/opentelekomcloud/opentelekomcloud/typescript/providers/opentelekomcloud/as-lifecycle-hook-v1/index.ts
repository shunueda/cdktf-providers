// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsLifecycleHookV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}
  */
  readonly defaultResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}
  */
  readonly defaultTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}
  */
  readonly notificationMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}
  */
  readonly notificationTopicUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}
  */
  readonly scalingLifecycleHookName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}
  */
  readonly scalingLifecycleHookType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1}
*/
export class AsLifecycleHookV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_as_lifecycle_hook_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsLifecycleHookV1 to import
  * @param importFromId The id of the existing AsLifecycleHookV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsLifecycleHookV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_as_lifecycle_hook_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsLifecycleHookV1Config
  */
  public constructor(scope: Construct, id: string, config: AsLifecycleHookV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_lifecycle_hook_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultResult = config.defaultResult;
    this._defaultTimeout = config.defaultTimeout;
    this._id = config.id;
    this._notificationMetadata = config.notificationMetadata;
    this._notificationTopicUrn = config.notificationTopicUrn;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingLifecycleHookName = config.scalingLifecycleHookName;
    this._scalingLifecycleHookType = config.scalingLifecycleHookType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_result - computed: false, optional: true, required: false
  private _defaultResult?: string; 
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string) {
    this._defaultResult = value;
  }
  public resetDefaultResult() {
    this._defaultResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult;
  }

  // default_timeout - computed: false, optional: true, required: false
  private _defaultTimeout?: number; 
  public get defaultTimeout() {
    return this.getNumberAttribute('default_timeout');
  }
  public set defaultTimeout(value: number) {
    this._defaultTimeout = value;
  }
  public resetDefaultTimeout() {
    this._defaultTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeoutInput() {
    return this._defaultTimeout;
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

  // notification_metadata - computed: false, optional: true, required: false
  private _notificationMetadata?: string; 
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }
  public set notificationMetadata(value: string) {
    this._notificationMetadata = value;
  }
  public resetNotificationMetadata() {
    this._notificationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMetadataInput() {
    return this._notificationMetadata;
  }

  // notification_topic_name - computed: true, optional: false, required: false
  public get notificationTopicName() {
    return this.getStringAttribute('notification_topic_name');
  }

  // notification_topic_urn - computed: false, optional: false, required: true
  private _notificationTopicUrn?: string; 
  public get notificationTopicUrn() {
    return this.getStringAttribute('notification_topic_urn');
  }
  public set notificationTopicUrn(value: string) {
    this._notificationTopicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicUrnInput() {
    return this._notificationTopicUrn;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // scaling_lifecycle_hook_name - computed: false, optional: false, required: true
  private _scalingLifecycleHookName?: string; 
  public get scalingLifecycleHookName() {
    return this.getStringAttribute('scaling_lifecycle_hook_name');
  }
  public set scalingLifecycleHookName(value: string) {
    this._scalingLifecycleHookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingLifecycleHookNameInput() {
    return this._scalingLifecycleHookName;
  }

  // scaling_lifecycle_hook_type - computed: false, optional: false, required: true
  private _scalingLifecycleHookType?: string; 
  public get scalingLifecycleHookType() {
    return this.getStringAttribute('scaling_lifecycle_hook_type');
  }
  public set scalingLifecycleHookType(value: string) {
    this._scalingLifecycleHookType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingLifecycleHookTypeInput() {
    return this._scalingLifecycleHookType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_result: cdktf.stringToTerraform(this._defaultResult),
      default_timeout: cdktf.numberToTerraform(this._defaultTimeout),
      id: cdktf.stringToTerraform(this._id),
      notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
      notification_topic_urn: cdktf.stringToTerraform(this._notificationTopicUrn),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_lifecycle_hook_name: cdktf.stringToTerraform(this._scalingLifecycleHookName),
      scaling_lifecycle_hook_type: cdktf.stringToTerraform(this._scalingLifecycleHookType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_result: {
        value: cdktf.stringToHclTerraform(this._defaultResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_timeout: {
        value: cdktf.numberToHclTerraform(this._defaultTimeout),
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
      notification_metadata: {
        value: cdktf.stringToHclTerraform(this._notificationMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_urn: {
        value: cdktf.stringToHclTerraform(this._notificationTopicUrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_lifecycle_hook_name: {
        value: cdktf.stringToHclTerraform(this._scalingLifecycleHookName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_lifecycle_hook_type: {
        value: cdktf.stringToHclTerraform(this._scalingLifecycleHookType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
