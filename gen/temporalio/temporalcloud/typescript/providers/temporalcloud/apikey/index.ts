// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApikeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#description Apikey#description}
  */
  readonly description?: string;
  /**
  * Whether the API key is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#disabled Apikey#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The display name for the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#display_name Apikey#display_name}
  */
  readonly displayName: string;
  /**
  * The expiry time for the API key in ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#expiry_time Apikey#expiry_time}
  */
  readonly expiryTime: string;
  /**
  * The ID of the owner to create the API key for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#owner_id Apikey#owner_id}
  */
  readonly ownerId: string;
  /**
  * The type of the owner to create the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#owner_type Apikey#owner_type}
  */
  readonly ownerType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#timeouts Apikey#timeouts}
  */
  readonly timeouts?: ApikeyTimeouts;
}
export interface ApikeyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#create Apikey#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#delete Apikey#delete}
  */
  readonly delete?: string;
}

export function apikeyTimeoutsToTerraform(struct?: ApikeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apikeyTimeoutsToHclTerraform(struct?: ApikeyTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApikeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApikeyTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApikeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey temporalcloud_apikey}
*/
export class Apikey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_apikey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apikey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apikey to import
  * @param importFromId The id of the existing Apikey that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apikey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_apikey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/apikey temporalcloud_apikey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApikeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApikeyConfig) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_apikey',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._expiryTime = config.expiryTime;
    this._ownerId = config.ownerId;
    this._ownerType = config.ownerType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expiry_time - computed: false, optional: false, required: true
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApikeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApikeyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      timeouts: apikeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_type: {
        value: cdktf.stringToHclTerraform(this._ownerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apikeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApikeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
