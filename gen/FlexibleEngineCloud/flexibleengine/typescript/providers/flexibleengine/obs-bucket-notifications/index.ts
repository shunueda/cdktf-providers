// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObsBucketNotificationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#bucket ObsBucketNotifications#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#id ObsBucketNotifications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#notifications ObsBucketNotifications#notifications}
  */
  readonly notifications?: ObsBucketNotificationsNotifications[] | cdktf.IResolvable;
}
export interface ObsBucketNotificationsNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#events ObsBucketNotifications#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#name ObsBucketNotifications#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#prefix ObsBucketNotifications#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#suffix ObsBucketNotifications#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#topic_urn ObsBucketNotifications#topic_urn}
  */
  readonly topicUrn: string;
}

export function obsBucketNotificationsNotificationsToTerraform(struct?: ObsBucketNotificationsNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    topic_urn: cdktf.stringToTerraform(struct!.topicUrn),
  }
}


export function obsBucketNotificationsNotificationsToHclTerraform(struct?: ObsBucketNotificationsNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_urn: {
      value: cdktf.stringToHclTerraform(struct!.topicUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObsBucketNotificationsNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObsBucketNotificationsNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._topicUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicUrn = this._topicUrn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObsBucketNotificationsNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._topicUrn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._name = value.name;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._topicUrn = value.topicUrn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // name - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn;
  }
}

export class ObsBucketNotificationsNotificationsList extends cdktf.ComplexList {
  public internalValue? : ObsBucketNotificationsNotifications[] | cdktf.IResolvable

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
  public get(index: number): ObsBucketNotificationsNotificationsOutputReference {
    return new ObsBucketNotificationsNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications flexibleengine_obs_bucket_notifications}
*/
export class ObsBucketNotifications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_obs_bucket_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObsBucketNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObsBucketNotifications to import
  * @param importFromId The id of the existing ObsBucketNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObsBucketNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_obs_bucket_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/obs_bucket_notifications flexibleengine_obs_bucket_notifications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObsBucketNotificationsConfig
  */
  public constructor(scope: Construct, id: string, config: ObsBucketNotificationsConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_obs_bucket_notifications',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._notifications.internalValue = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications = new ObsBucketNotificationsNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: ObsBucketNotificationsNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      notifications: cdktf.listMapper(obsBucketNotificationsNotificationsToTerraform, true)(this._notifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      notifications: {
        value: cdktf.listMapperHcl(obsBucketNotificationsNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObsBucketNotificationsNotificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
